import { PlusIcon, EditFileIcon, ChevronIcon } from "../../../icons";
import FloatingSelect from "../../ui/FloatingSelect";
import * as s from "./styles";

const FolderSection = () => (
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
      <s.FolderName tabIndex={0}>Nueva-carpeta</s.FolderName>
    </s.SelectedFolder>

    <s.Action>
      <PlusIcon size={18} />
    </s.Action>
    <s.Action style={{ marginLeft: -2 }}>
      <EditFileIcon />
    </s.Action>
  </s.Container>
);

export default FolderSection;
