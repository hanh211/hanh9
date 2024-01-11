// import {v4 as uuidv4} from 'uuid';
import gane from "./a";
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', gane)
// console.log(uuidv4());
gane()
