
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _Gizra$elm_dictlist$DictList_Compat$second = _elm_lang$core$Tuple$second;
var _Gizra$elm_dictlist$DictList_Compat$first = _elm_lang$core$Tuple$first;
var _Gizra$elm_dictlist$DictList_Compat$customDecoder = F2(
	function (decoder, toResult) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			function (a) {
				var _p0 = toResult(a);
				if (_p0.ctor === 'Ok') {
					return _elm_lang$core$Json_Decode$succeed(_p0._0);
				} else {
					return _elm_lang$core$Json_Decode$fail(_p0._0);
				}
			},
			decoder);
	});
var _Gizra$elm_dictlist$DictList_Compat$maybeAndThen = _elm_lang$core$Maybe$andThen;
var _Gizra$elm_dictlist$DictList_Compat$decodeAndThen = _elm_lang$core$Json_Decode$andThen;

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$list_extra$List_Extra$isPrefixOf = F2(
	function (prefix, xs) {
		var _p0 = {ctor: '_Tuple2', _0: prefix, _1: xs};
		if (_p0._0.ctor === '[]') {
			return true;
		} else {
			if (_p0._1.ctor === '[]') {
				return false;
			} else {
				return _elm_lang$core$Native_Utils.eq(_p0._0._0, _p0._1._0) && A2(_elm_community$list_extra$List_Extra$isPrefixOf, _p0._0._1, _p0._1._1);
			}
		}
	});
var _elm_community$list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$list_extra$List_Extra$selectSplit = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p5 = _p1._1;
		var _p4 = _p1._0;
		return {
			ctor: '::',
			_0: {
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _p4,
				_2: _p5
			},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: _p4, _1: _p3._0},
						_1: _p3._1,
						_2: _p3._2
					};
				},
				_elm_community$list_extra$List_Extra$selectSplit(_p5))
		};
	}
};
var _elm_community$list_extra$List_Extra$select = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _p9, _1: _p10},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple2',
						_0: _p8._0,
						_1: {ctor: '::', _0: _p9, _1: _p8._1}
					};
				},
				_elm_community$list_extra$List_Extra$select(_p10))
		};
	}
};
var _elm_community$list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p11 = list;
		if (_p11.ctor === '::') {
			var _p12 = _p11._0;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: e, _1: _p12},
				_1: {ctor: '::', _0: _p12, _1: _p11._1}
			};
		} else {
			return {ctor: '[]'};
		}
	});
var _elm_community$list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$list_extra$List_Extra$tailsHelp,
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$isInfixOf = F2(
	function (infix, xs) {
		return A2(
			_elm_lang$core$List$any,
			_elm_community$list_extra$List_Extra$isPrefixOf(infix),
			_elm_community$list_extra$List_Extra$tails(xs));
	});
var _elm_community$list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return {
				ctor: '::',
				_0: {ctor: '[]'},
				_1: A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(e),
					acc)
			};
		}),
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$groupWhileTransitively = F2(
	function (cmp, xs_) {
		var _p13 = xs_;
		if (_p13.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p13._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: {
						ctor: '::',
						_0: _p13._0,
						_1: {ctor: '[]'}
					},
					_1: {ctor: '[]'}
				};
			} else {
				var _p15 = _p13._0;
				var _p14 = A2(_elm_community$list_extra$List_Extra$groupWhileTransitively, cmp, _p13._1);
				if (_p14.ctor === '::') {
					return A2(cmp, _p15, _p13._1._0) ? {
						ctor: '::',
						_0: {ctor: '::', _0: _p15, _1: _p14._0},
						_1: _p14._1
					} : {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: _p15,
							_1: {ctor: '[]'}
						},
						_1: _p14
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				var _p16 = m;
				if (_p16.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_p16._0.ctor === '[]') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Native_Utils.eq(e, _p16._0._0) ? _elm_lang$core$Maybe$Just(_p16._0._1) : _elm_lang$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			step,
			_elm_lang$core$Maybe$Just(xs),
			prefix);
	});
var _elm_community$list_extra$List_Extra$dropWhileRight = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? {ctor: '[]'} : {ctor: '::', _0: x, _1: xs};
			}),
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$takeWhileRight = function (p) {
	var step = F2(
		function (x, _p17) {
			var _p18 = _p17;
			var _p19 = _p18._0;
			return (p(x) && _p18._1) ? {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: x, _1: _p19},
				_1: true
			} : {ctor: '_Tuple2', _0: _p19, _1: false};
		});
	return function (_p20) {
		return _elm_lang$core$Tuple$first(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: true
				},
				_p20));
	};
};
var _elm_community$list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying_ = F3(
	function (listOflengths, list, accu) {
		groupsOfVarying_:
		while (true) {
			var _p21 = {ctor: '_Tuple2', _0: listOflengths, _1: list};
			if (((_p21.ctor === '_Tuple2') && (_p21._0.ctor === '::')) && (_p21._1.ctor === '::')) {
				var _p22 = A2(_elm_community$list_extra$List_Extra$splitAt, _p21._0._0, list);
				var head = _p22._0;
				var tail = _p22._1;
				var _v11 = _p21._0._1,
					_v12 = tail,
					_v13 = {ctor: '::', _0: head, _1: accu};
				listOflengths = _v11;
				list = _v12;
				accu = _v13;
				continue groupsOfVarying_;
			} else {
				return _elm_lang$core$List$reverse(accu);
			}
		}
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying = F2(
	function (listOflengths, list) {
		return A3(
			_elm_community$list_extra$List_Extra$groupsOfVarying_,
			listOflengths,
			list,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p23 = f(seed);
		if (_p23.ctor === 'Nothing') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p23._0._0,
				_1: A2(_elm_community$list_extra$List_Extra$unfoldr, f, _p23._0._1)
			};
		}
	});
var _elm_community$list_extra$List_Extra$scanr1 = F2(
	function (f, xs_) {
		var _p24 = xs_;
		if (_p24.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p24._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: _p24._0,
					_1: {ctor: '[]'}
				};
			} else {
				var _p25 = A2(_elm_community$list_extra$List_Extra$scanr1, f, _p24._1);
				if (_p25.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, _p24._0, _p25._0),
						_1: _p25
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanr = F3(
	function (f, acc, xs_) {
		var _p26 = xs_;
		if (_p26.ctor === '[]') {
			return {
				ctor: '::',
				_0: acc,
				_1: {ctor: '[]'}
			};
		} else {
			var _p27 = A3(_elm_community$list_extra$List_Extra$scanr, f, acc, _p26._1);
			if (_p27.ctor === '::') {
				return {
					ctor: '::',
					_0: A2(f, _p26._0, _p27._0),
					_1: _p27
				};
			} else {
				return {ctor: '[]'};
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanl1 = F2(
	function (f, xs_) {
		var _p28 = xs_;
		if (_p28.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p28._0, _p28._1);
		}
	});
var _elm_community$list_extra$List_Extra$indexedFoldr = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p29) {
				var _p30 = _p29;
				var _p31 = _p30._0;
				return {
					ctor: '_Tuple2',
					_0: _p31 - 1,
					_1: A3(func, _p31, x, _p30._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$length(list) - 1,
					_1: acc
				},
				list));
	});
var _elm_community$list_extra$List_Extra$indexedFoldl = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p32) {
				var _p33 = _p32;
				var _p34 = _p33._0;
				return {
					ctor: '_Tuple2',
					_0: _p34 + 1,
					_1: A3(func, _p34, x, _p33._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				step,
				{ctor: '_Tuple2', _0: 0, _1: acc},
				list));
	});
var _elm_community$list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p35 = m;
						if (_p35.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p35._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p36 = m;
						if (_p36.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p36._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$interweaveHelp = F3(
	function (l1, l2, acc) {
		interweaveHelp:
		while (true) {
			var _p37 = {ctor: '_Tuple2', _0: l1, _1: l2};
			_v24_1:
			do {
				if (_p37._0.ctor === '::') {
					if (_p37._1.ctor === '::') {
						var _v25 = _p37._0._1,
							_v26 = _p37._1._1,
							_v27 = A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							{
								ctor: '::',
								_0: _p37._0._0,
								_1: {
									ctor: '::',
									_0: _p37._1._0,
									_1: {ctor: '[]'}
								}
							});
						l1 = _v25;
						l2 = _v26;
						acc = _v27;
						continue interweaveHelp;
					} else {
						break _v24_1;
					}
				} else {
					if (_p37._1.ctor === '[]') {
						break _v24_1;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._1);
					}
				}
			} while(false);
			return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._0);
		}
	});
var _elm_community$list_extra$List_Extra$interweave = F2(
	function (l1, l2) {
		return A3(
			_elm_community$list_extra$List_Extra$interweaveHelp,
			l1,
			l2,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$permutations = function (xs_) {
	var _p38 = xs_;
	if (_p38.ctor === '[]') {
		return {
			ctor: '::',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		};
	} else {
		var f = function (_p39) {
			var _p40 = _p39;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					})(_p40._0),
				_elm_community$list_extra$List_Extra$permutations(_p40._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$list_extra$List_Extra$select(_p38));
	}
};
var _elm_community$list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$list_extra$List_Extra$permutations(xs));
	});
var _elm_community$list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p41 = xs;
	if (_p41.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p42 = _p41._0;
		var f = F2(
			function (ys, r) {
				return {
					ctor: '::',
					_0: ys,
					_1: {
						ctor: '::',
						_0: {ctor: '::', _0: _p42, _1: ys},
						_1: r
					}
				};
			});
		return {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: _p42,
				_1: {ctor: '[]'}
			},
			_1: A3(
				_elm_lang$core$List$foldr,
				f,
				{ctor: '[]'},
				_elm_community$list_extra$List_Extra$subsequencesNonEmpty(_p41._1))
		};
	}
};
var _elm_community$list_extra$List_Extra$subsequences = function (xs) {
	return {
		ctor: '::',
		_0: {ctor: '[]'},
		_1: _elm_community$list_extra$List_Extra$subsequencesNonEmpty(xs)
	};
};
var _elm_community$list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, xs) {
		return A2(
			_elm_lang$core$List$member,
			subseq,
			_elm_community$list_extra$List_Extra$subsequences(xs));
	});
var _elm_community$list_extra$List_Extra$transpose = function (ll) {
	transpose:
	while (true) {
		var _p43 = ll;
		if (_p43.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p43._0.ctor === '[]') {
				var _v32 = _p43._1;
				ll = _v32;
				continue transpose;
			} else {
				var _p44 = _p43._1;
				var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p44);
				var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p44);
				return {
					ctor: '::',
					_0: {ctor: '::', _0: _p43._0._0, _1: heads},
					_1: _elm_community$list_extra$List_Extra$transpose(
						{ctor: '::', _0: _p43._0._1, _1: tails})
				};
			}
		}
	}
};
var _elm_community$list_extra$List_Extra$intercalate = function (xs) {
	return function (_p45) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p45));
	};
};
var _elm_community$list_extra$List_Extra$filterNot = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p46) {
				return !pred(_p46);
			},
			list);
	});
var _elm_community$list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p47 = tail;
			if (_p47.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p47._0);
			}
		}
	});
var _elm_community$list_extra$List_Extra$singleton = function (x) {
	return {
		ctor: '::',
		_0: x,
		_1: {ctor: '[]'}
	};
};
var _elm_community$list_extra$List_Extra$stableSortWith = F2(
	function (pred, list) {
		var predWithIndex = F2(
			function (_p49, _p48) {
				var _p50 = _p49;
				var _p51 = _p48;
				var result = A2(pred, _p50._0, _p51._0);
				var _p52 = result;
				if (_p52.ctor === 'EQ') {
					return A2(_elm_lang$core$Basics$compare, _p50._1, _p51._1);
				} else {
					return result;
				}
			});
		var listWithIndex = A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, a) {
					return {ctor: '_Tuple2', _0: a, _1: i};
				}),
			list);
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(_elm_lang$core$List$sortWith, predWithIndex, listWithIndex));
	});
var _elm_community$list_extra$List_Extra$setAt = F3(
	function (index, value, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p53 = tail;
			if (_p53.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$List$append,
						head,
						{ctor: '::', _0: value, _1: _p53._0}));
			}
		}
	});
var _elm_community$list_extra$List_Extra$remove = F2(
	function (x, xs) {
		var _p54 = xs;
		if (_p54.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p56 = _p54._1;
			var _p55 = _p54._0;
			return _elm_lang$core$Native_Utils.eq(x, _p55) ? _p56 : {
				ctor: '::',
				_0: _p55,
				_1: A2(_elm_community$list_extra$List_Extra$remove, x, _p56)
			};
		}
	});
var _elm_community$list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$list_extra$List_Extra$updateAt = F3(
	function (index, update, list) {
		return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
			index,
			_elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			A3(
				_elm_community$list_extra$List_Extra$updateIfIndex,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(index),
				update,
				list));
	});
var _elm_community$list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$list_extra$List_Extra$findIndices = function (p) {
	return function (_p57) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(
				_elm_lang$core$List$filter,
				function (_p58) {
					var _p59 = _p58;
					return p(_p59._1);
				},
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p57)));
	};
};
var _elm_community$list_extra$List_Extra$findIndex = function (p) {
	return function (_p60) {
		return _elm_lang$core$List$head(
			A2(_elm_community$list_extra$List_Extra$findIndices, p, _p60));
	};
};
var _elm_community$list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p61 = list;
			if (_p61.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p62 = _p61._0;
				if (predicate(_p62)) {
					return _elm_lang$core$Maybe$Just(_p62);
				} else {
					var _v41 = predicate,
						_v42 = _p61._1;
					predicate = _v41;
					list = _v42;
					continue find;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$notMember = function (x) {
	return function (_p63) {
		return !A2(_elm_lang$core$List$member, x, _p63);
	};
};
var _elm_community$list_extra$List_Extra$andThen = _elm_lang$core$List$concatMap;
var _elm_community$list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return {
							ctor: '::',
							_0: A2(f, a, b),
							_1: {ctor: '[]'}
						};
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return {
									ctor: '::',
									_0: A3(f, a, b, c),
									_1: {ctor: '[]'}
								};
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return A2(
									_elm_community$list_extra$List_Extra$andThen,
									function (d) {
										return {
											ctor: '::',
											_0: A4(f, a, b, c, d),
											_1: {ctor: '[]'}
										};
									},
									ld);
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$andMap = F2(
	function (l, fl) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			fl,
			l);
	});
var _elm_community$list_extra$List_Extra$uniqueHelp = F3(
	function (f, existing, remaining) {
		uniqueHelp:
		while (true) {
			var _p64 = remaining;
			if (_p64.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p66 = _p64._1;
				var _p65 = _p64._0;
				var computedFirst = f(_p65);
				if (A2(_elm_lang$core$Set$member, computedFirst, existing)) {
					var _v44 = f,
						_v45 = existing,
						_v46 = _p66;
					f = _v44;
					existing = _v45;
					remaining = _v46;
					continue uniqueHelp;
				} else {
					return {
						ctor: '::',
						_0: _p65,
						_1: A3(
							_elm_community$list_extra$List_Extra$uniqueHelp,
							f,
							A2(_elm_lang$core$Set$insert, computedFirst, existing),
							_p66)
					};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$uniqueBy = F2(
	function (f, list) {
		return A3(_elm_community$list_extra$List_Extra$uniqueHelp, f, _elm_lang$core$Set$empty, list);
	});
var _elm_community$list_extra$List_Extra$allDifferentBy = F2(
	function (f, list) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(list),
			_elm_lang$core$List$length(
				A2(_elm_community$list_extra$List_Extra$uniqueBy, f, list)));
	});
var _elm_community$list_extra$List_Extra$allDifferent = function (list) {
	return A2(_elm_community$list_extra$List_Extra$allDifferentBy, _elm_lang$core$Basics$identity, list);
};
var _elm_community$list_extra$List_Extra$unique = function (list) {
	return A3(_elm_community$list_extra$List_Extra$uniqueHelp, _elm_lang$core$Basics$identity, _elm_lang$core$Set$empty, list);
};
var _elm_community$list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p67 = list;
			if (_p67.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				if (predicate(_p67._0)) {
					var _v48 = predicate,
						_v49 = _p67._1;
					predicate = _v48;
					list = _v49;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				var _p68 = list;
				if (_p68.ctor === '[]') {
					return _elm_lang$core$List$reverse(memo);
				} else {
					var _p69 = _p68._0;
					if (predicate(_p69)) {
						var _v51 = {ctor: '::', _0: _p69, _1: memo},
							_v52 = _p68._1;
						memo = _v51;
						list = _v52;
						continue takeWhileMemo;
					} else {
						return _elm_lang$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$list_extra$List_Extra$break = function (p) {
	return _elm_community$list_extra$List_Extra$span(
		function (_p70) {
			return !p(_p70);
		});
};
var _elm_community$list_extra$List_Extra$groupWhile = F2(
	function (eq, xs_) {
		var _p71 = xs_;
		if (_p71.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p73 = _p71._0;
			var _p72 = A2(
				_elm_community$list_extra$List_Extra$span,
				eq(_p73),
				_p71._1);
			var ys = _p72._0;
			var zs = _p72._1;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: _p73, _1: ys},
				_1: A2(_elm_community$list_extra$List_Extra$groupWhile, eq, zs)
			};
		}
	});
var _elm_community$list_extra$List_Extra$group = _elm_community$list_extra$List_Extra$groupWhile(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p74) {
				var _p75 = _p74;
				var _p76 = _p75._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p76) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p75._0, _1: _p76};
			});
		var _p77 = ls;
		if (_p77.ctor === '::') {
			if (_p77._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p77._0);
			} else {
				var _p78 = _p77._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p78,
								_1: f(_p78)
							},
							_p77._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p79) {
				var _p80 = _p79;
				var _p81 = _p80._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p81) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p80._0, _1: _p81};
			});
		var _p82 = ls;
		if (_p82.ctor === '::') {
			if (_p82._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p82._0);
			} else {
				var _p83 = _p82._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p83,
								_1: f(_p83)
							},
							_p82._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$uncons = function (xs) {
	var _p84 = xs;
	if (_p84.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p84._0, _1: _p84._1});
	}
};
var _elm_community$list_extra$List_Extra$swapAt = F3(
	function (index1, index2, l) {
		swapAt:
		while (true) {
			if (_elm_lang$core$Native_Utils.eq(index1, index2)) {
				return _elm_lang$core$Maybe$Just(l);
			} else {
				if (_elm_lang$core$Native_Utils.cmp(index1, index2) > 0) {
					var _v59 = index2,
						_v60 = index1,
						_v61 = l;
					index1 = _v59;
					index2 = _v60;
					l = _v61;
					continue swapAt;
				} else {
					if (_elm_lang$core$Native_Utils.cmp(index1, 0) < 0) {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						var _p85 = A2(_elm_community$list_extra$List_Extra$splitAt, index1, l);
						var part1 = _p85._0;
						var tail1 = _p85._1;
						var _p86 = A2(_elm_community$list_extra$List_Extra$splitAt, index2 - index1, tail1);
						var head2 = _p86._0;
						var tail2 = _p86._1;
						return A3(
							_elm_lang$core$Maybe$map2,
							F2(
								function (_p88, _p87) {
									var _p89 = _p88;
									var _p90 = _p87;
									return _elm_lang$core$List$concat(
										{
											ctor: '::',
											_0: part1,
											_1: {
												ctor: '::',
												_0: {ctor: '::', _0: _p90._0, _1: _p89._1},
												_1: {
													ctor: '::',
													_0: {ctor: '::', _0: _p89._0, _1: _p90._1},
													_1: {ctor: '[]'}
												}
											}
										});
								}),
							_elm_community$list_extra$List_Extra$uncons(head2),
							_elm_community$list_extra$List_Extra$uncons(tail2));
					}
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p91 = f(x);
		if (_p91.ctor === 'Just') {
			return {
				ctor: '::',
				_0: x,
				_1: A2(_elm_community$list_extra$List_Extra$iterate, f, _p91._0)
			};
		} else {
			return {
				ctor: '::',
				_0: x,
				_1: {ctor: '[]'}
			};
		}
	});
var _elm_community$list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$list_extra$List_Extra_ops = _elm_community$list_extra$List_Extra_ops || {};
_elm_community$list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$list_extra$List_Extra$getAt);
var _elm_community$list_extra$List_Extra$init = function () {
	var maybe = F2(
		function (d, f) {
			return function (_p92) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					d,
					A2(_elm_lang$core$Maybe$map, f, _p92));
			};
		});
	return A2(
		_elm_lang$core$List$foldr,
		function (x) {
			return function (_p93) {
				return _elm_lang$core$Maybe$Just(
					A3(
						maybe,
						{ctor: '[]'},
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							})(x),
						_p93));
			};
		},
		_elm_lang$core$Maybe$Nothing);
}();
var _elm_community$list_extra$List_Extra$last = _elm_community$list_extra$List_Extra$foldl1(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));

