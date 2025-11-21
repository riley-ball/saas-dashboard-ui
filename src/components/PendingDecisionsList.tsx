import { Button } from './ui/button';
import { Check, X } from 'lucide-react';

const pendingItems = [
  { domain: 'cloudflare-cdn.app', employee: 'Sarah Chen', reason: 'New subdomain' },
  { domain: 'api.newservice.io', employee: 'Marcus Kim', reason: 'API endpoint' },
  { domain: 'download.tools.dev', employee: 'Emma Davis', reason: 'Developer tool' },
];

export function PendingDecisionsList() {
  return (
    <div className="bg-white rounded-xl border border-slate-300 shadow-sm">
      <div className="p-4 border-b border-slate-300">
        <h3 className="text-slate-900">Pending Decisions</h3>
        <p className="text-sm text-slate-500 mt-1">{pendingItems.length} awaiting review</p>
      </div>
      
      <div className="divide-y divide-slate-100">
        {pendingItems.map((item, index) => (
          <div key={index} className="p-3 hover:bg-slate-50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <div className="text-sm text-slate-900 font-mono mb-1">{item.domain}</div>
                <div className="text-xs text-slate-500">{item.employee}</div>
                <div className="text-xs text-slate-400 mt-1">{item.reason}</div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button size="sm" className="flex-1 bg-[#42d392] hover:bg-[#42d392]/90">
                <Check className="w-4 h-4 mr-1" />
                Allow
              </Button>
              <Button size="sm" variant="outline" className="flex-1 text-[#e74c3c] border-[#e74c3c] hover:bg-[#e74c3c]/10">
                <X className="w-4 h-4 mr-1" />
                Block
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}