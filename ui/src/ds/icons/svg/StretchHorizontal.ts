import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('StretchHorizontal', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M13.333 2.667H2.666c-.736 0-1.333.597-1.333 1.333v1.333c0 .737.597 1.334 1.333 1.334h10.667c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333ZM13.333 9.333H2.666c-.736 0-1.333.597-1.333 1.334V12c0 .736.597 1.333 1.333 1.333h10.667c.736 0 1.333-.597 1.333-1.333v-1.333c0-.737-.597-1.334-1.333-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
