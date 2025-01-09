function createProfile({ name, age, interests }) {
    const [primaryInterest, secondaryInterest] = interests;
  
    return {
      name,
      age,
      primaryInterest,
      secondaryInterest,
    };
}
    const profile = createProfile({
    name: 'John',
    age: 25,
    interests: ['Reading', 'Traveling', 'Sports']
});
  
console.log(profile);
  