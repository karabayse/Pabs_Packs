myApp.service('annualgoalService', function($http) {
  console.log('in annualgoal service');
  var sv = this;

  sv.getAnnualgoal = function() {
    console.log('in getAnnualgoal service');
    return $http({
      method: 'GET',
      url: '/annualgoal'
    }).then(function(response) {
      console.log(response);
      sv.annualgoalData = response.data;
      console.log(sv.annualgoalData);
    }); //
  }; // end getAnnualgoal



  sv.addnewgoal = function(newGoal) {
    console.log(newGoal);
    return $http({
      method: 'POST',
      url: '/annualgoal',
      data: newGoal
    }).then(function(response) {
      console.log('back from addnewgoal:', response);
    });
  };



}); // end of service