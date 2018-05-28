<?php
$sql = new mysqli();
 $sql->connect('localhost','cjwebtop','123456','cjwebtop');
 $sql->set_charset('utf8');
 $nav=$sql->query("SELECT * FROM `JD`");
  $con = array();
   while($arr = $nav -> fetch_array()){
        $con[] = $arr;
    }
    echo json_encode($con);
?>