import { getAllContacts } from './getAllContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await getAllContacts();
    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    } else {
      const removedContact = contacts.pop();
      console.log(`Removed contact: ${removedContact.name}`);
      await writeContacts(contacts);
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
