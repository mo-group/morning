# Learning node module

JavaScript 的 module 直到 ES6 才支援，所以 JavaScript 非原生的模組非常盛行，其中比較有名的是 `AMD` 跟 `CommonJS`。node 比身使用的就是 `CommonJS` 的模組規範。

## 輸出模組

`module` 跟 `exports` 是兩個模組載入時會丟入環境的變數。

### module

module 除了有 `id`、`filename`、`loaded`、`parent`、`children` 等等屬性，初學最重要的是他的 `exports` 屬性，`module.exports` 的值就會是模組輸出的東西。

下面是一些基本的用法：

#### 輸出數字

```javascript
module.exports = 1;
```

#### 輸出字串

```javascript
module.exports = 'a module';
```

#### 輸出函數

```javascript
module.exports = function() {

};
```

#### 輸出物件

```javascript
module.exports = {
  a: 'test',
  myMethod: function() {

  }
};
```

#### 輸出建構式

```javascript
module.exports = Car;

function Car() {

}
```

### exports

這個變數是整個環節做難理解的一部分，其實 `exports` 就是一個指向 `module.exports` 的參考。也就是說用 exports 可以直接在 module 下面綁上屬性或方法

下面這個範例達到跟上面輸出物件的範例會有一樣效果：

```javascript
exports.a = 'test';

exports.myMethod = function() {

};
```

#### 不要直接 assign 值

千萬不要把任何值直接 assign 到 exports：

```javascript
exports = function() {};
```

這裡需要一點指標跟參考的概念，如果 exports 直接被指定了其他的值，他就失去了對 module.exports 的參考，所以 exports 就失去了意義，也無法繼續把屬性跟方法把到模組上。

下面是官方文件的一個假想實作：

```javascript
function require(...) {
  // ...
  function (module, exports) {
    // Your module code here
    exports = some_func;        // re-assigns exports, exports is no longer
                                // a shortcut, and nothing is exported.
    module.exports = some_func; // makes your module export 0
  } (module, module.exports);
  return module;
}
```

可以想像是在你的模組程式碼前跑了這樣一行：

```javascript
var exports = module.exports;
```

再往下就會知道 module.exports 的參考不見了：

```javascript
exports = function() {};
```


## 載入模組

### 原生模組

### 相對路徑
require

### 快取