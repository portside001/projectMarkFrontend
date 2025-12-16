import { stats } from "../Stats";

export default function HrmLayout() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <div className={`${stat.bgColor} p-2 rounded-lg`}>
                    <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-base">
                    {stat.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-xs ml-11">{stat.subtitle}</p>
              </div>
            </div>

            {/* Value and Details */}
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl font-bold text-gray-900">
                  {stat.value}
                </span>
                <button className="text-gray-400 hover:text-gray-600 text-sm font-medium flex items-center gap-1 transition-colors">
                  Details
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Trend */}
              <div className="flex items-center gap-2 text-sm">
                <span
                  className={`font-semibold ${
                    stat.trendPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.trend}
                </span>
                <span className="text-gray-400">{stat.trendLabel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
