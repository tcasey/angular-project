angular.module('devMtIn')
.controller('homeCtrl', function($scope) {

  $scope.myProfile = {
    // name: 'Trevor Casey',
    friends : [
      {
        name: 'Yoda'},
        {
        name: 'Obi-one'},
        {
        name: 'Qui-gone'},
        {
          name: 'Jar-Jar'},
        {
          name: 'Mase'
        }
]
  }
  $scope.sortOptions = [{
      display: 'Ascending'
    , value: false
    },
    {
      display: 'Descending'
    , value: true
    }
  ];
  
});
