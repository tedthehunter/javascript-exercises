const findTheOldest = function(people) {
    
    const peopleSort = (firstPerson, secondPerson) => {
        const firstPersonAge = firstPerson.yearOfDeath - firstPerson.yearOfBirth;
        const secondPersonAge = secondPerson.yearOfDeath - secondPerson.yearOfBirth;

        return firstPersonAge - secondPersonAge;
    }

    people.sort(peopleSort);
    console.log(people);
    return people.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
