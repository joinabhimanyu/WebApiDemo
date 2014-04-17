
var mainModule = angular.module('mainModule', ['ngRoute', 'ngAnimate']);

mainModule.config(function ($routeProvider) {
    $routeProvider
        .when('/view1',
        {
            controller: 'windowsController',
            templateUrl: '/Areas/AngularDemo/app/partials/windowsView.htm'
        })
    .when('/view2',
    {
        controller: 'xboxController',
        templateUrl: '/Areas/AngularDemo/app/partials/xboxView.htm'
    })
        .when('/view1Details/:productID',
        {
            controller: 'windowsController',
            templateUrl: '/Areas/AngularDemo/app/partials/windowsDetails.htm'
        })
        .when('/view2Details/:productID',
        {
            controller: 'xboxController',
            templateUrl: '/Areas/AngularDemo/app/partials/xboxDetails.htm'
        })
    .otherwise({ redirectTo: '/view1' });
});

mainModule.directive("rowInput", function ($parse, $compile) {
    var inputTemplate = '<span>{{value}}</span>';
    var inputButton = '<input type="text" ng-model="value"/>';
    return {
        scope: {
            value: '=',
            editmode: '='
        },
        restrict: 'EA',
        replace: true,
        transclude: false,
        template: '<input type="text" ng-model="value"/>',
        link: function (scope,elem,attrs) {
            //if (scope.editmode=="non-edit") {
            //    elem.html(inputTemplate).show();
            //}
            //else {
            //    elem.html(inputButton).show();
            //}
            //$compile(elem.contents())(scope);
        }
    };
});

mainModule.controller("windowsController", function ($scope, $routeParams, windowsFactory, $http) {

    $scope.pageClass = "page-windows";
    $scope.editMode = "non-edit";
    $scope.toggleEdit = function () {
        if ($scope.editMode=="non-edit") {
            $scope.editMode = "edit";
        }
        else {
            $scope.editMode = "non-edit";
        }
    }

    //$scope.products = windowsFactory.getProducts();

    $http.get('http://localhost:51487/api/Windows').success(function (data, status, headers, config) {
        $scope.products = data;
    })
    .error(function (data, status, headers, config) {
        alert(data);
    });

    var productID = ($routeParams.productID) ? parseInt($routeParams.productID) : 0;
    if (productID > 0) {
        $http.get('http://localhost:51487/api/Windows?id=' + productID).success(function (data, status, headers, config) {
            $scope.product = data;
        })
        .error(function (data, status, headers, config) {
            alert(data);
        });
    }

    $scope.addProduct = function () {
        //windowsFactory.addProduct($scope.newProduct.name, $scope.newProduct.quantity, $scope.newProduct.price);
        
        var postData = { Name: $scope.newProduct.Name, Quantity: $scope.newProduct.Quantity, Price: $scope.newProduct.Price, Image: 'surface1.jpg' };

        $http.post('http://localhost:51487/api/Windows', JSON.stringify(postData)).success(function (data, status, headers, config) {
            alert('Record added successfully');
            $scope.products.push({
                ID: data,
                Name: $scope.newProduct.Name,
                Quantity: $scope.newProduct.Quantity,
                Price: $scope.newProduct.Price,
                Image: 'surface1.jpg'
            });
        })
        .error(function (data, status, headers, config) {
            alert(data);
        });

        $scope.newProduct.name = "";
        $scope.newProduct.quantity = "";
        $scope.newProduct.price = "";
    }

    $scope.deleteProduct = function (id) {
        //windowsFactory.deleteProduct(id);
        $http.delete('http://localhost:51487/api/Windows?id=' + id).success(function (data, status, headers, config) {
            alert('Record deleted successfully');
            for (var i = 0; i < $scope.products.length; i++) {
                if ($scope.products[i].ID===id)
                {
                    $scope.products.splice(i, 1);
                    break;
                }
            }
        })
        .error(function (data, status, headers, config) {
            alert('Error in deleting data');
        });
    }

});

mainModule.controller("xboxController", function ($scope, $routeParams, xboxFactory, $http) {

    $scope.pageClass = "page-xbox";

    //$scope.products = xboxFactory.getProducts();

    $http.get('http://localhost:51487/api/Xbox').success(function (data, status, headers, config) {
        $scope.products = data;
    })
    .error(function (data, status, headers, config) {
        alert(data);
    });;

    var productID = ($routeParams.productID) ? parseInt($routeParams.productID) : 0;
    if (productID > 0) {
        $http.get('http://localhost:51487/api/Xbox?id=' + productID).success(function (data, status, headers, config) {
            $scope.product = data;
        })
        .error(function (data, status, headers, config) {
            alert(data);
        });
    }

    $scope.addProduct = function () {
        xboxFactory.addProduct($scope.newProduct.name, $scope.newProduct.quantity, $scope.newProduct.price);
        $scope.newProduct.name = "";
        $scope.newProduct.quantity = "";
        $scope.newProduct.price = "";
    }

    $scope.deleteProduct = function (id) {
        xboxFactory.deleteProduct(id);
    }

});

