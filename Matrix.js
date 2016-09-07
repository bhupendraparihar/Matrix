function Matrix(){}

Matrix.prototype.createMatrix = function(m,n){
	this.m = m; // m is row
	this.n = n; // n is column
	return Array(m).fill().map(()=>Array(n).fill());
}

Matrix.prototype.isSquareMatrix = function(){
	return this.m === this.n;
}

Matrix.prototype.isRowMatrix = function(){
	return this.m === 1;
}

Matrix.prototype.isColumnMatrix = function(){
	return this.n === 1;
}