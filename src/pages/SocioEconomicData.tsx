import {
  LineChart,
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
} from "recharts";
import { Users, Building, GraduationCap, Heart } from "lucide-react";
import { useState } from "react";
import Health from "../components/Health";
import Agriculture from "../components/Agriculture";
import Others from "../components/Others";
import Education from "../components/Education";

const tabs = ["Health", "Education", "Agriculture", "Others"];

const populationData = [
  { year: "2019", population: 4500000, urban: 1800000, rural: 2700000 },
  { year: "2020", population: 4650000, urban: 1950000, rural: 2700000 },
  { year: "2021", population: 4800000, urban: 2100000, rural: 2700000 },
  { year: "2022", population: 4950000, urban: 2250000, rural: 2700000 },
  { year: "2023", population: 5100000, urban: 2400000, rural: 2700000 },
  { year: "2024", population: 5250000, urban: 2550000, rural: 2700000 },
];

const educationMetrics = [
  { year: "2019", literacy: 45, enrollment: 72, completion: 58 },
  { year: "2020", literacy: 48, enrollment: 75, completion: 61 },
  { year: "2021", literacy: 52, enrollment: 78, completion: 64 },
  { year: "2022", literacy: 55, enrollment: 80, completion: 67 },
  { year: "2023", literacy: 58, enrollment: 82, completion: 70 },
  { year: "2024", literacy: 61, enrollment: 84, completion: 73 },
];

const healthMetrics = [
  { indicator: "Life Expectancy", value: 58, target: 65 },
  { indicator: "Infant Mortality", value: 65, target: 45 },
  { indicator: "Maternal Health", value: 72, target: 85 },
  { indicator: "Healthcare Access", value: 68, target: 80 },
  { indicator: "Immunization Rate", value: 75, target: 90 },
];

const employmentData = [
  { sector: "Agriculture", employed: 65, percentage: 65 },
  { sector: "Services", employed: 20, percentage: 20 },
  { sector: "Government", employed: 8, percentage: 8 },
  { sector: "Trade", employed: 5, percentage: 5 },
  { sector: "Industry", employed: 2, percentage: 2 },
];

const economicIndicators = [
  { year: "2019", gdp: 850, perCapita: 189, growth: 2.5 },
  { year: "2020", gdp: 880, perCapita: 189, growth: 3.5 },
  { year: "2021", gdp: 920, perCapita: 192, growth: 4.5 },
  { year: "2022", gdp: 960, perCapita: 194, growth: 4.3 },
  { year: "2023", gdp: 1000, perCapita: 196, growth: 4.2 },
  { year: "2024", gdp: 1040, perCapita: 198, growth: 4.0 },
];

const infrastructureAccess = [
  { service: "Electricity", access: 45, urban: 78, rural: 28 },
  { service: "Water Supply", access: 62, urban: 85, rural: 48 },
  { service: "Internet", access: 38, urban: 65, rural: 22 },
  { service: "Roads (Paved)", access: 55, urban: 90, rural: 35 },
  { service: "Healthcare Facilities", access: 68, urban: 85, rural: 58 },
];

const currentPopulation = populationData[populationData.length - 1].population;
const currentLiteracy = educationMetrics[educationMetrics.length - 1].literacy;
const currentEnrollment =
  educationMetrics[educationMetrics.length - 1].enrollment;
const avgHealthScore =
  healthMetrics.reduce((sum, item) => sum + item.value, 0) /
  healthMetrics.length;

