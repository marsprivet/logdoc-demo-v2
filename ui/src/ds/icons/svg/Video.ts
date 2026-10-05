import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Video', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m10.666 8.667 3.482 2.321a.333.333 0 0 0 .518-.277V5.247a.332.332 0 0 0-.501-.288L10.666 7m-8-3h6.667c.736 0 1.333.597 1.333 1.333v5.334c0 .736-.597 1.333-1.333 1.333H2.666a1.333 1.333 0 0 1-1.333-1.333V5.333C1.333 4.597 1.93 4 2.666 4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
