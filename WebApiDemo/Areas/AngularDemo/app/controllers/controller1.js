
module1.controller("controller1", function ($scope, customerFactory) {

        $scope.fieldColor = {
            color: "pink",
            text: "Hello World"
        };

        $scope.customers = customerFactory.getCustomers();

        $scope.addCustomer = function () {
            customerFactory.addCustomers($scope.newCustomer.name, $scope.newCustomer.city);
            $scope.newCustomer.name = "";
            $scope.newCustomer.city = "";
        }

        $scope.deleteCustomer = function (id) {
            customerFactory.deleteCustomer(id);
        }

    });