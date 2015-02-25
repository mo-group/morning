# Learning middleware

express 使用一種叫做 `middleware` 的擴充介面，來把請求跟回應的相關處理與應用程式的核心邏輯分開，類似的手法在 Ruby、Go 等其他程式語言也能看到。

express 的 middleware 是 function，通常接受 `req`、`res`、`next` 三個參數：

```js
function(req, res, next) { //... }
```

要使用它們只要簡單地使用 `app.use`：

```js
app.use(function(req, res, next) { //... });
```

## 尾端控制

#### next

express middleware 的執行順序是依照 `app.use` 呼叫的順序一個一個的往後執行，而要在事件驅動的非同步語言 JavaScript 裡面依序執行是不容易的，所以傳入的第三個參數 next 用來控制往下繼續執行的時機。

例如：

```js
function(req, res, next) {
  //...
  while( ! done) {
    //..
  }
  next();
}
```

#### 中斷傳遞

不要接收 next 參數或是不要呼叫 next：

```js
function(req, res) {
  //..
}
```

如此這個 middleware 後面的 middleware 都不會再執行到。

通常 route 最後的 handler 應該要 response 時，就可以不要繼續傳遞。

## 選擇路徑

想讓 middleware 侷限在特定的 URL 時，可以傳遞兩個參數給 `app.use`，第一個參數是路徑，第二個參數才是 middleware：

```js
app.use('/admin', function(req, res, next) { //... });
```

其他的 URL 不會執行這個 middleware。

## 錯誤處理

```js
function(err, req, res, next) { //... }
```

```js
next(err);
```
