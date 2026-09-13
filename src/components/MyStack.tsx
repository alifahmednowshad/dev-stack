type Technology = {
  id: string | number;
  icon: string;
  name: string;
  category: string;
};

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
    <aside className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* Heading */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Your Stack</h2>

        <p className="mt-1 text-xs text-gray-400">
          {stack.length === 0
            ? "No technologies selected yet."
            : `${stack.length} Technology${
                stack.length > 1 ? "ies" : "y"
              } Selected`}
        </p>
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="mt-5 flex min-h-28 items-center justify-center rounded-xl border border-dashed border-gray-200 px-4 text-center">
          <p className="text-xs text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          {/* Stack Items */}
          <div className="mt-5 space-y-2">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-3 transition-all duration-300 hover:border-pink-200"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-8 w-8 object-contain"
                  />

                  <div className="min-w-0">
                    <h3 className="truncate text-xs font-semibold text-gray-800">
                      {technology.name}
                    </h3>

                    <p className="text-[10px] text-gray-400">
                      {technology.category}
                    </p>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => onRemove(technology.id)}
                  className="ml-2 text-lg text-gray-300 transition-colors duration-300 hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-md border border-red-200 px-4 py-2 text-xs font-medium text-red-500 transition-all duration-300 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}
