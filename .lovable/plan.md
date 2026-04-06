# TailWaggers Premium Redesign

```markdown
# TailWaggers Premium Redesign - Technical Specification

## Project Overview

Redesign TailWaggers pet care website from a functional MVP to a premium, polished experience. Maintain brand identity while elevating visual sophistication, adding meaningful animations, and improving perceived quality to match high-end pet resort competitors.

**Current Stack:** React + TypeScript + Tailwind CSS + Framer Motion + shadcn/ui
**Brand:** TailWaggers - "Where Every Tail Wags Happy" - 285+ locations nationwide

---

## Design Tokens

### Color Palette (Keep TailWaggers colors, refine usage)

```css
:root {
  /* Primary - Deep teal for trust & professionalism */
  --brand-deep: #1e3a3a; /* Headers, footer, dark sections */
  --brand-primary: #2d5a5a; /* Primary buttons, accents */
  --brand-light: #e8f0f0; /* Light backgrounds, cards */

  /* Accent - Warm coral for CTAs & energy */
  --accent: #f29d7e; /* CTA buttons, highlights, active states */
  --accent-hover: #e88a6a; /* Button hover states */

  /* Neutrals */
  --background: #ffffff;
  --foreground: #191919;
  --muted: #f8f8f8; /* Section backgrounds */
  --muted-foreground: #6b7280;

  /* Semantic */
  --success: #22c55e;
  --amber: #f59e0b;
}
```

### Typography

```css
/* Headlines - Add serif for elegance */
--font-display: 'Playfair Display', Georgia, serif; /* H1, H2, hero text */
--font-sans: 'Inter', system-ui, sans-serif; /* Body, UI elements */

/* Scale */
--text-hero: clamp(3rem, 8vw, 5rem); /* Hero headlines */
--text-section: clamp(2rem, 4vw, 2.75rem); /* Section titles */
--text-card: 1.25rem; /* Card titles */
--text-body: 1rem; /* Body copy */
--text-small: 0.875rem; /* Captions, metadata */
```

---

## Component Specifications

### 1. Header (Sticky + Transparent-to-Solid Transition)

```tsx
// Behavior:
// - Start transparent with light text over hero
// - Transition to solid white with shadow on scroll (threshold: 50px)
// - Smooth transition: 300ms ease-out

<Header
  className={cn(
    'fixed top-0 z-50 w-full transition-all duration-300',
    scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
  )}
>
  {/* Top info bar - only visible when not scrolled */}
  <TopBar
    className={cn(
      'bg-brand-deep py-2 text-sm text-white transition-all duration-300',
      scrolled && 'h-0 overflow-hidden opacity-0'
    )}
  >
    <Container className="flex justify-between">
      <div className="flex gap-6">
        <span>📍 285+ Locations Nationwide</span>
        <span>📞 1-800-555-PETS</span>
      </div>
      <div className="flex gap-4">
        <Link>Login</Link>
        <Link>Sign Up</Link>
      </div>
    </Container>
  </TopBar>

  {/* Main nav */}
  <nav className="py-4">
    <Container className="flex items-center justify-between">
      <Logo /> {/* 🐾 TailWaggers - use brand color on "Waggers" */}
      <NavLinks /> {/* Services, Locations, About, Blog, Franchise */}
      <div className="flex gap-3">
        <Button variant="outline">Find Location</Button>
        <Button className="bg-accent hover:bg-accent-hover">Book Now</Button>
      </div>
    </Container>
  </nav>
</Header>
```

### 2. Hero Section (Cross-Fade Slider)

```tsx
// Implement auto-playing hero slider with 3 slides
// Each slide: full-bleed background image + content overlay

<HeroSlider
  autoPlay={true}
  interval={5000} // 5 seconds per slide
  transition="fade" // Cross-fade, not slide
  transitionDuration={800} // 800ms fade
  pauseOnHover={true}
