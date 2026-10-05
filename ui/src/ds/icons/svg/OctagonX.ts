import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('OctagonX', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#octagon-x_svg__a)",
		children: jsx("path", {
			d: "m10 6-4 4m0-4 4 4m-8.276 1.15c-.25-.25-.39-.588-.391-.942V5.792c0-.354.14-.693.39-.943L4.85 1.724c.25-.25.59-.39.943-.39h4.416c.353 0 .692.14.942.39l3.126 3.125c.25.25.39.59.39.943v4.416c0 .354-.14.693-.39.943l-3.126 3.125c-.25.25-.589.39-.942.39H5.792c-.354 0-.693-.14-.943-.39l-3.125-3.125Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "octagon-x_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
