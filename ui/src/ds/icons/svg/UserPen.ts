import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('UserPen', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M7.667 10h-3A2.667 2.667 0 0 0 2 12.667V14m12.252-2.916a1.416 1.416 0 1 0-2.003-2.003l-2.673 2.675a1.333 1.333 0 0 0-.337.57l-.558 1.913a.333.333 0 0 0 .413.413l1.913-.558c.215-.063.411-.179.57-.337l2.675-2.673ZM9.333 4.667a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
