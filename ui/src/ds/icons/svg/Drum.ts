import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Drum', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#drum_svg__a)",
		children: jsx("path", {
			d: "m1.333 1.333 5.333 5.334m8-5.334L9.333 6.667M14.666 6c0 1.84-2.984 3.333-6.666 3.333M14.666 6c0-1.841-2.984-3.333-6.666-3.333-3.682 0-6.667 1.492-6.667 3.333m13.333 0v5.333c0 .884-.702 1.732-1.952 2.357-1.25.626-2.946.977-4.714.977m0-5.334C4.318 9.333 1.333 7.841 1.333 6M8 9.333v5.334M1.333 6v5.333c0 .884.702 1.732 1.953 2.357 1.25.626 2.946.977 4.714.977M4.666 8.933V14.2m6.667-5.267V14.2",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "drum_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
