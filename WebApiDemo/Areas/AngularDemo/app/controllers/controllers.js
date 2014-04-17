
mainModule.controller("windowsController", function ($scope) {

    $scope.products = [
        { id: 1, name: 'windows1', quantity: '20', price: '10.2' },
        { id: 2, name: 'windows2', quantity: '10', price: '11.3' },
        { id: 3, name: 'windows3', quantity: '18', price: '12.4' },
        { id: 4, name: 'windows4', quantity: '15', price: '15.6' },
        { id: 5, name: 'windows5', quantity: '12', price: '14.4' },
        { id: 6, name: 'windows6', quantity: '29', price: '17.8' },
        { id: 7, name: 'windows7', quantity: '55', price: '13.2' },
        { id: 8, name: 'windows8', quantity: '35', price: '16.0' },
        { id: 9, name: 'windows9', quantity: '42', price: '15.8' },
        { id: 10, name: 'windows10', quantity: '21', price: '14.9' },
    ];

    $scope.addProduct = function () {
        var topID = $scope.products.length + 1;
        $scope.products.push({
            id: topID,
            name: $scope.newProduct.name,
            quantity: $scope.newProduct.quantity,
            price: $scope.newProduct.price
        });
        $scope.newProduct.name = "";
        $scope.newProduct.quantity = "";
        $scope.price = "";
    }

    $scope.deleteProduct = function (id) {
        for (var i = $scope.products.length - 1; i >= 0 ; i--) {
            if ($scope.products[i].id === id) {
                $scope.products.splice(i, 1);
                break;
            }
        }
    }

});


mainModule.controller("xboxController", function ($scope) {

    $scope.products = [
        { id: 1, name: 'xbox1', quantity: '20', price: '10.2' },
        { id: 2, name: 'xbox1', quantity: '10', price: '11.3' },
        { id: 3, name: 'xbox1', quantity: '18', price: '12.4' },
        { id: 4, name: 'xbox1', quantity: '15', price: '15.6' },
        { id: 5, name: 'xbox1', quantity: '12', price: '14.4' },
        { id: 6, name: 'xbox1', quantity: '29', price: '17.8' },
        { id: 7, name: 'xbox1', quantity: '55', price: '13.2' },
        { id: 8, name: 'xbox1', quantity: '35', price: '16.0' },
        { id: 9, name: 'xbox1', quantity: '42', price: '15.8' },
        { id: 10, name: 'xbox1', quantity: '21', price: '14.9' },
    ];

    $scope.addProduct = function () {
        var topID = $scope.products.length + 1;
        $scope.products.push({
            id: topID,
            name: $scope.newProduct.name,
            quantity: $scope.newProduct.quantity,
            price: $scope.newProduct.price
        });
        $scope.newProduct.name = "";
        $scope.newProduct.quantity = "";
        $scope.price = "";
    }

    $scope.deleteProduct = function (id) {
        for (var i = $scope.products.length - 1; i >= 0 ; i--) {
            if ($scope.products[i].id === id) {
                $scope.products.splice(i, 1);
                break;
            }
        }
    }

});


