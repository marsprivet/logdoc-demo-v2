import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('UserRoundPen', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 14a5.333 5.333 0 0 1 7.214-4.991m5.705 2.075a1.416 1.416 0 0 0-2.003-2.003l-2.673 2.675a1.333 1.333 0 0 0-.338.57l-.558 1.913a.333.333 0 0 0 .414.413l1.913-.558c.215-.063.41-.179.57-.337l2.675-2.673ZM10 5.334a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
