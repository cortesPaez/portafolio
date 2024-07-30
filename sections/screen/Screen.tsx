import React, { useRef } from "react";
import { ScreenContainer } from "./styles";
import { IconDesktopGroup } from "@/components/Icon-desktop-group/IconDesktopGroup";

export const Screen = () => {
  const parentRef = useRef<any>();

  return (
    <ScreenContainer ref={parentRef}>
      <IconDesktopGroup ref={parentRef} />
    </ScreenContainer>
  );
};