var _Gizra$elm_dictlist$DictList$unsafeGet = F2(
	function (key, dict) {
		var _p0 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'DictList',
				{
					start: {line: 950, column: 5},
					end: {line: 955, column: 78}
				},
				_p0)('Internal error: DictList list not in sync with dict');
		}
	});
var _Gizra$elm_dictlist$DictList$toDict = function (_p2) {
	var _p3 = _p2;
	return _p3._0;
};
var _Gizra$elm_dictlist$DictList$keys = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _Gizra$elm_dictlist$DictList$foldr = F3(
	function (func, accum, _p6) {
		var _p7 = _p6;
		var go = F2(
			function (key, acc) {
				var _p8 = A2(_elm_lang$core$Dict$get, key, _p7._0);
				if (_p8.ctor === 'Just') {
					return A3(func, key, _p8._0, acc);
				} else {
					return _elm_lang$core$Native_Utils.crashCase(
						'DictList',
						{
							start: {line: 853, column: 13},
							end: {line: 858, column: 86}
						},
						_p8)('Internal error: DictList list not in sync with dict');
				}
			});
		return A3(_elm_lang$core$List$foldr, go, accum, _p7._1);
	});
var _Gizra$elm_dictlist$DictList$values = function (dictList) {
	return A3(
		_Gizra$elm_dictlist$DictList$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dictList);
};
var _Gizra$elm_dictlist$DictList$toList = function (dict) {
	return A3(
		_Gizra$elm_dictlist$DictList$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _Gizra$elm_dictlist$DictList$foldl = F3(
	function (func, accum, _p10) {
		var _p11 = _p10;
		var go = F2(
			function (key, acc) {
				return A3(
					func,
					key,
					A2(_Gizra$elm_dictlist$DictList$unsafeGet, key, _p11._0),
					acc);
			});
		return A3(_elm_lang$core$List$foldl, go, accum, _p11._1);
	});
var _Gizra$elm_dictlist$DictList$merge = F6(
	function (leftFunc, bothFunc, rightFunc, leftDict, _p12, initialResult) {
		var _p13 = _p12;
		var _p22 = _p13._0;
		var goRight = F3(
			function (remainingRight, rightKey, accumRight) {
				var _p14 = A2(_elm_lang$core$Dict$get, rightKey, remainingRight);
				if (_p14.ctor === 'Just') {
					return A3(rightFunc, rightKey, _p14._0, accumRight);
				} else {
					return accumRight;
				}
			});
		var goLeft = F3(
			function (leftKey, leftValue, _p15) {
				var _p16 = _p15;
				var _p19 = _p16._0;
				var _p18 = _p16._1;
				var _p17 = A2(_elm_lang$core$Dict$get, leftKey, _p22);
				if (_p17.ctor === 'Just') {
					return {
						ctor: '_Tuple2',
						_0: A2(_elm_lang$core$Dict$remove, leftKey, _p19),
						_1: A4(bothFunc, leftKey, leftValue, _p17._0, _p18)
					};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _p19,
						_1: A3(leftFunc, leftKey, leftValue, _p18)
					};
				}
			});
		return function (_p20) {
			var _p21 = _p20;
			return A3(
				_elm_lang$core$List$foldl,
				goRight(_p21._0),
				_p21._1,
				_p13._1);
		}(
			A3(
				_Gizra$elm_dictlist$DictList$foldl,
				goLeft,
				{ctor: '_Tuple2', _0: _p22, _1: initialResult},
				leftDict));
	});
var _Gizra$elm_dictlist$DictList$isEmpty = function (_p23) {
	var _p24 = _p23;
	return _elm_lang$core$List$isEmpty(_p24._1);
};
var _Gizra$elm_dictlist$DictList$size = function (_p25) {
	var _p26 = _p25;
	return _elm_lang$core$Dict$size(_p26._0);
};
var _Gizra$elm_dictlist$DictList$member = F2(
	function (key, _p27) {
		var _p28 = _p27;
		return A2(_elm_lang$core$Dict$member, key, _p28._0);
	});
var _Gizra$elm_dictlist$DictList$get = F2(
	function (key, _p29) {
		var _p30 = _p29;
		return A2(_elm_lang$core$Dict$get, key, _p30._0);
	});
var _Gizra$elm_dictlist$DictList$getAt = F2(
	function (index, _p31) {
		var _p32 = _p31;
		return A2(
			_Gizra$elm_dictlist$DictList_Compat$maybeAndThen,
			function (key) {
				return A2(
					_elm_lang$core$Maybe$map,
					function (value) {
						return {ctor: '_Tuple2', _0: key, _1: value};
					},
					A2(_elm_lang$core$Dict$get, key, _p32._0));
			},
			A2(_elm_community$list_extra$List_Extra$getAt, index, _p32._1));
	});
var _Gizra$elm_dictlist$DictList$getKeyAt = F2(
	function (index, _p33) {
		var _p34 = _p33;
		return A2(_elm_community$list_extra$List_Extra$getAt, index, _p34._1);
	});
var _Gizra$elm_dictlist$DictList$indexOfKey = F2(
	function (key, _p35) {
		var _p36 = _p35;
		return A2(_elm_community$list_extra$List_Extra$elemIndex, key, _p36._1);
	});
var _Gizra$elm_dictlist$DictList$next = F2(
	function (key, dictlist) {
		return A2(
			_Gizra$elm_dictlist$DictList_Compat$maybeAndThen,
			function (index) {
				return A2(_Gizra$elm_dictlist$DictList$getAt, index + 1, dictlist);
			},
			A2(_Gizra$elm_dictlist$DictList$indexOfKey, key, dictlist));
	});
var _Gizra$elm_dictlist$DictList$previous = F2(
	function (key, dictlist) {
		return A2(
			_Gizra$elm_dictlist$DictList_Compat$maybeAndThen,
			function (index) {
				return A2(_Gizra$elm_dictlist$DictList$getAt, index - 1, dictlist);
			},
			A2(_Gizra$elm_dictlist$DictList$indexOfKey, key, dictlist));
	});
var _Gizra$elm_dictlist$DictList$minimum = function (_p37) {
	var _p38 = _p37;
	var go = F3(
		function (_p39, value, acc) {
			var _p40 = acc;
			if (_p40.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Just(value);
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(_elm_lang$core$Basics$min, _p40._0, value));
			}
		});
	return A3(_elm_lang$core$Dict$foldl, go, _elm_lang$core$Maybe$Nothing, _p38._0);
};
var _Gizra$elm_dictlist$DictList$maximum = function (_p41) {
	var _p42 = _p41;
	var go = F3(
		function (_p43, value, acc) {
			var _p44 = acc;
			if (_p44.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Just(value);
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(_elm_lang$core$Basics$max, _p44._0, value));
			}
		});
	return A3(_elm_lang$core$Dict$foldl, go, _elm_lang$core$Maybe$Nothing, _p42._0);
};
var _Gizra$elm_dictlist$DictList$product = function (_p45) {
	var _p46 = _p45;
	return A3(
		_elm_lang$core$Dict$foldl,
		_elm_lang$core$Basics$always(
			F2(
				function (x, y) {
					return x * y;
				})),
		1,
		_p46._0);
};
var _Gizra$elm_dictlist$DictList$sum = function (_p47) {
	var _p48 = _p47;
	return A3(
		_elm_lang$core$Dict$foldl,
		_elm_lang$core$Basics$always(
			F2(
				function (x, y) {
					return x + y;
				})),
		0,
		_p48._0);
};
var _Gizra$elm_dictlist$DictList$any = F2(
	function (func, _p49) {
		var _p50 = _p49;
		var go = function (innerList) {
			go:
			while (true) {
				var _p51 = innerList;
				if (_p51.ctor === '[]') {
					return false;
				} else {
					var _p52 = _p51._0;
					if (A2(
						func,
						_p52,
						A2(_Gizra$elm_dictlist$DictList$unsafeGet, _p52, _p50._0))) {
						return true;
					} else {
						var _v26 = _p51._1;
						innerList = _v26;
						continue go;
					}
				}
			}
		};
		return go(_p50._1);
	});
var _Gizra$elm_dictlist$DictList$all = F2(
	function (func, dictList) {
		return !A2(
			_Gizra$elm_dictlist$DictList$any,
			F2(
				function (key, value) {
					return !A2(func, key, value);
				}),
			dictList);
	});
var _Gizra$elm_dictlist$DictList$length = _Gizra$elm_dictlist$DictList$size;
var _Gizra$elm_dictlist$DictList$head = function (_p53) {
	var _p54 = _p53;
	return A2(
		_Gizra$elm_dictlist$DictList_Compat$maybeAndThen,
		function (key) {
			return A2(
				_elm_lang$core$Maybe$map,
				function (value) {
					return {ctor: '_Tuple2', _0: key, _1: value};
				},
				A2(_elm_lang$core$Dict$get, key, _p54._0));
		},
		_elm_lang$core$List$head(_p54._1));
};
var _Gizra$elm_dictlist$DictList$DictList = F2(
	function (a, b) {
		return {ctor: 'DictList', _0: a, _1: b};
	});
var _Gizra$elm_dictlist$DictList$cons = F3(
	function (key, value, _p55) {
		var _p56 = _p55;
		var _p58 = _p56._1;
		var _p57 = _p56._0;
		var restOfList = A2(_elm_lang$core$Dict$member, key, _p57) ? A2(_elm_community$list_extra$List_Extra$remove, key, _p58) : _p58;
		return A2(
			_Gizra$elm_dictlist$DictList$DictList,
			A3(_elm_lang$core$Dict$insert, key, value, _p57),
			{ctor: '::', _0: key, _1: restOfList});
	});
var _Gizra$elm_dictlist$DictList$append = F2(
	function (t1, t2) {
		var go = F3(
			function (key, value, acc) {
				return A2(_Gizra$elm_dictlist$DictList$member, key, acc) ? acc : A3(_Gizra$elm_dictlist$DictList$cons, key, value, acc);
			});
		return A3(_Gizra$elm_dictlist$DictList$foldr, go, t2, t1);
	});
var _Gizra$elm_dictlist$DictList$union = F2(
	function (t1, t2) {
		return A3(_Gizra$elm_dictlist$DictList$foldr, _Gizra$elm_dictlist$DictList$cons, t2, t1);
	});
var _Gizra$elm_dictlist$DictList$tail = function (_p59) {
	var _p60 = _p59;
	var _p61 = _p60._1;
	if (_p61.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A2(
				_Gizra$elm_dictlist$DictList$DictList,
				A2(_elm_lang$core$Dict$remove, _p61._0, _p60._0),
				_p61._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _Gizra$elm_dictlist$DictList$reverse = function (_p62) {
	var _p63 = _p62;
	return A2(
		_Gizra$elm_dictlist$DictList$DictList,
		_p63._0,
		_elm_lang$core$List$reverse(_p63._1));
};
var _Gizra$elm_dictlist$DictList$take = F2(
	function (n, _p64) {
		var _p65 = _p64;
		var go = function (key) {
			return A2(
				_elm_lang$core$Dict$insert,
				key,
				A2(_Gizra$elm_dictlist$DictList$unsafeGet, key, _p65._0));
		};
		var newList = A2(_elm_lang$core$List$take, n, _p65._1);
		var newDict = A3(_elm_lang$core$List$foldl, go, _elm_lang$core$Dict$empty, newList);
		return A2(_Gizra$elm_dictlist$DictList$DictList, newDict, newList);
	});
var _Gizra$elm_dictlist$DictList$drop = F2(
	function (n, _p66) {
		var _p67 = _p66;
		var go = function (key) {
			return A2(
				_elm_lang$core$Dict$insert,
				key,
				A2(_Gizra$elm_dictlist$DictList$unsafeGet, key, _p67._0));
		};
		var newList = A2(_elm_lang$core$List$drop, n, _p67._1);
		var newDict = A3(_elm_lang$core$List$foldl, go, _elm_lang$core$Dict$empty, newList);
		return A2(_Gizra$elm_dictlist$DictList$DictList, newDict, newList);
	});
var _Gizra$elm_dictlist$DictList$sort = function (dictList) {
	var _p68 = dictList;
	return A2(
		_Gizra$elm_dictlist$DictList$DictList,
		_p68._0,
		A2(
			_elm_lang$core$List$map,
			_Gizra$elm_dictlist$DictList_Compat$first,
			A2(
				_elm_lang$core$List$sortBy,
				_Gizra$elm_dictlist$DictList_Compat$second,
				_Gizra$elm_dictlist$DictList$toList(dictList))));
};
var _Gizra$elm_dictlist$DictList$sortBy = F2(
	function (func, dictList) {
		var _p69 = dictList;
		return A2(
			_Gizra$elm_dictlist$DictList$DictList,
			_p69._0,
			A2(
				_elm_lang$core$List$map,
				_Gizra$elm_dictlist$DictList_Compat$first,
				A2(
					_elm_lang$core$List$sortBy,
					function (_p70) {
						return func(
							_Gizra$elm_dictlist$DictList_Compat$second(_p70));
					},
					_Gizra$elm_dictlist$DictList$toList(dictList))));
	});
var _Gizra$elm_dictlist$DictList$sortWith = F2(
	function (func, dictList) {
		var _p71 = dictList;
		return A2(
			_Gizra$elm_dictlist$DictList$DictList,
			_p71._0,
			A2(
				_elm_lang$core$List$map,
				_Gizra$elm_dictlist$DictList_Compat$first,
				A2(
					_elm_lang$core$List$sortWith,
					F2(
						function (v1, v2) {
							return A2(
								func,
								_Gizra$elm_dictlist$DictList_Compat$second(v1),
								_Gizra$elm_dictlist$DictList_Compat$second(v2));
						}),
					_Gizra$elm_dictlist$DictList$toList(dictList))));
	});
var _Gizra$elm_dictlist$DictList$insertAfter = F4(
	function (afterKey, key, value, _p72) {
		var _p73 = _p72;
		var _p77 = _p73._1;
		var _p76 = _p73._0;
		var newList = function () {
			if (_elm_lang$core$Native_Utils.eq(afterKey, key)) {
				return _p77;
			} else {
				var listWithoutKey = A2(_elm_lang$core$Dict$member, key, _p76) ? A2(_elm_community$list_extra$List_Extra$remove, key, _p77) : _p77;
				var _p74 = A2(_elm_community$list_extra$List_Extra$elemIndex, afterKey, listWithoutKey);
				if (_p74.ctor === 'Just') {
					var _p75 = _p74._0;
					return A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_elm_lang$core$List$take, _p75 + 1, listWithoutKey),
						{
							ctor: '::',
							_0: key,
							_1: A2(_elm_lang$core$List$drop, _p75 + 1, listWithoutKey)
						});
				} else {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						listWithoutKey,
						{
							ctor: '::',
							_0: key,
							_1: {ctor: '[]'}
						});
				}
			}
		}();
		var newDict = A3(_elm_lang$core$Dict$insert, key, value, _p76);
		return A2(_Gizra$elm_dictlist$DictList$DictList, newDict, newList);
	});
