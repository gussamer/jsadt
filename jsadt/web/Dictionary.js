/*
	Dictionary.js
	A simple dictionary ADT
	
	Revision History
		Angus Alves; 2014.06.09: Created
		
*/
function Dictionary(){
	// Properties
	this.data=[];
	this.size=0;
	// Accessor methods
	// Return string representation of dictionary data
	this.toString=function(){
						var dataString = "";
						for(var key in Object.keys(this.data)){
							if(typeof this.data[key].toString()!="undefined"){
								dataString += key+": "+this.data[key].toString()+"\n";
							}else if(typeof this.data[i].name!="undefined"){
								dataString += this.data[i].name+"\n";
							}else{
								dataString += this.data[i]+"\n";
							}
						}
					};
	// Return element stored at passed key
	this.find=function(key){return this.data[key];};
	// Return size of dictionary	
	this.getSize=function(){return this.size;};
	// Return JSON formatted string of dictionary
	this.toJSON=function(){return JSON.stringify(this.data);};	
	// Modifier methods
	// Add element to dictionary
	this.add=function(key, element){this.data[key]=element; this.size++;};
	// Remove element from dictionary 
	this.remove=function(key){delete this.data[key]; size--;};
	// Clear all elements from dictionary
	this.clear=function(){
					for(var key in Object.keys(this.data)){
						delete this.data[key];
					}
				};
}