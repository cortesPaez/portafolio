"use client";
import { FileList, Sidebar } from "./components";
import Tabs from "./components/tabs/Tabs";
import { Screen } from "./styles";

const VisualStudioCode = () => {
  return (
    <Screen>
      <Sidebar />
      <FileList />
      <Tabs />
    </Screen>
  );
};

export default VisualStudioCode;
