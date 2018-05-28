<?php
	$sql = new mysqli();
    $sql -> connect('localhost','cjwebtop','123456','cjwebtop');
    $sql -> set_charset('utf8');
	$res = $sql -> query("SELECT * FROM `zhihuNews`");
	$content = array();
	while($arr = $res -> fetch_array()){
            $content[] = $arr;
        }
        echo json_encode($content);
?>