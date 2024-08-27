// src/components/TileView.tsx

import React from "react";
import { Link } from "react-router-dom";
import { Student } from "../types";

interface TileViewProps {
  students: Student[];
}

const TileView: React.FC<TileViewProps> = ({ students }) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-6 border-b text-left text-gray-700">Name</th>
            <th className="py-3 px-6 border-b text-left text-gray-700">
              Username
            </th>
            <th className="py-3 px-6 border-b text-left text-gray-700">
              Email
            </th>
            <th className="py-3 px-6 border-b text-left text-gray-700">
              Phone
            </th>
            <th className="py-3 px-6 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-b hover:bg-gray-100 transition duration-200"
            >
              <td className="py-3 px-6">{student.name}</td>
              <td className="py-3 px-6">{student.username}</td>
              <td className="py-3 px-6">{student.email}</td>
              <td className="py-3 px-6">{student.phone}</td>
              <td className="py-3 px-6 text-center">
                <Link
                  to={`/details/${student.id}`}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TileView;
