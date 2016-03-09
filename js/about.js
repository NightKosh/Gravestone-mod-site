

app.controller("AboutCtrl", ['$scope', '$http', 'Lightbox', 'PageService', function($scope, $http, Lightbox, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;

            $scope.about.playerGravesImg = [
                    {'thumbUrl': 'images/img/graves/vertical_plates.jpg', 'url': 'images/img/graves/vertical_plates.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/crosses.jpg', 'url': 'images/img/graves/crosses.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/horizontal_plates.jpg', 'url': 'images/img/graves/horizontal_plates.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/celtic_crosses.png', 'url': 'images/img/graves/celtic_crosses.png', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/obelisks.png', 'url': 'images/img/graves/obelisks.png', 'caption': ''}
                ];
            $scope.about.specialGravesImg = [
                    {'thumbUrl': 'images/img/graves/creeper_graves.png', 'url': 'images/img/graves/creeper_graves.png', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/skeleton_corpses_graves.jpg', 'url': 'images/img/graves/skeleton_corpses_graves.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/sword_graves.jpg', 'url': 'images/img/graves/sword_graves.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/thaum_sword_graves.jpg', 'url': 'images/img/graves/thaum_sword_graves.jpg', 'caption': ''}
                ];
            $scope.about.otherEntitiesGravesImg = [
                    {'thumbUrl': 'images/img/graves/villager_graves.png', 'url': 'images/img/graves/villager_graves.png', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/dog_graves.jpg', 'url': 'images/img/graves/dog_graves.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/cat_graves.jpg', 'url': 'images/img/graves/cat_graves.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/horse_graves.jpg', 'url': 'images/img/graves/horse_graves.jpg', 'caption': ''}
                ];
            $scope.about.gravesEffectsImg = [
                    {'thumbUrl': 'images/img/graves/flowers.png', 'url': 'images/img/graves/flowers.png', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/mossy_graves.jpg', 'url': 'images/img/graves/mossy_graves.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/mossy_graves.png', 'url': 'images/img/graves/mossy_graves.png', 'caption': ''}
                ];
        });

        $scope.openLightboxModal = function (images, index) {
            Lightbox.openModal(images, index);
        };
    }
}]);

app.config(function (LightboxProvider) {
    LightboxProvider.templateUrl = 'template/libs/lightbox.html';
});