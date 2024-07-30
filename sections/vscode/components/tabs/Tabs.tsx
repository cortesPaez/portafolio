import { Tab, TabContainer, TabFlex } from "./styles";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useCallback, useState } from "react";
import createTheme from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

const Tabs = () => {
  const [value, setValue] = useState("console.log('hello world!');");
  const onChange = useCallback((val: any, viewUpdate: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  const myTheme = createTheme({
    theme: "light",
    settings: {
      background: "#1E1E1E",
      foreground: "#75baff",
      caret: "#5d00ff",
      selection: "#036dd626",
      selectionMatch: "#036dd626",
      lineHighlight: "#8a91991a",
      gutterBackground: "#1E1E1E",
      gutterForeground: "#8a919966",
      gutterBorder: "#1E1E1E",
    },
    styles: [
      { tag: t.comment, color: "#787b8099" },
      { tag: t.variableName, color: "#0080ff" },
      { tag: [t.string, t.special(t.brace)], color: "#5c6166" },
      { tag: t.number, color: "#5c6166" },
      { tag: t.bool, color: "#5c6166" },
      { tag: t.null, color: "#5c6166" },
      { tag: t.keyword, color: "#5c6166" },
      { tag: t.operator, color: "#5c6166" },
      { tag: t.className, color: "#5c6166" },
      { tag: t.definition(t.typeName), color: "#5c6166" },
      { tag: t.typeName, color: "#5c6166" },
      { tag: t.angleBracket, color: "#5c6166" },
      { tag: t.tagName, color: "#5c6166" },
      { tag: t.attributeName, color: "#5c6166" },
    ],
  });
  return (
    <TabContainer>
      <TabFlex>
        <Tab>Untitled-1</Tab>
        <Tab>Untitled-1</Tab>
      </TabFlex>
      <CodeMirror
        value={value}
        height="450px"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        theme={myTheme}
      />
    </TabContainer>
  );
};

export default Tabs;
