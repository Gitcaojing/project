<?php
 $id = $_GET['id'];
 $txt = $_GET['txt'];
 $adress = $_GET['adress'];
 $flag = $_GET['flag_num'];
 //连接数据库
 $sql = new mysqli();
 $sql ->connect('localhost','cjwebtop','123456','cjwebtop');
 $sql ->set_charset('utf8');
 //发送至数据库
 if($flag == 0){
 	$nav = $sql->query("INSERT INTO `cjwebtop`.`discuss` (`id`, `statement`, `adress`) VALUES ('".$id."', '".$txt."', '".$adress."');");
	 if($nav == 1){
	 	echo '发送成功';
	 }else{
	 	echo '发送失败';
	 }
 }
 //把所有评论渲染到页面
 if($flag == 1){
 	$res = $sql -> query("SELECT * FROM `discuss`");
	$content = array();
	while($arr = $res -> fetch_array()){
            $content[] = $arr;
        }
        echo json_encode($content);
 }
?>