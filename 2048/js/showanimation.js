function showNumberWithAnimation(i, j, randNumber ){

	var numberCell=$("#number-cell-"+i+'-'+j);
	numberCell.css('background-color',getNumberBackgroundColor(randNumber));
	numberCell.css('color', getNumberColor(randNumber));
	numberCell.text(randNumber);
	numberCell.animate({
		width:cellSideLength,
		height:cellSideLength,
		top:getPosTop(i, j)+'px',
		left:getPosLeft(i, j)+'px'
	},100);
}
//移动动画函数
function showMoveAnimation(fromx, fromy, tox, toy){
	var numberCell=$("#number-cell-"+fromx+'-'+fromy);
	numberCell.animate({
		top: getPosTop(tox, toy),
		left:getPosLeft(tox, toy)
	},200);
}
/*我们是取自身这个数字方块，
给它加个animate。
animate里面传的是目标格子的left和top值，
这个值是通过目标格子的坐标得到的。*/

function updateScore(score){

	$("#score").text(score);
}