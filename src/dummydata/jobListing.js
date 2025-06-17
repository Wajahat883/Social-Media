export const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: {
      id: 601,
      name: "TechCorp Solutions",
      logo: "/companies/techcorp.jpg",
      size: "500-1000 employees",
      industry: "Technology",
      rating: 4.5
    },
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
      remote: true,
      hybrid: false
    },
    salary: {
      min: 120000,
      max: 150000,
      currency: "USD",
      period: "annually",
      equity: true
    },
    employment: {
      type: "full-time",
      level: "senior",
      department: "Engineering"
    },
    postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    applicationDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    requirements: ["React", "TypeScript", "5+ years experience"],
    benefits: ["Health Insurance", "401k", "Remote Work"],
    applicantCount: 47,
    isApplied: false,
    isSaved: true
  }
];
