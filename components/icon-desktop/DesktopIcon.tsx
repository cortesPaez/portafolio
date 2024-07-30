import React from "react";
import { Drag, IconLabel } from "./styles";
import { FileIcon, OperaIcon, SpotifyDesktopIcon } from "../icons";

interface IDesktopIcon {
  icon: "opera" | "spotify" | "file";
  ref: any;
}

export const DesktopIcon = ({ icon, ref }: IDesktopIcon) => {
  const iconMap = new Map([
    ["opera", { icon: <OperaIcon key="opera" />, text: "Opera Browser" }],
    [
      "spotify",
      { icon: <SpotifyDesktopIcon key="spotify" />, text: "Spotify" },
    ], // Añadido un objeto para mantener la consistencia
    ["file", { icon: <FileIcon key="file" />, text: "Archivos" }], // Añadido un objeto para mantener la consistencia
  ]);

  return (
    <Drag drag dragConstraints={ref} dragMomentum={false}>
      {iconMap.get(icon)?.icon}
      <IconLabel>{iconMap.get("file")?.text}</IconLabel>
    </Drag>
  );
};
