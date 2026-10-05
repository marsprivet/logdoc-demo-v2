import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Syringe', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#syringe_svg__a)",
		children: jsx("path", {
			d: "M12 1.333 14.666 4m-3.333.667 2-2M12.666 6 5.8 12.867c-.667.666-1.667.666-2.267 0l-.4-.4c-.667-.667-.667-1.667 0-2.267L10 3.333m-4 4L8.666 10m-5.333 2.667-2 2m8-12 4 4",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "syringe_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
