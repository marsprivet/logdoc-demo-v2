import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Line2', (c) =>
	jsx("svg", {
	width: 6,
	height: 2,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		d: "M.665.665h4.67"
	})
}),
);
