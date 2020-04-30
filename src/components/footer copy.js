import React from "react";
import IconFacebook from "./icons/facebook";
import IconInstagram from "./icons/instagram";
import IconTwitter from "./icons/twitter";
import IconGithub from "./icons/github";
import styled from 'styled-components'
import tw from 'tailwind.macro'

const StyledContainer = styled('footer')`
  ${tw`text-gray-700 font-body max-w-4xl mx-auto py-4 px-4 flex items-center sm:flex-row flex-col-reverse`}
`

const StyledCopyright = styled('p')`
${tw`text-sm mt-4 text-gray-500 sm:py-2 sm:mt-0`}
`

const StyledSocialLink = styled('a')`
${tw`text-gray-500 hover:text-orange-400`}
`


function Footer() {
  return (
    <footer className="text-gray-500 font-body">
      <div className="max-w-4xl mx-auto py-4 px-4 flex items-center sm:flex-row flex-col-reverse">
        <p className="text-sm mt-4 text-gray-500 sm:py-2 sm:mt-0">
          © 2020 - by Chi Le
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start">
          <StyledSocialLink
            href="https://www.facebook.com/chile206"
            >
            <IconFacebook className="text-gray-500 hover:text-orange-400"/>
            </StyledSocialLink>
          <a
            href="https://twitter.com/chile206"
            className="ml-3 text-gray-500 hover:text-orange-400"
          >
            <IconTwitter />
          </a>
          <a
            href="https://www.instagram.com/chile.206/"
            className="ml-3 text-gray-500 hover:text-orange-400"
          >
            <IconInstagram />
          </a>
          <a
            href="https://github.com/chile20"
            className="ml-3 text-gray-500 hover:text-orange-400"
          >
            <IconGithub />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
