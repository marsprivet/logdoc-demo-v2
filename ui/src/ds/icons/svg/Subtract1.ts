import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Subtract1', (c) =>
	jsx("svg", {
	width: 14,
	height: 14,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.9 0A2.101 2.101 0 0 1 14 2.1v7a2.101 2.101 0 0 1-2.1 2.1H3.79l-2.594 2.595A.701.701 0 0 1 0 13.3V2.1A2.1 2.1 0 0 1 2.1 0h9.8ZM4.548 6.653a.698.698 0 0 0 0 1.397h2.804a.699.699 0 0 0 0-1.397H4.548Zm0-3.15a.698.698 0 0 0 0 1.397h4.904a.699.699 0 0 0 0-1.396H4.548Z",
		fill: "#fff"
	})
}),
);
