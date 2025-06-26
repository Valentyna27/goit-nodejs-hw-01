import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async number => {
  try {
    const contacts = await readContacts();
    for (let i = 0; i < number; i++) {
      const fakeContacts = createFakeContact();
      contacts.push(fakeContacts);
    }
    await writeContacts(contacts);
    console.log(`${number} contacts generated `);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
