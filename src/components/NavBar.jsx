export default function Navbar() {
  const links = ["home", "services", "terms", "contact"];

  return (
    <>
      {/* Spacer */}
      <div className="h-16" />

      <header className="fixed top-0 inset-x-0 z-50 font-radwave text-base-100 shadow-md bg-[#250502]">
        {/* Glow layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CE6935]/60 to-transparent blur-xl opacity-70 pointer-events-none"></div>

        <div className="relative navbar container mx-auto px-4 min-h-[4rem]">
          {/* Left (optional mascot later) */}
          <div className="navbar-start w-0 md:w-auto">
            {/* <img src={dance} className="h-10 hidden md:block" /> */}
          </div>

          {/* Desktop nav */}
          <nav className="navbar-center hidden md:flex flex-1 justify-center gap-2">
            {["art and graphic design", ...links].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="btn btn-ghost text-xl text-base-100 hover:bg-secondary hover:text-neutral hover:shadow-[0_0_10px_rgba(206,105,53,0.7)]"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <div className="navbar-end md:hidden w-full flex justify-center">
            <div className="dropdown dropdown-center">
              <label
                tabIndex={0}
                className="btn btn-ghost text-2xl text-base-100"
              >
                ☰
              </label>

              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-44">
                {links.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="hover:bg-secondary hover:text-neutral"
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
