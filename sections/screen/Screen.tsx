import { useRef } from "react";
import { Container, ScreenContainer, VscodeContainer } from "./styles";
import { DesktopIcon } from "@/components/desktop-icon/DesktopIcon";
import VisualStudioCode from "../vscode/VisualStudioCode";

export const Screen = () => {
  const constraintsRef = useRef(null);
  return (
    <ScreenContainer ref={constraintsRef}>
      <Container>
        <DesktopIcon icon="file" />
        <DesktopIcon icon="opera" />
        <DesktopIcon icon="spotify" />
      </Container>
      <VscodeContainer drag dragMomentum={false}>
        <VisualStudioCode />
      </VscodeContainer>
    </ScreenContainer>
  );
};
