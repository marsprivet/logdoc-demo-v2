import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Scale', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.666 14h6.667M8 2v12M2 4.667h1.333C4.666 4.667 6.666 4 8 3.333c1.333.667 3.333 1.334 4.666 1.334H14m-3.334 6 2-5.334 2 5.334a3.339 3.339 0 0 1-4 0Zm-9.333 0 2-5.334 2 5.334a3.339 3.339 0 0 1-4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
