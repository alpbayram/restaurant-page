import '../styles/style.css';
import '../styles/reset.css';
import '../styles/fonts.css';

import Icon from '../images/book1.avif';
"use strict";
const myIcon = new Image();

myIcon.src = Icon;

const element = document.createElement('div');
element.appendChild(myIcon);
document.body.appendChild(element)