>
  {slides.map((slide, i) => (
    <Slide key={i} backgroundImage={slide.image} className="relative min-h-[90vh]">
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      <Container className="relative z-10 flex min-h-[90vh] items-center">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Superheadline badge */}
          <span className="bg-accent/20 border-accent/40 text-accent mb-6 inline-block rounded-full border px-4 py-1.5 text-sm font-medium tracking-wider uppercase">
            Premium Pet Care Since 2015
          </span>

          {/* Main headline - serif font */}
          <h1 className="font-display text-hero mb-6 leading-[1.1] text-white">
            <span className="font-light italic">Where Every Tail</span>
            <br />
            <span className="text-accent font-bold">Wags Happy</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80">{slide.description}</p>

          {/* Search bar - glass morphism style */}
          <div className="flex max-w-md rounded-lg border border-white/20 bg-white/10 p-2 backdrop-blur-md">
            <div className="flex flex-1 items-center gap-2 px-4">
              <MapPin className="text-white/60" />
              <input
                placeholder="Enter zip code or city"
                className="w-full bg-transparent text-white outline-none placeholder:text-white/50"
              />
            </div>
            <Button className="bg-accent hover:bg-accent-hover">Find Location</Button>
          </div>
        </motion.div>
      </Container>
    </Slide>
  ))}

  {/* Dot navigation - bottom center */}
  <SliderDots className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
    {slides.map((_, i) => (
      <button
        key={i}
        className={cn(
          'h-3 w-3 rounded-full transition-all duration-300',
          activeSlide === i ? 'bg-accent w-8' : 'bg-white/50 hover:bg-white/80'
        )}
      />
    ))}
  </SliderDots>
