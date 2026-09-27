# Light Theme and Theme Toggle

## Changes
- Make the existing site use a white/light color palette by default while preserving typography, spacing, sizing, layout, imagery, and content.
- Add a clean sun/moon theme toggle in the top navbar for desktop and mobile.
- Persist the visitor's choice and apply it safely after the page loads without changing page structure.
- Keep the current blue brand accent and ensure cards, borders, muted text, gradients, and decorative backgrounds remain readable in both themes.

## Verification
- Check the default light appearance and toggle behavior on desktop and mobile.
- Confirm the selected theme survives a refresh and all existing navigation and WhatsApp links still work.
- Confirm the site builds without errors.

## Technical details
- Define light semantic tokens on `:root` and move the current dark palette to a `.dark` override.
- Use the existing semantic color classes throughout; add only the theme state, icon control, and theme-specific utility adjustments.
