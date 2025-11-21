import { Globe, Shield, AlertCircle, CheckCircle } from 'lucide-react';

const timelineEvents = [
  {
    time: '14:32',
    type: 'blocked',
    icon: Shield,
    title: 'High-risk domain blocked',
    description: 'Sarah Chen attempted to access marketplace.darkweb.onion',
    color: '#e74c3c',
  },
  {
    time: '14:28',
    type: 'flagged',
    icon: AlertCircle,
    title: 'Medium-risk domain flagged',
    description: 'Marcus Kim accessed torrent-files.net - flagged for review',
    color: '#f5a623',
  },
  {
    time: '14:15',
    type: 'allowed',
    icon: CheckCircle,
    title: 'Safe domain accessed',
    description: 'Emma Davis accessed github.com',
    color: '#42d392',
  },
  {
    time: '14:05',
    type: 'flagged',
    icon: AlertCircle,
    title: 'Suspicious activity detected',
    description: 'Alex Johnson accessed social-media-bot.xyz',
    color: '#f5a623',
  },
];

export function EmployeeTimeline() {
  return (
    <div className="bg-white rounded-xl border border-slate-300 shadow-sm">
      <div className="p-4 border-b border-slate-300">
        <h3 className="text-slate-900">Employee Activity Timeline</h3>
        <p className="text-sm text-slate-500 mt-1">Real-time activity feed</p>
      </div>
      
      <div className="p-4">
        <div className="space-y-4">
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <div key={index} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${event.color}20` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: event.color }} />
                  </div>
                  {index < timelineEvents.length - 1 && (
                    <div className="w-0.5 h-full bg-slate-200 my-1 flex-1" />
                  )}
                </div>
                
                <div className="flex-1 pb-4">
                  <div className="flex items-baseline justify-between mb-1">
                    <h4 className="text-sm text-slate-900">{event.title}</h4>
                    <span className="text-xs text-slate-400">{event.time}</span>
                  </div>
                  <p className="text-sm text-slate-600">{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}