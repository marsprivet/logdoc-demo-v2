import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Pipelines', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [
		jsx("rect", {
			x: 2.667,
			y: 2.667,
			width: 10.667,
			height: 2.667,
			rx: .067,
			stroke: "inherit",
			strokeWidth: 1.333
		}),
		jsx("rect", {
			x: 2.667,
			y: 10.667,
			width: 10.667,
			height: 2.667,
			rx: .067,
			stroke: "inherit",
			strokeWidth: 1.333
		}),
		jsx("path", {
			d: "M4 5.667v4.666M10 6v4.667M10.667 2.667V5M10.667 11.333v2.334M12 5.667v4.666",
			stroke: "inherit",
			strokeWidth: 1.333
		})
	]
}),
);
