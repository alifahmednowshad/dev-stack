import type { Technology } from "../types/technology";

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

// Badge color styles
const badgeColors: Record<string, string> = {
  Popular: "border-blue-100 bg-blue-50 text-blue-500",

  Versatile: "border-emerald-100 bg-emerald-50 text-emerald-500",

  Fast: "border-orange-100 bg-orange-50 text-orange-500",

  Standard: "border-emerald-100 bg-emerald-50 text-emerald-500",

  "Top SQL": "border-blue-100 bg-blue-50 text-blue-600",

  Cache: "border-red-100 bg-red-50 text-red-500",

  Ubiquitous: "border-amber-100 bg-amber-50 text-amber-500",

  Essential: "border-sky-100 bg-sky-50 text-sky-500",

  Robust: "border-blue-100 bg-blue-50 text-blue-500",

  Modern: "border-cyan-100 bg-cyan-50 text-cyan-500",

  Containers: "border-blue-100 bg-blue-50 text-blue-500",
};

export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  // Get badge color
  const badgeColor =
    badgeColors[technology.badge] || "border-gray-100 bg-gray-50 text-gray-500";

  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />
        {technology.badge && (
          <span
            className={`rounded-full border px-3 py-1 text-[11px] font-medium ${badgeColor}`}
          >
            {technology.badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        {technology.name}
      </h3>
      <p className="mt-2 line-clamp-3 text-xs leading-5 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-4 flex items-center justify-between gap-2">
        <span className="rounded-md bg-gray-50 px-2 py-1 text-[10px] font-medium text-gray-600">
          {technology.category}
        </span>
        <span className="rounded-md bg-gray-50 px-2 py-1 text-[10px] font-medium text-gray-600">
          {technology.difficulty}
        </span>
        <span className="flex items-center gap-1 text-xs font-medium text-gray-700">
          <span className="text-yellow-400">★</span>
          {technology.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-md px-4 py-2 text-xs font-medium transition-all duration-300 ${
          isAdded
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "bg-gray-900 text-white hover:bg-[#e91e83]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
