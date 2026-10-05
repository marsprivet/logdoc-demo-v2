import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BeanOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#bean-off_svg__a)",
		children: jsx("path", {
			d: "M6 6c-.427.427-1.014.636-1.602.777a4 4 0 0 0 .935 7.89 9.305 9.305 0 0 0 6.6-2.734M7.166 3.395a4 4 0 0 1 7.5 1.938c0 1.608-.406 3.12-1.122 4.44M3.56 7.08a2.667 2.667 0 0 0 4.325.805M7.08 3.561c.606.269 1.09.754 1.36 1.36M1.332 1.333l13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "bean-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
