<?php
 $username = $_POST['account'];
 $password = $_POST['pas'];
 $sql = new mysqli();
 $sql->connect('localhost','cjwebtop','123456','cjwebtop');
 $sql->set_charset('utf8');
 //上面连接数据库都弄完了
 //下面是登录验证
  $nav=$sql->query("SELECT * FROM `register`");
  $content = array();
   while($arr = $nav -> fetch_array()){
        $content[] = $arr;
    }
    echo json_encode($content);
 //
?>