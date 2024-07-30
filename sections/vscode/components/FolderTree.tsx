import FolderTree, { NodeData } from "react-folder-tree";
import "react-folder-tree/dist/style.css";
import { FolderTreeContainer } from "./styles";

export const Folders = () => {
  // Estructura de datos ajustada para cumplir con NodeData
  const treeState: NodeData = {
    name: "my-app",
    checked: 0.5, // half check: some children are checked
    isOpen: true, // this folder is opened, we can see it's children
    children: [
      { name: "src", checked: 0 },
      {
        name: "public",
        checked: 0.5,
        isOpen: false,
        children: [
          { name: "index.html", checked: 0 },
          { name: "indx.css", checked: 1 },
        ],
      },
    ],
  };
  const onTreeStateChange = (state: any, event: any) =>
    console.log(state, event);

  return (
    <FolderTreeContainer>
      <FolderTree
        showCheckbox={false}
        data={treeState}
        onChange={onTreeStateChange}
      />
    </FolderTreeContainer>
  );
};
