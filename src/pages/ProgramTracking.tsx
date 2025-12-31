import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  ComposedChart,
} from "recharts";
import { Target, TrendingUp, Users, Calendar } from "lucide-react";

const programProgress = [
  { month: "Jan", target: 100, achieved: 85, beneficiaries: 1250 },
  { month: "Feb", target: 100, achieved: 92, beneficiaries: 1350 },
  { month: "Mar", target: 100, achieved: 88, beneficiaries: 1280 },
  { month: "Apr", target: 100, achieved: 95, beneficiaries: 1420 },
  { month: "May", target: 100, achieved: 90, beneficiaries: 1380 },
  { month: "Jun", target: 100, achieved: 98, beneficiaries: 1520 },
];

const programsByCategory = [
  { category: "Health Programs", target: 50, completed: 45, inProgress: 5 },
  { category: "Education Programs", target: 40, completed: 38, inProgress: 2 },
  { category: "Employment Programs", target: 30, completed: 25, inProgress: 5 },
  { category: "Social Welfare", target: 25, completed: 22, inProgress: 3 },
  { category: "Youth Development", target: 20, completed: 18, inProgress: 2 },
];

const beneficiaryTrend = [
  { month: "Jan", beneficiaries: 1250 },
  { month: "Feb", beneficiaries: 1350 },
  { month: "Mar", beneficiaries: 1280 },
  { month: "Apr", beneficiaries: 1420 },
  { month: "May", beneficiaries: 1380 },
  { month: "Jun", beneficiaries: 1520 },
];

const programPerformance = [
  {
    program: "Primary Healthcare",
    completion: 92,
    beneficiaries: 8500,
    satisfaction: 88,
  },
  {
    program: "Scholarship Scheme",
    completion: 95,
    beneficiaries: 3200,
    satisfaction: 85,
  },
  {
    program: "Skills Training",
    completion: 78,
    beneficiaries: 2100,
    satisfaction: 82,
  },
  {
    program: "Food Security",
    completion: 88,
    beneficiaries: 5600,
    satisfaction: 90,
  },
];

const totalTarget = programProgress.reduce((sum, item) => sum + item.target, 0);
const totalAchieved = programProgress.reduce(
  (sum, item) => sum + item.achieved,
  0
);
const averageAchievement = (totalAchieved / totalTarget) * 100;
const totalBeneficiaries = programProgress.reduce(
  (sum, item) => sum + item.beneficiaries,
  0
);

export default function ProgramTracking() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 pt-16 lg:pt-8">
      <div className="mb-4 sm:mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Program Tracking
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Monitor program implementation and beneficiary reach
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Average Achievement
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">
                {averageAchievement.toFixed(1)}%
              </p>
            </div>
            <Target className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Total Beneficiaries
              </p>
              <p className="text-xl sm:text-2xl font-bold text-green-600 truncate">
                {totalBeneficiaries.toLocaleString()}
              </p>
            </div>
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Active Programs
              </p>
              <p className="text-xl sm:text-2xl font-bold text-blue-600">
                {programsByCategory.reduce(
                  (sum, item) => sum + item.inProgress,
                  0
                )}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Completed Programs
              </p>
              <p className="text-xl sm:text-2xl font-bold text-purple-600">
                {programsByCategory.reduce(
                  (sum, item) => sum + item.completed,
                  0
                )}
              </p>
            </div>
            <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 flex-shrink-0 ml-2" />
          </div>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Program Achievement vs Target
          </h2>
          <ResponsiveContainer
            width="100%"
            height={250}
            className="sm:h-[300px]"
          >
            <ComposedChart
              data={programProgress}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="target" fill="#e5e7eb" name="Target" />
              <Line
                type="monotone"
                dataKey="achieved"
                stroke="#0ea5e9"
                strokeWidth={2}
                name="Achieved"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Beneficiary Growth Trend
          </h2>
          <ResponsiveContainer
            width="100%"
            height={250}
            className="sm:h-[300px]"
          >
            <AreaChart
              data={beneficiaryTrend}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="beneficiaries"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Programs by Category
        </h2>
        <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
          <BarChart
            data={programsByCategory}
            margin={{ top: 5, right: 10, left: 0, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="category"
              angle={-45}
              textAnchor="end"
              height={80}
              tick={{ fontSize: 12 }}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            <Bar dataKey="target" fill="#e5e7eb" name="Target" />
            <Bar dataKey="completed" fill="#10b981" name="Completed" />
            <Bar dataKey="inProgress" fill="#0ea5e9" name="In Progress" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Program Performance Table */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Program Performance Details
        </h2>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Program
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Completion %
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Beneficiaries
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Satisfaction %
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Progress
                  </th>
                </tr>
              </thead>
              <tbody>
                {programPerformance.map((program) => (
                  <tr
                    key={program.program}
                    className="border-b border-gray-100"
                  >
                    <td className="py-3 px-4 sm:px-0 text-gray-800 font-medium text-xs sm:text-sm">
                      {program.program}
                    </td>
                    <td className="py-3 px-4 sm:px-0 text-gray-800 text-xs sm:text-sm">
                      {program.completion}%
                    </td>
                    <td className="py-3 px-4 sm:px-0 text-gray-800 text-xs sm:text-sm">
                      {program.beneficiaries.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 sm:px-0 text-gray-800 text-xs sm:text-sm">
                      {program.satisfaction}%
                    </td>
                    <td className="py-3 px-4 sm:px-0">
                      <div className="flex items-center">
                        <div className="w-20 sm:w-32 bg-gray-200 rounded-full h-2 mr-2 sm:mr-3">
                          <div
                            className="h-2 rounded-full bg-green-500"
                            style={{ width: `${program.completion}%` }}
                          />
                        </div>
                        <span className="text-gray-600 text-xs sm:text-sm">
                          {program.completion}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
