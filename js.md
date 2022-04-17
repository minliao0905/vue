# js

## 1.js基础

js的this关键字

原型对象：所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法。

- prototype : 可以使用 hasOwnPropery方法 判断某属性是否是该对象的实例属性

typeof

var，let，const

### 1.js闭包

**主要作用：延伸变量的作用范围**

一个函数和对其周围状态（**lexical environment，词法环境**）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是**闭包**（**closure**）。也就是说，**闭包让你可以在一个内层函数中访问到其外层函数的作用域。**在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

```js
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter;}
});
var f = add();
f()
// 即可以访问到 add 函数中的 counter 变量 作用域为closure
```

 **举例：** 会出现报错  **原因：** 内层函数无法访问到外层函数的变量

![image-20220328155111633](web_img/image-20220328155111633.png)

```
var obj2 =  {
  objname:"obj2",
  age:"123",
  text: " ",
  server:function(n){
      if(n<=3){
        text = objname +age + "is ok \n"
      }
      else{
        text =objname +age + " nothing!"
      }
      return text;
  }

}
console.log(obj2.server(1) );

```

**使用闭包**

```
var obj3 = (function(){
  var obgname = "hello obj3";
  var start = 13;
  var total = 0;
  function add( ){
      return  {
          price:function(n){
            if(n<=3){
              total = start;
            }else{
              total = start + (n-3)*5
            }
            return total;
          },
          yd:function(flag){
            return flag ? total + 10 :total;
          }  //拥堵之后的费用
        }
  }
  return add;
})()
// 此时 obj3  相当于 add   obj3() == add()的返回值
console.log(obj3().price(12))    // hello obj312
```

> **闭包的理解**
> 一般简单情况:
> **一个函数a，return其内部的函数b ，被return的函数b，可以实现在a函数外部访问函数a内部的变量。**
> 并且变量只能通过 b函数在外部访问，
> 实现原理:
> 实现了在函数执行完后，其内部的变量不会被销毁，并且能在函数外部访问其内部变量。能够模仿块级作用域
> 在a函数执行完后，其内部的变量不会被销毁，所以容易造成内存泄露。
>
> **简言之，就是一个函数，能够调用其他函数内部的局部变量。**
> **+作用:**
> 保护全局变量不被污染。
> 保护函数中的变量，不被内存回收机制回收
> **关于解决闭包内存泄露问题：**
>
> 在函数内部，结束之后将不需要的变量全部定义为null
>
> 尽量避免变量循环引用和赋值
>
> 

### 2.js类

```
 class Myclass {
//构造方法为constructor
  constructor(name,age) {
    this.classname = name;
    this.age = age;
  }
   info = "123" // 成员变量：
  print(){
    var sp = "sp' something "
    console.log( this.classname + " "+ this.age + " " + this.info  +" " + sp);
  }
}
myclass = new Myclass("lili",32);
myclass.print()   //输出 lili 32 123 sp' something 
// 调用变量 需要使用 this 关键字
```

#### 1.js类的继承 **关键字：extends**

使用类继承创建的类继承另一个类的所有方法

super（） 引用父类

getter 和setter 方法 可以不用括号 ，一般采取对属性直接赋值的方法

#### 2.static 类方法是在类本身上定义的。 您不能在对象上调用 static 方法，只能在对象类上调用。

```
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}
let myCar = new Car("Ford");

// 您可以在 Car 类上调用 'hello()' ：
document.getElementById("demo").innerHTML = Car.hello();

// 但不能在 Car 对象上调用：
// document.getElementById("demo").innerHTML = myCar.hello();
// 此举将引发错误。
```

### 3.ES6的箭头函数

```
var obg = () =>{

}
相当于 
 function obg(){}
使用箭头定义函数  如果不需要多个参数 即可使用（） 代表参数部分
注意：箭头函数没有自己的this 其内部的this绑定到他的外围作用域 指向ducument 或者 对象的外围作用域
1.是表达更加简洁
2.可以简化回调函数

```

**箭头函数的理解:**
最大的特点，没有this指向，this指向来源于外部，一般为全局对象，window对象。
相当于匿名函数，简化了函数定义，没有原型和super

一般适用于，简单的函数表达式，内部没有this引用，没有递归，没有事件引用，解绑定。一般常用于map，fillter方法中

### 4.ES6的解构赋值

从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

如果解构不成功，变量的值就等于undefined，默认值，只有当等号两边的模式相等时，才可以解构

#### 1.数组解构赋值

![image-20220318193338361](web_img/image-20220318193338361-16476032215591.png)

```javascript

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。

let [x = 1] = [undefined];
x // 1

let [x = 1] = [null];
x // null
上面代码中，如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。
```

#### 2.对象的解构赋值

快速从对象中获取数据

![image-20220318193408996](web_img/image-20220318193408996.png)

对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，**变量必须与属性同名**，才能取到正确的值。

```javascript
let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: 'aaa', bar: 'bbb' };
baz // undefined
```

 1.对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

```javascript
 
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
foo // error: foo is not defined

此时 foo为模式， 不是变量 ， baz才是变量、

若foo作为变量赋值 则
let {foo,foo:baz} = obj 
```

2.与数组一样，解构也可以用于嵌套结构的对象。

```js
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p: [x, { y }] } = obj;
x // "Hello"
y // "World"


// 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。

// 报错
let {foo: {bar}} = {baz: 'baz'};
此时foo = undefined
```

注意，对象的解构赋值可以取到继承的属性。

```javascript
const obj1 = {};
const obj2 = { foo: 'bar' };
Object.setPrototypeOf(obj1, obj2);

const { foo } = obj1;
foo // "bar"
上面代码中，对象obj1的原型对象是obj2。foo属性不是obj1自身的属性，而是继承自obj2的属性，解构赋值可以取到这个属性。
```

**注意**

```javascript
1. 正确的写法
let x;
({x} = {x: 1});
否则在定义时，{x}可能会被理解为一个代码块
2.
解构赋值允许等号左边的模式之中，不放置任何变量名
({} = 'abc');
虽然毫无意义，但不会报错
3.由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
first // 1
last // 3
```

#### 3.字符串的解构赋值

```javascript
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```

类似数组的对象都有一个`length`属性，因此还可以对这个属性解构赋值。

```javascript
let {length : len} = 'hello';
len // 5
```

