export default function GlassCard({ children, className = "", dark = false }) {
  return (
    <div
      className={`${dark ? "glass-dark" : "glass"} rounded-[28px] shadow-gentle ${className}`}
    >
      {children}
    </div>
  );
}
