import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('GalleryVertical', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 1.333h12M2 14.667h12M3.333 4h9.334C13.403 4 14 4.597 14 5.333v5.334c0 .736-.597 1.333-1.333 1.333H3.333A1.333 1.333 0 0 1 2 10.667V5.333C2 4.597 2.597 4 3.333 4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
