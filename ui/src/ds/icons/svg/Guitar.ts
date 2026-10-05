import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Guitar', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#guitar_svg__a)",
		children: [jsx("path", {
			d: "M7.666 8.667a.333.333 0 1 0 0-.667.333.333 0 0 0 0 .667Z",
			fill: "#2A2E37"
		}), jsx("path", {
			d: "m7.933 8.067 3.01-3.01m0 0c.25-.25.39-.589.39-.942v-.896c0-.354.14-.693.39-.943l.743-.743a.667.667 0 0 1 .934 0L14.466 2.6a.666.666 0 0 1 0 .933l-.742.743c-.25.25-.59.39-.943.39h-.896c-.354 0-.693.141-.943.391ZM4 10.667 5.333 12m.133-5.4c.334-.733 1.067-1.267 1.867-1.267a3.3 3.3 0 0 1 3.333 3.334c0 .8-.533 1.533-1.266 1.866l-.6.267A1.334 1.334 0 0 0 8 12a2.667 2.667 0 0 1-2.667 2.667c-2.2 0-4-1.8-4-4A2.667 2.667 0 0 1 4 8a1.333 1.333 0 0 0 1.2-.8l.266-.6ZM8 8.333a.333.333 0 1 1-.667 0 .333.333 0 0 1 .667 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "guitar_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
