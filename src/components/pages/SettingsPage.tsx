import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function SettingsPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-slate-900 mb-2">Settings</h1>
        <p className="text-slate-600">Configure your compliance engine preferences</p>
      </div>
      
      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-white rounded-xl border border-slate-300 shadow-sm">
          <div className="p-4 border-b border-slate-300">
            <h3 className="text-slate-900">General Settings</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Label className="text-slate-900">Real-time Monitoring</Label>
                <p className="text-sm text-slate-500 mt-1">Enable continuous website monitoring</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Label className="text-slate-900">Automatic Blocking</Label>
                <p className="text-sm text-slate-500 mt-1">Automatically block high-risk domains</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Label className="text-slate-900">Email Notifications</Label>
                <p className="text-sm text-slate-500 mt-1">Send alerts for critical events</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
        
        {/* Risk Thresholds */}
        <div className="bg-white rounded-xl border border-slate-300 shadow-sm">
          <div className="p-4 border-b border-slate-300">
            <h3 className="text-slate-900">Risk Thresholds</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <Label className="text-slate-900">High Risk Threshold</Label>
              <Input type="number" defaultValue="85" className="mt-2" />
              <p className="text-sm text-slate-500 mt-1">Score above this value triggers high risk alerts</p>
            </div>
            
            <div>
              <Label className="text-slate-900">Medium Risk Threshold</Label>
              <Input type="number" defaultValue="50" className="mt-2" />
              <p className="text-sm text-slate-500 mt-1">Score above this value triggers medium risk alerts</p>
            </div>
          </div>
        </div>
        
        {/* Notification Preferences */}
        <div className="bg-white rounded-xl border border-slate-300 shadow-sm">
          <div className="p-4 border-b border-slate-300">
            <h3 className="text-slate-900">Notification Preferences</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <Label className="text-slate-900">Admin Email</Label>
              <Input type="email" defaultValue="admin@novastra.com" className="mt-2" />
            </div>
            
            <div>
              <Label className="text-slate-900">Notification Frequency</Label>
              <select className="w-full mt-2 px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option>Real-time</option>
                <option>Hourly Digest</option>
                <option>Daily Digest</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button className="bg-[#3366ff] hover:bg-[#3366ff]/90">Save Changes</Button>
          <Button variant="outline">Reset to Defaults</Button>
        </div>
      </div>
    </>
  );
}
