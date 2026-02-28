import { ArrowLeft, CalendarDays, FileText, Hourglass } from "lucide-react";

export type ProjectPhoto = {
  id: string;
  src: string;
  caption?: string;
  date?: string;
};

export type ProjectDetail = {
  name: string;
  description: string;
  projectType: string;
  startDate: string;
  timeline: string;
  overview: string;
  status: string;
  contractedCompany?: string;
  photos?: ProjectPhoto[];
};

type ProjectDetailsProps = {
  project: ProjectDetail;
  onBack: () => void;
};

export default function ProjectDetails({
  project,
  onBack,
}: ProjectDetailsProps) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 pt-16 lg:pt-8 space-y-4 sm:space-y-6">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 font-medium mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to project analysis
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          {project.name}
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Detailed implementation view for this project.
        </p>
      </div>

      <div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="h-4 w-4 text-blue-600" />
            <h2 className="text-sm sm:text-base font-semibold text-gray-800">
              Project Overview
            </h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            {project.overview}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <CalendarDays className="h-4 w-4 text-emerald-600" />
            <h2 className="text-sm sm:text-base font-semibold text-gray-800">
              Project Type
            </h2>
          </div>
          <p className="text-sm text-gray-700">{project.projectType}</p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <CalendarDays className="h-4 w-4 text-emerald-600" />
            <h2 className="text-sm sm:text-base font-semibold text-gray-800">
              Start Date
            </h2>
          </div>
          <p className="text-sm text-gray-700">{project.startDate}</p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <CalendarDays className="h-4 w-4 text-emerald-600" />
            <h2 className="text-sm sm:text-base font-semibold text-gray-800">
              Timeline
            </h2>
          </div>
          <p className="text-sm text-gray-700">{project.timeline}</p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`w-4 h-4 rounded-full ${project.status === "Completed" ? "bg-green-600" : project.status === "In Progress" ? "bg-blue-600" : project.status === "On Hold" ? "bg-yellow-600" : "bg-red-600"}`}
            ></div>
            <h2 className="text-sm sm:text-base font-semibold text-gray-800">
              Status
            </h2>
          </div>
          <p className="text-sm text-gray-700">{project.status}</p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <CalendarDays className="h-4 w-4 text-emerald-600" />
            <h2 className="text-sm sm:text-base font-semibold text-gray-800">
              Contracted Company
            </h2>
          </div>
          <p className="text-sm text-gray-700">{project.contractedCompany}</p>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
          Gallery
        </h3>
        <p className="text-sm text-gray-700">
          Autographs of Completed and ongoing projects
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {(project.photos ?? []).map((photo) => (
            <figure
              key={photo.id}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-100"
            >
              <img
                src={photo.src}
                alt={photo.caption ?? `${project.name} project autograph`}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = `https://picsum.photos/seed/${photo.id}/800/600`;
                }}
                className="h-full w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-medium truncate">
                  {photo.caption ?? "Project update"}
                </p>
                {photo.date && (
                  <p className="text-[11px] text-white/85 mt-0.5">
                    {photo.date}
                  </p>
                )}
              </figcaption>
            </figure>
          ))}
          {(project.photos ?? []).length === 0 && (
            <div className="col-span-full rounded-lg border border-dashed border-gray-300 p-6 text-center text-sm text-gray-500">
              No project autographs uploaded yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
