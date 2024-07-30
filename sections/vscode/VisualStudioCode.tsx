"use client";
import {
  DotsIcon,
  FileIconVscode,
  GitIcon,
  SearcIconVscode,
  SettingsIcon,
} from "@/components/icons";
import {
  FileListLabel,
  FileListLabelContainer,
  FilesList,
  Screen,
  Sidebar,
  SidebarIconContainer,
} from "./styles";
import { Folders } from "./components/FolderTree";

const VisualStudioCode = ({ ref }: any) => {
  return (
    <Screen>
      <Sidebar>
        <div>
          <SidebarIconContainer $active={true}>
            <FileIconVscode color="#FFF" />
          </SidebarIconContainer>
          <SidebarIconContainer>
            <SearcIconVscode />
          </SidebarIconContainer>
          <SidebarIconContainer>
            <GitIcon />
          </SidebarIconContainer>
        </div>
        <div>
          <SidebarIconContainer>
            <SettingsIcon />
          </SidebarIconContainer>
        </div>
      </Sidebar>
      <FilesList>
        <FileListLabelContainer>
          <FileListLabel>EXPLORER</FileListLabel>
          <DotsIcon />
        </FileListLabelContainer>
        <Folders />
      </FilesList>
    </Screen>
  );
};

export default VisualStudioCode;
