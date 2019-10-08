define render =
	for SVG in `ls docs/*.svg`; do
		NUM=`basename $SVG .svg`;
		sed s/__NUM__/$NUM/g template.html > docs/$NUM.html
		wc -l docs/$NUM.html
	done
endef

pack:
	node node_modules/webpack/bin/webpack.js --watch

render: ; $(value render)

.ONESHELL: