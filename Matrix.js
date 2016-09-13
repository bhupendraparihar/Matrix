(function(){  //Self executing function to avoid poluting the global scope

function Matrix(noOfRows,noOfCols){
	var m = noOfRows;
	var n = noOfCols;
	var matrix = Array(m).fill().map(()=>Array(n).fill());
	
	this.getM = function(){
		return m;
	}

	this.getN = function(){
		return n;
	}

	this.getMatrix = function(){
		return matrix;
	}
    
  function setMatrix(fillerMatrix){
    matrix = fillerMatrix;
  }
    
  this.fill = function(rowArray){
		if(Array.isArray(rowArray)){
    	if(rowArray.length === this.getM()
     	&& rowArray.filter(function(x){ return x.length === this.getN();},this).length === this.getM()){
    		setMatrix(rowArray);
  		}else{
    		throw new Error("Argument doesn't have sufficient values");
  		}
  	}else{
  		throw new Error("Argument to fill method is not an array");
  	}
	}
}

Matrix.prototype.getValue = function(rowIndex,columnIndex){
		// Matrix starts with index 1,1
    return this.getMatrix()[rowIndex-1][columnIndex-1];
}

Matrix.prototype.getRow = function(rowNumber){
  return this.getMatrix()[rowNumber-1];
}

Matrix.prototype.getColumn = function(columnNumber){
  var column = [];
  this.getMatrix().forEach(function(elm){
    column.push(elm[columnNumber-1]);
  })
  return column;
}

Matrix.prototype.toString = function(){
	var mat = this.getMatrix();
	mat.forEach(function(rowMatrix){
		console.log(rowMatrix.reduce(function(i,p){
			return i + "  " + p;
		}));
	});
}

Matrix.transpose = function(mat){
	var m = mat.getN();
	var n = mat.getM();
	var transMat = new Matrix(m,n);
	var fillerForTransMat = [];
	for(var i  = 1; i<=n+1; i++){
		fillerForTransMat.push(mat.getColumn(i));
	}
	console.log(fillerForTransMat);
	transMat.fill(fillerForTransMat);
	return transMat;
}

Matrix.prototype.isSquareMatrix = function(){
	return this.getM() === this.getN();
}

Matrix.prototype.isRowMatrix = function(){
	return this.getM() === 1;
}

Matrix.prototype.isColumnMatrix = function(){
	return this.getN() === 1;
}

Matrix.prototype.isDiagonalMatrix = function(){
	var m,n,i,j;
	m = this.getM();
	n = this.getN();

	if(!this.isSquareMatrix()) return false;

	for(i = 1; i <= m; i++){
		for(j = 1; j <= n; j++){
			if((i === j && this.get(i,j) === 0) || (i !== j && this.get(i,j) !== 0)){
				return false;
			}
		}
	}
	return true;
}

Matrix.prototype.isUpperTriangularMatrix = function(){
	var m,n,i,j;
	m = this.getM();
	n = this.getN();
	
	if(!this.isSquareMatrix()) return false;

	for(i = 1; i <= m; i++){
		for(j = 1; j <= n; j++){
			if(i > j && this.get(i,j) !== 0){
				return false;
			}
		}
	}
	return true;
}

Matrix.prototype.isLowerTriangularMatrix = function(){
	var m,n,i,j;
	m = this.getM();
	n = this.getN();
	
	if(!this.isSquareMatrix()) return false;

	for(i = 1; i <= m; i++){
		for(j = 1; j <= n; j++){
			if(i < j && this.get(i,j) !== 0){
				return false;
			}
		}
	}
	return true;
}

//Diagonal are one, also known as Unit Matrix
Matrix.prototype.isIdentityMatrix = function(){
	var m,n,i,j;
	m = this.getM();
	n = this.getN();
	
	if(!this.isSquareMatrix()) return false;

	for(i = 1; i <= m; i++){
		for(j = 1; j <= n; j++){
			if((i === j && this.get(i,j) !== 1) || (i !== j && this.get(i,j) !== 0)){
				return false;
			}
		}
	}
	return true;
}

//Null Matrix who's all values are zero, it is also known as zero matrix
Matrix.prototype.isNullMatrix = function(){
	var m,n,i,j;
	m = this.getM();
	n = this.getN();

	for(i = 1; i <= m; i++){
		for(j = 1; j <= n; j++){
			if(this.get(i,j) !== 0){
				return false;
			}
		}
	}
	return true;
}

Matrix.prototype.isEqual = function(m2){
	var m,n,i,j;
	m = this.getM();
	n = this.getN();
	if(m === m2.getM() && n === m2.getN()){
		for(i = 1; i <= m; i++){
			for(j = 1; j <= n; j++){
				if(this.get(i,j) !== m2.get(i,j)) return false;
			}
		}
		return true;
	}
	return false;
}

//Adding matrix
Matrix.add = function(m1,m2){
	function sum(a,b){
		return a+b;
	}
	return toOperateOnMatrixValues(m1,m2,sum);
}

Matrix.sub = function(m1,m2){
	function sub(a,b){
		return a-b;
	}
	return toOperateOnMatrixValues(m1,m2,sub);	
}

function toOperateOnMatrixValues(m1,m2,operateFunction){
	if(m1.getM() !== m2.getM() || m1.getN() !== m2.getN()){
		throw ('Matrices are not of same order');
	}
	var m = m1.getM();
	var n = m1.getN();
	var resultMatrix = new Matrix(m,n);
	var fillerValues = [];
	var row;
	for(var i = 1; i<= m; i++){
		row  = [];
		for(var j = 1; j <= n; j++){
			row.push(operateFunction(m1.getValue(i,j),m2.getValue(i,j)));
		}
		fillerValues.push(row);
	}
	resultMatrix.fill(fillerValues);
	return resultMatrix;
}

window.Matrix = Matrix;

})();
