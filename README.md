# Kebbi Infographics Dashboard

A comprehensive React dashboard application for visualizing Kebbi State data with infographics across four main areas:

1. **Budget Implementation Analysis** - Budget allocation and expenditure tracking
2. **Project Implementation Analysis** - Project status and performance metrics
3. **Program Tracking** - Program implementation and beneficiary tracking
4. **Social Economic Data** - Socio-economic indicators and trends

## 📚 Documentation

This project includes comprehensive business and technical documentation:

- **[Executive Summary](EXECUTIVE_SUMMARY.md)** - High-level overview for executives and decision-makers
- **[Business Documentation](DOCUMENTATION.md)** - Comprehensive business-focused documentation including objectives, benefits, ROI, and use cases
- **[User Guide](USER_GUIDE.md)** - Detailed user manual for end users of the dashboard
- **[Implementation Guide](IMPLEMENTATION_GUIDE.md)** - Technical implementation guide for IT teams and administrators
- **[Quick Reference](QUICK_REFERENCE.md)** - Quick reference guide for quick lookups and common tasks

## Features

- 🎨 Modern, responsive UI built with Tailwind CSS
- 📊 Interactive charts and infographics using Recharts
- 🧭 Sidebar navigation for easy access to different sections
- 📱 Mobile-friendly design
- ⚡ Fast development with Vite
- 🔷 TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── components/
│   │   └── Sidebar.tsx          # Navigation sidebar component
│   ├── pages/
│   │   ├── BudgetAnalysis.tsx   # Budget implementation dashboard
│   │   ├── ProjectAnalysis.tsx  # Project implementation dashboard
│   │   ├── ProgramTracking.tsx  # Program tracking dashboard
│   │   └── SocioEconomicData.tsx # Social economic data dashboard
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Global styles with Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Recharts** - Chart library for infographics
- **Lucide React** - Icon library

## Dashboard Sections

### Budget Implementation Analysis

- Monthly budget vs expenditure comparison
- Budget distribution by category (pie chart)
- Planned vs actual expenditure trends
- Key metrics: Total allocated, spent, utilization rate

### Project Implementation Analysis

- Project status distribution
- Projects by sector
- Project performance metrics (radar chart)
- Completion timeline
- Key metrics: Total projects, completed, in progress

### Program Tracking

- Program achievement vs targets
- Beneficiary growth trends
- Programs by category
- Program performance details
- Key metrics: Achievement rate, total beneficiaries

### Social Economic Data

- Population growth trends (urban vs rural)
- Education indicators (literacy, enrollment, completion)
- Health indicators
- Employment by sector
- Economic growth indicators (GDP, per capita, growth rate)
- Infrastructure access statistics

## Customization

You can customize the dashboard by:

1. **Updating Data**: Modify the data arrays in each page component to use real data
2. **Styling**: Adjust Tailwind classes or extend the theme in `tailwind.config.js`
3. **Colors**: Update the color scheme in `tailwind.config.js` or directly in components
4. **Charts**: Customize chart configurations in the Recharts components

## License

This project is open source and available for use.
