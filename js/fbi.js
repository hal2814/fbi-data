export class Fbi {
  constructor(){

  }

  // callApi(yearToFind, crimeToFind){
  //   $.ajax({
  //     url: `https://api.usa.gov/crime/fbi/ucr/estimates/states/OR?page=1&per_page=10&output=json&api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
  //     type: 'GET',
  //     data: {
  //       format: 'json'
  //     },
  //     success: function(response) {
  //       let thisYear;
  //       for(let i = 0; i < 23; ++i){
  //         thisYear = response.results[i].year;
  //         if(thisYear === yearToFind){
  //           $('.showYear').text(`Year: ${response.results[i].year}`);
  //           $('.showState').text(`State:   ${response.results[i].state_abbr}.`);
  //           $('.showPop').text(`Population:  ${response.results[i].population}.`);
  //           if(crimeToFind === "homicide"){
  //             $('.crime').text(`Homicides: ${response.results[i].homicide}`);
  //           }
  //           if(crimeToFind === "violent_crime"){
  //             $('.crime').text(`Violent Crimes: ${response.results[i].violent_crime}`);
  //           }
  //           if(crimeToFind === "rape_legacy"){
  //             $('.crime').text(`Rapes: ${response.results[i].rape_legacy}`);
  //           }
  //           if(crimeToFind === "robbery"){
  //             $('.crime').text(`Robberies: ${response.results[i].robbery}`);
  //           }
  //           if(crimeToFind === "aggravated_assault"){
  //             $('.crime').text(`Aggravated Assaults: ${response.results[i].aggravated_assault}`);
  //           }
  //           if(crimeToFind === "property_crime"){
  //             $('.crime').text(`Property Crimes: ${response.results[i].property_crime}`);
  //           }
  //           if(crimeToFind === "burglary"){
  //             $('.crime').text(`Burglaries: ${response.results[i].burglary}`);
  //           }
  //           if(crimeToFind === "larceny"){
  //             $('.crime').text(`Larcenies: ${response.results[i].larceny}`);
  //           }
  //           if(crimeToFind === "motor_vehicle_theft"){
  //             $('.crime').text(`Grand Theft Autos: ${response.results[i].motor_vehicle_theft}`);
  //           }
  //           return true;
  //         }
  //       }
  //     },
  //     error: function() {
  //       $('#errors').text("There was an error processing your request. Please try again.");
  //     }
  //   });
  // }
  callApi(promise,yearToFind,crimeToFind){
    promise.then(function(response) {
      let body = JSON.parse(response);
      let thisYear;
      for(let i = 0; i < 23; ++i){
        thisYear = body.results[i].year;
        if(thisYear === yearToFind){
          $('.showYear').text(`Year: ${body.results[i].year}`);
          $('.showState').text(`State:   ${body.results[i].state_abbr}.`);
          $('.showPop').text(`Population:  ${body.results[i].population}.`);
          if(crimeToFind === "homicide"){
            $('.crime').text(`Homicides: ${body.results[i].homicide}`);
          }
          if(crimeToFind === "violent_crime"){
            $('.crime').text(`Violent Crimes: ${body.results[i].violent_crime}`);
          }
          if(crimeToFind === "rape_legacy"){
            $('.crime').text(`Rapes: ${body.results[i].rape_legacy}`);
          }
          if(crimeToFind === "robbery"){
            $('.crime').text(`Robberies: ${body.results[i].robbery}`);
          }
          if(crimeToFind === "aggravated_assault"){
            $('.crime').text(`Aggravated Assaults: ${body.results[i].aggravated_assault}`);
          }
          if(crimeToFind === "property_crime"){
            $('.crime').text(`Property Crimes: ${body.results[i].property_crime}`);
          }
          if(crimeToFind === "burglary"){
            $('.crime').text(`Burglaries: ${body.results[i].burglary}`);
          }
          if(crimeToFind === "larceny"){
            $('.crime').text(`Larcenies: ${body.results[i].larceny}`);
          }
          if(crimeToFind === "motor_vehicle_theft"){
            $('.crime').text(`Grand Theft Autos: ${body.results[i].motor_vehicle_theft}`);
          }
          return true;
        }
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  }
}
