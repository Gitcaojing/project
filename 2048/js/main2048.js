var board=new Array(); //存储游戏的数据
var score=0; //得分
var hasConflicted=new Array();

$(document).ready(function(){
	//为游戏初始化宽度
    prepare();
    //开始一个新的游戏
    newgame();
});
//定义游戏框架大小，初始化宽度；
function prepare(){
	console.log(documentWidth)
    if( documentWidth > 500 ){
    	//容器宽度
        gridContainerWidth = 500;
        //间隙
        cellSpace = 20;
        //小格子大小
        cellSideLength = 100;
    }

    $('#grid-container').css('width',gridContainerWidth - 2*cellSpace);
    $('#grid-container').css('height',gridContainerWidth - 2*cellSpace);
    $('#grid-container').css('padding', cellSpace);
    $('#grid-container').css('border-radius',0.02*gridContainerWidth);

    $('.grid-cell').css('width',cellSideLength);
    $('.grid-cell').css('height',cellSideLength);
    $('.grid-cell').css('border-radius',0.02*cellSideLength);
}

function newgame(){
	//初始化16个方格，也就是棋盘格
	init();


	//随机在格子中生成一个数字，一开始要有两个数字，所以调用两边
	generateOneNumber();
	generateOneNumber();
}

function init(){
	//初始化有数字的小方块
	for(var i=0; i<4; i++){
		for(var j=0; j<4; j++){
			var gridCell=$("#grid-cell-"+i+"-"+j);
			gridCell.css('top',getPosTop(i, j));
			gridCell.css('left',getPosLeft(i, j));

		}
	}	
	//初始化board数组
	for(var i=0; i<4; i++){
		board[i]= new Array();
		hasConflicted[i]=new Array();
		for(var j=0; j<4; j++){
			board[i][j]=0;

			hasConflicted[i][j]=false;
		}
	}
	//当用户进行操作的时候，更新我们的游戏界面
	updateBoardView();
	//得分初始化为0；
	score=0;
	
	//通过遍历得到每一个格子，所以我们要给一个定位，我们将两个方法写在frame里面
	//getPosTop,getPosLeft
}
/*我们是动态加载有数字的方块的，
每次更新先将所有的数字方块全部移除，
在弄个循环创建它们，
并且创建的同时用css设置样式。
设置样式时先判断这个位置的board是不是0,
为零的话则将宽高设置为0，
并将它们的top,left设置在背景方格的中间
（这里是为了后面的animate动画是从中间变化）。
对于board中有值的，则需要多设置他们的background-color和color。
最后将值显示在html中，即theNumberCell.text(board[i][j])*/




//更新棋盘上显示的方块
function updateBoardView(){
//如果有number-cell后先删除
	$(".number-cell").remove();
	 //遍历格子，改变样式
	for(var i=0; i<4; i++)
		for(j=0; j<4; j++){
			$('#grid-container').append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
			var theNumberCell=$('#number-cell-'+i+'-'+j);
			if(board[i][j]==0){
				theNumberCell.css('width','0px');
				theNumberCell.css('height','0px');
				theNumberCell.css('top',getPosTop(i, j)+cellSideLength/2);
				theNumberCell.css('left',getPosLeft(i,j)+cellSideLength/2);
			}else{
				theNumberCell.css('width',cellSideLength);
				theNumberCell.css('height',cellSideLength);
				theNumberCell.css('top',getPosTop(i, j));
				theNumberCell.css('left',getPosLeft(i, j));
				theNumberCell.css('background-color', getNumberBackgroundColor(board[i][j]));
				theNumberCell.css('color',getNumberColor(board[i][j]));
				theNumberCell.css('font-size','60px');
				theNumberCell.text(board[i][j]);
				
			}
			hasConflicted[i][j]=false;
		}
		
    $('.number-cell').css('line-height',cellSideLength+'px');
    $('.number-cell').css('font-size',0.2*cellSideLength+'px');
}
//写完之后，我们要将数字方块的背景色和前景色获取，
//我们把这两个函数卸载frame里面，就用一个switch就好了，简单明了


//初始化的最后一步；
//要想在格子上随机生成一个数字，首先我们需要先确定还有空格子可以生成,没有的话直接返回，所以先判断
function generateOneNumber(){
	//判断空间是否已满
	if(nospace(board))//nospace(board)写在frame中
		return false;

/*接着要随机生成一个坐标,
并且判断这个点是不是为空，
不为空则继续随机生成。实在是找不到了，
 就遍历格子，选第一个为空的格子*/



	//随机生成一个位置
	var randx=parseInt(Math.floor(Math.random()*4));
	var randy=parseInt(Math.floor(Math.random()*4));
//看是不是空格,优化随机
	var times=0;
	while(times<50){//可以写成1或true
		if(board[randx][randy]==0)
			break;
		//如果位置不可用继续寻找可用位置
		randx=parseInt(Math.floor(Math.random()*4));
		randy=parseInt(Math.floor(Math.random()*4));
		
		times++;
	}
	if(times==50){//人工寻找到一个没有数字的位置
		for(var i=0; i<4; i++)
			for(var j=0; j<4; j++){
				if(board[i][j]==0)
					randx=x;
					randy=y;
			}
	}
	//随机生成一个数字
	//50%概率生成随机数2和4
	var randNumber=Math.random()<0.5?2:4;

	//在随机位置上显示随机的数字
		board[randx][randy]=randNumber;
		//显示在前端界面的函数在showanimation中实现
		showNumberWithAnimation(randx, randy, randNumber);
		return true;
}
var s=0,x=0,z=0,y=0;
$(document).keydown(function(event){
		event.preventDefault();
	switch(event.keyCode){
		case 37: //left
			if(moveLeft()){
				setTimeout("generateOneNumber()",200);
				setTimeout("isgameover()",300);
			}
			break;
		case 38: //up
			if(moveUp()){
				setTimeout("generateOneNumber()",200);
				setTimeout("isgameover()",300);
			}
			break;
		case 39: //reight
			if(moveReight()){
				setTimeout("generateOneNumber()",200);
				setTimeout("isgameover()",300);
			}
			break;
		case 40: //down
			if(moveDown()){
				setTimeout("generateOneNumber()", 200);
				setTimeout("isgameover()",300);
			}
			break;
		default: //default
			break;
	}
});
/*但这牵扯到的两个问题，
 * 一个是当前的游戏状态允不允许执行左移或者右移，
 * 比如如果是不能左移的话，
 * 那按下←应该是无效的，
 * 同时就不应该新生成一个数字。
 * 一个是移动后应该立马检测游戏有没有结束，
 * 如果四个方向都不能移动的话，游戏就应该GameOver了。
 * 为解决第一个问题，我们需要做一个检测，
 * 返回一个值来决定需不需要新生成一个数字。
 * 为解决第二个问题，我们需要写一个isgameover().
*/




