function animate(root, delay_root, delay_child) {
	let children = $(root).children().clone()
	$(root).children().remove()
	$(root).attr('style', 'opacity: 0;')
	$(root).animate({ opacity: 1}, delay_root);

	let a = addStyle(root, children, delay_child);
	a.next();
	let i = setInterval(() => {
		let gen = a.next();
		if (gen.done) clearInterval(i)
	}, delay_child);
}

function *addStyle(root, children, delay){
	for (var i = 0; i < children.length; i++) {
		$(children[i]).attr('style', 'opacity: 0;')
		$(children[i]).animate({ opacity: 1}, delay)
		$(root).append(children[i])
		yield i;
	}
}
