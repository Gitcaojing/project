<?php
	$conmet=$_POST['conmet'];
	// $arr = array($name,$region,$price,$phone);
	// echo json_encode($arr);
	$sql=new mysqli();
	$sql->connect('localhost','lleesint','888888','lleesint');
	$sql->set_charset('utf8');
	$res=$sql->query("INSERT INTO `lleesint`.`assess` (`commet`) VALUES ('".$conmet."')");
		if($res==1){
			echo "添加成功";
		}else{
			echo "添加失败";
		}