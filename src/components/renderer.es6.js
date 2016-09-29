/*
*/
import TAGS from './tags';

const renderer = function(template = null){

	if(!template) return null;

	const createNode = function(template){

		const n = (node = 'span') => document.createElement(node);
		
		const TAG = Object.keys(template)[0];

		const node = n(TAG);

		/*
		trying to make node from {node:content} template
		*/
		if(typeof template[TAG] == 'string' || template[TAG] == null){

			node.innerHTML = template[TAG] || '';

			return node;

		};

		/*
		trying to make node from {node:[child,..]} template
		*/
		if(template[TAG] instanceof Array){

			for(let k in template[TAG]){

				if(template[TAG][k].isSynthes && template[TAG][k].node){

					node.appendChild(template[TAG][k].node);

				}else{

					node.appendChild(createNode(template[TAG][k]));

				}

			}

			return node;

		/*
		trying to make node from {node:{ attr:'',.. child:{},.. child:[],.. child:'' }} template
		*/
		}else if(template[TAG] instanceof Object){

			for(let k in template[TAG]){

				if(k != 'content'){

					//Nested children
					if((template[TAG][k] instanceof Object) || (template[TAG][k] instanceof Array)){

						if(template[TAG][k].isSynthes && template[TAG][k].node){

							node.appendChild(template[TAG][k].node); //if its Synthes object

						}else{

							node.appendChild(createNode({ [k]: template[TAG][k] })); //some magic ;)

						}

					//child or attribute
					}else if(typeof template[TAG][k] == 'string'){

						if( !!( TAGS.indexOf(k)+1 ) ){

							//if it can be a node. Like nodes in TAGS
							node.appendChild(createNode({ [k]: template[TAG][k] })); //some magic ;)

						}else{

							//totaly its a attribute
							node.setAttribute(k, template[TAG][k]);

						}

					}

				}

			};

		}

		/*
		trying to make content if ARRAY
		*/
		if(template[TAG]['content'] instanceof Array){

			for(let k in template[TAG]['content']){

				if(template[TAG]['content'][k].isSynthes && template[TAG]['content'][k].node){

					node.appendChild(template[TAG]['content'][k].node);

				}else{

					node.appendChild(createNode(template[TAG]['content'][k]));

				}

			}

		}else

		/*
		trying to make content if OBJECT
		*/
		if(template[TAG]['content'] instanceof Object){

			/*
			if object in content is Synthes object
			*/
			if(template[TAG]['content'].isSynthes && template[TAG]['content'].node){

				node.appendChild(template[TAG]['content'].node);

			}else{

				/*
				if object in content is assoc-array template
				*/
				let n = Object.keys(template[TAG]['content'])[0];

				if(template[TAG]['content'][n] instanceof Object){

					for(let t in template[TAG]['content']){

						node.appendChild(createNode({ [t]: template[TAG]['content'][t] })); //some magic ;)

					}

				}else{

					node.appendChild(createNode(template[TAG]['content']));

				}
				
			}

			return node;

		}else

		/*
		trying to make content if STRING
		*/
		if(typeof template[TAG]['content'] == 'string'){

			node.innerHTML = template[TAG]['content'];

		}

		return node;

	};

	return createNode(template);

};

export default renderer;

/*
*/