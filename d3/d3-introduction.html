# D3.js 入門

![](http://2.bp.blogspot.com/-XppRAAsXnX0/UwBNUAWk5yI/AAAAAAAALU0/RqjjDdqgMzU/s1600/d3-js.png =595x260)

>[D3.js](http://d3js.org/) 在 Github 上面的 Star 數跟 [jQuery](https://github.com/jquery/jquery)、[Angular.js](https://github.com/angular/angular.js) 在伯仲之間，雖然解決是不同面向的問題，但在台灣的社群跟討論相對比較稀少。要細數 D3 帶來的功能會花到相當大的篇幅，這篇打算只先簡單帶到幾個面向的介紹和討論。

### 簡介

D3 是 Data-Driven Documents 也就是 3 個 D 的縮寫，字面上的意思是以資料驅動的文件，有些人可能會誤解，以為 D3 只能操作 SVG 其實並不盡然，一般 HTML 的 DOM 也可以用 D3 進行操作。

開發團隊在資訊視覺化已經深耕了十年，也繼承了先前 [Protovis](http://mbostock.github.io/protovis/) 的經驗，D3 可以說是非常的完善，資料繫結、排序、數學、幾何、地理資訊、投影、顏色等等，不少是經過了充分研究跟有論文理論基礎的。

### 命名空間 Namespace

D3 裡面所有的功能都包裝在 d3 命名空間裡面，例如：`d3.select`、`d3.scale.linear`、`d3.event`、`d3.rgb`、`d3.csv` 等等，詳細的內容可以參照 [API 清單](https://github.com/mbostock/d3/wiki/API-Reference)。

這邊值得一提的是，有別於一般常用的 amd、commonjs 或 es6 的 JavaScript 模組，D3 是採用作者自行開發的 [mbostock/smash](https://github.com/mbostock/smash) 建構工具來編譯模組的匯入。

```javascript
import "bar";

function foo() {
  return "foo" + bar();
}
```

整個專案絕大多數的部分皆為一個方法放一個檔案，要查看原始碼非常方便，若對 `d3.color` 有疑問可直接查找 `d3/src/color/color.js`、對 `d3.rgb` 有疑問則是找 `d3/src/color/rgb.js` 即可。

### 選擇器 Selector

操作 DOM 是前端 CSS 和 JavaScript 開發者的第一堂課，也造就了 jQuery 的大紅大紫，D3 包裝了 [W3C Selectors API](http://www.w3.org/TR/selectors-api/) 的 `querySelector` 和 `querySelectorAll` 兩個方法，做成了自己的 `d3.select` 和 `d3.selectAll`，而相關的操作都跟 jQuery 非常接近，也讓熟悉的開發者有快速學會的契機。

這邊簡單的利用一個 `targets` 變數暫存選取結果，有利於後面的範例：

```javascript
var targets = d3.selectAll('div');
```
下面是幾個常用方法：

#### .attr

可以設定 DOM 的 attributes，例如設定 class：

```javascript
targets.attr('class', 'chart')
```

也可以傳入物件一次設定數個屬性

```javascript
d3.select('line')
     .attr({
       'x1': 0,
       'y1': 0,
       'x2': 100,
       'y2': 100
    });
```

#### .style

對圖像的函式庫來說，樣式就是吃飯傢伙，有了 `.style` 這個方法可以操作 css 後，設計師的思考就可以無邊無際的發展來完成創作，例如調整透明度：

```javascript
targets.style('opacity', 0.75)
```

#### .text

做 Tooltip 或是 Lable 等等會常用到的一個方法，跟 jQuery 一樣可以塞字串進去：

```javascript
targets.text('這是詳細的資訊')
```

#### .append

跟 jQuery 的 `.append` 一樣可以把東西插入到元素裡面的最尾端位置：

```javascript
targets.append('p')
```

#### 繼續往下選？

D3 一樣有類似 jQuery 的 `.find` 的方法，支援從選取結果繼續選取，只要重複的使用 `.select` 和 `.selectAll` 這兩個方法就可以了：

```javascript
d3.select('body').selectAll('div').selectAll('.row')
```

