import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
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
