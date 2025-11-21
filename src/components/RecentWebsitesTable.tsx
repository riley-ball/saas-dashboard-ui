import { Badge } from './ui/badge';

const websites = [
  { timestamp: '2025-11-21 14:32', employee: 'Sarah Chen', domain: 'marketplace.darkweb.onion', riskLevel: 'red' },
  { timestamp: '2025-11-21 14:28', employee: 'Marcus Kim', domain: 'torrent-files.net', riskLevel: 'orange' },
  { timestamp: '2025-11-21 14:15', employee: 'Emma Davis', domain: 'github.com', riskLevel: 'green' },
  { timestamp: '2025-11-21 14:12', employee: 'James Wilson', domain: 'stackoverflow.com', riskLevel: 'green' },
  { timestamp: '2025-11-21 14:08', employee: 'Olivia Brown', domain: 'unsecure-payment.biz', riskLevel: 'red' },
];

export function RecentWebsitesTable() {
  const getRiskBadge = (level: string) => {
    switch (level) {
      case 'red':
        return <Badge className="bg-[#e74c3c] hover:bg-[#e74c3c]">High Risk</Badge>;
      case 'orange':
        return <Badge className="bg-[#f5a623] hover:bg-[#f5a623]">Medium</Badge>;
      case 'green':
        return <Badge className="bg-[#42d392] hover:bg-[#42d392]">Safe</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-300 shadow-sm">
      <div className="p-4 border-b border-slate-300">
        <h3 className="text-slate-900">Recent Websites Detected</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-300">
            <tr>
              <th className="text-left px-4 py-2 text-sm text-slate-600">Timestamp</th>
              <th className="text-left px-4 py-2 text-sm text-slate-600">Employee</th>
              <th className="text-left px-4 py-2 text-sm text-slate-600">Domain</th>
              <th className="text-left px-4 py-2 text-sm text-slate-600">Risk Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {websites.map((site, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 text-sm text-slate-600">{site.timestamp}</td>
                <td className="px-4 py-3 text-sm text-slate-900">{site.employee}</td>
                <td className="px-4 py-3 text-sm text-slate-700 font-mono">{site.domain}</td>
                <td className="px-4 py-3">{getRiskBadge(site.riskLevel)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}