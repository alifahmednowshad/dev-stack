// export default function Technologies() {
//   return (
//     <div className="container mx-auto px-5 sm:px-6 lg:px-8">
//       <h2>Explore the Technologies</h2>
//       <p>Pick one technology per category to build your ideal stack.</p>
//     </div>
//   );
// }
import { useEffect, useState, type ComponentProps } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";
import MyStack from "./MyStack";

type Technology = ComponentProps<typeof TechnologyCard>["technology"];
type StackTechnology = ComponentProps<typeof MyStack>["stack"][number];

const getTechnologyId = (technology: Technology | StackTechnology): number =>
  (technology as Technology & { id: number }).id;

export default function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<StackTechnology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Load JSON data
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technology data");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error("Failed to load technologies.");
      });
  }, []);

  // Add technology
  const handleAddToStack = (technology: Technology): void => {
    const alreadyAdded = stack.some(
      (item) => getTechnologyId(item) === getTechnologyId(technology),
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology as unknown as StackTechnology,
    ]);

    toast.success(`${technology.name} added to your stack.`);
  };

  // Remove technology
  const handleRemove = (id: string | number): void => {
    const technologyId = Number(id);
    const technology = stack.find(
      (item) => getTechnologyId(item) === technologyId,
    );

    if (!technology) {
      return;
    }

    setStack((previousStack) =>
      previousStack.filter((item) => getTechnologyId(item) !== technologyId),
    );

    toast.info(`${technology.name} removed from my stack.`);
  };

  // Remove all
  const handleRemoveAll = (): void => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <section id="technologies" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex min-h-60 items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <span className="loading loading-spinner loading-lg text-[#e91e83]"></span>

              <p className="text-sm text-gray-500">Loading technologies...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {/* Technology Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={getTechnologyId(technology)}
                  technology={technology}
                  isAdded={stack.some(
                    (item) => getTechnologyId(item) === getTechnologyId(technology),
                  )}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

            {/* Your Stack */}
            <div className="lg:col-span-1">
              <MyStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}