/*
	Queue.js
	A simple queue ADT
	
	Revision History
		Angus Alves, 2014.06.06: Created
		
*/

function Queue(){
	// Properties
	this.data = [];
	this.size = 0;
	// Get queue information methods
	// Return string representation of queue data
	this.toString = function(){
						var dataString = "";
						for(var i=0;i<List.size;i++){
							if(typeof List.data[i].toString() != "undefined"){
								dataString += List.data[i].toString()+"\n";
							}else{
								dataString += List.data[i]+"\n";
							}
						}
						return dataString;
					};	
	// Return size of queue					
	this.getSize = function(){return this.size;};	
	// Return boolean reflecting if queue is empty
	this.isEmpty = function(){
						if(this.size=0){
							return true;
						}
						return false;
					};
	// Return element at front of queue
	this.front = function(){return this.data[0];};
	// Return element at back of queue
	this.back = function(){return this.data[this.size-1];};
	// Modify queue methods
	// Add element to end of queue
	this.enqueue = function(element){this.data[this.size++] = element;};
	// Remove element from front of queue
	this.dequeue = function(){
						this.size--;
						return this.data.shift();
					};
	// Remove all elements from queue
	this.clear = function(){
					delete this.data;
					this.data = [];
					this.size = 0;					
				};
}