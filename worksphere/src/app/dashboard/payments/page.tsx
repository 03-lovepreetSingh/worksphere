import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function PaymentsPage() {
  return (
    <DashboardLayout>
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment & Projects</h1>
        <p className="text-gray-600">Manage your earnings and project payments.</p>
      </div>
    </DashboardLayout>
  )
}
