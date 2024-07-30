import { DesktopIcon } from "@/components/icon-desktop/DesktopIcon";
import { Container } from "./styles";

export const IconDesktopGroup = ({ ref }: any) => {
  return (
    <Container>
      <DesktopIcon ref={ref} icon="file" />
      <DesktopIcon ref={ref} icon="opera" />
      <DesktopIcon ref={ref} icon="spotify" />
    </Container>
  );
};
