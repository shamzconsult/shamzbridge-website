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
          <section className="relative pt-24 pb-16 -mt-[60px] bg-gradient-to-br from-orange-600 via-orange-400 to-orange-500 text-white min-h-[70vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/20"></div>
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="absolute inset-0 overflow-hidden">
              {/* Calendar Icon */}
              <div
                className="absolute top-20 left-10 animate-bounce"
                style={{ animationDelay: "0s", animationDuration: "3s" }}
              >
                <svg
                  className="w-8 h-8 text-white/30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
              </div>

              {/* Microphone Icon */}
              <div
                className="absolute top-32 right-16 animate-bounce"
                style={{ animationDelay: "1s", animationDuration: "4s" }}
              >
                <svg
                  className="w-10 h-10 text-white/25"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>
              </div>

              {/* People/Group Icon */}
              <div
                className="absolute bottom-32 left-20 animate-bounce"
                style={{ animationDelay: "2s", animationDuration: "3.5s" }}
              >
                <svg
                  className="w-12 h-12 text-white/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99l-2.54 3.38c-.35.47-.35 1.1 0 1.57l2.54 3.38c.47.62 1.21.99 2.01.99h1.94c.49 0 1.05-.09 1.45-.56L17 14.5V22h2V9.5l-3.61 2.06z" />
                  <circle cx="9" cy="4" r="2" />
                  <path d="M15.39 8.56c-.4-.47-.96-.56-1.45-.56H12c-.8 0-1.54.37-2.01.99L7.45 11.37c-.35.47-.35 1.1 0 1.57L9.99 16.32c.47.62 1.21.99 2.01.99h1.94c.49 0 1.05-.09 1.45-.56L17 14.5V22h2V9.5l-3.61 2.06z" />
                </svg>
              </div>

              {/* Trophy Icon */}
              <div
                className="absolute top-40 left-1/2 animate-bounce"
                style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
              >
                <svg
                  className="w-9 h-9 text-white/30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h4v2h-1l-.64 7.11c-.07.78-.69 1.39-1.47 1.39H16v4c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4H5.89c-.78 0-1.4-.61-1.47-1.39L3.42 6H2V4h5zm2 0h6V2H9v2z" />
                </svg>
              </div>

              {/* Star Icon */}
              <div
                className="absolute bottom-20 right-10 animate-bounce"
                style={{ animationDelay: "1.5s", animationDuration: "3.8s" }}
              >
                <svg
                  className="w-7 h-7 text-white/35"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              {/* Clock Icon */}
              <div
                className="absolute top-60 right-32 animate-bounce"
                style={{ animationDelay: "2.5s", animationDuration: "3.2s" }}
              >
                <svg
                  className="w-8 h-8 text-white/25"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
              </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
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
                            src={image || "/placeholder.svg"}
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
                            src={image || "/placeholder.svg"}
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
