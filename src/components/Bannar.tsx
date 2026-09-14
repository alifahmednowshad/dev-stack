import bannar from "../assets/banner-stack.png";

export default function Bannar() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-5 sm:px-6 lg:px-14">
        <div className="flex flex-col items-center justify-between lg:flex-row gap-10 lg:gap-12 py-12 sm:py-16 lg:py-20">
          <div className="w-full lg:w-1/2">
            <h1 className="leading-tight text-gray-900">
              Build Your Ideal
              <br />
              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="mt-7 flex w-full items-center gap-3">
              <a
                href="#technologies"
                className="hero-btn-primary w-48 text-center"
              >
                Explore Technologies
              </a>
              <a href="#about" className="hero-btn-outline w-48 text-center">
                Learn More
              </a>
            </div>
          </div>

          <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
            <img
              src={bannar}
              alt="Development Stack"
              className="w-full max-w-md object-contain sm:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