var _Gizra$elm_dictlist$DictList$insertBefore = F4(
	function (beforeKey, key, value, _p78) {
		var _p79 = _p78;
		var _p83 = _p79._1;
		var _p82 = _p79._0;
		var newList = function () {
			if (_elm_lang$core$Native_Utils.eq(beforeKey, key)) {
				return _p83;
			} else {
				var listWithoutKey = A2(_elm_lang$core$Dict$member, key, _p82) ? A2(_elm_community$list_extra$List_Extra$remove, key, _p83) : _p83;
				var _p80 = A2(_elm_community$list_extra$List_Extra$elemIndex, beforeKey, listWithoutKey);
				if (_p80.ctor === 'Just') {
					var _p81 = _p80._0;
					return A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_elm_lang$core$List$take, _p81, listWithoutKey),
						{
							ctor: '::',
							_0: key,
							_1: A2(_elm_lang$core$List$drop, _p81, listWithoutKey)
						});
				} else {
					return {ctor: '::', _0: key, _1: listWithoutKey};
				}
			}
		}();
		var newDict = A3(_elm_lang$core$Dict$insert, key, value, _p82);
		return A2(_Gizra$elm_dictlist$DictList$DictList, newDict, newList);
	});
var _Gizra$elm_dictlist$DictList$empty = A2(
	_Gizra$elm_dictlist$DictList$DictList,
	_elm_lang$core$Dict$empty,
	{ctor: '[]'});
var _Gizra$elm_dictlist$DictList$indexedMap = function (func) {
	var go = F3(
		function (key, value, _p84) {
			var _p85 = _p84;
			var _p86 = _p85._0;
			return {
				ctor: '_Tuple2',
				_0: _p86 + 1,
				_1: A2(
					_Gizra$elm_dictlist$DictList$DictList,
					A3(
						_elm_lang$core$Dict$insert,
						key,
						A3(func, _p86, key, value),
						_p85._1._0),
					{ctor: '::', _0: key, _1: _p85._1._1})
			};
		});
	return function (_p87) {
		return _Gizra$elm_dictlist$DictList$reverse(
			_Gizra$elm_dictlist$DictList_Compat$second(
				A3(
					_Gizra$elm_dictlist$DictList$foldl,
					go,
					{ctor: '_Tuple2', _0: 0, _1: _Gizra$elm_dictlist$DictList$empty},
					_p87)));
	};
};
var _Gizra$elm_dictlist$DictList$filterMap = function (func) {
	var go = F3(
		function (key, value, acc) {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				acc,
				A2(
					_elm_lang$core$Maybe$map,
					function (result) {
						return A3(_Gizra$elm_dictlist$DictList$cons, key, result, acc);
					},
					A2(func, key, value)));
		});
	return A2(_Gizra$elm_dictlist$DictList$foldr, go, _Gizra$elm_dictlist$DictList$empty);
};
var _Gizra$elm_dictlist$DictList$concat = function (lists) {
	return A3(_elm_lang$core$List$foldr, _Gizra$elm_dictlist$DictList$append, _Gizra$elm_dictlist$DictList$empty, lists);
};
var _Gizra$elm_dictlist$DictList$insert = F3(
	function (key, value, _p88) {
		var _p89 = _p88;
		var _p91 = _p89._1;
		var _p90 = _p89._0;
		var newList = A2(_elm_lang$core$Dict$member, key, _p90) ? _p91 : A2(
			_elm_lang$core$Basics_ops['++'],
			_p91,
			{
				ctor: '::',
				_0: key,
				_1: {ctor: '[]'}
			});
		var newDict = A3(_elm_lang$core$Dict$insert, key, value, _p90);
		return A2(_Gizra$elm_dictlist$DictList$DictList, newDict, newList);
	});
var _Gizra$elm_dictlist$DictList$decodeWithKeys = F2(
	function (keys, func) {
		var go = F3(
			function (jsonValue, key, accum) {
				var _p92 = {
					ctor: '_Tuple2',
					_0: accum,
					_1: A2(
						_elm_lang$core$Json_Decode$decodeValue,
						func(key),
						jsonValue)
				};
				if (_p92._0.ctor === 'Ok') {
					if (_p92._1.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A3(_Gizra$elm_dictlist$DictList$insert, key, _p92._1._0, _p92._0._0));
					} else {
						return _elm_lang$core$Result$Err(_p92._1._0);
					}
				} else {
					if (_p92._1.ctor === 'Ok') {
						return accum;
					} else {
						return _elm_lang$core$Result$Err(
							A2(
								_elm_lang$core$Basics_ops['++'],
								_p92._0._0,
								A2(_elm_lang$core$Basics_ops['++'], '\n', _p92._1._0)));
					}
				}
			});
		return A2(
			_Gizra$elm_dictlist$DictList_Compat$customDecoder,
			_elm_lang$core$Json_Decode$value,
			function (jsonValue) {
				return A3(
					_elm_lang$core$List$foldl,
					go(jsonValue),
					_elm_lang$core$Result$Ok(_Gizra$elm_dictlist$DictList$empty),
					keys);
			});
	});
var _Gizra$elm_dictlist$DictList$decodeKeysAndValues = F2(
	function (keyDecoder, func) {
		return A2(
			_Gizra$elm_dictlist$DictList_Compat$decodeAndThen,
			function (keys) {
				return A2(_Gizra$elm_dictlist$DictList$decodeWithKeys, keys, func);
			},
			keyDecoder);
	});
var _Gizra$elm_dictlist$DictList$filter = F2(
	function (predicate, dictList) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_Gizra$elm_dictlist$DictList$insert, key, value, dict) : dict;
			});
		return A3(_Gizra$elm_dictlist$DictList$foldl, add, _Gizra$elm_dictlist$DictList$empty, dictList);
	});
var _Gizra$elm_dictlist$DictList$intersect = F2(
	function (t1, t2) {
		return A2(
			_Gizra$elm_dictlist$DictList$filter,
			F2(
				function (k, _p93) {
					return A2(_Gizra$elm_dictlist$DictList$member, k, t2);
				}),
			t1);
	});
var _Gizra$elm_dictlist$DictList$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p94) {
				var _p95 = _p94;
				var _p97 = _p95._1;
				var _p96 = _p95._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_Gizra$elm_dictlist$DictList$insert, key, value, _p96),
					_1: _p97
				} : {
					ctor: '_Tuple2',
					_0: _p96,
					_1: A3(_Gizra$elm_dictlist$DictList$insert, key, value, _p97)
				};
			});
		return A3(
			_Gizra$elm_dictlist$DictList$foldl,
			add,
			{ctor: '_Tuple2', _0: _Gizra$elm_dictlist$DictList$empty, _1: _Gizra$elm_dictlist$DictList$empty},
			dict);
	});
var _Gizra$elm_dictlist$DictList$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p98, dict) {
				var _p99 = _p98;
				return A3(_Gizra$elm_dictlist$DictList$insert, _p99._0, _p99._1, dict);
			}),
		_Gizra$elm_dictlist$DictList$empty,
		assocs);
};
var _Gizra$elm_dictlist$DictList$decodeObject = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_Gizra$elm_dictlist$DictList$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _Gizra$elm_dictlist$DictList$decodeArray = F2(
	function (keyMapper, valueDecoder) {
		return A2(
			_elm_lang$core$Json_Decode$map,
			function (_p100) {
				return _Gizra$elm_dictlist$DictList$fromList(
					A2(
						_elm_lang$core$List$map,
						function (value) {
							return {
								ctor: '_Tuple2',
								_0: keyMapper(value),
								_1: value
							};
						},
						_p100));
			},
			_elm_lang$core$Json_Decode$list(valueDecoder));
	});
var _Gizra$elm_dictlist$DictList$remove = F2(
	function (key, dictList) {
		var _p101 = dictList;
		var _p102 = _p101._0;
		return A2(_elm_lang$core$Dict$member, key, _p102) ? A2(
			_Gizra$elm_dictlist$DictList$DictList,
			A2(_elm_lang$core$Dict$remove, key, _p102),
			A2(_elm_community$list_extra$List_Extra$remove, key, _p101._1)) : dictList;
	});
var _Gizra$elm_dictlist$DictList$update = F3(
	function (key, alter, dictList) {
		var _p103 = alter(
			A2(_Gizra$elm_dictlist$DictList$get, key, dictList));
		if (_p103.ctor === 'Nothing') {
			return A2(_Gizra$elm_dictlist$DictList$remove, key, dictList);
		} else {
			return A3(_Gizra$elm_dictlist$DictList$insert, key, _p103._0, dictList);
		}
	});
var _Gizra$elm_dictlist$DictList$diff = F2(
	function (t1, t2) {
		return A3(
			_Gizra$elm_dictlist$DictList$foldl,
			F3(
				function (k, v, t) {
					return A2(_Gizra$elm_dictlist$DictList$remove, k, t);
				}),
			t1,
			t2);
	});
var _Gizra$elm_dictlist$DictList$singleton = F2(
	function (key, value) {
		return A2(
			_Gizra$elm_dictlist$DictList$DictList,
			A2(_elm_lang$core$Dict$singleton, key, value),
			{
				ctor: '::',
				_0: key,
				_1: {ctor: '[]'}
			});
	});
var _Gizra$elm_dictlist$DictList$map = F2(
	function (func, _p104) {
		var _p105 = _p104;
		return A2(
			_Gizra$elm_dictlist$DictList$DictList,
			A2(_elm_lang$core$Dict$map, func, _p105._0),
			_p105._1);
	});
var _Gizra$elm_dictlist$DictList$fromDict = function (dict) {
	return A2(
		_Gizra$elm_dictlist$DictList$DictList,
		dict,
		_elm_lang$core$Dict$keys(dict));
};

var _Gizra$elm_spa_exmple$Attribute_Model$WorkingRemote = {ctor: 'WorkingRemote'};
var _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr = function (a) {
	return {ctor: 'TvAndMovieGenereAttr', _0: a};
};
var _Gizra$elm_spa_exmple$Attribute_Model$Tattoo = {ctor: 'Tattoo'};
var _Gizra$elm_spa_exmple$Attribute_Model$SportAttr = function (a) {
	return {ctor: 'SportAttr', _0: a};
};
var _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr = function (a) {
	return {ctor: 'PreferedWorkHoursAttr', _0: a};
};
var _Gizra$elm_spa_exmple$Attribute_Model$Pet = {ctor: 'Pet'};
var _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr = function (a) {
	return {ctor: 'NationalityAttr', _0: a};
};
var _Gizra$elm_spa_exmple$Attribute_Model$MusicWhileWorking = {ctor: 'MusicWhileWorking'};
var _Gizra$elm_spa_exmple$Attribute_Model$MusicAttr = function (a) {
	return {ctor: 'MusicAttr', _0: a};
};
var _Gizra$elm_spa_exmple$Attribute_Model$LivedAbroad = {ctor: 'LivedAbroad'};
var _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr = function (a) {
	return {ctor: 'LanguageAttr', _0: a};
};
var _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr = function (a) {
	return {ctor: 'GenderAttr', _0: a};
};
var _Gizra$elm_spa_exmple$Attribute_Model$FoodAttr = function (a) {
	return {ctor: 'FoodAttr', _0: a};
};
var _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr = function (a) {
	return {ctor: 'FamilyAttr', _0: a};
};
var _Gizra$elm_spa_exmple$Attribute_Model$DoingSports = {ctor: 'DoingSports'};
var _Gizra$elm_spa_exmple$Attribute_Model$Married = {ctor: 'Married'};
var _Gizra$elm_spa_exmple$Attribute_Model$Kids = {ctor: 'Kids'};
var _Gizra$elm_spa_exmple$Attribute_Model$Vegan = {ctor: 'Vegan'};
var _Gizra$elm_spa_exmple$Attribute_Model$Vegetarian = {ctor: 'Vegetarian'};
var _Gizra$elm_spa_exmple$Attribute_Model$Pescaterian = {ctor: 'Pescaterian'};
var _Gizra$elm_spa_exmple$Attribute_Model$Paleo = {ctor: 'Paleo'};
var _Gizra$elm_spa_exmple$Attribute_Model$Kosher = {ctor: 'Kosher'};
var _Gizra$elm_spa_exmple$Attribute_Model$Ukrainian = {ctor: 'Ukrainian'};
var _Gizra$elm_spa_exmple$Attribute_Model$Russian = {ctor: 'Russian'};
var _Gizra$elm_spa_exmple$Attribute_Model$French = {ctor: 'French'};
var _Gizra$elm_spa_exmple$Attribute_Model$Spanish = {ctor: 'Spanish'};
var _Gizra$elm_spa_exmple$Attribute_Model$German = {ctor: 'German'};
var _Gizra$elm_spa_exmple$Attribute_Model$Italian = {ctor: 'Italian'};
var _Gizra$elm_spa_exmple$Attribute_Model$Hebrew = {ctor: 'Hebrew'};
var _Gizra$elm_spa_exmple$Attribute_Model$English = {ctor: 'English'};
var _Gizra$elm_spa_exmple$Attribute_Model$Catalonian = {ctor: 'Catalonian'};
var _Gizra$elm_spa_exmple$Attribute_Model$Arabic = {ctor: 'Arabic'};
var _Gizra$elm_spa_exmple$Attribute_Model$Male = {ctor: 'Male'};
var _Gizra$elm_spa_exmple$Attribute_Model$Female = {ctor: 'Female'};
var _Gizra$elm_spa_exmple$Attribute_Model$PlayingInstrument = {ctor: 'PlayingInstrument'};
var _Gizra$elm_spa_exmple$Attribute_Model$Sing = {ctor: 'Sing'};
var _Gizra$elm_spa_exmple$Attribute_Model$USA = {ctor: 'USA'};
var _Gizra$elm_spa_exmple$Attribute_Model$UK = {ctor: 'UK'};
var _Gizra$elm_spa_exmple$Attribute_Model$Spain = {ctor: 'Spain'};
var _Gizra$elm_spa_exmple$Attribute_Model$Israel = {ctor: 'Israel'};
var _Gizra$elm_spa_exmple$Attribute_Model$Canada = {ctor: 'Canada'};
var _Gizra$elm_spa_exmple$Attribute_Model$Austria = {ctor: 'Austria'};
var _Gizra$elm_spa_exmple$Attribute_Model$NightOwl = {ctor: 'NightOwl'};
var _Gizra$elm_spa_exmple$Attribute_Model$NineToFive = {ctor: 'NineToFive'};
var _Gizra$elm_spa_exmple$Attribute_Model$EarlyRise = {ctor: 'EarlyRise'};
var _Gizra$elm_spa_exmple$Attribute_Model$Volleyball = {ctor: 'Volleyball'};
var _Gizra$elm_spa_exmple$Attribute_Model$Yoga = {ctor: 'Yoga'};
var _Gizra$elm_spa_exmple$Attribute_Model$Soccer = {ctor: 'Soccer'};
var _Gizra$elm_spa_exmple$Attribute_Model$Pilates = {ctor: 'Pilates'};
var _Gizra$elm_spa_exmple$Attribute_Model$CrossFit = {ctor: 'CrossFit'};
var _Gizra$elm_spa_exmple$Attribute_Model$Baseball = {ctor: 'Baseball'};
var _Gizra$elm_spa_exmple$Attribute_Model$SciFi = {ctor: 'SciFi'};
var _Gizra$elm_spa_exmple$Attribute_Model$Horror = {ctor: 'Horror'};
var _Gizra$elm_spa_exmple$Attribute_Model$Drama = {ctor: 'Drama'};
var _Gizra$elm_spa_exmple$Attribute_Model$Comedy = {ctor: 'Comedy'};
var _Gizra$elm_spa_exmple$Attribute_Model$Action = {ctor: 'Action'};

