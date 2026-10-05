import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('LaptopMinimal', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 13.333h13.333M3.333 2.667h9.333C13.403 2.667 14 3.264 14 4v5.333c0 .737-.597 1.334-1.334 1.334H3.333A1.333 1.333 0 0 1 2 9.333V4c0-.736.597-1.333 1.333-1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
