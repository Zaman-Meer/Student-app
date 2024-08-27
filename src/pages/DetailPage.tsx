import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

type Student = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: Address;
};

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data: Student) => {
          setStudent(data);
          setLoading(false);
        });
    }
  }, [id]);
  if (loading) {
    return (
      <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
        <button
          onClick={() => navigate("/")}
          className="mb-6 bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          ← Back to List
        </button>
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto">
          <div className="space-y-6 animate-pulse">
            <div className="h-10 bg-blue-200 rounded-full w-2/3"></div>
            <div className="h-6 bg-gray-200 rounded-full w-full"></div>
            <div className="h-6 bg-gray-200 rounded-full w-full"></div>
            <div className="h-6 bg-gray-200 rounded-full w-full"></div>
            <div className="h-6 bg-gray-200 rounded-full w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <button
        onClick={() => navigate("/")}
        className="mb-6 bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
      >
        ← Back to List
      </button>
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto transform transition-all duration-300 hover:shadow-3xl">
        <h2 className="text-4xl font-bold mb-8 text-blue-600 border-b-2 border-blue-200 pb-4">
          {student?.name}'s Details
        </h2>
        <div className="space-y-6">
          <DetailItem label="Username" value={student?.username} />
          <DetailItem label="Email" value={student?.email} />
          <DetailItem label="Phone" value={student?.phone} />
          <DetailItem
            label="Address"
            value={`${student?.address.street}, ${student?.address.city}`}
          />
          <DetailItem label="ZIP" value={student?.address.zipcode} />
        </div>
      </div>
    </div>
  );
};

const DetailItem: React.FC<{ label: string; value?: string }> = ({
  label,
  value,
}) => (
  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100">
    <span className="text-lg font-semibold text-blue-600 w-24">{label}:</span>
    <span className="text-lg text-gray-700">{value}</span>
  </div>
);

export default DetailPage;
