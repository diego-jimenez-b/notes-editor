export interface IFolder {
  id: string;
  name: string;
}

export interface INote {
  id: string;
  title: string;
  data: string;
  folderId: string;
  created_at: string;
  last_modified: string | null;
}
