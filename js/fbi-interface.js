import { Fbi } from './../js/fbi.js';

$(document).ready(function() {
  $('#fbi-oregon').submit(function(event) {
    event.preventDefault();
    let fbi = new Fbi();
    let year = parseInt($('#year').val());
    let crime = $('#crimeType').val();

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.usa.gov/crime/fbi/ucr/estimates/states/OR?page=1&per_page=10&output=json&api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
    fbi.callApi(promise,year,crime);
  });
});
