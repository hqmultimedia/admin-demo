upload.controller('ThemeLayoutController', function($rootScope, $scope, $http, $location, $cookies, $routeParams) {


        $rootScope.page_title = 'Dashboard';

        // set link
        // link 1
        $rootScope.value_level_one_no1 = 'Dashboard';
        // link 2
        $rootScope.value_level_one_no2 = 'Order';
        // link 3
        $rootScope.value_level_one_no3 = 'Product';
        // link 3 cấp 2
        $rootScope.value_level_two_no1_of_level_one_no3 = 'Category';
        $rootScope.value_level_two_no2_of_level_one_no3 = 'Posts';
        $rootScope.value_level_two_no3_of_level_one_no3 = 'Comment';
        $rootScope.value_level_two_no4_of_level_one_no3 = 'Assess';
        $rootScope.value_level_two_no5_of_level_one_no3 = 'Product';
        $rootScope.value_level_two_no6_of_level_one_no3 = 'Client';

        // link 4
        $rootScope.value_level_one_no4 = 'Setting system';
        // link 4 cấp 2
        $rootScope.value_level_two_no1_of_level_one_no4 = 'Layout';
        $rootScope.value_level_two_no2_of_level_one_no4 = 'Theme repository';
        $rootScope.value_level_two_no3_of_level_one_no4 = 'Baner';
        $rootScope.value_level_two_no4_of_level_one_no4 = 'Theme - Color COOL';
        // link 5
        $rootScope.value_level_one_no5 = 'Store';
        // link 5 cấp 2
        $rootScope.value_level_two_no1_of_level_one_no5 = 'Layout';
        $rootScope.value_level_two_no2_of_level_one_no5 = 'Color package HOT';
        $rootScope.value_level_two_no3_of_level_one_no5 = 'Theme - Color NEW';
        $rootScope.value_level_two_no4_of_level_one_no5 = 'Theme - Color COOL';



        $scope.set_page_data = function(value_link) {
            $rootScope.page_title = value_link;
        }



        // setting thời gian hết hạn của cookies   
        var expdate = new Date();
        expdate.setDate(expdate.getDate() + 20000);
        // remove cookies
        $scope.ClearCookies = function() {
            $cookies.remove('color');
            $cookies.remove('layout');
        }



        //A.----------------------------------------------------------------Cookies selected color theme
        $scope.select_color_theme = function(theme_color) {
            $cookies.put("color", theme_color, { expires: expdate });
            $scope.cookies_color = $cookies.get('color');
        }


        //A.01 : Set theme-color



        if ($cookies.get('color') == null) {
            $scope.cookies_color = 'theme-dark';
            $scope.theme_color = 'theme-dark';
        } else {
            $scope.cookies_color = $cookies.get('color');
            $scope.theme_color = $cookies.get('color');
        }


        //B.----------------------------------------------------------------Cookies selected layout theme
        $scope.select_layout_theme = function(theme_layout) {
            $cookies.put("layout", theme_layout, { expires: expdate });
            $scope.cookies_layout = $cookies.get('layout');
            location.reload();
        }

        //B.01 : Set theme-layout


        if ($cookies.get('layout') == null) {
            $scope.cookies_layout = 'basic-theme active';
            $scope.theme_layout = 'basic-theme active';
        } else {
            $scope.cookies_layout = $cookies.get('layout');
            $scope.theme_layout = $cookies.get('layout');


        }
        // fix lỗi click sidebar khi ở theme horizontal
        if ($cookies.get('layout') == 'horizontal-theme active') {
            $scope.fix_layout = 'fix_layout';
        } else {
            $scope.fix_layout = '';
        }


        //C.----------------------------------------------------------------Cookies selected color package
        $scope.select_color_package = function(color_package) {
                $cookies.put("color_package", color_package, { expires: expdate });
                $scope.cookies_color_package = $cookies.get('color_package');
            }
            //C.01 : Set theme-color

        if ($cookies.get('color_package') == null) {
            $scope.cookies_color_package = 'color_package_no1';
            $scope.color_package = 'color_package_no1';
        } else {
            $scope.cookies_color_package = $cookies.get('color_package');
            $scope.color_package = $cookies.get('color_package');
        }



        $scope.get_date = function(data_test, data_test_2) {
            alert(data_test);
            alert(data_test_2);
        }



    }) //End controller