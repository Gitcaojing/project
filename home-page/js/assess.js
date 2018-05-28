var assessul3=document.getElementsByClassName('assess-ul3')[0];
		var assesslis=assessul3.children;
		var assessimgs=document.getElementsByClassName('assess-img1');
		for(var i=0;i<assessimgs.length;i++){
			 assessimgs[i].setAttribute("score",i+1);
			assessimgs[i].onmousemove=function(){
				var assessSrc=event.srcElement;
				 var score=assessSrc.getAttribute("score");
                    for(var j=0;j<score;j++){
                       assessimgs[j].src="img/lw/star1.png";
                    }
                    for(var j=score;j<assessimgs.length;j++){
                       assessimgs[j].src="img/lw/star.png";
                    }
			}
		}
		$('#assess-btn').click(function(){
			var assess_area=$('#assess_area').val();
			$.ajax({
				type:'POST',
				url:'php/assess.php',
				data:{
					conmet:assess_area,
				},
				dataType:'json',
			}).done(function(data){
				alert('成功');
			})
		})