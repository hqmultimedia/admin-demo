upload.controller('Load_Data_Controller', function($rootScope, $scope, $http, $location, $cookies, $routeParams) {

        //01. Setting source 

        $rootScope.optionsModelTheme = {

            value_selected: '2'
        };


        // C-02.Set giá trị nhận vào đầu tiên của option
        $rootScope.optionsModelQuantity = {
            Page: 1,
            PageSize: '5'

        };
        // Set giá trị cho đầu ra của setting view data(ko xoá)
        $rootScope.optionsModelDisplay = {

            hienthi: ''
        };

        $rootScope.onChangePageSize = function(page_data) {

                $scope.DataBeginByPage = 0;
                var Title = "Success";
                var Message = "Thay đổi hiển thị thành công !";
                var Type = "success";
                $scope.HQToast(Title, Message, Type);

                $scope.getDataPagination(page_data);

            }
            //01. End setting source


        $rootScope.getDataPagination = function(page_data, page_function) {

                // code chỉnh sửa theo yêu cầu dự án

                if (page_data == 'posts') {
                    var URL_API_Load = 'http://localhost/Angular2026/admin/CrudDataController/get_all';

                    // dữ liệu offline
                    // var URL_API_Load = 'http://localhost/FashionTemplateAdmin/Data/order.json';
                }



                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get = res.data;
                        console.log(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)


        // Get dữ liệu đã xoá(bộ nhớ tạm)
        $rootScope.getDataBoxTrash = function(page_data, page_function) {
                // alert($rootScope.info[0].level);
                // alert(page_data);
                // code chỉnh sửa theo yêu cầu dự án

                if (page_data == 'posts') {
                    var URL_API_Load = 'http://localhost/Angular2026/admin/CrudDataController/get_data_box_trash';
                }



                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get_box_trash = res.data;
                        console.log(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)
            // End get dữ liệu đã xoá(bộ nhớ tạm)

        // test 
        $rootScope.getDataOrder = function() {

                // code chỉnh sửa theo yêu cầu dự án


                var URL_API_Load = 'http://localhost/HQ-Tempalte-2026/Data/order.json';




                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get = res.data;
                        console.log(res.data);
                        chart.setData(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)
        $rootScope.getDataOrder_2 = function() {

                // code chỉnh sửa theo yêu cầu dự án


                var URL_API_Load = 'http://localhost/HQ-Tempalte-2026/Data/order.json';




                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get = res.data;
                        console.log(res.data);
                        chart_2.setData(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)

        // end test

    }) //End controller FunctionController