# Patterns

Compose these before inventing layout. Each file starts with a “use this when…” comment.

`CheckoutLink` is the only way to send someone to buy. `CheckoutPrefetch` warms those checkouts and shows the loading screen on this site. `BookingFrame` is the only way to embed a schedule — it owns the height handshake with Arketa. `Photo` is the only way to place an image, and its `widths` must match files that exist in `public/img/`. `VideoBackdrop` is the looping hero video — people who asked the page not to move see the still instead. `JsonLd` prints search markup derived from content.
