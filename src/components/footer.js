import React from "react";
import IconFacebook from "./icons/facebook";
import IconInstagram from "./icons/instagram";
import IconTwitter from "./icons/twitter";
import IconGithub from "./icons/github";

const StyledFooter = (props) =>
<footer {...props} className="text-gray-500 font-body" />

const StyledContainer = (props) =>
<div {...props} className="text-gray-500 font-body max-w-4xl mx-auto py-4 px-4 flex items-center sm:flex-row flex-col-reverse" />

const StyledCopyright = (props) =>
<div {...props} className="text-sm mt-4 text-gray-500 sm:py-2 sm:mt-0" />

const StyledSocial = (props) =>
<div {...props} className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-sta" />

const StyledSocialLink = (props) =>
<a {...props} className="text-gray-500 hover:text-orange-400 p-8 md:p-4" />



function Footer() {
  return (
    <StyledFooter>
    <StyledContainer>
        <StyledCopyright>
        © 2020 - by Chi Le
        </StyledCopyright>
      <StyledSocial>
        <StyledSocialLink href="/">
          <IconFacebook />
        </StyledSocialLink>
        <StyledSocialLink href="/">
          <IconTwitter />
        </StyledSocialLink>
        <StyledSocialLink href="/">
          <IconInstagram />
        </StyledSocialLink>
        <StyledSocialLink href="/">
          <IconGithub />
        </StyledSocialLink>
      </StyledSocial>

    </StyledContainer>
    </StyledFooter>
  );
}

export default Footer;
