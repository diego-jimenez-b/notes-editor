import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import CustomEditor from "ckeditor5-custom-build";
import * as s from "./styles";

const Editor = () => (
  <s.Container spellCheck={false}>
    <CKEditor editor={CustomEditor} data="<p>Nueva nota...</p>" onChange={() => {}} />
  </s.Container>
);

export default Editor;
