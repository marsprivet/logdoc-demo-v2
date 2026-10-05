import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('NotebookPen', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#notebook-pen_svg__a)",
		children: jsx("path", {
			d: "M8.933 1.333H4a1.333 1.333 0 0 0-1.334 1.334v10.666A1.333 1.333 0 0 0 4 14.667h8a1.333 1.333 0 0 0 1.333-1.334V8.4m-12-4.4H4M1.333 6.667H4M1.333 9.333H4M1.333 12H4m10.252-8.25a1.416 1.416 0 0 0-2.003-2.002l-3.34 3.341a1.333 1.333 0 0 0-.337.57l-.558 1.913a.333.333 0 0 0 .413.413l1.913-.558c.216-.062.411-.179.57-.337l3.342-3.34Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "notebook-pen_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
