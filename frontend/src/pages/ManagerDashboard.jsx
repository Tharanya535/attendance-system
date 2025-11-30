import React, { useEffect, useState } from "react";

export default function ManagerDashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/attendance/all")
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-blue-100">

      {/* Sidebar */}
      <aside className="w-60 bg-white shadow-xl p-6 space-y-6">
        <h2 className="text-xl font-bold text-blue-700">Manager Panel</h2>

        <nav className="space-y-3 text-gray-700">
          <a href="/manager" className="block p-2 rounded-md hover:bg-blue-50">
            Dashboard
          </a>
          <a href="/login" className="block p-2 rounded-md hover:bg-blue-50">
            Logout
          </a>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Employee Attendance Overview
        </h1>

        <div className="bg-white p-6 rounded-xl shadow-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3">Employee</th>
                <th className="p-3">Email</th>
                <th className="p-3">Last Check-In</th>
                <th className="p-3">Last Check-Out</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp, i) => (
                <tr key={i} className="border-b hover:bg-blue-50/50">
                  <td className="p-3">{emp.user?.name}</td>
                  <td className="p-3">{emp.user?.email}</td>
                  <td className="p-3">{emp.lastCheckIn || "—"}</td>
                  <td className="p-3">{emp.lastCheckOut || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

    </div>
  );
}
