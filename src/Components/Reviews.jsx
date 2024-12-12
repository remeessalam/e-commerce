import avt1 from "../assets/images/reviews/image1.jpeg";
import avt2 from "../assets/images/reviews/image2.jpeg";
import avt3 from "../assets/images/reviews/image3.jpeg";
import avt4 from "../assets/images/reviews/image4.jpeg";
import avt5 from "../assets/images/reviews/image5.jpeg";
import avt6 from "../assets/images/reviews/image6.jpeg";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

const reviews = [
  {
    id: 1,
    name: "Ram Raghav",
    img: avt1,
    desc: "“I started my e-commerce business with Boostmysites, and the experience has been nothing short of transformative. From the initial consultation to the final launch, their team provided expert guidance and tailored solutions to meet my business needs. Their platform made setting up an online store easy and intuitive, and their ongoing support ensures that I'm never left in the dark. Highly recommend!”",
  },
  {
    id: 2,
    name: "Sunny Kurian",
    img: avt3,
    desc: "“Choosing Boostmysites to help me start my e-commerce company was the best decision I could have made. Their comprehensive approach to understanding my business goals and requirements allowed me to launch with confidence. The tools and resources provided were top-notch, and the support team was always available to assist with any issues. My online store is now thriving, thanks to their expertise!”",
  },
  {
    id: 3,
    name: "Hima Sagar",
    img: avt4,
    desc: "“I was hesitant about starting an e-commerce business, but Boostmysites made the entire process seamless. Their platform is easy to navigate, and the setup process was straightforward. What I appreciate most is the personalized service—they took the time to understand my vision and helped me build a store that reflects my brand identity. If you're looking to start an e-commerce business, I highly recommend Boostmysites.”",
  },
  {
    id: 4,
    name: "Sandeep Acharya",
    img: avt6,
    desc: "“Boostmysites truly exceeded my expectations when I decided to start my e-commerce business. They not only provided me with a robust platform but also with the necessary resources and support to ensure my business’s success. The team was incredibly knowledgeable, and the tools they offered helped me reach a wider audience. I’m so glad I chose them!”",
  },
  {
    id: 5,
    name: "Lakshya prasad",
    img: avt2,
    desc: "“Starting my e-commerce business with Boostmysites was a game-changer. Their expertise and tailored advice were invaluable in setting up my online store. The platform is user-friendly, and the team is always ready to assist. Whether you're a newbie or a seasoned entrepreneur, Boostmysites makes the process simple and efficient.”",
  },
  {
    id: 6,
    name: "Anwar mohammed",
    img: avt5,
    desc: "Boostmysites was the ideal partner for me when I decided to venture into e-commerce. They provided clear guidance and a streamlined platform for setting up my store. The best part was their ongoing support—it feels like they’re always there to help, even after the launch. I couldn’t have done it without them!”",
  },
];

const Reviews = () => {
  return (
    <div data-aos="fade-up" className="mt-14">
      <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
      {/* {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))} */}
    </div>
  );
};

export default Reviews;

// const ReviewCard = ({ review }) => {
//   return (
//     <div className="w-full min-h-[22rem] h-full bg-white/90 rounded-lg p-3 md:p-6 flex flex-col gap-2 items-center">
//       <img
//         src={review.img}
//         className="h-[4rem] w-[4rem] object-cover rounded-full"
//         alt={review.name}
//       />
//       <h4 className="text-lg leading-none font-bold text-black">
//         {review.name}
//       </h4>
//       <ReactStars
//         edit={false}
//         value={5}
//         count={5}
//         size={28}
//         activeColor="#FFAB23"
//       />
//       <p className="text-black/70 text-sm whitespace-pre-line leading-normal">
//         {review.desc}
//       </p>
//     </div>
//   );
// };
