import React, { useEffect, useState } from "react";

export default function History() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/attendance/history")
      .then(res => res.json())
      .then(data => setLogs(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-10">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Attendance History
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="p-3">Date</th>
              <th className="p-3">Check In</th>
              <th className="p-3">Check Out</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log, i) => (
              <tr key={i} className="border-b hover:bg-blue-50/50">
                <td className="p-3">{log.date}</td>
                <td className="p-3">{log.checkIn || "—"}</td>
                <td className="p-3">{log.checkOut || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
