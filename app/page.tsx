"use client";

import { Screen } from "@/sections/screen/Screen";
import { TaskBar } from "@/sections/taskBar/TaskBar";

export default function Home() {
  return (
    <>
      <main style={{ width: "100vw", minHeight: "100vh", maxHeight: "100vh" }}>
        <Screen />
      </main>
      <TaskBar />
    </>
  );
}
