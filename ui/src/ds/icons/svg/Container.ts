import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Container', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#container_svg__a)",
		children: jsx("path", {
			d: "M6.666 14.6V9.333m0 0L1.4 6.067m5.266 3.266 7.934-4.6M9.333 13.2V7.8M12 11.667v-5.4m2.666-1.134c0-.4-.266-.8-.533-1l-4.2-2.6a1.147 1.147 0 0 0-1.133 0l-6.867 4c-.333.134-.6.534-.6.934v4.4c0 .333.267.8.533 1l4.2 2.6a1.146 1.146 0 0 0 1.134 0l6.866-4c.334-.2.6-.667.6-1V5.133Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "container_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
