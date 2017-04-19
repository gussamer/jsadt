/*
	Vertex.js
	A simple vertex ADT for a graph ADT
	
	Revision History
		Angus Alves, 2014.06.12: Created
		
*/


function Vertex(name, size){
	this.name = name;
	this.size = size;
};
	Vertex.prototype.edges = [];
	Vertex.prototype.getName = function(){return Vertex.prototype.name;};
	Vertex.prototype.setName = function(newName){Vertex.prototype.name = newName;};
	Vertex.prototype.getSize = function(){return Vertex.prototype.size;};
	Vertex.prototype.setSize = function(newSize){Vertex.prototype.size = newSize;};
module.exports.Vertex=new Vertex();