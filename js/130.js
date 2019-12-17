
function solve(board) {
    if (!board.length) return;  //传入参数为空的话直接返回

    for( let i=0; i<board.length; i++) {    //board.length是矩阵的行数，从矩阵的左右边界开始遍历，遍历第一列和最后一列
        mark(board, i, 0);
        mark(board, i, board.length-1);
    }

    for( let i=1; i<board[0].length; i++) { //board[0].length是矩阵的列数，从矩阵的上下边界开始遍历，遍历第一行和最后一行
        mark(board, 0, i);                  //因为坐标(0,0)已经遍历过了，就从(0,1)开始遍历
        mark(board, board[0].length-1, i);
    }

    for( let i=0; i<board.length; i++) {        //全部遍历结束之后，和边界没有联系的O就转化为X，将#也转换为O
        for( let j=0; j<board[0].length; j++) {
            if (board[i][j]=='O') {
                board[i][j] = 'X';
            }

            if (board[i][j]=='#') {
                board[i][j] = 'O';
            }
        }
    }

}

//定义一个mark函数，深度优先，找到所有相连接的是'O'的值，并替换为'#'
function mark(board, i, j) {
    if (i<0 || i>board.length-1 || j<0 || j>board.length-1) return;     //出口条件 1越界 2不是O
    if (board[i][j]!=='O')   return;

    board[i][j] = '#';      //找到O的话就替换为#，继续查找

    mark(board, i-1, j);    //假如当前这个值是所求的O，就上下求索，把和它相邻的上下左右都看一看，还有没有'O'，假如有的话再继续替换
    mark(board, i+1, j);
    mark(board, i, j-1);
    mark(board, i, j+1);
}

//这个题用到了深度优先搜索，比较难的点是
//1. 先要写出所谓的mark函数，因为是递归的遍历，要掌握好出口条件
//2. 深度优先搜索在空间上有优势，不需要保存搜索过程中的状态。广度优先搜索需要保存搜索过的状态。
//3. DFS适合搜索全部的解，BFS适合搜索最短路径的解。比如最少步数的解，最少交换次数的解。
