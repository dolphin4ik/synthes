# Synthes

### How to start?

```
npm i synthes --save
```

```javascript
import Synthes from './synthes';

or

let Synthes = require('./synthes');

or

<script src="synthes.js"></script>

```

JSON template:

```javascript

let template = {
	
	"span": {
		"class": 'some your class',
		"attribute": 'some your attribute',
		"content": 'Hello Synthes!'
	}

}


```

And lets do Synthes:

```javascript

let sandbox = document.querySelectorAll('some selector')[0]; // Choose your sandbox

let synthes = Synthes(template, sandbox); // Creating Synthes object

synthes.render(); // rendering our template into sandbox

```

Simple, but maybe without object? Ok..

```javascript

let sandbox = document.querySelectorAll('some selector'); // Choose your sandbox

Synthes(template, sandbox).render(); // rendering


```

Ok. Without sandbox..

```javascript

document.body.appendChild( Synthes(template).node ); // I think u understand


```

What about simple Synthes object?

```javascript
let a = Synthes();
```

> a.node - our template as DOM Node

> a.string - our DOM Node as string

> a.isSynthes - always true if its a Synthes object

> a.template - JSON template

> a.bind(s) - to bind sandbox "s"

> a.render() - to render template into sandbox


What about template?

```javascript
let template = {
	'node': { //Your DOM Node
		'attribute': 'attribute value',
		'attribute2': 'attribute2 value',
		...,
		'content': 'some string content' //May be a string, a node or a array template
	}
};
```

What about mixed template?

```javascript
let template = {
	'node': { //Your DOM Node
		'attribute': 'attribute value',
		'attribute2': 'attribute2 value',
		...,
		'@span': 'some string content'
	}
};
```
U can see @ symbol to use string nodes alongside string attributes

Simple template:

```javascript
let template = { 'span': '' }; // Empty `span`
```
Nested template:

```javascript
let template = {
	'div': {
		'p': {
			'span': 'Hello from span in p in div ;)'
		}
	}
};
```

Fast render with object:

```javascript
let a = Synthes(template, sandbox).render(); //Rendering and creating object at once
```

#Complex and hard

```javascript

let a = Synthes( { span: 'Hello' } );
let b = Synthes( { span: '%nbsp;' } );
let c = Synthes( { span: 'Synthes' } );

let Synthes = Synthes( { span: [a, b, c] } );

HelloSynthes.string // <span><span>Hello</span><span>%nbsp;</span><span>Synthes</span></span>

```

Enjoy
