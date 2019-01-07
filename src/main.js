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
      let entry = $('#entry').val();
      let newEntry = new Entry(date, title, journalEntry);
});
