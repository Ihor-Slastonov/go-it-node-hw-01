const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.resolve('db/contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}

function getContactById(contactId) {
    try {
        
    } catch (error) {
        
    }
}

function removeContact(contactId) {}

function addContact(name, email, phone) {}
