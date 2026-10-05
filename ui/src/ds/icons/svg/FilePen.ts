import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FilePen', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8.334 14.667H12a1.333 1.333 0 0 0 1.334-1.334V4.667L10 1.333H4a1.333 1.333 0 0 0-1.333 1.334V9m6.667-7.667V4a1.333 1.333 0 0 0 1.333 1.333h2.667m-4.415 5.084a1.416 1.416 0 1 0-2.003-2.002l-3.34 3.341a1.333 1.333 0 0 0-.337.57l-.558 1.913a.334.334 0 0 0 .413.413l1.914-.558c.215-.063.41-.179.569-.337l3.342-3.34Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
