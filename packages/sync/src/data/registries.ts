const registries = [
  {
    name: "@8bitcn",
    homepage: "https://www.8bitcn.com",
    url: "https://www.8bitcn.com/r/{name}.json",
    description:
      "A set of 8-bit styled retro components. Works with your favorite frameworks. Open Source. Open Code.",
    repourl: "https://github.com/TheOrcDev/8bitcn-ui",
  },
  {
    name: "@8starlabs-ui",
    homepage: "https://ui.8starlabs.com",
    url: "https://ui.8starlabs.com/r/{name}.json",
    description:
      "A set of beautifully designed components designed for developers who want niche, high-utility UI elements that you won't find in standard libraries.",
    repourl: "https://github.com/8starlabs/ui",
  },
  {
    name: "@abui",
    homepage: "https://abui.io",
    url: "https://abui.io/r/{name}.json",
    description:
      "A shadcn-compatible registry of reusable components, blocks, and utilities conforming to Vercel's components.build specification",
    repourl: "https://github.com/antoniobrandao/abui",
  },
  {
    name: "@abstract",
    homepage: "https://build.abs.xyz",
    url: "https://build.abs.xyz/r/{name}/json",
    description:
      "A collection of React components for the most common crypto patterns",
    repourl: "https://github.com/jarrodwatts/agw-reusables",
  },
  {
    name: "@aceternity",
    homepage: "https://ui.aceternity.com",
    url: "https://ui.aceternity.com/registry/{name}.json",
    description:
      "A modern component library built with Tailwind CSS and Motion for React, Aceternity UI contains unique and interactive components that can make your landing pages look 100x better.",
    repourl: "",
  },
  {
    name: "@agents-ui",
    homepage: "https://livekit.io/ui",
    url: "https://livekit.io/ui/r/{name}.json",
    description:
      "This is a shadcn/ui component registry that distributes copy-paste React components for building LiveKit AI Agent interfaces.",
    repourl: "https://github.com/livekit/agents",
  },
  {
    name: "@aevr",
    homepage: "https://ui.aevr.space",
    url: "https://ui.aevr.space/r/{name}.json",
    description:
      "A small collection of focused, production‑ready components and primitives for React/Next.js projects—built on shadcn/ui and complementary libraries.",
    repourl: "https://github.com/aevrhq/ui",
  },
  {
    name: "@ai-blocks",
    homepage: "https://webllm.org/blocks",
    url: "https://webllm.org/r/{name}.json",
    description:
      "AI components for the web. No server. No API keys. Built on WebLLM.",
    repourl: "",
  },
  {
    name: "@ai-elements",
    homepage: "https://ai-sdk.dev/elements",
    url: "https://registry.ai-sdk.dev/{name}.json",
    description:
      "Pre-built components like conversations, messages and more to help you build AI-native applications faster.",
    repourl: "https://github.com/vercel/ai-elements",
  },
  {
    name: "@algolia",
    homepage: "https://sitesearch.algolia.com",
    url: "https://sitesearch.algolia.com/r/{name}.json",
    description:
      "Enterprises and developers use Algolia's AI search infrastructure to understand users and show them what they're looking for.",
    repourl: "https://github.com/algolia/sitesearch",
  },
  {
    name: "@aliimam",
    homepage: "https://aliimam.in",
    url: "https://aliimam.in/r/{name}.json",
    description:
      "I create digital experiences that connect and inspire. I build apps, websites, brands, and products end-to-end.",
    repourl: "",
  },
  {
    name: "@animate-ui",
    homepage: "https://animate-ui.com",
    url: "https://animate-ui.com/r/{name}.json",
    description:
      "A fully animated, open-source React component distribution. Browse a list of animated primitives, components and icons you can install and use in your projects.",
    repourl: "https://github.com/imskyleen/animate-ui",
  },
  {
    name: "@assistant-ui",
    homepage: "https://www.assistant-ui.com",
    url: "https://r.assistant-ui.com/{name}.json",
    description:
      "Radix-style React primitives for AI chat with adapters for AI SDK, LangGraph, Mastra, and custom backends.",
    repourl: "https://github.com/assistant-ui/assistant-ui",
  },
  {
    name: "@better-upload",
    homepage: "https://better-upload.com",
    url: "https://better-upload.com/r/{name}.json",
    description:
      "Simple and easy file uploads for React. Upload directly to any S3-compatible service with minimal setup.",
    repourl: "https://github.com/Nic13Gamer/better-upload",
  },
  {
    name: "@basecn",
    homepage: "https://basecn.dev",
    description: "Beautifully crafted shadcn/ui components powered by Base UI",
    url: "https://basecn.dev/r/{name}",
    repourl: "https://github.com/akash3444/basecn",
  },
  {
    name: "@billingsdk",
    homepage: "https://billingsdk.com",
    url: "https://billingsdk.com/r/{name}.json",
    description:
      "BillingSDK is an open-source React and Next.js component library for SaaS billing and payments. It offers ready-to-use, customizable components for subscriptions, invoices, usage-based pricing and billing - fully compatible with Dodo Payments and Stripe.",
    repourl: "https://github.com/akash3444/basecn",
  },
  {
    name: "@blocks",
    homepage: "https://blocks.so",
    url: "https://blocks.so/r/{name}.json",
    description:
      "A set of clean, modern application building blocks for you in your applications. Free and Open Source",
    repourl: "https://github.com/ephraimduncan/blocks",
  },
  {
    name: "@cardcn",
    homepage: "https://cardcn.dev",
    url: "https://cardcn.dev/r/{name}.json",
    description: "A set of beautifully-designed shadcn card components",
    repourl: "https://github.com/Ali-Hussein-dev/cardcn",
  },
  {
    name: "@clerk",
    homepage: "https://clerk.com/docs/guides/development/shadcn-cli",
    url: "https://clerk.com/r/{name}.json",
    description:
      "The easiest way to add authentication and user management to your application. Purpose-built for React, Next.js, Remix, and The Modern Web.",
    repourl: "",
  },
  {
    name: "@commercn",
    homepage: "https://commercn.com",
    url: "https://commercn.com/r/{name}.json",
    description: "Shadcn UI Blocks for Ecommerce websites",
    repourl: "https://github.com/Logging-Studio/Commercn",
  },
  {
    name: "@coss",
    homepage: "https://coss.com/ui",
    url: "https://coss.com/ui/r/{name}.json",
    description:
      "A new, modern UI component library built on top of Base UI. Built for developers and AI.",
    repourl: "",
  },
  {
    name: "@creative-tim",
    homepage: "https://www.creative-tim.com/ui",
    url: "https://www.creative-tim.com/ui/r/{name}.json",
    description:
      "A collection of open-source UI components, blocks and AI Agents. Integrate them in v0, Lovable, Claude or in your application.",
    repourl: "https://github.com/creativetimofficial/ui",
  },
  {
    name: "@cult-ui",
    homepage: "https://www.cult-ui.com",
    url: "https://cult-ui.com/r/{name}.json",
    description:
      "Cult UI is a rare, curated set of shadcn-compatible, headless and composable components—tastefully animated with Framer Motion.",
    repourl: "https://github.com/nolly-studio/cult-ui",
  },
  {
    name: "@diceui",
    homepage: "https://www.diceui.com/",
    url: "https://diceui.com/r/{name}.json",
    description:
      "Accessible shadcn/ui components built with React, TypeScript, and Tailwind CSS. Copy-paste ready, and customizable.",
    repourl: "https://github.com/sadmann7/diceui",
  },
  {
    name: "@doras-ui",
    homepage: "https://ui.doras.to/",
    url: "https://ui.doras.to/r/{name}.json",
    description:
      "A collection of beautiful, reusable component blocks built with React",
    repourl: "https://github.com/dorasto/ui",
  },
  {
    name: "@elements",
    homepage: "https://www.tryelements.dev",
    url: "https://www.tryelements.dev/r/registry.json",
    description:
      "Full-stack shadcn/ui components that go beyond UI. Add auth, monetization, uploads, and AI to your app in seconds.",
    repourl: "https://github.com/crafter-station/elements",
  },
  {
    name: "@elevenlabs-ui",
    homepage: "https://ui.elevenlabs.io",
    url: "https://ui.elevenlabs.io/r/{name}.json",
    description:
      "A collection of Open Source agent and audio components that you can customize and extend.",
    repourl: "https://github.com/elevenlabs/ui",
  },
  {
    name: "@efferd",
    homepage: "https://efferd.com/",
    url: "https://efferd.com/r/registry.json",
    description:
      "A collection of beautifully crafted Shadcn/UI blocks, designed to help developers build modern websites with ease.",
    repourl: "",
  },
  {
    name: "@einui",
    homepage: "https://ui.eindev.ir",
    url: "https://ui.eindev.ir/r/{name}.json",
    description:
      "Beautiful, responsive Shadcn components with frosted glass morphism. Built for modern web applications with full dark mode support.",
    repourl: "https://github.com/ehsanghaffar/einui",
  },
  {
    name: "@eldoraui",
    homepage: "https://eldoraui.site",
    url: "https://eldoraui.site/r/{name}.json",
    description:
      "An open-source, modern UI component library for React, built with TypeScript, Tailwind CSS, and Framer Motion. Eldora UI offers beautifully crafted, reusable components designed for performance and elegance.",
    repourl: "https://github.com/karthikmudunuri/eldoraui",
  },
  {
    name: "@formcn",
    homepage: "https://formcn.dev",
    url: "https://formcn.dev/r/{name}.json",
    description:
      "Build production-ready forms with a few clicks using shadcn components and modern tools.",
    repourl: "https://github.com/Ali-Hussein-dev/formcn",
  },
  {
    name: "@gaia",
    homepage: "https://ui.heygaia.io",
    url: "https://ui.heygaia.io/r/{name}.json",
    description:
      "Production-ready UI components designed for building beautiful AI assistants and conversational interfaces, from the team behind GAIA.",
    repourl: "https://github.com/theexperiencecompany/ui",
  },
  {
    name: "@glass-ui",
    homepage: "https://glass-ui.crenspire.com",
    url: "https://glass-ui.crenspire.com/r/{name}.json",
    description:
      "A shadcn-ui compatible registry distributing 40+ glassmorphic React/TypeScript components with Apple-inspired design. Components include enhanced visual effects (glow, shimmer, ripple), theme support, and customizable glassmorphism styling.",
    repourl: "https://github.com/crenspire/glass-ui",
  },
  {
    name: "@ha-components",
    homepage: "https://hacomponents.keshuac.com",
    url: "https://hacomponents.keshuac.com/r/{name}.json",
    description:
      "A collection of customisable components to build Home Assistant dashboards.",
    repourl: "https://github.com/jchu634/ha-components",
  },
  {
    name: "@hextaui",
    homepage: "https://hextaui.com",
    url: "https://hextaui.com/r/{name}.json",
    description:
      "Ready-to-use foundation components/blocks built on top of shadcn/ui.",
    repourl: "https://github.com/preetsuthar17/hextaui",
  },
  {
    name: "@hooks",
    homepage: "https://shadcn-hooks.vercel.app",
    url: "https://shadcn-hooks.vercel.app/r/{name}.json",
    description: "A comprehensive React Hooks Collection built with Shadcn.",
    repourl: "https://github.com/Debbl/shadcn-hooks",
  },
  {
    name: "@intentui",
    homepage: "https://intentui.com",
    url: "https://intentui.com/r/{name}",
    description:
      "Accessible React component library to copy, customize, and own your UI.",
    repourl: "https://github.com/intentui/intentui",
  },
  {
    name: "@kibo-ui",
    homepage: "https://www.kibo-ui.com/",
    url: "https://www.kibo-ui.com/r/{name}.json",
    description:
      "Kibo UI is a custom registry of composable, accessible and open source components designed for use with shadcn/ui.",
    repourl: "https://github.com/shadcnblocks/kibo",
  },
  {
    name: "@kanpeki",
    homepage: "https://kanpeki.vercel.app",
    url: "https://kanpeki.vercel.app/r/{name}.json",
    description:
      "A set of perfect-designed components built on top of React Aria and Motion.",
    repourl: "https://github.com/fellipeutaka/kanpeki",
  },
  {
    name: "@kokonutui",
    homepage: "https://kokonutui.com",
    url: "https://kokonutui.com/r/{name}.json",
    description:
      "Collection of stunning components built with Tailwind CSS, shadcn/ui and Motion to use on your websites.",
    repourl: "https://github.com/kokonut-labs/kokonutui",
  },
  {
    name: "@lens-blocks",
    homepage: "https://lensblocks.com",
    url: "https://lensblocks.com/r/{name}.json",
    description:
      "A collection of social media components for use with Lens Social Protocol.",
    repourl: "https://github.com/ipaulpro/lens-blocks",
  },
  {
    name: "@limeplay",
    homepage: "https://limeplay.winoffrg.dev",
    description:
      "Modern UI Library for building media players in React. Powered by Shaka Player.",
    url: "https://limeplay.winoffrg.dev/r/{name}.json",
    repourl: "https://github.com/winoffrg/limeplay/",
  },
  {
    name: "@lucide-animated",
    homepage: "https://lucide-animated.com",
    url: "https://lucide-animated.com/r/{name}.json",
    description:
      "An open-source collection of smooth animated lucide icons for your projects",
    repourl: "https://github.com/pqoqubbw/icons",
  },
  {
    name: "@lytenyte",
    homepage: "https://www.1771technologies.com",
    url: "https://www.1771technologies.com/r/{name}.json",
    description:
      "LyteNyte Grid is a high performance, light weight, headless, React data grid. Our registry provides LyteNyte Grid themed using Tailwind and the Shadcn theme variables.",
    repourl: "https://github.com/1771-Technologies/lytenyte",
  },
  {
    name: "@magicui",
    homepage: "https://magicui.design",
    url: "https://magicui.design/r/{name}",
    description:
      "UI Library for Design Engineers. 150+ free and open-source animated components and effects built with React, Typescript, Tailwind CSS, and Motion. Perfect companion for shadcn/ui.",
    repourl: "https://github.com/magicuidesign/magicui",
  },
  {
    name: "@manifest",
    homepage: "https://ui.manifest.build",
    url: "https://ui.manifest.build/r/{name}.json",
    description:
      "Agentic UI toolkit for building MCP Apps. Open-source components and blocks ready to use within your chat app.",
    repourl: "https://github.com/mnfst/manifest",
  },
  {
    name: "@mui-treasury",
    homepage: "https://www.mui-treasury.com",
    url: "https://mui-treasury.com/r/{name}.json",
    description:
      "A collection of hand-crafted interfaces built on top of MUI components",
    repourl: "https://github.com/siriwatknp/mui-treasury",
  },
  {
    name: "@moleculeui",
    homepage: "https://www.moleculeui.design/",
    url: "https://www.moleculeui.design/r/{name}.json",
    description:
      "A modern React component library focused on intuitive interactions and seamless user experiences.",
    repourl: "https://github.com/molecule-lab/molecule-ui",
  },
  {
    name: "@motion-primitives",
    homepage: "https://www.motion-primitives.com",
    url: "https://motion-primitives.com/c/registry.json",
    description:
      "Beautifully designed motions components. Easy copy-paste. Customizable. Open Source. Built for engineers and designers.",
    repourl: "https://github.com/ibelick/motion-primitives",
  },
  {
    name: "@ncdai",
    homepage: "https://chanhdai.com/components",
    url: "https://chanhdai.com/r/{name}.json",
    description: "A collection of reusable components.",
    repourl: "https://github.com/ncdai/chanhdai.com",
  },
  {
    name: "@nuqs",
    homepage: "https://nuqs.dev/registry",
    description:
      "Custom parsers, adapters and utilities from the community for type-safe URL state management.",
    url: "https://nuqs.dev/r/{name}.json",
    repourl: "https://github.com/47ng/nuqs",
  },
  {
    name: "@nexus-elements",
    homepage: "https://elements.nexus.availproject.org/docs/view-components",
    description:
      "Ready-made React components for almost any use case. Use as is or customise and go to market fast",
    url: "https://elements.nexus.availproject.org/r/{name}.json",
    repourl: "",
  },
  {
    name: "@optics",
    homepage: "https://optics.agusmayol.com.ar",
    url: "https://optics.agusmayol.com.ar/r/{name}.json",
    description:
      "A design system that distributes re-styled components, utilities, and hooks ready to use.",
    repourl: "https://github.com/agusmayol/optics",
  },
  {
    name: "@oui",
    homepage: "https://oui.mw10013.workers.dev",
    url: "https://oui.mw10013.workers.dev/r/{name}.json",
    description:
      "React Aria Components with shadcn characteristics.Copy-and-paste react aria components that run side-by-side with shadcn components.",
    repourl: "https://github.com/mw10013/oui",
  },
  {
    name: "@paceui",
    homepage: "https://ui.paceui.com",
    url: "https://ui.paceui.com/r/{name}.json",
    description:
      "Animated components and building blocks built for smooth interaction and rich detail. Copy, customise, and create without the extra setup.",
    repourl: "https://github.com/paceui/ui",
  },
  {
    name: "@paykit-sdk",
    homepage: "https://www.usepaykit.dev",
    url: "https://www.usepaykit.dev/r/{name}.json",
    description:
      "Unified payments SDK for builders — handle checkout, billing, and webhooks across Stripe, PayPal, Adyen, and regional gateways with a single integration.",
    repourl: "",
  },
  {
    name: "@plate",
    homepage: "https://platejs.org",
    url: "https://platejs.org/r/{name}.json",
    description: "AI-powered rich text editor for React.",
    repourl: "https://github.com/udecode/plate",
  },
  {
    name: "@prompt-kit",
    homepage: "https://www.prompt-kit.com",
    url: "https://www.prompt-kit.com/c/registry.json",
    description:
      "Core building blocks for AI apps. High-quality, accessible, and customizable components for AI interfaces.",
    repourl: "https://github.com/ibelick/prompt-kit",
  },
  {
    name: "@prosekit",
    homepage: "https://prosekit.dev",
    url: "https://prosekit.dev/r/{name}.json",
    description:
      "Powerful and flexible rich text editor for React, Vue, Preact, Svelte, and SolidJS.",
    repourl: "https://github.com/prosekit/prosekit",
  },
  {
    name: "@phucbm",
    homepage: "https://ui.phucbm.com",
    url: "https://ui.phucbm.com/r/{name}.json",
    description:
      "A collection of modern React UI components with GSAP animations.",
    repourl: "https://github.com/phucbm/ui.phucbm.com",
  },
  {
    name: "@react-bits",
    homepage: "https://reactbits.dev",
    url: "https://reactbits.dev/r/{name}.json",
    description:
      "A large collection of animated, interactive & fully customizable React components for building memorable websites. From smooth text animations all the way to eye-catching backgrounds, you can find it here.",
    repourl: "https://github.com/DavidHDev/react-bits",
  },
  {
    name: "@retroui",
    description:
      "A Neobrutalism styled React + TailwindCSS UI library for building bold, modern web apps. Perfect for any project using Shadcn/ui.",
    homepage: "https://retroui.dev",
    url: "https://retroui.dev/r/{name}.json",
    repourl: "https://github.com/Logging-Studio/RetroUI",
  },
  {
    name: "@reui",
    homepage: "https://reui.io",
    url: "https://reui.io/r/{name}.json",
    description:
      "Open-source collection of UI components and animated effects built with React, Typescript, Tailwind CSS, and Motion. Pairs beautifully with shadcn/ui.",
    repourl: "https://github.com/Logging-Studio/RetroUI",
  },
  {
    name: "@scrollxui",
    homepage: "https://www.scrollxui.dev",
    url: "https://www.scrollxui.dev/registry/{name}.json",
    description:
      "ScrollX UI is an open-source React and shadcn-compatible component library for animated, interactive, and customizable user interfaces. It offers motion-driven components that blend seamlessly with modern ShadCN setups.",
    repourl: "https://github.com/Adityakishore0/ScrollX-UI",
  },
  {
    name: "@square-ui",
    homepage: "https://square.lndev.me",
    url: "https://square.lndev.me/registry/{name}.json",
    description:
      "Collection of beautifully crafted open-source layouts UI built with shadcn/ui.",
    repourl: "https://github.com/ln-dev7/square-ui",
  },
  {
    name: "@systaliko-ui",
    homepage: "https://systaliko-ui.vercel.app",
    url: "https://systaliko-ui.vercel.app/r/{name}.json",
    description:
      "UI component library, Designed for flexibility, built for customization, and crafted to scale across variants and use cases.",
    repourl: "https://github.com/YoucefBnm/systaliko-ui",
  },
  {
    name: "@roiui",
    homepage: "https://roiui.com",
    url: "https://roiui.com/r/{name}.json",
    description:
      "Roi UI is a library that offers UI components and blocks built with Base UI primitives. Some blocks and components use motion (framer). Everything is open-source and will be forever.",
    repourl: "https://github.com/preetecool/roi-ui",
  },
  {
    name: "@solaceui",
    homepage: "https://www.solaceui.com",
    url: "https://www.solaceui.com/r/{name}.json",
    description:
      "Production-ready and tastefully crafted sections, animated components, and full-page templates for Next.js, Tailwind CSS & Motion",
    repourl: "",
  },
  {
    name: "@shadcnblocks",
    homepage: "https://shadcnblocks.com",
    url: "https://shadcnblocks.com/r/{name}.json",
    description: "A registry with hundreds of extra blocks for shadcn ui.",
    repourl: "",
  },
  {
    name: "@shadcndesign",
    homepage: "https://www.shadcndesign.com",
    url: "https://shadcndesign-free.vercel.app/r/{name}.json",
    description:
      "A growing collection of high-quality blocks and themes for shadcn/ui.",
    repourl: "",
  },
  {
    name: "@shadcn-map",
    homepage: "https://shadcn-map.vercel.app",
    url: "http://shadcn-map.vercel.app/r/{name}.json",
    description:
      "A map component for shadcn/ui. Built with Leaflet and React Leaflet.",
    repourl: "https://github.com/tonghohin/shadcn-map",
  },
  {
    name: "@shadcn-studio",
    homepage: "https://shadcnstudio.com",
    url: "https://shadcnstudio.com/r/{name}.json",
    description:
      "An open-source set of shadcn/ui components, blocks, and templates with a powerful theme generator.",
    repourl: "https://github.com/themeselection/shadcn-studio",
  },
  {
    name: "@shadcn-editor",
    homepage: "https://shadcn-editor.vercel.app",
    url: "https://shadcn-editor.vercel.app/r/{name}.json",
    description:
      "Accessible, Customizable, Rich Text Editor. Made with Lexical and Shadcn/UI. Open Source. Open Code.",
    repourl: "https://github.com/htmujahid/shadcn-editor",
  },
  {
    name: "@shadcnui-blocks",
    homepage: "https://shadcnui-blocks.com",
    url: "https://shadcnui-blocks.com/r/{name}.json",
    description:
      "A collection of premium, production-ready shadcn/ui blocks, components and templates.",
    repourl: "https://github.com/akash3444/shadcn-ui-blocks",
  },
  {
    name: "@shadcraft",
    homepage: "https://shadcraft-free.vercel.app",
    url: "https://shadcraft-free.vercel.app/r/{name}.json",
    description:
      "A collection of polished shadcn/ui components and marketing blocks built to production standards. Fast to use, easy to extend, and ready for any modern web project.",
    repourl: "https://github.com/shadcraft/shadcraft-free",
  },
  {
    name: "@smoothui",
    homepage: "https://smoothui.dev",
    url: "https://smoothui.dev/r/{name}.json",
    description:
      "A collection of beautifully crafted motion components built with React, Framer Motion, and TailwindCSS. Designed to elevate microinteractions, each component focuses on smooth animations, subtle feedback, and delightful UX. Perfect for designers and developers who want to add refined motion to their interfaces — copy, paste, and make your UI come alive.",
    repourl: "https://github.com/educlopez/smoothui",
  },
  {
    name: "@spectrumui",
    homepage: "https://ui.spectrumhq.in",
    url: "https://ui.spectrumhq.in/r/{name}.json",
    description:
      "A modern component library built with shadcn/ui and Tailwind CSS. Spectrum UI offers elegant, responsive components and smooth animations designed for high-quality interfaces.",
    repourl: "https://github.com/arihantcodes/spectrum-ui",
  },
  {
    name: "@supabase",
    homepage: "https://supabase.com/ui",
    url: "https://supabase.com/ui/r/{name}.json",
    description:
      "A collection of React components and blocks built on the shadcn/ui library that connect your front-end to your Supabase back-end via a single command.",
    repourl: "",
  },
  {
    name: "@svgl",
    description: "A beautiful library with SVG logos.",
    homepage: "https://svgl.app",
    url: "https://svgl.app/r/{name}.json",
    repourl: "https://github.com/pheralb/svgl",
  },
  {
    name: "@tailark",
    homepage: "https://tailark.com",
    url: "https://tailark.com/r/{name}.json",
    description:
      "Shadcn blocks designed for building modern marketing websites.",
    repourl: "https://github.com/tailark/blocks",
  },
  {
    name: "@taki",
    homepage: "https://taki-ui.com",
    url: "https://taki-ui.com/r/{name}.json",
    description:
      "Beautifully designed, accessible components that you can copy and paste into your apps. Made with React Aria Components and Shadcn tokens.",
    repourl: "",
  },
  {
    name: "@tour",
    homepage: "https://onboarding-tour.vercel.app",
    url: "https://onboarding-tour.vercel.app/r/{name}.json",
    description:
      "A component for building onboarding tours. Designed to integrate with shadcn/ui.",
    repourl: "https://github.com/tonghohin/tour",
  },
  {
    name: "@uitripled",
    homepage: "https://ui.tripled.work",
    url: "https://ui.tripled.work/r/{name}.json",
    description:
      "An open-source, Production-ready UI components and blocks powered by shadcn/ui and Framer Motion",
    repourl: "https://github.com/moumen-soliman/uitripled",
  },
  {
    name: "@utilcn",
    homepage: "https://utilcn.dev",
    url: "https://utilcn.dev/r/{name}.json",
    description:
      "Fullstack registry items to start those big features. Utilcn has ChatGPT Apps, file uploading (with progress bars) and downloading, and a way to make your env vars typesafe on the backend.",
    repourl: "https://github.com/BrennenRocks/utilcn",
  },
  {
    name: "@wandry-ui",
    homepage: "http://ui.wandry.com.ua/",
    url: "https://ui.wandry.com.ua/r/{name}.json",
    description:
      "A set of open source fully controlled React Inertia form elements",
    repourl: "https://github.com/WandryDev/wandry-ui",
  },
  {
    name: "@wigggle-ui",
    description:
      "A beautiful collection of copy-and-paste widgets for your next project.",
    homepage: "https://wigggle-ui.vercel.app",
    url: "https://wigggle-ui.vercel.app/r/{name}.json",
    repourl: "https://github.com/wigggle-ui/ui",
  },
  {
    name: "@zippystarter",
    homepage: "https://zippystarter.com",
    url: "https://zippystarter.com/r/{name}.json",
    description: "Expertly crafted blocks, components & themes for shadcn/ui.",
    repourl: "",
  },
  {
    name: "@uicapsule",
    homepage: "https://uicapsule.com",
    url: "https://uicapsule.com/r/{name}.json",
    description:
      "A curated collection of components that spark joy. Featuring interactive concepts, design experiments, and components in the intersection of AI/UI.",
    repourl: "https://github.com/kyh/uicapsule",
  },
  {
    name: "@ui-layouts",
    homepage: "https://ui-layouts.com/",
    url: "https://ui-layouts.com/r/{name}.json",
    description:
      "UI Layouts offers components, effects, design tools, and ready-made blocks that make building modern interfaces more efficient—built with React, Next.js, Tailwind CSS, and shadcn/ui.",
    repourl: "https://github.com/ui-layouts/uilayouts",
  },
  {
    name: "@pureui",
    homepage: "https://pure.kam-ui.com/",
    url: "https://pure.kam-ui.com/r/{name}.json",
    description:
      "Pure UI is a curated collection of refined, animated, and accessible components built with Base UI, Tailwind CSS, Motion, and other high-quality open source libraries.",
    repourl: "https://github.com/MusKRI/pure-ui",
  },
  {
    name: "@tailwind-builder",
    homepage: "https://tailwindbuilder.ai/",
    url: "https://tailwindbuilder.ai/r/{name}.json",
    description:
      "Tailwind Builder is a collection of free ui blocks and components and provide ai tools to generate production-ready forms, tables, and charts in seconds. Built with React, Next.js, Tailwind & ShadCN.",
    repourl: "",
  },
  {
    name: "@tailwind-admin",
    homepage: "https://tailwind-admin.com/",
    url: "https://tailwind-admin.com/r/{name}.json",
    description:
      "Tailwind Builder provides free tailwind admin dashboard templates, components and ui-blocks built with React, Next.js, Tailwind CSS, and shadcn/ui to help you build admin panels quickly and efficiently.",
    repourl: "",
  },
  {
    name: "@skiper-ui",
    homepage: "https://skiper-ui.com/",
    url: "https://skiper-ui.com/registry/{name}.json",
    description:
      "Brand new uncommon components for your Next.js project. Use with ease through shadcn CLI 3.0, featuring fast-growing components and collections that are easy to edit and use.",
    repourl: "",
  },
  {
    name: "@animbits",
    homepage: "https://animbits.dev",
    url: "https://animbits.dev/r/{name}.json",
    description:
      "AnimBits is a collection animated UI components for React that use Framer Motion. The components provided include buttons, cards, text, icons, lists, loaders, and page transitions, animation hooks all of which have general-purpose effects that are not flashy and easy on the eyes, making them easy to use.",
    repourl: "https://github.com/Garvit1000/AnimBits",
  },
];

export default registries;
export type Registry = (typeof registries)[number];
