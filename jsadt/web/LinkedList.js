/*
	|filename|.js
	|filedescription|

	Revision History
		|programmer|, |datecreated|: Created

*/
function |Objectname|(name){
	if(name!==undefined)this.name=name;
	else this.name=this.callee.name;
this.getname=function(){if(|Objectname|.prototype.name!==undefined)return |Objectname|.prototype.name;else return null;};
this.setname=function(newName){if(newName!==undefined)|Objectname|.prototype.name=newName;};
}