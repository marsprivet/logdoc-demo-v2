import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Vault', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m5.267 5.267 1.8 1.8m1.866 0 1.8-1.8m-5.466 5.466 1.8-1.8m1.866 0 1.8 1.8M3.333 2h9.334C13.403 2 14 2.597 14 3.333v9.334c0 .736-.597 1.333-1.333 1.333H3.333A1.333 1.333 0 0 1 2 12.667V3.333C2 2.597 2.597 2 3.333 2Zm2 3a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0Zm6 0a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0Zm-6 6a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0Zm6 0a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0Zm-2-3a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
