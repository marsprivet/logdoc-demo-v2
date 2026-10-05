import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Recycle', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.667 12.667H3.21a1.22 1.22 0 0 1-1.046-.588 1.19 1.19 0 0 1-.003-1.189l2.637-4.557m0 0 .73 2.731m-.73-2.73-2.731.731m5.266 5.602h5.47a1.221 1.221 0 0 0 1.036-.594 1.189 1.189 0 0 0 0-1.183l-.817-1.413m-5.689 3.19 2-2m-2 2 2 2M6.23 3.874l.73-1.261A1.22 1.22 0 0 1 7.99 2a1.19 1.19 0 0 1 1.03.592l2.63 4.562m0 0-2.731-.732m2.73.732.732-2.73",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
