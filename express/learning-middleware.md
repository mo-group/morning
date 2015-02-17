# Learning middleware

express 使用一種叫做 `middleware` 的擴充介面，來把請求跟回應的相關處理跟應用程式的核心邏輯分開，類似的手法在 Ruby、Go 等其他程式語言也能看到。

express 的 middleware 是 function，通常接受 `req`、`res`、`next` 三個參數：

```js
function(req, res, next) { //... }
```

要使用它們只要簡單的使用 `app.use`：

```js
app.use(function(req, res, next) { //... });
```

## 尾端控制

#### next

express 的 middleware 的執行順序是依照 `app.use` 的順序一個一個的往後執行，而要在事件驅動的非同步語言 JavaScript 裡面依序執行是不容易的，所以傳入的第三個參數 next 用來

#### 中斷傳遞

不要接收 next 參數或是不要呼叫 next：

## 選擇路徑


## 錯誤處理

```js
function(err, req, res, next) { //... }
```

```js
next(err);
```
