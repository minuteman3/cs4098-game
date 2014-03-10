

var City = function(_name,_costPerDeveloper,_baseProductivity)
{
    this.name = _name;
    this.costPerDeveloper = _costPerDeveloper;
    this.productivity = _baseProductivity;
    this.morale = 100;

};


City.prototype.progress = function( developerCount)
{

    return (this.productivity * developerCount);
};

City.prototype.cost = function( developerCount)
{
	
    return (this.costPerDeveloper * developerCount);
};


City.prototype.status = function()
{
    return 3;
};

module.exports = City;