#### 4.数值和布尔值的解构赋值

解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

```javascript
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true
```

上面代码中，数值和布尔值的包装对象都有`toString`属性，因此变量`s`都能取到值。

解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于`undefined`和`null`无法转为对象，所以对它们进行解构赋值，都会报错。

```javascript
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError
```

#### 5.函数的解构赋值

```javascript
function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
```

#### 6.变量解构赋值的用途

**交换变量的值**

```javascript
let x = 1;
let y = 2;

[x, y] = [y, x];
写法简介，语义清晰
```

**函数参数的定义**

解构赋值可以方便地将一组参数与变量名对应起来。

```javascript
// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});
```

**提取 JSON 数据**

解构赋值对提取 JSON 对象中的数据，尤其有用。

```javascript
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]
```

**遍历 Map 结构**

任何部署了 Iterator 接口的对象，都可以用`for...of`循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。

```javascript
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
```

### 5.ES6的模板字符串

```
var str1 = `hello world`;
var str2 = `hello wolrd  ${age} `  
功能：可以直接获取数字，减少了拼接的工作
例如 var str3 = "hello wolrd ${age}"   无法识别数值，并且不能接受换行 
'' 单引号 也是一样，不能识别
```

### 6.ES6的扩展运算符

事件扩展符   --------- 将数组展开。

一般用于在函数调用，数组定义，数组浅拷贝

常用于将数组展开为构造函数的参数，可用于字面量数组和字符串连接
结合在concat方法中使用。
只能应用于可迭代对象。

```
...
var arr = [100,200,300,400];
console.log(arr);
console.log(...arr);
//展开数组
```

也可实现合并数组

![image-20220318200813300](web_img/image-20220318200813300.png)

![image-20220318200830938](web_img/image-20220318200830938.png)

给函数传递参数

``` 
var arr1 = [1,2,3,5,23,234,23,44];
var max = Math.max(arr1)  //error；
var max = Math.mx(...arr1)  // 234;

```

复制对象

<img src="web_img/image-20220318201209629.png" alt="image-20220318201209629" style="zoom:150%;" />

注意：若在对象中存在相同的属性值，要注意，展开书写的顺序问题，可能存在覆盖的问题











### 8.js中数组添加元素的方式

**数组**

```
res.push()
将item添加到arr数组中去
// concat() 合并
arr.concat(item);

//slice 浅拷贝
let res  = arr.slice(0);

//使用扩展运算符
let res = [...arr,item]
```



### 9.ForEach用法

用途：对数组中的每个元素都执行一次提供的函数

forEach方法中的function回调有三个参数：

```
***第一个参数是遍历的数组内容，***
***第二个参数是对应的数组索引，***
***第三个参数是数组本身***
[].forEach(function(value.index,array){
	//code
})



※※※※相同的遍历方法：
for(var item in arr){

}
```

**map和forEach 方法**
map返回一个新数组，foreach默认无返回值 为undefined 也可通过下标，在方法中修改原数组。

### fillter方法

不在原数组上修改，返回一个新数组。
用于过滤数组，返回满足过滤条件的数组。
使用:
arr.fillter（callbackfn（currentvalue，index，arr））
当前元素的值，下标，原数组
arr.fillter((num)=>{
return num>5
})

我的文件助手 2022/4/6 10:41:11

#### 可迭代对象

Array，map，set 为iterable类型

for of
for in

相较于foreach，for of 可以正确响应break，continue，return 语句。

我的文件助手 2022/4/6 10:41:33
for item of
for index in

### 10.浅拷贝和深拷贝

`是否指向同一个地址，当A改变时，B也会随之改变 就是浅拷贝。`

- 对于基本数据类型，数据保存在栈内存中

- 引用数据类型，名字存在栈内存，值保存在堆内存中，栈内存会提供一个引用的地址指向堆内存中的值

- 当进行浅拷贝时，复制的是引用地址，并非堆中的值  即：a= b

  ```
  浅拷贝的方法
  1.简单赋值：a= b;
  
  2.Object.assign方法
  var obj = {
      a: 1,
      b: 2
  }
  var obj1 = Object.assign(obj);
  obj1.a = 3;
  console.log(obj.a) // 3
  ```

  #### **深拷贝的方法**
  
  **1.JSON对象**
  function deepClone2(obj) {
    var _obj = JSON.stringify(obj),
      objClone = JSON.parse(_obj);
    return objClone;
  }
  //缺点： 无法实现对对象中方法的深拷贝，会显示为undefined
  
  
  
  **2.通过jQuery的extend方法实现深拷贝**
  
  var array = [1,2,3,4];
  var newArray = $.extend(true,[],array); // true为深拷贝，false为浅拷贝
  
  **jQuery 中$.extend**
  **jQuery.extend() 函数用于将一个或多个对象的内容合并到目标对象。**
  
  $.extend( [deep ], target, object1 [, objectN ] )
  
  deep 可选，Boolean类型 指示是否深度合并对象，默认为false。如果该值为true
  
  target Object类型 目标对象 
  
  
  
  **3.lodash函数库实现深拷贝**
  
  引入相关的库 ----》 npm install  --save lodash
  
  import _  from "lodash"    //引入文件
  
  let result = _.cloneDeep(test)  //使用方法
  
  
  
  **4.slice实现对数组的深拷贝**
  var arr1 = ['1','2','3'];
  var arr2 = arr1.slice(0);
  console.log(arr2)  // 1,2,3;
  // 当数组里面的值是基本数据类型，比如String，Number，Boolean时，属于深拷贝
  // 当数组里面的值是引用数据类型，比如Object，Array时，属于浅拷贝
  
  **5.用concat 实现对数组的深拷贝**
  var arr1 = ['1','2','3'];
  var arr2 = arr1.concat();  
  console.log(arr2)  // 1,2,3;
  
  
  
  **6.使用扩展运算符**
  var arr1 = ['1','2','3'];
  var arr2 = [...arr1];
  
  
  
  **7.直接使用 var newObj = Object.create(oldObj)** 
  
  

### 11. Array.map() 方法   和Array.reduce()

