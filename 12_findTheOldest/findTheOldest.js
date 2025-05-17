const findTheOldest = function(people) {
    
    const peopleSort = (firstPerson, secondPerson) => {
        const firstPersonAge = alive(firstPerson) ?
            Date().getFullYear() - firstPerson.yearOfBirth :
            firstPerson.yearOfDeath - firstPerson.yearOfBirth;
        const secondPersonAge = alive(secondPerson) ?
            Date().getFullYear() - secondPerson.yearOfBirth :
            secondPerson.yearOfDeath - secondPerson.yearOfBirth;

        return firstPersonAge - secondPersonAge;
    }

    const alive = (person) => person.yearOfDeath;

    people.sort(peopleSort);
    console.log(people);
    return people.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
