import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('PhoneForwarded', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#phone-forwarded_svg__a)",
		children: jsx("path", {
			d: "M12 1.333 14.667 4m0 0L12 6.667M14.667 4H9.334m5.333 7.28v2a1.333 1.333 0 0 1-1.453 1.333 13.194 13.194 0 0 1-5.754-2.046 13.001 13.001 0 0 1-4-4 13.193 13.193 0 0 1-2.046-5.78A1.333 1.333 0 0 1 2.74 1.333h2A1.333 1.333 0 0 1 6.074 2.48a8.56 8.56 0 0 0 .466 1.873 1.333 1.333 0 0 1-.3 1.407l-.846.847a10.667 10.667 0 0 0 4 4l.846-.847a1.333 1.333 0 0 1 1.407-.3 8.56 8.56 0 0 0 1.873.467 1.333 1.333 0 0 1 1.147 1.353Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "phone-forwarded_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
