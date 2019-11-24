   <?php

    include('./conn.php'); 


    $telphone = $_REQUEST['phone'];
    $password = $_REQUEST['password'];


    
        $sql = "select * from dm_load where u_tel = $telphone";
        $result = $mysqli->query($sql);
        if ($result->num_rows>0) {
            // echo '{"msg":"0"}';
        } else{
            // echo '1';
            $sql_insert = "insert into dm_load(`u_tel`,`u_pass`) values($telphone,'$password')";
            $res_insert = $mysqli->query($sql_insert);
            // echo $telphone;
            // if ($res_insert) {
                $json = '{"msg":"1"}';

                // echo 1;
            // } else {
                // echo "<script>alert('系统繁忙，请稍候！');</script>";
            // }
        }
        echo $json;

$mysqli->close();


?>

