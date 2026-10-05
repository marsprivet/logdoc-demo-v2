import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Car', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12.666 11.333H14c.4 0 .666-.266.666-.666v-2c0-.6-.466-1.134-1-1.267-1.2-.333-3-.733-3-.733S9.8 5.733 9.2 5.133c-.334-.266-.734-.466-1.2-.466H3.333c-.4 0-.733.266-.933.6L1.466 7.2a2.467 2.467 0 0 0-.133.8v2.667c0 .4.267.666.667.666h1.333m9.333 0a1.333 1.333 0 1 1-2.666 0m2.666 0a1.333 1.333 0 1 0-2.666 0m-6.667 0a1.333 1.333 0 1 0 2.667 0m-2.667 0a1.333 1.333 0 1 1 2.667 0m0 0h4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
