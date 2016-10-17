function animate(root, delay_root, delay_child) {
	var root = document.querySelector(root);
	root.setAttribute("style",`animation: fadein ${delay_root}ms;`);
	children = root.cloneNode(true).children
	while (root.hasChildNodes()) root.removeChild(root.lastChild)

	let a = addStyle(root, children, delay_child);
	a.next();
	let i = setInterval(() => {
		let gen = a.next();
		if (gen.done) clearInterval(i)
	}, delay_child);
}

function *addStyle(root, children, delay){
	for (var i = 0; i < children.length; i++) {
		if (children[i].nodeType === 1) children[i].setAttribute("style",`animation: fadein ${delay}ms;`);
		root.appendChild(children[i].cloneNode(true))
		yield i;
	}
}
