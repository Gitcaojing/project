<?php
   	  	$username = $_POST['zh'];
	      $password = $_POST['mm'];
	      $num = $_POST['num'];
	      $sql = new mysqli();
	      $sql ->connect('localhost','cjwebtop','123456','cjwebtop');
	      $sql ->set_charset('utf8');
	      if($num == 0){
						$nav=$sql->query("INSERT INTO `cjwebtop`.`zhishi` (`pwd`, `phone`) VALUES ('".$password."', '".$username."')");
						if($nav == 1){
							echo "注册成功";
						}else{
							echo "注册失败";
						}
				}else{
					    $nav = $sql->query("SELECT * FROM `zhishi` WHERE `pwd` = '".$password."' AND `phone` = '".$username."'");
							$row = $nav->fetch_row();
							if($username == $row[1]&&$password == $row[0]){
								echo '登录成功';
							}else{
								echo '登录失败';
							}
				}
?>