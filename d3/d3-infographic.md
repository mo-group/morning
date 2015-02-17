### D3.js 資料視覺化 Infographic

到目前為止，真的跟 jQuery 相差不大，甚至提供的 API 少了許多。不過 D3 的重頭戲在於跟資料對應的操作上，如果沒有資料，就不要用 D3 直接用 jQuery 或其他繪圖函式庫就好了。在有資料的情況下，D3 能幫忙省下的時間是相當可觀的。

接下來我們要讓資料跟畫面建立起關係：

#### .data

這個方法可以把資料跟 DOM 繫結在一起：

```javascript
targets.data([ 1, 2, 3, 4, 5 ])
```

不過只是這樣還是完全沒利用到資料，還需要往下繼續用到匿名函式參數或甚至 `.enter`。

#### .enter

這個方法是整個 D3 最難理解的部分之一，但因為資料個數通常不一定而且會改變，這個進場的方法還是至關重要。

```javascript
d3.select('body').selectAll('div')
    .data([ 1, 2, 3, 4, 5 ])
  .enter().append('div')
    .text('內容資訊')
    // ...
```

乍看之下是無法簡單理解，`.enter` 方法會比較目前選擇器選到的元素個數，然後利用建立暫存元素 (placeholder element) 的方式把它補足到跟 data 個數一樣。

舉例來說，如果我先前 `.selectAll('div')` 一個都沒選到，那 `.enter` 會幫我建立五個 `div` 並加入內容資訊。如果 `.selectAll('div')` 已經選到了三個，那 `.enter` 只會建立二個 `div`，前面三個就不會有內容資訊。這樣看來 `.enter` 負責處理的就是資料進場的方式。

> 這邊的縮排引用官方文件上讓 `.enter` 往左移的排版，有利於思考正在操作的東西是什麼

`.enter` 的相反也有 `.exit` 負責處理比資料多的元素，多出來的可選擇用 `.remove`，或甚至加上動畫讓它消滅。

```javascript
targets.exit()
  .remove()
```

#### 讓匿名函式作為參數

用匿名函式作為設值類方法的參數堪稱 `Data-Driven` 的靈魂，作為參數的函式會接收 data 跟 index 兩個參數：

```javascript
function(data, index) { ... }
```

也就是你可以利用先前用 `.data` 放進來的每一筆資料跟他的順序，來佈置你的畫面。

```javascript
targets.data([ 1, 2, 3, 4, 5 ])
       .enter()
       .style('opacity', function(data, index) {
         return data / 5;
       })
```

這樣就可以對 5 個元素設定 0.2、0.4、0.6、0.8、1.0 的透明度

一次設定 SVG line 的 x1、y1、x2、y2：

```javascript
d3.select('line')
    .attr({
      'x1': function(d, i) { return 0; },
      'y1': function(d, i) { return 0; },
      'x2': function(d, i) { return i * WIDTH; },
      'y2': function(d, i) { return i * HEIGHT; }
    });
```

> 習慣後用縮寫 d, i 當作參數並不降低可讀性，而且是常見的做法 (包括官網)。

#### .each

類似 jQuery 的 `.each`，不過他丟進來的是一筆 data，不是 DOM element，而且順序不同，必須小心混淆。而 D3 則可以用 `this` 取到現在的 DOM element。

```javascript
// D3
targets.each(function(data, index) {
  // ..this 是現在的 DOM element
  d3.select(this)
      .attr('name1', 'value1')
        .attr('name2', 'value2')

   // .. 做任何你想做的
})
```

```javascript
// jQuery
targets.each(function(index, element) {
  // ..傳進來的是 DOM element 而且順序不同
})
```

### 過場轉移 Transition

如果畫面的改變是瞬間完成的，會令人感覺到缺乏順暢與互動感。在這方面 D3 有 `.transition` 這個方法來讓畫面的改變變的平滑。只要再調整樣式前加上 `.transition() `即可：

```javascript
d3.select('body').transition()
    .style('background-color', 'black')
```

這樣背景的顏色就會漸漸的從現在的顏色變為黑色。

#### .duration

設定轉場的時間間隔，設定的時間越久動畫的速度則越慢，單位為毫秒：

```javascript
d3.selectAll('circle').transition()
    .duration(750)
    .attr('r', function(d) { return Math.sqrt(d * scale); })
```

#### .delay

延遲動畫開始的時間，可以很簡單配合匿名函式做出有層次的漸變：

```javascript
d3.selectAll('circle').transition()
    .duration(750)
    .delay(function(d, i) { return i * 10; })
    .attr('r', function(d) { return Math.sqrt(d * scale); })
 ```

每一個圓形會因為順序，各自開始的時間有 10 毫秒的間隔。


### 事件 Event

過場轉移跟事件就是在 Web 上做資訊圖表比靜態的圖表優異的地方，根據使用者滑鼠的移動，網頁可以給予使用者他想關注的資訊並進行互動。例如：對想吸引目光的物件做變色、跳出更詳細的內容等等。

#### 事件監聽器

在 D3，要監聽事件一樣是使用常見的 `.on` 方法，

```javascript
tagets.on('click', function() {
  // ...
})
```

要針對事件做 DOM 的操作，一樣可以沿用之前的方法利用匿名函式的參數。舉例來說，要讓滑鼠經過的元素變色的話：

```javascript
// 假設 data 長這樣
// [
//   {
//      color : '#ffebbb'
//      ...
//   },
//   ...
// ]

tagets.on('mouseover', function(d, i) {
  d3.select(this)
      .style({
        'color': d.color,
        'background-color': 'black'
      })
})
```
可以根據資料更細節的資訊來決定最適合的顏色。

#### 抓滑鼠相對位置

雖然不是事件的一部分，但常在這用到所以一便提及，用 `d3.mouse(node)` 可以抓到滑鼠跟某個文件節點的相對位置。

node 則可用 `.node` 方法拿到：

```javascript
d3.mouse(target.node())
```

有了相對位置又可以加入邏輯進行畫面的調整了。

### 版型 Layout

D3 有一些內建的版型，他的特點是會有一個資料轉換函式，例如圓餅圖有 `d3.layout.pie`，把資料經過函式轉換後再用 `.data` 繫結上去，就會多了一些其他的資料讓你可以畫出對應的版型

```javascript
.data(d3.layout.pie(dataset))
```

接著匿名函式的 data 參數就會多了一些資料。剩餘如何畫出圓餅需要一些 SVG path 的相關知識，這邊就不詳述。

比較有特色的版型還有重力圖 (Force Layout) 等等。

![](https://raw.githubusercontent.com/wiki/mbostock/d3/force.png)

完整的版型清單可以看[這裡](https://github.com/mbostock/d3/wiki/Layouts)。

### 其他功能

- 軸線
- 尺度
- 顏色
- 數學
- 讀取不同檔案格式
- 地理資訊
- 地圖投影

### 各種周邊

D3 提供了繪圖的方法，但並不提供繪圖細節。所以有相當多的開發者會多做一層封裝，讓重用跟模組化變得相對簡單，而目前基於 D3 開發的函式庫大部分都屬於這類，例如下面這些：

- [c3](http://c3js.org/)
- [nvd3](http://nvd3.org/)
- [dc.js](http://dc-js.github.io/dc.js/)
- [dimple](http://dimplejs.org/)

### 備註

> 這篇文章撰寫當下官方最新的穩定版本為 3.5.3

> 如果發現內容有誤，歡迎討論與指正
