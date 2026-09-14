import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";
import MyStack from "./MyStack";
import type { Technology } from "../types/technology";

export default function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load JSON data
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technology data");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error("Failed to load technologies.");
      });
  }, []);

  // Add to Stack
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in my stack.`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);

    toast.success(`${technology.name} added to my stack.`);
  };

  // Remove from Stack
  const handleRemove = (id: Technology["id"]) => {
    const technology = stack.find((item) => item.id === id);

    if (!technology) {
      return;
    }

    setStack((previousStack) => previousStack.filter((item) => item.id !== id));

    toast.info(`${technology.name} removed from my stack.`);
  };

  // Remove All
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from my stack.");
  };

  return (
    <section id="technologies" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-5 sm:px-6 lg:px-14">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Pick one technology per category to build my ideal stack.
          </p>
        </div>
        {loading ? (
          <div className="flex min-h-60 items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <span className="loading loading-spinner loading-lg text-[#e91e83]"></span>

              <p className="text-sm text-gray-500">Loading technologies...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={stack.some((item) => item.id === technology.id)}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>
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
