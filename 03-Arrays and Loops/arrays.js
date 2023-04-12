var foods = ["parotta", "idly", "egg-fried rice", "dosa"];
foods.push("biriyani");
foods.push("noodles");
for (var _i = 0, foods_1 = foods; _i < foods_1.length; _i++) {
    var food = foods_1[_i];
    if (food == "biriyani") {
        console.log(food + " - My Favorite");
    }
    else {
        console.log(food);
    }
}
