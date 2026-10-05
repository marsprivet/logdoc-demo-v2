import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('AlignVerticalDistributeStart', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 9.333h13.333M1.333 2.667h13.333m-10 6.666h6.667c.736 0 1.333.597 1.333 1.334V12c0 .736-.597 1.333-1.333 1.333H4.666A1.333 1.333 0 0 1 3.333 12v-1.333c0-.737.597-1.334 1.333-1.334ZM6 2.667h4c.736 0 1.333.597 1.333 1.333v1.333c0 .737-.597 1.334-1.333 1.334H6a1.333 1.333 0 0 1-1.334-1.334V4c0-.736.597-1.333 1.334-1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
