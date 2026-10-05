import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('KeyboardMusic', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 5.333h2.666m2.667 0h.007m2.66 0h.006M1.333 8h13.333M4 8v2.667M6.666 8v2.667M9.333 8v2.667M12 8v2.667m-9.334-8h10.667c.736 0 1.333.597 1.333 1.333v8c0 .736-.597 1.333-1.333 1.333H2.666A1.333 1.333 0 0 1 1.333 12V4c0-.736.597-1.333 1.333-1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
