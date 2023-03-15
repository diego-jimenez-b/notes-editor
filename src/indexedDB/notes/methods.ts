import { db } from "..";
import { INote } from "../types";

export const createNote = (id: string, folderId: string) =>
  db.notes.add({
    id,
    folderId,
    data: "Nueva nota...",
    title: "Sin título",
    created_at: new Date().toISOString(),
    last_modified: null,
  });

export const updateNote = (id: string, fields: Partial<INote>) => {
  const updatedFields = { ...fields };
  if ("data" in fields) updatedFields.last_modified = new Date().toISOString();
  return db.notes.update(id, fields);
};

export const deleteNote = (id: string) => db.notes.delete(id);
