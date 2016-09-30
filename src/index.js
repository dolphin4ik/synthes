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

	let _softDeleteOriginal = (_node.style.display.length == 0)? 'block' : _node.style.display;

	let _softDelete = false;

	let _values = null;

	let _isRendered = false;

	let WRAPPER = document.createElement('wrapper');

	let synthes = {

		render(){

			if(_sandbox && _node){

				if(!_softDelete){

					if(_sandbox.appendChild(_node)){

						_isRendered = true;

					}

				}else{

					this.node.style.display = _softDeleteOriginal;
					_softDelete = false;

				}

			}

			return this;

		},
		bind(sandbox){

			_sandbox = (sandbox.nodeType == 1)? sandbox : null;
			if(_isRendered){
				this.render();
			}
			return this;

		},
		delete(soft = false){

			if(!soft){
				if(this.node){
					this.node.style.display = 'none';
					_softDelete = true;
				}
			}else{
				this.node.remove();
				_softDelete = false;
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

			if(_node){
				WRAPPER.appendChild(_node.cloneNode(true));
				return WRAPPER.innerHTML;
			}else{
				return null;
			}
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


if(typeof define === 'function' && define.amd){
	define([], function(){return Synthes;} );
}
else if(typeof module === 'object' && module.exports){
	module.exports = Synthes;
}
if(win){
	win['Synthes'] = Synthes;
}


})(window);