import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FolderCog', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.866 13.333h-4.2A1.333 1.333 0 0 1 1.333 12V3.333A1.333 1.333 0 0 1 2.666 2h2.6a1.333 1.333 0 0 1 1.127.6l.54.8a1.333 1.333 0 0 0 1.113.6h5.287a1.333 1.333 0 0 1 1.333 1.333v2.2m-.2 5.4-.6-.2m-3.733-1.466-.6-.2m1.533 3.4.2-.6m1.467-3.734.2-.6m.133 4.934L12.8 13.8m-1.6-3.6-.267-.667m-1.4 3.534.667-.267m3.6-1.6.666-.267M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
