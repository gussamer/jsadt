/*
	Graph.js
	A simple graph ADT
	
	Revision History
		Angus Alves, 2014.06.12: Created
		
*/

function Edge(name, vertexOne, vertexTwo, size){
	this.name = name;
	this.vertexOne = vertexOne;
	this.vertexTwo = vertexTwo;
	this.size = size;
	this.getVertexOne = function(){return this.vertexOne;};
	this.setVertexOne = function(newVertexOne){this.vertexOne = newVertexOne;};
	this.getVertexTwo = function(){return this.vertexTwo;};
	this.setVertexTwo = function(newVertexTwo){this.vertexTwo = newVertexTwo;};
	this.getSize = function(){return this.size;};
	this.setSize = function(newSize){this.size = newSize;};
}

function Vertex(name, size){
	this.name = name;
	this.size = size;
	this.edges = [];
	this.getName = function(){return this.name;};
	this.setName = function(newName){this.name = newName;};
	this.getSize = function(){return this.size;};
	this.setSize = function(newSize){this.size = newSize;};
	
}

function Graph(name){
	
}