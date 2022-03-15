import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Single = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <Single key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Course;
