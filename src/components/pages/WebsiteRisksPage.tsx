import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { AlertTriangle, Shield } from 'lucide-react';

const risks = [
  { domain: 'marketplace.darkweb.onion', category: 'Dark Web', lastSeen: '2 min ago', attempts: 3, level: 'red' },
  { domain: 'unsecure-payment.biz', category: 'Phishing', lastSeen: '15 min ago', attempts: 1, level: 'red' },
  { domain: 'phishing-site.ru', category: 'Phishing', lastSeen: '42 min ago', attempts: 2, level: 'red' },
  { domain: 'torrent-files.net', category: 'File Sharing', lastSeen: '8 min ago', attempts: 5, level: 'orange' },
  { domain: 'social-media-bot.xyz', category: 'Automation', lastSeen: '22 min ago', attempts: 1, level: 'orange' },
  { domain: 'proxy-bypass.io', category: 'Proxy', lastSeen: '1 hour ago', attempts: 7, level: 'orange' },
];

export function WebsiteRisksPage() {
  const getRiskBadge = (level: string) => {
    switch (level) {
      case 'red':
        return <Badge className="bg-[#e74c3c] hover:bg-[#e74c3c]">High Risk</Badge>;
      case 'orange':
        return <Badge className="bg-[#f5a623] hover:bg-[#f5a623]">Medium Risk</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-slate-900 mb-2">Website Risks</h1>
        <p className="text-slate-600">Domains flagged by the compliance engine</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#e74c3c]/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-[#e74c3c]" />
            </div>
            <div>
              <div className="text-2xl text-slate-900">89</div>
              <div className="text-sm text-slate-500">High Risk Domains</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#f5a623]/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-[#f5a623]" />
            </div>
            <div>
              <div className="text-2xl text-slate-900">312</div>
              <div className="text-sm text-slate-500">Medium Risk Domains</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#42d392]/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#42d392]" />
            </div>
            <div>
              <div className="text-2xl text-slate-900">2,847</div>
              <div className="text-sm text-slate-500">Total Blocked</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl border border-slate-300 shadow-sm">
        <div className="p-4 border-b border-slate-300">
          <h3 className="text-slate-900">Active Threats</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-300">
              <tr>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Domain</th>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Category</th>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Last Seen</th>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Attempts</th>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Risk Level</th>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {risks.map((risk, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 text-sm text-slate-900 font-mono">{risk.domain}</td>
                  <td className="px-4 py-3 text-sm text-slate-700">{risk.category}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{risk.lastSeen}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{risk.attempts}</td>
                  <td className="px-4 py-3">{getRiskBadge(risk.level)}</td>
                  <td className="px-4 py-3">
                    <Button variant="outline" size="sm">View Details</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
