import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('MonitorSmartphone', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 5.333V4a1.333 1.333 0 0 0-1.334-1.333h-8A1.333 1.333 0 0 0 1.333 4v4.667A1.333 1.333 0 0 0 2.666 10H8m-1.334 2.667v-2.64 2.1m-2 .54H8M12 8h1.333c.736 0 1.333.597 1.333 1.333v4c0 .737-.597 1.334-1.333 1.334H12a1.333 1.333 0 0 1-1.334-1.334v-4C10.666 8.597 11.263 8 12 8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