mainModule.factory("windowsFactory", function ($http) {

    var factory = {};
    var result = [
        { ID: 1, Name: 'windows1', Quantity: '20', Price: '10.2', Image: 'windows1.jpg' },
        { ID: 2, Name: 'windows2', Quantity: '10', Price: '11.3', Image: 'windows2.jpg' },
        { ID: 3, Name: 'windows3', Quantity: '18', Price: '12.4', Image: 'windows3.jpg' },
        { ID: 4, Name: 'windows4', Quantity: '15', Price: '15.6', Image: 'windows4.jpg' },
        { ID: 5, Name: 'windows5', Quantity: '12', Price: '14.4', Image: 'windows5.jpg' },
        { ID: 6, Name: 'windows6', Quantity: '29', Price: '17.8', Image: 'windows6.jpg' },
        { ID: 7, Name: 'windows7', Quantity: '55', Price: '13.2', Image: 'windows7.jpg' },
        { ID: 8, Name: 'windows8', Quantity: '35', Price: '16.0', Image: 'windows8.jpg' },
        { ID: 9, Name: 'windows9', Quantity: '42', Price: '15.8', Image: 'windows9.jpg' }
    ];
   

    factory.getProducts = function () {    
        return result;
    }

    factory.getProduct = function (productID) {
        //for (var i = 0; i < result.length; i++) {
        //    if (result[i].ID === productID) {
        //        return result[i];
        //        break;
        //    }
        //}
        //return null;

        $http.get('http://localhost:51487/api/Windows?id=' + productID).success(function (data, status, headers, config) {
            return data;
        });
    }

    factory.addProduct = function (Name, Quantity, Price) {
        var topID = result.length + 1;
        result.push({
            id: topID,
            name: Name,
            quantity: Quantity,
            price: Price
        });
    }

    factory.deleteProduct = function (id) {
        for (var i = result.length - 1; i >= 0 ; i--) {
            if (result[i].id === id) {
                result.splice(i, 1);
                break;
            }
        }
    }

    return factory;

});

mainModule.factory("xboxFactory", function ($http) {

    var factory = {};
    var result = [
        { ID: 1, Name: 'xbox1', Quantity: '20', Price: '10.2', Image: 'xbox1.jpg' },
        { ID: 2, Name: 'xbox2', Quantity: '10', Price: '11.3', Image: 'xbox2.jpg' },
        { ID: 3, Name: 'xbox3', Quantity: '18', Price: '12.4', Image: 'xbox3.jpg' },
        { ID: 4, Name: 'xbox4', Quantity: '15', Price: '15.6', Image: 'xbox4.jpg' },
        { ID: 5, Name: 'xbox5', Quantity: '12', Price: '14.4', Image: 'xbox5.jpg' },
        { ID: 6, Name: 'xbox6', Quantity: '29', Price: '17.8', Image: 'xbox6.jpg' },
        { ID: 7, Name: 'xbox7', Quantity: '55', Price: '13.2', Image: 'xbox7.jpg' },
        { ID: 8, Name: 'xbox8', Quantity: '35', Price: '16.0', Image: 'xbox8.jpg' },
        { ID: 9, Name: 'xbox9', Quantity: '42', Price: '15.8', Image: 'xbox9.jpg' }
    ];


    factory.getProducts = function () {      
        return result;
    }

    factory.getProduct = function (productID) {
        //for (var i = 0; i < result.length; i++) {
        //    if (result[i].ID === productID) {
        //        return result[i];
        //        break;
        //    }
        //}
        //return null;

        $http.get('http://localhost:51487/api/Xbox?id=' + productID).success(function (data, status, headers, config) {
            return data;
        });
    }

    factory.addProduct = function (Name, Quantity, Price) {
        var topID = result.length + 1;
        result.push({
            id: topID,
            name: Name,
            quantity: Quantity,
            price: Price
        });
    }

    factory.deleteProduct = function (id) {
        for (var i = result.length - 1; i >= 0 ; i--) {
            if (result[i].id === id) {
                result.splice(i, 1);
                break;
            }
        }
    }

    return factory;

});