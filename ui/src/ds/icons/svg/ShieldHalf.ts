import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ShieldHalf', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 1.333a.78.78 0 0 0-.506.187c-1.16 1.013-2.827 1.813-4.16 1.813A.667.667 0 0 0 2.667 4v4.667c0 3.333 2.333 5 5.113 5.96a.667.667 0 0 0 .447.006C11 13.667 13.334 12 13.334 8.667V4a.667.667 0 0 0-.667-.667c-1.333 0-2.993-.793-4.16-1.813A.78.78 0 0 0 8 1.333Zm0 0v13.334",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
