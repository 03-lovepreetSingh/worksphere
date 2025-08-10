import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Account Settings</h1>
        <p className="text-gray-600">Manage your account preferences and settings.</p>
      </div>
    </DashboardLayout>
  )
}
