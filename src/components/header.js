import { Link } from "gatsby";
import React from "react";
import DarkModeToggle from "./darkmode";

function Header() {

  return (
    <header className="body-font">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 md:p-8 mx-auto">
        <nav
          className={`block flex items-center h-auto w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Work`,
            },
            {
              route: `/about`,
              title: `About`,
            },
          ].map((link) => (
            <Link
              activeClassName="border-orange-400 border-b-2"
              className="block focus:outline-none mr-8 md:mr-16 py-3 px-0 border-transparent border-b-2 hover:border-orange-400 md:mt-0"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
