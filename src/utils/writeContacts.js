import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async updatedContacts => {
  try {
    const newContacts = JSON.stringify(updatedContacts, undefined, 2);
    await fs.writeFile(PATH_DB, newContacts);
  } catch (error) {
    console.error(error);
  }
};
