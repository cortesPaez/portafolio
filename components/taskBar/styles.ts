import styled from "styled-components";
import { WindowsIcon } from '../icons/apps/WindowsIcon';

export const Bar = styled.div`
  padding: 3px 16px;
  display: flex;
  justify-content: center;
  background-color: #202020;
`
export const AppsBar = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
`

export const IconContainer = styled.div`
  padding: 8px;
  align-items: center;
  display: flex;
  height: 68%;

  &:hover {
    border-radius: 6px;
    background-color: #303030;
  }
`

export const WindowsIconContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  gap: 8px;
`

export const HoursWindows = styled.span`
  font-size: 12px;
  color: #FFF;
  text-align: end;
`

export const WifiSoundContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`