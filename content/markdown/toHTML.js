// Reference: https://docs.beakerbrowser.com/apis/beaker.markdown#beakermarkdowntohtmlmd
const parser = new commonmark.Parser();
const renderer = new commonmark.HtmlRenderer(); // TODO: Tune based on beaker.markdown's outputs, using commonmark options
function toHTML(md) {
	return renderer.render(parser.parse(md))
}
export default toHTML