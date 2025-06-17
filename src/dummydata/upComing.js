export const upcomingEvents = [
  {
    id: 1,
    title: "React Conference 2025",
    description: "The biggest React conference of the year with industry experts",
    organizer: {
      id: 701,
      name: "React Community",
      avatar: "/organizers/react-org.jpg",
      verified: true
    },
    datetime: {
      start: new Date("2025-06-20T09:00:00"),
      end: new Date("2025-06-22T18:00:00"),
      timezone: "PST"
    },
    location: {
      type: "physical",
      venue: "San Francisco Convention Center",
      address: "747 Howard St, San Francisco, CA 94103",
      city: "San Francisco",
      state: "CA"
    },
    ticket: {
      price: 0,
      currency: "USD",
      type: "free",
      capacity: 2000,
      registered: 1245
    },
    category: "Technology",
    tags: ["react", "javascript", "conference"],
    isAttending: true,
    isInterested: false,
    attendees: 1245,
    speakers: [
      { id: 801, name: "Dan Abramov", role: "React Core Team" }
    ]
  }
];