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
      if(rowArray.length === this.getM()){
        if(rowArray.filter(function(x){ return x.length === this.getN();},this).length === this.getM()){
          this.setMatrix(rowArray);
        }
      }else{
        throw "Argument doesn't have sufficient values";
      }
    }else{
      throw "Argument to fill method is not an array";
    }
  }
    
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

