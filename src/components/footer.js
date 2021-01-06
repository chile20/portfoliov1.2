import React from "react";
import IconFacebook from "./icons/facebook";
import IconInstagram from "./icons/instagram";
import IconTwitter from "./icons/twitter";
import IconGithub from "./icons/github";

const StyledFooter = (props) => (
  <footer {...props} className="text-gray-500" />
);

const Container = (props) => (
  <div
    {...props}
    className="text-gray-500 font-body max-w-4xl mx-auto p-4 sm:px-8 flex items-center sm:flex-row flex-col-reverse"
  />
);

const Copyright = (props) => (
  <div {...props} className="text-sm mt-4 text-gray-500 sm:py-2 sm:mt-0" />
);

const Social = (props) => (
  <div
    {...props}
    className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-sta"
  />
);

const SocialLink = (props) => (
  <a {...props} className="text-gray-500 hover:text-orange-400 p-8 md:p-4" />
);

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Copyright>© 2020 - by Chi Le</Copyright>
        <Social>
          <SocialLink href="/">
            <IconFacebook />
          </SocialLink>
          <SocialLink href="/">
            <IconTwitter />
          </SocialLink>
          <SocialLink href="/">
            <IconInstagram />
          </SocialLink>
          <SocialLink href="/">
            <IconGithub />
          </SocialLink>
        </Social>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
