define render =
	cat templates/index_pre.html > index.tmp.html
	for SVG in `ls -v docs/*.svg`; do
		NUM=`basename $SVG .svg`;
		sed s/__NUM__/$NUM/g templates/piece.html > docs/$NUM.html
		cat templates/index_row.html | sed s/__NUM__/$NUM/g >> index.tmp.html
		wc -l docs/$NUM.html
	done
	cat templates/index_post.html >> index.tmp.html
	mv index.tmp.html docs/index.html
endef

pack:
	node node_modules/webpack/bin/webpack.js --watch

render: ; $(value render)

.ONESHELL: