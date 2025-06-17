export const availableCourses = [
  {
    id: 1,
    title: "Complete React Development Bootcamp",
    description: "Master React from basics to advanced concepts with hands-on projects",
    instructor: {
      id: 901,
      name: "Sarah Tech",
      avatar: "/instructors/sarah.jpg",
      rating: 4.8,
      studentCount: 12500,
      courseCount: 8
    },
    content: {
      duration: "40 hours",
      lessonCount: 120,
      projectCount: 8,
      level: "intermediate",
      language: "English",
      subtitles: ["English", "Spanish", "French"]
    },
    pricing: {
      price: 89,
      currency: "USD",
      discountPrice: 49,
      isOnSale: true
    },
    enrollment: {
      studentCount: 12500,
      completionRate: 87
    },
    rating: {
      average: 4.8,
      count: 2340,
      distribution: {
        5: 1800,
        4: 420,
        3: 85,
        2: 25,
        1: 10
      }
    },
    skills: ["React", "JavaScript", "HTML", "CSS"],
    certificate: true,
    isEnrolled: false,
    progress: 0
  }
];