**map**() 方法创建一个新[数组](https://so.csdn.net/so/search?q=数组&spm=1001.2101.3001.7020)，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

二、语法

```js
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array 
}[, thisArg])
123
```

参数：
callback 生成新数组元素的函数，使用三个参数：
currentValue callback 数组中正在处理的当前元素。
index可选 callback 数组中正在处理的当前元素的索引。
array可选 callback map 方法被调用的数组。
thisArg可选 执行 callback 函数时使用的this 值。

返回值：
一个新数组，每个元素都是回调函数的结果。

```
//使用方法
 
var nums = [1,2,3,4];
//方式一
nums = nums.map(function(num){
return num * num ;
})
//方式二 箭头函数 
nums = nums.map(v=> v*v )

// 方式三  Math方法 ，求二次方
nums = nums.map(el=> Math.pow(el,2));
```



**reduce()** 

常用方法：数组求和，求乘积，也可用来计算数组中每个元素出现的次数

接受一个函数作为累加器，从数组第一个值开始缩减，直到最后一个值缩减完成。最终计算为一个值

- array.reduce( function (previousValue, currentValue, currentIndex, arr), initialValue) 
  fun: 回调函数	

- previousValue :当前元素的初始值，或者时上一次调用回调返回的值

- currentValue 数组中当前被处理的元素 

- currentIndex：当前我的索引
  arr：当前被调用过的数组
  要注意的是当 initialValue 的值为空的，也就是没有初始值时，函数第一次累加的 total 将会是 arr 的第一个元素，currentindex 的值为 1,

- ```
  简单例子：
  Exp1  累加应用
  
  let arr2 = [1,2,3,4,5,6,7,8,9,10]
  let allsum = arr2.reduce((sum,currentValue)=>{
      return sum += currentValue
  },100)
  console.log(allsum)//155
  
  - Exp2
  
  将string1分割为数组[a,b,c,d]，用reduce拼接到newStr中，得到的结果 0abcd；
  
  let string = 'a-b-c-d'
  let arr = string.split('-')//[a,b,c,d] 
  let newStr = '0'
  
  function getString(all, currentValue, currentIndex, arr) { 
      console.log(all, currentValue, currentIndex)
      return all += currentValue
  }
  let value = arr.reduce(getString,newStr) 
  console.log(value) // 0abcd  
   
  ```

### 12.parseInt的使用-parseInt(string,radix)

用途：用于解析一个字符串并且返回一个整数

```
 radix 参数用于指定使用哪种数字系统，例如基数为 16（十六进制）表示字符串中的数字应从十六进制数解析为十进制数。

如果 radix 参数被省略，JavaScript 假定如下：

如果字符串以 "0x" 开头，则基数为 16（十六进制）
如果字符串以 "0" 开头，则基数为 8（八进制）。此特性已弃用
如果字符串以任何其他值开头，则基数为 10（十进制）
注意：只返回字符串中的第一个数字！

注释：允许前导和尾随空格。

注释：如果第一个字符不能转换为数字，parseInt() 返回 NaN。

注释：旧浏览器将导致 parseInt("010") 为 8，因为旧版本的 ECMAScript（比 ECMAScript 5 旧）当字符串以 "0" 开头时使用八进制基数 (8) 作为默认值。从 ECMAScript 5 开始，默认值为十进制基数 (10)。
```



### 13.判断两者数据完全相等

解题思路
方法一： 利用 === 判断，不进行类型转换，判断完全相等

```
function identity(val1, val2) {``  ``return` `val1 === val2``}
```

方法二： 利用ES6 Object.is()方法进行判断

```
function identity(val1, val2) {``  ``return` `Object.is(val1,val2)``}
```

**注意：== 和 === 的区别**  一个代表相同 一个代表严格相同

```
==   先检查两个操作数的数据类型，如果相同就会进行 === 比较
双等号 == ：
如果两个值类型相同，再进行三个等号(===)的比较

　　（2）如果两个值类型不同，也有可能相等，需根据以下规则进行类型转换在比较：

　　　　1）如果一个是null，一个是undefined，那么相等

　　　　2）如果一个是字符串，一个是数值，把字符串转换成数值之后再进行比较

　　

　　三等号===:

　　（1）如果类型不同，就一定不相等

　　（2）如果两个都是数值，并且是同一个值，那么相等；如果其中至少一个是NaN，那么不相等。（判断一个值是否是NaN，只能使用isNaN( ) 来判断）

　　（3）如果两个都是字符串，每个位置的字符都一样，那么相等，否则不相等。

　　（4）如果两个值都是true，或是false，那么相等

　　（5）如果两个值都引用同一个对象或是函数，那么相等，否则不相等

　　（6）如果两个值都是null，或是undefined，那么相等

 
```

 



### 14.js中数组的loop 循环遍历

#### 1**.for循环**

使用临时变量，将长度缓存起来，避免重复获取数组长度，当数组较大时优化效果才会比较明显。

```
for(j = 0,len=arr.length; j < len; j++) {``  ` `}
```

#### 2.for / in 循环

**遍历对象的属性**

```js
var person = {fname:"Bill", lname:"Gates", age:62}; 

var text = "";
 
for (let x in person) {
    text += person[x];
}
```

#### 3.for/of 循环

**遍历可迭代对象的值：如 数组，字符串 ，映射，节点列表**

可以正确响应break、continue和return语句

```js
const cars = ['BNW' , 'Volvo' ,'Mini'];
let text="";
for(let x of cars){
text += x;
}
```



#### **4.foreach循环**

遍历数组中的每一项，没有返回值，对原数组没有影响，不支持IE

```
//1 没有返回值``arr.forEach((item,index,array)=>{``  ``//执行代码``})``//参数：value数组中的当前项, index当前项的索引, array原始数组；``//数组中有几项，那么传递进去的匿名回调函数就需要执行几次；
```

#### 5.while 循环和do/ while 

do/while 会先要执行一次代码，才判断



#### **6.map循环**

有返回值，可以return出来

map的回调函数中支持return返回值；return的是啥，相当于把数组中的这一项变为啥（并不影响原来的数组，只是相当于把原数组克隆一份，把克隆的这一份的数组中的对应项改变了）；

```
arr.map(``function``(value,index,array){` `　　``//do something` `　　``return` `XXX` `})
var` `ary = [12,23,24,42,1]; ``var` `res = ary.map(``function` `(item,index,ary ) { ``  ``return` `item*10; ``}) ``console.log(res);``//-->[120,230,240,420,10]; 原数组拷贝了一份，并进行了修改``console.log(ary);``//-->[12,23,24,42,1]； 原数组并未发生变化
```

　

#### **7.filter遍历**

不会改变原始数组,返回新数组

```
var` `arr = [`` ``{ id: 1, text: ``'aa'``, done: ``true` `},`` ``{ id: 2, text: ``'bb'``, done: ``false` `}``]``
console.log(arr.filter(item => item.done))
```

转为ES5

```
arr.filter(``function` `(item) {`` ``return` `item.done;``});
var` `arr = [73,84,56, 22,100]``var` `newArr = arr.filter(item => item>80)  ``//得到新数组 [84, 100]``console.log(newArr,arr)
```

　　

#### **8.every遍历**

every()是对数组中的每一项运行给定函数，如果该函数对每一项返回true,则返回true。

```
var` `arr = [ 1, 2, 3, 4, 5, 6 ]; 
console.log( arr.every( 
function ( item, index, array ){ 
return item > 3; })); 
false
```

　

#### **9.some遍历**

some()是对数组中每一项运行指定函数，如果该函数对任一项返回true，则返回true。

```
var  arr = [ 1, 2, 3, 4, 5, 6 ]; 
console.log( arr.some(function( item, index, array ){
return
item > 3; 
})); 
true
```

　　

#### **10.reduce**

`reduce() `方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始缩减，最终为一个值。

```
var total = [0,1,2,3,4].reduce((a, b)=>a + b); //10
```

`reduce`接受一个函数，函数有四个参数，分别是：上一次的值，当前值，当前值的索引，数组

```
[0, 1, 2, 3, 4].reduce(``function``(previousValue, currentValue, index, array){`` ``return` `previousValue + currentValue;``});
```

![img](web_img/1403464-20180713112335425-223204218.png)

`reduce`还有第二个参数，我们可以把这个参数作为第一次调用`callback`时的第一个参数，上面这个例子因为没有第二个参数，所以直接从数组的第二项开始，如果我们给了第二个参数为5，那么结果就是这样的：

```
[0, 1, 2, 3, 4].reduce(``function``(previousValue, currentValue, index, array){`` ``return` `previousValue + currentValue;``},5);
```

　![img](web_img/1403464-20180713112406091-1932166695.png)

第一次调用的`previousValue`的值就用传入的第二个参数代替，

#### **11.reduceRight**

`reduceRight()`方法的功能和`reduce()`功能是一样的，不同的是`reduceRight()`从数组的末尾向前将数组中的数组项做累加。

`reduceRight()`首次调用回调函数`callbackfn`时，`prevValue` 和 `curValue` 可以是两个值之一。如果调用 `reduceRight()` 时提供了 `initialValue` 参数，则 `prevValue` 等于 `initialValue`，`curValue` 等于数组中的最后一个值。如果没有提供 `initialValue` 参数，则 `prevValue` 等于数组最后一个值， `curValue` 等于数组中倒数第二个值。

```
var` `arr = [0,1,2,3,4];
arr.reduceRight(function(preValue,curValue,index,array)
{ return
preValue + curValue;}); // 10
```

回调将会被调用四次，每次调用的参数及返回值如下：

![img](web_img/1403464-20180713112700747-845347728.png)

如果提供一个初始值`initialValue`为`5`:

```
var` `arr = [0,1,2,3,4];` `arr.reduceRight(``function` `(preValue,curValue,index,array) {``  ``return` `preValue + curValue;``}, 5); ``// 15
```

回调将会被调用五次，每次调用的参数及返回的值如下：

![img](web_img/1403464-20180713112743338-1377666579.png)

同样的，可以对一个数组求和，也可以使用`reduceRight()`方法:

```
var` `arr = [1,2,3,4,5,6];` `console.time(``"ruduceRight"``);``Array.prototype.ruduceRightSum = ``function` `(){``  ``for` `(``var` `i = 0; i < 10000; i++) {``    ``return` `this``.reduceRight (``function` `(preValue, curValue) {``      ``return` `preValue + curValue;``    ``});``  ``}``}``arr.ruduceRightSum();``console.log(``'最终的值：'` `+ arr.ruduceSum()); ``// 21``console.timeEnd(``"ruduceRight"``); ``// 5.725ms
```

#### **12.find**

find()方法返回数组中符合测试函数条件的第一个元素。否则返回undefined 

```
var` `stu = [``  ``{``    ``name: ``'张三'``,``    ``gender: ``'男'``,``    ``age: 20``  ``},``  ``{``    ``name: ``'王小毛'``,``    ``gender: ``'男'``,``    ``age: 20``  ``},``  ``{``    ``name: ``'李四'``,``    ``gender: ``'男'``,``    ``age: 20``  ``}``]
function` `getStu(element){``  ``return` `element.name == ``'李四'``}` `stu.find(getStu)``//返回结果为``//{name: "李四", gender: "男", age: 20}
```

ES6方法

```
stu.find((element) => (element.name == ``'李四'``))
```

 

#### **13.findIndex**

对于数组中的每个元素，**findIndex** 方法都会调用一次回调函数（采用升序索引顺序），直到有元素返回 **true**。只要有一个元素返回 true，**findIndex** 立即返回该返回 true 的元素的索引值。如果数组中没有任何元素返回 true，则 **findIndex** 返回 -1。

**findIndex** 不会改变数组对象。

```
[1,2,3].findIndex(``function``(x) { x == 2; });``// Returns an index value of 1.
[1,2,3].findIndex(x => x == 4);``// Returns an index value of -1.
```

#### **14.keys，values，entries**

 ES6 提供三个新的方法 —— entries()，keys()和values() —— 用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是**keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历**

```
for` `(``let` `index of [``'a'``, ``'b'``].keys()) {``console.log(index);``}``// 0``// 1``

for` `(``let` `elem of [``'a'``, ``'b'``].values()) {``console.log(elem);``}``// 'a'``// 'b'``

for` `(``let` `[index, elem] of [``'a'``, ``'b'``].entries()) {``console.log(index, elem);``}``// 0 "a"``// 1 "b"
```



### 15.js数组方法

- **jion**将数组内容组合一个字符串，只接收分隔符并且一般用“，”表示。
- **push和pop**指的是在已知的数组中放入某个元素，他们分别代表着添加和删除的意思。
- **shift和unshift**分别代表着可以让已知的数组开头进行删除和添加的意思。
- **reverse**表达的意思是反转数组项的顺序。
- **slice**从已知的数组中组成新数组。slice可以接收参数1-2个参数。



### 16.js的变量提升

js 变量提升

在js编译执行时，会将所声明的变量，提升到代码的头部。
此为变量提升

函数变量提升

js将采用function 声明的函数，也看作变量名 ，会将整个函数提升到头部


函数内部变量提升
与全局变量相同，在函数内部，将声明的变量提升到函数头部

```

function f1() {
  var num;//函数内部变量声明提前，声明函数内的局部变量num
  console.log(num);//由于函数内的变量num只声明，未赋值，所以只输出undefined
  num = 10;//给函数内部变量num赋值
}
f1();
console.log(num);//此时的



f1();
console.log(c);
console.log(b);
console.log(a);
function f1() {
  var a = b = c = 9;
  console.log(a);
  console.log(b);
  console.log(c);  
解析：

function f1() {
  var a;//局部变量
  a = 9;
  //b、c为隐式全局变量
  b = 9;
  c = 9;
  console.log(a);//9
  console.log(b);//9
  console.log(c);//9
}
f1();
console.log(c);//9
console.log(b);//9
console.log(a);//未定义，报错
```



## 2.js 对象

- js 的五种原始数据类型：string , number boolean null undefined
- js对象通过引用来寻址，并非值
- js 对象属性访问方法： person.age person["age"]   x = "age" person[x]
- 对象访问器 getter 和 setter
- 对象原型 prototype 添加方法和属性 :  Person.prototype.class = "123班" .

#### js的Map对象

**基本的Map() 方法**

| Method    | Description                    |
| :-------- | :----------------------------- |
| new Map() | 创建新的 Map 对象。            |
| set()     | 为 Map 对象中的键设置值。      |
| get()     | 获取 Map 对象中键的值。        |
| entries() | 返回 Map 对象中键/值对的数组。 |
| keys()    | 返回 Map 对象中键的数组。      |
| values()  | 返回 Map 对象中值的数组。      |

| 方法      | 描述                      |
| :-------- | :------------------------ |
| clear()   | 删除 Map 中的所有元素。   |
| delete()  | 删除由键指定的元素。      |
| has()     | 如果键存在，则返回 true。 |
| forEach() | 为每个键/值对调用回调。   |

**Map() 属性**

| Property | Description               |
| -------- | ------------------------- |
| size     | 获取 Map 对象中某键的值。 |





#### this关键字

##### **1.this关键字指向**

在函数中的this对象 指向全局对象

```
call() 函数中
var bar = function(x){
  this.x = x;
  console.log(this.x);
  console.log(this);
}
var x = 3 
bar.call(bar,4)  // 4 function
bar(1)   // 1   window   全局变量 x 变为 1
x = 2
bar2()  // 2 window

```

##### 2.**改变函数内的this指向 -- call() apply()   bind()**

**apply() 接收的参数必须是数组（数组伪对象）**
**apply/call 则会立即执行函数。 bind 返回的是对应函数**

```js
var obj = {
    x: 81,
};
 
var foo = {
    getX: function() {
        return this.x;
    }
}
 
console.log(foo.getX.bind(obj)());  //81
console.log(foo.getX.call(obj));    //81
console.log(foo.getX.apply(obj));   //81


//bind（） 返回一个函数调用
var bar = function(){
console.log(this.x);
}
var foo = {
x:3
}
bar(); // undefined
var func = bar.bind(foo);
func(); // 3
```

##### 3.用途

```js
function fruits(){}
fruits.prototype = {
  color:"red",
  say:function(){
    console.log("My color is " + this.color + "and " + this.type);
  }
}
var apple = new fruits();
apple.say();
// 0. 当我们有个对象 banana 对象 我们不想对它重新定义say方法时。就可以使用
banana = {
  color:"yellow",
  type: "banana"
}
apple.say.apply(banana)
// 此时 this 对象完全指向 banana 


//1 数组
var array1 = [12,"123" ,{name :"hoe"}, -1233];
var array2 = ["dow",234,123];
Array.prototype.push.apply(array1,array2) ;
console.log(array1);  //[12, '123', {…}, -1233, 'dow', 234, 123]
console.log(array2);   //['dow', 234, 123]


//2 获取数组中的最大值 和最小值
var  numbers = [5, 458 , 120 , -215 ];
var maxInNumber1 = Math.max.apply(Math, numbers);   //458
var maxInNumber2 = Math.max(...numbers); //458
console.log(maxInNumber1);
console.log(maxInNumber2);
// number 本身没有 max 方法，但是 Math 有，我们就可以借助 call 或者 apply 使用其方法。

```

 **类（伪）数组使用数组方法** 

```
var` `domNodes = Array.prototype.slice.call(document.getElementsByTagName(``"*"``)); 
```

```
实例：
function log(){
  //arguments将对应于 传递给函数的参数的类数组对象 是所有（非箭头函数中 都可用的局部变量）
  //可以使用 arguments 对象 在函数中 引用函数的参数，第一个参数在索引0  ，arguments 对象 类似于 Array 数组，是一个类数组对象。只存在 length属性和 索引元素，但可以被转换为 一个Array 对象
  //var args = Array.prototype.slice.call(arguments);
  // var args = [].slice.call(arguments);
  // const args = Array.from(arguments);
  // const args = [...arguments];

  var args = Array.prototype.slice.call(arguments);
  args.unshift('(app)');
  console.log.apply(console, args);
};
log([123,"1234","qweqe"]);
```



![image-20220327195428367](web_img/image-20220327195428367.png)

##### 4.定时器的函数中的this对象 为 window

```
var bar = function(){
  console.log(this.x);
}
var x =7;
var bar2 = function(){
  x = 4   // 此时x 为全局变量
  console.log(this) ;   //window
  setTimeout(function() {
    console.log(this + "\n" +  x)   //bar2 x=4
  }.bind(bar2),2000)
}
bar();    //7
bar2();
console.log(this.x);    // x = 4

```

##### 严格模式

- 全局作用域下 函数中的this 指向的值 为 undefined
- 定时器中指向的this 依旧是 window 
- new 实例化 的构造函数 中 this 指向 构造的对象
- 函数方法 中的 参数 不允许重名 ，不允许在非函数代码块中 （类似 if 语句) 定义函数 



