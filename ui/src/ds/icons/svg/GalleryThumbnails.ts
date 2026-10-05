import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('GalleryThumbnails', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 14h.666M6 14h.667m2.666 0H10m2.667 0h.666m-10-12h9.334C13.403 2 14 2.597 14 3.333V10c0 .736-.597 1.333-1.333 1.333H3.333A1.333 1.333 0 0 1 2 10V3.333C2 2.597 2.597 2 3.333 2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
