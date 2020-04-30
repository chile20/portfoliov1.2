import { Link } from "gatsby";
import React from "react";
import DarkModeToggle from "./darkmode";

const StyledHeader = (props) => <header {...props} className="body-font" />;

const StyledContainer = (props) => (
  <div
    {...props}
    className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto"
  />
);

const StyledNav = (props) => (
  <div {...props} className="block flex items-center h-auto w-auto" />
);

const StyledLink = (props) => (
  <Link
    {...props}
    className="block focus:outline-none mr-8 md:mr-16 py-3 px-0 border-transparent border-b-2 hover:border-orange-400 md:mt-0"
    activeClassName="border-orange-400 border-b-2"
  />
);

function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledNav>
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
            <StyledLink key={link.title} to={link.route}>
              {link.title}
            </StyledLink>
          ))}
        </StyledNav>{" "}
        <DarkModeToggle />
      </StyledContainer>{" "}
    </StyledHeader>
  );
}

export default Header;
