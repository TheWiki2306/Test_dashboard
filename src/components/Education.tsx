import { useState } from "react";
import {
  ResponsiveContainer,
  FunnelChart,
  Funnel,
  LabelList,
  Tooltip,
  Sankey,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { School, Wrench, GraduationCap, Users } from "lucide-react";

const lgaSchoolData = [
  { lga: "Arewa", primary: 82, secondary: 46 },
  { lga: "Argungu", primary: 97, secondary: 57 },
  { lga: "Birnin Kebbi", primary: 112, secondary: 70 },
  { lga: "Bunza", primary: 63, secondary: 33 },
  { lga: "Yauri", primary: 74, secondary: 47 },
  { lga: "Zuru", primary: 66, secondary: 43 },
  { lga: "Bagudo", primary: 55, secondary: 31 },
  { lga: "Suru", primary: 84, secondary: 48 },
];

const primaryEnrollmentData = [
  { stage: "Eligible", value: 100 },
  { stage: "Enrolled", value: 87 },
  { stage: "Retained", value: 78 },
  { stage: "Transition", value: 69 },
];

const secondaryEnrollmentData = [
  { stage: "Eligible", value: 100 },
  { stage: "Enrolled", value: 72 },
  { stage: "Retained", value: 61 },
  { stage: "Transition", value: 54 },
];

const toPercentStack = (
  rows: Array<{ stage: string; continuing: number; dropout: number }>,
) =>
  rows.map((item) => {
    const total = item.continuing + item.dropout;
    return {
      ...item,
      continuingPct: (item.continuing / total) * 100,
      dropoutPct: (item.dropout / total) * 100,
    };
  });

const completionByLevel = {
  primary: {
    completionRate: 61,
    transitionRate: 82,
    sankey: {
      nodes: [
        { name: "Enrolled (100%)" },
        { name: "Grade 2" },
        { name: "Grade 3" },
        { name: "Grade 4" },
        { name: "Grade 5" },
        { name: "Completers" },
        { name: "Dropout: Cost" },
        { name: "Dropout: Distance" },
        { name: "Dropout: Early Marriage" },
      ],
      links: [
        { source: 0, target: 1, value: 82 },
        { source: 0, target: 6, value: 8 },
        { source: 0, target: 7, value: 6 },
        { source: 0, target: 8, value: 4 },
        { source: 1, target: 2, value: 76 },
        { source: 1, target: 6, value: 3 },
        { source: 1, target: 7, value: 2 },
        { source: 1, target: 8, value: 1 },
        { source: 2, target: 3, value: 70 },
        { source: 2, target: 6, value: 2 },
        { source: 2, target: 7, value: 2 },
        { source: 2, target: 8, value: 2 },
        { source: 3, target: 4, value: 65 },
        { source: 3, target: 6, value: 2 },
        { source: 3, target: 7, value: 2 },
        { source: 3, target: 8, value: 1 },
        { source: 4, target: 5, value: 61 },
        { source: 4, target: 6, value: 2 },
        { source: 4, target: 7, value: 1 },
        { source: 4, target: 8, value: 1 },
      ],
    },
    stageComparison: toPercentStack([
      { stage: "G1 -> G2", continuing: 82, dropout: 18 },
      { stage: "G2 -> G3", continuing: 76, dropout: 6 },
      { stage: "G3 -> G4", continuing: 70, dropout: 6 },
      { stage: "G4 -> G5", continuing: 65, dropout: 5 },
      { stage: "G5 -> Complete", continuing: 61, dropout: 4 },
    ]),
  },
  secondary: {
    completionRate: 54,
    transitionRate: 72,
    sankey: {
      nodes: [
        { name: "Enrolled (100%)" },
        { name: "JSS2" },
        { name: "JSS3" },
        { name: "SS1" },
        { name: "SS2" },
        { name: "Completers" },
        { name: "Dropout: Cost" },
        { name: "Dropout: Distance" },
        { name: "Dropout: Early Marriage" },
      ],
      links: [
        { source: 0, target: 1, value: 72 },
        { source: 0, target: 6, value: 12 },
        { source: 0, target: 7, value: 9 },
        { source: 0, target: 8, value: 7 },
        { source: 1, target: 2, value: 66 },
        { source: 1, target: 6, value: 3 },
        { source: 1, target: 7, value: 2 },
        { source: 1, target: 8, value: 1 },
        { source: 2, target: 3, value: 61 },
        { source: 2, target: 6, value: 2 },
        { source: 2, target: 7, value: 2 },
        { source: 2, target: 8, value: 1 },
        { source: 3, target: 4, value: 57 },
        { source: 3, target: 6, value: 2 },
        { source: 3, target: 7, value: 1 },
        { source: 3, target: 8, value: 1 },
        { source: 4, target: 5, value: 54 },
        { source: 4, target: 6, value: 1 },
        { source: 4, target: 7, value: 1 },
        { source: 4, target: 8, value: 1 },
      ],
    },
    stageComparison: toPercentStack([
      { stage: "JSS1 -> JSS2", continuing: 72, dropout: 28 },
      { stage: "JSS2 -> JSS3", continuing: 66, dropout: 6 },
      { stage: "JSS3 -> SS1", continuing: 61, dropout: 5 },
      { stage: "SS1 -> SS2", continuing: 57, dropout: 4 },
      { stage: "SS2 -> Complete", continuing: 54, dropout: 3 },
    ]),
  },
};

const constructedCount = 36;
const renovatedCount = 24;
const iconScale = 30;
const constructedIcons = Math.round(
  (constructedCount / (constructedCount + renovatedCount)) * iconScale,
);
const renovatedIcons = iconScale - constructedIcons;

const newSchoolsByLga = [
  { lga: "Birnin Kebbi", constructed: 9, renovated: 5 },
  { lga: "Argungu", constructed: 7, renovated: 4 },
  { lga: "Yauri", constructed: 6, renovated: 5 },
  { lga: "Zuru", constructed: 5, renovated: 4 },
  { lga: "Arewa", constructed: 4, renovated: 3 },
  { lga: "Bagudo", constructed: 5, renovated: 3 },
];

const teacherDeploymentData = {
  nodes: [
    { name: "Recruitment Pool" },
    { name: "Primary Allocation" },
    { name: "Secondary Allocation" },
    { name: "Science Stream" },
    { name: "Arts Stream" },
    { name: "Vocational Stream" },
    { name: "Birnin Kebbi" },
    { name: "Argungu" },
    { name: "Yauri" },
    { name: "Zuru" },
    { name: "Bagudo" },
    { name: "Understaffed Areas" },
  ],
  links: [
    { source: 0, target: 1, value: 700 },
    { source: 0, target: 2, value: 500 },
    { source: 1, target: 3, value: 280 },
    { source: 1, target: 4, value: 250 },
    { source: 1, target: 5, value: 130 },
    { source: 1, target: 11, value: 40 },
    { source: 2, target: 3, value: 220 },
    { source: 2, target: 4, value: 180 },
    { source: 2, target: 5, value: 80 },
    { source: 2, target: 11, value: 20 },
    { source: 3, target: 6, value: 130 },
    { source: 3, target: 7, value: 110 },
    { source: 3, target: 8, value: 90 },
    { source: 3, target: 9, value: 80 },
    { source: 3, target: 10, value: 70 },
    { source: 4, target: 6, value: 120 },
    { source: 4, target: 7, value: 100 },
    { source: 4, target: 8, value: 75 },
    { source: 4, target: 9, value: 60 },
    { source: 4, target: 10, value: 45 },
    { source: 5, target: 6, value: 70 },
    { source: 5, target: 7, value: 45 },
    { source: 5, target: 8, value: 35 },
    { source: 5, target: 9, value: 25 },
    { source: 5, target: 10, value: 15 },
  ],
};

const totalTeachersRecruited = 1200;
const totalTeachersDeployed = 1070;
const undeployedBacklog = totalTeachersRecruited - totalTeachersDeployed;
const deploymentRate = (totalTeachersDeployed / totalTeachersRecruited) * 100;

export default function Education() {
  const [activeLga, setActiveLga] = useState(lgaSchoolData[0]);
  const [completionLevel, setCompletionLevel] =
    useState<keyof typeof completionByLevel>("primary");
  const maxSchoolValue = Math.max(
    ...lgaSchoolData.flatMap((item) => [item.primary, item.secondary]),
  );
  const selectedCompletion = completionByLevel[completionLevel];
  const completionRate = selectedCompletion.completionRate;
  const dropoutRate = 100 - completionRate;
  const firstStageTransitionRate = selectedCompletion.transitionRate;
  const levelLabel = completionLevel === "primary" ? "Primary" : "Secondary";
  const primaryEnrollmentRate =
    primaryEnrollmentData.find((item) => item.stage === "Enrolled")?.value ?? 0;
  const secondaryEnrollmentRate =
    secondaryEnrollmentData.find((item) => item.stage === "Enrolled")?.value ??
    0;
  const enrollmentGap = primaryEnrollmentRate - secondaryEnrollmentRate;

  return (
    <div className="space-y-4 sm:space-y-6 mt-6">
      {/* Lollipop / dot plot by LGA */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
          Number of Primary and Secondary Schools by Local Government
        </h4>
        <p className="text-xs text-gray-500 mb-4">
          Lollipop chart comparing primary and secondary school counts by LGA.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,220px] gap-4">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 sm:p-4">
            <svg
              viewBox={`0 0 780 ${lgaSchoolData.length * 38 + 70}`}
              className="w-full h-[280px] sm:h-[320px]"
            >
              {/* Axis grid/ticks */}
              {[0, 25, 50, 75, 100, 125].map((tick) => {
                const x = 140 + (tick / maxSchoolValue) * 600;
                return (
                  <g key={tick}>
                    <line
                      x1={x}
                      y1={20}
                      x2={x}
                      y2={lgaSchoolData.length * 38 + 20}
                      stroke="#e5e7eb"
                      strokeDasharray="3 3"
                    />
                    <text
                      x={x}
                      y={lgaSchoolData.length * 38 + 42}
                      textAnchor="middle"
                      className="fill-gray-500 text-[10px]"
                    >
                      {tick}
                    </text>
                  </g>
                );
              })}

              {/* Rows */}
              {lgaSchoolData.map((item, index) => {
                const rowY = 35 + index * 38;
                const primaryX = 140 + (item.primary / maxSchoolValue) * 600;
                const secondaryX =
                  140 + (item.secondary / maxSchoolValue) * 600;
                const isActive = activeLga.lga === item.lga;

                return (
                  <g key={item.lga} onMouseEnter={() => setActiveLga(item)}>
                    <text
                      x={8}
                      y={rowY + 4}
                      className={`text-[11px] ${
                        isActive ? "fill-emerald-700" : "fill-gray-700"
                      }`}
                    >
                      {item.lga}
                    </text>

                    {/* Primary lollipop */}
                    <line
                      x1={140}
                      y1={rowY - 6}
                      x2={primaryX}
                      y2={rowY - 6}
                      stroke={isActive ? "#059669" : "#10b981"}
                      strokeWidth={2.5}
                      opacity={0.9}
                    />
                    <circle
                      cx={primaryX}
                      cy={rowY - 6}
                      r={isActive ? 5.2 : 4.4}
                      fill="#10b981"
                      className="transition-all duration-300"
                    />

                    {/* Secondary lollipop */}
                    <line
                      x1={140}
                      y1={rowY + 6}
                      x2={secondaryX}
                      y2={rowY + 6}
                      stroke={isActive ? "#1d4ed8" : "#3b82f6"}
                      strokeWidth={2.5}
                      opacity={0.9}
                    />
                    <circle
                      cx={secondaryX}
                      cy={rowY + 6}
                      r={isActive ? 5.2 : 4.4}
                      fill="#3b82f6"
                      className="transition-all duration-300"
                    />
                  </g>
                );
              })}
            </svg>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 sm:p-4">
            <p className="text-xs font-semibold text-gray-700 mb-2">Series</p>
            <div className="space-y-2 text-[11px] text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Primary schools
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                Secondary schools
              </div>
            </div>
            <div className="rounded-lg border border-emerald-100 bg-white p-3">
              <p className="text-xs text-gray-500">Highlighted LGA</p>
              <p className="text-sm font-semibold text-gray-800">
                {activeLga.lga}
              </p>
              <p className="text-xs text-emerald-700 font-medium mt-1">
                Primary: {activeLga.primary.toLocaleString()}
              </p>
              <p className="text-xs text-blue-700 font-medium">
                Secondary: {activeLga.secondary.toLocaleString()}
              </p>
              <p className="text-xs text-gray-700 font-semibold mt-1.5">
                Total:{" "}
                {(activeLga.primary + activeLga.secondary).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
          School Enrollment Rate (Primary and Secondary)
        </h4>
        <p className="text-xs text-gray-500 mb-4">
          Executive snapshot of primary vs secondary enrollment rates.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
            <p className="text-[11px] text-gray-600 mb-1">
              Primary Enrollment Rate
            </p>
            <p className="text-2xl font-bold text-emerald-700">
              {primaryEnrollmentRate.toFixed(1)}%
            </p>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
            <p className="text-[11px] text-gray-600 mb-1">
              Secondary Enrollment Rate
            </p>
            <p className="text-2xl font-bold text-blue-700">
              {secondaryEnrollmentRate.toFixed(1)}%
            </p>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
            <p className="text-[11px] text-gray-600 mb-1">
              Gap (Primary - Secondary)
            </p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-amber-700">
                {enrollmentGap.toFixed(1)}pp
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
          School Completion Rates
        </h4>
        <p className="text-xs text-gray-500 mb-4">
          Flow from 100% initial enrollment through progression stages, with
          dropout reason tributaries for {levelLabel.toLowerCase()} education.
        </p>
        <div className="mb-4 inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
          {(["primary", "secondary"] as const).map((level) => {
            const active = completionLevel === level;
            return (
              <button
                key={level}
                type="button"
                onClick={() => setCompletionLevel(level)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                  active
                    ? "bg-white text-gray-800 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {level === "primary" ? "Primary" : "Secondary"}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
            <p className="text-[11px] text-gray-600 mb-1">Completion Rate</p>
            <p className="text-2xl font-bold text-emerald-700">
              {completionRate.toFixed(1)}%
            </p>
          </div>
          <div className="rounded-lg border border-rose-200 bg-rose-50 p-3">
            <p className="text-[11px] text-gray-600 mb-1">Dropout Rate</p>
            <p className="text-2xl font-bold text-rose-700">
              {dropoutRate.toFixed(1)}%
            </p>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
            <p className="text-[11px] text-gray-600 mb-1">
              Transition to Next Stage
            </p>
            <p className="text-2xl font-bold text-blue-700">
              {firstStageTransitionRate.toFixed(1)}%
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-gray-200 p-3 sm:p-4">
          <p className="text-xs font-semibold text-gray-700 mb-2">
            Grade-to-grade retention vs dropout (100% stacked)
          </p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={selectedCompletion.stageComparison}
                barCategoryGap={20}
                margin={{ top: 8, right: 16, left: 4, bottom: 4 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="stage" tick={{ fontSize: 11 }} />
                <YAxis
                  domain={[0, 100]}
                  tickFormatter={(value: number) => `${value}%`}
                  tick={{ fontSize: 11 }}
                />
                <Tooltip
                  formatter={(value: number, name) => [
                    `${value.toFixed(1)}%`,
                    name === "continuingPct" ? "Continuing" : "Dropout",
                  ]}
                  contentStyle={{
                    fontSize: "10px",
                  }}
                />
                <Legend
                  formatter={(value) =>
                    value === "continuingPct" ? "Continuing" : "Dropout"
                  }
                  wrapperStyle={{
                    fontSize: "10px",
                  }}
                />
                <Bar
                  dataKey="continuingPct"
                  stackId="cohort"
                  fill={completionLevel === "primary" ? "#10b981" : "#3b82f6"}
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="dropoutPct"
                  stackId="cohort"
                  fill="#f97316"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Split icon grid for constructed vs renovated */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
          Number of New Schools (Constructed vs. Renovated)
        </h4>
        <p className="text-xs text-gray-500 mb-4">
          Split icon grid showing delivery mix between new builds and
          renovations.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 sm:p-4">
            <p className="text-xs font-semibold text-emerald-700 mb-2">
              Constructed
            </p>
            <div className="grid grid-cols-6 gap-1.5">
              {Array.from({ length: constructedIcons }).map((_, index) => (
                <div
                  key={`constructed-${index}`}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 text-white shadow-sm transition-transform duration-300 hover:scale-105"
                >
                  <School className="h-4 w-4" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-emerald-800 mt-3">
              {constructedCount} schools
            </p>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 sm:p-4">
            <p className="text-xs font-semibold text-amber-700 mb-2">
              Renovated
            </p>
            <div className="grid grid-cols-6 gap-1.5">
              {Array.from({ length: renovatedIcons }).map((_, index) => (
                <div
                  key={`renovated-${index}`}
                  className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-amber-500 text-amber-600 bg-white transition-transform duration-300 hover:scale-105"
                >
                  <Wrench className="h-4 w-4" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-amber-800 mt-3">
              {renovatedCount} schools
            </p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold text-gray-700 mb-2">
            LGA-level small multiples
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {newSchoolsByLga.map((item) => (
              <div
                key={item.lga}
                className="rounded-lg border border-gray-200 bg-gray-50 p-2.5"
              >
                <p className="text-[11px] font-semibold text-gray-700 mb-2">
                  {item.lga}
                </p>
                <div className="space-y-1.5">
                  <div>
                    <div className="flex justify-between text-[10px] text-gray-600 mb-1">
                      <span>Constructed</span>
                      <span>{item.constructed}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-200">
                      <div
                        className="h-1.5 rounded-full bg-emerald-500"
                        style={{ width: `${(item.constructed / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] text-gray-600 mb-1">
                      <span>Renovated</span>
                      <span>{item.renovated}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-200">
                      <div
                        className="h-1.5 rounded-full bg-amber-500"
                        style={{ width: `${(item.renovated / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teacher recruitment and deployment flow */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
          Teachers Recruitment and Deployment
        </h4>
        <p className="text-xs text-gray-500 mb-4">
          Recruitment pool to school levels, subject streams, and LGA
          destinations. Thin streams to understaffed areas indicate deployment
          gaps.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
            <p className="text-[11px] text-gray-600 mb-1">
              Total Recruited (Inception to Date)
            </p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-blue-700">
                {totalTeachersRecruited.toLocaleString()}
              </p>
              <Users className="h-5 w-5 text-blue-600" />
            </div>
          </div>

          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
            <p className="text-[11px] text-gray-600 mb-1">
              Total Deployed (Inception to Date)
            </p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-emerald-700">
                {totalTeachersDeployed.toLocaleString()}
              </p>
              <GraduationCap className="h-5 w-5 text-emerald-600" />
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
            <p className="text-[11px] text-gray-600 mb-1">Deployment Rate</p>
            <p className="text-2xl font-bold text-gray-800">
              {deploymentRate.toFixed(1)}%
            </p>
            <div className="mt-2 h-1.5 rounded-full bg-gray-200">
              <div
                className="h-1.5 rounded-full bg-emerald-500"
                style={{ width: `${Math.min(deploymentRate, 100)}%` }}
              />
            </div>
          </div>

          <div className="rounded-lg border border-rose-200 bg-rose-50 p-3">
            <p className="text-[11px] text-gray-600 mb-1">Undeployed Backlog</p>
            <p className="text-2xl font-bold text-rose-700">
              {undeployedBacklog.toLocaleString()}
            </p>
            <span className="mt-2 inline-flex items-center rounded-full bg-rose-100 text-rose-700 px-2 py-0.5 text-[10px] font-semibold">
              Requires priority deployment
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
