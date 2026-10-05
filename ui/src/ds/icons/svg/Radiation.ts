import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Radiation', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 8h.007M5 2.8c-.2-.333-.6-.467-.866-.267-1.534 1.134-2.6 2.867-2.8 4.8C1.267 7.667 1.6 8 2 8h3.334c0-1 .533-1.867 1.333-2.267A199.516 199.516 0 0 1 5 2.8ZM14 8c.4 0 .667-.267.667-.667-.2-1.933-1.2-3.666-2.733-4.733-.267-.2-.734-.133-.867.2-.4.6-1 1.667-1.733 2.867A2.689 2.689 0 0 1 10.667 8H14Zm-9 5.2c-.2.333-.066.733.267.867 1.733.8 3.733.8 5.467 0 .333-.134.466-.534.266-.867-.333-.6-.933-1.667-1.666-2.867-.8.467-1.867.467-2.667 0A80.67 80.67 0 0 0 5 13.2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
