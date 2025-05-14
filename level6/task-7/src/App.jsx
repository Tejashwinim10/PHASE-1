import { ThemeProvider } from './context/ThemeContext';
import ThemeToggler from './components/ThemeToggler';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>
  );
}

export default App;
