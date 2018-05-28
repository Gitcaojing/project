//基础支持部分

//显示浏览器的屏幕的可用宽度，然后给各个元素设置宽度值

documentWidth=window.screen.availWidth;
gridContainerWidth=0.92*documentWidth;
cellSideLength=0.18*documentWidth;
cellSpace=0.04*documentWidth;

function getPosTop(i, j){
	//设置格子之间的距离以及格子的宽度
	return cellSpace+i*(cellSideLength+cellSpace);
}

function getPosLeft(i, j){
	return cellSpace+j*(cellSideLength+cellSpace);
}
/*定位完成后我们进行的是board数组的初始化，
初始化为一个4*4的二维数组，值为false。
board初始化完成后我们则根据board来将游戏界面更新。
因为后续我们会经常使用到根据board数组更新游戏画面,
所以将其写成一个updateBoardView()方便调用*/




function getNumberBackgroundColor(number)
{
	switch(number){
		case 2:   return "#eee4da"; break;
		case 4:   return "#ede0c8"; break;
		case 8:   return "#f2b179"; break;
		case 16:  return "#f59563"; break;
		case 32:  return "#f67c5f"; break;
		case 64:  return "#f65e3b"; break;
		case 128: return "#edcf72"; break;
		case 256: return "#edcc61"; break;
		case 512: return "#9c0";    break;
		case 1024:return "#33b5e5"; break;
		case 2048:return "#09c";    break;
		case 4096:return "#a6c";    break;
		case 8192:return "#93c";    break;

	}
	return "black";
}


function getNumberColor(number){
	if(number<=4)
	{
		return "#776e65";
	}
	else
		return "white";
}

function nospace(board){

	for(var i=0; i<4; i++)
		for(var j=0; j<4; j++)
			if(board[i][j]==0)
				return false;
		return true;
}
//检测能否左移
function canMoveLeft( board ){

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 1; j < 4 ; j ++ )
            if( board[i][j] != 0 )
                if( board[i][j-1] == 0 || board[i][j-1] == board[i][j] )
                    return true;

    return false;
}
/*这里面显而易见的是左边第一列的4个格子是不能移动的，
所以只需要遍历右边的12个格子，
只要有一个有数字的格子的自身左边的一个格子为空，
或者说值和它相等，那么游戏状态就是可以左移的，
直接return true;即可。
看完检测函数后我们来看看后面的移动的部分。*/


function canMoveReight( board ){

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 2; j >= 0 ; j -- )
            if( board[i][j] != 0 )
                if( board[i][j+1] == 0 || board[i][j+1] == board[i][j] )
                    return true;

    return false;
}

function canMoveUp( board ){

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 1 ; i < 4 ; i ++ )
            if( board[i][j] != 0 )
                if( board[i-1][j] == 0 || board[i-1][j] == board[i][j] )
                    return true;

    return false;
}

function canMoveDown( board ){

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 2 ; i >= 0 ; i -- )
            if( board[i][j] != 0 )
                if( board[i+1][j] == 0 || board[i+1][j] == board[i][j] )
                    return true;

    return false;
}

//检测每一行上面有没有阻碍
function noBlockHorizontal( row , col1 , col2 , board ){
    for( var i = col1 + 1 ; i < col2 ; i ++ )
        if( board[row][i] != 0 )
            return false;
    return true;
}
/*对于第一种情况我们的操作是：

调用移动动画函数
更新board数组，将自身的值传给目标格子，自身设为0
对于第二种情况我们的操作是：

调用移动动画函数
更新board数组，目标格子的值加上自身的值，自身设为0*/

function noBlockVertical( col , row1 , row2 , board ){
    for( var i = row1 + 1 ; i < row2 ; i ++ )
        if( board[i][col] != 0 )
            return false;
    return true;
}

function nomove( board ){
    if( canMoveLeft( board ) ||
        canMoveReight( board ) ||
        canMoveUp( board ) ||
        canMoveDown( board ) )
        return false;

    return true;
}
