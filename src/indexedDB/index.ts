import Dexie, { Table } from "dexie";
import { IFolder, INote } from "./types";

export class DexieSubClass extends Dexie {
  folders!: Table<IFolder>;
  notes!: Table<INote>;

  constructor() {
    super("notesDB");
    this.version(1).stores({
      folders: "&id",
      notes: "&id, folderId",
    });
  }
}

export const db = new DexieSubClass();
