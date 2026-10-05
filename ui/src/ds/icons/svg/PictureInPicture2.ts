import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('PictureInPicture2', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14 6V4a1.333 1.333 0 0 0-1.334-1.333h-10A1.333 1.333 0 0 0 1.333 4v6.667c0 .733.6 1.333 1.333 1.333h2.667m4-3.333h4c.736 0 1.333.597 1.333 1.333v2c0 .736-.597 1.333-1.333 1.333h-4A1.333 1.333 0 0 1 8 12v-2c0-.736.597-1.333 1.333-1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
