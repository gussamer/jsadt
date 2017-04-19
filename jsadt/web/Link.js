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
this.getname=function(){if(this.name!==undefined)return this.name;else return null;};
this.setname=function(newName){if(newName!==undefined)this.name=newName;};
this.getqualifier=function(){if(this.qualifier!==undefined)return this.qualifier;else return null;};
this.setqualifier=function(newQualifier){if(newQualifier!==undefined)this.qualifier=newQualifier;};
this.getPointOne=function(){if(this.pointOne!==undefined)return this.pointOne;else return null;};
this.setPointOne=function(newPointOne){if(newPointOne!==undefined)this.pointOne=newPointOne;};
this.getPointTwo=function(){if(this.pointTwo!==undefined)return this.pointTwo;else return null;};
this.setPointTwo=function(newpointTwo){if(newPointTwo!==undefined)this.pointTwo=newPointTwo;};
}


