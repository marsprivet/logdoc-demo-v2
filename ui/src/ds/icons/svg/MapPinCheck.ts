import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MapPinCheck', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12.954 8.623c.238-.644.38-1.303.38-1.956a5.333 5.333 0 1 0-10.667 0c0 3.328 3.693 6.795 4.933 7.866a.667.667 0 0 0 .801 0c.183-.159.364-.32.542-.486M10.667 12 12 13.333l2.667-2.666m-4.667-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
