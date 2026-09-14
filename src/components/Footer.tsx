import logo from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      {/* Main Footer */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-14 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <a
              href="/"
              className="inline-flex transition-opacity duration-300 hover:opacity-80"
            >
              <img src={logo} alt="DevStack" className="h-9 w-auto" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                aria-label="GitHub"
                className="text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-[#e91e83]"
              >
                GitHub
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                aria-label="Twitter"
                className="text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-[#e91e83]"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                className="text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-[#e91e83]"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900">
              Product
            </h6>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-[#e91e83]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-[#e91e83]"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-[#e91e83]"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900">
              Company
            </h6>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-[#e91e83]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-[#e91e83]"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-[#e91e83]"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900">
              Legal
            </h6>
            <ul className="space-y-3">
              <li>
                <a
                  href="#privacy"
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-[#e91e83]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-[#e91e83]"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="container mx-auto px-5 sm:px-6 lg:px-14 flex flex-col items-center justify-between gap-3 py-5  md:flex-row ">
          <p className="text-center text-sm text-gray-500 md:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#privacy"
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-[#e91e83]"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-[#e91e83]"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
