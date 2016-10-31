import tagparser from './tagparser.es6';
import addclasslist from './addclasslist.es6';

const renderer = function(template = null){

	if(typeof template != 'object') return null;

	const createNode = function(template = null){

		const n = (node = 'span') => document.createElement(node);

		const TAG = Object.keys(template)[0];
		
		const { NODE, classlist } = tagparser( TAG );

		const node = n(NODE);

		/*
		trying to make node from {node:content} template
		*/
		if(typeof template[TAG] == 'string' || template[TAG] == null){

			node.innerHTML = template[TAG] || '';

			return addclasslist(node, classlist);

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

			return addclasslist(node, classlist);

		/*
		trying to make node from {node:{ attr:'',.. node:{},.. node:[],.. node:'' }} template
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

						//if it can be a node. Attributes must start with @
						if( k[0] == '$' ){

							node.appendChild(createNode({ [k.slice(1)]: template[TAG][k] })); //some magic ;)

						}else{

							//totaly its a attribute
							node.setAttribute(k, template[TAG][k]);

						}

					}

				}

			};

		}

		/*
		if exist "content"
		*/
		if(template[TAG]['content']){

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

				return addclasslist(node, classlist);

			}else

			/*
			trying to make content if STRING
			*/
			if(typeof template[TAG]['content'] == 'string'){

				node.innerHTML = template[TAG]['content'];

			}

		}
		
		return addclasslist(node, classlist);

	};

	return createNode(template);

};

export default renderer;

/*
*/