# 113 Food Stand Website

A responsive website for the 113 Class Food Stand at the School Fair 2025.

## Overview

This project is a website showcasing the 113 Class Food Stand for a school fair event. The site includes information about the stand, menu items, welcome message, and contact information.

## Features

- **Responsive Design**: Works on mobile and desktop browsers
- **Navigation Menu**: Easy access to different sections of the website
- **Dynamic Menu**: Food items loaded from JSON data
- **About Section**: Information about the class and food stand
- **Contact Section**: Links to social media accounts
- **Modern UI**: Clean design with hover effects and smooth transitions

## Project Structure

```
stand_113_web/
├── index.html              # Main HTML file
├── styles/
│   └── style.css           # CSS styling
├── scripts/
│   └── script.js           # JavaScript functionality
├── datas/
│   └── food_items.json     # Menu items data (needs to be created)
├── images/                 # Image assets
│   ├── logo.png            # Stand logo
│   ├── about.png           # About section image
│   ├── welcome.png         # Welcome section image
│   ├── header_background.png # Header background image
│   └── favicon.ico         # Website favicon
├── LICENSE                 # MIT license
└── README.md               # This file
```

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/Timothy0508/stand_113_web.git
   ```

2. Create the `datas` folder and add a `food_items.json` file with the following structure:
   ```json
   [
     {
       "name": "Item Name",
       "description": "Item description",
       "price": 5.99,
       "image": "images/item1.jpg"
     },
     ...
   ]
   ```

3. Add your images to the `images` folder.

4. Open `index.html` in a web browser or deploy to a web server.

## Technical Details

- **HTML5**: Semantic structure for better accessibility and SEO
- **CSS3**: Responsive design with flexbox and grid layout
- **JavaScript**: Dynamic content loading from JSON
- **Font Awesome**: Used for icons

## Customization

- Edit `food_items.json` to update the menu
- Modify the content in `index.html` to update text
- Change colors and styling in `style.css`
- Replace images in the `images` folder

## Browser Compatibility

Tested and works on:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
 