#### 正则表达式



## 3.jsAsync

### 1.js回调

回调就是作为参数 传递给另一个函数的函数

```js
function mydispalyer(some){
  console.log("something is happen!");
}
function add(num1,num2 ,myCallback){
	myCallback(num1+num2)
}

// 调用该函数,在将函数作为传递参数时，不需要加括号（）
add(5,5,mydispalyer);
```



### 2.js异步

1. 与其他函数一起执行的函数就称为异步
2. 一般回调函数常和异步一起使用
3. 一般常用于以下几种情况：

**等待文件**

回调函数和异步一起执行

```js
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(this.responseText);  //获取返回文件内容
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myDisplayer);
```

### 3.js的promise对象

Promise.then() 有两个参数，一个是成功时的回调，另一个是失败时的回调。
两者都是可选的，因此您可以为成功或失败添加回调。

```
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
 
```



### 4.Async (关键字)

**函数前的关键字**

async 使函数返回promise对象

await 使函数等待Promise

```js
 async function getFile(){
    //创建promise 对象
        let mypromise = new Promise(function(myResolve,myReject){
            let req = new XMLHttpRequest();
            req.open('GET',"index_svg.html");
            req.onload = function(){
                if(req.status == 200 ){
                    myResolve(req.response);
                }  else {myResolve("File not Found");}
            };
            req.send();
        });
        document.getElementById("demo").innerHTML = await mypromise;
    }
getFile();
```











