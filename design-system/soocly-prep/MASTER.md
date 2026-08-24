# Soocly Prep Design System

## Product direction

Soocly Prep should look like a modern technical training provider, not an AI SaaS dashboard. The interface is utilitarian, trustworthy, dense enough for exam work, and free of game-like decoration.

## Visual rules

- Use one sans-serif system font stack throughout.
- Use square or restrained 4–8px corner radii.
- Avoid gradients, glass effects, oversized pill labels, decorative motion, and floating card grids.
- Use borders and spacing before shadows to create hierarchy.
- Keep the practice question visible in the first viewport.

## Color tokens

| Token | Value | Use |
|---|---|---|
| Navy 950 | `#0f2438` | Footer and utility bar |
| Navy 900 | `#16324f` | Primary brand and buttons |
| Blue 700 | `#235789` | Links, focus context, progress |
| Green 700 | `#2f6f55` | Correct state only |
| Red 700 | `#a83d35` | Incorrect state only |
| Canvas | `#f7f8fa` | Page background |
| Surface | `#ffffff` | Reading and question surfaces |
| Border | `#d8dee6` | Standard separation |
| Focus | `#f0aa23` | Keyboard focus ring |

## Typography

- Body: Arial, Helvetica, sans-serif; 16px minimum.
- H1: 32–64px depending on page type; bold, tight letter spacing.
- Question prompt: 22–29px with 1.35 line-height.
- Metadata: 11–13px, uppercase only when short.

## Interaction

- Every interactive control has a visible keyboard focus state.
- Minimum touch target is 44px.
- Correct and incorrect states use both color and text.
- Answers lock after selection and immediately reveal the explanation.
- Motion is limited to 150–200ms state transitions and respects reduced-motion preferences.

## Responsive behavior

- Desktop practice layout: main question area plus 260px progress rail.
- Tablet and mobile: progress rail moves below the question.
- Navigation may wrap into a second row but must not cause horizontal page scrolling.
- Validate at 375px, 768px, 1024px, and 1440px.