var _eeue56$elm_all_dict$EveryDict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_eeue56$elm_all_dict$EveryDict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _eeue56$elm_all_dict$EveryDict$keys = function (dict) {
	return A3(
		_eeue56$elm_all_dict$EveryDict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _eeue56$elm_all_dict$EveryDict$values = function (dict) {
	return A3(
		_eeue56$elm_all_dict$EveryDict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _eeue56$elm_all_dict$EveryDict$toList = function (dict) {
	return A3(
		_eeue56$elm_all_dict$EveryDict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _eeue56$elm_all_dict$EveryDict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_eeue56$elm_all_dict$EveryDict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _eeue56$elm_all_dict$EveryDict$isBBlack = function (dict) {
	var _p2 = dict;
	_v8_2:
	do {
		if (_p2.ctor === 'RBNode_elm_builtin') {
			if (_p2._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v8_2;
			}
		} else {
			if (_p2._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v8_2;
			}
		}
	} while(false);
	return false;
};
var _eeue56$elm_all_dict$EveryDict$showFlag = function (f) {
	var _p3 = f;
	switch (_p3.ctor) {
		case 'Insert':
			return 'Insert';
		case 'Remove':
			return 'Remove';
		default:
			return 'Same';
	}
};
var _eeue56$elm_all_dict$EveryDict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p4 = dict;
			if (_p4.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v11 = A2(_eeue56$elm_all_dict$EveryDict$sizeHelp, n + 1, _p4._4),
					_v12 = _p4._3;
				n = _v11;
				dict = _v12;
				continue sizeHelp;
			}
		}
	});
var _eeue56$elm_all_dict$EveryDict$size = function (dict) {
	return A2(_eeue56$elm_all_dict$EveryDict$sizeHelp, 0, dict);
};
var _eeue56$elm_all_dict$EveryDict$isEmpty = function (dict) {
	var _p5 = dict;
	if (_p5.ctor === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var _eeue56$elm_all_dict$EveryDict$max = function (dict) {
	max:
	while (true) {
		var _p6 = dict;
		if (_p6.ctor === 'RBNode_elm_builtin') {
			if (_p6._4.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: _p6._1, _1: _p6._2};
			} else {
				var _v15 = _p6._4;
				dict = _v15;
				continue max;
			}
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'EveryDict',
				{
					start: {line: 127, column: 5},
					end: {line: 135, column: 51}
				},
				_p6)('(max Empty) is not defined');
		}
	}
};
var _eeue56$elm_all_dict$EveryDict$min = function (dict) {
	min:
	while (true) {
		var _p8 = dict;
		if (_p8.ctor === 'RBNode_elm_builtin') {
			if ((_p8._3.ctor === 'RBEmpty_elm_builtin') && (_p8._3._0.ctor === 'LBlack')) {
				return {ctor: '_Tuple2', _0: _p8._1, _1: _p8._2};
			} else {
				var _v17 = _p8._3;
				dict = _v17;
				continue min;
			}
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'EveryDict',
				{
					start: {line: 115, column: 5},
					end: {line: 123, column: 51}
				},
				_p8)('(min Empty) is not defined');
		}
	}
};
var _eeue56$elm_all_dict$EveryDict$eq = F2(
	function (first, second) {
		return _elm_lang$core$Native_Utils.eq(
			_eeue56$elm_all_dict$EveryDict$toList(first),
			_eeue56$elm_all_dict$EveryDict$toList(second));
	});
var _eeue56$elm_all_dict$EveryDict$ord = _elm_lang$core$Basics$toString;
var _eeue56$elm_all_dict$EveryDict$get_ = F2(
	function (targetKey, dict) {
		get_:
		while (true) {
			var _p10 = dict;
			if (_p10.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p11 = A2(
					_elm_lang$core$Basics$compare,
					_eeue56$elm_all_dict$EveryDict$ord(targetKey),
					_eeue56$elm_all_dict$EveryDict$ord(_p10._1));
				switch (_p11.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p10._3;
						targetKey = _v20;
						dict = _v21;
						continue get_;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p10._2);
					default:
						var _v22 = targetKey,
							_v23 = _p10._4;
						targetKey = _v22;
						dict = _v23;
						continue get_;
				}
			}
		}
	});
var _eeue56$elm_all_dict$EveryDict$get = F2(
	function (targetKey, dict) {
		return A2(_eeue56$elm_all_dict$EveryDict$get_, targetKey, dict);
	});
var _eeue56$elm_all_dict$EveryDict$member = F2(
	function (key, dict) {
		var _p12 = A2(_eeue56$elm_all_dict$EveryDict$get_, key, dict);
		if (_p12.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _eeue56$elm_all_dict$EveryDict$showLColor = function (color) {
	var _p13 = color;
	if (_p13.ctor === 'LBlack') {
		return 'LBlack';
	} else {
		return 'LBBlack';
	}
};
var _eeue56$elm_all_dict$EveryDict$showNColor = function (c) {
	var _p14 = c;
	switch (_p14.ctor) {
		case 'Red':
			return 'Red';
		case 'Black':
			return 'Black';
		case 'BBlack':
			return 'BBlack';
		default:
			return 'NBlack';
	}
};
var _eeue56$elm_all_dict$EveryDict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Utils.crash(
			'EveryDict',
			{
				start: {line: 320, column: 3},
				end: {line: 320, column: 14}
			})(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _eeue56$elm_all_dict$EveryDict$showNColor(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/Elm/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _eeue56$elm_all_dict$EveryDict$NBlack = {ctor: 'NBlack'};
var _eeue56$elm_all_dict$EveryDict$BBlack = {ctor: 'BBlack'};
var _eeue56$elm_all_dict$EveryDict$Black = {ctor: 'Black'};
var _eeue56$elm_all_dict$EveryDict$blackish = function (t) {
	var _p15 = t;
	if (_p15.ctor === 'RBNode_elm_builtin') {
		var _p16 = _p15._0;
		return _elm_lang$core$Native_Utils.eq(_p16, _eeue56$elm_all_dict$EveryDict$Black) || _elm_lang$core$Native_Utils.eq(_p16, _eeue56$elm_all_dict$EveryDict$BBlack);
	} else {
		return true;
	}
};
var _eeue56$elm_all_dict$EveryDict$Red = {ctor: 'Red'};
var _eeue56$elm_all_dict$EveryDict$moreBlack = function (color) {
	var _p17 = color;
	switch (_p17.ctor) {
		case 'Black':
			return _eeue56$elm_all_dict$EveryDict$BBlack;
		case 'Red':
			return _eeue56$elm_all_dict$EveryDict$Black;
		case 'NBlack':
			return _eeue56$elm_all_dict$EveryDict$Red;
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'EveryDict',
				{
					start: {line: 294, column: 5},
					end: {line: 298, column: 73}
				},
				_p17)('Can\'t make a double black node more black!');
	}
};
var _eeue56$elm_all_dict$EveryDict$lessBlack = function (color) {
	var _p19 = color;
	switch (_p19.ctor) {
		case 'BBlack':
			return _eeue56$elm_all_dict$EveryDict$Black;
		case 'Black':
			return _eeue56$elm_all_dict$EveryDict$Red;
		case 'Red':
			return _eeue56$elm_all_dict$EveryDict$NBlack;
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'EveryDict',
				{
					start: {line: 303, column: 5},
					end: {line: 307, column: 75}
				},
				_p19)('Can\'t make a negative black node less black!');
	}
};
var _eeue56$elm_all_dict$EveryDict$LBBlack = {ctor: 'LBBlack'};
var _eeue56$elm_all_dict$EveryDict$LBlack = {ctor: 'LBlack'};
var _eeue56$elm_all_dict$EveryDict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _eeue56$elm_all_dict$EveryDict$empty = _eeue56$elm_all_dict$EveryDict$RBEmpty_elm_builtin(_eeue56$elm_all_dict$EveryDict$LBlack);
var _eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _eeue56$elm_all_dict$EveryDict$ensureBlackRoot = function (dict) {
	var _p21 = dict;
	if (_p21.ctor === 'RBNode_elm_builtin') {
		switch (_p21._0.ctor) {
			case 'Red':
				return A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, _p21._1, _p21._2, _p21._3, _p21._4);
			case 'Black':
				return dict;
			default:
				return dict;
		}
	} else {
		return dict;
	}
};
var _eeue56$elm_all_dict$EveryDict$lessBlackTree = function (dict) {
	var _p22 = dict;
	if (_p22.ctor === 'RBNode_elm_builtin') {
		return A5(
			_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin,
			_eeue56$elm_all_dict$EveryDict$lessBlack(_p22._0),
			_p22._1,
			_p22._2,
			_p22._3,
			_p22._4);
	} else {
		if (_p22._0.ctor === 'LBBlack') {
			return _eeue56$elm_all_dict$EveryDict$RBEmpty_elm_builtin(_eeue56$elm_all_dict$EveryDict$LBlack);
		} else {
			return dict;
		}
	}
};
var _eeue56$elm_all_dict$EveryDict$blacken = function (t) {
	var _p23 = t;
	if (_p23.ctor === 'RBEmpty_elm_builtin') {
		return _eeue56$elm_all_dict$EveryDict$RBEmpty_elm_builtin(_eeue56$elm_all_dict$EveryDict$LBlack);
	} else {
		return A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	}
};
var _eeue56$elm_all_dict$EveryDict$redden = function (t) {
	var _p24 = t;
	if (_p24.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Utils.crashCase(
			'EveryDict',
			{
				start: {line: 440, column: 5},
				end: {line: 442, column: 69}
			},
			_p24)('can\'t make a Leaf red');
	} else {
		return A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Red, _p24._1, _p24._2, _p24._3, _p24._4);
	}
};
var _eeue56$elm_all_dict$EveryDict$balance_node = function (t) {
	var assemble = function (col) {
		return function (xk) {
			return function (xv) {
				return function (yk) {
					return function (yv) {
						return function (zk) {
							return function (zv) {
								return function (a) {
									return function (b) {
										return function (c) {
											return function (d) {
												return A5(
													_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin,
													_eeue56$elm_all_dict$EveryDict$lessBlack(col),
													yk,
													yv,
													A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, xk, xv, a, b),
													A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, zk, zv, c, d));
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	if (_eeue56$elm_all_dict$EveryDict$blackish(t)) {
		var _p26 = t;
		_v34_6:
		do {
			_v34_5:
			do {
				_v34_4:
				do {
					_v34_3:
					do {
						_v34_2:
						do {
							_v34_1:
							do {
								_v34_0:
								do {
									if (_p26.ctor === 'RBNode_elm_builtin') {
										if (_p26._3.ctor === 'RBNode_elm_builtin') {
											if (_p26._4.ctor === 'RBNode_elm_builtin') {
												switch (_p26._3._0.ctor) {
													case 'Red':
														switch (_p26._4._0.ctor) {
															case 'Red':
																if ((_p26._3._3.ctor === 'RBNode_elm_builtin') && (_p26._3._3._0.ctor === 'Red')) {
																	break _v34_0;
																} else {
																	if ((_p26._3._4.ctor === 'RBNode_elm_builtin') && (_p26._3._4._0.ctor === 'Red')) {
																		break _v34_1;
																	} else {
																		if ((_p26._4._3.ctor === 'RBNode_elm_builtin') && (_p26._4._3._0.ctor === 'Red')) {
																			break _v34_2;
																		} else {
																			if ((_p26._4._4.ctor === 'RBNode_elm_builtin') && (_p26._4._4._0.ctor === 'Red')) {
																				break _v34_3;
																			} else {
																				break _v34_6;
																			}
																		}
																	}
																}
															case 'NBlack':
																if ((_p26._3._3.ctor === 'RBNode_elm_builtin') && (_p26._3._3._0.ctor === 'Red')) {
																	break _v34_0;
																} else {
																	if ((_p26._3._4.ctor === 'RBNode_elm_builtin') && (_p26._3._4._0.ctor === 'Red')) {
																		break _v34_1;
																	} else {
																		if (((_p26._0.ctor === 'BBlack') && (_p26._4._3.ctor === 'RBNode_elm_builtin')) && (_p26._4._3._0.ctor === 'Black')) {
																			break _v34_4;
																		} else {
																			break _v34_6;
																		}
																	}
																}
															default:
																if ((_p26._3._3.ctor === 'RBNode_elm_builtin') && (_p26._3._3._0.ctor === 'Red')) {
																	break _v34_0;
																} else {
																	if ((_p26._3._4.ctor === 'RBNode_elm_builtin') && (_p26._3._4._0.ctor === 'Red')) {
																		break _v34_1;
																	} else {
																		break _v34_6;
																	}
																}
														}
													case 'NBlack':
														switch (_p26._4._0.ctor) {
															case 'Red':
																if ((_p26._4._3.ctor === 'RBNode_elm_builtin') && (_p26._4._3._0.ctor === 'Red')) {
																	break _v34_2;
																} else {
																	if ((_p26._4._4.ctor === 'RBNode_elm_builtin') && (_p26._4._4._0.ctor === 'Red')) {
																		break _v34_3;
																	} else {
																		if (((_p26._0.ctor === 'BBlack') && (_p26._3._4.ctor === 'RBNode_elm_builtin')) && (_p26._3._4._0.ctor === 'Black')) {
																			break _v34_5;
																		} else {
																			break _v34_6;
																		}
																	}
																}
															case 'NBlack':
																if (_p26._0.ctor === 'BBlack') {
																	if ((_p26._4._3.ctor === 'RBNode_elm_builtin') && (_p26._4._3._0.ctor === 'Black')) {
																		break _v34_4;
																	} else {
																		if ((_p26._3._4.ctor === 'RBNode_elm_builtin') && (_p26._3._4._0.ctor === 'Black')) {
																			break _v34_5;
																		} else {
																			break _v34_6;
																		}
																	}
																} else {
																	break _v34_6;
																}
															default:
																if (((_p26._0.ctor === 'BBlack') && (_p26._3._4.ctor === 'RBNode_elm_builtin')) && (_p26._3._4._0.ctor === 'Black')) {
																	break _v34_5;
																} else {
																	break _v34_6;
																}
														}
													default:
														switch (_p26._4._0.ctor) {
															case 'Red':
																if ((_p26._4._3.ctor === 'RBNode_elm_builtin') && (_p26._4._3._0.ctor === 'Red')) {
																	break _v34_2;
																} else {
																	if ((_p26._4._4.ctor === 'RBNode_elm_builtin') && (_p26._4._4._0.ctor === 'Red')) {
																		break _v34_3;
																	} else {
																		break _v34_6;
																	}
																}
															case 'NBlack':
																if (((_p26._0.ctor === 'BBlack') && (_p26._4._3.ctor === 'RBNode_elm_builtin')) && (_p26._4._3._0.ctor === 'Black')) {
																	break _v34_4;
																} else {
																	break _v34_6;
																}
															default:
																break _v34_6;
														}
												}
											} else {
												switch (_p26._3._0.ctor) {
													case 'Red':
														if ((_p26._3._3.ctor === 'RBNode_elm_builtin') && (_p26._3._3._0.ctor === 'Red')) {
															break _v34_0;
														} else {
															if ((_p26._3._4.ctor === 'RBNode_elm_builtin') && (_p26._3._4._0.ctor === 'Red')) {
																break _v34_1;
															} else {
																break _v34_6;
															}
														}
													case 'NBlack':
														if (((_p26._0.ctor === 'BBlack') && (_p26._3._4.ctor === 'RBNode_elm_builtin')) && (_p26._3._4._0.ctor === 'Black')) {
															break _v34_5;
														} else {
															break _v34_6;
														}
													default:
														break _v34_6;
												}
											}
										} else {
											if (_p26._4.ctor === 'RBNode_elm_builtin') {
												switch (_p26._4._0.ctor) {
													case 'Red':
														if ((_p26._4._3.ctor === 'RBNode_elm_builtin') && (_p26._4._3._0.ctor === 'Red')) {
															break _v34_2;
														} else {
															if ((_p26._4._4.ctor === 'RBNode_elm_builtin') && (_p26._4._4._0.ctor === 'Red')) {
																break _v34_3;
															} else {
																break _v34_6;
															}
														}
													case 'NBlack':
														if (((_p26._0.ctor === 'BBlack') && (_p26._4._3.ctor === 'RBNode_elm_builtin')) && (_p26._4._3._0.ctor === 'Black')) {
															break _v34_4;
														} else {
															break _v34_6;
														}
													default:
														break _v34_6;
												}
											} else {
												break _v34_6;
											}
										}
									} else {
										break _v34_6;
									}
								} while(false);
								return assemble(_p26._0)(_p26._3._3._1)(_p26._3._3._2)(_p26._3._1)(_p26._3._2)(_p26._1)(_p26._2)(_p26._3._3._3)(_p26._3._3._4)(_p26._3._4)(_p26._4);
							} while(false);
							return assemble(_p26._0)(_p26._3._1)(_p26._3._2)(_p26._3._4._1)(_p26._3._4._2)(_p26._1)(_p26._2)(_p26._3._3)(_p26._3._4._3)(_p26._3._4._4)(_p26._4);
						} while(false);
						return assemble(_p26._0)(_p26._1)(_p26._2)(_p26._4._3._1)(_p26._4._3._2)(_p26._4._1)(_p26._4._2)(_p26._3)(_p26._4._3._3)(_p26._4._3._4)(_p26._4._4);
					} while(false);
					return assemble(_p26._0)(_p26._1)(_p26._2)(_p26._4._1)(_p26._4._2)(_p26._4._4._1)(_p26._4._4._2)(_p26._3)(_p26._4._3)(_p26._4._4._3)(_p26._4._4._4);
				} while(false);
				var _p28 = _p26._4._4;
				var _p27 = _p28;
				if ((_p27.ctor === 'RBNode_elm_builtin') && (_p27._0.ctor === 'Black')) {
					return A5(
						_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin,
						_eeue56$elm_all_dict$EveryDict$Black,
						_p26._4._3._1,
						_p26._4._3._2,
						A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, _p26._1, _p26._2, _p26._3, _p26._4._3._3),
						A5(
							_eeue56$elm_all_dict$EveryDict$balance,
							_eeue56$elm_all_dict$EveryDict$Black,
							_p26._4._1,
							_p26._4._2,
							_p26._4._3._4,
							_eeue56$elm_all_dict$EveryDict$redden(_p28)));
				} else {
					return t;
				}
			} while(false);
			var _p30 = _p26._3._3;
			var _p29 = _p30;
			if ((_p29.ctor === 'RBNode_elm_builtin') && (_p29._0.ctor === 'Black')) {
				return A5(
					_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin,
					_eeue56$elm_all_dict$EveryDict$Black,
					_p26._3._4._1,
					_p26._3._4._2,
					A5(
						_eeue56$elm_all_dict$EveryDict$balance,
						_eeue56$elm_all_dict$EveryDict$Black,
						_p26._3._1,
						_p26._3._2,
						_eeue56$elm_all_dict$EveryDict$redden(_p30),
						_p26._3._4._3),
					A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, _p26._1, _p26._2, _p26._3._4._4, _p26._4));
			} else {
				return t;
			}
		} while(false);
		return t;
	} else {
		return t;
	}
};
var _eeue56$elm_all_dict$EveryDict$balance = F5(
	function (c, k, v, l, r) {
		return _eeue56$elm_all_dict$EveryDict$balance_node(
			A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, c, k, v, l, r));
	});
var _eeue56$elm_all_dict$EveryDict$bubble = F5(
	function (c, k, v, l, r) {
		return (_eeue56$elm_all_dict$EveryDict$isBBlack(l) || _eeue56$elm_all_dict$EveryDict$isBBlack(r)) ? A5(
			_eeue56$elm_all_dict$EveryDict$balance,
			_eeue56$elm_all_dict$EveryDict$moreBlack(c),
			k,
			v,
			_eeue56$elm_all_dict$EveryDict$lessBlackTree(l),
			_eeue56$elm_all_dict$EveryDict$lessBlackTree(r)) : A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _eeue56$elm_all_dict$EveryDict$remove_max = F5(
	function (c, k, v, l, r) {
		var _p31 = r;
		if (_p31.ctor === 'RBEmpty_elm_builtin') {
			return A3(_eeue56$elm_all_dict$EveryDict$rem, c, l, r);
		} else {
			return A5(
				_eeue56$elm_all_dict$EveryDict$bubble,
				c,
				k,
				v,
				l,
				A5(_eeue56$elm_all_dict$EveryDict$remove_max, _p31._0, _p31._1, _p31._2, _p31._3, _p31._4));
		}
	});
var _eeue56$elm_all_dict$EveryDict$rem = F3(
	function (c, l, r) {
		var _p32 = {ctor: '_Tuple2', _0: l, _1: r};
		if (_p32._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p32._1.ctor === 'RBEmpty_elm_builtin') {
				var _p33 = c;
				switch (_p33.ctor) {
					case 'Red':
						return _eeue56$elm_all_dict$EveryDict$RBEmpty_elm_builtin(_eeue56$elm_all_dict$EveryDict$LBlack);
					case 'Black':
						return _eeue56$elm_all_dict$EveryDict$RBEmpty_elm_builtin(_eeue56$elm_all_dict$EveryDict$LBBlack);
					default:
						return _eeue56$elm_all_dict$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p36 = _p32._1._0;
				var _p35 = _p32._0._0;
				var _p34 = {ctor: '_Tuple3', _0: c, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'LBlack')) && (_p34._2.ctor === 'Red')) {
					return A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, _p32._1._1, _p32._1._2, _p32._1._3, _p32._1._4);
				} else {
					return A4(
						_eeue56$elm_all_dict$EveryDict$reportRemBug,
						'Black/LBlack/Red',
						c,
						_eeue56$elm_all_dict$EveryDict$showLColor(_p35),
						_eeue56$elm_all_dict$EveryDict$showNColor(_p36));
				}
			}
		} else {
			if (_p32._1.ctor === 'RBEmpty_elm_builtin') {
				var _p39 = _p32._1._0;
				var _p38 = _p32._0._0;
				var _p37 = {ctor: '_Tuple3', _0: c, _1: _p38, _2: _p39};
				if ((((_p37.ctor === '_Tuple3') && (_p37._0.ctor === 'Black')) && (_p37._1.ctor === 'Red')) && (_p37._2.ctor === 'LBlack')) {
					return A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, _p32._0._1, _p32._0._2, _p32._0._3, _p32._0._4);
				} else {
					return A4(
						_eeue56$elm_all_dict$EveryDict$reportRemBug,
						'Black/Red/LBlack',
						c,
						_eeue56$elm_all_dict$EveryDict$showNColor(_p38),
						_eeue56$elm_all_dict$EveryDict$showLColor(_p39));
				}
			} else {
				var _p45 = _p32._0._2;
				var _p44 = _p32._0._4;
				var _p43 = _p32._0._3;
				var _p42 = _p32._0._1;
				var _p41 = _p32._0._0;
				var l_ = A5(_eeue56$elm_all_dict$EveryDict$remove_max, _p41, _p42, _p45, _p43, _p44);
				var r = A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _p32._1._0, _p32._1._1, _p32._1._2, _p32._1._3, _p32._1._4);
				var l = A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _p41, _p42, _p45, _p43, _p44);
				var _p40 = _eeue56$elm_all_dict$EveryDict$max(l);
				var k = _p40._0;
				var v = _p40._1;
				return A5(_eeue56$elm_all_dict$EveryDict$bubble, c, k, v, l_, r);
			}
		}
	});
var _eeue56$elm_all_dict$EveryDict$map = F2(
	function (f, dict) {
		var _p46 = dict;
		if (_p46.ctor === 'RBEmpty_elm_builtin') {
			return _eeue56$elm_all_dict$EveryDict$RBEmpty_elm_builtin(_p46._0);
		} else {
			var _p47 = _p46._1;
			return A5(
				_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin,
				_p46._0,
				_p47,
				A2(f, _p47, _p46._2),
				A2(_eeue56$elm_all_dict$EveryDict$map, f, _p46._3),
				A2(_eeue56$elm_all_dict$EveryDict$map, f, _p46._4));
		}
	});
var _eeue56$elm_all_dict$EveryDict$Same = {ctor: 'Same'};
var _eeue56$elm_all_dict$EveryDict$Remove = {ctor: 'Remove'};
var _eeue56$elm_all_dict$EveryDict$Insert = {ctor: 'Insert'};
var _eeue56$elm_all_dict$EveryDict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p48 = dict;
			if (_p48.ctor === 'RBEmpty_elm_builtin') {
				var _p49 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p49.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _eeue56$elm_all_dict$EveryDict$Same, _1: _eeue56$elm_all_dict$EveryDict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _eeue56$elm_all_dict$EveryDict$Insert,
						_1: A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Red, k, _p49._0, _eeue56$elm_all_dict$EveryDict$empty, _eeue56$elm_all_dict$EveryDict$empty)
					};
				}
			} else {
				var _p60 = _p48._2;
				var _p59 = _p48._4;
				var _p58 = _p48._3;
				var _p57 = _p48._1;
				var _p56 = _p48._0;
				var _p50 = A2(
					_elm_lang$core$Basics$compare,
					_eeue56$elm_all_dict$EveryDict$ord(k),
					_eeue56$elm_all_dict$EveryDict$ord(_p57));
				switch (_p50.ctor) {
					case 'EQ':
						var _p51 = alter(
							_elm_lang$core$Maybe$Just(_p60));
						if (_p51.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _eeue56$elm_all_dict$EveryDict$Remove,
								_1: A3(_eeue56$elm_all_dict$EveryDict$rem, _p56, _p58, _p59)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _eeue56$elm_all_dict$EveryDict$Same,
								_1: A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _p56, _p57, _p51._0, _p58, _p59)
							};
						}
					case 'LT':
						var _p52 = up(_p58);
						var flag = _p52._0;
						var newLeft = _p52._1;
						var _p53 = flag;
						switch (_p53.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$EveryDict$Same,
									_1: A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _p56, _p57, _p60, newLeft, _p59)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$EveryDict$Insert,
									_1: A5(_eeue56$elm_all_dict$EveryDict$balance, _p56, _p57, _p60, newLeft, _p59)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$EveryDict$Remove,
									_1: A5(_eeue56$elm_all_dict$EveryDict$bubble, _p56, _p57, _p60, newLeft, _p59)
								};
						}
					default:
						var _p54 = up(_p59);
						var flag = _p54._0;
						var newRight = _p54._1;
						var _p55 = flag;
						switch (_p55.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$EveryDict$Same,
									_1: A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _p56, _p57, _p60, _p58, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$EveryDict$Insert,
									_1: A5(_eeue56$elm_all_dict$EveryDict$balance, _p56, _p57, _p60, _p58, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$EveryDict$Remove,
									_1: A5(_eeue56$elm_all_dict$EveryDict$bubble, _p56, _p57, _p60, _p58, newRight)
								};
						}
				}
			}
		};
		var _p61 = up(dict);
		var flag = _p61._0;
		var updatedDict = _p61._1;
		var _p62 = flag;
		switch (_p62.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _eeue56$elm_all_dict$EveryDict$ensureBlackRoot(updatedDict);
			default:
				return _eeue56$elm_all_dict$EveryDict$blacken(updatedDict);
		}
	});
