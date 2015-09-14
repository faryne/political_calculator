**這是一個無聊耍白癡的 jquery plugin，只是因為台灣的總統選舉快到了，所以才重新復活做成 plugin**

### 使用方法
#### 第一步：引入 js

```html
<script type="text/javascript" src="jquery.political_converter.js"></script>
```

#### 第二步：針對指定元素啟動此 plugin
```html
<!-- 所有要轉換的元素都必須要有 data-from 和 data-to 這兩個屬性-->
<span class="p" data-from="新台幣" data-to="扁">1000</span><br>
<span class="p" data-from="扁" data-to="新台幣">1</span><br>
```
```javascript
<script type="text/javascript">
$('.p').p_converter();
</script>
```

**大功完成**

### 如果你想擴充功能的話，這個 plugin 還提供以下參數使用
```javascript
$(selector).p_converter({
	wrapper: "<span class="highlight"></span>",
	pos: 7,
	others: {
		0.12:   '測試'
	}
});
```
| 參數名稱 | 是否必須 | 預設值 | 說明 |
|----|----|----|----|
| wrapper | 否 | &lt;span class="policy_currency"&gt;&lt;/span&gt; | 用來包裝轉換結果的 html 元素 |
| pos | 否 | 7 | 轉換到小數位第Ｎ位 |
| others | 否 | {} | 如果要新增其他單位的話，請以物件方式在此設定，其格式為換算單位:名稱 |
