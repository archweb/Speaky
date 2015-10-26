angular.module('myApp.directives').directive('addClassWhenScroll', [
    '$window', function ($window) {
        return {
            scope: {
                addClassWhenScroll: '@'
            },
            restrict: 'A',

            link: function (scope, element, attrs) {
                var windowEl = angular.element($window);

                var checkIfScrollPositionIsHigherThanZero = function () {
                    if ($window.pageYOffset > 0) {
                        element.addClass(scope.addClassWhenScroll);
                    } else {
                        element.removeClass(scope.addClassWhenScroll);

                    }
                };

                windowEl.on('scroll', scope.$apply.bind(scope, checkIfScrollPositionIsHigherThanZero));
                checkIfScrollPositionIsHigherThanZero();
            }
        };
        /*
         function link(scope, element, $window) {
         console.log("enter directive");
         var windowEl = angular.element($window);
         console.log("1");
         var checkIfScrollPositionIsHigherThanZero = function () {
         scope.scroll = $window.pageYOffset;
         element.removeClass('active');
         };
         windowEl.on('scroll', scope.$apply.bind(scope, checkIfScrollPositionIsHigherThanZero));
         console.log("2");



         checkIfScrollPositionIsHigherThanZero();
         }
         }
         */
    }
]);

