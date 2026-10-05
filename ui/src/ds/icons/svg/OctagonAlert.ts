import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('OctagonAlert', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#octagon-alert_svg__a)",
		children: jsx("path", {
			d: "M8 10.667h.006M8 5.333V8m2.208-6.667c.353 0 .692.14.942.391l3.126 3.125c.25.25.39.59.39.943v4.416c0 .354-.14.693-.39.943l-3.126 3.125c-.25.25-.589.39-.942.39H5.792c-.354 0-.693-.14-.943-.39l-3.125-3.125c-.25-.25-.39-.59-.391-.943V5.792c0-.354.14-.693.39-.943L4.85 1.724c.25-.25.59-.39.943-.39h4.416Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "octagon-alert_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
