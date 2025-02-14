# Apple Clone Website

Welcome to the Apple Clone project! This is a beginner-friendly guide to understanding how this website works.

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Project Structure](#project-structure)
3. [Pages Explained](#pages-explained)
4. [Components](#components)
5. [Installation](#installation)
6. [Running the Project](#running-the-project)

## Technologies Used

### Frontend
- **Next.js**: A React framework for server-side rendering and static site generation
- **Tailwind CSS**: A utility-first CSS framework for styling
- **Framer Motion**: For smooth animations and transitions
- **Three.js**: For 3D model rendering (used in the product showcase)
- **GSAP**: For advanced animations and timeline control


### Development Tools
- **ESLint**: For code linting and maintaining code quality
- **Prettier**: For code formatting
- **Vite**: Fast development server and build tool

## Project Structure

```
apple-clone/
├── public/            # Static assets
│   ├── assets/          # Images and videos
│   └── models/         # 3D model files
├── src/
│   ├── components/     # Reusable UI components
│   ├── constants/      # Constant data and configurations
│   ├── pages/          # Application pages
│   ├── styles/         # Global styles
│   └── utils/         # Utility functions and animations
├── package.json        # Project dependencies
└── README.md           # This file
```

## Pages Explained

### Home Page (`/`)
- **Hero Section**: Full-screen video background with product highlights
- **Product Showcase**: Interactive 3D model of the product
- **Feature Sections**: Detailed product features with animations
- **Video Carousel**: Auto-playing product videos with smooth transitions

### Product Pages (Future Implementation)
- Will showcase individual products with specifications and features

## Components

### Navbar
- **Logo**: Apple logo that links to homepage
- **Menu**: Dropdown menus for different product categories
- **Search & Bag Icons**: Placeholder for future functionality

### Hero
- **Video Background**: Full-screen looping video
- **Text Animation**: Fade-in product description
- **Call to Action**: Animated buttons for product exploration

### Product Section
- **3D Model Viewer**: Interactive product model
- **Feature Cards**: Highlighting key product features
- **Specifications Table**: Detailed product specs

### Video Carousel
- **Auto-play Videos**: Smooth transitions between product videos
- **Play/Pause Controls**: User can control video playback
- **Progress Indicator**: Shows current video position

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/apple-clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd apple-clone
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and visit:
   ```bash
   http://localhost:3000
   ```

## Contributing

If you'd like to contribute to this project:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeatureName`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeatureName`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Apple Inc. for the design inspiration
- Three.js community for 3D model examples
- Framer Motion team for animation examples
