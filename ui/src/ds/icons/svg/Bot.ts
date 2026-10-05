import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Bot', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 5.333V2.667H5.333m-4 6.666h1.333m10.667 0h1.333M10 8.667V10M6 8.667V10M4 5.333h8c.736 0 1.333.597 1.333 1.334V12c0 .736-.597 1.333-1.333 1.333H4A1.333 1.333 0 0 1 2.666 12V6.667c0-.737.597-1.334 1.334-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
