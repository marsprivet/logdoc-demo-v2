import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Podcast', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.233 12.387a6 6 0 1 0-6.466 0m.566-3.054a3.333 3.333 0 1 1 5.334 0m-2-2a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Zm0 4a.667.667 0 0 0-1.334 0l.334 3a.333.333 0 1 0 .666 0l.334-3Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
