export class Fbi {
  constructor(){

  }

  callApi(yearToFind){
    $.ajax({
      url: `https://api.usa.gov/crime/fbi/ucr/estimates/states/OR?page=1&per_page=10&output=json&api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        let thisYear;
        for(let i = 0; i < 23; ++i){
          thisYear = response.results[i].year;
          if(thisYear === yearToFind){
            $('.showYear').text(`Year: ${response.results[i].year}`);
            $('.showState').text(`State:   ${response.results[i].state_abbr}.`);
            $('.showViolent').text(`Violent crime:  ${response.results[i].violent_crime}.`);
            $('.showPop').text(`Population:  ${response.results[i].population}.`);
            $('.showHom').text(`Homicides:  ${response.results[i].homicide}.`);
            return true;
          }
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  }
}
