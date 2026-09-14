import logo from "../assets/logo-text.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="container mx-auto px-5 sm:px-6 lg:px-14 h-16 w-full sm:h-18  ">
        {/* ================= MOBILE NAVBAR ================= */}
        <div className="grid h-full grid-cols-[auto_1fr_auto] items-center gap-2 lg:hidden">
          <div className="dropdown">
            <button
              tabIndex={0}
              type="button"
              aria-label="Open navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-all duration-300 hover:bg-pink-50 hover:text-[#e91e83]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-56 rounded-xl border border-gray-100 bg-white p-3 shadow-lg"
            >
              <li>
                <a href="#home" className="text-[#e91e83] hover:bg-pink-50">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  className="hover:bg-pink-50 hover:text-[#e91e83]"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:bg-pink-50 hover:text-[#e91e83]"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:bg-pink-50 hover:text-[#e91e83]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:bg-pink-50 hover:text-[#e91e83]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="justify-self-center transition-opacity duration-300 hover:opacity-80"
          >
            <img
              src={logo}
              alt="DevStack"
              className="h-8 w-auto max-w-32.5 object-contain sm:h-9 sm:max-w-38.75"
            />
          </a>
          <div className="flex items-center justify-end gap-1.5 sm:gap-3">
            <a
              href="#"
              className="whitespace-nowrap px-1 text-[11px] font-medium text-gray-700 transition-all duration-300 hover:text-[#e91e83] sm:px-0 sm:text-[14px]"
            >
              Sign In
            </a>

            <a
              href="#"
              className="whitespace-nowrap rounded-full bg-[#e91e83] px-3 py-2 text-[11px] font-semibold text-white transition-all duration-300 hover:bg-[#c9166d] sm:px-4 sm:py-2.5 sm:text-[14px]"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="relative hidden h-full items-center lg:flex">
          <a
            href="/"
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <img src={logo} alt="DevStack" className="h-9 w-auto" />
          </a>
          <div className="absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-8">
              <li>
                <a
                  href="#home"
                  className="text-[14px] font-medium text-[#e91e83] transition-all duration-300 hover:text-[#c9166d]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-[14px] font-medium text-[#374151] transition-all duration-300 hover:text-[#e91e83]"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[14px] font-medium text-[#374151] transition-all duration-300 hover:text-[#e91e83]"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[14px] font-medium text-[#374151] transition-all duration-300 hover:text-[#e91e83]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[14px] font-medium text-[#374151] transition-all duration-300 hover:text-[#e91e83]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <a
              href="#signin"
              className="text-[14px] font-medium text-gray-700 transition-all duration-300 hover:text-[#e91e83]"
            >
              Sign In
            </a>
            <a href="#signup" className="my-btn">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
