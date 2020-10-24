// Reference: https://docs.beakerbrowser.com/apis/beaker.markdown#beakermarkdowntohtmlmd
const renderer = window.markdownit({
	allowHTML: false,
	useHeadingIds: false,
	useHeadingAnchors: false,
	hrefMassager: undefined,
	highlight: undefined
}) // Uses same options as Beaker: https://github.com/beakerbrowser/beaker/blob/master/app/bg/web-apis/bg/markdown.js
function toHTML(md) {
	return renderer.render(md)
}
export default toHTML