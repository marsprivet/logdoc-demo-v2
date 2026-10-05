import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('CloudSnow', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 9.933a4.667 4.667 0 1 1 7.806-4.6h1.194a3 3 0 0 1 1.666 5.495m-8-.828h.007m-.007 2.667h.007M8 11.333h.007M8 14h.007m2.66-4h.006m-.006 2.667h.006",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
