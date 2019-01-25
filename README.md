# covert-alias
[![npm version](https://img.shields.io/npm/v/covert-alias.svg)](https://www.npmjs.org/package/covert-alias)
[![Build Status](https://travis-ci.org/ziksang/covert-alias.svg?branch=master)](https://travis-ci.org/ziksang/covert-alias)
[![codecov](https://codecov.io/gh/ziksang/covert-alias/branch/master/graph/badge.svg)](https://travis-ci.org/ziksang/covert-alias.svg?branch=master)

### 通过script标签使用
```html
<script src="https://unpkg.com/covert-alias/dist/index.js"></script> 
```

### npm使用
```bash
npm install covert-alias
```

## 什么是covert-alias

**covert-alias**用来简单的进一些数据的转换应用格式。通常前后端联调的时候。后台不会把数据与字段名对应。往往通常需要进行转换。

## 举个例子:

在vue中有一个select框中需要写入的数据通过封装为传入的value展示的为**value**字段， label展示的为**label字段**,
而后台返回的则的是以下情况

> 使用方式

数组
```js
const { cArrayPur } from 'covert-alias'
const array = ['kitty', true]
const value = cArrayPur(array, ['label', 'value'])
console.log(value)
// [ { labe: 'kitty', value: 'kitty' }, { label: true, value: true }]
```

对象数组

```
const { cArray } from 'covert-alias'
const array = [
  { name: 'kitty', id: 1, age: 1 },
  { name: 'peter', id: 2, age: 2 },
  { name: 'ben', id: 3, age: 3 }
]
const value = cArray(array, { label: 'name', value: 'id' }, 'all') 

// 如果传入all则把全本的数据一并合并返回
//const array = [
//  { name: 'kitty', id: 1, age: 1, label: 'kitty', value: 1 },
//  { name: 'peter', id: 2, age: 2, label: 'peter', value: 2 },
//  { name: 'ben', id: 3, age: 3, label: 'ben', value: 3 }
//]

const value = cArray(array, { label: 'name', value: 'id' }) 

// 如果第三个参数不传任何东西则只会返回替换字段后的结果
//const array = [
//  { label: 'kitty', value: 1 },
//  { label: 'peter', value: 2 },
//  { label: 'ben', value: 3 }
//]
```

