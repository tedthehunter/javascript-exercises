const findTheOldest = function(people) {

    const peopleSort = (firstPerson, secondPerson) => {

        const firstPersonAge = isDead(firstPerson) ?
            firstPerson.yearOfDeath - firstPerson.yearOfBirth :
            new Date().getFullYear() - firstPerson.yearOfBirth;
            
        const secondPersonAge = isDead(secondPerson) ?
            secondPerson.yearOfDeath - secondPerson.yearOfBirth :
            new Date().getFullYear() - secondPerson.yearOfBirth;

        return firstPersonAge - secondPersonAge;
    }

    const isDead = (person) => {
        return person.yearOfDeath;
    };

    people.sort(peopleSort);
    return people.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
