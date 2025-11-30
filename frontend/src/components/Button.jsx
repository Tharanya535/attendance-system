export default function Button({ children, onClick, className = "", disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-3 rounded-xl font-medium transition-all 
        bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-pink)] 
        hover:brightness-110 hover:shadow-[0_0_15px_var(--accent-blue)] 
        disabled:bg-gray-500 disabled:cursor-not-allowed
        text-white ${className}`}
    >
      {children}
    </button>
  );
}
