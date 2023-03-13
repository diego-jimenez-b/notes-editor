import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import CustomEditor from "ckeditor5-custom-build";
import EditorTopbar from "../../components/EditorTopbar";
import * as s from "./styles";

const Editor = () => {
  const [showToolbar, setShowToolbar] = useState(true);

  return (
    <s.Container spellCheck={false} toolbar={showToolbar}>
      <EditorTopbar title="Sin título" showToolbar={showToolbar} setShowToolbar={setShowToolbar} />
      <CKEditor editor={CustomEditor} data="<p>Nueva nota...</p>" onChange={() => {}} />
    </s.Container>
  );
};

export default Editor;
