"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";
import { User, DollarSign, Briefcase } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DashboardPage() {
  // const router = useRouter()

  // useEffect(() => {
  //   // Check if onboarding is complete
  //   const isOnboardingComplete = localStorage.getItem("onboardingComplete");
  //   if (isOnboardingComplete === "true") {
  //     router.push("/dashboard");
  //   }
  // }, [router]);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* My Profile Card */}
        <Link href="/dashboard/profile">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow h-full">
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center justify-between mb-4">
                <User className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600" />
                <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">
                  Incomplete
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                My Profile
              </h3>
              <p className="text-gray-600 text-sm">
                Present your skills and connect with the right projects.
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* My Services Card */}
        <Link href="/dashboard/services">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow h-full">
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                My Services
              </h3>
              <p className="text-gray-600 text-sm">
                Outline your offerings and showcase your expertise.
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* Portfolio Page Card */}
        <Link href="/dashboard/portfolio">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow h-full">
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center justify-between mb-4">
                <Briefcase className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Portfolio Page
              </h3>
              <p className="text-gray-600 text-sm">
                Display your best work and captivate client interest.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Quick Stats - Mobile friendly */}
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-gray-900">0</div>
          <div className="text-sm text-gray-600">Active Projects</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-gray-900">$0</div>
          <div className="text-sm text-gray-600">Total Earnings</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-gray-900">0</div>
          <div className="text-sm text-gray-600">Completed Jobs</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-gray-900">0%</div>
          <div className="text-sm text-gray-600">Profile Complete</div>
        </div>
      </div>
    </DashboardLayout>
  );
}
