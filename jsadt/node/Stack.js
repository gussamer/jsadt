/*
	Stack.js
	A simple stack ADT
	
	Revision History
		Angus Alves, 2014.06.06: Created
		Angus Alves, 2014.10.26: converted to nodejs object format
		
*/
function Stack(){};
	//Properties
	Stack.prototype.data = [];
	Stack.prototype.size = 0;
	//Methods
	// Return string representation of stack data
	Stack.prototype.toString = function(){
						var dataString = "";
						for(var i=0;i<Stack.prototype.size;i++){
							if(typeof Stack.prototype.data[i].toString()!="undefined"){
								dataString += Stack.prototype.data[i].toString()+"\n";
							}else if(typeof Stack.prototype.data[i].name!="undefined"){
								dataString += Stack.prototype.data[i].name+"\n";
							}else{
								dataString += Stack.prototype.data[i]+"\n";
							}
						}
						return dataString;
					};		
	// Return the stack size
	Stack.prototype.getSize = function(){return Stack.prototype.size;};
	// Return boolean reflecting if stack is empty
	Stack.prototype.isEmpty = function(){
						if(Stack.prototype.size=0){
							return true;
						}
						return false;
					};
	// Adds element to size of stack
	Stack.prototype.push = function(element){Stack.prototype.data[Stack.prototype.size++] = element;};
	// Return and remove the size element
	Stack.prototype.pop = function(){return Stack.prototype.data[--Stack.prototype.size];};
	// Return the size element without removing it
	Stack.prototype.peek = function(){return Stack.prototype.data[Stack.prototype.size-1];};
	// Clears the stack
	Stack.prototype.clear = function(){Stack.prototype.size = 0;};
module.exports.Stack=new Stack();









