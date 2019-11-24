<?php
    include('./conn.php');

    $username = $_REQUEST['userName'];
    $password = $_REQUEST['userPassword'];

    $sql = "select * from dm_load where u_tel='$username' and u_pass='$password'";
    
    $res = $mysqli->query($sql);

    if($res->num_rows>0){
        
        echo 1;
        "alert('登陆成功');location.href='../html/home.html';";
    }else{
        
        echo 2;
         "alert('用户名或密码不正确');location.href='../html/login.html';";
    }

    $mysqli->close();

?>
