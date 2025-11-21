export function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-300 flex items-center justify-between px-8">
      <div className="flex items-center gap-3">
        <h2 className="text-slate-900">Novastra NICE</h2>
        <span className="text-slate-500">— Intelligent Compliance Engine</span>
      </div>
      
      <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
        <div className="w-2 h-2 bg-[#42d392] rounded-full animate-pulse" />
        <span className="text-sm text-emerald-700">System Active</span>
      </div>
    </header>
  );
}