import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('PackageOpen', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#package-open_svg__a)",
		children: jsx("path", {
			d: "M8 14.667v-6m5.333 0v2.58a1.373 1.373 0 0 1-.74 1.22l-4 2.053a1.287 1.287 0 0 1-1.186 0l-4-2.053a1.373 1.373 0 0 1-.74-1.22v-2.58m7.446-7.194a1.114 1.114 0 0 1 1.087 0L14 3.047a1.287 1.287 0 0 1 0 2.24L5.88 9.86a1.103 1.103 0 0 1-1.093 0L2 8.287a1.287 1.287 0 0 1 0-2.24l8.113-4.574ZM14 8.287a1.287 1.287 0 0 0 0-2.24l-8.113-4.58a1.093 1.093 0 0 0-1.087 0L2 3.047a1.287 1.287 0 0 0 0 2.24l8.12 4.573a1.09 1.09 0 0 0 1.087 0L14 8.287Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "package-open_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
