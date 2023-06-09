import { urlAlphabet, customAlphabet } from "nanoid";

const alphabet = urlAlphabet.replace(/[_-]/g, "");
export const generateId = customAlphabet(alphabet);
