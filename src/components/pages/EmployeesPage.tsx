import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { User } from 'lucide-react';

const employees = [
  { name: 'Sarah Chen', department: 'Engineering', flaggedSites: 8, blockedSites: 3, status: 'active' },
  { name: 'Marcus Kim', department: 'Marketing', flaggedSites: 5, blockedSites: 2, status: 'active' },
  { name: 'Emma Davis', department: 'Engineering', flaggedSites: 2, blockedSites: 0, status: 'active' },
  { name: 'James Wilson', department: 'Product', flaggedSites: 1, blockedSites: 0, status: 'active' },
  { name: 'Olivia Brown', department: 'Sales', flaggedSites: 12, blockedSites: 5, status: 'review' },
  { name: 'Alex Johnson', department: 'Engineering', flaggedSites: 6, blockedSites: 1, status: 'active' },
  { name: 'Sophie Martinez', department: 'Design', flaggedSites: 3, blockedSites: 1, status: 'active' },
  { name: 'David Lee', department: 'Engineering', flaggedSites: 4, blockedSites: 0, status: 'active' },
];

export function EmployeesPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-slate-900 mb-2">Employees</h1>
        <p className="text-slate-600">Monitor employee web activity and compliance</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-4">
          <div className="text-2xl text-slate-900 mb-1">248</div>
          <div className="text-sm text-slate-500">Total Employees</div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-4">
          <div className="text-2xl text-slate-900 mb-1">245</div>
          <div className="text-sm text-slate-500">Active</div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-4">
          <div className="text-2xl text-[#f5a623] mb-1">3</div>
          <div className="text-sm text-slate-500">Under Review</div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-4">
          <div className="text-2xl text-slate-900 mb-1">41</div>
          <div className="text-sm text-slate-500">Avg. Flagged Sites</div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl border border-slate-300 shadow-sm">
        <div className="p-4 border-b border-slate-300">
          <h3 className="text-slate-900">Employee Activity</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-300">
              <tr>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Employee</th>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Department</th>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Flagged Sites</th>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Blocked Sites</th>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Status</th>
                <th className="text-left px-4 py-3 text-sm text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {employees.map((employee, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                        <User className="w-4 h-4 text-slate-600" />
                      </div>
                      <span className="text-sm text-slate-900">{employee.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">{employee.department}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{employee.flaggedSites}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{employee.blockedSites}</td>
                  <td className="px-4 py-3">
                    {employee.status === 'active' ? (
                      <Badge className="bg-[#42d392] hover:bg-[#42d392]">Active</Badge>
                    ) : (
                      <Badge className="bg-[#f5a623] hover:bg-[#f5a623]">Review</Badge>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <Button variant="outline" size="sm">View Profile</Button>
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
