<?php
	$user=$_POST['user'];
	$name=$_POST['name'];
	$sex=$_POST['sex'];
	$address=$_POST['address'];
	$sql=new mysqli();
	$sql->connect('localhost','cjwebtop','123456','cjwebtop')
	$sql->set_charset('utf-8');
	$res=$sql->query("INSERT INTO `q740270592`.`userlist` (`user`, `name`, `sex`, `address`) VALUES ('".$user."', '".$name."', '".$sex."', '".$address."')");
	if($res){
		echo "添加成功";
	}else{
		echo "添加失败";
	}
	
?>