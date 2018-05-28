<?php
	$name=$_POST['name'];
	$region=$_POST['region'];
	$price=$_POST['price'];
	$phone=$_POST['phone'];
	// $arr = array($name,$region,$price,$phone);
	// echo json_encode($arr);
	$sql=new mysqli();
	$sql->connect('localhost','lleesint','888888','lleesint');
	$sql->set_charset('utf8');
	$res=$sql->query("INSERT INTO `lleesint`.`information` (`name`, `region`, `price`, `phone`) VALUES ('".$name."', '".$region."', '".$price."', '".$phone."')");
		if($res==1){
			echo "添加成功";
		}else{
			echo "添加失败";
		}
?>