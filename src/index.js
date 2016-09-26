/*
Synthes
author: denyzhirkov@yandex.ru, @dolphin4ik 
*/

import renderer from './components/renderer.es6';

;(function(win){

let Synthes = function(template = null, sandbox = null){

	let _template = template || null;

	let _sandbox = null;

	if(sandbox && sandbox.nodeType == 1){

		_sandbox = sandbox;

	}else if(typeof sandbox == 'string'){

		_sandbox = document.querySelectorAll(sandbox)[0];

	}

	let _node = renderer(_template);

	let _values = null;

	let _isRendered = false;

	let synthes = {

		render(){

			if(_sandbox){

				if(_sandbox.appendChild(_node)){

					_isRendered = true;

				}

			}

			return this;

		},
		data(v){

			//using data
			_values = v;
			return this;
		},
		bind(sandbox){

			_sandbox = (sandbox.nodeType == 1)? sandbox : null;
			if(_isRendered){
				this.render();
			}
			return this;

		},
		node: null,
		string: null,
		template: template,
		isSynthes: true

	};

	Object.defineProperty(synthes, 'template', {

		set(v){

			_template = v;
			let temp_node = renderer(_template);
			_node.parentNode.insertBefore(temp_node, _node);
			_node.remove();
			_node = temp_node;
			temp_node = null;

		},
		get(){ return _template; },
		configurable: false

	});

	Object.defineProperty(synthes, 'sandbox', {

		set(v){

			_sandbox = (v.nodeType == 1)? v : null;
			_node.remove();
			
			if(_isRendered){
				this.render();
			}

		},
		get(){ return _sandbox; },
		configurable: false

	});

	Object.defineProperty(synthes, 'node', {

		set(){},
		get(){ return _node; },
		configurable: false

	});

	Object.defineProperty(synthes, 'string', {

		set(){},
		get(){

			let a = document.createElement('div');
			a.appendChild(_node.cloneNode(true));
			return a.innerHTML;

		},
		configurable: false

	});

	Object.defineProperty(synthes, 'isSynthes', {

		value: true,
		writable: false,
		configurable: false

	});

	return synthes;

};

/*
*/

if(win){
	win['Synthes'] = Synthes;
}
else if(typeof define === 'function' && define.amd){
	define([], function(){return Synthes;} );
}
else if(typeof module === 'object' && module.exports){
	module.exports = Synthes;
}


})(window);