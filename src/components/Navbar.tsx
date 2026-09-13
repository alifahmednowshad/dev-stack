import logo from "../assets/logo-text.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="container mx-auto h-18 px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-full items-center justify-between">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <div className="dropdown">
              <button
                tabIndex={0}
                type="button"
                aria-label="Open navigation menu"
                className="p-2 text-gray-700 transition-all duration-300 hover:text-[#e91e83]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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

              {/* Mobile Navigation */}
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
          </div>

          {/* Logo */}
          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 transition-opacity duration-300 hover:opacity-80 lg:static lg:translate-x-0"
          >
            <img src={logo} alt="DevStack" className="h-8 w-auto sm:h-9" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:absolute lg:left-1/2 lg:block lg:-translate-x-1/2">
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

          {/* Authentication */}
          <div className="ml-auto flex items-center gap-2 sm:gap-4">
            <a
              href="/signin"
              className="text-[13px] font-medium text-gray-700 transition-all duration-300 hover:text-[#e91e83] sm:text-[14px]"
            >
              Sign In
            </a>

            <a href="/signup" className="my-btn">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
