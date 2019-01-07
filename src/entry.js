export function Entry(date, title, entry) {
  this.date = date;
  this.title = title;
  this.journalEntry = journalEntry;
}

Entry.prototype.wordInSentenceCount = function() {
  var words = this.journalEntry.split(" ");
  return words.length;
};
