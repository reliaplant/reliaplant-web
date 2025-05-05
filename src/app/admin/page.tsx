"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiEdit,
  FiUsers,
  FiSettings,
  FiMail,
  FiBarChart2,
} from "react-icons/fi";

export default function AdminPage() {
  const [greeting] = useState(`Good ${getTimeOfDay()}`);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">{greeting}, Administrator</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Blog Management Card */}
            <Link href="/admin/blog-editor">
              <div className="bg-white overflow-hidden shadow rounded-lg transition-transform hover:scale-105 hover:shadow-md cursor-pointer">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                      <FiEdit className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">
                        Blog Management
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Write, edit, and publish blog posts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* User Management Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition-transform hover:scale-105 hover:shadow-md cursor-pointer">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                    <FiUsers className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">
                      User Management
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Manage user accounts and permissions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition-transform hover:scale-105 hover:shadow-md cursor-pointer">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                    <FiBarChart2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">
                      Analytics
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      View website traffic and performance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Settings Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition-transform hover:scale-105 hover:shadow-md cursor-pointer">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-gray-100 rounded-md p-3">
                    <FiSettings className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">
                      Settings
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Configure site settings and preferences
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Campaign Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition-transform hover:scale-105 hover:shadow-md cursor-pointer">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                    <FiMail className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">
                      Email Campaigns
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Create and manage email marketing campaigns
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour < 12) return "morning";
  if (hour < 18) return "afternoon";
  return "evening";
}
