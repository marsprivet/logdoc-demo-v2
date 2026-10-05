import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Wallpaper', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m6 11.333 4.066-4.066a1.333 1.333 0 0 1 1.874.006L14.666 10m0 0V3.333A1.333 1.333 0 0 0 13.333 2H2.666a1.333 1.333 0 0 0-1.333 1.333V10a1.333 1.333 0 0 0 1.333 1.333h10.667A1.333 1.333 0 0 0 14.666 10Zm-9.333 4h5.333M8 11.333V14M6.666 6A1.333 1.333 0 1 1 4 6a1.333 1.333 0 0 1 2.666 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
