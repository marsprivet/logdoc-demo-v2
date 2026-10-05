import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Music4', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 12V3.333L14 2v8.667M6 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8-1.333a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 6l8-1.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
