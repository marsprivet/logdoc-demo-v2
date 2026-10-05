import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('PictureInPicture', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.333 3v3.333m0 0H2m3.333 0-4-4m12.667 4v-2C14 3.56 13.44 3 12.666 3H8M2 9v1.333c0 .7.633 1.334 1.333 1.334h2m4-2.667h4c.736 0 1.333.597 1.333 1.333v2c0 .737-.597 1.334-1.333 1.334h-4A1.333 1.333 0 0 1 8 12.333v-2C8 9.597 8.597 9 9.333 9Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
