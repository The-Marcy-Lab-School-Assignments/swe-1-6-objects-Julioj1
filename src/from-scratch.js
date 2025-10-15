const coolGreeting = (person) => {
  if (person.isCool === true) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  } else {
    return `Greetings ${person.name}, how have you been lately?`
  }
};

const haveBirthday = (person) => {
  person.age++;
  return;
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.spyHandle = spyHandle;
};

const carMaker = (name, maker, year) => {
  car = {
    needsOilChange: false,
  }
  car.name = name;
  car.maker = maker;
  car.year = year;
  return car;
};

const weAreNotFriends = (person) => person.friends.pop();

const listHobbies = (person) => {
  for (let i = 0; i < person.hobbies.length; i++) {
    console.log(`${person.name} likes ${person.hobbies[i]}.`)
  }
};

const getNextOpponent = (team) => {
  if (team.matches.length === 0) {
    return null
  } else {
    return team.matches[0].teamName
  }
};

const listAllKeys = (object) => {
  return (Object.keys(object));
};

const listAllValues = () => {
};

const convertToMatrix = () => {
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
