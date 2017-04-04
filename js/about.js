

app.controller("AboutCtrl", ['$scope', '$http', 'Lightbox', 'PageService', function($scope, $http, Lightbox, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about" && PageService.getPageParams().sub_page == null) {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;

            $scope.about.playerGraves = {
                img : [
                    {'thumbUrl': 'images/img/graves/thumb/vertical_plates.jpg', 'url': 'images/img/graves/vertical_plates.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/thumb/crosses.jpg', 'url': 'images/img/graves/crosses.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/thumb/horizontal_plates.jpg', 'url': 'images/img/graves/horizontal_plates.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/thumb/celtic_crosses.png', 'url': 'images/img/graves/celtic_crosses.png', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/thumb/obelisks.png', 'url': 'images/img/graves/obelisks.png', 'caption': ''}
                ],
                expand : function() {
                    if (this.galleryClass == "expanded") {
                        this.galleryClass = "";
                    } else {
                        this.galleryClass = "expanded";
                    }
                }
            };
            $scope.about.specialGraves = {
                img : [
                    {'thumbUrl': 'images/img/graves/thumb/creeper_graves.png', 'url': 'images/img/graves/creeper_graves.png', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/thumb/skeleton_corpses_graves.jpg', 'url': 'images/img/graves/skeleton_corpses_graves.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/thumb/sword_graves.jpg', 'url': 'images/img/graves/sword_graves.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/thumb/thaum_sword_graves.jpg', 'url': 'images/img/graves/thaum_sword_graves.jpg', 'caption': ''}
                ],
                expand : function() {
                    if (this.galleryClass == "expanded") {
                        this.galleryClass = "";
                    } else {
                        this.galleryClass = "expanded";
                    }
                }
            };
            $scope.about.otherEntities = {
                img : [
                    {'thumbUrl': 'images/img/graves/thumb/villager_graves.png', 'url': 'images/img/graves/villager_graves.png', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/thumb/dog_graves.jpg', 'url': 'images/img/graves/dog_graves.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/thumb/cat_graves.jpg', 'url': 'images/img/graves/cat_graves.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/thumb/horse_graves.jpg', 'url': 'images/img/graves/horse_graves.jpg', 'caption': ''}
                ],
                expand : function() {
                    if (this.galleryClass == "expanded") {
                        this.galleryClass = "";
                    } else {
                        this.galleryClass = "expanded";
                    }
                }
            };
            $scope.about.gravesEffects = {
                img : [
                    {'thumbUrl': 'images/img/graves/thumb/flowers.png', 'url': 'images/img/graves/flowers.png', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/thumb/mossy_graves.jpg', 'url': 'images/img/graves/mossy_graves.jpg', 'caption': ''},
                    {'thumbUrl': 'images/img/graves/thumb/enchanted.png', 'url': 'images/img/graves/enchanted.png', 'caption': ''}
                ],
                expand : function() {
                    if (this.galleryClass == "expanded") {
                        this.galleryClass = "";
                    } else {
                        this.galleryClass = "expanded";
                    }
                }
            };
        });

        $scope.openLightboxModal = function (images, index) {
            Lightbox.openModal(images, index);
        };
    }
}]);

app.controller("AboutMemorialCtrl", ['$scope', '$http', 'Lightbox', 'PageService', function($scope, $http, Lightbox, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about" && PageService.getPageParams().sub_page == "memorial") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;

            $scope.about.memorials = {
                img : [
                    {'thumbUrl': 'images/img/memorials/thumb/cross_1.png', 'url': 'images/img/memorials/cross_1.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/cross_2.png', 'url': 'images/img/memorials/cross_2.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/cross_3.png', 'url': 'images/img/memorials/cross_3.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/cross_4.png', 'url': 'images/img/memorials/cross_4.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/obelisk_1.png', 'url': 'images/img/memorials/obelisk_1.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/obelisk_2.png', 'url': 'images/img/memorials/obelisk_2.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/obelisk_3.png', 'url': 'images/img/memorials/obelisk_3.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/obelisk_4.png', 'url': 'images/img/memorials/obelisk_4.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/celtic_1.png', 'url': 'images/img/memorials/celtic_1.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/celtic_2.png', 'url': 'images/img/memorials/celtic_2.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/celtic_3.png', 'url': 'images/img/memorials/celtic_3.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/steve_1.png', 'url': 'images/img/memorials/steve_1.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/steve_2.png', 'url': 'images/img/memorials/steve_2.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/steve_3.png', 'url': 'images/img/memorials/steve_3.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/villagers_1.png', 'url': 'images/img/memorials/villagers_1.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/villagers_2.png', 'url': 'images/img/memorials/villagers_2.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/villagers_3.png', 'url': 'images/img/memorials/villagers_3.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/angel_1.png', 'url': 'images/img/memorials/angel_1.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/angel_2.png', 'url': 'images/img/memorials/angel_2.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/angel_3.png', 'url': 'images/img/memorials/angel_3.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/dog_1.png', 'url': 'images/img/memorials/dog_1.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/dog_2.png', 'url': 'images/img/memorials/dog_2.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/dog_3.png', 'url': 'images/img/memorials/dog_3.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/cat_1.png', 'url': 'images/img/memorials/cat_1.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/cat_2.png', 'url': 'images/img/memorials/cat_2.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/cat_3.png', 'url': 'images/img/memorials/cat_3.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/creeper_1.png', 'url': 'images/img/memorials/creeper_1.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/creeper_2.png', 'url': 'images/img/memorials/creeper_2.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/creeper_3.png', 'url': 'images/img/memorials/creeper_3.png', 'caption': ''}
                ],
                expand : function() {
                    if (this.galleryClass == "expanded") {
                        this.galleryClass = "";
                    } else {
                        this.galleryClass = "expanded";
                    }
                }
            };
            $scope.about.player = {
                img : [
                    {'thumbUrl': 'images/img/memorials/thumb/player_1.png', 'url': 'images/img/memorials/player_1.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/player.png', 'url': 'images/img/memorials/player.png', 'caption': ''}
                ],
                expand : function() {
                    if (this.galleryClass == "expanded") {
                        this.galleryClass = "";
                    } else {
                        this.galleryClass = "expanded";
                    }
                }
            };
            $scope.about.mossy = {
                img : [
                    {'thumbUrl': 'images/img/memorials/thumb/mossy_1.png', 'url': 'images/img/memorials/mossy_1.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/mossy_2.png', 'url': 'images/img/memorials/mossy_2.png', 'caption': ''},
                    {'thumbUrl': 'images/img/memorials/thumb/mossy_3.png', 'url': 'images/img/memorials/mossy_3.png', 'caption': ''}
                ],
                expand : function() {
                    if (this.galleryClass == "expanded") {
                        this.galleryClass = "";
                    } else {
                        this.galleryClass = "expanded";
                    }
                }
            };
        });

        $scope.openLightboxModal = function (images, index) {
            Lightbox.openModal(images, index);
        };
    }
}]);

