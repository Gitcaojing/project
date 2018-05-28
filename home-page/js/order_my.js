window.onload=function(){
	var uls=document.getElementById("uls");
	var ul = document.getElementsByTagName('ul');
		var arr_one = ["关于我们","联系我们","联系客服","合作招商","商家帮助","营销中心","商家政策","友情链接","销售联盟","风险监测","华安社区","隐私政策","华安公益","English Site","Media&IR"]
		for(var i = 0;i<arr_one.length;i++){
			var li = document.createElement('li')
			li.innerHTML = arr_one[i]
			uls.appendChild(li)
		}
		$('#my_list_ul').children().on('click',function(){
			$('#my_list_div').children().eq($(this).index()).css('display','block').siblings().css('display','none');
		})
}

