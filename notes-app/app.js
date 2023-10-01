const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    author: {
      describe: "Note author",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.author);
  },
});
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: () => {
    notes.listNotes();
  },
});
yargs.command({
  command: "read",
  describe: "Reading a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

yargs.parse();
