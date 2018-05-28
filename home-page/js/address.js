$("#site_td2").blur(function(){
				var site_region=$('#site_td2').val();
				$.each(provinceJson,function(site_province,site_pro){
					var site_price=provinceJson[site_province];
					$.each(site_price.city,function(site_city,site_ct){
						var site_cty=site_price.city[site_city];
						$.each(site_cty.area,function(site_county,site_cty){
							if(site_pro.name+site_ct.name+site_cty==site_region){
								alert('正确');
								return site_region;
							}else{
								$('.site-center-add-td4').css('display','block');
							}
						})
					})
				})
			})
			$('#site_td2').focus(function(){
				$('.site-center-add-td4').css('display','none');
				$('#site_td2').val("");
			})
		// 地址验证
		$('#site_td3').blur(function(){
			var site_price=$('#site_td3').val();
			var site_price_ali=/^(?=.*?[\u4E00-\u9FA5])[\d\u4E00-\u9FA5]+/;
			if(site_price_ali.test(site_price)==false){
				$('.site-center-add-td5').css('display','block');
			}else{
				return site_price;
			}
		})	

		$('#site_td3').focus(function(){
			$('.site-center-add-td5').css('display','none');
			$('#site_td3').val("");
		})
		//收货人姓名验证
		$('#site_td4').blur(function(){
			var site_name=$('#site_td4').val();
			var site_name_ali=/^[\u4E00-\u9FA5A-Za-z]{1,25}$/;
			if(site_name_ali.test(site_name)==false){
				$('.site-center-add-td6').css('display','block');
			}else{
				return site_name;
			}
		})
		$('#site_td4').focus(function(){
			$('.site-center-add-td6').css('display','none');
			$('#site_td4').val("");
		})
		//手机号码验证
		$('#site_td5').blur(function(){
			var site_phone=$('#site_td5').val();
			var site_phone_ali=/^1[34578]\d{9}$/;
			if(site_phone_ali.test(site_phone)==false){
				$('.site-center-add-td7').css('display','block');
			}else{
				return site_phone;
			}
		})
		$('#site_td5').focus(function(){
			$('.site-center-add-td7').css('display','none');
			$('#site_td5').val("");
		})
		//提交到数据库
		$('#site_btn').click(function(){
			var site_region=$('#site_td2').val();
			var site_price=$('#site_td3').val();
			var site_name=$('#site_td4').val();
			var site_phone=$('#site_td5').val();
			console.log(site_name,site_region,site_price,site_phone)
			$.ajax({
				type:'POST',
				url:'php/price.php',
				data:{
					name:site_name,
					region:site_region,
					price:site_price,
					phone:site_phone
				},
				dataType:'json',
			}).done(function(data){
				if(data='添加成功'){
				var site_lis="<li class="site-center-right-bottom-li2'><h4>'+site_name+'</h4><h4>'+site_region+'</h4><h4>'+site_price+'</h4><h4>'+site_phone+"</h4></li>";
				$('#site_ul').append($(site_lis));
			}
			});
		})