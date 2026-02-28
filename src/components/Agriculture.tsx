import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
} from "recharts";
import {
  Sprout,
  Factory,
  LandPlot,
  Tractor,
  Droplets,
  Wheat,
} from "lucide-react";

const agricultureIndicators = {
  agroProcessingFacilitiesDelivered: 42,
  totalLandSizeHectares: 520000,
  hectaresUnderCultivation: 318000,
  farmersSupported: 12850,
  irrigationCoveragePercent: 46,
};

const radarData = [
  { metric: "Processing", value: 72 },
  { metric: "Land Size", value: 90 },
  { metric: "Cultivation", value: 68 },
  { metric: "Farmers", value: 75 },
  { metric: "Irrigation", value: 46 },
];

const profileLegendItems = [
  {
    metric: "Processing",
    label: "Agro-processing Facilities Delivered",
    value:
      agricultureIndicators.agroProcessingFacilitiesDelivered.toLocaleString(),
    color: "bg-cyan-500",
  },
  {
    metric: "Land Size",
    label: "Total Land Size",
    value: `${agricultureIndicators.totalLandSizeHectares.toLocaleString()} ha`,
    color: "bg-emerald-500",
  },
  {
    metric: "Cultivation",
    label: "Hectares Under Cultivation",
    value: `${agricultureIndicators.hectaresUnderCultivation.toLocaleString()} ha`,
    color: "bg-amber-500",
  },
  {
    metric: "Farmers",
    label: "Farmers Supported",
    value: agricultureIndicators.farmersSupported.toLocaleString(),
    color: "bg-violet-500",
  },
  {
    metric: "Irrigation",
    label: "Irrigation Coverage",
    value: `${agricultureIndicators.irrigationCoveragePercent}%`,
    color: "bg-blue-500",
  },
];

const ecosystemNodes = [
  {
    id: "processing",
    label: "Agro-processing Facilities Delivered",
    value:
      agricultureIndicators.agroProcessingFacilitiesDelivered.toLocaleString(),
    icon: Factory,
    position: "top-0 left-1/2 -translate-x-1/2",
    color: "text-cyan-700 bg-cyan-50 border-cyan-200",
  },
  {
    id: "land",
    label: "Total Land Size",
    value: `${agricultureIndicators.totalLandSizeHectares.toLocaleString()} ha`,
    icon: LandPlot,
    position: "top-1/2 left-0 -translate-y-1/2",
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
  {
    id: "cultivation",
    label: "Hectares Under Cultivation",
    value: `${agricultureIndicators.hectaresUnderCultivation.toLocaleString()} ha`,
    icon: Wheat,
    position: "top-1/2 right-0 -translate-y-1/2",
    color: "text-amber-700 bg-amber-50 border-amber-200",
  },
  {
    id: "farmers",
    label: "Farmers Supported",
    value: agricultureIndicators.farmersSupported.toLocaleString(),
    icon: Tractor,
    position: "bottom-0 left-8",
    color: "text-violet-700 bg-violet-50 border-violet-200",
  },
  {
    id: "irrigation",
    label: "Irrigation Coverage",
    value: `${agricultureIndicators.irrigationCoveragePercent}%`,
    icon: Droplets,
    position: "bottom-0 right-8",
    color: "text-blue-700 bg-blue-50 border-blue-200",
  },
];

export default function Agriculture() {
  return (
    <div className="space-y-4 sm:space-y-6 mt-6">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <div className="mb-4 sm:mb-5">
          <h4 className="text-base sm:text-lg font-semibold text-gray-800">
            Agriculture Ecosystem Infographic
          </h4>
          <p className="text-xs sm:text-xs text-gray-500">
            Unified view of delivery, land utilization, farmer support, and
            irrigation.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr,0.8fr] gap-5 sm:gap-6">
          {/* Unified ecosystem layout */}
          <div className="relative min-h-[360px] sm:min-h-[390px] rounded-2xl bg-gradient-to-b from-emerald-50 via-white to-cyan-50 border border-emerald-100 p-4 sm:p-5 overflow-hidden">
            {/* Connector lines */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-[28%] h-[46%] w-px bg-emerald-200 -translate-x-1/2" />
              <div className="absolute top-1/2 left-[18%] w-[64%] h-px bg-emerald-200 -translate-y-1/2" />
              <div className="absolute left-[34%] top-[62%] w-[16%] h-px rotate-[35deg] bg-emerald-200" />
              <div className="absolute right-[34%] top-[62%] w-[16%] h-px -rotate-[35deg] bg-emerald-200" />
            </div>

            {/* Center hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-[0_20px_40px_rgba(16,185,129,0.3)]">
                <Sprout className="h-7 w-7 sm:h-8 sm:w-8" />
                <div className="absolute inset-0 rounded-full border-4 border-emerald-300/40 animate-pulse" />
              </div>
              <p className="text-[11px] sm:text-xs text-center font-semibold text-emerald-700 mt-2">
                Agriculture System Core
              </p>
            </div>

            {/* Satellite indicator nodes */}
            {ecosystemNodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  className={`absolute ${node.position} w-[44%] sm:w-[38%] rounded-xl border p-2.5 sm:p-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 ${node.color}`}
                >
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 rounded-md bg-white/80 p-1">
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] font-semibold leading-tight">
                        {node.label}
                      </p>
                      <p className="text-xs sm:text-sm font-bold mt-1">
                        {node.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Supporting radar summary */}
          <div className="rounded-2xl border border-gray-200 p-3 sm:p-4 bg-gray-50">
            <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
              Ecosystem Strength Profile
            </p>
            <p className="text-[11px] text-gray-500 mb-3">
              Relative strength across the five agriculture indicators.
            </p>
            <div className="h-64 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#d1d5db" />
                  <PolarAngleAxis
                    dataKey="metric"
                    tick={{ fontSize: 11, fill: "#4b5563" }}
                  />
                  <Radar
                    name="Agriculture"
                    dataKey="value"
                    stroke="#059669"
                    fill="#10b981"
                    fillOpacity={0.35}
                    isAnimationActive
                    animationDuration={900}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 space-y-2">
              {profileLegendItems.map((item) => (
                <div
                  key={item.metric}
                  className="flex items-center justify-between gap-3 rounded-lg bg-white border border-gray-200 px-2.5 py-2"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${item.color}`}
                    />
                    <p className="text-[11px] text-gray-700 truncate">
                      {item.label}
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-gray-800 whitespace-nowrap">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
