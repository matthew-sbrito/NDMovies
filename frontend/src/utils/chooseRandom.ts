function chooseRandom(): Function {

    let randomList: any[] = [];

    function chosenRandom(list: any): any {

        let randomChosen = Math.floor(Math.random() * (list.length - 1));
        let chosen = list[randomChosen];

        let repeat = false;

        randomList.forEach((random: any) => {
            if (random === chosen) {
                repeat = true;
            }
        });

        return repeat ? chosenRandom(list) : chosen;
    }

    return chosenRandom;
}

export { chooseRandom }