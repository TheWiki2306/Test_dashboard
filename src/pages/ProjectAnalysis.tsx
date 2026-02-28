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
import { FolderKanban, CheckCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";
import ProjectDetails, {
  type ProjectDetail,
} from "../components/ProjectDetails";

const COLORS = ["#10b981", "#0ea5e9", , "#f59e0b", "#ef4444", "#8b5cf6"];

const projectDetails: ProjectDetail[] = [
  {
    name: "Project 1",
    description: "Project 1 Description",
    projectType: "Housing",
    overview:
      "This is a housing project where residents of the community will be provided with a safe and secure place to live. It will be built on a 1000 square meter plot of land. The project will be completed in six (6) months. The project is expected to cost N100,000,000.00.",
    startDate: "2024-01-01",
    timeline: "Six (6) months",
    status: "Completed",
    contractedCompany: "Company 1",
    photos: [
      {
        id: "p1-1",
        src: "/assets/images/olu-1.jpg",
        caption: "Groundbreaking ceremony",
        date: "2024-01-10",
      },
      {
        id: "p1-2",
        src: "/assets/images/olu-1.jpg",
        caption: "Foundation work in progress",
        date: "2024-02-04",
      },
      {
        id: "p1-3",
        src: "/assets/images/olu-1.jpg",
        caption: "Mid-stage construction",
        date: "2024-03-16",
      },
      {
        id: "p1-4",
        src: "/assets/images/olu-1.jpg",
        caption: "Project site inspection",
        date: "2024-04-02",
      },
    ],
  },
  {
    name: "Project 2",
    description: "Project 2 Description",
    projectType: "Housing",
    overview:
      "This is a housing project where residents of the community will be provided with a safe and secure place to live. It will be built on a 1000 square meter plot of land. The project will be completed in six (6) months. The project is expected to cost N100,000,000.00.",
    startDate: "2024-01-01",
    timeline: "Six (6) months",
    status: "Completed",
    contractedCompany: "Company 2",
    photos: [
      {
        id: "p2-1",
        src: "/assets/images/olu-1.jpg",
        caption: "Site clearing completed",
        date: "2024-01-14",
      },
      {
        id: "p2-2",
        src: "/assets/images/olu-1.jpg",
        caption: "Structural framework",
        date: "2024-02-18",
      },
      {
        id: "p2-3",
        src: "/assets/images/olu-1.jpg",
        caption: "Community validation visit",
        date: "2024-03-09",
      },
      {
        id: "p2-4",
        src: "/assets/images/olu-1.jpg",
        caption: "Finishing stage",
        date: "2024-04-20",
      },
    ],
  },
  {
    name: "Project 3",
    description: "Project 3 Description",
    projectType: "Housing",
    overview:
      "This is a housing project where residents of the community will be provided with a safe and secure place to live. It will be built on a 1000 square meter plot of land. The project will be completed in six (6) months. The project is expected to cost N100,000,000.00.",
    startDate: "2024-01-01",
    timeline: "Six (6) months",
    status: "Completed",
    contractedCompany: "Company 3",
    photos: [
      {
        id: "p3-1",
        src: "/assets/images/olu-1.jpg",
        caption: "Early mobilization works",
        date: "2024-01-22",
      },
      {
        id: "p3-2",
        src: "/assets/images/olu-1.jpg",
        caption: "Materials delivered on site",
        date: "2024-02-11",
      },
      {
        id: "p3-3",
        src: "/assets/images/olu-1.jpg",
        caption: "Civil works phase",
        date: "2024-03-23",
      },
      {
        id: "p3-4",
        src: "/assets/images/olu-1.jpg",
        caption: "Quality assurance review",
        date: "2024-04-15",
      },
    ],
  },
  {
    name: "Project 4",
    description: "Project 4 Description",
    projectType: "Housing",
    overview:
      "This is a housing project where residents of the community will be provided with a safe and secure place to live. It will be built on a 1000 square meter plot of land. The project will be completed in six (6) months. The project is expected to cost N100,000,000.00.",
    startDate: "2024-01-01",
    timeline: "Six (6) months",
    status: "Completed",
    contractedCompany: "Company 4",
    photos: [
      {
        id: "p4-1",
        src: "/assets/images/olu-1.jpg",
        caption: "Survey and marking",
        date: "2024-01-08",
      },
      {
        id: "p4-2",
        src: "/assets/images/olu-1.jpg",
        caption: "Execution of primary works",
        date: "2024-02-19",
      },
      {
        id: "p4-3",
        src: "/assets/images/olu-1.jpg",
        caption: "Monitoring mission",
        date: "2024-03-14",
      },
      {
        id: "p4-4",
        src: "/assets/images/olu-1.jpg",
        caption: "Late-stage completion",
        date: "2024-04-28",
      },
    ],
  },
  {
    name: "Project 5",
    description: "Project 5 Description",
    projectType: "Housing",
    overview:
      "This is a housing project where residents of the community will be provided with a safe and secure place to live. It will be built on a 1000 square meter plot of land. The project will be completed in six (6) months. The project is expected to cost N100,000,000.00.",
    startDate: "2024-01-01",
    timeline: "Six (6) months",
    status: "Completed",
    contractedCompany: "Company 5",
    photos: [
      {
        id: "p5-1",
        src: "/assets/images/olu-1.jpg",
        caption: "Initial setup",
        date: "2024-01-06",
      },
      {
        id: "p5-2",
        src: "/assets/images/olu-1.jpg",
        caption: "Project execution",
        date: "2024-02-26",
      },
      {
        id: "p5-3",
        src: "/assets/images/olu-1.jpg",
        caption: "Field supervision",
        date: "2024-03-18",
      },
      {
        id: "p5-4",
        src: "/assets/images/olu-1.jpg",
        caption: "Close-out checks",
        date: "2024-04-30",
      },
    ],
  },
];

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
const completionRate = (completedProjects / totalProjects) * 100;

export default function ProjectAnalysis() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    null,
  );
  const handleViewProject = (project: ProjectDetail) => {
    setSelectedProject(project);
  };

  if (selectedProject) {
    return (
      <ProjectDetails
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 pt-16 lg:pt-8">
      <div className="mb-4 sm:mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#284d44] mb-2">
          Project Implementation Analysis
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Comprehensive overview of project status and performance
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Project Year Journey
        </h2>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <h5 className="text-sm sm:text-base text-gray-600">Select Year:</h5>
            <select className="text-sm sm:text-base text-gray-600 border border-gray-300 rounded-md px-4 py-2">
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <h5 className="text-sm sm:text-base text-gray-600 ">
              Select Month:
            </h5>
            <select className="text-sm sm:text-base text-gray-600 border border-gray-300 rounded-md px-4 py-2">
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Total Projects
              </p>
              <p className="text-xl sm:text-2xl font-bold text-primary-600">
                {totalProjects}
              </p>
            </div>
            <FolderKanban className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Number of LGAs Reached
              </p>
              <p className="text-xl sm:text-2xl font-bold text-green-600">
                {completedProjects}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Project Completion Rate
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">
                {completionRate.toFixed(1)}%
              </p>
            </div>
            <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600 flex-shrink-0 ml-2" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-blue-100 p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Completed Projects
              </p>
              <p className="text-xl sm:text-2xl font-bold text-primary-600">
                {totalProjects}
              </p>
            </div>
            <FolderKanban className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-green-100 p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Ongoing Projects{" "}
              </p>
              <p className="text-xl sm:text-2xl font-bold text-green-600">
                {completedProjects}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-yellow-100 p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Delayed Projects
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
              <Tooltip contentStyle={{ fontSize: "10px" }} />
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
                stroke="#517b71"
                fill="#3c7466"
                fillOpacity={0.6}
              />
              <Tooltip contentStyle={{ fontSize: "10px" }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          LGAs Reached by Government Projects
        </h2>
        <p>
          A map of Kebbi state with indicators of LGAs reached by government
          projects.
        </p>
      </div>

      {/* <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
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
      </div> */}

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Project Overview
        </h2>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Project Name
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Project Description
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Start Date
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Timeline
                  </th>
                </tr>
              </thead>
              <tbody>
                {projectDetails.map((item) => {
                  return (
                    <tr key={item.name} className="border-b border-gray-100">
                      <td className="py-3 px-4 sm:px-0 text-gray-800 font-medium text-xs sm:text-sm">
                        {item.name}
                      </td>
                      <td className="py-3 px-4 sm:px-0 text-gray-800 text-xs sm:text-sm">
                        {item.description}
                      </td>
                      <td className="py-3 px-4 sm:px-0 text-gray-800 text-xs sm:text-sm">
                        {item.startDate}
                      </td>
                      <td className="py-3 px-4 sm:px-0">{item.timeline}</td>
                      <td>
                        <button
                          className="text-white font-medium text-xs bg-[#3c7466] hover:bg-emerald-900 transition-all duration-300 cursor-pointer px-3 py-1.5 rounded-full"
                          onClick={() => handleViewProject(item)}
                        >
                          View Project
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
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
