import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Wallet', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12.667 4.667v-2A.667.667 0 0 0 12 2H3.333A1.333 1.333 0 0 0 2 3.333m0 0a1.333 1.333 0 0 0 1.333 1.334h10a.667.667 0 0 1 .667.666V8M2 3.333v9.334A1.333 1.333 0 0 0 3.333 14h10a.666.666 0 0 0 .667-.667v-2.666M14 8h-2a1.333 1.333 0 1 0 0 2.667h2M14 8a.667.667 0 0 1 .667.667V10a.667.667 0 0 1-.667.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
