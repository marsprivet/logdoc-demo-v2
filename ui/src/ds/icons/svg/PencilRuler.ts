import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('PencilRuler', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#pencil-ruler_svg__a)",
		children: jsx("path", {
			d: "M8.667 4.667 5.8 1.8a1.607 1.607 0 0 0-2.267 0L1.8 3.533a1.607 1.607 0 0 0 0 2.267l2.867 2.867M5.333 4l1.334-1.333m5.333 8 1.333-1.334m-2-2L14.2 10.2c.627.627.627 1.64 0 2.267L12.467 14.2a1.601 1.601 0 0 1-2.267 0l-2.867-2.867m2.667-8L12.666 6m1.45-1.459a1.88 1.88 0 0 0-2.657-2.658l-8.898 8.9c-.155.154-.27.344-.333.553l-.88 2.901a.334.334 0 0 0 .415.415l2.902-.88c.208-.063.398-.177.553-.331l8.898-8.9Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "pencil-ruler_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
