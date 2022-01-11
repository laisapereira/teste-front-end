var tlou = {
    title: "The Last of  Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log("Similar games to ".concat(title, ": Uncharted, A Plague Tale, Metro"));
    }
};
console.log(tlou.genre);
tlou.getSimilars(tlou.title);
