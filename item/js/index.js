let rem = document.documentElement.clientWidth/10
$('html').css('fontSize',rem+'px');
var arr = ['推荐','国际','娱乐','体育','两会','财经',]
for(let nav in arr){
	$('.bar-ul').append('<li>'+arr[nav]+'</li>')
}
let li = $('.bar-ul').children();
li[0].setAttribute('class','lis')
//自动轮播
var mySwiper = new Swiper('.swiper-container', {
	  loop:true,
	  autoplay: {
	    delay: 3000,
	    stopOnLastSlide: false,
	    disableOnInteraction: false
	    },
	  pagination: {
		el: '.swiper-pagination',
		},
});
//获取数据库里面的新闻
       let content = document.querySelector('.index-content-piece')
       function load(){
	    	let medhot = new XMLHttpRequest();
		    medhot.open('GET','js/news.php',true);
		    medhot.onreadystatechange = function(){
		    	if(medhot.readyState == 4 && medhot.status==200){
		    		let data = medhot.responseText;
		    		let datas= JSON.parse(data)
		    		datas.forEach(function(item,index){
		    			var create = (function(){
				       	    return function(){
				       	    	 let div = document.createElement('div');
				       	    	 div.innerHTML = "<div class='newsimg'><img src="+item[0]+"></div><div class='indexnews'><h5>"+item[1]+"</h5><p>"+item[2]+"</p><span><span class='iconfont icon-liuyan'></span><i>0</i></span></div><div class='newsdete'><span class='iconfont icon-shanchu1'></span></div>"
				       	    	 div.className = 'index-content-piece'
				       	    	 $('.index-content').append(div)
				       	    }
				       })()
		    			create();
		    		})
		    	}
		    }
		    medhot.send()
	    }
	    load()
//
let me = $('.bottom-me')[0];
me.onclick = function(){
	window.location = 'me.html'
}
let cur = $('.icon-iconfonticon02')[0];
cur.onclick = function(){
	window.location = 'classify.html'
}
//评论数目
let mes = $('.shuxie')[0];
mes.onclick = function(){
	window.location = 'comment.html'
};
$('.icon-liuyan')[0].onclick = function(){
	window.location = 'comment.html'
};
let create = (function(){
	let num = 0;
        let medhot = new XMLHttpRequest();
		medhot.open('GET','js/comment.php?flag_num='+1,true);
		medhot.onreadystatechange = function(){
		    if(medhot.readyState == 4 && medhot.status==200){
		    	let data = medhot.responseText;
		        let datas= JSON.parse(data)
		        $.each(datas, function(index,item) {
		        	num++;
		        });
		        $('#num').html(num);
		    }
		}
		medhot.send();
})();
