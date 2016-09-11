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

