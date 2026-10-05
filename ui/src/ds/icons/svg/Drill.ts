import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Drill', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#drill_svg__a)",
		children: jsx("path", {
			d: "M12 4h2.666M9.333 2.667h2a.667.667 0 0 1 .667.666v1.334a.667.667 0 0 1-.667.666h-2m-6 1.334L2 12m0 0c-.4 0-.667.267-.667.667 0 1.133.867 2 2 2h3.333c.4 0 .667-.267.667-.667v-1.333c0-.4-.267-.667-.667-.667H2Zm6-5.333v2c0 .4-.267.666-.667.666h-2M4.666 12 6 6.667M9.333 6c0 .4-.267.667-.667.667h-6a1.333 1.333 0 0 1-1.333-1.334V2.667a1.333 1.333 0 0 1 1.333-1.334h6c.4 0 .667.267.667.667v4Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "drill_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
