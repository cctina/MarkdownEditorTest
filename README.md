# Vue.js exercises

## Examples
These exercises are refered to examples from [vuejs.org](https://vuejs.org).
### 1. [Markdown Editor](https://vuejs.org/v2/examples/index.html)
Follow the example, I use 3rd-party libraries [marked](https://github.com/chjj/marked) and [loadsh](https://lodash.com/).
- marked: to compile markdown text into html format.
- lodash: to delay the requests (text input) by the `rebounce` function.

##### Questions
1. Why use `v-bind` & set a `method` as a listener for input event for the textarea? (vuejs.org example)
1. How about using `v-model` & `watch`? (my code)
1. Are these 2 have the same ovehead & performance?

For the 3 questions above, they could be one answer.
- `v-model`: is a syntax sugar for data input events. we can also listen to `input` events and update to the data instead.
	- So, yes, we can use `v-model` for `<textarea>`. See it [here](https://vuejs.org/v2/guide/forms.html#Multiline-text).
	- > `v-model` is essentially syntax sugar for updating data on user input events, plus special care for some edge cases.
	- > For languages that require an IME (Chinese, Japanese, Korean etc.), you’ll notice that `v-model` doesn’t get updated during IME composition. If you want to cater for these updates as well, use `input` event instead.
	- See these above here: [Form Input Bindings](https://vuejs.org/v2/guide/forms.html).
- `v-bind`: one-way binding the DOM attribute(s) to the data we choose.
	- data flow: `vm.xxx` (updated) ----> DOM attribute (access)
	- If we need to update value back to `vm.xxx`, rigister a event listener to get value updated back to `vm.xxx`.


