class character{
    action1 = {
        name: "",
        destruction: 0,
        reliability: 0
    }

    action2 = {
        name: "",
        destruction: 0,
        reliability: 0
    }

    action3 = {
        name: "",
        destruction: 0,
        reliability: 0
    }
    constructor() {
    }

    static constructAction(name, destruction, reliability){
        return({
            name: name,
            destruction: destruction,
            reliability: reliability
        });
    }
}
