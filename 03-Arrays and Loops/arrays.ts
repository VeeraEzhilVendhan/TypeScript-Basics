let foods: string[]=["parotta","idly","egg-fried rice","dosa"];


foods.push("biriyani");
foods.push("noodles");

for(let food of foods){
    if(food=="biriyani"){
        console.log(food+" - My Favorite");
    }
    else{
        console.log(food);
    }
   
}