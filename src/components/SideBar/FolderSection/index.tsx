import { useRef } from "react";
import EditableText from "../../form/EditableText";
import FloatingSelect from "../../ui/FloatingSelect";
import { EditableTextActions } from "../../form/EditableText/types";
import { PlusIcon, EditFileIcon, ChevronIcon } from "../../../icons";
import * as s from "./styles";

const FolderSection = () => {
  const editableTextRef = useRef<null | EditableTextActions>(null);

  const enableFolderNameEdit = () => {
    editableTextRef.current?.setEdit(true);
  };

  return (
    <s.Container>
      <s.SelectedFolder>
        <FloatingSelect
          placeholder="Buscar..."
          noOptionsMessage={({ inputValue }) => (inputValue ? "No se encontraron carpetas" : "Sin carpetas")}
          render={(props) => (
            <s.SelectIndicator {...props}>
              <ChevronIcon />
            </s.SelectIndicator>
          )}
        />
        <s.FolderName tabIndex={0} onClick={enableFolderNameEdit} onKeyDown={() => enableFolderNameEdit}>
          <EditableText maxWidth="200px" initialValue="Sin título" onChange={() => {}} actionsRef={editableTextRef} />
        </s.FolderName>
      </s.SelectedFolder>

      <s.Action>
        <PlusIcon size={18} />
      </s.Action>
      <s.Action style={{ marginLeft: -2 }}>
        <EditFileIcon />
      </s.Action>
    </s.Container>
  );
};

export default FolderSection;
