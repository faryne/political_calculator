javascript:(function(){
  a = {
    10000:      '郝',
    200000:     '馬',
    700000000:  '扁'
  };
  function b (str) {
    var c = parseInt(str, 10);
    var e = 0;
    for (var d in a) {
      if (str.indexOf(a[d]) !== -1) {
        if (e === 0) e = 1;
        e = e * d;
      }
    }
    var f = c * e;
    alert(str + "共值 " + f + " 新台幣");
  };
  var ask = prompt("請輸入要換算的貨幣資料：");
  if (ask === '') {
    alert("不輸入就算了");
    return false;
  }
  b(ask);
})();