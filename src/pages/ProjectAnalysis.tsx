import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { FolderKanban, CheckCircle, Clock, AlertTriangle } from "lucide-react";

const COLORS = ["#0ea5e9", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

const projectStatus = [
  { name: "Completed", value: 45, count: 45 },
  { name: "In Progress", value: 30, count: 30 },
  { name: "On Hold", value: 15, count: 15 },
  { name: "Not Started", value: 10, count: 10 },
];

const projectsBySector = [
  { sector: "Infrastructure", completed: 15, inProgress: 12, planned: 8 },
  { sector: "Education", completed: 12, inProgress: 8, planned: 5 },
  { sector: "Healthcare", completed: 10, inProgress: 6, planned: 4 },
  { sector: "Agriculture", completed: 8, inProgress: 4, planned: 3 },
];

const projectPerformance = [
  { category: "On Time", score: 75 },
  { category: "On Budget", score: 68 },
  { category: "Quality", score: 82 },
  { category: "Stakeholder Satisfaction", score: 78 },
  { category: "Resource Utilization", score: 70 },
];

const completionTimeline = [
  { month: "Jan", completed: 8, started: 12 },
  { month: "Feb", completed: 12, started: 15 },
  { month: "Mar", completed: 10, started: 14 },
  { month: "Apr", completed: 15, started: 18 },
  { month: "May", completed: 10, started: 16 },
  { month: "Jun", completed: 12, started: 14 },
];

const totalProjects = projectStatus.reduce((sum, item) => sum + item.count, 0);
const completedProjects =
  projectStatus.find((item) => item.name === "Completed")?.count || 0;
const inProgressProjects =
  projectStatus.find((item) => item.name === "In Progress")?.count || 0;
const completionRate = (completedProjects / totalProjects) * 100;

export default function ProjectAnalysis() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 pt-16 lg:pt-8">
      <div className="mb-4 sm:mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Project Implementation Analysis
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Comprehensive overview of project status and performance
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Total Projects
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">
                {totalProjects}
              </p>
            </div>
            <FolderKanban className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Completed</p>
              <p className="text-xl sm:text-2xl font-bold text-green-600">
                {completedProjects}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                In Progress
              </p>
              <p className="text-xl sm:text-2xl font-bold text-blue-600">
                {inProgressProjects}
              </p>
            </div>
            <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Completion Rate
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">
                {completionRate.toFixed(1)}%
              </p>
            </div>
            <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600 flex-shrink-0 ml-2" />
          </div>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Project Status Distribution
          </h2>
          <ResponsiveContainer
            width="100%"
            height={250}
            className="sm:h-[300px]"
          >
            <PieChart>
              <Pie
                data={projectStatus}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                outerRadius="70%"
                fill="#8884d8"
                dataKey="value"
              >
                {projectStatus.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Project Performance Metrics
          </h2>
          <ResponsiveContainer
            width="100%"
            height={250}
            className="sm:h-[300px]"
          >
            <RadarChart data={projectPerformance}>
              <PolarGrid />
              <PolarAngleAxis dataKey="category" tick={{ fontSize: 10 }} />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fontSize: 10 }}
              />
              <Radar
                name="Performance"
                dataKey="score"
                stroke="#0ea5e9"
                fill="#0ea5e9"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Projects by Sector
        </h2>
        <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
          <BarChart
            data={projectsBySector}
            margin={{ top: 5, right: 10, left: 0, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="sector"
              angle={-45}
              textAnchor="end"
              height={80}
              tick={{ fontSize: 12 }}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            <Bar dataKey="completed" fill="#10b981" name="Completed" />
            <Bar dataKey="inProgress" fill="#0ea5e9" name="In Progress" />
            <Bar dataKey="planned" fill="#f59e0b" name="Planned" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Project Completion Timeline
        </h2>
        <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
          <BarChart
            data={completionTimeline}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            <Bar dataKey="completed" fill="#10b981" name="Completed" />
            <Bar dataKey="started" fill="#0ea5e9" name="Started" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Project Status Table */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Project Status Overview
        </h2>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Status
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Count
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Percentage
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Progress
                  </th>
                </tr>
              </thead>
              <tbody>
                {projectStatus.map((item, index) => {
                  const percentage = (item.value / totalProjects) * 100;
                  return (
                    <tr key={item.name} className="border-b border-gray-100">
                      <td className="py-3 px-4 sm:px-0 text-gray-800 text-xs sm:text-sm">
                        {item.name}
                      </td>
                      <td className="py-3 px-4 sm:px-0 text-gray-800 font-medium text-xs sm:text-sm">
                        {item.count}
                      </td>
                      <td className="py-3 px-4 sm:px-0 text-gray-800 text-xs sm:text-sm">
                        {percentage.toFixed(1)}%
                      </td>
                      <td className="py-3 px-4 sm:px-0">
                        <div className="flex items-center">
                          <div className="w-20 sm:w-32 bg-gray-200 rounded-full h-2 mr-2 sm:mr-3">
                            <div
                              className="h-2 rounded-full"
                              style={{
                                width: `${percentage}%`,
                                backgroundColor: COLORS[index % COLORS.length],
                              }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
