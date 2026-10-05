import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Ellipse192', (c) =>
	jsx("svg", {
	width: 10,
	height: 5,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("ellipse", {
		cx: 5,
		cy: 2.5,
		rx: 4.285,
		ry: 1.786,
		stroke: "inherit",
		strokeWidth: 1.333
	})
}),
);
