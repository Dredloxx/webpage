angular.module('myApp',[])
.controller('MainCtrl', function($scope) {
  $scope.bookmarks = [{
    label:'AngularJS',
    url:'https://angularjs.org/'
  },{
    label:'Egghead.io',
    url:'https://egghead.io/'
  },{
    label:'Node.js',
    url:'https://nodejs.org/en/'
  }]
});
