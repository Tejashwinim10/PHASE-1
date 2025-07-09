import mongoose from 'mongoose';
import axios from 'axios';
import dotenv from 'dotenv';
import cron from 'node-cron';
import Chart from 'cli-chart';

dotenv.config(); 
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ DB Connection Failed:', err));

const weatherSchema = new mongoose.Schema({
  temp: Number,
  humidity: Number,
  description: String,
  timestamp: { type: Date, default: Date.now },
});
const Weather = mongoose.model('Weather', weatherSchema);


const fetchWeather = async () => {
  try {
    const { LOCATION, WEATHER_API_KEY } = process.env;

   
    if (!LOCATION || !WEATHER_API_KEY) {
      console.error('❌ Missing LOCATION or WEATHER_API_KEY in .env');
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${WEATHER_API_KEY}&units=metric`;
    const res = await axios.get(url);

    const { temp, humidity } = res.data.main;
    const description = res.data.weather[0].description;

    const weather = new Weather({ temp, humidity, description });
    await weather.save();

    console.log(`📌 Weather saved: ${temp}°C, ${humidity}% - ${description}`);
  } catch (err) {
    console.error('⚠️ Failed to fetch weather:', err.response?.data?.message || err.message);
  }
};

const getAverageTemperature = async (start, end) => {
  try {
    const records = await Weather.find({
      timestamp: {
        $gte: new Date(start),
        $lte: new Date(end),
      }
    });

    if (records.length === 0) {
      console.log('ℹ️ No records found for the given range.');
      return;
    }

    const total = records.reduce((sum, r) => sum + r.temp, 0);
    const avg = total / records.length;

    console.log(`🌡️ Avg Temp (${start} to ${end}): ${avg.toFixed(2)}°C`);
  } catch (err) {
    console.error('⚠️ Error querying temperature data:', err.message);
  }
};

const showChart = async () => {
  try {
    const data = await Weather.find({}).sort({ timestamp: 1 });

    if (!data.length) {
      console.log('ℹ️ No data to plot.');
      return;
    }

    const chart = new Chart({
      xlabel: 'Entries',
      ylabel: '°C',
      width: 60,
      height: 20,
      direction: 'y',
      lmargin: 10,
    });

    data.forEach(d => chart.addBar(d.temp, 'blue'));
    chart.draw();
  } catch (err) {
    console.error('⚠️ Error drawing chart:', err.message);
  }
};


cron.schedule('0 * * * *', () => {
  console.log('⏰ Scheduled fetch started...');
  fetchWeather();
});


const main = async () => {
  await fetchWeather(); 
  setTimeout(async () => {
    await getAverageTemperature('2025-06-01', '2025-06-11');
    await showChart();
  }, 3000);
};

main();
