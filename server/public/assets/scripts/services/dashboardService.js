/**** Dashboard Service ****/

myApp.service('DashboardService', function($http) {
  console.log('in DashboardService');
  var sv = this;

  // getPieChart function
  sv.getPieChart = function(){
    return $http({
      method: 'GET',
      url: '/dashboard/donationData',
    }).then(function(response){
      sv.pieChartData = response.data;
      console.log(sv.pieChartData);
    });
  }; // end getPieChart

  // getBarChart function
  sv.getBarChart = function(){
    return $http({
      method: 'GET',
      url: '/dashboard/inventoryData',
    }).then(function(response){
      sv.barChartData = response.data;
      console.log(sv.barChartData);
    });
  }; // end getBarChart

}); // end service
