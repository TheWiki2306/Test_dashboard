import { ArrowRight, BarChart3, LayoutDashboard, Sparkles } from "lucide-react";

type LandingPageProps = {
  onGetStarted: () => void;
};

const highlights = [
  {
    id: "budget",
    title: "Budget Implementation",
    subtitle:
      "How resources are allocated and actually spent across key sectors.",
    tag: "Budget Analysis",
  },
  {
    id: "projects",
    title: "Projects Delivery",
    subtitle:
      "Tracking flagship projects from approval to completion, with geography and timelines.",
    tag: "Projects",
  },
  {
    id: "programs",
    title: "Programmes & Policies",
    subtitle:
      "Monitoring the reach and effectiveness of government programmes and commitments.",
    tag: "Programmes",
  },
  {
    id: "socioeconomic",
    title: "Socio‑Economic Outcomes",
    subtitle:
      "Linking spending and projects to real outcomes in jobs, education, health and welfare.",
    tag: "Socio‑Economic Data",
  },
];

const galleryItems = [
  {
    id: "gallery-1",
    src: "/assets/images/olu-1.jpg",
    alt: "Gallery 1",
  },
  {
    id: "gallery-2",
    src: "/assets/images/olu-1.jpg",
    alt: "Gallery 2",
  },
  {
    id: "gallery-3",
    src: "/assets/images/olu-1.jpg",
    alt: "Gallery 3",
  },
  {
    id: "gallery-4",
    src: "/assets/images/olu-1.jpg",
    alt: "Gallery 4",
  },
  {
    id: "gallery-5",
    src: "/assets/images/olu-1.jpg",
    alt: "Gallery 5",
  },
  {
    id: "gallery-6",
    src: "/assets/images/olu-1.jpg",
    alt: "Gallery 6",
  },
  {
    id: "gallery-7",
    src: "/assets/images/olu-1.jpg",
    alt: "Gallery 7",
  },
  {
    id: "gallery-8",
    src: "/assets/images/olu-1.jpg",
    alt: "Gallery 8",
  },
];

