import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ReferenceArea,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  Briefcase,
  Landmark,
} from "lucide-react";

const povertyTrendData = [
  { year: "2020", poverty: 47, target: 40 },
  { year: "2021", poverty: 44, target: 38 },
  { year: "2022", poverty: 41, target: 36 },
  { year: "2023", poverty: 37, target: 33 },
  { year: "2024", poverty: 34, target: 30 },
  { year: "2025", poverty: 31, target: 28 },
];

const inflationSparklineData = [
  { period: "Jan", value: 17.2 },
  { period: "Feb", value: 16.8 },
  { period: "Mar", value: 16.5 },
  { period: "Apr", value: 16.1 },
  { period: "May", value: 15.8 },
  { period: "Jun", value: 15.4 },
];

const jobsCreatedByQuarter = [
  { quarter: "Q1", jobs: 2400 },
  { quarter: "Q2", jobs: 3100 },
  { quarter: "Q3", jobs: 3600 },
  { quarter: "Q4", jobs: 4100 },
];

const unemployment = { actual: 13.8, target: 10.0 };
const security = { reduction: 34, target: 40, baselineIncidents: 1200 };

const kpiCards = [
  {
    title: "Poverty Rate",
    value: "31.0%",
    delta: "-3.0pp YoY",
    improving: true,
    Icon: Landmark,
  },
  {
    title: "Unemployment Rate",
    value: "13.8%",
    delta: "-1.2pp YoY",
    improving: true,
    Icon: Briefcase,
  },
  {
    title: "Inflation Rate",
    value: "15.4%",
    delta: "-1.8pp (6 mo)",
    improving: true,
    Icon: TrendingDown,
  },
  {
    title: "Jobs Created",
    value: "13,200",
    delta: "+18% YoY",
    improving: true,
    Icon: TrendingUp,
  },
  {
    title: "Security Incidents Reduced",
    value: "34%",
    delta: "+6pp vs last year",
    improving: true,
    Icon: ShieldCheck,
  },
];

