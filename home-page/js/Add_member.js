$(function(){
	//基本资料和上传头像选项卡
			$('#btn_change1').css('fontWeight', 600);
			$('#btn_change1').on('click', function() {
				$('#infor_add1').css('display', 'block');
				$('#infor_add2').css('display', 'none');
				$('#btn_change1').css('fontWeight', 600);
				$('#btn_change2').css('fontWeight', 400);
			})
			$('#btn_change2').on('click', function() {
				$('#infor_add2').css('display', 'block');
				$('#infor_add1').css('display', 'none');
				$('#btn_change2').css('fontWeight', 600);
				$('#btn_change1').css('fontWeight', 400);
			})




			//	获取图片上传路径
			$('#file').on('click', function() {
				var picSrc = $(this).val();
				console.log(picSrc)
				$('#infor_img').attr('src', 'img\Add_member');
			})
			$('#add_btns').on('click',function(){

				var radios = $('#radio input[name="sex"]:checked ').val();	
				console.log(radios);
				$.ajax({
					type:"post",
					url:"Add_member.php",
					data:{
						user:$('#add_user').val(),
						name:$('#add_name').val(),
						sex:radios,
						address:$('#address').val()
					},
				}).done(function(data){
					console.log(data);
				})
			})
})
window.onload=function(){
	var uls=document.getElementById("uls")
		var arr_one = ["关于我们","联系我们","联系客服","合作招商","商家帮助","营销中心","商家政策","友情链接","销售联盟","风险监测","华安社区","隐私政策","华安公益","English Site","Media&IR"]
		for(var i = 0;i<arr_one.length;i++){
			var li = document.createElement('li')
			li.innerHTML = arr_one[i]
			uls.appendChild(li)
		}
		//获得当前城市
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
        //	
}
		