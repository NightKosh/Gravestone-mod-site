

app.controller("AboutCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about" && PageService.getPageParams().sub_page == null) {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;

            $scope.about.playerGraves = {
                images : [
                    'vertical_plates.jpg', 'crosses.jpg', 'horizontal_plates.jpg', 'celtic_crosses.png', 'obelisks.png'
                ],
                path : 'images/img/graves/',
                thumb : true
            };
            $scope.about.specialGraves = {
                images : [
                    'creeper_graves.png', 'skeleton_corpses_graves.jpg', 'sword_graves.jpg', 'thaum_sword_graves.jpg'
                ],
                path : 'images/img/graves/',
                thumb : true
            };
            $scope.about.otherEntities = {
                images : [
                    'villager_graves.png', 'dog_graves.jpg', 'cat_graves.jpg', 'horse_graves.jpg'
                ],
                path : 'images/img/graves/',
                thumb : true
            };
            $scope.about.gravesEffects = {
                images : [
                    'flowers.png', 'mossy_graves.jpg', 'enchanted.png'
                ],
                path : 'images/img/graves/',
                thumb : true
            };
        });
    }
}]);

app.controller("AboutMemorialCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about" && PageService.getPageParams().sub_page == "memorial") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;

            $scope.about.memorials = {
                images : [
                    'cross_1.png', 'cross_2.png', 'cross_3.png', 'cross_4.png',
                    'obelisk_1.png', 'obelisk_2.png', 'obelisk_3.png', 'obelisk_4.png',
                    'celtic_1.png', 'celtic_2.png', 'celtic_3.png',
                    'steve_1.png', 'steve_2.png', 'steve_3.png',
                    'villagers_1.png', 'villagers_2.png', 'villagers_3.png',
                    'angel_1.png', 'angel_2.png', 'angel_3.png',
                    'dog_1.png', 'dog_2.png', 'dog_3.png',
                    'cat_1.png', 'cat_2.png', 'cat_3.png',
                    'creeper_1.png', 'creeper_2.png', 'creeper_3.png'
                ],
                path : 'images/img/memorials/',
                thumb : true
            };
            $scope.about.player = {
                images : [
                    'player_1.png', 'player.png'
                ],
                path : 'images/img/memorials/',
                thumb : true
            };
            $scope.about.mossy = {
                images : [
                    'mossy_1.png', 'mossy_2.png', 'mossy_3.png'
                ],
                path : 'images/img/memorials/',
                thumb : true
            };
        });
    }
}]);

app.controller("AboutSpawnerCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about" && PageService.getPageParams().sub_page == "spawner") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;

            $scope.about.spawners = {
                images : [
                    'spawner_1.png', 'spawner_2.png', 'spawner_3.png', 'spawner_4.png', 'spawner_5.png'
                ],
                path : 'images/img/spawners/',
                thumb : true
            };
            $scope.about.boss = {
                images : [
                    'boss_1.png'
                ],
                path : 'images/img/spawners/',
                thumb : true
            };
            $scope.about.recipes = {
                images : [
                    'skeleton.png', 'zombie.png', 'spider.png', 'wither.png'
                ],
                path : 'images/img/spawners/recipes/',
                thumb : false
            };
        });
    }
}]);

app.controller("AboutBlocksCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about" && PageService.getPageParams().sub_page == "blocks") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;
        });
    }
}]);

app.controller("AboutItemsCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about" && PageService.getPageParams().sub_page == "items") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;
        });
    }
}]);

app.controller("AboutRecipesCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about" && PageService.getPageParams().sub_page == "recipes") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;
        });
    }
}]);

app.controller("AboutMobsCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about" && PageService.getPageParams().sub_page == "mobs") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;

            $scope.about.pets.pets = {
                images : [
                    "zombie_dog_1.png", "zombie_dog_2.png", "zombie_cat.png",
                    "skeleton_dog.png", "skeleton_cat.png"
                ],
                path : 'images/img/mobs/pets/',
                thumb : true
            };
            $scope.about.pets.horses = {
                images : [
                    "horses.png", "tamed.png"
                ],
                path : 'images/img/mobs/horses/',
                thumb : true
            };
            $scope.about.crawlers.img = {
                images : [
                    "1.png", "2.png"
                ],
                path : 'images/img/mobs/crawlers/',
                thumb : true
            };            
            $scope.about.skeletons.img = {
            	images : [
                    "skeletons.png"
                ],
                path : 'images/img/mobs/skeletons/',
                thumb : true
            };
            $scope.about.raiders.img = {
                images : [
                    "raiders.png"
                ],
                path : 'images/img/mobs/raiders/',
                thumb : true
            };
            $scope.about.villagers.img = {
                images : [
                    "undertaker.png", "trades.png"
                ],
                path : 'images/img/mobs/villagers/',
                thumb : true
            };
        });
    }
}]);

app.controller("AboutStructuresCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about" && PageService.getPageParams().sub_page == "structures") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;

            $scope.about.structures = {
                images : [
                    'grave.png', 'opened_grave.png', 'memorial.png'
                ],
                path : 'images/img/structures/',
                thumb : true
            };
            $scope.about.village = {
                images : [
                    'cemetery_1.png', 'cemetery_2.png', 'cemetery_3.png', 'undertaker_1.png', 'undertaker_2.png',
                    'undertaker_3.png', 'undertaker_4.png', 'undertaker_5.png', 'undertaker_6.png', 'undertaker_7.png'
                ],
                path : 'images/img/structures/village/',
                thumb : true
            };
            $scope.about.catacombs = {
                images : [
                    '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png',
                    '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png',
                    '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png'
                ],
                path : 'images/img/structures/catacombs/',
                thumb : true
            };
        });
    }
}]);

app.controller("AboutCommandsCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about" && PageService.getPageParams().sub_page == "commands") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;
        });
    }
}]);

app.controller("AboutConfigsCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about" && PageService.getPageParams().sub_page == "configs") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;
        });
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