function isgameover(){
    if( nospace( board ) && nomove( board ) ){
        gameover();
    }
}

function gameover(){
	setTimeout(function(){alert('gameover!')},200);
    
}


/*在这里面我们做两件事，
一个是先判断能不能移动，
不行的话直接返回false。
如果能移动的话，我们再执行接下来的移动部分*/
function moveLeft(){

    if( !canMoveLeft( board ) )
        return false;

    //遍历右边12个格子
    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 1 ; j < 4 ; j ++ ){
            if( board[i][j] != 0 ){
				//有数字则遍历左边
                for( var k = 0 ; k < j ; k ++ ){
                	//看落点是否为空且路上有无障碍
                    if( board[i][k] == 0 && noBlockHorizontal( i , k , j , board ) ){
                        //移动
                        showMoveAnimation( i , j , i , k );
                        //更新
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if( board[i][k] == board[i][j] && noBlockHorizontal( i , k , j , board ) && !hasConflicted[i][k]){
                        //移动
                        showMoveAnimation( i , j , i , k );
                        //更新
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        	//加分步骤
                        	
                        	score+=board[i][k];
                        	updateScore(score);

                        	hasConflicted[i][k]=true;
                        continue;
                    }
                }
            }
        }
	//遍历完后更新格子显示状态,慢一点才能显示动画
    setTimeout("updateBoardView()",200);
    return true;
}
/*我们通过canMoveLeft来判断当前游戏状态能不能左移，
我们要用到的是存储格子数据的数组board，
我们将这个函数写在frame中*/

/*同理，也是只需要遍历右边的12个格子，
先判断遍历到的这个格子是不是有值，
有的话则遍历其左边的所有格子。这里就分成两种情况
1.目标格子是空的，且中间没有阻碍，于是可以移动过去
2.目标格子的值和自身是相等的，而且中间没有阻碍，那么就可以合并
除了这两种情况以外的都不需要做什么操作。
为此我们需要在frame中写一个检测两个格子间(同一行)有没有阻碍的函数
noBlockHorizontal:*/





function moveReight(){
    if(!canMoveReight( board ) )
        return false;

    //moveRight
    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 2 ; j >= 0 ; j -- ){
            if( board[i][j] != 0 ){
                for( var k = 3 ; k > j ; k -- ){

                    if( board[i][k] == 0 && noBlockHorizontal( i , j , k , board ) ){
                        showMoveAnimation( i , j , i , k );
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if( board[i][k] == board[i][j] && noBlockHorizontal( i , j , k , board ) && !hasConflicted[i][k] ){
                        showMoveAnimation( i , j , i , k);
                        board[i][k] +=board[i][j];
                        board[i][j] = 0;

                        	score+=board[i][k];
                        	updateScore(score);

                        	hasConflicted[i][k]=true;

                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()",200);
    return true;
}

function moveUp(){

    if( !canMoveUp( board ) )
        return false;

    //moveUp
    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 1 ; i < 4 ; i ++ ){
            if( board[i][j] != 0 ){
                for( var k = 0 ; k < i ; k ++ ){

                    if( board[k][j] == 0 && noBlockVertical( j , k , i , board ) ){
                        showMoveAnimation( i , j , k , j );
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if( board[k][j] == board[i][j] && noBlockVertical( j , k , i , board ) &&!hasConflicted[k][j] ){
                        showMoveAnimation( i , j , k , j );
                        board[k][j] += board[i][j];
                        board[i][j] = 0;

                        	score+=board[k][j];
                        	updateScore(score);


                        	hasConflicted[k][j]=true;
                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()",200);
    return true;
}

function moveDown(){
    if( !canMoveDown( board ) )
        return false;

    //moveDown
    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 2 ; i >= 0 ; i -- ){
            if( board[i][j] != 0 ){
                for( var k = 3 ; k > i ; k -- ){

                    if( board[k][j] == 0 && noBlockVertical( j , i , k , board ) ){
                        showMoveAnimation( i , j , k , j );
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if( board[k][j] == board[i][j] && noBlockVertical( j , i , k , board ) && !hasConflicted[k][j] ){
                        showMoveAnimation( i , j , k , j );
                        board[k][j] +=board[i][j];
                        board[i][j] = 0;


                        	score+=board[k][j];
                        	updateScore(score);
             			
                        	hasConflicted[k][j]=true;
                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()",200);
    return true;
}