import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Croissant', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#croissant_svg__a)",
		children: jsx("path", {
			d: "m7 6.333-.667-1.526c-.2-.487-.467-.807-1-.807m0 0H3c-1.14 0-1.667.333-1.667 1.667a5.14 5.14 0 0 0 1.333 3.22M5.333 4c0-1.033.16-2.667-1.333-2.667C2.666 1.333 2.333 2.78 2.333 4m7.333 5 1.527.667c.487.2.807.466.807 1m0 0V13c0 1.14-.334 1.667-1.667 1.667a5.14 5.14 0 0 1-3.22-1.334M12 10.667c1.033 0 2.666-.16 2.666 1.333 0 1.333-1.446 1.667-2.666 1.667M3.066 8.74l3.86-2.14c1.26-.7 3.194 1.187 2.474 2.473l-2.147 3.874C5.866 15.44.526 10.153 3.066 8.74Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "croissant_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