## 4.anime.js动画使用

### 1.引用方法

```
安装：
npm install anime.js
bower install anime.js

或者，引入 anime.js文件
在js 中，编写相关代码
```

### 2.基本属性

#### **动画的目标对象** 

选择动画的目标对象的方法，主要有以下几种：

- css选择器
- dom元素/元素序列
- js对象
- 数组

```
//1css选择
targets:'.text1'

//2dom元素/元素序列
var elements = document.querySelectorAll('.dom-node-demo .el');

anime({
  targets: elements,
  translateX: 270
})

//3 targets : 也可以是数组对象
var el = document.querySelector('.mixed-array-demo .el-01');

anime({
  targets: [el, '.mixed-array-demo .el-02', '.mixed-array-demo .el-03'],
  translateX: 250
});
```

#### **相对css的transtroms属性动画**

| VALID PROPERTIES | DEFAULT UNIT |
| ---------------- | ------------ |
| `'translateX'`   | `'px'`       |
| `'translateY'`   | `'px'`       |
| `'translateZ'`   | `'px'`       |
| `'rotate'`       | `'deg'`      |
| `'rotateX'`      | `'deg'`      |
| `'rotateY'`      | `'deg'`      |
| `'rotateZ'`      | `'deg'`      |
| `'scale'`        | `—`          |
| `'scaleX'`       | `—`          |
| `'scaleY'`       | `—`          |
| `'scaleZ'`       | `—`          |
| `'skew'`         | `'deg'`      |
| `'skewX'`        | `'deg'`      |
| `'skewY'`        | `'deg'`      |
| `'perspective'`  | `'px'`       |

