import { Entry } from './entry';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#form').submit(function(event) {
      event.preventDefault();
      let date = $('#date').val();
      let title = $('#title').val();
      let journalEntry = $('#entry').val();
      let newEntry = new Entry(date, title, journalEntry);
      let newEntryResult = `Title: ${newEntry.title}

        Date: ${newEntry.date}

        Words Count: ${newEntry.wordInSentenceCount()}

        Vowels Count: ${newEntry.vowelsInSentenceCount()}

        Consonant Count: ${newEntry.consonantsInSentenceCount()}

        Teaser: ${newEntry.getTeaser()}`;
      $("#journal-output").append(newEntryResult);
    });
});
