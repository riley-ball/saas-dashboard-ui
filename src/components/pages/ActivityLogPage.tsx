import { Badge } from '../ui/badge';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';

const activities = [
  { time: '2025-11-21 14:32:15', employee: 'Sarah Chen', action: 'Blocked', domain: 'marketplace.darkweb.onion', risk: 'red' },
  { time: '2025-11-21 14:28:42', employee: 'Marcus Kim', action: 'Flagged', domain: 'torrent-files.net', risk: 'orange' },
  { time: '2025-11-21 14:15:03', employee: 'Emma Davis', action: 'Allowed', domain: 'github.com', risk: 'green' },
  { time: '2025-11-21 14:12:55', employee: 'James Wilson', action: 'Allowed', domain: 'stackoverflow.com', risk: 'green' },
  { time: '2025-11-21 14:08:20', employee: 'Olivia Brown', action: 'Blocked', domain: 'unsecure-payment.biz', risk: 'red' },
  { time: '2025-11-21 14:05:18', employee: 'Alex Johnson', action: 'Flagged', domain: 'social-media-bot.xyz', risk: 'orange' },
  { time: '2025-11-21 13:58:45', employee: 'Sophie Martinez', action: 'Allowed', domain: 'linkedin.com', risk: 'green' },
  { time: '2025-11-21 13:52:30', employee: 'David Lee', action: 'Allowed', domain: 'notion.so', risk: 'green' },
  { time: '2025-11-21 13:45:12', employee: 'Rachel Green', action: 'Blocked', domain: 'phishing-site.ru', risk: 'red' },
  { time: '2025-11-21 13:38:55', employee: 'Tom Harris', action: 'Allowed', domain: 'slack.com', risk: 'green' },
];

export function ActivityLogPage() {
  const getRiskBadge = (level: string) => {
    switch (level) {
      case 'red':
        return <Badge className="bg-[#e74c3c] hover:bg-[#e74c3c]">High</Badge>;
      case 'orange':
        return <Badge className="bg-[#f5a623] hover:bg-[#f5a623]">Medium</Badge>;
      case 'green':
        return <Badge className="bg-[#42d392] hover:bg-[#42d392]">Safe</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-slate-900">Activity Log</h1>
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input placeholder="Search activities..." className="pl-10" />
        </div>
      </div>
      
      <div className="bg-white rounded-xl border border-slate-300 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-300">
              <tr>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Timestamp</th>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Employee</th>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Action</th>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Domain</th>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Risk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {activities.map((activity, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 text-sm text-slate-600">{activity.time}</td>
                  <td className="px-4 py-3 text-sm text-slate-900">{activity.employee}</td>
                  <td className="px-4 py-3 text-sm text-slate-700">{activity.action}</td>
                  <td className="px-4 py-3 text-sm text-slate-700 font-mono">{activity.domain}</td>
                  <td className="px-4 py-3">{getRiskBadge(activity.risk)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
