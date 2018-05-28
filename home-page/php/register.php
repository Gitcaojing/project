<?php
//下面是注册用户
 $user = $_POST['zh'];
 $pas = $_POST['mm'];
 $email = $_POST['ema'];
 $phone =$_POST['pho'];
 $sql = new mysqli();
 $sql->connect('localhost','cjwebtop','123456','cjwebtop');
 $sql->set_charset('utf8');
 $navTwo = $sql->query("INSERT INTO `cjwebtop`.`register` (`username`, `pas`, `email`, `phone`) VALUES ('$user', '$pas', '$email', '$phone')");
 if($navTwo== 1){
		echo "注册成功";
	}else{
		echo "注册失败";
	}
 //
?>