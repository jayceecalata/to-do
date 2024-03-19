import { Container, Project } from "./logic/todo";

const Default = new Container();
const Today = new Project("Today");
Default.add(Today);

