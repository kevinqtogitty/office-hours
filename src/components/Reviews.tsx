import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const reviews = [
    {
      path: 'https://source.unsplash.com/b3AYk8HKCl0',
      name: 'Grace',
      review:
        'This classroom management software is a game-changer! It effortlessly streamlines tasks like attendance tracking and assignment submission, making teaching a breeze.',
      location: 'Lancaster, PA'
    },
    {
      path: 'https://source.unsplash.com/pAtA8xe_iVM',
      name: 'David',
      review:
        'With its intuitive interface and powerful features, this SaaS platform has revolutionized classroom management. It has greatly improved communication between teachers and students, fostering a more engaging learning environment.',
      location: 'Washington, DC'
    },
    {
      path: 'https://source.unsplash.com/Zpzf7TLj_gA',
      name: 'Charrell',
      review:
        'I highly recommend this classroom management software to educators. It simplifies grading and reporting, saving valuable time and allowing teachers to focus on what matters most—teaching and inspiring students.',
      location: 'Houston, TX'
    },
    {
      path: 'https://source.unsplash.com/2EGNqazbAMk',
      name: 'Marcus',
      review:
        'This SaaS platform has transformed the way I manage my classroom. From organizing lesson plans to monitoring student progress, it offers a comprehensive set of tools that have greatly enhanced my teaching effectiveness',
      location: 'San Diego, CA'
    },
    {
      path: 'https://source.unsplash.com/9cH-uVU__0c',
      name: 'Hannah',
      review: `I cant imagine my classroom without this amazing SaaS platform. It not only keeps my students organized and engaged, but also provides valuable insights into their individual learning needs, helping me tailor instruction for maximum impact.`,
      location: 'Lehi, UT'
    }
  ];
  return (
    <div className="hero min-h-[50vh] bg-secondary-content text-black py-8 ">
      <div className="hero-content w-full flex-col justify-evenly gap-16">
        <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-secondary-content ">
          {reviews.map((review) => (
            <div key={review.name} className="carousel-item">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
