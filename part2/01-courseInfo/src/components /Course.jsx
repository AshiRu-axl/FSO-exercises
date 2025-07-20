const Header = ({ title }) => <h1>{title}</h1>;

const Title = ({ subTitle }) => <h2>{subTitle}</h2>;
const Part = ({ part }) => {
  const { name, exercises } = part;
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  const total = parts.reduce((init, part) => init + part.exercises, 0);
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>
        <strong>total of {total} exercises</strong>
      </p>
    </div>
  );
};

const Course = ({ courses }) => {
  console.log(courses);
  return (
    <>
      <Header title="Web Developement Curriculum" />
      {courses.map((course) => (
        <section key={course.id}>
          <Title subTitle={course.name} />
          <Content parts={course.parts} />
        </section>
      ))}
    </>
  );
};

export default Course;
