let addclasslist = function(node, classlist){

	classlist.forEach(function(el){ node.classList.add(el); });

	return node;

};

export default addclasslist;