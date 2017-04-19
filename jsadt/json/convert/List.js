/* 
	List.js
	A simple List ADT
	
	Revision History
		Angus Alves, 2014.06.06: Created

*/
// Constructor
function List(){
	// Properties
	this.size = 0;
	this.position = 0;
	this.data = [];	
	// Get list information methods
	// Return string representation of list data
	this.toString = function(){
						var dataString = "";
						for(var i=0;i<this.size;i++){
							if(typeof this.data[i].toString()!="undefined"){
								dataString += this.data[i].toString()+"\n";
							}else if(typeof this.data[i].name!="undefined"){
								dataString += this.data[i].name+"\n";
							}else{
								dataString += this.data[i]+"\n";
							}
						}
						return dataString;
					};	
	// Return size of list
	this.getSize = function(){return this.size;};
	// Return boolean reflecting if list is empty
	this.isEmpty = function(){
						if(this.size=0){
							return true;
						}
						return false;
					};
	// Return current position of list
	this.currentPosition = function(){return this.position;};
	// Return the element at current position
	this.getCurrentElement = function(){return this.data[this.position];};
	// Return boolean indication of element's inclusion in list
	this.contains = function(element){
						var found = this.find(element);
						if(found>-1){
							return true;
						}
						return false;
					};
	// Return zero indexed location of passed element
	this.find = function(element){
					for(var i=0;i<this.size;i++){
						if(this.data[i]==element){
							return i;
						}
					}
					return -1;
				};
	// Modify list methods
	// Inserts element into list at passed position
	// Return boolean indication of success
	this.insertAt = function(element, atPosition){
						if(atPosition>=0&&atPosition<=this.size){
							this.data.splice(atPosition, 0, element);
							this.size++;
							return true;
						}
						return false;
					};
	// Inserts element into list after passed element
	// Return boolean indication of success
	this.insertAfter = function(element, afterElement){
							var atPosition = this.find(afterElement);
							if(atPosition>-1){
								this.data.splice(atPosition, 0, element);
								this.size++;
								return true;
							}
							return false;
						};
	// Add element to end of list
	this.append = function(element){this.data[this.size++] = element;};
	// Remove element from list
	// Return boolean indication of success
	this.remove = function(element){
						var removePosition = this.find(element);
						if(removePosition>-1){
							this.data.splice(removePosition,1);
							this.size--;
							return true;
						}
						return false;
					};
	// Remove all elements from list
	this.clear = function(){
					delete this.data;
					this.data = [];
					this.size = 0;
					this.position = 0;
				};
	// Move through list methods
	// Moves current position to passed index
	this.moveToPosition = function(index){
							if(index>=0&&index<this.Size){
								this.Location = index;
							}
						};
	// Moves current position one forward if possible
	this.next = function(){
					if((this.position+1)<this.size){
						this.position++;
					}
				};
	// Moves current position one back if possible
	this.previous = function(){
						if(this.position>0){
							this.position--;
						}
					};
	// Moves current position to first element
	this.first = function(){this.position = 0;};
	// Moves current position to last element
	this.last = function last(){this.position = this.size-1;};	
}





