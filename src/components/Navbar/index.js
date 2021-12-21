import React, { useState } from "react";
// Styles
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  NavbarLinkExtended,
  Logo,
  OpenLinksButton,
} from "./Navbar.styles.js";
// Logo
import LogoImg from "../../images/laughing-unsplash.jpg";

function Navbar({ user }) {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            {user && <NavbarLink to="/user">User</NavbarLink>}
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
          {user && <NavbarLinkExtended to="/user">User</NavbarLinkExtended>}
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;

// const Wrapper = styled.div`
//   border: 2px solid olivedrab;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Content = styled.div`
//   border: 2px solid pink;
//   /* width: 100%;
//   display: flex;
//   justify-content: space-evenly; */
//   text-align: center;
//   flex-grow: 1;
//   & > a:not(:last-of-type) {
//     margin-right: 1rem;
//   }
// `;

// const Header = ({ user }) => (
//   <Wrapper>
//     <Content>
//       <Link to="/">Home</Link>
//       <Link to="about">About</Link>
//       {user && <Link to="user">User</Link>}
//     </Content>
//   </Wrapper>
// );

// export default Header;
