import type { Technology } from "../types/technology";

type MyStackProps = {
  stack: Technology[];
  onRemove: (id: Technology["id"]) => void;
  onRemoveAll: () => void;
};

export default function MyStack({
  stack,
  onRemove,
  onRemoveAll,
}: MyStackProps) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">My Stack</h2>
          <p className="mt-1 text-xs text-gray-500">
            {stack.length === 0
              ? "No technologies added yet."
              : `${stack.length} ${
                  stack.length === 1 ? "technology" : "technologies"
                } selected`}
          </p>
        </div>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-[#e91e83]">
          {stack.length}
        </span>
      </div>

      {stack.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50 px-4 py-8 text-center">
          <p className="text-sm font-medium text-gray-500">
            My stack is empty
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Add technologies from the list.
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3 transition-all duration-200 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-7 w-7 object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-gray-900">
                    {technology.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-500">
                    {technology.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 transition-all duration-200 hover:bg-red-50 hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-md border border-red-200 px-4 py-2 text-xs font-medium text-red-500 transition-all duration-300 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}
