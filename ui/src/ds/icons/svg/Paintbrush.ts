import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Paintbrush', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#paintbrush_svg__a)",
		children: jsx("path", {
			d: "M9.748 11.931 2.628 9.99M6 5.333C4.797 7.14 3.353 7.64 1.61 7.965a.338.338 0 0 0-.201.546l4.88 5.922a.666.666 0 0 0 .79.136c1.41-.966 3.587-3.374 3.587-4.569m1.584-8.252a1.415 1.415 0 1 1 2 2.001l-2.678 2.68a.333.333 0 0 0 0 .471l.63.63a1.607 1.607 0 0 1 0 2.271l-.63.63a.333.333 0 0 1-.471 0L5.569 4.899a.333.333 0 0 1 0-.472l.63-.629a1.607 1.607 0 0 1 2.272 0l.629.63a.333.333 0 0 0 .471 0l2.68-2.68Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "paintbrush_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
