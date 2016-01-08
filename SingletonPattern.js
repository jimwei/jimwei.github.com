// singleton
var mySingleton = (function(){
		var instance ;
		function ABC(){
			this.name = "a";
			this.Play= function(){
				//do some thing
			}
		}

		var _staitc ={
			createInstance:function(){
				if(instance === undefined){
					instance = new ABC();
				}	
				return instance;
			}
		}

		return _staitc;
	}
	)();

var instance = mySingleton.createInstance();
console.log(instance.name);
