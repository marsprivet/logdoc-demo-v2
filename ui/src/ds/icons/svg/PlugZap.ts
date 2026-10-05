import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('PlugZap', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m1.333 14.667 2-2M5 9l1.666-1.667M7 11l1.666-1.667M12 2 9.333 4.667h4l-2.667 2.666m-6.466 6.2a1.6 1.6 0 0 0 2.266 0L8 12 4 8 2.466 9.533a1.6 1.6 0 0 0 0 2.267L4.2 13.533Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
