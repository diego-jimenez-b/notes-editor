declare global {
  declare module "styled-components" {
    type Theme = import("../theme").Theme;
    export interface DefaultTheme extends Theme {}
  }
}

declare module "@ckeditor/ckeditor5-react" {
  import React from "react";

  type Editor = { getData: () => string; setData: (data: string) => void };
  const CKEditor: React.FC<{
    disabled?: boolean;
    editor: any;
    data?: string;
    onReady?: (editor: Editor) => void;
    onChange?: (event: any, editor: Editor) => void;
    onError?: (event: any, editor: Editor) => void;
  }>;

  export { CKEditor };
}

declare module "ckeditor5-custom-build";
