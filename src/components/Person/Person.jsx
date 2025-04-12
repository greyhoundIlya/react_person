export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partners = sex === 'm' ? 'Woomen' : 'Man';
  const isMarrieds = isMarried
    ? `${partnerName} is my ${partners}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person_age">I am {age}</p>}
      <p className="Person__partner">{isMarrieds} is my wife</p>
    </section>
  );
};
