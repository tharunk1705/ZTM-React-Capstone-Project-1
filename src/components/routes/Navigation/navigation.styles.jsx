import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const OutletContainer = styled.div`
  height: calc(100vh - 95px);
  overflow: auto;
  scroll-behavior: smooth;
`;
// .navigation {

//   .logo-container {

//   }

//   .nav-links-container {

//     .nav-link {
//
//     }
//   }
// }
// .outlet-container {

// }
