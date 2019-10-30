"use strict";

/**
 *  Ajout de Bootstrap
**/
import "bootstrap";

import "../css/style.scss";


/* --------------- CODE --------------- */
console.log("--------------- JS ---------------");



import { monCompteur, incrementeMonCompteur } from "./librairie";

console.log("Ceci est la valeur de mon compteur : " + monCompteur);

incrementeMonCompteur();

console.log("Ceci est la nouvelle valeur de mon compteur : " + monCompteur);

