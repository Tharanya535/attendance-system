export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white shadow-lg rounded-2xl p-6 border border-gray-100 ${className}`}
    >
      {children}
    </div>
  );
}
