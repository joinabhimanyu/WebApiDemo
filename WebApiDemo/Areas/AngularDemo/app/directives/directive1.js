module1.directive("helloWorld", function () {
        return {
            scope: {
                color: '=',
                text: '='
            },
            restrict: 'EA',
            replace: false,
            transclude: false,
            template: '<h3 style="cursor:pointer;background:{{color}};padding-top:4px;padding-left:10px;padding-bottom:4px;">{{text}}</h3>',
            link: function (scope, elem, attrs) {
                elem.bind("click", function () {

                    elem.css("background", "azure");
                    scope.$apply(function () {
                        scope.color = "azure";

                    });
                });
                elem.bind("mouseenter", function () {
                    elem.css("color", "brown");
                    elem.css("text-shadow", "1px 1px 4px #FFFFFF");
                });
                elem.bind("mouseleave", function () {
                    elem.css("color", "black");
                    elem.css("text-shadow", "");
                });
            }
        };
    });