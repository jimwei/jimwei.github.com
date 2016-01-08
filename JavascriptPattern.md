### 1. constructor pattern
 * var obj = {  
    name:"jim",  
    play:function(){  
    //play Chinese chess.
    };  
  }
 * var obj1 = Object.create(Object.prototype);
 * var obj2 = new Object();
 * function Car( model, year, miles ) {  
  this.model = model;
  this.year = year;
  this.miles = miles;
 
  this.toString = function () {  
    return this.model + " has done " + this.miles + " miles";
  }; 
}

### 2. module pattern  
* var masterModule = (  
  //private variable
    var _counter = 0;    
    return{  
      //public vairable  
      counter:_counter,  
      reset:function(){  
        counter = 0;  
      },  
      increment:fucntion(){  
          counter++;  
      },  
      decrement:function(){  
          counter--;  
      }   
  }  
    

)();

// Global module
var myModule = (function () {
 
  // Module object
  var module = {},
    privateVariable = "Hello World";
 
  function privateMethod() {
    // ...
  }
 
  module.publicProperty = "Foobar";
  module.publicMethod = function () {
    console.log( privateVariable );
  };
 
  return module;
 
})();

优点：  
* 更符合oop，代码结构相对更清晰，有清晰的代码范围;  
* 有私有，共有区分  
缺点：  
* 访问私有，共有的东西更繁琐了，  
* 不利于unit test
* 改进型的module pattern  
    
var myRevealingModule = (function () {
 
        var privateVar = "Ben Cherry",
            publicVar = "Hey there!";
 
        function privateFunction() {
            console.log( "Name:" + privateVar );
        }
 
        function publicSetName( strName ) {
            privateVar = strName;
        }
 
        function publicGetName() {
            privateFunction();
        }
 
 
        // Reveal public pointers to
        // private functions and properties
 
        return {
            setName: publicSetName,
            greeting: publicVar,
            getName: publicGetName
        };
 
    })();
### 3. 单件模式  
<font color=red>利用了module pattern实现  </font>
* 定义私有变量 _instance  
* 定义私有属性，函数
* 私有init函数
* 在init函数中，根据需求返回可见的属性，函数
* 在返回函数中，根据_instance是否存在来调用init函数，然后返回_instance
