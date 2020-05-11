import { Link } from "gatsby";
import React from "react";
import DarkModeToggle from "./darkmode";

function Header() {

  const StyledHeader = (props) => <header {...props} className="" />;

const Container = (props) => (
  <div
    {...props}
    className="flex flex-wrap items-center justify-between max-w-4xl px-4 py-8 mx-auto"
  />
);

const Nav = (props) => (
  <div {...props} className="block flex items-center h-auto w-auto" />
);

const StyledLink = (props) => (
  <Link
    {...props}
    className="block focus:outline-none mr-8 md:mr-16 py-3 px-0 border-transparent border-b-2 hover:border-orange-400 md:mt-0"
    activeClassName="border-orange-400 border-b-2"
  />
);

  return (
    <StyledHeader>
    <Container>
      <Nav>
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
          <StyledLink key={link.title} exact to={link.route}>
            {link.title}
          </StyledLink>
        ))}
      </Nav>{" "}
      <DarkModeToggle />
    </Container>{" "}
  </StyledHeader>
  );
}

export default Header;
