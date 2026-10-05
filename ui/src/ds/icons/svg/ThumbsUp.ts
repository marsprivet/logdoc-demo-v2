import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ThumbsUp', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#thumbs-up_svg__a)",
		children: jsx("path", {
			d: "M4.666 6.667v8M10 3.92l-.667 2.747h3.887a1.334 1.334 0 0 1 1.28 1.706l-1.554 5.334a1.333 1.333 0 0 1-1.28.96h-9a1.333 1.333 0 0 1-1.333-1.334V8a1.333 1.333 0 0 1 1.333-1.333h1.84a1.333 1.333 0 0 0 1.194-.74L8 1.333a2.087 2.087 0 0 1 2 2.587Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "thumbs-up_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
