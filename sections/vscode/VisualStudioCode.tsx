"use client";
import { FileList, Sidebar } from "./components";
import { Screen } from "./styles";

const VisualStudioCode = ({ ref }: any) => {
  return (
    <Screen>
      <Sidebar />
      <FileList />
    </Screen>
  );
};

export default VisualStudioCode;
