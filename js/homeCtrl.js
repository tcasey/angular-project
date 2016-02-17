angular.module('devMtIn').controller('homecontroller', function($scope, profileService) {
$scope.myProfile = {
    friends: [{
      name: 'Dean Venture',
      likes: 647,
      color: "blue"
    }, {
      name: 'Hank Venture',
      likes: 600,
      color: "red"
    }, {
      name: 'Dr. Rusty Venture',
      likes: 17000,
      color: "yellow"
    }, {
      name: 'Brock Samson',
      likes: 1000000,
      color: "black"
    }, {
      name: 'The Monarch',
      likes: 17001,
      color: "Royal Purple"
    }]
  }
$scope.saveProfile = function(profile){
    profileService.saveProfile(profile);
  };

  $scope.sortOptions = [{
    display: 'Ascending',
    value: false
  }, {
    display: 'Descending',
    value: true
  }];
  $scope.editing = false;
  $scope.deleteProfile = function(profile){
  profileService.deleteProfile(profile);
  $scope.myProfile = profileService.checkForProfile();
}
});
