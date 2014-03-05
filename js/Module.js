var Module = function(_developers)
{
    this.percentComplete = 0;
    this.developers = _developers;
}

Module.prototype.getPercentComplete = function()
{
    return this.percentComplete;
}

Module.prototype.done = function()
{
    return this.percentComplete >= 100;
}

Module.prototype.advance = function()
{
    if(!this.done())
    {
        this.percentComplete += this.developers;

        if(this.percentComplete > 100)
            this.percentComplete = 100;
    }
}

module.exports = Module;
