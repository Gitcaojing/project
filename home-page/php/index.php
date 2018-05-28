<?php
 $sql = new mysqli();
 $sql->connect('localhost','cjwebtop','123456','cjwebtop');
 $sql->set_charset('utf8');
 //上面连接数据库都弄完了
  $nav=$sql->query("SELECT * FROM `commodity`");
  $con = array();
   while($arr = $nav -> fetch_array()){
        $con[] = $arr;
    }
    echo json_encode($con);
?>