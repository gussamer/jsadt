/*
	Node.js
	A simple Node ADT
	
	Revision History
		Angus Alves, 2014.10.11: Created
		Angus Alves, 2014.10.26: converted to nodejs object format
		
*/
function Node(name, qualifier, data){
	if(arguments.length>0&&name!==undefined&&name!=null)this.name=name;else this.name='';
	if(arguments.length>1&&qualifier!==undefined&&qualifier!=null)this.qualifier=qualifier;else this.qualifier='';
	if(arguments.length>2&&data!==undefined&&data!=null)this.data=data;else this.data=null;
};
	Node.prototype.links=[];
	Node.prototype.getName=function(){return Node.prototype.name;};
	Node.prototype.setName=function(newName){Node.prototype.name=newName;};
	Node.prototype.getQualifier=function(){return Node.prototype.qualifier;};
	Node.prototype.setQualifier=function(newQualifier){Node.prototype.qualifier=newQualifier;};
	Node.prototype.getData=function(){return Node.prototype.data};
	Node.prototype.setData=function(newData){Node.prototype.data=newData};
	Node.prototype.addLink=function(newLink){Node.prototype.links.push(newLink);};
	Node.prototype.findLinkIndexByName=
		function(nameToFind){
			for(var i=0;i<Node.prototype.links.length;i++){
				if(Node.prototype.links[i].getName()===linktoFind.getName()){
					return i;
				}
			}
			return -1;
		};
	Node.prototype.findLinkByName=
		function(nameToFind){
			for(var i=0;i<Node.prototype.links.length;i++){
				if(Node.prototype.links[i].getName()===linktoFind.getName()){
					return Node.prototype.links[i];
				}
			}
			return false;
	};
	Node.prototype.findAllLinkIndexesByName=
		function(nameToFind){
			var linksFound=[];
			for(var i=0;i<Node.prototype.links.length;i++){
				if(Node.prototype.links[i].getName()===linktoFind.getName()){
					linksFound.push(i);
				}
			}
			if(linksFound.length>0) return linksFound;				
			else return -1;
	};
	Node.prototype.findAllLinksByName=
		function(nameToFind){
			var linksFound=[];
			for(var i=0;i<Node.prototype.links.length;i++){
				if(Node.prototype.links[i].getName()===linktoFind.getName()){
					linksFound.push(i);
				}
			}
			if(linksFound.length>0) return linksFound;				
			else return -1;
	};
module.exports.Node=new Node();