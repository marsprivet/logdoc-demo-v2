import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('LibraryBig', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.667 2v12m-2-12h4c.368 0 .666.298.666.667v10.666a.667.667 0 0 1-.666.667h-4A.667.667 0 0 1 2 13.333V2.667C2 2.298 2.298 2 2.667 2ZM13.6 12.6c.133.333-.067.733-.4.867l-1.267.466c-.333.134-.733-.066-.866-.4L7.4 3.4c-.133-.333.067-.733.4-.867l1.267-.466c.333-.134.733.066.866.4L13.6 12.6Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
