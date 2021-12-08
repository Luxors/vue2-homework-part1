import './assets/css/style.css'
import {
  init,
  classModule,
  propsModule,
  attributesModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

const patch = init([
  classModule,
  propsModule,
  attributesModule,
  styleModule,
  eventListenersModule,
]);

const app = document.getElementById("app");

const users = [
  { id: 1, name: "Guduozi", decsription: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." },
  { id: 2, name: "Moeuver", decsription: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son." },
  { id: 3, name: "Airen", decsription: "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba." },
  { id: 4, name: "Chonter", decsription: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham" },
  { id: 5, name: "Heben", decsription: "The lives of two mob hit men, a boxer, a gangster's wife" },
  { id: 6, name: "Lienger", decsription: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo" }
];

function getImage(name) {
  return new URL(`./assets/img/${name}.jpg`, import.meta.url).href
}

function view(data) {
  return h('div.wrapper', [
    h('ul.list', data.map(user => {
      return h('li.list-item', [
        h('img.list-item-image', { attrs: { src: `${getImage(user.name)}` } }),
        h('div.list-item-info', [
          h('h3.list-item-title', user.name),
          h('p.list-item-descriptiion', user.decsription)
        ])
      ])
    }))
  ])
}

patch(app, view(users));