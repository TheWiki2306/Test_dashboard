import {
  LayoutDashboard,
  DollarSign,
  FolderKanban,
  Target,
  TrendingUp,
  X,
} from "lucide-react";

type Page = "budget" | "project" | "program" | "socioeconomic";

interface SidebarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const menuItems = [
  {
    id: "budget" as Page,
    label: "Budget Analysis",
    icon: DollarSign,
    shortLabel: "Budget",
  },
  {
    id: "project" as Page,
    label: "Project Analysis",
    icon: FolderKanban,
    shortLabel: "Projects",
  },
  {
    id: "program" as Page,
    label: "Program Tracking",
    icon: Target,
    shortLabel: "Programs",
  },
  {
    id: "socioeconomic" as Page,
    label: "Social Economic Data",
    icon: TrendingUp,
    shortLabel: "Socio-Economic",
  },
];

export default function Sidebar({
  activePage,
  setActivePage,
  isOpen = false,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Mobile sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 lg:p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <LayoutDashboard className="w-6 h-6 lg:w-8 lg:h-8 text-primary-600" />
            <h1 className="text-lg lg:text-xl font-bold text-gray-800">
              Kebbi Dashboard
            </h1>
          </div>
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-3 lg:p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`w-full flex items-center space-x-3 px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg transition-colors text-left ${
                  isActive
                    ? "bg-primary-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-xs lg:text-sm leading-tight">
                  <span className="hidden lg:inline">{item.label}</span>
                  <span className="lg:hidden">{item.shortLabel}</span>
                </span>
              </button>
            );
          })}
        </nav>

        <div className="p-3 lg:p-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Kebbi State Infographics
          </p>
        </div>
      </aside>
    </>
  );
}
