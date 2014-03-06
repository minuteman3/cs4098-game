var Fuzzifier = function(varPointArr){
	this.memFuncs = makeMembershipFunctions(varPointArr);
};

Fuzzifier.prototype.getMembershipsValues = function(variables){
	var resultArr = new Array(this.memFuncs.length);

	for(var i=0;i<variables.length;i++){
		resultArr[i] = [];
		for(var j = 0;j<this.memFuncs[i].length;j++){
			resultArr[i][j] = membership(this.memFuncs[i][j],variables[i]);
		}
	}
	return resultArr;
};

function makeMembershipFunctions(points){
	var shapes = new Array(points.length);
	for(var i=0;i<points.length;i++){
		shapes[i] = new Array(points[i].length);
		for(var j = 0;j<points[i].length;j++){
			shapes[i][j] = makeTrim(points[i][j]);
		}
	}
	return shapes;
}

function makeTrim(points){
	var shape = {};
	shape.x0 = points[0];
	shape.x1 = points[1];
	shape.x2 = points[1];
	shape.x3 = points[2];
	return shape;
}

function membership(shape,val){
	var result = 0;
    var x = val;

    if (x <= shape.x0) {
        result = 0;
    } else if (x >= shape.x3) {
            result = 0;
    } else if ((x>=shape.x1) && (x<=shape.x2)) {
            result = 1;
    } else if ((x>shape.x0) && (x<shape.x1)) {
            result = (x/(shape.x1-shape.x0))-(shape.x0/(shape.x1-shape.x0));
    } else {
            result = (-x/(shape.x3-shape.x2))+(shape.x3/(shape.x3-shape.x2));
    }
    return result;
}
module.exports = Fuzzifier;