import { PlusIcon, EditFileIcon, ChevronIcon } from "../../../icons";
import * as s from "./styles";

const FolderSection = () => (
  <s.Container>
    <s.SelectedFolder>
      <s.SelectIndicator>
        <ChevronIcon />
      </s.SelectIndicator>
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
