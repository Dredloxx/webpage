angular.module('myApp',[])
.controller('MainCtrl', function($scope) {
  $scope.bookmarks = [{
    label:'AngularJS',
    url:'https://angularjs.org/',
    catagory: 'Development'
  },{
    label:'Egghead.io',
    url:'https://egghead.io/',
    catagory: 'Development'
  },{
    label:'Bootstrap',
    url:'http://getbootstrap.com/',
    catagory: 'Design'
  },{
    label:'One Page Love'
    url:'https://onepagelove.com/'
    catagory: 'Design'
  },{
    label:'MobilityWOD'
    url:'http://www.mobilitywod.com/'
    catagory: 'Exercise'
  },{
    label:'Robb Wolf'
    url:'https://robbwolf.com/'
    catagory: 'Exercise'
  },{
    label:'The Meta Picture'
    url:'themetapicture.com'
    catagory: 'Humor'
  }]

});
