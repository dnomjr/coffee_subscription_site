import espresso from "../assets/home/desktop/image-gran-espresso.png"
import planalto from "../assets/home/desktop/image-planalto.png"
import piccollo from "../assets/home/desktop/image-piccollo.png"
import danche from "../assets/home/desktop/image-danche.png"

import bean from "../assets/home/desktop/icon-coffee-bean.svg"
import gift from "../assets/home/desktop/icon-gift.svg"
import truck from "../assets/home/desktop/icon-truck.svg"

import uk from "../assets/about/desktop/illustration-uk.svg"
import canada from "../assets/about/desktop/illustration-canada.svg"
import australia from "../assets/about/desktop/illustration-australia.svg"

export const navLinks = [
  { id: 1, href: "/", label: "home" },
  { id: 2, href: "/about", label: "about" },
  { id: 3, href: "/plans", label: "create your plan" },
]

export const coffeeTypes = [
  {
    id: 1,
    image: espresso,
    title: "Gran Espresso",
    content:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    id: 2,
    image: planalto,
    title: "Planalto",
    content:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    id: 3,
    image: piccollo,
    title: "Piccollo",
    content:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
  },
  {
    id: 4,
    image: danche,
    title: "Danche",
    content:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
]

export const features = [
  {
    id: 1,
    icon: bean,
    title: "Best quality",
    content:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    id: 2,
    icon: gift,
    title: "Exclusive benefits",
    content:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    id: 3,
    icon: truck,
    title: "Free shipping",
    content:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
]

export const steps = [
  {
    id: 1,
    number: "01",
    title: "Pick your coffee",
    content:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    id: 2,
    number: "02",
    title: "Choose the frequency",
    content:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    id: 3,
    number: "03",
    title: "Receive and enjoy!",
    content: `We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
world-class coffees curated to provide a distinct tasting experience.`,
  },
]

export const headquarters = [
  {
    id: 1,
    map: uk,
    country: "United Kingdom",
    address: "68  Asfordby Rd",
    city: "Alcaston",
    suburb: "SY6 1YA",
    number: "+44 1241 918425",
  },
  {
    id: 2,
    map: canada,
    country: "Canada",
    address: "1528  Eglinton Avenue",
    city: "Toronto",
    suburb: "Ontario M4P 1A6",
    number: "+1 416 485 2997",
  },
  {
    id: 3,
    map: australia,
    country: "Australia",
    address: "36 Swanston Street",
    city: "Kewell",
    suburb: "Victoria",
    number: "+61 4 9928 3629",
  },
]
