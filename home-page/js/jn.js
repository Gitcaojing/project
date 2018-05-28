var map = new BMap.Map('map');
        var myCity = new BMap.LocalCity();
        myCity.get(myFun);
        function myFun(result){
           var cityName = result.name;
           $('#index_adress').html(cityName);
        }
        //
        //搜索栏
        $('#index-txt').keydown(function(){
        	$('#index-ull').html(" ");
        })
        $('#index-txt').keyup(function(){
        	var txt = $('#index-txt').val()
        	$('#index-ull').css("display","block")
        	search(txt)
        })
        $('#index-txt').blur(function(){
        	$('#index-ull').css('display','none')
        })
         $('#index-txt').focus(function(){
        	$('#index-ull').css('display','block')
        })
        function search(txt){
        	$.ajax({
        		type:"get",
        		url:"https://suggest.taobao.com/sug?code=utf-8&q="+txt+"&_ksTS=1523362618589_643&callback=jsonp644&k=1&area=c2c&bucketid=1",
        		dataType:'jsonp',
        		jsonpCallback:'jsonp644'
        	}).done(function(data){
        		for(var k in data.result){
        			$('#index-ull').append("<li>"+data.result[k][0]+"</li>")
        		}
        	})
        }
        
		
		
		var ul = document.getElementsByTagName('ul');
		var arr_one = ["关于我们","联系我们","联系客服","合作招商","商家帮助","营销中心","商家政策","友情链接","销售联盟","风险监测","华安社区","隐私政策","华安公益","English Site","Media&IR"]
		for(var i = 0;i<arr_one.length;i++){
			var li = document.createElement('li')
			li.innerHTML = arr_one[i]
			ul[18].appendChild(li)
		}



	$('#pro_top_right_bay_2').click(function(){
		$(this).css('color','white');
		$(this).css('background','red');
		alert('添加成功')
	})
	$('#pro_top_right_bay_3').click(function(){
		$(this).css('background','red');
		$(this).css('color','white');
		$(this).siblings('#pro_top_right_bay_2').css('background','');
		$(this).siblings('#pro_top_right_bay_2').css('color','red');
	})
	
	
	
	var jnp=$('#pro_top_right_style_3 .p_4');
		jnp.click(function(){
			$(this).css('border','2px solid red').siblings('.p_4').css('border','1px solid darkgray');
		})
	
	var jna=$('#pro_top_right_style_1 .p_4');
		jna.click(function(){
			$(this).css('border','2px solid red').siblings('.p_4').css('border','1px solid darkgray');
			jnb.css('border','1px solid darkgray');
		})
		
	var jnb=$('#pro_top_right_style_2 p');
		jnb.click(function(){
				$(this).css('border','2px solid red').siblings('p').css('border','1px solid darkgray');
				jna.css('border','1px solid darkgray');
			})
		
	var jnc=$('#pro_rel_title_ul1 li');
		jnc.click(function(){
			$(this).css('color','white').siblings('li').css('color','#333');
			$(this).css('background','red').siblings('li').css('background','#DADADA');
		})
		
	var jnd=$('.pro_show_right_title_ul1 li');
		jnd.click(function(){
			$(this).css('color','white').siblings('li').css('color','#333');
			$(this).css('background','red').siblings('li').css('background','rgb(247,247,247)');
		})

			
