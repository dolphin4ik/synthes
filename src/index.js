/*
Synthes
author: denyzhirkov@yandex.ru, @dolphin4ik 
*/

import renderer from './components/renderer.es6';

let Synthes = function(template = null, sandbox = null){

	const SHADOW = {
		template: template || null,
		sandbox: ((sandbox && sandbox.nodeType == 1)? sandbox : (typeof sandbox == 'string')? document.querySelectorAll(sandbox)[0] : null),
		node: ((template)? renderer(template) : null),
		WRAPPER: document.createElement('wrapper'),
		string: null,
		softDelete: false,
		isRendered: false
	};

	SHADOW.softDeleteDisplay = (SHADOW.node)?((SHADOW.node.style.display.length == 0)? 'block' : SHADOW.node.style.display): 'block';
	if(SHADOW.node){

		SHADOW.WRAPPER.appendChild(SHADOW.node.cloneNode(true));

		SHADOW.string = SHADOW.WRAPPER.innerHTML;

	};

	let synthes = {

		render(){

			if(SHADOW.sandbox && SHADOW.node){

				if(!SHADOW.softDelete){

					if(SHADOW.sandbox.appendChild(SHADOW.node)){

						SHADOW.isRendered = true;

					}

				}else{

					this.node.style.display = SHADOW.softDeleteDisplay;
					SHADOW.softDelete = false;

				}

			}

			return this;

		},
		bind(sandbox){

			SHADOW.sandbox = (sandbox && sandbox.nodeType == 1)? sandbox : null;
			if(SHADOW.isRendered){
				this.render();
			}
			return this;

		},
		delete(soft = false){

			if(!soft){
				if(this.node){
					this.node.style.display = 'none';
					SHADOW.softDelete = true;
				}
			}else{
				this.node.remove();
				SHADOW.softDelete = false;
			}

			return this;

		},
		node: null,
		string: null,
		template: SHADOW.template,
		isSynthes: true

	};

	Object.defineProperty(synthes, 'template', {

		set(v){

			SHADOW.template = v;
			let temp_node = renderer(SHADOW.template);
			if(SHADOW.isRendered){
				if(temp_node){
					SHADOW.node.parentNode.insertBefore(temp_node, SHADOW.node);
				}
				SHADOW.node.remove();
				SHADOW.isRendered = false;
			}
			SHADOW.node = temp_node;
			temp_node = null;
			SHADOW.WRAPPER.innerHTML = '';
			if(SHADOW.node){
				SHADOW.WRAPPER.appendChild(SHADOW.node.cloneNode(true));
				SHADOW.string = SHADOW.WRAPPER.innerHTML;
			}else{
				SHADOW.string = null;
			}

		},
		get(){ return SHADOW.template; },
		configurable: false

	});

	Object.defineProperty(synthes, 'sandbox', {

		set(v){

			SHADOW.sandbox = (v.nodeType == 1)? v : null;
			SHADOW.node.remove();
			
			if(SHADOW.isRendered){
				this.render();
			}

		},
		get(){ return SHADOW.sandbox; },
		configurable: false

	});

	Object.defineProperty(synthes, 'node', {

		set(){},
		get(){ return SHADOW.node; },
		configurable: false

	});

	Object.defineProperty(synthes, 'string', {

		set(){},
		get(){ return SHADOW.string; },
		configurable: false

	});

	Object.defineProperty(synthes, 'isSynthes', {

		value: true,
		writable: false,
		configurable: false

	});

	return synthes;

};

export default Synthes;
