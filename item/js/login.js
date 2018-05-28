    let html = document.getElementsByTagName('html')[0];
	let rem = document.documentElement.clientWidth/10
    html.style.fontSize = rem+'px'
    //登录
    let person = ($)=>{
    	return document.getElementsByClassName($)[0];
    }
    $('.button').click(function(){
    	let a = $('.user').val()
    	$.ajax({
    		type:"post",
    		data:{
    			zh:$('.user').val(),
    			mm:$('.password').val(),
    			num:1
    		},
    		url:"js/login.php",
    	}).done(function(data){
    		if(data == '登录成功'){
    			sessionStorage.setItem('cur',1)
    			window.location.href = "me.html?id="+ a;
    		}else{
    			window.history.back(-1);
    		}
    	})
    	;
    })
    //下面做点击密码框和用户框的一些dom操作
    person('user').oninput = function(){
    	if(this.value == ""){
    		person('delete').style.display = 'none';
    	}else{
    		person('delete').style.display = 'block';
    	}
    }
    person('password').oninput = function(){
    	if(this.value == ""){
    		person('del').style.display = 'none';
    		person('look').style.display = 'none';
    	}else{
    		person('del').style.display = 'block';
    		person('look').style.display = 'block';
    	}
    }
    $('.delete').on('click',function(){
    	$('.user').val('');
    })
    $('.del').on('click',function(){
    	$('.password').val('');
    })
    let flag = true
    $('.look').on('click',function(){
    	if(flag){
    		$('.password')[0].setAttribute('type','text')
    		flag = false;
    	}else{
    		$('.password')[0].setAttribute('type','password')
    		flag = true;
    	}
    })