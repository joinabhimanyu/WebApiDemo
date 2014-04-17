
module1.factory("customerFactory", function () {

        var factory = {};
        var customers = [
            { id: 1, name: 'John', city: 'Kansas' },
            { id: 2, name: 'Max', city: 'N.Y' },
            { id: 3, name: 'Alton', city: 'Illinois' },
            { id: 4, name: 'Ben', city: 'Mexico' }
        ];
        factory.getCustomers = function () {
            return customers;
        }

        factory.addCustomers = function (name, city) {
            var topID = customers.length + 1;
            customers.push({
                id: topID,
                name: name,
                city: city
            });
        }

        factory.deleteCustomer = function (id) {
            for (var i = customers.length - 1; i >= 0 ; i--) {
                if (customers[i].id === id) {
                    customers.splice(i, 1);
                    break;
                }
            }
        }

        return factory;
    });