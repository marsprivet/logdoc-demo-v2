import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Function', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 12.087c1.81 0 2.533-.905 2.533-2.534v-3.8c0-1.81.905-2.986 2.896-2.714M2 6.839h5.157M14.666 7.563l-4.523 4.524M10.143 7.563l4.523 4.524",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