var _eeue56$elm_all_dict$EveryDict$insert = F3(
	function (key, value, dict) {
		return A3(
			_eeue56$elm_all_dict$EveryDict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _eeue56$elm_all_dict$EveryDict$singleton = F2(
	function (key, value) {
		return A3(_eeue56$elm_all_dict$EveryDict$insert, key, value, _eeue56$elm_all_dict$EveryDict$empty);
	});
var _eeue56$elm_all_dict$EveryDict$union = F2(
	function (t1, t2) {
		return A3(_eeue56$elm_all_dict$EveryDict$foldl, _eeue56$elm_all_dict$EveryDict$insert, t2, t1);
	});
var _eeue56$elm_all_dict$EveryDict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_eeue56$elm_all_dict$EveryDict$insert, _p64._0, _p64._1, dict);
			}),
		_eeue56$elm_all_dict$EveryDict$empty,
		assocs);
};
var _eeue56$elm_all_dict$EveryDict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_eeue56$elm_all_dict$EveryDict$insert, key, value, dict) : dict;
			});
		return A3(_eeue56$elm_all_dict$EveryDict$foldl, add, _eeue56$elm_all_dict$EveryDict$empty, dictionary);
	});
var _eeue56$elm_all_dict$EveryDict$intersect = F2(
	function (t1, t2) {
		return A2(
			_eeue56$elm_all_dict$EveryDict$filter,
			F2(
				function (k, _p65) {
					return A2(_eeue56$elm_all_dict$EveryDict$member, k, t2);
				}),
			t1);
	});
var _eeue56$elm_all_dict$EveryDict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p66) {
				var _p67 = _p66;
				var _p69 = _p67._1;
				var _p68 = _p67._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_eeue56$elm_all_dict$EveryDict$insert, key, value, _p68),
					_1: _p69
				} : {
					ctor: '_Tuple2',
					_0: _p68,
					_1: A3(_eeue56$elm_all_dict$EveryDict$insert, key, value, _p69)
				};
			});
		return A3(
			_eeue56$elm_all_dict$EveryDict$foldl,
			add,
			{ctor: '_Tuple2', _0: _eeue56$elm_all_dict$EveryDict$empty, _1: _eeue56$elm_all_dict$EveryDict$empty},
			dict);
	});
