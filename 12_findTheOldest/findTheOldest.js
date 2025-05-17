const findTheOldest = function(people) {
    //SORT array
        //sort function compares first person's death date - birth date
            //to the second persons
    //RETURN array[0]
    people.sort((firstPerson, secondPerson) => (firstPerson.yearOfDeath - firstPerson.yearOfBirth) - (secondPerson.yearOfDeath - secondPerson.yearOfBirth));
    console.log(people);
    return people.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
