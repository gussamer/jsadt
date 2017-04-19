/*
	SimpleSet.js
	A very simple set ADT
	
	Revision History
		Angus Alves, 2014.06.12: Created
		Angus Alves, 2014.10.26: converted to nodejs object format
		
*/

function SimpleSet(){};
	SimpleSet.prototype.data = [];	
	// Return string representation of set data
	SimpleSet.prototype.toString = function(){
						var dataString = "";
						for(var i=0;i<SimpleSet.prototype.size;i++){
							if(typeof SimpleSet.prototype.data[i].toString()!="undefined"){
								dataString += SimpleSet.prototype.data[i].toString()+"\n";
							}else if(typeof SimpleSet.prototype.data[i].name!="undefined"){
								dataString += SimpleSet.prototype.data[i].name+"\n";
							}else{
								dataString += SimpleSet.prototype.data[i]+"\n";
							}
						}
						return dataString;
					};	
	SimpleSet.prototype.getSize = function(){return SimpleSet.prototype.data.length;};
	SimpleSet.prototype.contains = function(element){
						if(SimpleSet.prototype.data.indexOf(element)>-1){
							return true;
						}else{
							return false;
						}
					};
	SimpleSet.prototype.add = function(element){
					if(SimpleSet.prototype.data.indexOf(element)<0){
						SimpleSet.prototype.data.push(element);
						return true;
					}else{
						return false;
					}
				};
	SimpleSet.prototype.remove = function(element){
						var position = SimpleSet.prototype.data.indexOf(element);
						if(pos>-1){
							SimpleSet.prototype.data.splice(position,1);
							return true;
						}else{
							return false;
						}
					};
module.exports.SimpleSet=new SimpleSet();