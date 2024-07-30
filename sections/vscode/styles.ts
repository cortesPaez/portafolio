import { ArrowIcon } from './../../components/icons/windows/ArrowIcon';
import styled from "styled-components";

export const Screen = styled.div`
  min-height: 500px;
  min-width: 1000px;
  position: relative;
  display: flex;
  font-family: "Segoe UI", Arial, Helvetica, sans-serif;

`

export const Sidebar = styled.div`
  display: flex;
  max-height: 761px;
  background-color: #181A1F;
  max-width: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  min-height: 500px;
  cursor: pointer;
`

interface ISidebarIconContainer {
  readonly $active?: boolean
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

export const FilesList = styled.div`
  min-width: 300px;
  background-color: #252526;

`

export const FileListLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
`
export const FileListLabel = styled.div`
  font-size: 11px;
  color: #CCCCCC;
`

export const FolderDetail = styled.details`
  color: #CCCCCC;
  font-size: 11px;
  font-weight: 500;
`

export const SummaryDetail = styled.summary`
  color: #CCCCCC;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  list-style: none;
  background: url(https://uploads.sitepoint.com/wp-content/uploads/2023/10/1697699669arrow.svg) no-repeat 14px 50%;

  &::after {
  content: '';
  width: 18px;
  height: 10px;
  background-size: cover;
  margin-left: .75em;
  transition: 0.2s;
  transform: rotate(180deg);
}
`