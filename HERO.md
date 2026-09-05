# Astramize hero

The hero is a server-rendered component in `app/hero.tsx`, with isolated styles in `app/hero.module.css`. The final homepage contains the hero and the meaning chapter only; the old lower sections and footer were removed on request. Navigation contains Home and Meaning. Both hero CTAs and the scroll cue lead to `#meaning-behind-astramize`.

## Visual assets

Generated with the built-in imagegen tool, then resized and encoded with Next.js's bundled Squoosh encoder. No new dependencies. Images contain no interface text.

- `public/images/orbital-lounge.webp`: 1672px, 55,944 bytes
- `public/images/orbital-lounge-1280.webp`: 1280px, 40,064 bytes
- `public/images/orbital-lounge-mobile.webp`: 828px, 43,910 bytes

The photographic environment is combined with independent CSS starlight, atmospheric glow, orbital arc, readability overlays, and semantic HTML content. Mobile uses separate art without furniture. Motion uses CSS only and is disabled under prefers-reduced-motion.

## Generation prompts

### Desktop

Use case: stylized-concept. Create an original photorealistic cinematic background asset for a premium AI company homepage, landscape 16:9, 2560x1440 if possible. NO TEXT, NO LETTERS, NO UI, NO LOGOS. View from inside a luxurious minimalist orbital observation lounge, enormous curved window with slender dark titanium edges only at far left and right. Deep near-black navy space with restrained faint stars. Upper central 65% of image is very dark uncluttered negative space for HTML headline. A realistically textured dark blue ringed planet at upper right, mostly shadowed, elegant thin rings diagonal, contained within rightmost 27% and y=12%-50%. Enormous believable curved Earth in bottom half: horizon apex at exactly 59% image height, atmospheric icy blue rim and small central sunrise, nighttime continent lights and delicate cloud texture below, spans entire width. Bottom 18% is dark reflective lounge floor and slim window sill. In extreme lower left, silhouetted premium leather lounge chair, small round table and open laptop with blank dark screen, furniture limited to leftmost 28%, below 62% height. Sophisticated photographic realism, natural scale, subtle atmosphere, quiet blue palette with tiny warm city lights, no neon, no robots, no HUD, no dashboards, no typography. Compose for spacious centered website text in upper-middle. The scene must be rich and physically believable like architectural visualization photographed in orbit.

### Mobile

Create a photorealistic cinematic website background, portrait 9:16. NO TEXT, NO LOGOS, NO UI. Deep near-black navy space, sparse very faint stars, center and upper 65% almost empty dark space for website HTML content. Huge photoreal curved Earth across bottom, apex horizon at 71% image height, blue atmosphere, small central sunrise, detailed clouds and nighttime city lights, Earth extending beyond both sides, darkening towards bottom edge. A tiny partial shadowed ringed blue moon tucked into extreme upper right corner, very subtle. Premium restrained architectural visualization aesthetic, soft realistic lighting, quiet aspirational futuristic atmosphere. No furniture, no chair, no table, no window frames, no bright nebula. Use same natural dark navy and ice blue palette as a luxury orbital observation lounge. Keep all bright details below 68% height.

## Initial hero implementation validation

- Production build, lint and TypeScript checks passed using an isolated build directory because the pre-existing .next/trace was locked.
- Chrome inspected at 1920×1080, 1440×900, 1366×768, 768×1024, 390×844, and 360×800.
- No horizontal overflow; all hero images load and section links resolve.
- Mobile menu opens and exposes all five existing navigation links.
- Explore the Platform navigates to #openai.
- Reduced motion produces zero active hero animations.
- No JavaScript exceptions. An existing /favicon.ico 404 remains outside this hero change.
- No Lighthouse score is claimed.
