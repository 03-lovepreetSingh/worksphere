import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function MessagesPage() {
  return (
    <DashboardLayout>
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Messages</h1>
        <p className="text-gray-600">Communicate with clients and freelancers.</p>
      </div>
    </DashboardLayout>
  )
}
