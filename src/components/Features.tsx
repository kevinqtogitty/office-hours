import React from 'react';

const Features = () => {
  const features = [
    {
      cardTitle: 'Student Management',
      cardDesc:
        'All of your students’ data gathered in one place. Create student profiles and manage a long list of student-related processes in a smart way.'
    },
    {
      cardTitle: 'Class Management',
      cardDesc:
        'Build, organize and easily modify your curriculum structure online. Create courses or training subjects offered, to support all the relevant administrative processes.'
    },
    {
      cardTitle: 'Gradebook',
      cardDesc:
        'Enter and calculate final scores automatically using our powerful build-in gradebook. Numerical and Non-Numerical Grades are available.'
    },
    {
      cardTitle: 'Attendance',
      cardDesc:
        'Easily track and share attendance data and keep administrators, teachers and parents in the loop.'
    },
    {
      cardTitle: 'Scheduling',
      cardDesc: 'With a click of a button, schedule meetings with students.'
    }
  ];
  return (
    <div className="hero min-h-[50vh] bg-inherit text-black py-8">
      <div className="hero-content w-full flex-col justify-evenly gap-16">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl justify-top text-blue-500 w-fit ">
            - Core Features -
          </h3>
          <h2 className="text-5xl justify-top">
            How can OfficeHours help you?
          </h2>
        </div>
        <div className=" flex flex-row justify-evenly gap-5">
          {features.map((item) => {
            return (
              <div
                key={item.cardTitle}
                className="card w-60 bg-accent-content text-slate-900 h-200"
              >
                <div className="card-body items-left text-left gap-4 flex-col">
                  <h2 className="card-title text-2xl">{item.cardTitle}</h2>
                  <p>{item.cardDesc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