const commodityTickerItems = [
  { id: 1, month: "Jan 2025", commodity: "Rice (50kg)", price: "₦45,000" },
  { id: 2, month: "Jan 2025", commodity: "Maize (100kg)", price: "₦38,500" },
  { id: 3, month: "Jan 2025", commodity: "Millet (100kg)", price: "₦36,000" },
  { id: 4, month: "Jan 2025", commodity: "Sorghum (100kg)", price: "₦34,200" },
  { id: 5, month: "Jan 2025", commodity: "Beans (50kg)", price: "₦52,000" },
];

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Glow background accents */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-24 -right-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <header className="relative z-10 px-4 sm:px-8 lg:px-16 pt-6 sm:pt-8 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-400/40">
            <BarChart3 className="h-5 w-5 text-sky-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
              Kebbi Governance
            </span>
            <span className="text-sm sm:text-base font-semibold text-slate-50">
              Impact Dashboard
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          <span>Evidence of good governance.</span>
        </div>
      </header>

      {/* Commodity price ticker */}
      <section
        aria-label="Monthly commodity prices"
        className="relative z-10 mt-4 px-4 sm:px-8 lg:px-16"
      >
        <div className="flex items-center gap-2 rounded-full border border-slate-800/80 bg-[#3c7466] px-3 py-2 text-[11px] sm:text-xs text-slate-200 shadow-[0_14px_40px_rgba(15,23,42,0.9)] backdrop-blur">
          <div className="flex items-center gap-1 pr-3 border-r border-slate-700/80 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase tracking-[0.22em] text-slate-400 hidden sm:inline">
              Price watch
            </span>
            <span className="sm:hidden font-semibold text-slate-100">
              Prices
            </span>
          </div>
          <div className="relative flex-1 overflow-hidden">
            <div className="ticker-track gap-6">
              {[...commodityTickerItems, ...commodityTickerItems].map(
                (item) => (
                  <div
                    key={`${item.id}-${item.commodity}`}
                    className="inline-flex items-center gap-2 text-slate-200/90"
                  >
                    <span className="rounded-full bg-slate-800/50 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                      {item.month}
                    </span>
                    <span className="font-medium">{item.commodity}</span>
                    <span className="text-sky-200 font-semibold">
                      {item.price}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 pb-16 pt-8 sm:pt-10">
        {/* Hero section */}
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-100 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
              Real‑time analysis of budgets, projects, programmes & outcomes
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 mb-4 sm:mb-5">
              Turning government data into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-emerald-300 to-amber-200">
                clear stories of impact.
              </span>
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-slate-300 mb-6 sm:mb-8">
              This dashboard brings together{" "}
              <span className="font-semibold text-sky-100">
                budget execution, project delivery, programme performance
              </span>{" "}
              and{" "}
              <span className="font-semibold text-emerald-100">
                socio‑economic indicators
              </span>{" "}
              so leaders, citizens and partners can see how resources are being
              translated into real results for people in Kebbi State.
            </p>

            {/* How this dashboard is the solution */}
            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              <h2 className="text-sm sm:text-base font-semibold text-slate-100">
                How this dashboard helps
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 px-4 py-3 shadow-[0_0_30px_rgba(15,23,42,0.8)] backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 mb-2">
                    From fragmentation to clarity
                  </p>
                  <p className="text-xs sm:text-[13px] text-slate-200">
                    Integrates scattered spreadsheets and reports into a{" "}
                    <span className="font-semibold text-sky-100">
                      single interactive view
                    </span>{" "}
                    of commitments, spending, delivery and outcomes.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 px-4 py-3 shadow-[0_0_30px_rgba(15,23,42,0.8)] backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 mb-2">
                    From activity to impact
                  </p>
                  <p className="text-xs sm:text-[13px] text-slate-200">
                    Connects{" "}
                    <span className="font-semibold text-emerald-100">
                      budgets, projects and programmes
                    </span>{" "}
                    to measurable changes in people&apos;s lives, supporting
                    evidence‑based decisions.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onGetStarted}
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm sm:text-base font-semibold text-slate-950 shadow-[0_20px_40px_rgba(56,189,248,0.35)] transition-transform hover:-translate-y-[1px] hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Get started with the dashboard</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="mt-3 text-[11px] sm:text-xs text-slate-400">
              No sign‑in required. Jump straight into the budget, projects,
              programmes and socio‑economic analysis.
            </p>
          </div>

          {/* Autograph / signatures section */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#3c7466] blur-3xl" />
            <div className="relative rounded-3xl border border-slate-700/70 bg-emerald-300/10 px-4 py-4 sm:px-5 sm:py-5 shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Programmes & Projects
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-slate-50">
                    Autograph wall
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-full border border-slate-600/70 bg-slate-900/80 px-2 py-1 text-[10px] text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live snapshot
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 px-3 py-3 sm:px-4 sm:py-4 shadow-[0_14px_40px_rgba(15,23,42,0.9)] transition-transform hover:-translate-y-1 hover:border-sky-400/70"
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    <div className="pointer-events-none absolute inset-x-6 -bottom-10 h-24 bg-gradient-to-t from-sky-400/20 via-transparent to-transparent blur-2xl" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
                      {item.tag}
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-slate-50 mb-1">
                      {item.title}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-300 mb-4">
                      {item.subtitle}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="h-px flex-1 bg-gradient-to-r from-slate-500 via-slate-200 to-transparent mr-2 opacity-70 group-hover:from-sky-300 group-hover:via-emerald-200" />
                      <span className="font-[500] text-[11px] italic text-slate-200 group-hover:text-sky-100">
                        Gov. Delivery Suite
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery section */}
          <div className="lg:col-span-2 rounded-3xl border border-slate-700/70 bg-slate-900/70 p-4 sm:p-5 shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur">
            <div className="flex items-end justify-between mb-4">
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-slate-100">
                  Projects and Programmes Gallery
                </h2>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  Completed and ongoing projects and programmes in the state.
                </p>
              </div>
              <span className="text-[11px] text-slate-400">
                {galleryItems.length} photos
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {galleryItems.map((item) => (
                <figure
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950/70"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = `https://picsum.photos/seed/${item.id}/800/600`;
                    }}
                    className="h-full w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2.5 py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-[11px] text-slate-100 truncate">
                      {item.alt}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/70 px-4 sm:px-8 lg:px-16 py-4 sm:py-5">
        <div className="flex flex-col gap-2 sm:gap-1 text-[11px] sm:text-xs text-slate-400">
          <p>
            For Enquiry or Support Send SMS to{" "}
            <span className="font-semibold text-slate-200">
              +234 808 074 2206
            </span>{" "}
            or Email to{" "}
            <span className="font-semibold text-slate-200">
              info@openKebbi.com.ng
            </span>
          </p>
          <p className="text-slate-500">
            © 2026 - (Kebbi Governance Dashboard).
          </p>
        </div>
      </footer>
    </div>
  );
}