app.controller("AboutStructuresCtrl", ['$scope', '$http', 'Lightbox', 'PageService', function($scope, $http, Lightbox, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about" && PageService.getPageParams().sub_page == "structures") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;

            $scope.about.structures = {
                img : [
                    {'thumbUrl': 'images/img/structures/thumb/grave.png', 'url': 'images/img/structures/grave.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/thumb/opened_grave.png', 'url': 'images/img/structures/opened_grave.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/thumb/memorial.png', 'url': 'images/img/structures/memorial.png', 'caption': ''}
                ],
                expand : function() {
                    if (this.galleryClass == "expanded") {
                        this.galleryClass = "";
                    } else {
                        this.galleryClass = "expanded";
                    }
                }
            };
            $scope.about.village = {
                img : [
                    {'thumbUrl': 'images/img/structures/village/thumb/cemetery_1.png', 'url': 'images/img/structures/village/cemetery_1.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/village/thumb/cemetery_2.png', 'url': 'images/img/structures/village/cemetery_2.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/village/thumb/cemetery_3.png', 'url': 'images/img/structures/village/cemetery_3.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/village/thumb/undertaker_1.png', 'url': 'images/img/structures/village/undertaker_1.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/village/thumb/undertaker_2.png', 'url': 'images/img/structures/village/undertaker_2.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/village/thumb/undertaker_3.png', 'url': 'images/img/structures/village/undertaker_3.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/village/thumb/undertaker_4.png', 'url': 'images/img/structures/village/undertaker_4.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/village/thumb/undertaker_5.png', 'url': 'images/img/structures/village/undertaker_5.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/village/thumb/undertaker_6.png', 'url': 'images/img/structures/village/undertaker_6.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/village/thumb/undertaker_7.png', 'url': 'images/img/structures/village/undertaker_7.png', 'caption': ''}
                ],
                expand : function() {
                    if (this.galleryClass == "expanded") {
                        this.galleryClass = "";
                    } else {
                        this.galleryClass = "expanded";
                    }
                }
            };
            $scope.about.catacombs = {
                img : [
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/1.png', 'url': 'images/img/structures/catacombs/1.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/2.png', 'url': 'images/img/structures/catacombs/2.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/3.png', 'url': 'images/img/structures/catacombs/3.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/4.png', 'url': 'images/img/structures/catacombs/4.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/5.png', 'url': 'images/img/structures/catacombs/5.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/6.png', 'url': 'images/img/structures/catacombs/6.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/7.png', 'url': 'images/img/structures/catacombs/7.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/8.png', 'url': 'images/img/structures/catacombs/8.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/9.png', 'url': 'images/img/structures/catacombs/9.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/10.png', 'url': 'images/img/structures/catacombs/10.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/11.png', 'url': 'images/img/structures/catacombs/11.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/12.png', 'url': 'images/img/structures/catacombs/12.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/13.png', 'url': 'images/img/structures/catacombs/13.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/14.png', 'url': 'images/img/structures/catacombs/14.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/15.png', 'url': 'images/img/structures/catacombs/15.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/16.png', 'url': 'images/img/structures/catacombs/16.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/17.png', 'url': 'images/img/structures/catacombs/17.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/18.png', 'url': 'images/img/structures/catacombs/18.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/19.png', 'url': 'images/img/structures/catacombs/19.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/20.png', 'url': 'images/img/structures/catacombs/20.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/21.png', 'url': 'images/img/structures/catacombs/21.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/22.png', 'url': 'images/img/structures/catacombs/22.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/23.png', 'url': 'images/img/structures/catacombs/23.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/24.png', 'url': 'images/img/structures/catacombs/24.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/25.png', 'url': 'images/img/structures/catacombs/25.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/26.png', 'url': 'images/img/structures/catacombs/26.png', 'caption': ''},
                    {'thumbUrl': 'images/img/structures/catacombs/thumb/27.png', 'url': 'images/img/structures/catacombs/27.png', 'caption': ''}
                ],
                expand : function() {
                    if (this.galleryClass == "expanded") {
                        this.galleryClass = "";
                    } else {
                        this.galleryClass = "expanded";
                    }
                }
            };
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