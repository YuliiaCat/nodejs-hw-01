import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length !== 0) {
      contacts.splice(-1, 1);
    }
    console.log(contacts);
    writeContacts(contacts);
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
