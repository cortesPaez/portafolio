import {
  AppsBar,
  Bar,
  HoursWindows,
  IconContainer,
  WifiSoundContainer,
  WindowsIconContainer,
} from "./styles";
import {
  ArrowIcon,
  FilesIcon,
  ScreenIcon,
  SoundIcon,
  SpotifyIcon,
  VsCodeIcon,
  WifiIcon,
  WindowsIcon,
} from "../icons";

export const TaskBar = () => {
  const appIcons = [
    <WindowsIcon key="windows" />,
    <ScreenIcon key="screen" />,
    <FilesIcon key="file" />,
    <VsCodeIcon key="vscode" />,
    <SpotifyIcon key="spotify" />,
  ];

  const iconsWindows = [
    <ArrowIcon style={{ marginTop: "5px", padding: "8px" }} key="arrow" />,
    <>
      <HoursWindows>
        {new Date().toLocaleTimeString("es-cl", {
          hour: "2-digit",
          minute: "2-digit",
        })}
        <br />
        <HoursWindows>{new Date().toLocaleDateString()}</HoursWindows>
      </HoursWindows>
    </>,
    <WifiSoundContainer key="">
      <WifiIcon key="wifi" />
      <SoundIcon key="sound" />
    </WifiSoundContainer>,
  ];

  return (
    <Bar>
      <AppsBar>
        <div style={{ width: "100%" }}></div>
        {appIcons.map((icon, i) => (
          <IconContainer key={i}>{icon}</IconContainer>
        ))}
        <WindowsIconContainer>
          {iconsWindows.map((icons, i) => (
            <IconContainer key={i}>{icons}</IconContainer>
          ))}
        </WindowsIconContainer>
      </AppsBar>
    </Bar>
  );
};
