import { RecentWebsitesTable } from '../RecentWebsitesTable';
import { RiskBreakdownChart } from '../RiskBreakdownChart';
import { PendingDecisionsList } from '../PendingDecisionsList';
import { EmployeeTimeline } from '../EmployeeTimeline';
import { TotalBlockedCard } from '../TotalBlockedCard';

export function DashboardPage() {
  return (
    <>
      <h1 className="mb-6 text-slate-900">Dashboard Overview</h1>
      
      {/* Key Metrics Section */}
      <div className="mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1">
            <TotalBlockedCard />
          </div>
          <div className="lg:col-span-2">
            <RiskBreakdownChart />
          </div>
        </div>
      </div>
      
      {/* Activity & Decisions Section */}
      <div className="mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <RecentWebsitesTable />
          </div>
          <div className="lg:col-span-1">
            <PendingDecisionsList />
          </div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <div>
        <div className="grid grid-cols-1">
          <EmployeeTimeline />
        </div>
      </div>
    </>
  );
}
