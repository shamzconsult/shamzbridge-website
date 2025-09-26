"use client";
import { useState, useEffect } from "react";
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
          <section
            className="relative text-white min-h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://cdn.hashnode.com/res/hashnode/image/upload/v1724053027502/8fc855a4-40a9-4c94-98d9-262ad3ce443c.jpeg')",
            }}
          >
            <div className="absolute inset-0 bg-black/80"></div>
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Events</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Join us for transformative events that bring together leaders,
                innovators, and change-makers to share knowledge and build
                lasting connections.
              </p>
            </div>
          </section>

          <div className="flex flex-col justify-center items-center gap-20 text-gray-600 p-4 md:p-8">
            {/* Upcoming Events */}
            <section className="flex flex-col justify-center items-center gap-6 w-full max-w-7xl">
              <h1 className="font-bold text-lg md:text-2xl">Upcoming Events</h1>
              <p className="text-center px-4">
                Discover upcoming opportunities to gain insights, build
                meaningful networks, and unlock growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
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
                          className="flex flex-col border border-slate-200 rounded-lg overflow-hidden hover:border-orange-300 hover:shadow-md transition-all duration-300 h-full"
                        >
                          <div className="aspect-video overflow-hidden">
                            <img
                              className="w-full h-full object-cover"
                              src={image || "/placeholder.svg"}
                              alt="event"
                            />
                          </div>
                          <div className="flex flex-col gap-3 p-4 flex-1">
                            <h2 className="font-bold text-gray-800 text-sm md:text-base line-clamp-2 min-h-[2.5rem]">
                              {title}
                            </h2>

                            <p className="text-gray-600 text-xs md:text-sm line-clamp-2 flex-1">
                              {description}
                            </p>

                            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 flex-wrap">
                              <span>{formatDate(startDate)}</span>
                              <span>-</span>
                              <span>{formatDate(endDate)}</span>
                            </div>

                            {/* Register Button */}
                            <div className="w-full mt-2">
                              <div className="flex justify-center items-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-3 md:py-3 md:px-4 rounded-md transition-colors text-sm md:text-base">
                                Register Now
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 md:h-5 md:w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Link>
                      )
                  )
                ) : (
                  <div className="text-red-400 col-span-full text-center py-8">
                    No upcoming event for now...
                  </div>
                )}
              </div>
            </section>

            {/* Past Events */}
            <section className="flex flex-col justify-center items-center gap-6 w-full max-w-7xl">
              <h1 className="font-bold text-lg md:text-2xl">Past Events</h1>
              <p className="text-center px-4">
                Explore highlights from our past events and the positive change
                they have created.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
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
                          className="flex flex-col border border-slate-200 rounded-lg overflow-hidden hover:border-orange-300 hover:shadow-md transition-all duration-300 h-full"
                        >
                          <div className="aspect-video overflow-hidden">
                            <img
                              className="w-full h-full object-cover"
                              src={image || "/placeholder.svg"}
                              alt="event"
                            />
                          </div>
                          <div className="flex flex-col gap-3 p-4 flex-1">
                            <h2 className="font-bold text-gray-800 text-sm md:text-base line-clamp-2 min-h-[2.5rem]">
                              {title}
                            </h2>
                            <p className="text-gray-600 text-xs md:text-sm line-clamp-2 flex-1">
                              {description}
                            </p>
                            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 flex-wrap">
                              <span>{formatDate(startDate)}</span>
                              <span>-</span>
                              <span>{formatDate(endDate)}</span>
                            </div>
                          </div>
                        </Link>
                      )
                  )
                ) : (
                  <div className="text-gray-500 col-span-full text-center py-8">
                    No past events...
                  </div>
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
