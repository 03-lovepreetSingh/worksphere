import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function JobsPage() {
  return (
    <DashboardLayout>
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Find Jobs</h1>
        <p className="text-gray-600">Browse available projects and opportunities.</p>
      </div>
    </DashboardLayout>
  )
}
