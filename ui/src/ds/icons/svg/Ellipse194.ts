import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Ellipse194', (c) =>
	jsx("svg", {
	width: 2,
	height: 1,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("ellipse", {
		cx: 1,
		cy: .417,
		rx: 1,
		ry: .417,
		fill: "#fff"
	})
}),
);
