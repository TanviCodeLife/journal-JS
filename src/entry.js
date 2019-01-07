export function Entry(date, title, entry) {
  this.date = date;
  this.title = title;
  this.journalEntry = journalEntry;
}

Entry.prototype.wordCount = function() {
  var words = this.entry.split(" ");
  return entryWords.length;
};
