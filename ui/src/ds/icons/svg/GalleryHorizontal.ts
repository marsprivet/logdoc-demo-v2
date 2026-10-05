import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('GalleryHorizontal', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 2v12M14.666 2v12M5.333 2h5.333C11.403 2 12 2.597 12 3.333v9.334c0 .736-.597 1.333-1.334 1.333H5.333A1.333 1.333 0 0 1 4 12.667V3.333C4 2.597 4.597 2 5.333 2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