#### **动画基础参数**

| 参数              | 默认值                                                       | 取值                                                         |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| delay：延迟       | 0                                                            | number, function (el, index, total)                          |
| duration 持续时间 | 1000                                                         | number, function (el, index, total)                          |
| enddelay 末端延迟 |                                                              |                                                              |
| autoplay 自动播放 | true                                                         | boolean                                                      |
| loop 循环         | false                                                        | number, boolean 可指定循环次数                               |
| direction  方向   | 'normal'                                                     | 'normal' 正常, 'reverse' 相反的方向 返回, 'alternate' 一个来回 |
| easing 时间曲线   | 'easeOutElastic'                                             | console log anime.easings to get the complete functions list |
| elasticity        | 400                                                          | number (higher is stronger)                                  |
| round 数字格式    | false                                                        | number, boolean  将值向上舍入为x 小数                        |
| 特殊属性          | Object                                                       | 使用Object作为值为动画的每个属性定义特定参数。未在Object中指定的其他属性继承自主动画。例子：rotate: {  value: 360,  duration: 1800,  easing: 'easeInOutSine' } |
| function 参数     | function（el, i ,l)当前动画莫表元素，动画目标的索引，动画目标数 (小写’l‘) | delay: function(el, i, l) {     return i * 100;   },   endDelay: function(el, i, l) {     return (l - i) * 100;   } |
| begin             | undefined                                                    | function (animation)                                         |
| update            | undefined                                                    | function (animation)                                         |
| complete          | undefined                                                    | function (animation)                                         |

#### **动画赋值方式**

- 无单位数值  200  === 200 px
- 有单位数值 width: 100%
- 相对数值 value :'+=20px'
- 设置动画初始值： translateX: [100, 250],  // from 100 to 250
- 函数返回参数值：function（el i){    return   50 + (-50 * i);   }

```js
// 对于颜色的赋值处理
    var colorsExamples = anime.timeline({
        endDelay: 1000,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
    })
        .add({ targets: '.color-hex',  background: '#F00' }, 1000)
        .add({ targets: '.color-rgb',  background: 'rgb(105,205,255)' }, 0)
        .add({ targets: '.color-hsl',  background: 'hsl(0,19%,40%)' }, 0)
        .add({ targets: '.color-rgba', background: 'rgba(96,44,44,0.2)' }, 0)
        .add({ targets: '.color-hsla', background: 'hsla(0,11%,26%,0.2)' }, 0)
        .add({ targets: '.b3', translateX: 270 }, 0);

    //函数返回数值
    anime({
        targets:'.b4',
        translateX:function(el,i){
            return 50 * i +  anime.random(100,135);
        },
        scale: function(el, i, l) {
            return [0.1,0.5];
        },
        borderRadius:function(){
            return ['50%', anime.random(10,30)];
        },
        direction:'alternate',
        rotate:function() {
            return anime.random(-360,360);
        },
        loop:true,
        duration:2000
    });
```



#### 关键帧（keyFrames）

**动画关键帧**

动画关键帧是使用keyframes属性中的数组定义的

如果关键帧中没有指定duration(持续时间) ,则每个关键帧的持续时间等于动画总持续时间除以关键帧数。

```
例子：

anime({
  targets: '.animation-keyframes-demo .el',
  keyframes: [
    {translateY: -40},
    {translateX: 250},
    {translateY: 40},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
  loop: true
});
```

