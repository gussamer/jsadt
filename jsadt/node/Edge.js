/*
	Edge.js
	A simple edge ADT for a graph ADT
	
	Revision History
		Angus Alves, 2014.06.12: Created
		
*/
function Edge(name, vertexOne, vertexTwo, size){
	this.name = name;
	this.vertexOne = vertexOne;
	this.vertexTwo = vertexTwo;
	this.size = size;
};
	this.getVertexOne = function(){return this.vertexOne;};
	this.setVertexOne = function(newVertexOne){this.vertexOne = newVertexOne;};
	this.getVertexTwo = function(){return this.vertexTwo;};
	this.setVertexTwo = function(newVertexTwo){this.vertexTwo = newVertexTwo;};
	this.getSize = function(){return this.size;};
	this.setSize = function(newSize){this.size = newSize;};
module.exports.Edge=new Edge();