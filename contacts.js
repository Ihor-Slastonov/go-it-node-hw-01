const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.resolve('db/contacts.json');

async function getListContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.log(error.message);
  }
}
async function getContactById(contactId) {
  const contacts = await getListContacts();
  const result = contacts.find(contact => contact.id === contactId.toString());
  if (!result) {
    return null;
  }
  return result;
}

async function removeContactById(contactId) {
  const contacts = await getListContacts();
  const idx = contacts.findIndex(
    contact => contact.id === contactId.toString()
  );
  if (idx === -1) {
    return null;
  }
  const [removeContact] = contacts.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return removeContact;
}

async function addContact(name, email, phone) {
  const newContact = {
    id: uuidv4(),
    name,
    email,
    phone,
  };
  const contacts = await getListContacts();
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

module.exports = {
  getListContacts,
  getContactById,
  removeContactById,
  addContact,
};
