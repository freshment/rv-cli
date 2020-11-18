
# js语法规范
js是一种灵活多变的脚本语言，因此在多人协作的场景，需要保持代码风格一致，以便于排查问题。
该项目借助eslint约束语法，并针对常见的场景做必要的解释。
根据约束的方式，分为一下两种约束：
- 基于eslint
- 基于约定

## 基于eslint
### 等式比较(==与===)
由于==存在隐式转换，类型不明确常常会引发bug，所以一律使用===作为等式比较。
```javascript
const str = '1'

// bad
const isEquals1 = str == 1 // true

// good
const isEquals2 = str === 1 // false
```

### 声明变量
由于var存在变量提升以及缺少块级作用域，所以一律使用let和const声明变量。
对于全局变量以及不会修改的变量，尽量使用const，防止不小心修改该变量的值，从而引发bug。
```javascript
// bad
console.log(a) // undefined
var a = 10
for(var b = 0; b < a; b++){}
console.log(b) // 10

// good
console.log(c) // c is not defined
let c = 10
for(let d = 0; d < c; d++){}
console.log(d) // undefined

// bad
var name1 = 'jon'

// good
const name2 = 'jon'
```

### 变量赋值
使用解构赋值声明本地变量，好处在于统一关键字的声明和便于拓展。
```javascript
const person = {
  name: 'jon',
  age: 18
}

// bad
const name1 = person.name
const age1 = person.age

// good
const {
  name: name2,
  age: age2
} = person

```

### 字符串
静态字符串一律使用单引号，动态字符串使用反引号（字符串模板）。
```javascript
// bad
const str1 = "jon"

// good
const str2 = 'jon'

// bad
const str3 = 'My name is ' + str1

// good
const str4 = `My name is ${str1}`

```

## 基于约定

### 数组拷贝
数组拷贝使用Array.from较为简洁，更具语义化。
```javascript
const arr = []

// bad
const arr1 = [...arr]

// good
const arr2 = Array.from(arr)
```

### 函数参数
简单类型的参数放在前面，复杂类型的参数放在末尾便于拓展。
```javascript
// bad
const fun1 = ({ name, age }, hobby) => {}

// good
const fun1 = (hobby, { name, age }) => {}
```

不确定的函数参数可使用rest运算符(...)代替arguments，因为rest提供的是一个真正的数组，且可用于箭头函数。
```javascript
// bad
function fun1() {
  console.log(Array.isArray(arguments)) // false
}

// good
const fun2 = (...args) => console.log(Array.isArray(args)) // true
```

### 对象的函数属性
声明对象属性与方法时，一律使用简洁的表达方式。
```javascript
// bad
const name1 = 'Jon'
const obj1 = {
  name: name1,
  getName: function() {
    return this.name
  }
}

// good
const name = 'Jon'
const obj2 = {
  name,
  getName(){
    return this.name
  }
}
```

### Object与Map
Object仅用于模拟数据对象，常见的`key: value`场景使用Map可满足更多的迭代方式。
```javascript
// bad
const state1 = {
  0: '禁用'
  1: '启用',
}

// good
const state2 = new Map()
  .set(0, '启用')
  .set(1, '禁用')
```

### Class与Prototype
一律使用Class，Class作为Prototype的语法糖，更具语义且实现简洁，也方便实现继承。

```javascript
// bad
function Person() {
}

Person.prototype.getName = function() {
}

// good
class Person extends Object{
  constructor(){

  }

  getName() {

  }
}

```

