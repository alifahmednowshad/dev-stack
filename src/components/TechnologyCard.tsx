import type { Technology } from "../types/technology";

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-[11px] font-medium text-[#e91e83]">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 line-clamp-3 text-xs leading-5 text-gray-500">
        {technology.description}
      </p>

      {/* Information */}
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

      {/* Button */}
      <button
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