属性关键帧

```js
anime({
  targets: '.property-keyframes-demo .el',
  translateX: [
    { value: 250, duration: 1000, delay: 500 },
    { value: 0, duration: 1000, delay: 500 }
  ],
  translateY: [
    { value: -40, duration: 500 },
    { value: 40, duration: 500, delay: 1000 },
    { value: 0, duration: 500, delay: 1000 }
  ],
  scaleX: [
    { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
    { value: 1, duration: 900 },
    { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
    { value: 1, duration: 900 }
  ],
  scaleY: [
    { value: [1.75, 1], duration: 500 },
    { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 450 },
    { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 450 }
  ],
  easing: 'easeOutElastic(1, .8)',
  loop: true
});
```

#### 交错动画（STagger)

交错动画 允许通过跟随和重叠动作为多个元素设置动画

**用法**

properity: anime.stagger();
**例子：**
**1.基础设置**

rotate :anime.stagger(10);

**2.设置交错开始值**：
 delay: anime.stagger(100, {start: 500}) // 延迟从500ms开始，然后每个元素增加100ms。
**3.设置交错开始范围：**
 rotate: anime.stagger([-360, 360]), // 旋转将在-360deg到360deg之间均匀分布在所有元素之间

**4.交错开始位置**

**anime.stagger(value, {from: startingPosition})**

| OPTIONS             | TYPE       | INFO                   |
| ------------------- | ---------- | ---------------------- |
| `'first'` (default) | `'string'` | 从第一个元素开始效果   |
| `'last'`            | `'string'` | 从最后一个元素开始效果 |
| `'center'`          | `'string'` | 从中心开始效果         |
| `index`             | `number`   | 从指定的索引启动效果   |

#### 时间轴（TIMELINE）

时间轴可让你将多个动画同步在一起，

默认，添加到时间轴的每个动画都会在上一个动画结束时开始

**创建时间轴：**

```
var myTimeline = anime.timeline(parameters);
```

**将动画添加到时间轴：**

```
myTimeline.add(parameters,offset)
parameters : object 要添加到时间轴的子时间轴或动画
time offset 偏移量，即动画添加到时间轴的位置，
```

**时间轴偏移量**

```
tl
.add({
  targets: '.offsets-demo .el.square',
  translateX: 250,
}，’偏移量‘)
类型：string ’+=200‘， ’-=200‘ 
	number :1000;
	若number 为0 就是为绝对偏移量 就为0 是相对于第一个开始的动画开始
```

**参数继承**

在时间轴创建时 ，所设置的相关属性，也会一起继承，也可重写

可以在parameters 中设置 targets ， 也可在 add 子属性中设置targets

#### 动画控制

可通过js获取dom 元素 添加点击或者其他的监听事件，执行语句

```js
animation.restart()
animation.pause()
animation.play()
animation.reverse()



 seek 瞬移
 //  1.设置跳转到特定时间（以毫秒为单位）
animation.seek(timeStamp);
 // 2.也可用于在滚动时控制动画。

animation.seek((scrollPercent / 100) * animation.duration);   
 
```

#### SVG

```html

<div class="b"  >
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="background: #7b88b4 ;width:200px;height: 200px">
        <polygon class="polymorph" points="50 50,100 0,150 50,125 100 ,75 100" fill="none" stroke="black"></polygon>
    </svg>
</div>
//  js
<script>anime({
    targets: '.polymorph',
    points: [
        { value: [
                '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
                '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']
        },
        { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
        { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
        { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
    ],
    easing: 'easeOutQuad',
    duration: 2000,
    loop: true
});</script>
```











## 5.SVG可缩放矢量图形

特点：

- 可被非常多的工具读取和修改
- SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强。
- SVG 是可伸缩的
- SVG 图像可在任何的分辨率下被高质量地打印
- SVG 可在图像质量不下降的情况下被放大
- SVG 图像中的文本是可选的，同时也是可搜索的（很适合制作地图）
- SVG 可以与 Java 技术一起运行
- SVG 文件是纯粹的 XML

简单的svg实例：（可直接在html中使用）

<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="red" />
      <circle cx="150" cy="100" r="80" fill="green"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
### 1.网格定位

```html
<svg> 
<rect x="0" y="0" width="100" height="100"/>
</svg>
```

###   2.在html中使用

可以通过以下标签嵌入HTML 文档： <embed>,<object> ,<iframe>

也可通过a标签 链接查看svg

### 3.基本形状

<?xml version="1.0" standalone="no"?>

<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
      <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>
      <line x1="10" x2="50" y1="110" y2="150" stroke="orange" fill="transparent" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>
     <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>
      <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>

**path:路径**

创建线条，曲线，弧形

- Move to    :  M x y  移动画笔，但不画线
-   Line to :   L x y (or l dx dy)  在当前位置和新位置 之间画一条线段
- 绘制水平线和垂直线 ：  H  x （or h dx)   V y  (or  v dy)
- 闭合路径 Z or z
- 

<svg><path d="M10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/></svg>

- 曲线命令

  - 贝塞尔曲线 C x1 y1, x2 y2, x y (or c dx1 dy1, dx2 dy2, dx dy)   分别对应 起点和终点的控制点  ，x y 是曲线的终点

    

  - <svg width="190px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>
      <path d="M70 10 C 70 20, 120 20, 120 10" stroke="black" fill="transparent"/>
      <path d="M130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/>
      <path d="M10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/>
      <path d="M70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/>
      <path d="M130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/>
      <path d="M10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/>
      <path d="M70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent"/>
      <path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/> 		

  - <svg width="190px" height="200px" version = "1.1" xmlns = "http://www.w3.org/2000/svg">
        <path d="M10 80 c 40 10, 65 10,95 80 S 150 150,180 80  c " stroke="black"fill="transparent" ></path>
    </svg>

  - 二次贝塞尔曲线Q x1 y1, x y (or q dx1 dy1, dx dy)

  - <svg width="190px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M10 80 Q 95 10 180 80 T 200 80" stroke="black" fill="transparent"/></svg>

  - 二次贝塞尔曲线 T x y (or t dx dy)  用于延长二次贝塞尔曲线

  - <svg width="190px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
    </svg>





















































## 7.jQuery























## 8.js HTML DOM

### 1.什么是HTML DOM -文档对象模型

HTML DOM 是 HTML 的标准*对象*模型和*编程接口*。它定义了：

