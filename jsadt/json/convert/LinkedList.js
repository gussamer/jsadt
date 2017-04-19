/*
	|filename|.js
	|filedescription|

	Revision History
		|programmer|, |datecreated|: Created

*/

function |Objectname|(name){
	if(name!==undefined)this.name=name;
	else this.name=this.callee.name;
};
|Objectname|.prototype.getname=function(){if(|Objectname|.prototype.name!==undefined)return |Objectname|.prototype.name;else return null;};
|Objectname|.prototype.setname=function(newName){if(newName!==undefined)|Objectname|.prototype.name=newName;};
module.exports.|Objectname|=new |Objectname|();