export default function SocioEconomicData() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const [selectedYear, setSelectedYear] = useState<string>("2024");

  const renderSection = () => {
    switch (activeTab) {
      case tabs[0]:
        return <Health selectedYear={selectedYear} />;
      case tabs[1]:
        return <Education />;
      case tabs[2]:
        return <Agriculture />;
      case tabs[3]:
        return <Others />;
      default:
        return <Health selectedYear={selectedYear} />;
    }
  };
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 pt-16 lg:pt-8">
      <div className="mb-4 sm:mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#284d44] mb-2">
          Social Economic Data
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Comprehensive socio-economic indicators and trends
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Socio Economic Year Journey
        </h2>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <h5 className="text-sm sm:text-base text-gray-600">Select Year:</h5>
            <select
              className="text-sm sm:text-base text-gray-600 border border-gray-300 rounded-md px-4 py-2"
              value={selectedYear}
              onChange={(event) => setSelectedYear(event.target.value)}
            >
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Total Population
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800 truncate">
                {currentPopulation.toLocaleString()}
              </p>
            </div>
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">State GDP</p>
              <p className="text-xl sm:text-2xl font-bold text-green-600">
                ₦1.2 Trillion
              </p>
            </div>
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                GDP Growth Rate
              </p>
              <p className="text-xl sm:text-2xl font-bold text-blue-600">
                3.15%
              </p>
            </div>
            <Building className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Investment Inflows
              </p>
              <p className="text-xl sm:text-2xl font-bold text-purple-600">
                ₦2 Billion
              </p>
            </div>
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 flex-shrink-0 ml-2" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                MSMEs Population
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800 truncate">
                1,000
              </p>
            </div>
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                No. of Supported MSMEs
              </p>
              <p className="text-xl sm:text-2xl font-bold text-green-600">
                700
              </p>
            </div>
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Business Registration Growth
              </p>
              <p className="text-xl sm:text-2xl font-bold text-blue-600">
                32.15%
              </p>
            </div>
            <Building className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 flex-shrink-0 ml-2" />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Socio-Economic Data by Category
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {tabs.map((item) => (
            <button
              key={item}
              className={`text-gray-600 font-bold flex justify-center p-2 sm:p-2 shadow-md border border-gray-200 rounded-full transition-all duration-300 ${
                activeTab === item ? "bg-emerald-900 text-white" : "bg-gray-200"
              }`}
              type="button"
              onClick={() => setActiveTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-4">{renderSection()}</div>
      </div>

      {/* Charts Row 2 */}

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Employment by Sector
          </h2>
          <ResponsiveContainer
            width="100%"
            height={250}
            className="sm:h-[300px]"
          >
            <BarChart
              data={employmentData}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="sector" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="percentage" fill="#8b5cf6" name="Employment %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Economic Growth Indicators
          </h2>
          <ResponsiveContainer
            width="100%"
            height={250}
            className="sm:h-[300px]"
          >
            <LineChart
              data={economicIndicators}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="gdp"
                stroke="#0ea5e9"
                strokeWidth={2}
                name="GDP (Billion ₦)"
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="perCapita"
                stroke="#10b981"
                strokeWidth={2}
                name="Per Capita (₦'000)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="growth"
                stroke="#f59e0b"
                strokeWidth={2}
                name="Growth Rate %"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div> */}

      {/* Infrastructure Access Table */}
      {/* <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Infrastructure Access
        </h2>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Service
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Overall Access %
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Urban %
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Rural %
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Progress
                  </th>
                </tr>
              </thead>
              <tbody>
                {infrastructureAccess.map((item) => (
                  <tr key={item.service} className="border-b border-gray-100">
                    <td className="py-3 px-4 sm:px-0 text-gray-800 font-medium text-xs sm:text-sm">
                      {item.service}
                    </td>
                    <td className="py-3 px-4 sm:px-0 text-gray-800 text-xs sm:text-sm">
                      {item.access}%
                    </td>
                    <td className="py-3 px-4 sm:px-0 text-gray-800 text-xs sm:text-sm">
                      {item.urban}%
                    </td>
                    <td className="py-3 px-4 sm:px-0 text-gray-800 text-xs sm:text-sm">
                      {item.rural}%
                    </td>
                    <td className="py-3 px-4 sm:px-0">
                      <div className="flex items-center">
                        <div className="w-20 sm:w-32 bg-gray-200 rounded-full h-2 mr-2 sm:mr-3">
                          <div
                            className="h-2 rounded-full bg-blue-500"
                            style={{ width: `${item.access}%` }}
                          />
                        </div>
                        <span className="text-gray-600 text-xs sm:text-sm">
                          {item.access}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </div>
  );
}
