import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('AlignVerticalDistributeCenter', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14.666 11.333h-2m2-6.666h-3.333m-8 6.666h-2m3.333-6.666H1.333m3.333 4.666h6.667c.736 0 1.333.597 1.333 1.334V12c0 .736-.597 1.333-1.333 1.333H4.666A1.333 1.333 0 0 1 3.333 12v-1.333c0-.737.597-1.334 1.333-1.334ZM6 2.667h4c.736 0 1.333.597 1.333 1.333v1.333c0 .737-.597 1.334-1.333 1.334H6a1.333 1.333 0 0 1-1.334-1.334V4c0-.736.597-1.333 1.334-1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
