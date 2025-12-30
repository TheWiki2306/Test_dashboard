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
  LineChart,
  Line,
} from "recharts";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  AlertCircle,
} from "lucide-react";

const COLORS = ["#0ea5e9", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444"];

const budgetData = [
  { month: "Jan", allocated: 45000000, spent: 42000000, remaining: 3000000 },
  { month: "Feb", allocated: 45000000, spent: 43800000, remaining: 1200000 },
  { month: "Mar", allocated: 45000000, spent: 44500000, remaining: 500000 },
  { month: "Apr", allocated: 45000000, spent: 45200000, remaining: -200000 },
  { month: "May", allocated: 45000000, spent: 44800000, remaining: 200000 },
  { month: "Jun", allocated: 45000000, spent: 43500000, remaining: 1500000 },
];

const budgetByCategory = [
  { name: "Education", value: 35, amount: 94500000 },
  { name: "Healthcare", value: 25, amount: 67500000 },
  { name: "Infrastructure", value: 20, amount: 54000000 },
  { name: "Agriculture", value: 12, amount: 32400000 },
  { name: "Security", value: 8, amount: 21600000 },
];

const expenditureTrend = [
  { month: "Jan", planned: 45000000, actual: 42000000 },
  { month: "Feb", planned: 45000000, actual: 43800000 },
  { month: "Mar", planned: 45000000, actual: 44500000 },
  { month: "Apr", planned: 45000000, actual: 45200000 },
  { month: "May", planned: 45000000, actual: 44800000 },
  { month: "Jun", planned: 45000000, actual: 43500000 },
];

const totalAllocated = budgetData.reduce(
  (sum, item) => sum + item.allocated,
  0
);
const totalSpent = budgetData.reduce((sum, item) => sum + item.spent, 0);
const utilizationRate = (totalSpent / totalAllocated) * 100;

export default function BudgetAnalysis() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 pt-16 lg:pt-8">
      <div className="mb-4 sm:mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Budget Implementation Analysis
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Comprehensive overview of budget allocation and expenditure
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Total Allocated
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800 truncate">
                ₦{totalAllocated.toLocaleString()}
              </p>
            </div>
            <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Total Spent
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800 truncate">
                ₦{totalSpent.toLocaleString()}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Utilization Rate
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">
                {utilizationRate.toFixed(1)}%
              </p>
            </div>
            <TrendingDown className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Remaining Budget
              </p>
              <p
                className={`text-xl sm:text-2xl font-bold truncate ${
                  totalAllocated - totalSpent >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                ₦{(totalAllocated - totalSpent).toLocaleString()}
              </p>
            </div>
            <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600 flex-shrink-0 ml-2" />
          </div>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Monthly Budget vs Expenditure
          </h2>
          <ResponsiveContainer
            width="100%"
            height={250}
            className="sm:h-[300px]"
          >
            <BarChart
              data={budgetData}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                formatter={(value: number) => `₦${value.toLocaleString()}`}
              />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="allocated" fill="#0ea5e9" name="Allocated" />
              <Bar dataKey="spent" fill="#10b981" name="Spent" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Budget Distribution by Category
          </h2>
          <ResponsiveContainer
            width="100%"
            height={250}
            className="sm:h-[300px]"
          >
            <PieChart>
              <Pie
                data={budgetByCategory}
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
                {budgetByCategory.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Planned vs Actual Expenditure Trend
        </h2>
        <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
          <LineChart
            data={expenditureTrend}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              formatter={(value: number) => `₦${value.toLocaleString()}`}
            />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            <Line
              type="monotone"
              dataKey="planned"
              stroke="#0ea5e9"
              strokeWidth={2}
              name="Planned"
            />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#10b981"
              strokeWidth={2}
              name="Actual"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Budget by Category Table */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Budget Allocation by Category
        </h2>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Category
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Percentage
                  </th>
                  <th className="pb-3 px-4 sm:px-0 text-gray-600 font-semibold text-xs sm:text-sm">
                    Amount (₦)
                  </th>
                </tr>
              </thead>
              <tbody>
                {budgetByCategory.map((item, index) => (
                  <tr key={item.name} className="border-b border-gray-100">
                    <td className="py-3 px-4 sm:px-0 text-gray-800 text-xs sm:text-sm">
                      {item.name}
                    </td>
                    <td className="py-3 px-4 sm:px-0">
                      <div className="flex items-center">
                        <div className="w-20 sm:w-32 bg-gray-200 rounded-full h-2 mr-2 sm:mr-3">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${item.value}%`,
                              backgroundColor: COLORS[index % COLORS.length],
                            }}
                          />
                        </div>
                        <span className="text-gray-800 text-xs sm:text-sm">
                          {item.value}%
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 sm:px-0 text-gray-800 font-medium text-xs sm:text-sm">
                      {item.amount.toLocaleString()}
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
