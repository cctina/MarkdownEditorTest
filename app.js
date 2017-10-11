var app = new Vue({
	el: '#editor',
	data: {
		text: "# hello",
		compiled: "<h1>hello<h1>"
	},
	watch: {
		// text() {
		// 	this.compiled = marked(this.text, { sanitize: true });
		// }
		text: _.debounce(function (val){
			app.compiled = marked(val, { sanitize: true });
		}, 300)
	}
});