import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BookImage', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m13.334 9.133-1.4-1.4a1.334 1.334 0 0 0-1.867 0l-3.6 3.6M2.667 13V3a1.667 1.667 0 0 1 1.667-1.667h8.333a.667.667 0 0 1 .667.667v12a.667.667 0 0 1-.667.667H4.334A1.667 1.667 0 0 1 2.667 13Zm0 0a1.667 1.667 0 0 1 1.667-1.667h9M8 5.333a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
