import { LayoutDashboard, Activity, AlertTriangle, Users, Settings } from 'lucide-react';

interface SidebarProps {
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Activity Log', icon: Activity },
  { name: 'Website Risks', icon: AlertTriangle },
  { name: 'Employees', icon: Users },
  { name: 'Settings', icon: Settings },
];

export function Sidebar({ activeNav, setActiveNav }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-slate-300 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-slate-300">
        <div className="w-8 h-8 rounded-lg bg-[#3366ff] flex items-center justify-center">
          <span className="text-white text-sm">N</span>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.name;
            
            return (
              <li key={item.name}>
                <button
                  onClick={() => setActiveNav(item.name)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#3366ff]/10 text-[#3366ff]'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}