upload.config(function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/login', { templateUrl: 'content-admin-panel/page/view-login-register.html', controller: 'LoginRegisterController' })

    .when('/home', { templateUrl: 'content-admin-panel/page/home-admin.html', controller: 'Function_Controller' })
        .when('/posts', { templateUrl: 'content-admin-panel/page/posts.html', controller: 'Function_Controller' })
        .when('/category', { templateUrl: 'content-admin-panel/page/category.html', controller: 'Function_Controller' })
        .when('/comment', { templateUrl: 'content-admin-panel/page/comment.html', controller: 'Function_Controller' })
        .when('/assess', { templateUrl: 'content-admin-panel/page/assess.html', controller: 'Function_Controller' })

    .otherwise({ redirectTo: '/home' })

    $locationProvider.html5Mode(true);


});