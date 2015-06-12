app.config(function ($stateProvider) {

    $stateProvider.state('adminOnly', {
        url: '/admin',
        templateUrl: 'js/admin/admin.html',
        controller: 'AdminCtrl'
    });

    $stateProvider.state('adminOnly.products', {
        url: '/products',
        templateUrl: 'js/admin/template/manageProducts.html',
        controller: 'ManageProductsCtrl'
    });

    //make changes here!
    $stateProvider.state('adminOnly.products.create', {
        url: '/products',
        templateUrl: 'js/admin/template/createProducts.html',
        controller: 'ManageProductsCtrl'
    });

    $stateProvider.state('adminOnly.products.edit', {
        url: '/products',
        templateUrl: 'js/admin/template/editProducts.html',
        controller: 'ManageProductsCtrl'
    });


    $stateProvider.state('adminOnly.orders', {
        url: '/orders',
        templateUrl: 'js/admin/template/manageOrders.html',
        controller: 'ManageOrdersCtrl'
    });

    $stateProvider.state('adminOnly.users', {
        url: '/users',
        templateUrl: 'js/admin/template/manageUsers.html',
        controller: 'ManageUsersCtrl'
    });

});
