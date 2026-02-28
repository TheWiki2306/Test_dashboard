import {
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

type HealthProps = {
  selectedYear: string;
};

const infantMortalityRate = 65;
const maternalMortalityRate = 42;

const gaugeSegments = [
  { name: "Very High", value: 20, fill: "#ef4444" },
  { name: "High", value: 20, fill: "#f97316" },
  { name: "Moderate", value: 20, fill: "#facc15" },
  { name: "Good", value: 20, fill: "#22c55e" },
  { name: "Very Good", value: 20, fill: "#16a34a" },
];

const buildFacilitiesTimeline = (year: string) => [
  { phase: `Q1 ${year}`, built: 4, renovated: 2 },
  { phase: `Q2 ${year}`, built: 6, renovated: 3 },
  { phase: `Q3 ${year}`, built: 5, renovated: 4 },
  { phase: `Q4 ${year}`, built: 7, renovated: 3 },
];

const healthInsuranceCoverage = 62;
const waffleTotalSquares = 100;
const waffleSquares = Array.from(
  { length: waffleTotalSquares },
  (_, index) => ({
    id: index,
    filled: index < healthInsuranceCoverage,
  }),
);

const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const immunizationHeatmap = months.map((month, index) => ({
  id: `${index}-${month}`,
  month,
  coverage:
    index < 3 ? 72 + index * 3 : index < 8 ? 80 + index : 85 + (index - 8) * 2,
}));

function getHeatColor(value: number) {
  if (value >= 90) return "bg-emerald-500";
  if (value >= 80) return "bg-emerald-400";
  if (value >= 70) return "bg-amber-400";
  return "bg-rose-500";
}

function getGaugeNeedleAngle(value: number, max: number = 100) {
  const bounded = Math.max(0, Math.min(value, max));
  return -90 + (bounded / max) * 180;
}

export default function Health({ selectedYear }: HealthProps) {
  const facilitiesTimeline = buildFacilitiesTimeline(selectedYear);
  const infantAngle = getGaugeNeedleAngle(infantMortalityRate);
  const maternalAngle = getGaugeNeedleAngle(maternalMortalityRate);

  return (
    <div className="space-y-4 sm:space-y-6 mt-6">
      {/* Speedometers for mortality rates and facilities timeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Infant mortality rate */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">
            Infant Mortality Rate
          </h4>
          <p className="text-xs text-gray-500 mb-3">
            Lower values are better. Gauge shows current rate relative to
            target.
          </p>
          <div className="relative h-52 sm:h-60">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={gaugeSegments}
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  innerRadius="70%"
                  outerRadius="100%"
                  stroke="#ffffff"
                  strokeWidth={1.5}
                >
                  {gaugeSegments.map((segment) => (
                    <Cell key={segment.name} fill={segment.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div
                className="origin-bottom h-16 w-1 bg-slate-900 rounded-full shadow-md transition-transform duration-700 ease-out"
                style={{ transform: `rotate(${infantAngle}deg)` }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-slate-900 border-2 border-white" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-6 flex flex-col items-center gap-1">
              <span className="text-xl sm:text-2xl font-bold text-slate-900">
                {infantMortalityRate}
              </span>
              <span className="text-[11px] text-gray-500">
                deaths per 1,000 live births
              </span>
            </div>
          </div>
          <div className="mt-3 text-xs flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f97316]" />
            <span className="text-gray-700 font-medium">Infant mortality</span>
            <span className="text-gray-500">
              {infantMortalityRate} deaths / 1,000 live births
            </span>
          </div>
        </div>

        {/* Maternal mortality rate */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">
            Maternal Mortality Rate
          </h4>
          <p className="text-xs text-gray-500 mb-3">
            Gauge shows current maternal deaths relative to national target.
          </p>
          <div className="relative h-52 sm:h-60">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={gaugeSegments}
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  innerRadius="70%"
                  outerRadius="100%"
                  stroke="#ffffff"
                  strokeWidth={1.5}
                >
                  {gaugeSegments.map((segment) => (
                    <Cell key={segment.name} fill={segment.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div
                className="origin-bottom h-16 w-1 bg-slate-900 rounded-full shadow-md transition-transform duration-700 ease-out"
                style={{ transform: `rotate(${maternalAngle}deg)` }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-slate-900 border-2 border-white" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-6 flex flex-col items-center gap-1">
              <span className="text-xl sm:text-2xl font-bold text-slate-900">
                {maternalMortalityRate}
              </span>
              <span className="text-[11px] text-gray-500">
                deaths per 100,000 live births
              </span>
            </div>
          </div>
          <div className="mt-3 text-xs flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
            <span className="text-gray-700 font-medium">
              Maternal mortality
            </span>
          </div>
        </div>

        {/* Gantt-style timeline for facilities */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
            Health Facilities Built & Renovated
          </h4>
          <p className="text-[11px] text-gray-500 mb-2">
            Year:{" "}
            <span className="font-semibold text-gray-800">{selectedYear}</span>
          </p>
          <p className="text-xs text-gray-500 mb-3">
            Each bar block represents progress within the quarter.
          </p>
          <div className="h-52 sm:h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={facilitiesTimeline}
                layout="vertical"
                margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis
                  type="category"
                  dataKey="phase"
                  tick={{ fontSize: 12 }}
                  width={70}
                />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar
                  dataKey="built"
                  stackId="a"
                  fill="#0ea5e9"
                  name="Built"
                  radius={[4, 0, 0, 4]}
                  isAnimationActive
                />
                <Bar
                  dataKey="renovated"
                  stackId="a"
                  fill="#10b981"
                  name="Renovated"
                  radius={[0, 4, 4, 0]}
                  isAnimationActive
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Waffle chart & immunization heat map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Waffle chart for Health Insurance Coverage */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">
            Health Insurance Coverage (Population)
          </h4>
          <p className="text-xs text-gray-500 mb-3">
            Each square represents 1% of the target population enrolled in a
            health insurance scheme.
          </p>
          <div className="flex items-center gap-4">
            <div className="grid grid-cols-10 gap-0.5 sm:gap-1 w-40 sm:w-48">
              {waffleSquares.map((square) => (
                <div
                  key={square.id}
                  className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-[2px] transition-transform duration-300 ${
                    square.filled
                      ? "bg-emerald-500 hover:scale-110"
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <div className="space-y-2 text-xs">
              <p className="text-2xl sm:text-3xl font-bold text-emerald-600">
                {healthInsuranceCoverage}%
              </p>
              <p className="text-gray-500 max-w-[10rem]">
                of residents covered by a basic health insurance package.
              </p>
            </div>
          </div>
        </div>

        {/* Heat map calendar for Immunization Coverage */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">
            Immunization Coverage by Month
          </h4>
          <p className="text-xs text-gray-500 mb-3">
            Deeper greens indicate higher coverage. Hover to see details.
          </p>
          <div className="grid grid-cols-6 gap-2 sm:gap-3">
            {immunizationHeatmap.map((item) => (
              <div key={item.id} className="flex flex-col items-center gap-1">
                <div
                  className={`h-8 w-8 sm:h-10 sm:w-10 rounded-lg ${getHeatColor(
                    item.coverage,
                  )} transition-transform duration-300 hover:scale-110`}
                />
                <span className="text-[10px] text-gray-600">{item.month}</span>
                <span className="text-[10px] text-gray-500">
                  {item.coverage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
