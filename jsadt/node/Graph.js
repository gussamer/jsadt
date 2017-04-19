/*
	Graph.js
	A simple graph ADT
	
	Revision History
		Angus Alves, 2014.06.12: Created
		
*/
var Edgejs=require('./Edge.js');
var Vertexjs=require('./Vertex.js');
function Graph(name){
	this.name=name;
};

module.exports.Graph=new Graph();