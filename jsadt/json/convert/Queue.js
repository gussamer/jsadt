/*
	Queue.prototype.js
	A simple queue ADT
	
	Revision History
		Angus Alves, 2014.06.06: Created
		
*/

function Queue(){};
	// Properties
	Queue.prototype.data = [];
	Queue.prototype.size = 0;
	// Get queue information methods
	// Return string representation of queue data
	Queue.prototype.toString = function(){
						var dataString = "";
						for(var i=0;i<Queue.prototype.size;i++){
							if(typeof Queue.prototype.data[i].toString()!="undefined"){
								dataString += Queue.prototype.data[i].toString()+"\n";
							}else if(typeof Queue.prototype.data[i].name!="undefined"){
								dataString += Queue.prototype.data[i].name+"\n";
							}else{
								dataString += Queue.prototype.data[i]+"\n";
							}
						}
						return dataString;
					};		
	// Return size of queue					
	Queue.prototype.getSize = function(){return Queue.prototype.size;};	
	// Return boolean reflecting if queue is empty
	Queue.prototype.isEmpty = function(){
						if(Queue.prototype.size=0){
							return true;
						}
						return false;
					};
	// Return element at front of queue
	Queue.prototype.front = function(){return Queue.prototype.data[0];};
	// Return element at back of queue
	Queue.prototype.back = function(){return Queue.prototype.data[Queue.prototype.size-1];};
	// Modify queue methods
	// Add element to end of queue
	Queue.prototype.enqueue = function(element){Queue.prototype.data[Queue.prototype.size++] = element;};
	// Remove element from front of queue
	Queue.prototype.dequeue = function(){
						Queue.prototype.size--;
						return Queue.prototype.data.shift();
					};
	// Remove all elements from queue
	Queue.prototype.clear = function(){
					delete Queue.prototype.data;
					Queue.prototype.data = [];
					Queue.prototype.size = 0;					
				};
module.exports.Queue = new Queue();