</HeroSlider>
```

### 3. Service Cards (Overlapping Hero with Negative Margin)

```tsx
<section className="relative z-20 -mt-24 pb-20">
  {' '}
  {/* Negative margin overlap */}
  <Container>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service, i) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <Card
            className={cn(
              'group rounded-xl bg-white p-8',
              'shadow-lg hover:shadow-2xl',
              'transform hover:-translate-y-2',
              'transition-all duration-300 ease-out',
              'hover:border-accent/20 border border-transparent'
            )}
          >
            {/* Icon with colored background */}
            <div
              className={cn(
                'mb-6 flex h-16 w-16 items-center justify-center rounded-xl',
                'transition-transform duration-300 group-hover:scale-110',
                service.iconBg // e.g., "bg-amber-100 text-amber-600"
              )}
            >
              <service.icon className="h-8 w-8" />
            </div>

            <h3 className="font-display text-brand-deep group-hover:text-accent mb-3 text-xl font-semibold transition-colors">
              {service.title}
            </h3>

            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              {service.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-accent font-semibold">{service.price}</span>
              <ArrowRight className="text-accent h-5 w-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </Container>
  {/* Decorative paw prints */}
  <img src="/paws-decoration.svg" className="absolute bottom-0 -left-20 w-40 opacity-10" />
  <img
    src="/paws-decoration.svg"
    className="absolute top-20 -right-20 w-40 rotate-180 opacity-10"
  />
</section>
```

### 4. Stats Section with Animated Circular Progress

```tsx
<section className="relative overflow-hidden py-24">
  {/* Parallax background */}
  <ParallaxBackground image="/happy-dogs-bg.jpg" speed={0.5} className="absolute inset-0" />
  <div className="bg-brand-deep/80 absolute inset-0" />

  <Container className="relative z-10">
    <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
      <div className="max-w-lg">
        <h2 className="font-display text-section mb-4 text-white">
          Happy to welcome you
          <br />
          <span className="font-bold">to our circle of friends</span>
        </h2>
      </div>

      {/* Animated "Book Now" decorative element */}
      <motion.div whileHover={{ rotate: 5, scale: 1.05 }} className="cursor-pointer">
        <img src="/book-now-handwritten.svg" className="w-40" />
      </motion.div>
    </div>

    {/* Circular progress stats */}
    <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="flex flex-col items-center"
        >
          <CircularProgress
            value={stat.percentage}
            size={140}
            strokeWidth={4}
            trackColor="rgba(255,255,255,0.2)"
            progressColor="#f29d7e"
            duration={1500}
            easing="easeOut"
          >
            {/* Center icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <PawPrint className="text-accent h-6 w-6" />
            </div>
          </CircularProgress>

          <span className="mt-4 text-center text-sm font-medium tracking-wider text-white/90 uppercase">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  </Container>
</section>;

// Stats data:
const stats = [
  { label: 'Climate Controlled', percentage: 100 },
  { label: 'Certified Staff', percentage: 100 },
  { label: 'Daily Photo Updates', percentage: 95 },
  { label: 'Repeat Customers', percentage: 92 },
];
```

### 5. How It Works (Horizontal Timeline)

```tsx
<section className="bg-muted py-24">
  <Container>
    <div className="mb-16 text-center">
      <span className="text-accent text-sm font-medium tracking-wider uppercase">How It Works</span>
      <h2 className="font-display text-section mt-2">Getting Started Is Easy</h2>
    </div>

    <div className="relative">
      {/* Connecting line */}
      <div className="bg-accent/20 absolute top-16 right-0 left-0 hidden h-0.5 lg:block" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative text-center"
          >
            {/* Step number circle */}
            <div className="relative mx-auto mb-6">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
                <step.icon className="text-accent h-12 w-12" />
              </div>
              <span className="bg-accent absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                {i + 1}
              </span>
            </div>

            <h3 className="font-display mb-2 text-lg font-semibold">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </Container>
</section>
```

### 6. Testimonials Slider with Featured Image

```tsx
<section className="bg-muted overflow-hidden py-24">
  <Container>
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Featured dog image - extends beyond section */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <img
          src="/happy-dog-cutout.png"
          className="relative z-10 -mt-32 lg:-ml-20" // Extends outside
          alt="Happy dog"
        />
      </motion.div>

      {/* Testimonial slider */}
      <div>
        <TestimonialSlider autoPlay={true} interval={4000} transition="fade">
          {testimonials.map((t, i) => (
            <div key={i} className="px-4">
              <blockquote className="font-display text-brand-deep mb-6 text-2xl leading-relaxed italic">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img src={t.avatar} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <div className="text-brand-deep font-semibold">{t.name}</div>
                  <div className="text-muted-foreground text-sm">{t.location}</div>
                </div>
                <div className="ml-auto flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </TestimonialSlider>

        {/* Dot navigation */}
        <div className="mt-8 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-all',
                activeIndex === i ? 'bg-accent w-6' : 'bg-brand-deep/20'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  </Container>
</section>
```

### 7. CTA Section (Gradient Background)

```tsx
<section className="relative overflow-hidden py-24">
  {/* Gradient background */}
  <div className="from-brand-deep via-brand-primary to-brand-deep absolute inset-0 bg-gradient-to-br" />

  {/* Decorative circles */}
  <div className="bg-accent/10 absolute top-10 right-10 h-64 w-64 rounded-full blur-3xl" />
  <div className="bg-accent/10 absolute bottom-10 left-10 h-48 w-48 rounded-full blur-3xl" />

  <Container className="relative z-10">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <h2 className="font-display text-section mb-4 text-white">
          Ready to Give Your Pet
          <br />
          <span className="text-accent">the Best Care?</span>
        </h2>

        <p className="mb-8 text-lg text-white/80">
          Join over 1 million happy pet parents. Book a free meet & greet at your nearest location
          today.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="bg-accent hover:bg-accent-hover text-white">
            Book Free Meet & Greet
            <ArrowRight className="ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            <Building className="mr-2" />
            Own a Franchise
          </Button>
        </div>
      </div>

      {/* Circular image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="mx-auto h-80 w-80 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl">
          <img src="/happy-dog-cta.jpg" className="h-full w-full object-cover" />
        </div>

        {/* Floating paw prints */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-4 -left-4"
        >
          <PawPrint className="text-accent/60 h-8 w-8" />
        </motion.div>
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute -right-4 bottom-8"
        >
          <PawPrint className="text-accent/40 h-10 w-10" />
        </motion.div>
      </motion.div>
    </div>
  </Container>
</section>
```

### 8. Footer (Rich Multi-Column)

```tsx
<footer className="bg-brand-deep text-white">
  {/* Main footer content */}
  <div className="py-16">
    <Container>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand column */}
        <div>
          <Logo className="mb-6" variant="light" />
          <p className="mb-6 text-sm leading-relaxed text-white/70">
            Premium pet care at 285+ locations nationwide. Where every tail wags happy.
          </p>
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Services column */}
        <div>
          <h4 className="mb-4 font-semibold">Services</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <Link className="hover:text-accent transition-colors">Daycare</Link>
            </li>
            <li>
              <Link className="hover:text-accent transition-colors">Boarding</Link>
            </li>
            <li>
              <Link className="hover:text-accent transition-colors">Spa & Grooming</Link>
            </li>
            <li>
              <Link className="hover:text-accent transition-colors">Training</Link>
            </li>
          </ul>
        </div>

        {/* Company column */}
        <div>
          <h4 className="mb-4 font-semibold">Company</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Franchise</Link>
            </li>
            <li>
              <Link>Careers</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter column */}
        <div>
          <h4 className="mb-4 font-semibold">Newsletter</h4>
          <p className="mb-4 text-sm text-white/70">Get pet care tips and special offers.</p>
          <div className="flex">
            <input
              placeholder="Your email"
              className="focus:border-accent flex-1 rounded-l-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm outline-none placeholder:text-white/40"
            />
            <Button className="bg-accent hover:bg-accent-hover rounded-l-none">Subscribe</Button>
          </div>

          <div className="mt-6 space-y-2 text-sm text-white/60">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> 1-800-555-PETS
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> info@tailwaggers.com
            </p>
          </div>
        </div>
      </div>
    </Container>
  </div>

  {/* Bottom bar */}
  <div className="border-t border-white/10 py-6">
    <Container className="flex flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">
      <p>© 2025 TailWaggers. All rights reserved.</p>
      <div className="flex gap-6">
        <Link>Privacy Policy</Link>
        <Link>Terms of Service</Link>
      </div>
    </Container>
  </div>
</footer>
```

---

## Animation Guidelines

### Scroll-Triggered Animations (Framer Motion)

```tsx
// Standard fade-up for cards/sections
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Staggered children
const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};
```

### Hover States

- Cards: `translateY(-8px)` + `shadow-2xl` + `border-accent/20`
- Buttons: `scale(1.02)` + color shift
- Links: underline animation from left
- Images: subtle `scale(1.05)` with `overflow-hidden` container

### Page Transitions

- Use `<AnimatePresence>` for route changes
- Fade out (200ms) → Fade in (300ms)

---

## Responsive Breakpoints

```css
/* Mobile first approach */
sm: 640px   /* Stack to 2-col grids */
md: 768px   /* Tablet layouts */
lg: 1024px  /* Desktop layouts */
xl: 1280px  /* Large desktop */
```

### Mobile-Specific Adjustments

- Hero: Single slide, reduced height (70vh)
- Cards: 1 column, horizontal scroll option
- Stats: 2x2 grid instead of 4-col
- Footer: Accordion for mobile
- Header: Hamburger menu with slide-in drawer

---

## Performance Optimizations

1. **Images**: Use `next/image` or `<img loading="lazy">` with srcset
2. **Animations**: Use `will-change: transform` sparingly
3. **Fonts**: Preload display font, use `font-display: swap`
4. **Parallax**: Use `transform: translate3d()` for GPU acceleration
5. **Sliders**: Only render visible + adjacent slides

---

## Deliverables Checklist

- [ ] Sticky header with transparent-to-solid transition
- [ ] Hero cross-fade slider (3 slides, auto-play, dots)
- [ ] Service cards with negative margin overlap
- [ ] Animated circular progress stats
- [ ] Timeline "How It Works" section
- [ ] Testimonial slider with featured image
- [ ] Gradient CTA section with floating elements
- [ ] Rich multi-column footer with newsletter
- [ ] Mobile-responsive throughout
- [ ] Smooth scroll-triggered animations
- [ ] Hover states on all interactive elements

---

## Reference Designs

### Current: TailWaggers

- URL: https://tailwaggers-wag-central.lovable.app
- Repo: https://github.com/georgemaine/tailwaggers-wag-central

### Target Inspiration: Pawsitive Bella

- URL: https://pawsitive.bold-themes.com/bella/home/home-02/
- Key elements to adapt: Hero slider, negative margin cards, circular progress, testimonial layout, parallax sections

```