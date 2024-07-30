import { useRef } from "react";
import VisualStudioCode from "../vscode/VisualStudioCode";
import { Container, ScreenContainer } from "./styles";
import { DesktopIcon } from "@/components/desktop-icon/DesktopIcon";

export const Screen = () => {
  const constraintsRef = useRef(null);
  return (
    <ScreenContainer ref={constraintsRef}>
      <Container>
        <DesktopIcon icon="file" />
        <DesktopIcon icon="opera" />
        <DesktopIcon icon="spotify" />
      </Container>
      <VisualStudioCode />
    </ScreenContainer>
  );
};
