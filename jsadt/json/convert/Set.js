/*
	Set.js
	A simple set ADT
	
	Revision History
		Angus Alves, 2014.06.12: Created
		
*/

function Set(){
	this.data = [];	
	// Return string representation of set data
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
	this.getSize = function(){return this.data.length;};
	this.contains = function(element){
						if(this.data.indexOf(element)>-1){
							return true;
						}else{
							return false;
						}
					};
	this.add = function(element){
					if(this.data.indexOf(element)<0){
						this.data.push(element);
						return true;
					}else{
						return false;
					}
				};
	this.remove = function(element){
						var position = this.data.indexOf(element);
						if(pos>-1){
							this.data.splice(position,1);
							return true;
						}else{
							return false;
						}
					};	
	this.union = function(set){
					var returnSet = new Set();
					for(var i=0;i<this.data.length;i++){
						returnSet.add(this.data[i]);
					}
					for(var i=0;i<set.data.length;i++){
						returnSet.add(set.data[i]);
					}
					return returnSet;
				};
	this.intersect = function(set){
						var returnSet = new Set();
						for(var i=0;i<this.data.length;i++){
							if(set.contains(this.data[i])){
								returnSet.add(this.data[i]);
							}
						}
					};
	this.subset = function(set){
					if(this.data.length>set.data.length){
						return false;
					}else{
						for each(var memeber in this.data){
							if(!set.contains(member)){
								return false;
							}
						}
					}
					return true;
				};
	this.difference = function(set){
						var returnSet = new Set();
						for(var i=0;i<this.data.length;i++) {
							if(!set.contains(this.data[i])) {
								returnSet.add(this.data[i]);
							}
						}
						return returnSet;
					};
}