export default function Others() {
  const unemploymentActualPct = Math.min((unemployment.actual / 40) * 100, 100);
  const unemploymentTargetPct = Math.min((unemployment.target / 40) * 100, 100);
  const remainingIncidents = Math.round(
    security.baselineIncidents * (1 - security.reduction / 100),
  );

  return (
    <div className="space-y-4 sm:space-y-6 mt-6">
      {/* Top row: KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        {kpiCards.map((item) => (
          <div
            key={item.title}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-gray-600">{item.title}</p>
              <item.Icon className="h-4 w-4 text-slate-600" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">
              {item.value}
            </p>
            <div className="mt-1 flex items-center gap-1 text-xs">
              {item.improving ? (
                <TrendingDown className="h-3.5 w-3.5 text-emerald-600" />
              ) : (
                <TrendingUp className="h-3.5 w-3.5 text-rose-600" />
              )}
              <span
                className={
                  item.improving ? "text-emerald-600" : "text-rose-600"
                }
              >
                {item.delta}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Poverty trend card */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
            Poverty Rate Trend
          </h4>
          <p className="text-xs text-gray-500 mb-3">
            Decline in poverty rate against annual reduction targets.
          </p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart
              data={povertyTrendData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} unit="%" />
              <ReferenceArea y1={0} y2={30} fill="#dcfce7" fillOpacity={0.45} />
              <Tooltip formatter={(value: number) => `${value}%`} />
              <Line
                type="monotone"
                dataKey="poverty"
                stroke="#ef4444"
                strokeWidth={2.5}
                dot={{ r: 3 }}
                name="Poverty Rate"
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#2563eb"
                strokeWidth={2}
                strokeDasharray="5 4"
                dot={{ r: 2 }}
                name="Target"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Unemployment bullet / gauge card */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
            Unemployment Rate (Bullet Gauge)
          </h4>
          <p className="text-xs text-gray-500 mb-3">
            Actual rate against target with qualitative risk bands.
          </p>
          <div className="space-y-3">
            <div className="relative h-8 rounded-md overflow-hidden border border-gray-200">
              <div className="absolute inset-0 flex">
                <div
                  className="h-full bg-emerald-100"
                  style={{ width: "25%" }}
                />
                <div className="h-full bg-amber-100" style={{ width: "25%" }} />
                <div className="h-full bg-rose-100" style={{ width: "50%" }} />
              </div>
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 h-3 rounded-r-md bg-blue-600 transition-all duration-700"
                style={{ width: `${unemploymentActualPct}%` }}
              />
              <div
                className="absolute top-0 h-full w-[2px] bg-gray-900"
                style={{ left: `${unemploymentTargetPct}%` }}
                title={`Target ${unemployment.target}%`}
              />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">
                Target: {unemployment.target}%
              </span>
              <span className="font-bold text-blue-700">
                Actual: {unemployment.actual}%
              </span>
            </div>
          </div>
        </div>

        {/* Inflation sparkline card */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
            Inflation Rate Trend
          </h4>
          <p className="text-xs text-gray-500 mb-3">
            Full time-series view to clearly show trend direction, peaks, and
            gradual decline over time.
          </p>
          <div className="h-44 sm:h-52">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={inflationSparklineData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" tick={{ fontSize: 11 }} />
                <YAxis
                  tick={{ fontSize: 11 }}
                  domain={["dataMin - 0.5", "dataMax + 0.5"]}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip formatter={(value: number) => `${value}%`} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#f59e0b"
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: "#f59e0b", strokeWidth: 0 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-gray-600">
            <span>
              Peak: <span className="font-semibold text-rose-600">17.2%</span>
            </span>
            <span>
              Latest:{" "}
              <span className="font-semibold text-amber-700">15.4%</span>
            </span>
          </div>
        </div>

        {/* Jobs created bar chart card */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
            Jobs Created by Quarter
          </h4>
          <p className="text-xs text-gray-500 mb-3">
            Quarterly trend of direct and indirect jobs generated.
          </p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={jobsCreatedByQuarter}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" tick={{ fontSize: 12 }} />
              <YAxis
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
              />
              <Tooltip formatter={(value: number) => value.toLocaleString()} />
              <Bar dataKey="jobs" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Security reduction progress card */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
          Security Incident Reduction Progress
        </h4>
        <p className="text-xs text-gray-500 mb-4">
          Progress against annual reduction target and remaining incident
          burden.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-[220px,1fr] gap-4 sm:gap-6 items-center">
          <div className="flex justify-center">
            <div
              className="relative h-36 w-36 rounded-full"
              style={{
                background: `conic-gradient(#22c55e ${security.reduction}%, #e5e7eb ${security.reduction}% 100%)`,
              }}
            >
              <div className="absolute inset-3 rounded-full bg-white flex items-center justify-center flex-col">
                <span className="text-2xl font-bold text-emerald-700">
                  {security.reduction}%
                </span>
                <span className="text-[11px] text-gray-500">Reduced</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-700">
              Baseline incidents:{" "}
              <span className="font-semibold">
                {security.baselineIncidents}
              </span>
            </p>
            <p className="text-sm text-gray-700">
              Remaining incidents:{" "}
              <span className="font-semibold">{remainingIncidents}</span>
            </p>
            <p className="text-sm text-gray-700">
              Target reduction:{" "}
              <span className="font-semibold text-blue-700">
                {security.target}%
              </span>
            </p>
            <div className="h-2 rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-emerald-500"
                style={{
                  width: `${Math.min((security.reduction / security.target) * 100, 100)}%`,
                }}
              />
            </div>
            <p className="text-xs text-gray-500">
              {Math.min(
                (security.reduction / security.target) * 100,
                100,
              ).toFixed(1)}
              % of reduction target achieved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
