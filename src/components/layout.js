import * as React from "react";
import tw, { GlobalStyles, styled } from "twin.macro";

// Components
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// Styles
import { titleText, linkStyle, siteLayout } from "./layout.module.css";

// Tailwind-Emotion Styled Components
const SiteLayout = tw.div`
  flex flex-col h-screen
`;

const NavBar = tw.div`
  flex items-center justify-between flex-wrap bg-[#e3cea1] p-6
`;

const LogoTitle = tw.div`
  flex items-center flex-shrink-0 text-white mr-6
`;

const LogoImage = tw.img`
  w-16 md:w-32 lg:w-48
`;

const TitleText = tw.h1`
  font-semibold text-xl tracking-tight
`;

const NavMenuHamburgerDiv = tw.div`
  block lg:hidden
`;

const NavMenuHamburgerButton = tw.button`
  flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black
`;

const NavMenuDiv = styled.div((props) => [
  tw`w-full block flex-grow lg:flex lg:items-center lg:w-auto`,
  props.isOpen ? tw`flex` : tw`hidden`,
]);

const NavMenuTabsDiv = tw.div`
  text-sm lg:flex-grow
`;

const NavMenuTabLinks = tw.a`
  block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4 text-base
`;

const OrderButtonDiv = tw.div`
  flex items-center gap-5 ml-6
`;

const OrderButton = tw.button`
  bg-yellow-900 hover:bg-yellow-800 text-white p-2 rounded
`;

const Footer = tw.footer`
  bg-black text-yellow-100 text-center py-5
`;

const Layout = ({ children, ...rest }) => {
  const [navOpen, setNavOpen] = React.useState(false);

  const handleHamburgerClick = () => {
    setNavOpen(!navOpen);
    console.log(navOpen);
  };

  return (
    <SiteLayout {...rest} className={siteLayout}>
      <GlobalStyles />
      <header>
        <NavBar>
          <LogoTitle>
            {/* <StaticImage
              src="../images/logo.png"
              alt=""
              width={20}
            /> */}
            <TitleText className={titleText}>
              <Link className={linkStyle} to="/">
                Shibuya Sushi Restaurant
              </Link>
            </TitleText>
          </LogoTitle>
          <NavMenuHamburgerDiv onClick={handleHamburgerClick}>
            <NavMenuHamburgerButton>
              <svg viewBox="0 0 50 40" width="20" height="15">
                <rect width="70" height="7"></rect>
                <rect y="15" width="70" height="7"></rect>
                <rect y="30" width="70" height="7"></rect>
              </svg>
            </NavMenuHamburgerButton>
          </NavMenuHamburgerDiv>
          <NavMenuDiv isOpen={navOpen}>
            <NavMenuTabsDiv>
              <NavMenuTabLinks>
                <Link to="/menu">Menu</Link>
              </NavMenuTabLinks>
              <NavMenuTabLinks>About</NavMenuTabLinks>
              <NavMenuTabLinks>Contact</NavMenuTabLinks>
            </NavMenuTabsDiv>
            <OrderButtonDiv>
              <OrderButton>Pickup Order</OrderButton>
              <OrderButton>Delivery Order</OrderButton>
            </OrderButtonDiv>
          </NavMenuDiv>
        </NavBar>
      </header>
      {children}
      <Footer>
        <p> Ⓒ 2022 Naeem Ghossein</p>
      </Footer>
    </SiteLayout>
  );
};

export default Layout;
