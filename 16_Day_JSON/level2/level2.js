//1.Stringify the students object with only firstName, lastName and skills properties

const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const cc1 = JSON.stringify(student, ["firstName", "lastName", "skills"], 44);
console.log(cc1);