const { default: chalk } = require("chalk");
const fs = require("fs");
const removeNote = (title) => {
  const previousNotes = loadNotes();

  const notes = previousNotes.filter((el) => el.title != title);

  if (previousNotes.length > notes.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNotes(notes);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};
const addNote = (title, author) => {
  const previousNotes = loadNotes();
  const duplicateNote = previousNotes.find((el) => el.title == title);
  if (!duplicateNote) {
    const note = { title, author };
    const notes = [...previousNotes, note];
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};
const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((element) => {
    console.log(chalk.inverse.yellow(element.author));
  });
};
const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((el) => el.title == title);

  if (note) {
    console.group(chalk.green.inverse(note.title));
    console.log(note.author);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const saveNotes = (notes) => {
  const notesString = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesString);
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const jsonData = dataBuffer.toString();
    return JSON.parse(jsonData);
  } catch (e) {
    return [];
  }
};
module.exports = { removeNote, addNote, listNotes, readNote };
