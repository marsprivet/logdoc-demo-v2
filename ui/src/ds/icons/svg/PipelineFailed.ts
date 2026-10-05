import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('PipelineFailed', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M2 7.333c0-2.514 0-3.77.781-4.552C3.562 2 4.819 2 7.333 2h1.334c2.514 0 3.77 0 4.552.781C14 3.562 14 4.819 14 7.333v1.334c0 2.514 0 3.77-.781 4.552-.781.781-2.038.781-4.552.781H7.333c-2.514 0-3.77 0-4.552-.781C2 12.438 2 11.181 2 8.667V7.333Z",
		fill: "#E5484D",
		stroke: "#E5484D",
		strokeWidth: 1.333
	}), jsx("path", {
		d: "m10 6-4 4M6 6l4 4",
		stroke: "#0B0C0E",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