- 作为*对象*的 HTML 元素
- 所有 HTML 元素的*属性*
- 访问所有 HTML 元素的*方法*
- 所有 HTML 元素的*事件*

 换言之：HTML DOM 是关于如何获取、更改、添加或删除 HTML 元素的标准 

**对象的 HTML DOM 树：**



![DOM HTML 树](web_img/ct_htmltree.gif)

**js可以改变所有html元素的属性，样式，可删除，可添加，可对html事件作出反应**

### 2.HTML DOM Document 对象

文档对象代表您的网页。

如果您希望访问 HTML 页面中的任何元素，那么您总是从访问 document 对象开始。

下面是一些如何使用 document 对象来访问和操作 HTML 的实例。

**查找 HTML 元素**

| 方法                                    | 描述                                                         |
| :-------------------------------------- | :----------------------------------------------------------- |
| document.getElementById(*id*)           | 通过元素 id 来查找元素，元素id唯一                           |
| document.getElementsByTagName(*name*)   | 通过标签名来查找元素                                         |
| document.getElementsByClassName(*name*) | 通过类名来查找元素，一般通过类名查找元素，元素不唯一 ，所以可能获取的是数组 |

**改变 HTML 元素**

| 方法                                       | 描述                   |
| :----------------------------------------- | :--------------------- |
| element.innerHTML = *new html content*     | 改变元素的 inner HTML  |
| element.attribute = *new value*            | 改变 HTML 元素的属性值 |
| element.setAttribute(*attribute*, *value*) | 改变 HTML 元素的属性值 |
| element.style.property = *new style*       | 改变 HTML 元素的样式   |

**添加和删除元素**

| 方法                              | 描述             |
| :-------------------------------- | :--------------- |
| document.createElement(*element*) | 创建 HTML 元素   |
| document.removeChild(*element*)   | 删除 HTML 元素   |
| document.appendChild(*element*)   | 添加 HTML 元素   |
| document.replaceChild(*element*)  | 替换 HTML 元素   |
| document.write(*text*)            | 写入 HTML 输出流 |

**添加事件处理程序**

| 方法                                                     | 描述                            |
| :------------------------------------------------------- | :------------------------------ |
| document.getElementById(id).onclick = function(){*code*} | 向 onclick 事件添加事件处理程序 |

**查找HTML对象**

在dom 树中 定义存在的对象

通过访问 dom  获取对象的 集合和属性

### 3.window 对象

所有浏览器都支持window 对象，它代表 浏览器的窗口。

所有全局javascript 对象，函数和变量 自动成为 window 对象的成员。

全局变量是 window 对象的属性。

全局函数是 window 对象的方法。

甚至（HTML DOM 的）document 对象也是 window 对象属性：

**获取窗口尺寸**

- window.innerHeight - 浏览器窗口的内高度（以像素计）
- window.innerWidth - 浏览器窗口的内宽度（以像素计）

```
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight; 
```



**window.screen 对象包含用户屏幕的信息。 **

*window.screen* 对象不带 window 前缀也可以写：

属性：

- screen.width     返回以像素计的访问者屏幕宽度。
- screen.height            返回以像素计的访问者屏幕的高度
- screen.availWidth       		可用宽度   属性返回访问者屏幕的宽度
- screen.availHeight             可用高度
- screen.colorDepth     返回用于显示一种颜色的比特数（24 /32)
- screen.pixelDepth          返回屏幕的像素深度  (与上相同)



**window.location 对象可用于获取当前页面地址（URL）并把浏览器重定向到新页面。**

Window Location

*window.location* 对象可不带 window 前缀书写。

一些例子：

- window.location.href 返回当前页面的 href (URL)
- window.location.hostname 返回 web 主机的域名
- window.location.pathname 返回当前页面的路径或文件名
- window.location.protocol 返回使用的 web 协议（http: 或 https:）
- window.location.assign 加载新文档





**JS 弹出框    window.alert警示框  window.confirm确认框  window.prompt提示框 **



**Timing 事件       window 对象允许以指定的时间间隔执行代码。**

这些时间间隔称为定时事件。

通过 JavaScript 使用的有两个关键的方法：

- setTimeout(*function*, *milliseconds*)

  在等待指定的毫秒数后执行函数。

- setInterval(*function*, *milliseconds*)

  等同于 setTimeout()，但持续重复执行该函数。







## 9.js  cookies































## 10.js json

### 1.JSON 值

在 JSON 中，值必须是以下数据类型之一：

- 字符串  (必须用双引号包围)
- 数字   （必须是整数或者浮点数）
- 对象（JSON 对象）
- 数组
- 布尔
- null   对象的值可定义为null

在 JavaScript 中，以上所列均可为值，外加其他有效的 JavaScript 表达式，包括：

- 函数
- 日期
- undefined

### 2.JSON 文件

- JSON 文件的文件类型是 ".json"
- JSON 文本的 MIME 类型是 "application/json"

### 3.JSON数据转换 

- **JSON.parse()**   从web服务器接受数据时，数据是字符串，所以需要将获取数据解析为 js对象 

- **JSON.stringify()** 在向 web 服务器发送数据时，数据必须是字符串 ,--把 JavaScript 对象转换为字符串 .

###  4.来自服务器的 JSON 

您可以使用 AJAX 请求从服务器请求 JSON

只要来自服务器的响应以 JSON 格式编写，您就可以将字符串解析为 JavaScript 对象。

**实例**:使用 XMLHttpRequest 从服务器获取数据：

```js
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.name;
};
xmlhttp.open("GET", "json.txt");
xmlhttp.send();
```

### 5.PHP 文件  

PHP 服务器脚本语言 ，执行 客户端 与 PHP 服务器端的操作

PHP 提供处理 JSON 的内建函数。

通过使用 PHP 函数 json_encode()，PHP 中的对象可转换为 JSON 

```php
<?php
$myObj->name = "Bill Gates";
$myObj->age = 62;
$myObj->city = "Seattle";

$myJSON = json_encode($myObj);

echo $myJSON;
?>
```

















## 11.ajax 前后端交互 

![image-20220318202050551](web_img/image-20220318202050551.png)

![image-20220318202111031](web_img/image-20220318202111031.png)



![image-20220318202303920](web_img/image-20220318202303920.png)

GET 和 POST请求方式的区别



