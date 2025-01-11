# Resource Management Application

A modern React application for managing and searching through resources, built with Vite and Tailwind CSS.

## Features

- Resource listing with dynamic search functionality
- Modern, responsive UI using Tailwind CSS
- Component-based architecture
- Fast development environment with Vite

![image](https://github.com/user-attachments/assets/11e8fcd0-b513-4970-967f-7be3a1c35b96)


## Tech Stack

- React
- Vite
- Tailwind CSS
- PostCSS

## Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── ResourceList.jsx
│   │   └── ResourceSearch.jsx
│   ├── data/
│   │   └── resources.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Development

The application is structured into reusable components:

- `ResourceList`: Displays the list of resources
- `ResourceSearch`: Handles resource search functionality
- `App`: Main application component

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
