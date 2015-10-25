app.factory('$projects', ['$http', function ($http) {
    return $http.get('/testData/projects.json').success(function (data) { return data }).error(function (err) { return err });
}]);