const findTheOldest = function(people) {
    
    const peopleSort = (firstPerson, secondPerson) => {
        const firstPersonAge = dead(firstPerson) ?
            firstPerson.yearOfDeath - firstPerson.yearOfBirth :
            new Date().getFullYear() - firstPerson.yearOfBirth;
        const secondPersonAge = dead(secondPerson) ?
            secondPerson.yearOfDeath - secondPerson.yearOfBirth :
            new Date().getFullYear() - secondPerson.yearOfBirth;

        //console.log(`${firstPerson.name} is ${firstPersonAge} years old.`)
        //console.log(`${secondPerson.name} is ${secondPersonAge} years old.`)

        return firstPersonAge - secondPersonAge;
    }

    const dead = (person) => {
        //console.log(person.yearOfDeath);
        return person.yearOfDeath;
    };

    people.sort(peopleSort);
    console.log(people);
    return people.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
