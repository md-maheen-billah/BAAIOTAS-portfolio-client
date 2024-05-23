import { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard";

const People = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("people.json")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);
  return (
    <div id="members-section" className="my-16">
      <h2 className="text-center text-4xl font-bold mb-14">Members</h2>
      <div className="flex justify-center items-center">
        {people.slice(0, 1).map((person, idx) => (
          <PeopleCard person={person} key={idx}></PeopleCard>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-14 lg:grid-cols-5 my-12">
        {people.slice(1).map((person, idx) => (
          <PeopleCard person={person} key={idx}></PeopleCard>
        ))}
      </div>
    </div>
  );
};

export default People;
