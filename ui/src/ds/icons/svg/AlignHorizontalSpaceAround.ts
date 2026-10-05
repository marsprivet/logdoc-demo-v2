import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('AlignHorizontalSpaceAround', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 14.667V1.333m10.667 13.334V1.333m-6 3.334h1.333C9.403 4.667 10 5.264 10 6v4c0 .736-.597 1.333-1.333 1.333H7.334A1.333 1.333 0 0 1 6 10V6c0-.736.597-1.333 1.334-1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
