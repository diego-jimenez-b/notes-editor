import { db } from "..";
import { IFolder } from "../types";
import { generateId } from "../../utils/generate-id";

export const createFolder = async (folder?: IFolder) => {
  const id = await db.folders.add(folder || { id: generateId(), name: "Nueva carpeta" });
  return id as string;
};

export const editFolderName = (id: string, name: string) => db.folders.update(id, { name });

export const deleteFolder = (id: string, replaceFolderId?: string | null) =>
  db.transaction("readwrite", db.folders, db.notes, async () => {
    const deleteFolder = db.folders.delete(id);
    const folderNotes = db.notes.where("folderId").equals(id);
    const notesOperation = replaceFolderId ? folderNotes.modify({ folderId: replaceFolderId }) : folderNotes.delete();
    return Promise.all([deleteFolder, notesOperation]);
  });
