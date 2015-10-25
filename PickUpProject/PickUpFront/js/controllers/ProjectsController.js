app.controller('ProjectsController',['$scope', '$http', '$filter', '$projects', function ($scope, $http, $filter, $projects) {
    $scope.query = {
        filter: '',
        order: 'name',
        limit: 5,
        page: 1
    };
    $scope.total = 0;
    $scope.headers = [];
    $scope.rows = [];
    $scope.headers = ["Шифр", "№ Договора", "Цена", "Статус", "Название"];
    $scope.isContentShown = false;
    $scope.deleteRowCallback = function (rows) {
        $mdToast.show(
            $mdToast.simple()
                .content('Deleted row id(s): ' + rows)
                .hideDelay(3000)
        );
    };
    $projects.success(function (json) {
        json.forEach(function (item) {
            var obj = [];
            $scope.headers.forEach(function (header) {
                obj.push({
                    key: header, value: header == "Цена" ?
                        $filter('currency')(item[header], '', 0).split(',').join(' ')
                        : item[header]
                })
            });
            $scope.total++;
            $scope.rows.push(obj);
            $scope.isContentShown = true;
        });
    })

}]);