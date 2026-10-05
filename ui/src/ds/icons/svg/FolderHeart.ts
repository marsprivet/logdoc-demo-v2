import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FolderHeart', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M7.333 13.333H2.666A1.333 1.333 0 0 1 1.333 12V3.333A1.333 1.333 0 0 1 2.666 2h2.6a1.333 1.333 0 0 1 1.127.6l.54.8a1.333 1.333 0 0 0 1.113.6h5.287a1.333 1.333 0 0 1 1.333 1.333v1m-5.4 5.3c-.8-.8-.76-1.866-.133-2.486a1.62 1.62 0 0 1 2.293 0l.24.226.227-.226a1.621 1.621 0 0 1 2.3-.007c.633.633.667 1.687-.133 2.493L11.666 14l-2.4-2.367Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
