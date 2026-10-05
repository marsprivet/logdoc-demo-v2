import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('UserRoundCog', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 14a5.334 5.334 0 0 1 6.956-5.08m4.71.613-.266.6m-1.467 3.734-.266.6M14.466 13l-.6-.267m-3.733-1.466-.6-.267m4.933 0-.6.267m-3.733 1.466-.6.267M13 14.467l-.267-.6m-1.467-3.734-.266-.6m-1-4.2a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0ZM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
