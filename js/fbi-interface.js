$(document).ready(function() {
  $('#fbi-oregon').click(function() {
    $.ajax({
      url: `https://api.usa.gov/crime/fbi/ucr/estimates/states/OR?page=1&per_page=10&output=json&api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showYear').text(`in the year ${response.results[0].year}%`);
        $('.showState').text(`The state ${response.results[0].state_abbr}.`);
        $('.showViolent').text(`Violent crime:  ${response.results[0].violent_crime}.`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
