
// import React from "react";
// import Layout from "../lib/components/Layout";
// import Head from "next/head";
// import FancyText from "../lib/components/FancyText";

// const EventsPage = ({ data }: { data: EventData[] }) => {
//   const staticData: EventData[] = [
//     {
//       id: "1",
//       title: "Sample Event 1",
//       date: "May 15, 2024",
//       location: "Sample Location 1",
//       description: "This is a sample event description.",
//       image: "https://via.placeholder.com/500x300",
//     },
//     {
//       id: "2",
//       title: "Sample Event 2",
//       date: "May 20, 2024",
//       location: "Sample Location 2",
//       description: "This is another sample event description.",
//       image: "https://via.placeholder.com/500x300",
//     },
//   ];

//   return (
//     <Layout>
//       <Head>
//         <title>Bhimraj Resort | Events</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
//       </Head>
//       <section className="my-24 mx-auto max-w-6xl">
//         <FancyText bgText="Celebration" className="my-12">
//           Events
//         </FancyText>

//         {staticData.map((event) => (
//           <EventCard
//             date={event.date}
//             description={event.description}
//             image={event.image}
//             location={event.location}
//             title={event.title}
//             key={event.id}
//           />
//         ))}
//       </section>
//     </Layout>
//   );
// };

// const EventCard = ({
//   date,
//   title,
//   location,
//   description,
//   image,
// }: {
//   date: string;
//   title: string;
//   location: string;
//   description: string;
//   image: string;
// }) => {
//   return (
//     <div className="flex py-12 px-6 mx-auto justify-center border-t-2 border-black border-b-2">
//       <div className="flex w-full flex-col-reverse md:flex-row">
//         <div className="flex flex-col space-y-12 w-[60%]">
//           <div className="flex flex-col space-y-4">
//             <span className="text-gray-500 font-normal my-2">{date}</span>
//             <h1 className="font-normal text-4xl md:text-5xl">{title}</h1>
//             <span className="my-2 font-black">{location}</span>
//           </div>
//           <span>{description}</span>
//         </div>
//         <div className="relative w-[90%] md:w-[40%] h-[50vh]">
//           <img src={image} className="object-cover w-full h-full" alt="Event" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventsPage;

// interface EventData {
//   id: string;
//   title: string;
//   date: string;
//   location: string;
//   description: string;
//   image: string;
// }
// // >>>>>>> e6b16c7618f434fcd5b7a34fae5214e53dbecf6b


import React from "react";
import Layout from "../lib/components/Layout";
import Head from "next/head";
import FancyText from "../lib/components/FancyText";

const EventsPage = ({ data }: { data: EventData[] }) => {
  const staticData: EventData[] = [
    {
      id: "1",
      title: "Sample Event 1",
      date: "May 15, 2024",
      location: "Sample Location 1",
      description: "This is a sample event description.",
      image: "https://via.placeholder.com/500x300",
    },
    {
      id: "2",
      title: "Sample Event 2",
      date: "May 20, 2024",
      location: "Sample Location 2",
      description: "This is another sample event description.",
      image: "https://via.placeholder.com/500x300",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | Events</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <section className="my-24 mx-auto max-w-6xl">
        <FancyText bgText="Celebration" className="my-12">
          Events
        </FancyText>

        {staticData.map((event) => (
          <EventCard
            date={event.date}
            description={event.description}
            image={event.image}
            location={event.location}
            title={event.title}
            key={event.id}
          />
        ))}
      </section>
    </Layout>
  );
};

const EventCard = ({
  date,
  title,
  location,
  description,
  image,
}: {
  date: string;
  title: string;
  location: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="flex py-12 px-6 mx-auto justify-center border-t-2 border-black border-b-2">
      <div className="flex w-full flex-col-reverse md:flex-row">
        <div className="flex flex-col space-y-12 w-[60%]">
          <div className="flex flex-col space-y-4">
            <span className="text-gray-500 font-normal my-2">{date}</span>
            <h1 className="font-normal text-4xl md:text-5xl">{title}</h1>
            <span className="my-2 font-black">{location}</span>
          </div>
          <span>{description}</span>
        </div>
        <div className="relative w-[90%] md:w-[40%] h-[50vh]">
          <img src={image} className="object-cover w-full h-full" alt="Event" />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;

interface EventData {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}
