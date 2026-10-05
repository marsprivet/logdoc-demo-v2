import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Feedback', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M13.75 6.414c0 2.164-1.11 4.164-2.181 4.164s-2.181-2-2.181-4.164c0-2.165 1.11-4.164 2.18-4.164 1.071 0 2.182 2 2.182 4.164Z",
		stroke: "inherit",
		strokeWidth: 1.33
	}), jsx("path", {
		d: "M11.569 10.578S4.828 9.19 4.034 8.99C3.241 8.793 2.25 7.754 2.25 6.414c0-1.34.991-2.38 1.784-2.578.794-.198 7.535-1.586 7.535-1.586M3.836 9.19v2.974c0 .876.71 1.586 1.586 1.586h.397c.876 0 1.586-.71 1.586-1.586V9.983",
		stroke: "inherit",
		strokeWidth: 1.33
	})]
}),
);
