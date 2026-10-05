import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Webcam', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 12A5.333 5.333 0 1 0 8 1.333 5.333 5.333 0 0 0 8 12Zm0 0v2.667m-3.333 0h6.667m-1.334-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
