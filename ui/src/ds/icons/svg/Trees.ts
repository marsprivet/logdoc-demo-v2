import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Trees', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.666 10.667v4m4-2v2m-.666-2h5.533A.667.667 0 0 0 14 11.533l-2-2.2h.2a.667.667 0 0 0 .466-1.133l-2-2.2h.134a.667.667 0 0 0 .533-1.133L8.666 2l-.933 1M6.666 6.667V6.8a2 2 0 0 1-.733 3.867h-2.6A2 2 0 0 1 2.666 6.8v-.133a2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
