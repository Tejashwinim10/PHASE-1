import mongoose from 'mongoose';
import RSSParser from 'rss-parser';
import prompt from 'prompt-sync';
import dotenv from 'dotenv';

dotenv.config();
const input = prompt({ sigint: true });
const parser = new RSSParser();


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ MongoDB Error:', err.message);
    process.exit(1);
  });


const articleSchema = new mongoose.Schema({
  title: String,
  link: String,
  pubDate: Date,
  source: String,
  content: String,
  isRead: { type: Boolean, default: false }
});

const Article = mongoose.model('Article', articleSchema);

async function addFeedUrl() {
  const url = input('Enter RSS feed URL: ');
  try {
    const feed = await parser.parseURL(url);
    const source = feed.title;
    let count = 0;

    for (const item of feed.items) {
      const exists = await Article.findOne({ link: item.link });
      if (!exists) {
        await Article.create({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          source,
          content: item.contentSnippet
        });
        count++;
      }
    }
    console.log(`✅ Added ${count} new articles from "${source}"`);
  } catch (err) {
    console.error('❌ Failed to fetch feed:', err.message);
  }
}

async function viewAllArticles() {
  const articles = await Article.find().sort({ pubDate: -1 });
  if (articles.length === 0) {
    console.log('📭 No articles found.');
    return;
  }
  articles.forEach(a => {
    console.log(`- [${a.isRead ? 'Read' : 'Unread'}] ${a.title} (${a.source})\n  ${a.link}\n`);
  });
}

async function searchByKeyword() {
  const keyword = input('Enter keyword to search: ');
  const results = await Article.find({ title: new RegExp(keyword, 'i') });
  if (results.length === 0) {
    console.log('🔍 No matching articles.');
    return;
  }
  results.forEach(a => {
    console.log(`- ${a.title} (${a.source})`);
  });
}

async function filterBySource() {
  const source = input('Enter source name: ');
  const results = await Article.find({ source });
  if (results.length === 0) {
    console.log('❌ No articles from that source.');
    return;
  }
  results.forEach(a => console.log(`- ${a.title}`));
}

async function markReadUnread(read = true) {
  const title = input(`Enter article title to mark as ${read ? 'read' : 'unread'}: `);
  const article = await Article.findOneAndUpdate({ title: new RegExp(title, 'i') }, { isRead: read });
  if (article) {
    console.log(`✅ Marked "${article.title}" as ${read ? 'read' : 'unread'}`);
  } else {
    console.log('❌ Article not found.');
  }
}


async function main() {
  while (true) {
    console.log('\n📡 RSS Feed Aggregator');
    console.log('1. Add RSS Feed URL');
    console.log('2. View All Articles');
    console.log('3. Search by Keyword');
    console.log('4. Filter by Source');
    console.log('5. Mark Article as Read');
    console.log('6. Mark Article as Unread');
    console.log('0. Exit');

    const choice = input('Enter your choice: ');
    switch (choice) {
      case '1': await addFeedUrl(); break;
      case '2': await viewAllArticles(); break;
      case '3': await searchByKeyword(); break;
      case '4': await filterBySource(); break;
      case '5': await markReadUnread(true); break;
      case '6': await markReadUnread(false); break;
      case '0': console.log('👋 Exiting...'); process.exit(0);
      default: console.log('❌ Invalid option');
    }
  }
}

main();
