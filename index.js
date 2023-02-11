const {
  getListContacts,
  getContactById,
  removeContactById,
  addContact,
} = require('./contacts');

const { Command } = require("commander");
const program = new Command();

