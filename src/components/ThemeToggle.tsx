import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 hover:scale-110 transform"
      aria-label="Alternar tema"
    >
      <div
        className={`w-4 h-4 rounded-full bg-pastel-yellow transform transition-transform duration-300 flex items-center justify-center ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        <span className="text-xs">
          {isDark ? '🌙' : '☀️'}
        </span>
      </div>
    </button>
  )
}

export default ThemeToggle