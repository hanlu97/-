let baseUrl = 'http://127.0.0.1:8080/damai';


define(['jquery'], function($) {
    return {
        get: function(selector) {
            $(selector).on('click', function() {
                if (password_Boolean && varconfirm_Boolean && Mobile_Boolean && Validation_Boolean == true) {
                    $.ajax({
                        type: 'get',
                        url: baseUrl + '/lib/regist.php',
                        // url: '../../lib/regist.php',
                        // dataType: "json",
                        data: {
                            phone: $('#reg_mobile').val(),
                            password: $('#reg_password').val()
                        },
                        dataType: 'json',
                        success: function(response) {
                            if (response.msg == '1') {
                                //alert("注册成功");
                                // console.log(response.msg);
                                location.href = "../html/login.html";
                                // location.reload();
                                console.log("success");
                            }
                            console.log(1);
                            //else if (typeof response == 'object') {
                            //     $('.slip').addClass('show').text('账号或者密码错误，请检查输入！');
                            //     phone = null;
                            //     pass = null;
                            // }
                        },
                        error: function(xhr, err) {
                            console.log(0);
                            return err;
                        }
                    });
                }
            })
        },

    }

});