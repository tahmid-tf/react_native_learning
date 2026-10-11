# Course Notes & Learning Documentation

Welcome to your React Native course documentation repository. Use this folder to keep organized, practical guides and cheat sheets for each lesson that you can reference when building real-world applications.

---

## Lessons Index

- [1. React Expo Router Setup & Core Concepts](./1.%20React%20expo%20router%20setup.md)
  - Method A & B setup (new app vs existing project)
  - Configuration (`package.json`, `app.json`)
  - File-based routing rules & route groups
  - Declarative & programmatic navigation (`<Link>`, `router`)
  - Dynamic routes & query parameters (`useLocalSearchParams`)
  - Stack and Tab layouts (`_layout.jsx`)
  - Common pitfalls and troubleshooting checklist

- [2. Tutorial #2 - Text, View & Image Components](./2.%20Tutorial%20%232%20-%20Text,%20View%20%26%20Image%20Components.md)
  - Core mental model: Native mobile vs Web DOM
  - `<View>` layout, Flexbox defaults, and spacing
  - `<Text>` nesting, style inheritance, and truncation
  - `<Image>` with local assets vs remote URLs and `resizeMode`
  - `StyleSheet.create` vs inline styles & conditional style arrays
  - Real-world gotchas (camelCase styles, remote image sizing, safe areas)

- [3. Tutorial #3 - File-Based Navigation](./3.%20Tutorial%20%233%20-%20File-Based%20Navigation.md)
  - Zero-boilerplate file-system routing in Expo Router
  - Route mapping (`app/index.jsx`, `app/about.jsx`, `app/contact.jsx`)
  - The `<Link>` component: `href`, `replace`, and touch handling
  - Wrapping custom buttons with `asChild`
  - Declarative (`<Link>`) vs programmatic (`router`) navigation
  - Real-world gotchas (absolute path slashes, style casing, touch conflicts)

- [4. Tutorial #4 - Layouts and Stack](./4.%20Tutorial%20%234%20-%20Layouts%20and%20Stack.md)
  - Purpose of `_layout.jsx` files and persistent wrappers
  - `<Slot />` vs `<Stack />` navigation differences
  - Global `screenOptions` vs individual `<Stack.Screen options={{ ... }} />`
  - Header styling (`headerStyle`, `headerTintColor`, `headerTitleStyle`)
  - Back button behavior: why it appears, Web refresh gotcha, and custom back buttons
  - Real-world patterns (modals, dynamic headers from screen components)

- [5. Tutorial #5 - Light and Dark Themes](./5.%20Tutorial%20%235%20-%20Light%20and%20Dark%20Themes.md)
  - Color token architecture and semantic naming (`constants/colors.jsx`)
  - Detecting OS appearance via `useColorScheme` with nullish fallbacks
  - Configuring `userInterfaceStyle` in `app.json` for automatic device toggling
  - Dynamic navigation header theming in `app/_layout.jsx`
  - Managing status bar icon contrast with `expo-status-bar`
  - Production pattern: building a reusable `useTheme()` hook

