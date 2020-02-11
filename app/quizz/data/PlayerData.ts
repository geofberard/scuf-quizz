import {Person} from "./Person";
import {Name} from "./Name";

const aline = {id: "aline", label: "Aline", found: 69, score: 44};
const annece = {id: "annece", label: "Anne-Cécile", found: 50, score: 88};
const camille = {id: "camille", label: "Camille", found: 50, score: 63};
const cassandre = {id: "cassandre", label: "Cassandre", found: 69, score: 38};
const elyssa = {id: "elyssa", label: "Elyssa", found: 69, score: 69};
const flavia = {id: "flavia", label: "Flavia", found: 50, score: 44};
const hang = {id: "hang", label: "Hang", found: 100, score: 75};
const jeanne = {id: "jeanne", label: "Jeanne", found: 44, score: 69};
const joana = {id: "joana", label: "Joana", found: 31, score: 81};
const laure = {id: "laure", label: "Laure", found: 50, score: 56};
const lea = {id: "lea", label: "Lea", found: 56, score: 75};
const lucie = {id: "lucie", label: "Lucie", found: 69, score: 81};
const mariam = {id: "mariam", label: "Mariam", found: 100, score: 69};
const megane = {id: "megane", label: "Megane", found: 69, score: 100};
const pauline = {id: "pauline", label: "Pauline", found: 94, score: 25};
const rosalie = {id: "rosalie", label: "Rosalie", found: 81, score: 75};

export const getAllEmployees = () => [
    {id: "scufette_1", picture: "scufette_1.jpg", name: lea},
    {id: "scufette_2", picture: "scufette_2.jpg", name: hang},
    {id: "scufette_3", picture: "scufette_3.jpg", name: joana},
    {id: "scufette_4", picture: "scufette_4.jpg", name: camille},
    {id: "scufette_5", picture: "scufette_5.jpg", name: aline},
    {id: "scufette_6", picture: "scufette_6.jpg", name: elyssa},
    {id: "scufette_7", picture: "scufette_7.jpg", name: rosalie},
    {id: "scufette_8", picture: "scufette_8.jpg", name: megane},
    {id: "scufette_9", picture: "scufette_9.jpg", name: jeanne},
    {id: "scufette_10", picture: "scufette_10.jpg", name: annece},
    {id: "scufette_11", picture: "scufette_11.jpg", name: flavia},
    {id: "scufette_12", picture: "scufette_12.jpg", name: cassandre},
    {id: "scufette_13", picture: "scufette_13.jpg", name: pauline},
    {id: "scufette_14", picture: "scufette_14.jpg", name: laure},
    {id: "scufette_15", picture: "scufette_15.jpg", name: mariam},
    {id: "scufette_16", picture: "scufette_16.jpg", name: lucie},
];

export const allNames: Name[] = [lea, hang, joana, camille, aline, elyssa, rosalie, megane, jeanne, annece, flavia, cassandre, pauline, laure, mariam, lucie];