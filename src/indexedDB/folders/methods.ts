import { db } from "..";
import { IFolder } from "../types";

export const createFolder = (folder: IFolder) => db.folders.add(folder);

export const editFolderName = (id: string, name: string) => db.folders.update(id, { name });

export const deleteFolder = (id: string, replaceFolderId?: string | null) =>
  db.transaction("readwrite", db.folders, db.notes, async () => {
    const deleteFolder = db.folders.delete(id);
    const folderNotes = db.notes.where("folderId").equals(id);
    const notesOperation = replaceFolderId ? folderNotes.modify({ folderId: replaceFolderId }) : folderNotes.delete();
    return Promise.all([deleteFolder, notesOperation]);
  });
