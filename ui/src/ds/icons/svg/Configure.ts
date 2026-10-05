import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Configure', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M9.711 4.745a.576.576 0 0 0 0 .806l.922.922a.576.576 0 0 0 .806 0l2.17-2.171a3.455 3.455 0 0 1-4.572 4.572l-3.979 3.98a1.222 1.222 0 1 1-1.728-1.728l3.98-3.98a3.455 3.455 0 0 1 4.572-4.572L9.717 4.739l-.006.006Z",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M4 7 2.528 5.566a1.333 1.333 0 0 1-.013-1.898l.81-.81a1.333 1.333 0 0 1 1.992.119L5.334 3M10.75 10.988l1.18 1.178m0 0-.139.138a.833.833 0 0 0 1.179 1.178l.446-.445a.833.833 0 0 0-1.179-1.179l-.308.308Z",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round"
	})]
}),
);
