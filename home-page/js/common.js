$(function(){

    //获得当前城市
    var map = new BMap.Map('map');
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);
    function myFun(result){
        var cityName = result.name;
        $('#index_adress').html(cityName);
    }

    //搜索栏
    $('#index-txt').keydown(function(){
        $('#index-ull').html(" ");
    });
    $('#index-txt').keyup(function(){
        var txt = $('#index-txt').val();
        $('#index-ull').css("display","block");
        search(txt);
    });
    $('#index-txt').blur(function(){
        $('#index-ull').css('display','none');
    });
    $('#index-txt').focus(function(){
        $('#index-ull').css('display','block');
    });

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

    //给销量栏添加样式
    $('.f-sort').children('a').on('mouseover',function(){
        $(this).addClass('col').siblings().removeClass('col');
    });
    $('.f-sort').children('a').on('mouseout',function(){
        $(this).removeClass('col');
    });

   // 商品内容
   var bValue = $('#brand_value');
   $.ajax({
        // 获取商品数据
       type:'get',
       url:'https://s.taobao.com/search?data-key=s&data-value=48&ajax=true&_ksTS=1523350286028_653&q=%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.2017.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20170306&p4ppushleft=5%2C48',
       dataType:'jsonp'
   }).done(function(data){
        // 动态获取电脑品牌
       // console.log((data.mods.nav.data.common)[0].sub);
       //品牌
       var bData = (data.mods.nav.data.common)[0].sub;
       //尺寸
       var size = data.mods.nav.data.adv[0].sub;
       //内存
       var memory = data.mods.nav.data.adv[3].sub;
       // console.log(size);
       var leng = bData.length;
       // console.log(bData[0].text)
       // 添加电脑品牌
       for(var i = 0;i < leng;i ++){

           var as = '<a class="item" href="javascript:" value= '+ bData[i].value +'><span><input type="checkbox" ">'+bData[i].text+'</span></a>';
           bValue.append(as);
       }
       // 添加屏幕尺寸
       for(var j = 0;j < size.length;j ++){

           var as = '<a class="con" href="javascript:" value= '+ size[j].value +'><span>'+size[j].text+'</span></a>';
           $('#size').append(as);
       };
       // 添加显示内存
       for(var k = 0;k < memory.length;k ++){

           var as = '<a class="con" href="javascript:" value= '+ memory[k].value +'><span>'+memory[k].text+'</span></a>';
           $('#memory').append(as);
       }

   });

    // 点击更多按钮,显示所有电脑品牌
    $('.switch-more').click(function(){

        $('#shop_brand').addClass('frame');
        $('#brand').addClass('b-brand');
        $('.shop-btn').css({
            display:'block'
        });

    });

    //点击取消按钮，隐藏框
    $('.cBtn').click(function(){

        $('#shop_brand').removeClass('frame');
        $('#brand').removeClass('b-brand');
        $('.shop-btn').css({
            display:'none'
        });
        $('#brand_value').find(':input').css('visibility','hidden');
    });

    // 点击多选按钮
    $('.switch-multi').click(function(){

        $('#shop_brand').addClass('frame');
        $('#brand').addClass('b-brand');
        $('.shop-btn').css({
            display:'block'
        });

        $('#brand_value').find(':input').css('visibility','visible');
    });
    
    //商品列表
    for(var g = 0;g < 4;g ++){

        var uls = $('.shop-main').eq(0).clone(true);
        $('.shop-list').append(uls);
    }
    //商品链接
    $('.com li').on('click',function(){
    	window.location ='pro.html' 
    })
    //底部
    var ul = document.getElementsByClassName('floor-ul-one');
    var arr_one = ["关于我们","联系我们","联系客服","合作招商","商家帮助","营销中心","商家政策","友情链接","销售联盟","风险监测","华安社区","隐私政策","华安公益","English Site","Media&IR"]
    for(var i = 0;i<arr_one.length;i++){
        var li = document.createElement('li');
        li.innerHTML = arr_one[i];
        ul[0].appendChild(li)
    }
});
