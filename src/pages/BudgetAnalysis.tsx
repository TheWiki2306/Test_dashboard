import { useState } from "react";
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
  Brush,
  Treemap,
  ComposedChart,
  Area,
} from "recharts";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  AlertCircle,
} from "lucide-react";

const COLORS = ["#0ea5e9", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444"];

type ReportingFrequency = "Annual" | "Quarterly" | "Bi-annual" | "Monthly";

type IndicatorCategory =
  | "Budget Performance"
  | "Revenue & IGR"
  | "Expenditure Mix"
  | "Debt & Sustainability"
  | "Transparency";

type BudgetIndicator = {
  id: string;
  name: string;
  description: string;
  dataRequired: string;
  coveragePeriod: string;
  sourceMDA: string;
  reportingFrequency: ReportingFrequency;
  category: IndicatorCategory;
  isKey: boolean;
};

type FrequencyFilter = ReportingFrequency | "All";
type CategoryFilter = IndicatorCategory | "All";

const budgetData = [
  { month: "Jan", allocated: 45000000, spent: 42000000, remaining: 3000000 },
  { month: "Feb", allocated: 45000000, spent: 43800000, remaining: 1200000 },
  { month: "Mar", allocated: 45000000, spent: 44500000, remaining: 500000 },
  { month: "Apr", allocated: 45000000, spent: 45200000, remaining: -200000 },
  { month: "May", allocated: 45000000, spent: 44800000, remaining: 200000 },
  { month: "Jun", allocated: 45000000, spent: 43500000, remaining: 1500000 },
];

// Key budget performance indicators (sample values for illustration)
const kpiIndicators: {
  id: string;
  name: string;
  value: number;
  unit: "%";
  category: IndicatorCategory;
}[] = [
  {
    id: "execution-rate",
    name: "Budget Execution Rate",
    value: 88,
    unit: "%",
    category: "Budget Performance",
  },
  {
    id: "igr-growth",
    name: "IGR Growth Rate",
    value: 14,
    unit: "%",
    category: "Revenue & IGR",
  },
  {
    id: "recurrent-capital",
    name: "Recurrent-to-Capital Ratio",
    value: 62,
    unit: "%",
    category: "Expenditure Mix",
  },
  {
    id: "debt-service-revenue",
    name: "Debt Service-to-Revenue",
    value: 23,
    unit: "%",
    category: "Debt & Sustainability",
  },
  {
    id: "fiscal-data-availability",
    name: "Fiscal Data Availability",
    value: 92,
    unit: "%",
    category: "Transparency",
  },
  {
    id: "igr-service-ratio",
    name: "IGR-for-Service Ratio",
    value: 48,
    unit: "%",
    category: "Revenue & IGR",
  },
  {
    id: "personnel-cost-to-revenue-ratio",
    name: "Personnel Cost-to-Revenue Ratio",
    value: 48,
    unit: "%",
    category: "Expenditure Mix",
  },
  {
    id: "igr-norminal-growth-rate",
    name: "IGR-Norminal-Growth-Rate",
    value: 68,
    unit: "%",
    category: "Revenue & IGR",
  },
];

const budgetByCategory = [
  { name: "Education", value: 35, amount: 94500000 },
  { name: "Healthcare", value: 25, amount: 67500000 },
  { name: "Infrastructure", value: 20, amount: 54000000 },
  { name: "Agriculture", value: 12, amount: 32400000 },
  { name: "Security", value: 8, amount: 21600000 },
];

// IGR performance vs target over time
const igrPerformanceData = [
  { year: "2023", target: 65000000000, actual: 62000000000 },
  { year: "2024", target: 70000000000, actual: 68000000000 },
  { year: "2025", target: 76000000000, actual: 74500000000 },
  { year: "2026", target: 82000000000, actual: 79500000000 },
];

// Composition indicators: recurrent vs capital and funding mix
const expenditureMix = [
  { type: "Recurrent", value: 62 },
  { type: "Capital", value: 38 },
];

const fundingMix = [
  { source: "IGR", value: 28 },
  { source: "FAAC", value: 52 },
  { source: "Grants", value: 12 },
  { source: "Loans", value: 8 },
];

const expenditureTrend = [
  { month: "Jan", planned: 45000000, actual: 42000000 },
  { month: "Feb", planned: 45000000, actual: 43800000 },
  { month: "Mar", planned: 45000000, actual: 44500000 },
  { month: "Apr", planned: 45000000, actual: 45200000 },
  { month: "May", planned: 45000000, actual: 44800000 },
  { month: "Jun", planned: 45000000, actual: 43500000 },
];

// Heatmap-style view of indicator performance over quarters
const indicatorHeatmapData: {
  indicator: string;
  category: IndicatorCategory;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
}[] = [
  {
    indicator: "Execution Rate",
    category: "Budget Performance",
    q1: 82,
    q2: 86,
    q3: 90,
    q4: 88,
  },
  {
    indicator: "IGR Growth",
    category: "Revenue & IGR",
    q1: 9,
    q2: 11,
    q3: 15,
    q4: 14,
  },
  {
    indicator: "Debt Service Ratio",
    category: "Debt & Sustainability",
    q1: 25,
    q2: 24,
    q3: 22,
    q4: 23,
  },
  {
    indicator: "Recurrent/Capital Mix",
    category: "Expenditure Mix",
    q1: 60,
    q2: 62,
    q3: 63,
    q4: 62,
  },
];

// Budget flow along stages
const budgetFlowData = [
  { stage: "Approved", amount: 270000000000 },
  { stage: "Released", amount: 245000000000 },
  { stage: "Committed", amount: 232000000000 },
  { stage: "Actually Spent", amount: 225000000000 },
];

const publicWorksQuarterlyActual = [
  { quarter: "2023 Q1", actual: 14500000000 },
  { quarter: "2023 Q2", actual: 16200000000 },
  { quarter: "2023 Q3", actual: 17100000000 },
  { quarter: "2023 Q4", actual: 18300000000 },
  { quarter: "2024 Q1", actual: 19600000000 },
  { quarter: "2024 Q2", actual: 20800000000 },
  { quarter: "2024 Q3", actual: 21900000000 },
  { quarter: "2024 Q4", actual: 23300000000 },
  { quarter: "2025 Q1", actual: 24700000000 },
  { quarter: "2025 Q2", actual: 25900000000 },
  { quarter: "2025 Q3", actual: 27100000000 },
  { quarter: "2025 Q4", actual: 28600000000 },
];

const cumulativePublicWorksSpending = publicWorksQuarterlyActual.map(
  (item, index, arr) => ({
    ...item,
    cumulative: arr
      .slice(0, index + 1)
      .reduce((sum, current) => sum + current.actual, 0),
  }),
);

const populationByYear = [
  { year: "2023", population: 5840000 },
  { year: "2024", population: 5960000 },
  { year: "2025", population: 6090000 },
];

const quarterlyPerCapitaData = cumulativePublicWorksSpending.map((item) => {
  const year = item.quarter.split(" ")[0];
  const population =
    populationByYear.find((entry) => entry.year === year)?.population ?? 1;
  return {
    period: item.quarter,
    actual: item.actual,
    cumulative: item.cumulative,
    population,
    periodPerCapita: item.actual / population,
    itdPerCapita: item.cumulative / population,
  };
});

const annualPerCapitaData = populationByYear.map((entry) => {
  const annualActual = publicWorksQuarterlyActual
    .filter((item) => item.quarter.startsWith(entry.year))
    .reduce((sum, item) => sum + item.actual, 0);
  const cumulative = publicWorksQuarterlyActual
    .filter((item) => Number(item.quarter.split(" ")[0]) <= Number(entry.year))
    .reduce((sum, item) => sum + item.actual, 0);

  return {
    period: entry.year,
    actual: annualActual,
    cumulative,
    population: entry.population,
    periodPerCapita: annualActual / entry.population,
    itdPerCapita: cumulative / entry.population,
  };
});

// Top revenue agencies for treemap
const topRevenueAgencies = [
  { name: "Internal Revenue Service", size: 28000000000 },
  { name: "State Transport Authority", size: 9500000000 },
  { name: "Property & Land Registry", size: 8700000000 },
  { name: "Health Facilities Board", size: 6500000000 },
  { name: "Education Board", size: 6200000000 },
];

// Indicator catalog mirroring the spreadsheet (sample subset)
const budgetIndicators: BudgetIndicator[] = [
  {
    id: "avg-execution-rate",
    name: "Average Budget Execution Rate",
    description:
      "Percentage of budget plans executed compared to the plans (average of annual budget performance from inception to date).",
    dataRequired: "Aggregate budget performance",
    coveragePeriod: "2023 - 2025",
    sourceMDA: "Ministry of Budget",
    reportingFrequency: "Annual",
    category: "Budget Performance",
    isKey: true,
  },
  {
    id: "cumulative-capex",
    name: "Cumulative Government Spending on Public Works and Services",
    description:
      "Total actual capital expenditure from inception of the administration to date.",
    dataRequired: "Aggregate actual expenditure of the State (audited)",
    coveragePeriod: "2023 - 2025",
    sourceMDA: "Office of Accountant General (Final Accounts)",
    reportingFrequency: "Annual",
    category: "Budget Performance",
    isKey: false,
  },
  {
    id: "recurrent-capital-ratio",
    name: "Recurrent-to-Capital Expenditure Ratio",
    description:
      "Recurrent-to-capital mix in the budget from inception to date.",
    dataRequired: "Actual recurrent and capital expenditure",
    coveragePeriod: "2023 - 2025",
    sourceMDA: "Ministry of Budget",
    reportingFrequency: "Quarterly",
    category: "Expenditure Mix",
    isKey: true,
  },
  {
    id: "fund-utilisation",
    name: "Fund Utilisation Rate",
    description: "Amount utilised in 2025 ÷ total amount released in 2025.",
    dataRequired: "Total funds released in 2025 & total funds utilised in 2025",
    coveragePeriod: "2025",
    sourceMDA: "Office of Accountant General (Final Accounts)",
    reportingFrequency: "Annual",
    category: "Budget Performance",
    isKey: true,
  },
  {
    id: "igr-growth-rate",
    name: "IGR Growth Rate",
    description: "Percentage increase in IGR year-on-year (2024 vs 2025).",
    dataRequired: "Actual IGR for 2024 and 2025",
    coveragePeriod: "2024 - 2025",
    sourceMDA: "Internal Revenue Service",
    reportingFrequency: "Annual",
    category: "Revenue & IGR",
    isKey: true,
  },
  {
    id: "debt-service-revenue",
    name: "Debt Service-to-Revenue Ratio",
    description: "Debt service payments as a share of total revenue.",
    dataRequired: "Total debt service payments and total revenue",
    coveragePeriod: "2023 - 2025",
    sourceMDA: "Debt Management Department / Accountant General",
    reportingFrequency: "Quarterly",
    category: "Debt & Sustainability",
    isKey: true,
  },
  {
    id: "fiscal-data-availability",
    name: "Fiscal Data Availability Rate",
    description:
      "Number of fiscal data published online ÷ total number of official fiscal publications.",
    dataRequired:
      "No. of fiscal data published online and total official publications",
    coveragePeriod: "2025",
    sourceMDA: "Ministry of Budget",
    reportingFrequency: "Annual",
    category: "Transparency",
    isKey: true,
  },
];

const totalAllocated = budgetData.reduce(
  (sum, item) => sum + item.allocated,
  0,
);
const totalSpent = budgetData.reduce((sum, item) => sum + item.spent, 0);
const utilizationRate = (totalSpent / totalAllocated) * 100;

export default function BudgetAnalysis() {
  const [perCapitaView, setPerCapitaView] = useState<"Quarterly" | "Annual">(
    "Quarterly",
  );
  const perCapitaData =
    perCapitaView === "Quarterly" ? quarterlyPerCapitaData : annualPerCapitaData;
  const latestPerCapitaPoint = perCapitaData[perCapitaData.length - 1];
  const previousPerCapitaPoint = perCapitaData[perCapitaData.length - 2];
  const perCapitaChangePct =
    previousPerCapitaPoint && previousPerCapitaPoint.periodPerCapita > 0
      ? ((latestPerCapitaPoint.periodPerCapita -
          previousPerCapitaPoint.periodPerCapita) /
          previousPerCapitaPoint.periodPerCapita) *
        100
      : 0;

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 pt-16 lg:pt-8">
      <div className="mb-4 sm:mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#284d44] mb-2">
          Budget Implementation Analysis
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Comprehensive overview of budget allocation and expenditure
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Financial Year Journey
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
          {/* <div className="flex items-center gap-2">
            <h5 className="text-sm sm:text-base text-gray-600">
              Select Frequency:
            </h5>
            <select className="text-sm sm:text-base text-gray-600 border border-gray-300 rounded-md px-4 py-2">
              <option value="Annual">Annual</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Bi-annual">Bi-annual</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div> */}
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
                Total Allocation
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800 truncate">
                ₦{totalAllocated.toLocaleString()}
              </p>
            </div>
            <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Total Expenditure
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800 truncate">
                ₦{totalSpent.toLocaleString()}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">IGR Band</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">
                {utilizationRate.toFixed(1)}%
              </p>
            </div>
            <TrendingDown className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 flex-shrink-0 ml-2" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Budget Utilization Rate
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">
                {utilizationRate.toFixed(1)}%
              </p>
            </div>
            <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600 flex-shrink-0 ml-2" />
          </div>
        </div>
      </div>

      <div></div>
      {/* Key Performance Indicators */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Key Performance Indicators
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {kpiIndicators.map((kpi, index) => (
            <div
              key={kpi.id}
              className="flex items-center gap-3 sm:gap-4 border border-gray-100 rounded-lg p-3 sm:p-4 hover:shadow-sm transition-shadow"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "value", value: kpi.value },
                        {
                          name: "remaining",
                          value: Math.max(0, 100 - kpi.value),
                        },
                      ]}
                      innerRadius="65%"
                      outerRadius="100%"
                      paddingAngle={2}
                      dataKey="value"
                    >
                      <Cell fill={COLORS[index % COLORS.length]} />
                      <Cell fill="#e5e7eb" />
                    </Pie>
                    <Tooltip
                      formatter={(value: number) =>
                        `${value.toFixed(1)}${kpi.unit}`
                      }
                      contentStyle={{ fontSize: "10px" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                  {kpi.category}
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-800 mb-1 truncate">
                  {kpi.name}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  {kpi.value.toFixed(1)}
                  <span className="text-sm text-gray-500 ml-1">{kpi.unit}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <div className="mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Cumulative Government Spending on Public Works and Services
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Filled area shows cumulative actual expenditure from inception to
            date, while bars show each quarter&apos;s contribution.
          </p>
        </div>
        <ResponsiveContainer width="100%" height={280} className="sm:h-[320px]">
          <ComposedChart
            data={cumulativePublicWorksSpending}
            margin={{ top: 10, right: 12, left: 0, bottom: 8 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="quarter" tick={{ fontSize: 12 }} />
            <YAxis
              yAxisId="left"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) =>
                `₦${(value / 1_000_000_000).toFixed(0)}B`
              }
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) =>
                `₦${(value / 1_000_000_000).toFixed(0)}B`
              }
            />
            <Tooltip
              formatter={(value: number, name) => [
                `₦${value.toLocaleString()}`,
                name === "cumulative"
                  ? "Cumulative Actual Expenditure (ITD)"
                  : "Quarterly Actual Spend",
              ]}
              contentStyle={{ fontSize: "10px" }}
            />
            <Legend wrapperStyle={{ fontSize: "10px" }} />
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="cumulative"
              stroke="#0ea5e9"
              fill="#0ea5e9"
              fillOpacity={0.25}
              strokeWidth={2.5}
              name="Cumulative Actual Expenditure (ITD)"
            />
            <Bar
              yAxisId="left"
              dataKey="actual"
              fill="#10b981"
              radius={[6, 6, 0, 0]}
              name="Quarterly Actual Spend"
              barSize={28}
            />
          </ComposedChart>
        </ResponsiveContainer>

        <div className="mt-5 border-t border-gray-100 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h3 className="text-sm sm:text-base font-semibold text-gray-800">
              Government Expenditure per Capita
            </h3>
            <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
              {(["Quarterly", "Annual"] as const).map((view) => (
                <button
                  key={view}
                  type="button"
                  onClick={() => setPerCapitaView(view)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    perCapitaView === view
                      ? "bg-white text-gray-800 shadow-sm"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {view}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <p className="text-[11px] text-gray-600 mb-1">
                ITD Expenditure per Capita
              </p>
              <p className="text-xl sm:text-2xl font-bold text-blue-700">
                ₦{latestPerCapitaPoint.itdPerCapita.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
              <p className="text-[11px] text-gray-600 mb-1">
                Latest {perCapitaView} per Capita
              </p>
              <p className="text-xl sm:text-2xl font-bold text-emerald-700">
                ₦
                {latestPerCapitaPoint.periodPerCapita.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
              <p className="text-[11px] text-gray-600 mb-1">
                {perCapitaView === "Quarterly" ? "QoQ Change" : "YoY Change"}
              </p>
              <p className="text-xl sm:text-2xl font-bold text-amber-700">
                {perCapitaChangePct >= 0 ? "+" : ""}
                {perCapitaChangePct.toFixed(1)}%
              </p>
              <p className="text-[10px] text-gray-500 mt-1">
                Population basis: {latestPerCapitaPoint.population.toLocaleString()}
              </p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={280} className="sm:h-[320px]">
            <ComposedChart data={perCapitaData} margin={{ top: 10, right: 12, left: 0, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" tick={{ fontSize: 12 }} />
              <YAxis
                yAxisId="left"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `₦${(value / 1_000_000_000).toFixed(0)}B`}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `₦${value.toLocaleString()}`}
              />
              <Tooltip
                formatter={(value: number, name) => {
                  if (name === "actual") return [`₦${value.toLocaleString()}`, "Actual Expenditure"];
                  return [
                    `₦${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
                    "Per Capita (₦/person)",
                  ];
                }}
                contentStyle={{ fontSize: "10px" }}
              />
              <Legend wrapperStyle={{ fontSize: "10px" }} />
              <Bar
                yAxisId="left"
                dataKey="actual"
                fill="#14b8a6"
                radius={[6, 6, 0, 0]}
                name="Actual Expenditure"
                barSize={28}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="periodPerCapita"
                stroke="#8b5cf6"
                strokeWidth={2.5}
                dot={{ r: 3 }}
                name="Per Capita (₦/person)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 1 */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
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
                {budgetByCategory.map((_, index) => (
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
      </div> */}

      {/* Charts Row 2 */}
      {/* <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
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
      </div> */}

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Government expenditure per Capita
          </h2>
        </div>
      </div> */}

      {/* IGR Performance and Composition Indicators */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* IGR performance vs target with brush */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
            IGR Performance vs Target
          </h2>
          <ResponsiveContainer
            width="100%"
            height={260}
            className="sm:h-[300px]"
          >
            <LineChart
              data={igrPerformanceData}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis
                tick={{ fontSize: 12 }}
                tickFormatter={(value) =>
                  `₦${(value / 1_000_000_000).toFixed(0)}B`
                }
              />
              <Tooltip
                formatter={(value: number) => `₦${value.toLocaleString()}`}
                contentStyle={{ fontSize: "10px" }}
              />
              <Legend wrapperStyle={{ fontSize: "10px" }} />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#8b5cf6"
                strokeWidth={2}
                name="Target IGR"
              />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#10b981"
                strokeWidth={2}
                name="Actual IGR"
              />
              <Brush
                dataKey="year"
                height={20}
                stroke="#0ea5e9"
                travellerWidth={8}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Composition indicators: stacked bars */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 space-y-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Budget Composition Indicators
          </h2>

          {/* Recurrent vs capital */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-800">
                Recurrent vs Capital Expenditure Mix
              </p>
              <p className="text-xs text-gray-500">
                Share of total expenditure
              </p>
            </div>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart
                data={[
                  {
                    name: "Expenditure Mix",
                    recurrent: expenditureMix[0].value,
                    capital: expenditureMix[1].value,
                  },
                ]}
                layout="vertical"
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <XAxis type="number" hide domain={[0, 100]} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value: number) => `${value.toFixed(1)}%`}
                />
                <Legend wrapperStyle={{ fontSize: "10px" }} />
                <Bar
                  dataKey="recurrent"
                  stackId="a"
                  fill="#f97316"
                  name="Recurrent"
                  barSize={24}
                />
                <Bar
                  dataKey="capital"
                  stackId="a"
                  fill="#22c55e"
                  name="Capital"
                  barSize={24}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Funding mix treemap */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-800">
                Funding Mix (2025)
              </p>
              <p className="text-xs text-gray-500">Share of total financing</p>
            </div>
            <div className="h-40 sm:h-44">
              <ResponsiveContainer width="100%" height="100%">
                <Treemap
                  data={fundingMix.map((item, index) => ({
                    name: item.source,
                    size: item.value,
                    fill: COLORS[index % COLORS.length],
                  }))}
                  dataKey="size"
                  stroke="#ffffff"
                  fill="#0ea5e9"
                >
                  <Tooltip
                    formatter={(value: number) => `${value.toFixed(1)}%`}
                    labelFormatter={(label) => String(label)}
                    contentStyle={{ fontSize: "10px" }}
                  />
                </Treemap>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Indicator performance heatmap and budget flow */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Heatmap */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Indicator Performance by Quarter
          </h2>
          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <table className="min-w-full text-xs sm:text-sm">
              <thead>
                <tr className="text-gray-600">
                  <th className="py-2 px-2 text-left font-semibold">
                    Indicator
                  </th>
                  <th className="py-2 px-2 text-center font-semibold">Q1</th>
                  <th className="py-2 px-2 text-center font-semibold">Q2</th>
                  <th className="py-2 px-2 text-center font-semibold">Q3</th>
                  <th className="py-2 px-2 text-center font-semibold">Q4</th>
                </tr>
              </thead>
              <tbody>
                {indicatorHeatmapData.map((row) => (
                  <tr key={row.indicator} className="border-t border-gray-100">
                    <td className="py-2 px-2">
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-800">
                          {row.indicator}
                        </span>
                        <span className="text-[11px] uppercase tracking-wide text-gray-500">
                          {row.category}
                        </span>
                      </div>
                    </td>
                    {(["q1", "q2", "q3", "q4"] as const).map((q) => {
                      const value = row[q];
                      const intensity =
                        value >= 85
                          ? "bg-emerald-500"
                          : value >= 70
                            ? "bg-emerald-400"
                            : value >= 50
                              ? "bg-amber-400"
                              : "bg-rose-500";
                      return (
                        <td key={q} className="py-2 px-2 text-center">
                          <div className="flex flex-col items-center gap-1">
                            <div
                              className={`w-10 sm:w-12 h-5 rounded ${intensity} bg-opacity-80`}
                            />
                            <span className="text-[11px] text-gray-800">
                              {value.toFixed(1)}%
                            </span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Budget flow staged bars */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Budget Flow: From Approval to Expenditure
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 max-w-md">
            Visualisation of how the approved budget narrows as funds are
            released, committed, and actually spent across the financial year.
          </p>
          <ResponsiveContainer
            width="100%"
            height={260}
            className="sm:h-[300px]"
          >
            <BarChart
              data={budgetFlowData}
              margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" tick={{ fontSize: 12 }} />
              <YAxis
                tick={{ fontSize: 12 }}
                tickFormatter={(value) =>
                  `₦${(value / 1_000_000_000).toFixed(0)}B`
                }
              />
              <Tooltip
                formatter={(value: number) => `₦${value.toLocaleString()}`}
              />
              <Bar dataKey="amount" fill="#0ea5e9" radius={[4, 4, 0, 0]}>
                {budgetFlowData.map((_, index) => (
                  <Cell
                    key={`flow-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top revenue generating agencies treemap */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Top Revenue Generating Agencies
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 max-w-2xl">
          Relative contribution of leading revenue-generating agencies to
          internally generated revenue (IGR). Larger blocks represent higher
          IGR.
        </p>
        <div className="h-64 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <Treemap
              data={topRevenueAgencies.map((agency, index) => ({
                name: agency.name,
                size: agency.size,
                fill: COLORS[index % COLORS.length],
              }))}
              dataKey="size"
              stroke="#ffffff"
              fill="#0ea5e9"
            >
              <Tooltip
                formatter={(value: number) => `₦${value.toLocaleString()}`}
              />
            </Treemap>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Budget by Category Table */}
      {/* <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
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
      </div> */}
    </div>
  );
}
