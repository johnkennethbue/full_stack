const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
]

nightClubRegister.forEach("age"), function(doNotEnterAge){
    for (i = 0; i >= age.length; i++) {
        if (age.length[i] > 18){
            console.log("I'm sorry, you are not allowed to enter the establishment.")
        }
    }
    console.log(doNotEnterAge);
}

nightClubRegister.forEach("gender"), function(mrMrs){
    const m = "male";
    const f = "female";

    for (i = 0; i >= gender.length; i++){
    if (gender.length[i] === m){
        console.log("Mr." + gender.length[i]);
    }
    else if(gender.length[i] === f){
        console.log("Ms./Mrs." + gender.length[i]);
    }
}
}