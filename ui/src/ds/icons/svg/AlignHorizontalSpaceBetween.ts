import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('AlignHorizontalSpaceBetween', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 1.333v13.334M14 1.333v13.334M3.333 3.333h1.334C5.403 3.333 6 3.93 6 4.667v6.666c0 .737-.597 1.334-1.333 1.334H3.333A1.333 1.333 0 0 1 2 11.333V4.667c0-.737.597-1.334 1.333-1.334Zm8 1.334h1.334C13.403 4.667 14 5.264 14 6v4c0 .736-.597 1.333-1.333 1.333h-1.334A1.333 1.333 0 0 1 10 10V6c0-.736.597-1.333 1.333-1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
