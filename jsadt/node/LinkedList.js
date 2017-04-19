/*
	LinkedList.js
	a simple linked list adt

	Revision History
		Angus Alves, 28.10.2014: Created

*/
var linkjs = require('./Link.js');
function LinkedList(){
	this.prototype = linkjs.Link;
	this.links=[];
}

module.exports.LinkedList=new LinkedList();