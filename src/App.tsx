import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import BudgetAnalysis from "./pages/BudgetAnalysis";
import ProjectAnalysis from "./pages/ProjectAnalysis";
import ProgramTracking from "./pages/ProgramTracking";
import SocioEconomicData from "./pages/SocioEconomicData";
import { Menu, X } from "lucide-react";

type Page = "budget" | "project" | "program" | "socioeconomic";

function App() {
  const [activePage, setActivePage] = useState<Page>("budget");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePageChange = (page: Page) => {
    setActivePage(page);
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case "budget":
        return <BudgetAnalysis />;
      case "project":
        return <ProjectAnalysis />;
      case "program":
        return <ProgramTracking />;
      case "socioeconomic":
        return <SocioEconomicData />;
      default:
        return <BudgetAnalysis />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        activePage={activePage}
        setActivePage={handlePageChange}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <main className="flex-1 overflow-auto lg:ml-0">
        <div className="min-h-screen">{renderPage()}</div>
      </main>
    </div>
  );
}

export default App;
