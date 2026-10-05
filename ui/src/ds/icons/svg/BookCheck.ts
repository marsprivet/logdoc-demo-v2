import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BookCheck', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 13V3a1.667 1.667 0 0 1 1.667-1.667h8.333a.667.667 0 0 1 .667.667v12a.667.667 0 0 1-.667.667H4.334A1.667 1.667 0 0 1 2.667 13Zm0 0a1.667 1.667 0 0 1 1.667-1.667h9M6 6.333l1.334 1.334L10 5",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
