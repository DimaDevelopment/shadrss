# ShadRSS

A directory of RSS feeds from the ShadCN UI community registries. Automatically discovers and tracks RSS feeds from various registry sources, showing the latest updates and activity.

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/DimaDevelopment/shadrss.git
cd shadrss
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
shadrss/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
    ...
│   └── ui/                    # UI components
├── lib/                   # Utility functions
│   ├── config.ts          # Configuration constants
│   ├── data.ts            # RSS fetching and processing
│   └── utils.ts           # Helper utilities
├── types/                 # TypeScript type definitions
│   └── index.ts           # Type definitions
└── public/                # Static assets
```

## RSS Feed Paths

The project automatically tries the following paths to find RSS feeds:

- `/rss.xml`
- `/feed.xml`
- `/rss`
- `/feed`
- `/atom.xml`
- `/atom`
- `/index.xml`
- `/index.rss`
- `/feed.rss`
- `/rss.rss`
- `/registry/rss`
- `/registry/rss.xml`
- `/registry/feed`
- `/registry/feed.xml`
- `/registry/atom`
- `/registry/atom.xml`

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
