/*
	Node.js
	A simple Node ADT
	
	Revision History
		Angus Alves, 2014.10.11: Created
		
*/
function Node(name, qualifier, data){
	this.name = name;
	this.qualifier = qualifier;
	this.links = [];
	this.getName = function(){return this.name;};
	this.setName = function(newName){this.name = newName;};
	this.getQualifier = function(){return this.qualifier;};
	this.setQualifier = function(newQualifier){this.qualifier = newQualifier;};
	this.getData = function(){return this.data};
	this.setData = function(newData){this.data = newData};
	this.addLink = function(newLink){this.links[] = newLink};
	this.findLinkIndexByName = 
		function(nameToFind){
			for(var i=0;i<this.links.length;i++){
				if(this.links[i].getName() === linktoFind.getName()){
					return i;
				}
			}
			return -1;
		};
	this.findLinkByName = 
		function(nameToFind){
			for(var i=0;i<this.links.length;i++){
				if(this.links[i].getName() === linktoFind.getName()){
					return this.links[i];
				}
			}
			return false;
	};
	this.findAllLinkIndexesByName = 
		function(nameToFind){
			var linksFound = [];
			for(var i=0;i<this.links.length;i++){
				if(this.links[i].getName() === linktoFind.getName()){
					linksFound[] = i;
				}
			}
			if(linksFound.length>0) return linksFound;				
			else return -1;
	};
	this.findAllLinksByName = 
		function(nameToFind){
			var linksFound = [];
			for(var i=0;i<this.links.length;i++){
				if(this.links[i].getName() === linktoFind.getName()){
					linksFound[] = i;
				}
			}
			if(linksFound.length>0) return linksFound;				
			else return -1;
	};
}