angular.module('starter.controllers', [])

.controller( 'DashCtrl', function($scope) {})

.controller( 'PeopleCtrl', function( $scope, People ) {
	$scope.people = People.all();
	$scope.remove = function( person ) {
		People.remove( person );
	}
})

.controller( 'PersonDetailCtrl', function( $scope, $stateParams, People ) {
	$scope.chat = People.get( $stateParams.personId );
})

.controller('FriendsCtrl', function($scope, Friends) {
	$scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
	$scope.friend = Friends.get($stateParams.friendId);
})

.controller( 'MoreCtrl', function( $scope ) {
	$scope.settings = {
		enableFriends: true
	};
});
