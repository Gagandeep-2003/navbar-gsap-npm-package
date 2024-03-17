# DEMO

![Alt Text](
https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnY5bjljZXlkbWU3c2YzYzg5dWloMGpyaDg2ZzJ1bHB6OHgwbDBqdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KQtmJxokjjQfhwgwTz/giphy.gif
)

# Navbar using Greensock Animation Platform(gsap)

The GSAP Navbar npm package simplifies the creation of animated navigation bars using the GSAP animation library. It enhances the visual appeal and user experience of web applications by offering dynamic and interactive navigation menus. With its elegant animations, developers can effortlessly incorporate captivating navigation elements that elevate the overall design aesthetic of websites and web applications.

## Installation

Install with npm for usage of this package.

```bash
  npm install navbar-gsap

```

## Usage/Examples

```javascript
import Header from "navbar-gsap";

const App = () => {
  const navItems = [
    { label: "Home", href: "https://www.google.com", target: "_self" },
    { label: "About", href: "https://www.youtube.com", target: "_blank" },
    { label: "Services", href: "#services", target: "_top" },
    { label: "Contact", href: "#contact", target: "_parent" },
  ];

  return (
    <>
      <Header items={navItems} heading="Custom Heading Text" />
    </>
  );
};
```

## Mandatory Props

| Props   | Types                                                         | Description                                                                                                                                                                         |
| ------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| items   | Array of Objects {name: string, href: string, target: string} | Array of navigation items to be displayed in the navbar. Each object should contain a `name` (label of the item), `href` (URL), and `target` (target attribute for the anchor tag). |
| heading | String                                                        | The custom heading text to be displayed above the navbar.                                                                                                                           |

## License

[MIT](https://choosealicense.com/licenses/mit/)
