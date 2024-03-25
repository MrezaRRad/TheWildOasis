import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  grid-row: 1 / -1;
  border-right: 1px solid var(--color-grey-200);
  padding: 3.2rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 5.6rem;
`;

function Sidebar() {
  return (
    <StyledSideBar>
      <Logo />
      <MainNav />
    </StyledSideBar>
  );
}

export default Sidebar;
