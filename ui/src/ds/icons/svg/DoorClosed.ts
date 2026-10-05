import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('DoorClosed', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 13.333V4a1.333 1.333 0 0 0-1.334-1.333H5.333A1.333 1.333 0 0 0 4 4v9.333m-2.667 0h13.333M9.333 8v.007",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
