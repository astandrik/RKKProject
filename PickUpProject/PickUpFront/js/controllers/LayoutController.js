app.controller('LayoutController', ['$scope', function ($scope) {
    $scope.isSideBarOpen = false;
    $scope.isMaskShown = false;
    $scope.showMask = function () {
        $scope.isMaskShown = true;
    };
    $scope.hideMask = function () {
        $scope.isMaskShown = false;
    };
    $scope.openSideBar = function () {
        $scope.isSideBarOpen = true;
        $scope.showMask();
    };
    $scope.closeSideBar = function () {
        $scope.isSideBarOpen = false;
        $scope.hideMask();
    };
}]);