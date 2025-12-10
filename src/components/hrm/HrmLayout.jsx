import React from "react";
import { Users, UserPlus, Building2, Clock, DollarSign, Calendar } from "lucide-react";

export default function HrmLayout() {
  const menuItems = [
    {
      icon: Users,
      title: "Employees",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: UserPlus,
      title: "Add Employee",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600"
    },
    {
      icon: Building2,
      title: "Departments",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Clock,
      title: "Attendance",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: DollarSign,
      title: "Payroll",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600"
    },
    {
      icon: Calendar,
      title: "Leaves",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen p-8">
      {/* <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
        HRM Dashboard
      </h1> */}
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#f3f3f7] aspect-square rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 cursor-pointer group"
          >
            <div className="flex flex-col items-center">
              <div className={`${item.bgColor} rounded-full p-8 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-14 h-14 ${item.iconColor}`} strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}