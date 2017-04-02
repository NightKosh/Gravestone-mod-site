

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
                    {'thumbUrl': 'images/img/graves/mossy_graves.jpg', 'url': 'images/img/graves/mossy_graves.jpg', 'caption': ''}
                ];
        });

        $scope.openLightboxModal = function (images, index) {
            Lightbox.openModal(images, index);
        };
    }
}]);

app.controller("AboutMemorialCtrl", ['$scope', '$http', 'Lightbox', 'PageService', function($scope, $http, Lightbox, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;

            $scope.about.memorialsImg = [
                {'thumbUrl': 'images/img/memorials/cross_1.png', 'url': 'images/img/memorials/cross_1.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/cross_2.png', 'url': 'images/img/memorials/cross_2.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/cross_3.png', 'url': 'images/img/memorials/cross_3.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/cross_4.png', 'url': 'images/img/memorials/cross_4.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/obelisk_1.png', 'url': 'images/img/memorials/obelisk_1.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/obelisk_2.png', 'url': 'images/img/memorials/obelisk_2.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/obelisk_3.png', 'url': 'images/img/memorials/obelisk_3.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/obelisk_4.png', 'url': 'images/img/memorials/obelisk_4.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/celtic_1.png', 'url': 'images/img/memorials/celtic_1.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/celtic_2.png', 'url': 'images/img/memorials/celtic_2.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/celtic_3.png', 'url': 'images/img/memorials/celtic_3.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/steve_1.png', 'url': 'images/img/memorials/steve_1.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/steve_2.png', 'url': 'images/img/memorials/steve_2.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/steve_3.png', 'url': 'images/img/memorials/steve_3.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/villagers_1.png', 'url': 'images/img/memorials/villagers_1.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/villagers_2.png', 'url': 'images/img/memorials/villagers_2.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/villagers_3.png', 'url': 'images/img/memorials/villagers_3.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/angel_1.png', 'url': 'images/img/memorials/angel_1.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/angel_2.png', 'url': 'images/img/memorials/angel_2.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/angel_3.png', 'url': 'images/img/memorials/angel_3.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/dog_1.png', 'url': 'images/img/memorials/dog_1.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/dog_2.png', 'url': 'images/img/memorials/dog_2.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/dog_3.png', 'url': 'images/img/memorials/dog_3.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/cat_1.png', 'url': 'images/img/memorials/cat_1.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/cat_2.png', 'url': 'images/img/memorials/cat_2.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/cat_3.png', 'url': 'images/img/memorials/cat_3.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/creeper_1.png', 'url': 'images/img/memorials/creeper_1.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/creeper_2.png', 'url': 'images/img/memorials/creeper_2.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/creeper_3.png', 'url': 'images/img/memorials/creeper_3.png', 'caption': ''}
            ];
            $scope.about.memorialsMossyImg = [
                {'thumbUrl': 'images/img/memorials/mossy_1.png', 'url': 'images/img/memorials/mossy_1.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/mossy_2.png', 'url': 'images/img/memorials/mossy_2.png', 'caption': ''},
                {'thumbUrl': 'images/img/memorials/mossy_3.png', 'url': 'images/img/memorials/mossy_3.png', 'caption': ''}
            ];
        });

        $scope.openLightboxModal = function (images, index) {
            Lightbox.openModal(images, index);
        };
    }
}]);

app.controller("AboutMenuCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.aboutMenu = {};

    if (PageService.getPageParams().page == "about") {
        $http.get(PageService.getSubMenuDataPath()).success(function (data, status, headers, config) {
            $scope.aboutMenu = data;


            $scope.aboutMenu.link_gravestone = PageService.getLinkWithLangParams("?page=about");
            $scope.aboutMenu.link_memorial = PageService.getLinkWithLangParams("?page=about&sub_page=memorial");
            $scope.aboutMenu.link_execution = PageService.getLinkWithLangParams("?page=about&sub_page=execution");
            $scope.aboutMenu.link_candle = PageService.getLinkWithLangParams("?page=about&sub_page=candle");
            $scope.aboutMenu.link_spawner = PageService.getLinkWithLangParams("?page=about&sub_page=spawner");
            $scope.aboutMenu.link_blocks = PageService.getLinkWithLangParams("?page=about&sub_page=blocks");
            $scope.aboutMenu.link_items = PageService.getLinkWithLangParams("?page=about&sub_page=items");
            $scope.aboutMenu.link_copses = PageService.getLinkWithLangParams("?page=about&sub_page=copses");
            $scope.aboutMenu.link_mobs = PageService.getLinkWithLangParams("?page=about&sub_page=mobs");
            $scope.aboutMenu.link_structures = PageService.getLinkWithLangParams("?page=about&sub_page=structures");
            $scope.aboutMenu.link_recipes = PageService.getLinkWithLangParams("?page=about&sub_page=recipes");
            $scope.aboutMenu.link_commands = PageService.getLinkWithLangParams("?page=about&sub_page=commands");
            $scope.aboutMenu.link_configs = PageService.getLinkWithLangParams("?page=about&sub_page=configs");
        });
    }
}]);

app.config(function (LightboxProvider) {
    LightboxProvider.templateUrl = 'template/libs/lightbox.html';
});