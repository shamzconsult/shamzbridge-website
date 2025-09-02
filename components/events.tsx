"use client";
import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { getCurrentEvent } from "./upcoming-event";
import Link from "next/link";
import Loading from "./loader";
import Footer from "./ui/footer";

interface EventType {
  image: string;
  title: string;
  description: string;
  startDate: number;
  endDate: number;
  _id: number;
  isActive: boolean;
}

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const options = { month: "short", day: "numeric", year: "numeric" } as const;
  const formattedDate = date.toLocaleDateString("en-US", options).split(", ");

  const monthDay = formattedDate[0].split(" ");
  const month = monthDay[0];
  const day = monthDay[1];

  const year = formattedDate[1];

  return `${month}-${day}-${year}`;
};
const Events = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getCurrentEvent();
      setEvent(data.events);
      setLoading(false);
    } catch (error) {
      console.log("Error loading data", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const checkForUpcomingEvents = (eventDate: EventType[]) => {
    const todayTimestamp = Date.now();
    return eventDate.filter((item) => {
      const eventEndDate = new Date(item.endDate).getTime();
      return eventEndDate > todayTimestamp;
    });
  };
  const checkForPastEvents = (eventDate: EventType[]) => {
    const todayTimestamp = Date.now();
    return eventDate.filter((item) => {
      const eventEndDate = new Date(item.endDate).getTime();
      return eventEndDate < todayTimestamp;
    });
  };

  const filteredPastEvents = checkForPastEvents(event);
  const filteredUpcomingEvents = checkForUpcomingEvents(event);

  const EventPageLoader = () => (
    <div className="min-h-[70vh] flex justify-center items-center">
      <Loading />
    </div>
  );

  return (
    <>
      {loading ? (
        <EventPageLoader />
      ) : (
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="pt-24 pb-16 -mt-[60px] bg-gradient-to-br from-orange-600 via-orange-400 to-orange-500 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Events</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Join us for transformative events that bring together leaders,
                Innovators, and change-makers to share knowledge and build
                lasting connections.
              </p>
            </div>
          </section>
          <div className="flex flex-col justify-center items-center gap-20 text-gray-600 p-8">
            <section className="flex flex-col justify-center items-center gap-6">
              <h1 className="font-bold text-lg">Upcoming Events</h1>
              <p>
                Discover upcoming opportunities to gain insights, build
                meaningful networks, and unlock growth.
              </p>
              <div className="flex flex-wrap justify-center items-start gap-8">
                {filteredUpcomingEvents.length > 0 ? (
                  filteredUpcomingEvents.map(
                    ({
                      image,
                      startDate,
                      endDate,
                      title,
                      _id,
                      isActive,
                      description,
                    }) =>
                      isActive && (
                        <Link
                          href={`/events/${_id}`}
                          key={_id}
                          className="flex flex-col gap-2 lg:w-[25%] border border-slate-100 rounded-md overflow-hidden hover:border-orange-300"
                        >
                          <img
                            className="h-full w-full object-contain  object-top"
                            src={image}
                            alt="event"
                          />
                          <div className="flex flex-col gap-2 p-2">
                            <h2 className="opacity-70 font-bold truncate max-w-[150px] xl:max-w-[200px]">
                              {title}
                            </h2>
                            <div>
                              <h3 className="opacity-70 truncate max-w-[450px] md:max-w-[650px] xl:max-w-[400px]">
                                {description}
                              </h3>
                            </div>
                            <div className="flex gap-4">
                              <p>{formatDate(startDate)}</p>
                              <h1 className="bold text-lg">-</h1>
                              <p>{formatDate(endDate)}</p>
                            </div>
                            <div className="w-full mt-2">
                              <a
                                href=""
                                className="flex justify-center items-center gap-2 w-full bg-orange-500  hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
                              >
                                Register Now
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </Link>
                      )
                  )
                ) : (
                  <div className="text-red-200">
                    No upcoming event for now...
                  </div>
                )}
              </div>
            </section>
            <section className="flex flex-col justify-center items-center gap-6">
              <h1 className="font-bold text-lg">Past Events</h1>
              <p>
                Explore highlights from our past events and the positive change
                they have created.
              </p>
              <div className="flex flex-wrap justify-center items-start gap-8">
                {filteredPastEvents.length > 0 ? (
                  filteredPastEvents.map(
                    ({
                      image,
                      startDate,
                      endDate,
                      title,
                      isActive,
                      _id,
                      description,
                    }) =>
                      isActive && (
                        <Link
                          href={`/events/${_id}`}
                          key={_id}
                          className="flex flex-col gap-2 lg:w-[25%] border border-slate-100 rounded-md overflow-hidden p-2 hover:border-orange-300"
                        >
                          <img
                            className="h-full w-full object-contain object-top"
                            src={image}
                            alt="event"
                          />
                          <div className="flex flex-col gap-2 p-2">
                            <h2 className="opacity-70 font-bold truncate max-w-[150px] xl:max-w-[200px]">
                              {title}
                            </h2>
                            <div>
                              <h3 className="opacity-70 truncate max-w-[450px] md:max-w-[650px] xl:max-w-[400px]">
                                {description}
                              </h3>
                            </div>
                            <div className="flex gap-4">
                              <p>{formatDate(startDate)}</p>
                              <h1 className="bold text-lg">-</h1>
                              <p>{formatDate(endDate)}</p>
                            </div>
                          </div>
                        </Link>
                      )
                  )
                ) : (
                  <div>No past event..</div>
                )}
              </div>
            </section>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Events;
