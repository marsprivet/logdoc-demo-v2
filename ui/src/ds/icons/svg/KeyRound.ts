import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('KeyRound', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#key-round_svg__a)",
		children: [
			jsx("path", {
				d: "M11 5.333a.333.333 0 1 0 0-.666.333.333 0 0 0 0 .666Z",
				fill: "#2A2E37"
			}),
			jsx("path", {
				d: "M1.724 11.61c-.25.25-.39.588-.391.942V14a.667.667 0 0 0 .667.667h2A.667.667 0 0 0 4.666 14v-.667a.667.667 0 0 1 .667-.666H6A.667.667 0 0 0 6.666 12v-.667a.667.667 0 0 1 .667-.666h.115c.353 0 .692-.14.942-.391l.543-.543a4.333 4.333 0 1 0-2.667-2.666l-4.542 4.542Z",
				stroke: "inherit",
				strokeWidth: 1.33,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			jsx("path", {
				d: "M11 5.333a.333.333 0 1 0 0-.666.333.333 0 0 0 0 .666Z",
				stroke: "inherit",
				strokeWidth: 1.33,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "key-round_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
