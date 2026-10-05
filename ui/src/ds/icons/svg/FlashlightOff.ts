import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FlashlightOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#flashlight-off_svg__a)",
		children: jsx("path", {
			d: "M10.666 10.667v2.666a1.333 1.333 0 0 1-1.333 1.334H6.666a1.333 1.333 0 0 1-1.333-1.334V6.667C5.333 5.333 4 5.333 4 4m.666-2.667H12V4m0 0c0 1.333-1.334 1.333-1.334 2.667v.666M12 4H7.333m-6-2.667 13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "flashlight-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
