/* 
	List.js
	A simple List ADT
	
	Revision History
		Angus Alves, 2014.06.06: Created
		Angus Alves, 2014.10.26: converted to nodejs object format

*/
// Module
module.exports = List;
// Constructor
function List(){};
	// Properties
	List.prototype.size = 0;
	List.prototype.size = 0;
	List.prototype.position = 0;
	List.prototype.data = [];	
	// Get list information methods
	// Return string representation of list data
	List.prototype.toString = function(){
						var dataString = "";
						for(var i=0;i<List.prototype.size;i++){
							if(typeof List.prototype.data[i].toString()!="undefined"){
								dataString += List.prototype.data[i].toString()+"\n";
							}else if(typeof List.prototype.data[i].name!="undefined"){
								dataString += List.prototype.data[i].name+"\n";
							}else{
								dataString += List.prototype.data[i]+"\n";
							}
						}
						return dataString;
					};	
	// Return size of list
	List.prototype.getSize = function(){return List.prototype.size;};
	// Return boolean reflecting if list is empty
	List.prototype.isEmpty = function(){
						if(List.prototype.size=0){
							return true;
						}
						return false;
					};
	// Return current position of list
	List.prototype.currentPosition = function(){return List.prototype.position;};
	// Return the element at current position
	List.prototype.getCurrentElement = function(){return List.prototype.data[List.prototype.position];};
	// Return boolean indication of element's inclusion in list
	List.prototype.contains = function(element){
						var found = List.prototype.find(element);
						if(found>-1){
							return true;
						}
						return false;
					};
	// Return zero indexed location of passed element
	List.prototype.find = function(element){
					for(var i=0;i<List.prototype.size;i++){
						if(List.prototype.data[i]==element){
							return i;
						}
					}
					return -1;
				};
	// Modify list methods
	// Inserts element into list at passed position
	// Return boolean indication of success
	List.prototype.insertAt = function(element, atPosition){
						if(atPosition>=0&&atPosition<=List.prototype.size){
							List.prototype.data.splice(atPosition, 0, element);
							List.prototype.size++;
							return true;
						}
						return false;
					};
	// Inserts element into list after passed element
	// Return boolean indication of success
	List.prototype.insertAfter = function(element, afterElement){
							var atPosition = List.prototype.find(afterElement);
							if(atPosition>-1){
								List.prototype.data.splice(atPosition, 0, element);
								List.prototype.size++;
								return true;
							}
							return false;
						};
	// Add element to end of list
	List.prototype.append = function(element){List.prototype.data[List.prototype.size++] = element;};
	// Remove element from list
	// Return boolean indication of success
	List.prototype.remove = function(element){
						var removePosition = List.prototype.find(element);
						if(removePosition>-1){
							List.prototype.data.splice(removePosition,1);
							List.prototype.size--;
							return true;
						}
						return false;
					};
	// Remove all elements from list
	List.prototype.clear = function(){
					delete List.prototype.data;
					List.prototype.data = [];
					List.prototype.size = 0;
					List.prototype.position = 0;
				};
	// Move through list methods
	// Moves current position to passed index
	List.prototype.moveToPosition = function(index){
							if(index>=0&&index<List.prototype.Size){
								List.prototype.Location = index;
							}
						};
	// Moves current position one forward if possible
	List.prototype.next = function(){
					if((List.prototype.position+1)<List.prototype.size){
						List.prototype.position++;
					}
				};
	// Moves current position one back if possible
	List.prototype.previous = function(){
						if(List.prototype.position>0){
							List.prototype.position--;
						}
					};
	// Moves current position to first element
	List.prototype.first = function(){List.prototype.position = 0;};
	// Moves current position to last element
	List.prototype.last = function last(){List.prototype.position = List.prototype.size-1;};