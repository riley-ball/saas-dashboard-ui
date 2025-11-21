import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DashboardPage } from './components/pages/DashboardPage';
import { ActivityLogPage } from './components/pages/ActivityLogPage';
import { WebsiteRisksPage } from './components/pages/WebsiteRisksPage';
import { EmployeesPage } from './components/pages/EmployeesPage';
import { SettingsPage } from './components/pages/SettingsPage';

export default function App() {
  const [activeNav, setActiveNav] = useState('Dashboard');

  const renderPage = () => {
    switch (activeNav) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'Activity Log':
        return <ActivityLogPage />;
      case 'Website Risks':
        return <WebsiteRisksPage />;
      case 'Employees':
        return <EmployeesPage />;
      case 'Settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-[1600px] mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}