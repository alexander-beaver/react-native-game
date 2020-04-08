import Character from "./Character";

class Dragon extends Character{
    constructor() {
        super();

    }
    action1 = Character.constructAction("Fire", 20, 60);
    action2 = Character.constructAction("Divebomb", 10, 75);
    action3 = Character.constructAction("Scare", 5, 90);
}
