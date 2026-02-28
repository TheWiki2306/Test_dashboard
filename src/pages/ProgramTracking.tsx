import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
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
  { category: "Health Programs", target: 80, completed: 45, inProgress: 5 },
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
  0,
);
const averageAchievement = (totalAchieved / totalTarget) * 100;
const totalBeneficiaries = programProgress.reduce(
  (sum, item) => sum + item.beneficiaries,
  0,
);

const quarterlyPolicyDelivery = [
  { quarter: "Q1", actual: 22, target: 90 },
  { quarter: "Q2", actual: 88, target: 90 },
  { quarter: "Q3", actual: 76, target: 90 },
  { quarter: "Q4", actual: 94, target: 90 },
];

const spendVsBudgetByQuarter = [
  { quarter: "Q1", budget: 520, spend: 295 },
  { quarter: "Q2", budget: 140, spend: 352 },
  { quarter: "Q3", budget: 360, spend: 333 },
  { quarter: "Q4", budget: 380, spend: 401 },
].map((item) => ({
  ...item,
  variance: item.spend - item.budget,
}));

const socialProtectionByQuarter = [
  { programme: "Cash Transfers", Q1: 4200, Q2: 5100, Q3: 4800, Q4: 5600 },
  { programme: "Food Support", Q1: 3600, Q2: 3900, Q3: 4100, Q4: 4300 },
  { programme: "Elderly Support", Q1: 1700, Q2: 1850, Q3: 1920, Q4: 2050 },
  { programme: "Disability Grants", Q1: 1200, Q2: 1320, Q3: 1410, Q4: 1550 },
  { programme: "School Feeding", Q1: 2800, Q2: 3200, Q3: 3500, Q4: 3800 },
];

const socialProtectionStackedData = [
  {
    quarter: "Q1",
    "Cash Transfers": 4200,
    "Food Support": 3600,
    "Elderly Support": 1700,
    "Disability Grants": 1200,
    "School Feeding": 2800,
  },
  {
    quarter: "Q2",
    "Cash Transfers": 5100,
    "Food Support": 3900,
    "Elderly Support": 1850,
    "Disability Grants": 1320,
    "School Feeding": 3200,
  },
  {
    quarter: "Q3",
    "Cash Transfers": 4800,
    "Food Support": 4100,
    "Elderly Support": 1920,
    "Disability Grants": 1410,
    "School Feeding": 3500,
  },
  {
    quarter: "Q4",
    "Cash Transfers": 5600,
    "Food Support": 4300,
    "Elderly Support": 2050,
    "Disability Grants": 1550,
    "School Feeding": 3800,
  },
];

function getSocialHeatColor(value: number) {
  if (value >= 5000) return "bg-emerald-600";
  if (value >= 4000) return "bg-emerald-500";
  if (value >= 3000) return "bg-emerald-400";
  if (value >= 2000) return "bg-emerald-300";
  return "bg-emerald-200";
}

