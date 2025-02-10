# React Hero Image Slider

A simple, lightweight, and customizable React Hero image slider component.

## Features

- Responsive image slider
- Auto-slide functionality with adjustable interval
- Previous & Next navigation controls
- Easily customizable styles
- Minimal dependencies

## Installation

You can install the package via npm:

```sh
npm install react-hero-image-slider
```

or using yarn:

```sh
yarn add react-hero-image-slider
```

## Usage

Import and use the `Slider` component in your React application:

```jsx
import React from "react";
import Slider from "react-hero-image-slider";

const slides = [
  {
    sliderimg: "https://via.placeholder.com/800x400",
    heading: "Slide 1",
    description: "This is the first slide.",
    button: "Learn More",
    btn_url: "http://google.com",
  },
  {
    sliderimg: "https://via.placeholder.com/800x400",
    heading: "Slide 2",
    description: "This is the second slide.",
    button: "Explore",
    btn_url: "http://google.com",
  },
];

const App = () => {
  return (
    <div>
      <h1>Image Slider Demo</h1>
      <Slider slides={slides} autoSlide={true} interval={3000} />
    </div>
  );
};

export default App;
```

## Props

| Prop        | Type    | Default | Description                                                                                            |
| ----------- | ------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `slides`    | Array   | `[]`    | List of slide objects (each containing `sliderimg`, `heading`, `description`, `button` and `btn_url`). |
| `autoSlide` | Boolean | `true`  | Enables or disables automatic sliding.                                                                 |
| `interval`  | Number  | `5000`  | Time interval (in milliseconds) for auto-slide.                                                        |

## Styling

To customize styles, you can override the default CSS classes or use your own styles. The main classes used:

- `.slider-container`
- `.slider-area`
- `.slider-bg`
- `.slider-content`

Example:

```css
.slider-bg {
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
```

## License

This project is licensed under the MIT License.

## Author

Developed by Chonchol Mahmud. Feel free to contribute or report issues!
