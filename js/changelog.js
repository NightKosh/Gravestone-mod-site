
app.controller("ChangeLogCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.log = {};

    if (PageService.getPageParams().page == "changelog" && PageService.getPageParams().sub_page != "old") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.log = data;
        });
    }
}]);

app.controller("ChangelogMenuCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.logMenu = {};

    if (PageService.getPageParams().page == "changelog") {
        $http.get(PageService.getSubMenuDataPath()).success(function (data, status, headers, config) {
            $scope.logMenu = data;

            $scope.logMenu.graves.link = PageService.getLinkWithLangParams($scope.logMenu.graves.link);
            $scope.logMenu.extended.link = PageService.getLinkWithLangParams($scope.logMenu.extended.link);
            $scope.logMenu.old.link = PageService.getLinkWithLangParams($scope.logMenu.old.link);
        });
    }
}]);