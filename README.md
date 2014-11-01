Coat.js
=======

Coat.js is a JQuery plugin for point based reveal for HTML elements.

[Try it for yourself!](http://exphat.github.io/coat.js)

![a Coat.js example](https://raw.githubusercontent.com/ExPHAT/coat.js/master/coat.jpg)

Features
--------

- Light weight
- Selective CSS
- Multiple rules
- Easy to use
- Easy to understand


Usage
-----

1. Ensure to include the latest JQuery version
2. Download the `coat.js` file and reference the it from your HTML.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="lib/coat.js"></script>
```


To apply `coat.js` to your elements, in your JavaScript, use:
```javascript
$("#element").coat();
```

Examples
--------

If you'd like `coat.js` to more than one element, use:
```javascript
$("#element1").coat();
$("#element2").coat();
```

`coat.js` also accepts some special rules
```javascript
$("#element").coat({
	css: {
		"color": "white"
	},
	points: ".changepoint"
});
```

Rules
-----

Currently, there are 3 rules that you can apply to an element with `coat.js` enabled

#### `points`
The default selector that `coat.js` uses is `.coat`. You can customize this by adding the `points` attribute to your newly initialized coat element. This can be done with:
```javascript
$("#element").coat({
	points: ".betterCoat"
});
```
This changes the element that the element is revealed on to the class `betterCoat`.
**Note:** by applying the `points` attribute, you ignore the default coat selector (`.coat`).

#### `css`
The `css` attribute allows you to apply the specified CSS rules to the second element that is created.

An example of this is when you you scroll past your point, you want the color of the text in your coat element to change to green. That can be done simply with:
```javascript
$("#element").coat({
	css: {
		"color": "green"
	}
});
```
**Note:** By default, `coat.js` changes the CSS `color` attribute to `red`. This is only for testing purposes. You are encouraged not to make anything on your web page hard red.

#### `modifier`
The `modifier` attribute is used if for some reason, the scroll is slightly off. This can occur if you have top set to -1 or something such as that. To use it, just specify it when you apply `coat.js` to an object.
```javascript
$("#element").coat({
	modifier: 1
});
```
**Explination**: If you have `top` set to `-1px` and you need to compensate for it, you would add 1 to fix it (This is not always the case, but it happens).
