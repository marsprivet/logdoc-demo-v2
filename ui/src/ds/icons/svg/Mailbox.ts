import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Mailbox', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.333 3.333c-1.667 0-3 1.334-3 3v5a1.333 1.333 0 0 0 1.333 1.334h10.667a1.333 1.333 0 0 0 1.333-1.334V6c0-1.467-1.2-2.667-2.666-2.667H4.333Zm0 0c1.667 0 3 1.334 3 3v5A1.333 1.333 0 0 1 6 12.667M10 6h2v1.333m-8-.666h.666",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