export default function ProgramTracking() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 pt-16 lg:pt-8">
      <div className="mb-4 sm:mb-6 lg:mb-8 ">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#284d44] mb-2">
          Policy and Programmes Implementation Analysis
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Monitor program implementation and beneficiary reach
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Program Year Journey
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Total Promises Delivered (%)
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">
                {averageAchievement.toFixed(1)}%
              </p>
            </div>
            <Target className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Total Policy Targets Achieved (%)
              </p>
              <p className="text-xl sm:text-2xl font-bold text-green-600 truncate">
                {/* {totalBeneficiaries.toLocaleString()} */}
                {averageAchievement.toFixed(1)}%
              </p>
            </div>
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Active Programs
              </p>
              <p className="text-xl sm:text-2xl font-bold text-blue-600">
                {programsByCategory.reduce(
                  (sum, item) => sum + item.inProgress,
                  0,
                )}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Satisfaction Rate (%)
              </p>
              <p className="text-xl sm:text-2xl font-bold text-purple-600">
                {averageAchievement.toFixed(1)}%
              </p>
            </div>
            <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 flex-shrink-0 ml-2" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Promises Delivered (Quarterly)
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">
                {averageAchievement.toFixed(1)}%
              </p>
            </div>
            <Target className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Policy Targets Achieved (Quarterly)
              </p>
              <p className="text-xl sm:text-2xl font-bold text-green-600 truncate">
                {/* {totalBeneficiaries.toLocaleString()} */}
                {averageAchievement.toFixed(1)}%
              </p>
            </div>
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Execution Rate (%)
              </p>
              <p className="text-xl sm:text-2xl font-bold text-purple-600">
                {averageAchievement.toFixed(1)}%
              </p>
            </div>
            <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 flex-shrink-0 ml-2" />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Sector-wise Program Performance
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white  rounded-2xl shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
            <div className="h-10 border-b rounded-t-2xl pt-2 bg-blue-100 border-gray-200">
              <p className="text-center text-sm sm:text-base font-medium text-blue-800 mb-3 sm:mb-4">
                Health Services
              </p>
            </div>
            <div className="p-2 sm:p-4">
              <p className="text-sm sm:text-base text-gray-600">
                Execution Rate: <span className="font-bold">90%</span>
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Expenditure: <span className="font-bold">₦100,000,000</span>
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Budget: <span className="font-bold">₦100,000,000</span>
              </p>
            </div>
          </div>

          <div className="bg-white  rounded-2xl shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
            <div className="h-10 border-b rounded-t-2xl pt-2 bg-yellow-100 border-gray-200">
              <p className="text-center text-sm sm:text-base font-medium text-yellow-800 mb-3 sm:mb-4">
                Governance and Administration
              </p>
            </div>
            <div className="p-2 sm:p-4">
              <p className="text-sm sm:text-base text-gray-600">
                Execution Rate: <span className="font-bold">90%</span>
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Expenditure: <span className="font-bold">₦100,000,000</span>
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Budget: <span className="font-bold">₦100,000,000</span>
              </p>
            </div>
          </div>

          <div className="bg-white  rounded-2xl shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
            <div className="h-10 border-b rounded-t-2xl pt-2 bg-amber-100 border-gray-200">
              <p className="text-center text-sm sm:text-base font-medium text-amber-800 mb-3 sm:mb-4">
                Economic Development
              </p>
            </div>
            <div className="p-2 sm:p-4">
              <p className="text-sm sm:text-base text-gray-600">
                Execution Rate: <span className="font-bold">90%</span>
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Expenditure: <span className="font-bold">₦100,000,000</span>
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Budget: <span className="font-bold">₦100,000,000</span>
              </p>
            </div>
          </div>

          <div className="bg-white  rounded-2xl shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
            <div className="h-10 border-b rounded-t-2xl pt-2 bg-red-100 border-gray-200">
              <p className="text-center text-sm sm:text-base font-medium text-red-800 mb-3 sm:mb-4">
                Social Development
              </p>
            </div>
            <div className="p-2 sm:p-4">
              <p className="text-sm sm:text-base text-gray-600">
                Execution Rate: <span className="font-bold">90%</span>
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Expenditure: <span className="font-bold">₦100,000,000</span>
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Budget: <span className="font-bold">₦100,000,000</span>
              </p>
            </div>
          </div>

          <div className="bg-white  rounded-2xl shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
            <div className="h-10 border-b rounded-t-2xl pt-2 bg-orange-100 border-gray-200">
              <p className="text-center text-sm sm:text-base font-medium text-orange-800 mb-3 sm:mb-4">
                Education Services
              </p>
            </div>
            <div className="p-2 sm:p-4">
              <p className="text-sm sm:text-base text-gray-600">
                Execution Rate: <span className="font-bold">90%</span>
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Expenditure: <span className="font-bold">₦100,000,000</span>
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Budget: <span className="font-bold">₦100,000,000</span>
              </p>
            </div>
          </div>

          <div className="bg-white  rounded-2xl shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
            <div className="h-10 border-b rounded-t-2xl pt-2 bg-green-100 border-gray-200">
              <p className="text-center text-sm sm:text-base font-medium text-green-800 mb-3 sm:mb-4">
                Agricultural Development
              </p>
            </div>
            <div className="p-2 sm:p-4">
              <p className="text-sm sm:text-base text-gray-600">
                Execution Rate: <span className="font-bold">90%</span>
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Expenditure: <span className="font-bold">₦100,000,000</span>
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Budget: <span className="font-bold">₦100,000,000</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Policy Delivery vs Target(Quarterly)
        </h3>
        <p className="text-xs sm:text-xs text-gray-500 mb-4">
          Bullet chart showing actual policy delivery against quarterly target.
          Bands indicate below, near, and above target performance.
        </p>

        <div className="space-y-4">
          {quarterlyPolicyDelivery.map((item) => (
            <div
              key={item.quarter}
              className="grid grid-cols-[52px,1fr,60px] gap-3 items-center"
            >
              <span className="text-sm font-semibold text-gray-700">
                {item.quarter}
              </span>

              <div className="relative h-7 rounded-md overflow-hidden border border-gray-200">
                {/* Performance bands */}
                <div className="absolute inset-0 flex">
                  <div
                    className="h-full bg-rose-100"
                    style={{ width: "70%" }}
                  />
                  <div
                    className="h-full bg-amber-100"
                    style={{ width: "20%" }}
                  />
                  <div
                    className="h-full bg-emerald-100"
                    style={{ width: "10%" }}
                  />
                </div>

                {/* Actual delivered bar */}
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-3 rounded-r-md transition-all duration-700 ${
                    item.actual >= item.target
                      ? "bg-emerald-600"
                      : "bg-blue-600"
                  }`}
                  style={{ width: `${Math.min(item.actual, 100)}%` }}
                />

                {/* Target marker */}
                <div
                  className="absolute top-0 h-full w-[2px] bg-gray-900"
                  style={{ left: `${Math.min(item.target, 100)}%` }}
                  title={`Target ${item.target}%`}
                />
              </div>

              <span
                className={`text-sm font-bold text-right ${
                  item.actual >= item.target
                    ? "text-emerald-700"
                    : "text-blue-700"
                }`}
              >
                {item.actual}%
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3 text-[11px] text-gray-600">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-300" />
            Below target (0-69%)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            Near target (70-89%)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Above target (90-100%)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-[2px] bg-gray-900" />
            Target marker
          </span>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Expenditure vs Budget(Quarterly)
        </h3>
        <p className="text-xs sm:text-xs text-gray-500 mb-4">
          Variance bridge (waterfall-style) showing quarterly over/under spend
          against budget.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {spendVsBudgetByQuarter.map((item) => (
            <div
              key={`${item.quarter}-summary`}
              className="rounded-lg border border-gray-200 bg-gray-50 p-3"
            >
              <p className="text-xs font-semibold text-gray-700">
                {item.quarter}
              </p>
              <p className="text-[11px] text-gray-500 mt-1">
                Budget: ₦{item.budget.toLocaleString()}m
              </p>
              <p className="text-[11px] text-gray-500">
                Spend: ₦{item.spend.toLocaleString()}m
              </p>
              <p
                className={`text-sm font-bold mt-1 ${
                  item.variance >= 0 ? "text-rose-600" : "text-emerald-600"
                }`}
              >
                {item.variance >= 0 ? "+" : ""}
                {item.variance.toLocaleString()}m
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {spendVsBudgetByQuarter.map((item) => {
            const varianceAbs = Math.abs(item.variance);
            const varianceWidth = Math.min(
              (varianceAbs / item.budget) * 100,
              100,
            );
            return (
              <div
                key={item.quarter}
                className="grid grid-cols-[44px,1fr,72px] gap-3 items-center"
              >
                <span className="text-sm font-semibold text-gray-700">
                  {item.quarter}
                </span>

                <div className="relative h-8 rounded-md border border-gray-200 bg-slate-50 overflow-hidden">
                  <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-500" />

                  {item.variance < 0 && (
                    <div
                      className="absolute right-1/2 top-1/2 -translate-y-1/2 h-4 bg-emerald-500 rounded-l-md transition-all duration-700"
                      style={{ width: `${varianceWidth / 2}%` }}
                    />
                  )}

                  {item.variance > 0 && (
                    <div
                      className="absolute left-1/2 top-1/2 -translate-y-1/2 h-4 bg-rose-500 rounded-r-md transition-all duration-700"
                      style={{ width: `${varianceWidth / 2}%` }}
                    />
                  )}
                </div>

                <span
                  className={`text-sm font-bold text-right ${
                    item.variance >= 0 ? "text-rose-600" : "text-emerald-600"
                  }`}
                >
                  {item.variance >= 0 ? "+" : ""}
                  {item.variance}m
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap gap-3 text-[11px] text-gray-600">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500" />
            Underspend vs budget
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-rose-500" />
            Overspend vs budget
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-[2px] bg-gray-500" />
            Budget baseline
          </span>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Safety Net Beneficiaries and Programmes
        </h3>
        <div>
          <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md border border-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                  No. of Programmes
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  10
                </p>
              </div>
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                  No. of Beneficiaries
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  10000
                </p>
              </div>
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                  No. of Women Beneficiaries
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  5000
                </p>
              </div>
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                  No. of Men Beneficiaries
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  5000
                </p>
              </div>
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                  No. of Elderly Beneficiaries
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  10000
                </p>
              </div>
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                  No. of Children Beneficiaries
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  1000
                </p>
              </div>
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                  No. of Special Persons Beneficiaries
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  10000
                </p>
              </div>
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                  No. of Students Beneficiaries
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  10000
                </p>
              </div>
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-xs text-gray-500 mb-4 mt-8">
          Top: Beneficiary heatmap by programme and quarter. Bottom: Stacked
          quarterly totals and programme mix.
        </p>

        <div className="rounded-xl border border-gray-200 p-3 sm:p-4 mb-5">
          <p className="text-sm font-semibold text-gray-700 mb-3">
            Beneficiaries Heatmap Matrix
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs sm:text-sm">
              <thead>
                <tr className="text-gray-600">
                  <th className="text-left py-2 pr-3">Programme</th>
                  {["Q1", "Q2", "Q3", "Q4"].map((quarter) => (
                    <th key={quarter} className="text-center px-2 py-2">
                      {quarter}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {socialProtectionByQuarter.map((row) => (
                  <tr key={row.programme} className="border-t border-gray-100">
                    <td className="py-2 pr-3 font-medium text-gray-700">
                      {row.programme}
                    </td>
                    {(["Q1", "Q2", "Q3", "Q4"] as const).map((quarter) => (
                      <td
                        key={`${row.programme}-${quarter}`}
                        className="px-2 py-2"
                      >
                        <div
                          className={`rounded-md text-white text-center py-1.5 font-semibold ${getSocialHeatColor(
                            row[quarter],
                          )}`}
                        >
                          {row[quarter].toLocaleString()}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 p-3 sm:p-4">
          <p className="text-sm font-semibold text-gray-700 mb-3">
            Quarterly Beneficiary Mix (Stacked Columns)
          </p>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={socialProtectionStackedData}
              margin={{ top: 5, right: 20, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" tick={{ fontSize: 12 }} />
              <YAxis
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                formatter={(value: number) => value.toLocaleString()}
                contentStyle={{ fontSize: "10px" }}
              />
              <Legend wrapperStyle={{ fontSize: "10px" }} />
              <Bar dataKey="Cash Transfers" stackId="a" fill="#0ea5e9" />
              <Bar dataKey="Food Support" stackId="a" fill="#10b981" />
              <Bar dataKey="Elderly Support" stackId="a" fill="#8b5cf6" />
              <Bar dataKey="Disability Grants" stackId="a" fill="#f59e0b" />
              <Bar dataKey="School Feeding" stackId="a" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Charts Row 1 */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
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
      </div> */}

      {/* Charts Row 2 */}
      {/* <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Programs by Category
        </h2>
        <ResponsiveContainer width="100%" height={500} className="sm:h-[300px]">
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
      </div>  */}

      {/* Program Performance Table */}
      {/* <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
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
      </div> */}
    </div>
  );
}
