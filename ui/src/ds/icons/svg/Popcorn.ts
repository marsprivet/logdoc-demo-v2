import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Popcorn', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 5.333a1.333 1.333 0 1 0 0-2.666 1.334 1.334 0 0 0-2.667 0 1.333 1.333 0 0 0-2.666 0 1.333 1.333 0 1 0-2.667 0 1.333 1.333 0 0 0 0 2.666m2.667 9.334L6 5.333m3.333 9.334L10 5.333m3.333 0c.334 0 .6.267.534.667l-1.734 8c-.066.333-.466.667-.8.667H4.667a.792.792 0 0 1-.8-.667L2.133 6c-.066-.4.2-.667.534-.667h10.666Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
