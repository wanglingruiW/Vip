<?php
    /*
        username => 字段涵义 ; 前端发送给我的用户名信息;

    */
    //1.登陆;
    //2.注册;
    $usr = $_POST["username"];
    $pwd = $_POST["password"];
    $type = $_POST["type"];
    if($type !== "login" && $type !== "register"){
        $res = array("error"=>"i don't know what are u doing!");
        die(json_encode($res));
    }
    require("./_connect.php");
    $pwd = md5($pwd);
    //根据不同情况进行不同判断;
    if($type == "login"){
        $sql = "SELECT username,pwd FROM user_list";
    }else{
        $sql = "INSERT user_list(
            username,pwd
        )
            VALUES 
        ('{$usr}','{$pwd}')
        ";
    }
    $result = $conn->query($sql);
    //返回结果判定是那种操作在执行;
    echo gettype($result);
?>