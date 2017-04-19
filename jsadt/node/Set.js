/*
	Set.js
	A simple set ADT
	
	Revision History
		Angus Alves, 2014.06.12: Created
		Angus Alves, 2014.10.26: converted to nodejs object format
		
*/

function Set(){};
	Set.prototype.data = [];	
	// Return string representation of set data
	Set.prototype.toString = function(){
						var dataString = "";
						for(var i=0;i<Set.prototype.size;i++){
							if(typeof Set.prototype.data[i].toString()!="undefined"){
								dataString += Set.prototype.data[i].toString()+"\n";
							}else if(typeof Set.prototype.data[i].name!="undefined"){
								dataString += Set.prototype.data[i].name+"\n";
							}else{
								dataString += Set.prototype.data[i]+"\n";
							}
						}
						return dataString;
					};	
	Set.prototype.getSize = function(){return Set.prototype.data.length;};
	Set.prototype.contains = function(element){
						if(Set.prototype.data.indexOf(element)>-1){
							return true;
						}else{
							return false;
						}
					};
	Set.prototype.add = function(element){
					if(Set.prototype.data.indexOf(element)<0){
						Set.prototype.data.push(element);
						return true;
					}else{
						return false;
					}
				};
	Set.prototype.remove = function(element){
						var position = Set.prototype.data.indexOf(element);
						if(pos>-1){
							Set.prototype.data.splice(position,1);
							return true;
						}else{
							return false;
						}
					};	
	Set.prototype.union = function(set){
					var returnSet = new Set();
					for(var i=0;i<Set.prototype.data.length;i++){
						returnSet.add(Set.prototype.data[i]);
					}
					for(var i=0;i<set.data.length;i++){
						returnSet.add(set.data[i]);
					}
					return returnSet;
				};
	Set.prototype.intersect = function(set){
						var returnSet = new Set();
						for(var i=0;i<Set.prototype.data.length;i++){
							if(set.contains(Set.prototype.data[i])){
								returnSet.add(Set.prototype.data[i]);
							}
						}
					};
	Set.prototype.subset = function(set){
					if(Set.prototype.data.length>set.data.length){
						return false;
					}else{
						for(var memeber in Set.prototype.data){
							if(!set.contains(member)){
								return false;
							}
						}
					}
					return true;
				};
	Set.prototype.difference = function(set){
						var returnSet = new Set();
						for(var i=0;i<Set.prototype.data.length;i++) {
							if(!set.contains(Set.prototype.data[i])) {
								returnSet.add(Set.prototype.data[i]);
							}
						}
						return returnSet;
					};
module.exports.Set=new Set();