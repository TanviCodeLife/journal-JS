export function Entry(date, title, journalEntry) {
  this.date = date;
  this.title = title;
  this.journalEntry = journalEntry;
}

Entry.prototype.wordInSentenceCount = function() {
  let words = this.journalEntry.split(" ");
  return words.length;
};

Entry.prototype.vowelsInSentenceCount = function() {
  let vowels = this.journalEntry.match(/[aeiouAEIOU]/gi);
  return vowels === null ? 0 : vowels.length;
};

Entry.prototype.consonantsInSentenceCount = function() {
  let vowels = this.journalEntry.match(/[^aeiouAEIOU *.!%@&#123456789]/gi);
  return vowels === null ? 0 : vowels.length;
};

Entry.prototype.getTeaser= function() {
  let sentencesAll = this.journalEntry.split('. ');
  let wordsFirstSentence = sentencesAll[0].split(' ');
  let teaserWords = [];
  for (let i = 0; i < 8; i++) {
    teaserWords.push(wordsFirstSentence[i]);
  }
  var teaser = teaserWords.join(' ');
  return teaser;
};
