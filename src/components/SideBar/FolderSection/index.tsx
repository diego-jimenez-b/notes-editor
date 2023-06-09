import { useMemo, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLiveQuery } from "dexie-react-hooks";
import useRequestHandler from "../../../hooks/useRequestHandler";

import EditableText from "../../form/EditableText";
import FloatingSelect from "../../ui/FloatingSelect";

import { db } from "../../../indexedDB";
import { createFolder, deleteFolder, editFolderName } from "../../../indexedDB/folders/methods";
import { EditableTextActions } from "../../form/EditableText/types";
import { PlusIcon, ChevronIcon, TrashIcon } from "../../../icons";
import * as s from "./styles";

const FolderSection = () => {
  const editableTextRef = useRef<null | EditableTextActions>(null);
  const folders = useLiveQuery(async () => db.folders.toArray(), []);
  const { folderId } = useParams<{ folderId?: string }>();
  const navigate = useNavigate();

  const createNewFolder = useRequestHandler(async () => {
    const id = await createFolder();
    navigate(`/folders/${id}`);
  });

  const enableFolderNameEdit = () => {
    editableTextRef.current?.setEdit(true);
  };

  const deleteCurrentFolder = () => {
    deleteFolder(folderId!);
    const otherFolder = folders?.find((folder) => folder.id !== folderId);
    navigate(otherFolder ? `/folders/${otherFolder.id}` : "/");
  };

  const selectedFolder = useMemo(() => {
    if (!folders?.length || !folderId) return;
    return folders.find((_folder) => _folder.id === folderId);
  }, [folders, folderId]);

  const folderOptions = useMemo(
    () => folders?.map((folder) => ({ label: folder.name || "Sin nombre", value: folder.id })) || [],
    [folders]
  );

  return (
    <s.Container>
      <s.SelectedFolder>
        <FloatingSelect
          placeholder="Buscar..."
          noOptionsMessage={({ inputValue }) => (inputValue ? "No se encontraron carpetas" : "Sin carpetas")}
          options={folderOptions}
          onChange={(selected) => navigate(`/folders/${selected!.value}`)}
          value={folderOptions?.find((option) => option.value === selectedFolder?.id) || null}
          render={(props) => (
            <s.SelectIndicator {...props}>
              <ChevronIcon />
            </s.SelectIndicator>
          )}
        />
        <s.FolderName
          tabIndex={0}
          aria-disabled={!selectedFolder}
          onClick={enableFolderNameEdit}
          onKeyDown={(e) => {
            if (e.key === "Enter") enableFolderNameEdit();
          }}
        >
          <EditableText
            key={`key-${selectedFolder?.id}`}
            maxWidth="200px"
            initialValue={selectedFolder ? selectedFolder.name || "Sin título" : "Carpeta no seleccionada"}
            onChange={(value) => editFolderName(selectedFolder!.id, value)}
            actionsRef={editableTextRef}
            disabled={!selectedFolder}
          />
        </s.FolderName>
      </s.SelectedFolder>

      <s.Action onClick={createNewFolder} disabled={createNewFolder.loading}>
        <PlusIcon size={18} />
      </s.Action>
      <s.Action disabled={!folderId} onClick={deleteCurrentFolder} style={{ marginLeft: -2 }}>
        <TrashIcon />
      </s.Action>
    </s.Container>
  );
};

export default FolderSection;
