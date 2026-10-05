import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BusFront', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m2.666 4-1.333.667M6.666 4h2.667m5.333.667L13.333 4M12 12.667c.736 0 1.333-.597 1.333-1.334v-8C13.333 2.597 12.736 2 12 2H4c-.737 0-1.334.597-1.334 1.333v8c0 .737.597 1.334 1.334 1.334m8 0H4m8 0V14m-8-1.333V14M2.666 7.333h10.667m-8 2.667h.007m5.326 0h.007",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
