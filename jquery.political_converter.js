$.fn.p_converter = function (opts)
{
	var currencies = {
		0.12:		"新台幣",
		10000:      "郝",
		200000:     "馬",
		700000000:  "扁"
	};

	var wrapper 			=	'<span class="policy_currency"></span>',		// 要包起來的 ＨＴＭＬ 元素
		pos					=	7, 												// 小數點位數
		others				=	{};												// 其他要使用的貨幣單位

	if (typeof opts !== "undefined")
	{
		if (typeof opts.wrapper !== "undefined")
		{
			wrapper			=	opts.wrapper;
		}
		if (typeof opts.pos !== "undefined" && !isNaN(opts.pos))
		{
			pos 			=	opts.pos;
		}
		if (typeof opts.others !== "undefined" && typeof opts.others == 'object' && opts.others.length > 0)
		{
			others 			=	opts.others;
		}
	}

	currencies				=	$.extend({}, currencies, others);

	var converter 			=	function (num, from_rate, to_rate)
	{
		var rate			=	from_rate / to_rate;
		return round(num * rate, pos);
	};

	var round				=	function (num, pos)
	{
		var size			=	Math.pow(10, pos);
		return Math.round(num * size) / size;
	}

	$(this).each(function(){
		var original 		=	$(this).html(),
			original_number =	original.replace(/[^0-9\.\-]*/gi, ''),
			c_from 			=	$(this).data('from'),
			c_to			=	$(this).data('to'),
			from_exist		=	false,
			to_exist		=	false,
			from_rate		=	{},
			to_rate			=	{};
		// 當找不到貨幣單位時不處理
		if (typeof c_from === "undefined" || typeof c_to === "undefined")
		{
			return;
		}
		for (var i in currencies)
		{
			if (currencies[i] === c_from)
			{
				from_exist	=	true;
				from_rate 	= 	{name: currencies[i], rate: i};
			}
			if (currencies[i] === c_to)
			{
				to_exist	=	true;
				to_rate		=	{name: currencies[i], rate: i};
			}
		}
		if (from_exist === false || to_exist === false)
		{
			return;
		}

		var result 			=	"(約為 "+ converter(original_number, from_rate.rate, to_rate.rate) + " " + to_rate.name + ")";
		$(this).append($(wrapper).append(result));
	})
}