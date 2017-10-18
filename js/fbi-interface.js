import { Fbi } from './../js/fbi.js';

$(document).ready(function() {
  $('#fbi-oregon').submit(function(event) {
    event.preventDefault();
    let fbi = new Fbi();
    let year = parseInt($('#year').val());
    let crime = $('#crimeType').val();
    fbi.callApi(year,crime);
  });
});
