# Topology map: label legibility fix

**File changed:** `ui/src/Topology.tsx`
**Status:** implemented and manually verified locally (rebuilt Docker image, tested in browser). Not committed to git — this directory has no git repo initialized, so there's no diff/branch to hand off; the working tree already has the change.

## Problem

On the Topology tab, service labels overlapped each other and overlapped
rps/error-rate labels on edges, especially when hovering a node with many
connections (a "hub"). Two causes:

1. Every edge touching a hovered node showed its own rps/error-rate text
   label, so hovering a hub node could stack half a dozen near-identical
   labels on top of each other.
2. Plain `fillText` with no separation from the background meant labels
   blended into crossing edges and other labels.

## What changed

1. **Edge rate labels are no longer shown for every edge lit by a hovered
   node.** They now render only for: the exact edge under the cursor, the
   currently selected (clicked) edge, or an edge that's actively failing
   (error rate above threshold) — see `isHoverEdge` / `isSel` checks around
   the edge-drawing loop. This is what stopped the duplicate-label stacking.
2. **Node labels stayed in their original position** (below the node, two
   lines: service name, then `NN% err` on error nodes) — this was tried
   above the node at one point and reverted per feedback.
3. **Hover/selection now draws a black outline behind the label text**
   (`drawLabel()` helper, `ctx.strokeText` before `ctx.fillText`, 4px width,
   round joins) instead of a background chip (a solid rectangle behind the
   text was tried first and rejected — too much visual noise). Because the
   stroke is drawn first and the fill painted on top, only the outward half
   of the stroke stays visible, so it reads as a thin outside outline rather
   than thickened type.
4. **The outline applies to the whole highlighted branch**, not just the
   single node under the cursor — i.e. the hovered/selected node plus every
   neighbor node lit by that focus, so a whole highlighted subtree reads
   clearly against the dimmed rest of the graph.
5. **Edge rate labels get the same outline, on the same "whole branch"
   basis.** This was missed in the first pass: a failing edge's rate label
   is shown whenever it's lit by a hovered/selected node (not just when the
   edge itself is the literal hover target), but the outline condition
   originally only covered the literal hovered/selected edge. Fixed by
   reusing the edge's own `lit` flag (`lit || isHoverEdge`) instead of
   `isHoverEdge || isSel` — now any rate label rendered as part of the
   active focus gets outlined, same as the node labels.
6. **Clicking an edge's line (rather than hovering a node) dropped the
   outline on its two endpoint labels.** The node outline condition was
   `focusApp !== null && lit`, but `focusApp` only tracks node hover/
   selection — it stays `null` when you click directly on an edge's line
   without the mouse also sitting over a node. The two endpoint nodes were
   still `lit` (highlighted) in that state, just not outlined, so their
   labels looked flat again the instant the mouse left whichever node was
   last hovered. Fixed by also treating an active edge selection as a focus:
   `(focusApp !== null || sel?.kind === "edge") && lit`.

## Toolbar cleanup (separate from the label fix, same session)

The Topology tab's toolbar was also reworked for visual consistency with the
Logs tab and better use of space:

1. **`window` / `export` now use the `.sect` class** (monospace, 11px,
   letter-spaced) — the same treatment as `// period` / `// levels` on the
   Logs tab, instead of the plain `.muted` text style they had before.
2. **`Changes` moved next to `window`**, separated by a `|` (`.topo-sep`).
3. **`export` (Mermaid / Markdown links) moved to the top-right corner** of
   the toolbar, in a new `.topo-bar-right` flex group (`margin-left: auto`)
   — that's the spot the interaction hint used to occupy.
4. **The interaction hint** (`drag to pan · wheel to zoom · click a service
   or an edge · double-click to reset`) **moved below the canvas**,
   right-aligned (`.topo-hint-bottom`), instead of sharing the top toolbar
   row.

CSS: `ui/src/style.css` — `.topo-bar-right`, `.topo-sep`, `.topo-hint-bottom`
added, replacing the old `.topo-hint` rule (removed, no longer referenced).

5. **`.winbtn` buttons and links now share a fixed 24px height.** The
   Mermaid/Markdown export links (`<a class="winbtn">`) sat visibly taller
   than the window/Changes buttons (`<button class="winbtn">`) because a
   `<button>` and an `<a>` don't share default box metrics for the same
   padding — `<a>` is inline and sizes to its font's line box, `<button>`
   doesn't. Fixed by giving `.winbtn` an explicit `height: 24px`,
   `box-sizing: border-box`, `display: inline-flex`, `align-items: center`,
   and switching the padding from `4px 10px` to `0 10px` (vertical spacing
   now comes from the fixed height, not padding). `.winbtn` is shared by the
   Logs tab's period/level/density buttons too, so this also normalizes
   those — checked visually, no regression there.

## App-wide: "v2" badge moved next to the logo

Separate from the Topology work: the `v2` text (shown in the header,
replacing the login status when auth is off / dev mode) used to sit on the
far right of the header. Tried moving it to a site-wide footer bottom-left
first — reverted per feedback. It now sits directly next to the logo
(`.app-version` in `style.css`, monospace, `margin-left: -10px` to sit close
to the logo instead of getting the header's full 18px gap). Same visibility
condition as before (`me === "anon" || me.mode === "open"`), same
`App.tsx`.

## Files touched

- `ui/src/Topology.tsx` — canvas-based force-directed topology map component.
- `ui/src/style.css` — toolbar and footer layout classes for the changes above.
- `ui/src/App.tsx` — moved the `v2` badge from the header into a footer.

## To ship

```bash
cd ui && npm install && npm run build   # sanity-check the TS/build
cd ..
docker compose -f deploy/docker-compose.yml up -d --build logdoc
```

No backend/API changes — this is UI-only (canvas rendering logic in the
React component). No new dependencies were added.
