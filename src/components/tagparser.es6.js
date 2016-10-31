let tagpraser = function(str){

	let list = str.split('.');

	return {

		'NODE': list.shift(),

		'classlist': list,

	}

};

export default tagpraser;