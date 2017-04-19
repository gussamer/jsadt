/*
	Link.js
	A simple link ADT
	
	Revision History
		Angus Alves, 2014.10.11: Created
		
*/

function Link(name, qualifier){
	if(name!==undefined)this.name=name;
	else this.name=this.callee.name;
	if(qualifier!==undefined)this.qualifier=qualifier;
};
Link.prototype.getname=function(){if(Link.prototype.name!==undefined)return Link.prototype.name;else return null;};
Link.prototype.setname=function(newName){if(newName!==undefined)Link.prototype.name=newName;};
Link.prototype.getqualifier=function(){if(Link.prototype.qualifier!==undefined)return Link.prototype.qualifier;else return null;};
Link.prototype.setqualifier=function(newQualifier){if(newQualifier!==undefined)Link.prototype.qualifier=newQualifier;};
Link.prototype.getPointOne=function(){if(Link.prototype.pointOne!==undefined)return Link.prototype.pointOne;else return null;};
Link.prototype.setPointOne=function(newPointOne){if(newPointOne!==undefined)Link.prototype.pointOne=newPointOne;};
Link.prototype.getPointTwo=function(){if(Link.prototype.pointTwo!==undefined)return Link.prototype.pointTwo;else return null;};
Link.prototype.setPointTwo=function(newpointTwo){if(newPointTwo!==undefined)Link.prototype.pointTwo=newPointTwo;};
module.exports.Link=new Link();


