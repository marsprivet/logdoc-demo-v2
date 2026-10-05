import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('GalleryHorizontalEnd', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 4.667v6.666m2.667-8v9.334M8 2h5.333c.736 0 1.333.597 1.333 1.333v9.334c0 .736-.597 1.333-1.333 1.333H8a1.333 1.333 0 0 1-1.334-1.333V3.333C6.666 2.597 7.263 2 8 2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
