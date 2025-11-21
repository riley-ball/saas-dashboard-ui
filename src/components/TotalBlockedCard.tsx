import { TrendingUp, Shield } from 'lucide-react';

export function TotalBlockedCard() {
  return (
    <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-[#3366ff]/10 flex items-center justify-center">
          <Shield className="w-5 h-5 text-[#3366ff]" />
        </div>
        <div className="flex items-center gap-1 px-2 py-1 bg-emerald-50 rounded-md">
          <TrendingUp className="w-3 h-3 text-emerald-600" />
          <span className="text-xs text-emerald-600">+12%</span>
        </div>
      </div>
      
      <div className="mb-2">
        <div className="text-3xl text-slate-900 mb-1">2,847</div>
        <h3 className="text-slate-900">Total Blocked Domains</h3>
      </div>
      
      <p className="text-sm text-slate-500">
        156 blocked this week
      </p>
      
      <div className="mt-4 pt-4 border-t border-slate-300">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-lg text-slate-900 mb-1">89</div>
            <div className="text-xs text-slate-500">High Risk</div>
          </div>
          <div>
            <div className="text-lg text-slate-900 mb-1">312</div>
            <div className="text-xs text-slate-500">Medium Risk</div>
          </div>
        </div>
      </div>
    </div>
  );
}