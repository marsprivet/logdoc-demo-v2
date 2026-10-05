import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('PaintBucket', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#paint-bucket_svg__a)",
		children: jsx("path", {
			d: "m3.333 1.333 3.334 3.334m-5.334 4h10m1.334-1.334L7.333 2 1.6 7.733a1.333 1.333 0 0 0 0 1.867l3.467 3.467a1.289 1.289 0 0 0 1.866 0l5.734-5.734Zm2 6a1.333 1.333 0 1 1-2.667 0c0-1.066 1.133-1.6 1.333-2.666.2 1.066 1.334 1.6 1.334 2.666Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "paint-bucket_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
