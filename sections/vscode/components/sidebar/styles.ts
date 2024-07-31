import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  max-height: 761px;
  background-color: #333333;
  max-width: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  min-height: 500px;
  cursor: pointer;
`

interface ISidebarIconContainer {
	readonly $active?: boolean;
}

export const SidebarIconContainer = styled.div<ISidebarIconContainer>`
  padding: 12px;
  position: relative;
  max-height: 45px;

 ${({ $active }) => $active && `&::after {
    content: "";
    height: 100%;
    width: 2px;
    background-color: white;
    left: 0px;
    top: 0px;
    position: absolute;
  }`}
`
