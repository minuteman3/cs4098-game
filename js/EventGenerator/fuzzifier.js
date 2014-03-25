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
		shapes[i] = new Array(points[i].length + 1);
		shapes[i][0] = makeAnyOption();

		for(var j = 1;j<points[i].length + 1;j++){
			// points starts  from 0 but first value is any
			shapes[i][j] = makeTrim(points[i][j - 1]);
		}
	}
	return shapes;
}

// This option will always return 100%
function makeAnyOption(){
	var shape = {};
	shape.any = true;
	return shape;
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
	if(shape.any)
		return 1;

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