var _eeue56$elm_all_dict$EveryDict$remove = F2(
	function (key, dict) {
		return A3(
			_eeue56$elm_all_dict$EveryDict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _eeue56$elm_all_dict$EveryDict$diff = F2(
	function (t1, t2) {
		return A3(
			_eeue56$elm_all_dict$EveryDict$foldl,
			F3(
				function (k, v, t) {
					return A2(_eeue56$elm_all_dict$EveryDict$remove, k, t);
				}),
			t1,
			t2);
	});

var _Gizra$elm_spa_exmple$People_Model$Person = F5(
	function (a, b, c, d, e) {
		return {name: a, image: b, socialNetworks: c, title: d, attributes: e};
	});
var _Gizra$elm_spa_exmple$People_Model$Twitter = function (a) {
	return {ctor: 'Twitter', _0: a};
};
var _Gizra$elm_spa_exmple$People_Model$Github = function (a) {
	return {ctor: 'Github', _0: a};
};
var _Gizra$elm_spa_exmple$People_Model$Email = function (a) {
	return {ctor: 'Email', _0: a};
};
var _Gizra$elm_spa_exmple$People_Model$Drupal = function (a) {
	return {ctor: 'Drupal', _0: a};
};

var _Gizra$elm_spa_exmple$GizraTeam$people = _Gizra$elm_dictlist$DictList$fromList(
	{
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: 'amitaibu',
			_1: {
				name: 'Amitai Burstein',
				image: 'amitaibu.jpg',
				socialNetworks: {
					ctor: '::',
					_0: _Gizra$elm_spa_exmple$People_Model$Email('amitai'),
					_1: {
						ctor: '::',
						_0: _Gizra$elm_spa_exmple$People_Model$Twitter('amitaibu'),
						_1: {
							ctor: '::',
							_0: _Gizra$elm_spa_exmple$People_Model$Github('amitaibu'),
							_1: {
								ctor: '::',
								_0: _Gizra$elm_spa_exmple$People_Model$Drupal('amitaibu'),
								_1: {ctor: '[]'}
							}
						}
					}
				},
				title: 'CTO, Co-Owner',
				attributes: {
					ctor: '::',
					_0: _Gizra$elm_spa_exmple$Attribute_Model$DoingSports,
					_1: {
						ctor: '::',
						_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Kids),
						_1: {
							ctor: '::',
							_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Married),
							_1: {
								ctor: '::',
								_0: _Gizra$elm_spa_exmple$Attribute_Model$FoodAttr(_Gizra$elm_spa_exmple$Attribute_Model$Pescaterian),
								_1: {
									ctor: '::',
									_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Male),
									_1: {
										ctor: '::',
										_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
										_1: {
											ctor: '::',
											_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
											_1: {
												ctor: '::',
												_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$French),
												_1: {
													ctor: '::',
													_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Spanish),
													_1: {
														ctor: '::',
														_0: _Gizra$elm_spa_exmple$Attribute_Model$LivedAbroad,
														_1: {
															ctor: '::',
															_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
															_1: {
																ctor: '::',
																_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicWhileWorking,
																_1: {
																	ctor: '::',
																	_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$NineToFive),
																	_1: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Comedy),
																		_1: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Drama),
																			_1: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$SciFi),
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'bricel',
				_1: {
					name: 'Brice Lenfant',
					image: 'bricel.jpg',
					socialNetworks: {
						ctor: '::',
						_0: _Gizra$elm_spa_exmple$People_Model$Email('brice'),
						_1: {
							ctor: '::',
							_0: _Gizra$elm_spa_exmple$People_Model$Twitter('bricel'),
							_1: {
								ctor: '::',
								_0: _Gizra$elm_spa_exmple$People_Model$Github('bricel'),
								_1: {
									ctor: '::',
									_0: _Gizra$elm_spa_exmple$People_Model$Drupal('bricel'),
									_1: {ctor: '[]'}
								}
							}
						}
					},
					title: 'CEO, Co-Owner',
					attributes: {
						ctor: '::',
						_0: _Gizra$elm_spa_exmple$Attribute_Model$DoingSports,
						_1: {
							ctor: '::',
							_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Kids),
							_1: {
								ctor: '::',
								_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Married),
								_1: {
									ctor: '::',
									_0: _Gizra$elm_spa_exmple$Attribute_Model$FoodAttr(_Gizra$elm_spa_exmple$Attribute_Model$Paleo),
									_1: {
										ctor: '::',
										_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Male),
										_1: {
											ctor: '::',
											_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
											_1: {
												ctor: '::',
												_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
												_1: {
													ctor: '::',
													_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$French),
													_1: {
														ctor: '::',
														_0: _Gizra$elm_spa_exmple$Attribute_Model$LivedAbroad,
														_1: {
															ctor: '::',
															_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicWhileWorking,
															_1: {
																ctor: '::',
																_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
																_1: {
																	ctor: '::',
																	_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$EarlyRise),
																	_1: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$NineToFive),
																		_1: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$Attribute_Model$SportAttr(_Gizra$elm_spa_exmple$Attribute_Model$CrossFit),
																			_1: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Drama),
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'OritiMG',
					_1: {
						name: 'Orit Geron',
						image: 'OritGeron.jpg',
						socialNetworks: {
							ctor: '::',
							_0: _Gizra$elm_spa_exmple$People_Model$Email('orit@gizra.com'),
							_1: {
								ctor: '::',
								_0: _Gizra$elm_spa_exmple$People_Model$Twitter('OritiMG'),
								_1: {
									ctor: '::',
									_0: _Gizra$elm_spa_exmple$People_Model$Github('OritGeron'),
									_1: {ctor: '[]'}
								}
							}
						},
						title: 'Operations Manager',
						attributes: {
							ctor: '::',
							_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Kids),
							_1: {
								ctor: '::',
								_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Married),
								_1: {
									ctor: '::',
									_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Female),
									_1: {
										ctor: '::',
										_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
										_1: {
											ctor: '::',
											_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
											_1: {
												ctor: '::',
												_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicWhileWorking,
												_1: {
													ctor: '::',
													_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
													_1: {
														ctor: '::',
														_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$EarlyRise),
														_1: {
															ctor: '::',
															_0: _Gizra$elm_spa_exmple$Attribute_Model$Tattoo,
															_1: {
																ctor: '::',
																_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Action),
																_1: {
																	ctor: '::',
																	_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Comedy),
																	_1: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Drama),
																		_1: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$SciFi),
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'IshaDakota',
						_1: {
							name: 'Adam Stewart',
							image: 'ishadakota.jpg',
							socialNetworks: {
								ctor: '::',
								_0: _Gizra$elm_spa_exmple$People_Model$Email('adam@gizra.com'),
								_1: {
									ctor: '::',
									_0: _Gizra$elm_spa_exmple$People_Model$Twitter('adamhstewart'),
									_1: {
										ctor: '::',
										_0: _Gizra$elm_spa_exmple$People_Model$Github('IshaDakota'),
										_1: {
											ctor: '::',
											_0: _Gizra$elm_spa_exmple$People_Model$Drupal('IshaDakota'),
											_1: {ctor: '[]'}
										}
									}
								}
							},
							title: 'USA CTO',
							attributes: {
								ctor: '::',
								_0: _Gizra$elm_spa_exmple$Attribute_Model$DoingSports,
								_1: {
									ctor: '::',
									_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Kids),
									_1: {
										ctor: '::',
										_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Married),
										_1: {
											ctor: '::',
											_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Male),
											_1: {
												ctor: '::',
												_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
												_1: {
													ctor: '::',
													_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
													_1: {
														ctor: '::',
														_0: _Gizra$elm_spa_exmple$Attribute_Model$LivedAbroad,
														_1: {
															ctor: '::',
															_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$USA),
															_1: {
																ctor: '::',
																_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$EarlyRise),
																_1: {
																	ctor: '::',
																	_0: _Gizra$elm_spa_exmple$Attribute_Model$SportAttr(_Gizra$elm_spa_exmple$Attribute_Model$Baseball),
																	_1: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Comedy),
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'RachelBaram',
							_1: {
								name: 'Rachel Baram',
								image: 'RachelBaram.jpg',
								socialNetworks: {
									ctor: '::',
									_0: _Gizra$elm_spa_exmple$People_Model$Email('rachel@gizra.com'),
									_1: {
										ctor: '::',
										_0: _Gizra$elm_spa_exmple$People_Model$Twitter('RachelBaram'),
										_1: {
											ctor: '::',
											_0: _Gizra$elm_spa_exmple$People_Model$Github('RachelBaram'),
											_1: {ctor: '[]'}
										}
									}
								},
								title: 'Business Development',
								attributes: {
									ctor: '::',
									_0: _Gizra$elm_spa_exmple$Attribute_Model$DoingSports,
									_1: {
										ctor: '::',
										_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Kids),
										_1: {
											ctor: '::',
											_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Married),
											_1: {
												ctor: '::',
												_0: _Gizra$elm_spa_exmple$Attribute_Model$FoodAttr(_Gizra$elm_spa_exmple$Attribute_Model$Paleo),
												_1: {
													ctor: '::',
													_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Female),
													_1: {
														ctor: '::',
														_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
														_1: {
															ctor: '::',
															_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
															_1: {
																ctor: '::',
																_0: _Gizra$elm_spa_exmple$Attribute_Model$LivedAbroad,
																_1: {
																	ctor: '::',
																	_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$USA),
																	_1: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
																		_1: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$Attribute_Model$Pet,
																			_1: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$EarlyRise),
																				_1: {
																					ctor: '::',
																					_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$NineToFive),
																					_1: {
																						ctor: '::',
																						_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$NightOwl),
																						_1: {
																							ctor: '::',
																							_0: _Gizra$elm_spa_exmple$Attribute_Model$SportAttr(_Gizra$elm_spa_exmple$Attribute_Model$CrossFit),
																							_1: {
																								ctor: '::',
																								_0: _Gizra$elm_spa_exmple$Attribute_Model$Tattoo,
																								_1: {
																									ctor: '::',
																									_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Comedy),
																									_1: {
																										ctor: '::',
																										_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Drama),
																										_1: {
																											ctor: '::',
																											_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$SciFi),
																											_1: {
																												ctor: '::',
																												_0: _Gizra$elm_spa_exmple$Attribute_Model$WorkingRemote,
																												_1: {ctor: '[]'}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'LiatSadeSaadon',
								_1: {
									name: 'Liat Sade Saadon',
									image: 'liatsade.jpg',
									socialNetworks: {
										ctor: '::',
										_0: _Gizra$elm_spa_exmple$People_Model$Email('liat@gizra.com'),
										_1: {
											ctor: '::',
											_0: _Gizra$elm_spa_exmple$People_Model$Twitter('Liat_Sade'),
											_1: {
												ctor: '::',
												_0: _Gizra$elm_spa_exmple$People_Model$Github('liatsade'),
												_1: {
													ctor: '::',
													_0: _Gizra$elm_spa_exmple$People_Model$Drupal('liats75'),
													_1: {ctor: '[]'}
												}
											}
										}
									},
									title: 'Employee Training & Development',
									attributes: {
										ctor: '::',
										_0: _Gizra$elm_spa_exmple$Attribute_Model$DoingSports,
										_1: {
											ctor: '::',
											_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Kids),
											_1: {
												ctor: '::',
												_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Married),
												_1: {
													ctor: '::',
													_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Female),
													_1: {
														ctor: '::',
														_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
														_1: {
															ctor: '::',
															_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
															_1: {
																ctor: '::',
																_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
																_1: {
																	ctor: '::',
																	_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$NineToFive),
																	_1: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$Attribute_Model$SportAttr(_Gizra$elm_spa_exmple$Attribute_Model$Pilates),
																		_1: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Drama),
																			_1: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$Attribute_Model$WorkingRemote,
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'RoySegall',
									_1: {
										name: 'Roy Segall',
										image: 'RoySegall.jpg',
										socialNetworks: {
											ctor: '::',
											_0: _Gizra$elm_spa_exmple$People_Model$Email('roy.segall@gizra.com'),
											_1: {
												ctor: '::',
												_0: _Gizra$elm_spa_exmple$People_Model$Github('RoySegall'),
												_1: {
													ctor: '::',
													_0: _Gizra$elm_spa_exmple$People_Model$Drupal('RoySegall'),
													_1: {ctor: '[]'}
												}
											}
										},
										title: 'Team Lead',
										attributes: {
											ctor: '::',
											_0: _Gizra$elm_spa_exmple$Attribute_Model$DoingSports,
											_1: {
												ctor: '::',
												_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Male),
												_1: {
													ctor: '::',
													_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
													_1: {
														ctor: '::',
														_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
														_1: {
															ctor: '::',
															_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
															_1: {
																ctor: '::',
																_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicAttr(_Gizra$elm_spa_exmple$Attribute_Model$PlayingInstrument),
																_1: {
																	ctor: '::',
																	_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicWhileWorking,
																	_1: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
																		_1: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$EarlyRise),
																			_1: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$Attribute_Model$SportAttr(_Gizra$elm_spa_exmple$Attribute_Model$CrossFit),
																				_1: {
																					ctor: '::',
																					_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Action),
																					_1: {
																						ctor: '::',
																						_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Comedy),
																						_1: {
																							ctor: '::',
																							_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Drama),
																							_1: {
																								ctor: '::',
																								_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$SciFi),
																								_1: {ctor: '[]'}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'NaderSafadi',
										_1: {
											name: 'Nader Safadi',
											image: 'nader77.jpg',
											socialNetworks: {
												ctor: '::',
												_0: _Gizra$elm_spa_exmple$People_Model$Email('nader@gizra.com'),
												_1: {
													ctor: '::',
													_0: _Gizra$elm_spa_exmple$People_Model$Github('nader77'),
													_1: {
														ctor: '::',
														_0: _Gizra$elm_spa_exmple$People_Model$Drupal('nader77'),
														_1: {ctor: '[]'}
													}
												}
											},
											title: 'Team Lead',
											attributes: {
												ctor: '::',
												_0: _Gizra$elm_spa_exmple$Attribute_Model$DoingSports,
												_1: {
													ctor: '::',
													_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Male),
													_1: {
														ctor: '::',
														_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Arabic),
														_1: {
															ctor: '::',
															_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
															_1: {
																ctor: '::',
																_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
																_1: {
																	ctor: '::',
																	_0: _Gizra$elm_spa_exmple$Attribute_Model$LivedAbroad,
																	_1: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicWhileWorking,
																		_1: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
																			_1: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$EarlyRise),
																				_1: {
																					ctor: '::',
																					_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$NightOwl),
																					_1: {
																						ctor: '::',
																						_0: _Gizra$elm_spa_exmple$Attribute_Model$SportAttr(_Gizra$elm_spa_exmple$Attribute_Model$CrossFit),
																						_1: {
																							ctor: '::',
																							_0: _Gizra$elm_spa_exmple$Attribute_Model$Tattoo,
																							_1: {
																								ctor: '::',
																								_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Action),
																								_1: {
																									ctor: '::',
																									_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Comedy),
																									_1: {
																										ctor: '::',
																										_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$SciFi),
																										_1: {ctor: '[]'}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'bitamar',
											_1: {
												name: 'Itamar Bar-Lev',
												image: 'bitamar.jpg',
												socialNetworks: {
													ctor: '::',
													_0: _Gizra$elm_spa_exmple$People_Model$Email('itamar@gizra.com'),
													_1: {
														ctor: '::',
														_0: _Gizra$elm_spa_exmple$People_Model$Github('bitamar'),
														_1: {
															ctor: '::',
															_0: _Gizra$elm_spa_exmple$People_Model$Drupal('itamar'),
															_1: {ctor: '[]'}
														}
													}
												},
												title: 'Team Lead',
												attributes: {
													ctor: '::',
													_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Kids),
													_1: {
														ctor: '::',
														_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Married),
														_1: {
															ctor: '::',
															_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Male),
															_1: {
																ctor: '::',
																_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
																_1: {
																	ctor: '::',
																	_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
																	_1: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$German),
																		_1: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$Attribute_Model$LivedAbroad,
																			_1: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicAttr(_Gizra$elm_spa_exmple$Attribute_Model$PlayingInstrument),
																				_1: {
																					ctor: '::',
																					_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicAttr(_Gizra$elm_spa_exmple$Attribute_Model$Sing),
																					_1: {
																						ctor: '::',
																						_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicWhileWorking,
																						_1: {
																							ctor: '::',
																							_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
																							_1: {
																								ctor: '::',
																								_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$NineToFive),
																								_1: {
																									ctor: '::',
																									_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Drama),
																									_1: {
																										ctor: '::',
																										_0: _Gizra$elm_spa_exmple$Attribute_Model$WorkingRemote,
																										_1: {ctor: '[]'}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'ordavidil',
												_1: {
													name: 'Or David',
													image: 'ordavidil.jpg',
													socialNetworks: {
														ctor: '::',
														_0: _Gizra$elm_spa_exmple$People_Model$Email('or@gizra.com'),
														_1: {
															ctor: '::',
															_0: _Gizra$elm_spa_exmple$People_Model$Github('ordavidil'),
															_1: {
																ctor: '::',
																_0: _Gizra$elm_spa_exmple$People_Model$Drupal('ordavidil'),
																_1: {ctor: '[]'}
															}
														}
													},
													title: 'Team Lead',
													attributes: {
														ctor: '::',
														_0: _Gizra$elm_spa_exmple$Attribute_Model$DoingSports,
														_1: {
															ctor: '::',
															_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Male),
															_1: {
																ctor: '::',
																_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
																_1: {
																	ctor: '::',
																	_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
																	_1: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$Attribute_Model$LivedAbroad,
																		_1: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicAttr(_Gizra$elm_spa_exmple$Attribute_Model$PlayingInstrument),
																			_1: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicWhileWorking,
																				_1: {
																					ctor: '::',
																					_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
																					_1: {
																						ctor: '::',
																						_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$NightOwl),
																						_1: {
																							ctor: '::',
																							_0: _Gizra$elm_spa_exmple$Attribute_Model$SportAttr(_Gizra$elm_spa_exmple$Attribute_Model$Volleyball),
																							_1: {
																								ctor: '::',
																								_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Action),
																								_1: {
																									ctor: '::',
																									_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Comedy),
																									_1: {
																										ctor: '::',
																										_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Drama),
																										_1: {
																											ctor: '::',
																											_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Horror),
																											_1: {
																												ctor: '::',
																												_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$SciFi),
																												_1: {ctor: '[]'}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'efratn',
													_1: {
														name: 'Efrat Nitzan',
														image: 'efratn.jpg',
														socialNetworks: {
															ctor: '::',
															_0: _Gizra$elm_spa_exmple$People_Model$Email('efrat@gizra.com'),
															_1: {
																ctor: '::',
																_0: _Gizra$elm_spa_exmple$People_Model$Github('efratn'),
																_1: {ctor: '[]'}
															}
														},
														title: 'Account Manager',
														attributes: {
															ctor: '::',
															_0: _Gizra$elm_spa_exmple$Attribute_Model$DoingSports,
															_1: {
																ctor: '::',
																_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Kids),
																_1: {
																	ctor: '::',
																	_0: _Gizra$elm_spa_exmple$Attribute_Model$FoodAttr(_Gizra$elm_spa_exmple$Attribute_Model$Kosher),
																	_1: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Female),
																		_1: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
																			_1: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
																				_1: {
																					ctor: '::',
																					_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicWhileWorking,
																					_1: {
																						ctor: '::',
																						_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
																						_1: {
																							ctor: '::',
																							_0: _Gizra$elm_spa_exmple$Attribute_Model$Pet,
																							_1: {
																								ctor: '::',
																								_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$NineToFive),
																								_1: {
																									ctor: '::',
																									_0: _Gizra$elm_spa_exmple$Attribute_Model$SportAttr(_Gizra$elm_spa_exmple$Attribute_Model$Pilates),
																									_1: {ctor: '[]'}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '_Tuple2',
														_0: 'Pavel',
														_1: {
															name: 'Pavel Pirozhenko',
															image: 'Pavel.jpg',
															socialNetworks: {
																ctor: '::',
																_0: _Gizra$elm_spa_exmple$People_Model$Email('pavel@gizra.com'),
																_1: {
																	ctor: '::',
																	_0: _Gizra$elm_spa_exmple$People_Model$Github('ppavels'),
																	_1: {ctor: '[]'}
																}
															},
															title: 'Developer',
															attributes: {
																ctor: '::',
																_0: _Gizra$elm_spa_exmple$Attribute_Model$DoingSports,
																_1: {
																	ctor: '::',
																	_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Kids),
																	_1: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Male),
																		_1: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
																			_1: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
																				_1: {
																					ctor: '::',
																					_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Russian),
																					_1: {
																						ctor: '::',
																						_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Ukrainian),
																						_1: {
																							ctor: '::',
																							_0: _Gizra$elm_spa_exmple$Attribute_Model$LivedAbroad,
																							_1: {
																								ctor: '::',
																								_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicWhileWorking,
																								_1: {
																									ctor: '::',
																									_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
																									_1: {
																										ctor: '::',
																										_0: _Gizra$elm_spa_exmple$Attribute_Model$Pet,
																										_1: {
																											ctor: '::',
																											_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$NightOwl),
																											_1: {
																												ctor: '::',
																												_0: _Gizra$elm_spa_exmple$Attribute_Model$SportAttr(_Gizra$elm_spa_exmple$Attribute_Model$Soccer),
																												_1: {
																													ctor: '::',
																													_0: _Gizra$elm_spa_exmple$Attribute_Model$SportAttr(_Gizra$elm_spa_exmple$Attribute_Model$Volleyball),
																													_1: {
																														ctor: '::',
																														_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Action),
																														_1: {
																															ctor: '::',
																															_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Comedy),
																															_1: {
																																ctor: '::',
																																_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Horror),
																																_1: {
																																	ctor: '::',
																																	_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$SciFi),
																																	_1: {ctor: '[]'}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'anvmn',
															_1: {
																name: 'Anatoly Vaitsman',
																image: 'anvmn.jpg',
																socialNetworks: {
																	ctor: '::',
																	_0: _Gizra$elm_spa_exmple$People_Model$Email('anatoly@gizra.com'),
																	_1: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$People_Model$Github('anvmn'),
																		_1: {ctor: '[]'}
																	}
																},
																title: 'Developer',
																attributes: {
																	ctor: '::',
																	_0: _Gizra$elm_spa_exmple$Attribute_Model$DoingSports,
																	_1: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Male),
																		_1: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
																			_1: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
																				_1: {
																					ctor: '::',
																					_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Russian),
																					_1: {
																						ctor: '::',
																						_0: _Gizra$elm_spa_exmple$Attribute_Model$LivedAbroad,
																						_1: {
																							ctor: '::',
																							_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
																							_1: {
																								ctor: '::',
																								_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$NightOwl),
																								_1: {
																									ctor: '::',
																									_0: _Gizra$elm_spa_exmple$Attribute_Model$SportAttr(_Gizra$elm_spa_exmple$Attribute_Model$CrossFit),
																									_1: {
																										ctor: '::',
																										_0: _Gizra$elm_spa_exmple$Attribute_Model$Tattoo,
																										_1: {
																											ctor: '::',
																											_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Action),
																											_1: {
																												ctor: '::',
																												_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Comedy),
																												_1: {
																													ctor: '::',
																													_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Drama),
																													_1: {
																														ctor: '::',
																														_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Horror),
																														_1: {
																															ctor: '::',
																															_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$SciFi),
																															_1: {ctor: '[]'}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: 'SavyonCohen',
																_1: {
																	name: 'Savyon Cohen',
																	image: 'savyoncohen.jpg',
																	socialNetworks: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$People_Model$Email('savyon@gizra.com'),
																		_1: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$People_Model$Github('savyoncohen'),
																			_1: {ctor: '[]'}
																		}
																	},
																	title: 'Developer',
																	attributes: {
																		ctor: '::',
																		_0: _Gizra$elm_spa_exmple$Attribute_Model$DoingSports,
																		_1: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Kids),
																			_1: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$Attribute_Model$FamilyAttr(_Gizra$elm_spa_exmple$Attribute_Model$Married),
																				_1: {
																					ctor: '::',
																					_0: _Gizra$elm_spa_exmple$Attribute_Model$FoodAttr(_Gizra$elm_spa_exmple$Attribute_Model$Kosher),
																					_1: {
																						ctor: '::',
																						_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Female),
																						_1: {
																							ctor: '::',
																							_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
																							_1: {
																								ctor: '::',
																								_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
																								_1: {
																									ctor: '::',
																									_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicAttr(_Gizra$elm_spa_exmple$Attribute_Model$Sing),
																									_1: {
																										ctor: '::',
																										_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicWhileWorking,
																										_1: {
																											ctor: '::',
																											_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
																											_1: {
																												ctor: '::',
																												_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$EarlyRise),
																												_1: {
																													ctor: '::',
																													_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Action),
																													_1: {
																														ctor: '::',
																														_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Comedy),
																														_1: {ctor: '[]'}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '_Tuple2',
																	_0: 'ybaras',
																	_1: {
																		name: 'Yoav Baras',
																		image: 'ybaras.jpg',
																		socialNetworks: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$People_Model$Email('yoav@gizra.com'),
																			_1: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$People_Model$Github('ybaras'),
																				_1: {ctor: '[]'}
																			}
																		},
																		title: 'Developer',
																		attributes: {
																			ctor: '::',
																			_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Male),
																			_1: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
																				_1: {
																					ctor: '::',
																					_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
																					_1: {
																						ctor: '::',
																						_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
																						_1: {
																							ctor: '::',
																							_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$NineToFive),
																							_1: {ctor: '[]'}
																						}
																					}
																				}
																			}
																		}
																	}
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '_Tuple2',
																		_0: 'DavidBronfen',
																		_1: {
																			name: 'David Bronfen',
																			image: 'DavidBronfen.jpg',
																			socialNetworks: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$People_Model$Email('davidb@gizra.com'),
																				_1: {
																					ctor: '::',
																					_0: _Gizra$elm_spa_exmple$People_Model$Github('DavidBronfen'),
																					_1: {ctor: '[]'}
																				}
																			},
																			title: 'Developer',
																			attributes: {
																				ctor: '::',
																				_0: _Gizra$elm_spa_exmple$Attribute_Model$DoingSports,
																				_1: {
																					ctor: '::',
																					_0: _Gizra$elm_spa_exmple$Attribute_Model$FoodAttr(_Gizra$elm_spa_exmple$Attribute_Model$Vegetarian),
																					_1: {
																						ctor: '::',
																						_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Male),
																						_1: {
																							ctor: '::',
																							_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
																							_1: {
																								ctor: '::',
																								_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Italian),
																								_1: {
																									ctor: '::',
																									_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
																									_1: {
																										ctor: '::',
																										_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Russian),
																										_1: {
																											ctor: '::',
																											_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
																											_1: {
																												ctor: '::',
																												_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicAttr(_Gizra$elm_spa_exmple$Attribute_Model$Sing),
																												_1: {
																													ctor: '::',
																													_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicWhileWorking,
																													_1: {
																														ctor: '::',
																														_0: _Gizra$elm_spa_exmple$Attribute_Model$Pet,
																														_1: {
																															ctor: '::',
																															_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$EarlyRise),
																															_1: {
																																ctor: '::',
																																_0: _Gizra$elm_spa_exmple$Attribute_Model$SportAttr(_Gizra$elm_spa_exmple$Attribute_Model$CrossFit),
																																_1: {
																																	ctor: '::',
																																	_0: _Gizra$elm_spa_exmple$Attribute_Model$Tattoo,
																																	_1: {
																																		ctor: '::',
																																		_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Comedy),
																																		_1: {
																																			ctor: '::',
																																			_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Drama),
																																			_1: {ctor: '[]'}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '_Tuple2',
																			_0: 'ItamarGronich',
																			_1: {
																				name: 'Itamar Gronich',
																				image: 'ItamarGronich.jpg',
																				socialNetworks: {
																					ctor: '::',
																					_0: _Gizra$elm_spa_exmple$People_Model$Email('itamargronich@gizra.com'),
																					_1: {
																						ctor: '::',
																						_0: _Gizra$elm_spa_exmple$People_Model$Github('ItamarGronich'),
																						_1: {ctor: '[]'}
																					}
																				},
																				title: 'Developer',
																				attributes: {
																					ctor: '::',
																					_0: _Gizra$elm_spa_exmple$Attribute_Model$DoingSports,
																					_1: {
																						ctor: '::',
																						_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Male),
																						_1: {
																							ctor: '::',
																							_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Hebrew),
																							_1: {
																								ctor: '::',
																								_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
																								_1: {
																									ctor: '::',
																									_0: _Gizra$elm_spa_exmple$Attribute_Model$LivedAbroad,
																									_1: {
																										ctor: '::',
																										_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicAttr(_Gizra$elm_spa_exmple$Attribute_Model$PlayingInstrument),
																										_1: {
																											ctor: '::',
																											_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicWhileWorking,
																											_1: {
																												ctor: '::',
																												_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Israel),
																												_1: {
																													ctor: '::',
																													_0: _Gizra$elm_spa_exmple$Attribute_Model$Pet,
																													_1: {
																														ctor: '::',
																														_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$EarlyRise),
																														_1: {
																															ctor: '::',
																															_0: _Gizra$elm_spa_exmple$Attribute_Model$SportAttr(_Gizra$elm_spa_exmple$Attribute_Model$CrossFit),
																															_1: {
																																ctor: '::',
																																_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Comedy),
																																_1: {
																																	ctor: '::',
																																	_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$Drama),
																																	_1: {ctor: '[]'}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		},
																		_1: {
																			ctor: '::',
																			_0: {
																				ctor: '_Tuple2',
																				_0: 'DavidHernandez',
																				_1: {
																					name: 'David Hernandez',
																					image: 'DavidHernandez.jpg',
																					socialNetworks: {
																						ctor: '::',
																						_0: _Gizra$elm_spa_exmple$People_Model$Email('david.hernandez@gizra.com'),
																						_1: {
																							ctor: '::',
																							_0: _Gizra$elm_spa_exmple$People_Model$Github('DavidHernandez'),
																							_1: {
																								ctor: '::',
																								_0: _Gizra$elm_spa_exmple$People_Model$Drupal('david-hernández'),
																								_1: {ctor: '[]'}
																							}
																						}
																					},
																					title: 'Developer',
																					attributes: {
																						ctor: '::',
																						_0: _Gizra$elm_spa_exmple$Attribute_Model$FoodAttr(_Gizra$elm_spa_exmple$Attribute_Model$Vegan),
																						_1: {
																							ctor: '::',
																							_0: _Gizra$elm_spa_exmple$Attribute_Model$GenderAttr(_Gizra$elm_spa_exmple$Attribute_Model$Male),
																							_1: {
																								ctor: '::',
																								_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Catalonian),
																								_1: {
																									ctor: '::',
																									_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$English),
																									_1: {
																										ctor: '::',
																										_0: _Gizra$elm_spa_exmple$Attribute_Model$LanguageAttr(_Gizra$elm_spa_exmple$Attribute_Model$Spanish),
																										_1: {
																											ctor: '::',
																											_0: _Gizra$elm_spa_exmple$Attribute_Model$LivedAbroad,
																											_1: {
																												ctor: '::',
																												_0: _Gizra$elm_spa_exmple$Attribute_Model$MusicWhileWorking,
																												_1: {
																													ctor: '::',
																													_0: _Gizra$elm_spa_exmple$Attribute_Model$NationalityAttr(_Gizra$elm_spa_exmple$Attribute_Model$Spain),
																													_1: {
																														ctor: '::',
																														_0: _Gizra$elm_spa_exmple$Attribute_Model$Pet,
																														_1: {
																															ctor: '::',
																															_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$EarlyRise),
																															_1: {
																																ctor: '::',
																																_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$NineToFive),
																																_1: {
																																	ctor: '::',
																																	_0: _Gizra$elm_spa_exmple$Attribute_Model$PreferedWorkHoursAttr(_Gizra$elm_spa_exmple$Attribute_Model$NightOwl),
																																	_1: {
																																		ctor: '::',
																																		_0: _Gizra$elm_spa_exmple$Attribute_Model$Tattoo,
																																		_1: {
																																			ctor: '::',
																																			_0: _Gizra$elm_spa_exmple$Attribute_Model$TvAndMovieGenereAttr(_Gizra$elm_spa_exmple$Attribute_Model$SciFi),
																																			_1: {
																																				ctor: '::',
																																				_0: _Gizra$elm_spa_exmple$Attribute_Model$WorkingRemote,
																																				_1: {ctor: '[]'}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			},
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$mouse$Mouse_ops = _elm_lang$mouse$Mouse_ops || {};
_elm_lang$mouse$Mouse_ops['&>'] = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return t2;
			},
			t1);
	});
var _elm_lang$mouse$Mouse$onSelfMsg = F3(
	function (router, _p1, state) {
		var _p2 = _p1;
		var _p3 = A2(_elm_lang$core$Dict$get, _p2.category, state);
		if (_p3.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (tagger) {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					tagger(_p2.position));
			};
			return A2(
				_elm_lang$mouse$Mouse_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p3._0.taggers)),
				_elm_lang$core$Task$succeed(state));
		}
	});
var _elm_lang$mouse$Mouse$init = _elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty);
var _elm_lang$mouse$Mouse$categorizeHelpHelp = F2(
	function (value, maybeValues) {
		var _p4 = maybeValues;
		if (_p4.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Just(
				{
					ctor: '::',
					_0: value,
					_1: {ctor: '[]'}
				});
		} else {
			return _elm_lang$core$Maybe$Just(
				{ctor: '::', _0: value, _1: _p4._0});
		}
	});
var _elm_lang$mouse$Mouse$categorizeHelp = F2(
	function (subs, subDict) {
		categorizeHelp:
		while (true) {
			var _p5 = subs;
			if (_p5.ctor === '[]') {
				return subDict;
			} else {
				var _v4 = _p5._1,
					_v5 = A3(
					_elm_lang$core$Dict$update,
					_p5._0._0,
					_elm_lang$mouse$Mouse$categorizeHelpHelp(_p5._0._1),
					subDict);
				subs = _v4;
				subDict = _v5;
				continue categorizeHelp;
			}
		}
	});
var _elm_lang$mouse$Mouse$categorize = function (subs) {
	return A2(_elm_lang$mouse$Mouse$categorizeHelp, subs, _elm_lang$core$Dict$empty);
};
var _elm_lang$mouse$Mouse$subscription = _elm_lang$core$Native_Platform.leaf('Mouse');
var _elm_lang$mouse$Mouse$Position = F2(
	function (a, b) {
		return {x: a, y: b};
	});
var _elm_lang$mouse$Mouse$position = A3(
	_elm_lang$core$Json_Decode$map2,
	_elm_lang$mouse$Mouse$Position,
	A2(_elm_lang$core$Json_Decode$field, 'pageX', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode$field, 'pageY', _elm_lang$core$Json_Decode$int));
var _elm_lang$mouse$Mouse$Watcher = F2(
	function (a, b) {
		return {taggers: a, pid: b};
	});
var _elm_lang$mouse$Mouse$Msg = F2(
	function (a, b) {
		return {category: a, position: b};
	});
var _elm_lang$mouse$Mouse$onEffects = F3(
	function (router, newSubs, oldState) {
		var rightStep = F3(
			function (category, taggers, task) {
				var tracker = A3(
					_elm_lang$dom$Dom_LowLevel$onDocument,
					category,
					_elm_lang$mouse$Mouse$position,
					function (_p6) {
						return A2(
							_elm_lang$core$Platform$sendToSelf,
							router,
							A2(_elm_lang$mouse$Mouse$Msg, category, _p6));
					});
				return A2(
					_elm_lang$core$Task$andThen,
					function (state) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$core$Dict$insert,
										category,
										A2(_elm_lang$mouse$Mouse$Watcher, taggers, pid),
										state));
							},
							_elm_lang$core$Process$spawn(tracker));
					},
					task);
			});
		var bothStep = F4(
			function (category, _p7, taggers, task) {
				var _p8 = _p7;
				return A2(
					_elm_lang$core$Task$andThen,
					function (state) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$core$Dict$insert,
								category,
								A2(_elm_lang$mouse$Mouse$Watcher, taggers, _p8.pid),
								state));
					},
					task);
			});
		var leftStep = F3(
			function (category, _p9, task) {
				var _p10 = _p9;
				return A2(
					_elm_lang$mouse$Mouse_ops['&>'],
					_elm_lang$core$Process$kill(_p10.pid),
					task);
			});
		return A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			oldState,
			_elm_lang$mouse$Mouse$categorize(newSubs),
			_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
	});
var _elm_lang$mouse$Mouse$MySub = F2(
	function (a, b) {
		return {ctor: 'MySub', _0: a, _1: b};
	});
var _elm_lang$mouse$Mouse$clicks = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'click', tagger));
};
var _elm_lang$mouse$Mouse$moves = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mousemove', tagger));
};
var _elm_lang$mouse$Mouse$downs = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mousedown', tagger));
};
var _elm_lang$mouse$Mouse$ups = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mouseup', tagger));
};
var _elm_lang$mouse$Mouse$subMap = F2(
	function (func, _p11) {
		var _p12 = _p11;
		return A2(
			_elm_lang$mouse$Mouse$MySub,
			_p12._0,
			function (_p13) {
				return func(
					_p12._1(_p13));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Mouse'] = {pkg: 'elm-lang/mouse', init: _elm_lang$mouse$Mouse$init, onEffects: _elm_lang$mouse$Mouse$onEffects, onSelfMsg: _elm_lang$mouse$Mouse$onSelfMsg, tag: 'sub', subMap: _elm_lang$mouse$Mouse$subMap};

var _Gizra$elm_spa_exmple$Magnet_Model$Magnet = F4(
	function (a, b, c, d) {
		return {selected: a, position: b, drag: c, rotation: d};
	});
var _Gizra$elm_spa_exmple$Magnet_Model$Drag = F4(
	function (a, b, c, d) {
		return {start: a, current: b, distanceFromCenter: c, side: d};
	});
var _Gizra$elm_spa_exmple$Magnet_Model$Right = {ctor: 'Right'};
var _Gizra$elm_spa_exmple$Magnet_Model$Left = {ctor: 'Left'};

var _Gizra$elm_spa_exmple$Magnets_Model$ToggleAttribute = function (a) {
	return {ctor: 'ToggleAttribute', _0: a};
};
var _Gizra$elm_spa_exmple$Magnets_Model$MouseUp = function (a) {
	return {ctor: 'MouseUp', _0: a};
};
var _Gizra$elm_spa_exmple$Magnets_Model$MouseMove = function (a) {
	return {ctor: 'MouseMove', _0: a};
};
var _Gizra$elm_spa_exmple$Magnets_Model$DragStart = F3(
	function (a, b, c) {
		return {ctor: 'DragStart', _0: a, _1: b, _2: c};
	});

var _Gizra$elm_spa_exmple$App_Model$emptyModel = {magnets: _eeue56$elm_all_dict$EveryDict$empty, people: _Gizra$elm_spa_exmple$GizraTeam$people};
var _Gizra$elm_spa_exmple$App_Model$Flags = function (a) {
	return {randomNumbers: a};
};
var _Gizra$elm_spa_exmple$App_Model$Model = F2(
	function (a, b) {
		return {magnets: a, people: b};
	});
var _Gizra$elm_spa_exmple$App_Model$ToggleAttribute = function (a) {
	return {ctor: 'ToggleAttribute', _0: a};
};
var _Gizra$elm_spa_exmple$App_Model$MsgMagnets = function (a) {
	return {ctor: 'MsgMagnets', _0: a};
};

var _Gizra$elm_spa_exmple$Magnet_Utils$setDragAt = F2(
	function (magnet, position) {
		var dragUpdated = A2(
			_elm_lang$core$Maybe$map,
			function (_p0) {
				var _p1 = _p0;
				return A4(_Gizra$elm_spa_exmple$Magnet_Model$Drag, _p1.start, position, _p1.distanceFromCenter, _p1.side);
			},
			magnet.drag);
		var rotationDelta = function () {
			var _p2 = magnet.drag;
			if (_p2.ctor === 'Just') {
				var sideFactor = function () {
					var _p3 = _p2._0.side;
					if (_p3.ctor === 'Left') {
						return -1;
					} else {
						return 1;
					}
				}();
				return ((_elm_lang$core$Basics$toFloat(position.y - _p2._0.current.y) * sideFactor) * _p2._0.distanceFromCenter) / 100;
			} else {
				return _elm_lang$core$Native_Utils.crashCase(
					'Magnet.Utils',
					{
						start: {line: 38, column: 13},
						end: {line: 52, column: 42}
					},
					_p2)('no drag');
			}
		}();
		var rotationUpdated = magnet.rotation + rotationDelta;
		return _elm_lang$core$Native_Utils.update(
			magnet,
			{drag: dragUpdated, rotation: rotationUpdated});
	});
var _Gizra$elm_spa_exmple$Magnet_Utils$setDragStart = F2(
	function (magnet, position) {
		var distanceFromMagnetCenter = function (_p5) {
			return _elm_lang$core$Basics$sqrt(
				_elm_lang$core$Basics$toFloat(_p5));
		}(
			Math.pow(magnet.position.x - position.x, 2) + Math.pow(magnet.position.y - position.y, 2));
		var side = (_elm_lang$core$Native_Utils.cmp(position.x, magnet.position.x) < 0) ? _Gizra$elm_spa_exmple$Magnet_Model$Left : _Gizra$elm_spa_exmple$Magnet_Model$Right;
		return _elm_lang$core$Native_Utils.update(
			magnet,
			{
				drag: _elm_lang$core$Maybe$Just(
					A4(_Gizra$elm_spa_exmple$Magnet_Model$Drag, position, position, distanceFromMagnetCenter, side))
			});
	});
var _Gizra$elm_spa_exmple$Magnet_Utils$getPosition = function (_p6) {
	var _p7 = _p6;
	var _p11 = _p7.position;
	var _p8 = _p7.drag;
	if (_p8.ctor === 'Nothing') {
		return _p11;
	} else {
		var _p10 = _p8._0.start;
		var _p9 = _p8._0.current;
		return A2(_elm_lang$mouse$Mouse$Position, (_p11.x + _p9.x) - _p10.x, (_p11.y + _p9.y) - _p10.y);
	}
};
var _Gizra$elm_spa_exmple$Magnet_Utils$setDragEnd = F2(
	function (magnet, position) {
		return _elm_lang$core$Native_Utils.update(
			magnet,
			{
				position: _Gizra$elm_spa_exmple$Magnet_Utils$getPosition(magnet),
				drag: _elm_lang$core$Maybe$Nothing
			});
	});

var _Gizra$elm_spa_exmple$Magnets_Update$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$batch(
		{
			ctor: '::',
			_0: _elm_lang$mouse$Mouse$moves(_Gizra$elm_spa_exmple$Magnets_Model$MouseMove),
			_1: {
				ctor: '::',
				_0: _elm_lang$mouse$Mouse$ups(_Gizra$elm_spa_exmple$Magnets_Model$MouseUp),
				_1: {ctor: '[]'}
			}
		});
};
var _Gizra$elm_spa_exmple$Magnets_Update$getDraggedMagnet = function (model) {
	var isMagnetDragged = function (_p0) {
		var _p1 = _p0;
		var _p2 = _p1._1.drag;
		if (_p2.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	};
	return _elm_lang$core$List$head(
		A2(
			_elm_lang$core$List$filter,
			isMagnetDragged,
			_eeue56$elm_all_dict$EveryDict$toList(model)));
};
var _Gizra$elm_spa_exmple$Magnets_Update$updateMagnet = F2(
	function (model, _p3) {
		var _p4 = _p3;
		return A3(_eeue56$elm_all_dict$EveryDict$insert, _p4._0, _p4._1, model);
	});
var _Gizra$elm_spa_exmple$Magnets_Update$update = F2(
	function (msg, model) {
		var _p5 = msg;
		switch (_p5.ctor) {
			case 'MouseMove':
				var modelUpdated = function () {
					var _p6 = _Gizra$elm_spa_exmple$Magnets_Update$getDraggedMagnet(model);
					if (_p6.ctor === 'Nothing') {
						return model;
					} else {
						return A2(
							_Gizra$elm_spa_exmple$Magnets_Update$updateMagnet,
							model,
							{
								ctor: '_Tuple2',
								_0: _p6._0._0,
								_1: A2(_Gizra$elm_spa_exmple$Magnet_Utils$setDragAt, _p6._0._1, _p5._0)
							});
					}
				}();
				return {ctor: '_Tuple3', _0: modelUpdated, _1: _elm_lang$core$Platform_Cmd$none, _2: _elm_lang$core$Maybe$Nothing};
			case 'MouseUp':
				var modelUpdated = function () {
					var _p7 = _Gizra$elm_spa_exmple$Magnets_Update$getDraggedMagnet(model);
					if (_p7.ctor === 'Nothing') {
						return model;
					} else {
						return A2(
							_Gizra$elm_spa_exmple$Magnets_Update$updateMagnet,
							model,
							{
								ctor: '_Tuple2',
								_0: _p7._0._0,
								_1: A2(_Gizra$elm_spa_exmple$Magnet_Utils$setDragEnd, _p7._0._1, _p5._0)
							});
					}
				}();
				return {ctor: '_Tuple3', _0: modelUpdated, _1: _elm_lang$core$Platform_Cmd$none, _2: _elm_lang$core$Maybe$Nothing};
			case 'DragStart':
				var magnetUpdated = A2(_Gizra$elm_spa_exmple$Magnet_Utils$setDragStart, _p5._1, _p5._2);
				var modelUpdated = A2(
					_Gizra$elm_spa_exmple$Magnets_Update$updateMagnet,
					model,
					{ctor: '_Tuple2', _0: _p5._0, _1: magnetUpdated});
				return {ctor: '_Tuple3', _0: modelUpdated, _1: _elm_lang$core$Platform_Cmd$none, _2: _elm_lang$core$Maybe$Nothing};
			default:
				return {
					ctor: '_Tuple3',
					_0: model,
					_1: _elm_lang$core$Platform_Cmd$none,
					_2: _elm_lang$core$Maybe$Just(_p5._0)
				};
		}
	});

var _Gizra$elm_spa_exmple$People_Utils$getAttributesFromPeople = function (people) {
	return A3(
		_Gizra$elm_dictlist$DictList$foldl,
		F3(
			function (_p0, person, accum) {
				return A3(
					_elm_lang$core$List$foldl,
					F2(
						function (val, uniqueAccum) {
							return A2(_elm_lang$core$List$member, val, uniqueAccum) ? uniqueAccum : {ctor: '::', _0: val, _1: uniqueAccum};
						}),
					{ctor: '[]'},
					A2(_elm_lang$core$List$append, person.attributes, accum));
			}),
		{ctor: '[]'},
		people);
};

var _Gizra$elm_spa_exmple$App_Update$subscriptions = function (model) {
	return A2(
		_elm_lang$core$Platform_Sub$map,
		_Gizra$elm_spa_exmple$App_Model$MsgMagnets,
		_Gizra$elm_spa_exmple$Magnets_Update$subscriptions(model.magnets));
};
var _Gizra$elm_spa_exmple$App_Update$update = F2(
	function (msg, model) {
		var _p0 = msg;
		if (_p0.ctor === 'MsgMagnets') {
			var _p1 = A2(_Gizra$elm_spa_exmple$Magnets_Update$update, _p0._0, model.magnets);
			var subModel = _p1._0;
			var subCmds = _p1._1;
			var maybeAttribute = _p1._2;
			var modelUpdated = _elm_lang$core$Native_Utils.update(
				model,
				{magnets: subModel});
			var modelUpdatedWithAttributeToggle = A2(
				_elm_lang$core$Maybe$withDefault,
				modelUpdated,
				A2(
					_elm_lang$core$Maybe$map,
					function (attribute) {
						return _elm_lang$core$Tuple$first(
							A2(
								_Gizra$elm_spa_exmple$App_Update$update,
								_Gizra$elm_spa_exmple$App_Model$ToggleAttribute(attribute),
								modelUpdated));
					},
					maybeAttribute));
			return {
				ctor: '_Tuple2',
				_0: modelUpdatedWithAttributeToggle,
				_1: A2(_elm_lang$core$Platform_Cmd$map, _Gizra$elm_spa_exmple$App_Model$MsgMagnets, subCmds)
			};
		} else {
			var _p2 = _p0._0;
			var modelUpdated = A2(
				_elm_lang$core$Maybe$withDefault,
				model,
				A2(
					_elm_lang$core$Maybe$map,
					function (magnet) {
						var magnetUpdated = _elm_lang$core$Native_Utils.update(
							magnet,
							{selected: !magnet.selected});
						var magnetsUpdated = A3(_eeue56$elm_all_dict$EveryDict$insert, _p2, magnetUpdated, model.magnets);
						return _elm_lang$core$Native_Utils.update(
							model,
							{magnets: magnetsUpdated});
					},
					A2(_eeue56$elm_all_dict$EveryDict$get, _p2, model.magnets)));
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				modelUpdated,
				{ctor: '[]'});
		}
	});
var _Gizra$elm_spa_exmple$App_Update$init = function (flags) {
	var allAttributes = _Gizra$elm_spa_exmple$People_Utils$getAttributesFromPeople(_Gizra$elm_spa_exmple$App_Model$emptyModel.people);
	var getRandomNumber = function (index) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(
				_elm_lang$core$Maybe$map,
				_elm_lang$core$Basics$identity,
				A2(_elm_community$list_extra$List_Extra$getAt, index, flags.randomNumbers)));
	};
	var _p3 = A3(
		_elm_lang$core$List$foldl,
		F2(
			function (attribute, _p4) {
				var _p5 = _p4;
				var _p7 = _p5._1;
				var randomNumber3 = getRandomNumber((_p7 * 3) + 2);
				var rotation = (_elm_lang$core$Basics$toFloat(randomNumber3) / 50) - 10;
				var _p6 = A2(_elm_lang$core$Debug$log, 'rotation', rotation);
				var randomNumber2 = getRandomNumber((_p7 * 3) + 1);
				var y = _elm_lang$core$Basics$floor(
					_elm_lang$core$Basics$toFloat(randomNumber2) / 6);
				var randomNumber1 = getRandomNumber(_p7 * 3);
				var x = _elm_lang$core$Basics$floor(
					_elm_lang$core$Basics$toFloat(randomNumber1) * 1.19);
				var magent = {
					selected: false,
					position: A2(_elm_lang$mouse$Mouse$Position, x, y),
					drag: _elm_lang$core$Maybe$Nothing,
					rotation: rotation
				};
				return {
					ctor: '_Tuple2',
					_0: A3(_eeue56$elm_all_dict$EveryDict$insert, attribute, magent, _p5._0),
					_1: _p7 + 1
				};
			}),
		{ctor: '_Tuple2', _0: _eeue56$elm_all_dict$EveryDict$empty, _1: 0},
		allAttributes);
	var magnets = _p3._0;
	return {
		ctor: '_Tuple2',
		_0: _elm_lang$core$Native_Utils.update(
			_Gizra$elm_spa_exmple$App_Model$emptyModel,
			{magnets: magnets}),
		_1: _elm_lang$core$Platform_Cmd$none
	};
};

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _Gizra$elm_spa_exmple$Attribute_View$viewEmptyResult = function (attributes) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('ui grid'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('sixteen wide mobile sixteen wide tablet twelve wide computer centered column'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('ui transparent segment'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$p,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('We try to be diverse, but you have reached our limit, we don\'t have such a person in Gizra.'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$p,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('On the other hand, maybe it\'s you? Go ahead, apply for a job!'),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _Gizra$elm_spa_exmple$Magnets_Utils$getSelectedAttributesFromMagnets = function (magnets) {
	return A3(
		_eeue56$elm_all_dict$EveryDict$foldl,
		F3(
			function (attribute, magnet, accum) {
				return magnet.selected ? {ctor: '::', _0: attribute, _1: accum} : accum;
			}),
		{ctor: '[]'},
		magnets);
};

var _Gizra$elm_spa_exmple$Attribute_Utils$attributeToString = function (attribute) {
	var _p0 = attribute;
	switch (_p0.ctor) {
		case 'DoingSports':
			return 'Playing Sports';
		case 'FamilyAttr':
			return _elm_lang$core$Basics$toString(_p0._0);
		case 'FoodAttr':
			return _elm_lang$core$Basics$toString(_p0._0);
		case 'GenderAttr':
			return _elm_lang$core$Basics$toString(_p0._0);
		case 'LanguageAttr':
			return _elm_lang$core$Basics$toString(_p0._0);
		case 'LivedAbroad':
			return 'Lived abroad';
		case 'MusicAttr':
			var _p1 = _p0._0;
			if (_p1.ctor === 'Sing') {
				return 'Sing';
			} else {
				return 'Playing music';
			}
		case 'MusicWhileWorking':
			return 'Music at work';
		case 'NationalityAttr':
			return _elm_lang$core$Basics$toString(_p0._0);
		case 'Pet':
			return 'Pet';
		case 'PreferedWorkHoursAttr':
			var _p2 = _p0._0;
			switch (_p2.ctor) {
				case 'EarlyRise':
					return 'Early riser';
				case 'NineToFive':
					return '9 to 5';
				default:
					return 'Night Owl';
			}
		case 'SportAttr':
			var _p3 = _p0._0;
			switch (_p3.ctor) {
				case 'Baseball':
					return 'Baseball';
				case 'CrossFit':
					return 'Cross Fit';
				case 'Pilates':
					return 'Pilates';
				case 'Soccer':
					return 'Soccer';
				case 'Yoga':
					return 'Yoga';
				default:
					return 'Volleyball';
			}
		case 'Tattoo':
			return 'Tattoo';
		case 'TvAndMovieGenereAttr':
			var _p4 = _p0._0;
			switch (_p4.ctor) {
				case 'Action':
					return 'Action';
				case 'Comedy':
					return 'Comedy';
				case 'Drama':
					return 'Drama';
				case 'Horror':
					return 'Horror';
				default:
					return 'Sci-Fi';
			}
		default:
			return 'Work remote';
	}
};

var _Gizra$elm_spa_exmple$Magnet_View$px = function (number) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(number),
		'px');
};
var _Gizra$elm_spa_exmple$Magnet_View$view = function (_p0) {
	var _p1 = _p0;
	var _p3 = _p1._1;
	var _p2 = _p1._0;
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html_Events$on,
				'mousedown',
				A2(
					_elm_lang$core$Json_Decode$map,
					A2(_Gizra$elm_spa_exmple$Magnets_Model$DragStart, _p2, _p3),
					_elm_lang$mouse$Mouse$position)),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(
					_Gizra$elm_spa_exmple$Magnets_Model$ToggleAttribute(_p2)),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'left',
								_1: _Gizra$elm_spa_exmple$Magnet_View$px(
									_Gizra$elm_spa_exmple$Magnet_Utils$getPosition(_p3).x - 50)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'top',
									_1: _Gizra$elm_spa_exmple$Magnet_View$px(
										_Gizra$elm_spa_exmple$Magnet_Utils$getPosition(_p3).y - 15)
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'transform',
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											'rotate(',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(_p3.rotation),
												'deg)'))
									},
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$classList(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'selected', _1: _p3.selected},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(
				_Gizra$elm_spa_exmple$Attribute_Utils$attributeToString(_p2)),
			_1: {ctor: '[]'}
		});
};

var _Gizra$elm_spa_exmple$Magnets_View$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('magnets'),
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$List$map,
					_Gizra$elm_spa_exmple$Magnet_View$view,
					_eeue56$elm_all_dict$EveryDict$toList(model))),
			_1: {ctor: '[]'}
		});
};

var _Gizra$elm_spa_exmple$People_View$viewSocailNetowrks = function (person) {
	var viewSocialNetwork = function (socialNetwork) {
		var _p0 = socialNetwork;
		switch (_p0.ctor) {
			case 'Drupal':
				return {
					ctor: '_Tuple2',
					_0: 'drupal',
					_1: A2(_elm_lang$core$Basics_ops['++'], 'https://www.drupal.org/u/', _p0._0)
				};
			case 'Email':
				return {
					ctor: '_Tuple2',
					_0: 'mail',
					_1: A2(_elm_lang$core$Basics_ops['++'], 'mailto:', _p0._0)
				};
			case 'Github':
				return {
					ctor: '_Tuple2',
					_0: 'github',
					_1: A2(_elm_lang$core$Basics_ops['++'], 'https://github.com/', _p0._0)
				};
			default:
				return {
					ctor: '_Tuple2',
					_0: 'twitter',
					_1: A2(_elm_lang$core$Basics_ops['++'], 'https://twitter.com/', _p0._0)
				};
		}
	};
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('description'),
			_1: {ctor: '[]'}
		},
		A2(
			_elm_lang$core$List$map,
			function (socialNetwork) {
				var _p1 = viewSocialNetwork(socialNetwork);
				var icon = _p1._0;
				var url = _p1._1;
				return A2(
					_elm_lang$html$Html$a,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$href(url),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$target('_blank'),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$i,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class(
									A2(_elm_lang$core$Basics_ops['++'], icon, ' icon')),
								_1: {ctor: '[]'}
							},
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					});
			},
			person.socialNetworks));
};
var _Gizra$elm_spa_exmple$People_View$viewPerson = function (person) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('card'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('image'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$img,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$src(
								A2(_elm_lang$core$Basics_ops['++'], '/assets/images/team/members/', person.image)),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$alt(
									A2(
										_elm_lang$core$Basics_ops['++'],
										person.name,
										A2(_elm_lang$core$Basics_ops['++'], ' - ', person.title))),
								_1: {ctor: '[]'}
							}
						},
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('content'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('header'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(person.name),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('meta'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(person.title),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: _Gizra$elm_spa_exmple$People_View$viewSocailNetowrks(person),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
};

var _Gizra$elm_spa_exmple$App_View$view = function (model) {
	var allAttributes = _Gizra$elm_spa_exmple$People_Utils$getAttributesFromPeople(model.people);
	var selectedAttributes = _Gizra$elm_spa_exmple$Magnets_Utils$getSelectedAttributesFromMagnets(model.magnets);
	var filteredPeople = _elm_lang$core$List$isEmpty(selectedAttributes) ? model.people : A2(
		_Gizra$elm_dictlist$DictList$filter,
		F2(
			function (_p0, person) {
				return A3(
					_elm_lang$core$List$foldl,
					F2(
						function (selectedAttribute, accum) {
							return accum ? A2(_elm_lang$core$List$member, selectedAttribute, person.attributes) : false;
						}),
					true,
					selectedAttributes);
			}),
		model.people);
	var peopleOrEmptyResult = _Gizra$elm_dictlist$DictList$isEmpty(filteredPeople) ? _Gizra$elm_spa_exmple$Attribute_View$viewEmptyResult(selectedAttributes) : A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('ui three stackable cards'),
			_1: {ctor: '[]'}
		},
		A2(
			_elm_lang$core$List$map,
			function (_p1) {
				var _p2 = _p1;
				return _Gizra$elm_spa_exmple$People_View$viewPerson(_p2._1);
			},
			_Gizra$elm_dictlist$DictList$toList(filteredPeople)));
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: peopleOrEmptyResult,
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$map,
					_Gizra$elm_spa_exmple$App_Model$MsgMagnets,
					_Gizra$elm_spa_exmple$Magnets_View$view(model.magnets)),
				_1: {ctor: '[]'}
			}
		});
};

var _Gizra$elm_spa_exmple$Main$main = _elm_lang$html$Html$programWithFlags(
	{init: _Gizra$elm_spa_exmple$App_Update$init, update: _Gizra$elm_spa_exmple$App_Update$update, view: _Gizra$elm_spa_exmple$App_View$view, subscriptions: _Gizra$elm_spa_exmple$App_Update$subscriptions})(
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (randomNumbers) {
			return _elm_lang$core$Json_Decode$succeed(
				{randomNumbers: randomNumbers});
		},
		A2(
			_elm_lang$core$Json_Decode$field,
			'randomNumbers',
			_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$int))));

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _Gizra$elm_spa_exmple$Main$main !== 'undefined') {
    _Gizra$elm_spa_exmple$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);
