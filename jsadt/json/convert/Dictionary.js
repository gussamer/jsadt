/*
	Dictionary.js
	A simple dictionary ADT
	
	Revision History
		Angus Alves, 2014.06.09: Created
		
*/
var Dictionary={
	// Properties
	data : new Array(),
	size : 0,
	// Accessor methods
	// Return string representation of dictionary data
	toString : function(){
						var dataString = "";
						for(var key in Object.keys(data)){
							if(typeof data[key].toString()!="undefined"){
								dataString += key+": "+data[key].toString()+"\n";
							}else if(typeof data[i].name!="undefined"){
								dataString += data[i].name+"\n";
							}else{
								dataString += data[i]+"\n";
							}
						}
					},
	// Return element stored at passed key
	find : function(key){return data[key];},
	// Return size of dictionary	
	getSize : function(){return size;},
	// Return JSON formatted string of dictionary
	toJSON : function(){return JSON.stringify(data);},	
	// Modifier methods
	// Add element to dictionary
	add : function(key, element){data[key]=element; size++;},
	// Remove element from dictionary 
	remove : function(key){delete data[key]; size--;},
	// Clear all elements from dictionary
	clear : function(){
					for(var key in Object.keys(data)){
						delete data[key];
					}
				},
};
module.exports.Dictionary=new Dictionary();