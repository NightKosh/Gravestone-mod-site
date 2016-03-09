
app.controller("ReviewCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.review = {};

    if (PageService.getPageParams().page == "review") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.review = data;

            $scope.review.video = {
                en : [
                        {
                            url : "CWz2I4a34iU"
                        },
                        {
                            url : "t3jnyBqCMy8"
                        },
                        {
                            url : "jPT83W-HFwA"
                        },
                        {
                            url : "TO3D-4P4UZg"
                        },
                        {
                            url : "io3V4IqNAlA"
                        }
                    ],
                ru : [
                        {
                            url : "t-NJxB_zlik"
                        }
                ]
            }

            $scope.getVideosPreviewUrl($scope.review.video.en);
            $scope.getVideosPreviewUrl($scope.review.video.ru);
        });
    }

    $scope.getVideosPreviewUrl = function(videos) {
        videos.forEach(function (video) {
            video.previewUrl = "http://img.youtube.com/vi/" + video.url + "/hqdefault.jpg";
        });
    };

    $scope.loadVideo = function (video) {
        video.playing = true;
    };

    $scope.playerVars = {
        autoplay: 1
    };
}]);