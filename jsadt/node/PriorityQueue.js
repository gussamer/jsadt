/*
	Queue.js
	A simple queue ADT
	
	Revision History
		Angus Alves, 2014.06.06: Created
		Angus Alves, 2014.10.26: converted to nodejs object format
		
*/

function PriorityQueue(){};
	// Properties
	PriorityQueue.prototype.data = [];
	PriorityQueue.prototype.size = 0;
	// Get queue information methods
	// Return string representation of queue data
	PriorityQueue.prototype.toString = function(){
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
	PriorityQueue.prototype.getSize = function(){return PriorityQueue.prototype.size;};	
	// Return boolean reflecting if queue is empty
	PriorityQueue.prototype.isEmpty = function(){
						if(PriorityQueue.prototype.size=0){
							return true;
						}
						return false;
					};
	// Return element at front of queue
	PriorityQueue.prototype.front = function(){return PriorityQueue.prototype.data[0];};
	// Return element at back of queue
	PriorityQueue.prototype.back = function(){return PriorityQueue.prototype.data[PriorityQueue.prototype.size-1];};
	// Modify queue methods
	// Add element to end of queue
	PriorityQueue.prototype.enqueue = function(element){PriorityQueue.prototype.data[PriorityQueue.prototype.size++] = element;};
	// Remove element from front of queue
	PriorityQueue.prototype.dequeue = function(){
						PriorityQueue.prototype.size--;
						return PriorityQueue.prototype.data.shift();
					};
	// Remove all elements from queue
	PriorityQueue.prototype.clear = function(){
					delete PriorityQueue.prototype.data;
					PriorityQueue.prototype.data = [];
					PriorityQueue.prototype.size = 0;					
				};
module.exports.PriorityQueue=new PriorityQueue();