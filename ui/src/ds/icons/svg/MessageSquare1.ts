import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('MessageSquare1', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12.667 1.333a2.002 2.002 0 0 1 2 2V10a2.002 2.002 0 0 1-2 2H4.942l-2.47 2.472A.668.668 0 0 1 1.333 14V3.333a2 2 0 0 1 2-2h9.334ZM5.665 7.67a.665.665 0 0 0 0 1.33h2.67a.666.666 0 0 0 0-1.33h-2.67Zm0-3a.665.665 0 0 0 0 1.33h4.67a.666.666 0 0 0 0-1.33h-4.67Z",
		fill: "#fff"
	})
}),
);
