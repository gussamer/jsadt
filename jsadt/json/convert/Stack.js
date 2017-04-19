/*
	Stack.js
	A simple stack ADT
	
	Revision History
		Angus Alves, 2014.06.06: Created
		
*/
function Stack(){
	//Properties
	this.data = [];
	this.size = 0;
	//Methods
	// Return string representation of stack data
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
	// Return the stack size
	this.getSize = function(){return this.size;};
	// Return boolean reflecting if stack is empty
	this.isEmpty = function(){
						if(this.size=0){
							return true;
						}
						return false;
					};
	// Adds element to size of stack
	this.push = function(element){this.data[this.size++] = element;};
	// Return and remove the size element
	this.pop = function(){return this.data[--this.size];};
	// Return the size element without removing it
	this.peek = function(){return this.data[this.size-1];};
	// Clears the stack
	this.clear = function(){this.size = 0;};
}








