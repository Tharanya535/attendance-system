import React from "react";

export default function EmployeeDashboard() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-blue-100">

      {/* Sidebar */}
      <aside className="w-60 bg-white shadow-xl p-6 space-y-6">
        <h2 className="text-xl font-bold text-blue-700">Menu</h2>

        <nav className="space-y-3 text-gray-700">
          <a href="/employee" className="block p-2 rounded-md hover:bg-blue-50">Dashboard</a>
          <a href="/employee/check" className="block p-2 rounded-md hover:bg-blue-50">Check In / Out</a>
          <a href="/employee/history" className="block p-2 rounded-md hover:bg-blue-50">History</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-6 mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="avatar"
            className="w-20 h-20 rounded-full"
          />

          <div>
            <h3 className="text-2xl font-bold text-gray-900">Welcome, Employee</h3>
            <p className="text-gray-600">Your productivity is tracked every day.</p>
          </div>

          <div className="ml-auto bg-blue-100 px-4 py-2 rounded-xl text-blue-700 font-semibold">
            Active
          </div>
        </div>

        {/* Stats + Graph Row */}
        <div className="grid grid-cols-3 gap-6">

          {/* Today Stats */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Today’s Attendance</h4>

            <div className="space-y-2 text-gray-700">
              <p>Check In: <span className="font-bold">09:15 AM</span></p>
              <p>Check Out: <span className="font-bold text-red-600">Not yet</span></p>
              <p>Status: <span className="font-bold text-green-600">Present</span></p>
            </div>
          </div>

          {/* Productivity */}
          <div className="bg-white shadow-lg rounded-xl p-6 col-span-2">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Productivity Overview</h4>

            <div className="flex items-end justify-between mt-6 h-40">
              {[40, 65, 55, 80, 90, 50, 70].map((value, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-8 bg-blue-500 rounded-md"
                    style={{ height: `${value}%` }}
                  ></div>
                  <span className="text-sm mt-2 text-gray-600">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Right Sidebar Activity */}
      <aside className="w-64 bg-white shadow-xl p-6 space-y-4">
        <h3 className="text-lg font-bold text-blue-700">Timeline</h3>

        {[
          "Logged in at 09:15 AM",
          "Checked Attendance",
          "Viewed Productivity",
          "Lunch break at 1 PM",
        ].map((item, index) => (
          <div key={index} className="p-3 rounded-lg bg-blue-50 text-gray-700 shadow-sm">
            {item}
          </div>
        ))}
      </aside>
    </div>
  );
}
