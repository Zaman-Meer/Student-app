import React, { useState, useEffect } from "react";
import GridView from "../components/GridView";
import TileView from "../components/TileView";
import { useNavigate } from "react-router-dom";
import { Student } from "../types";
import { ReactComponent as GridIcon } from "../assets/grid-icon.svg";
import { ReactComponent as TilesIcon } from "../assets/tiles-icon.svg";

const MainPage: React.FC = () => {
  const [view, setView] = useState<"grid" | "tile">("grid");
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: any) => {
        const students = data as Student[];
        setStudents(students);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const skeletonItem = (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-lg shadow-md animate-pulse">
      <div className="h-24 bg-gray-200 rounded mb-4"></div>
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-6 bg-gray-300 rounded"></div>
    </div>
  );

  return (
    <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Student List</h1>
        <div className="flex justify-end mb-4 space-x-2">
          <button
            onClick={() => setView("grid")}
            className={`flex items-center justify-center p-2 rounded-lg ${
              view === "grid"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } transition-colors duration-300`}
          >
            <GridIcon />
          </button>
          <button
            onClick={() => setView("tile")}
            className={`flex items-center justify-center p-2 rounded-lg ${
              view === "tile"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } transition-colors duration-300`}
          >
            <TilesIcon />
          </button>
        </div>
      </div>
      <div className="grid gap-4">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array(6)
              .fill(skeletonItem)
              .map((item, index) => (
                <div key={index}>{item}</div>
              ))}
          </div>
        ) : view === "grid" ? (
          <GridView students={students} />
        ) : (
          <TileView students={students} />
        )}
      </div>
    </div>
  );
};

export default MainPage;
