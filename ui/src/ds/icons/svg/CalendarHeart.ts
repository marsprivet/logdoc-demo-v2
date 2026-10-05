import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CalendarHeart', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 6.667h12V4a1.334 1.334 0 0 0-1.333-1.333H3.333A1.333 1.333 0 0 0 2 4v9.333a1.333 1.333 0 0 0 1.333 1.334H8M5.333 1.333V4m5.334-2.667V4m3.526 5.8a1.62 1.62 0 0 0-1.766-.347c-.2.08-.38.2-.534.354l-.226.226-.234-.226a1.62 1.62 0 0 0-2.293 0c-.633.626-.667 1.686.133 2.493l2.394 2.367 2.4-2.367c.8-.807.76-1.867.126-2.493V9.8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
