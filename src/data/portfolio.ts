export interface PortfolioItem {
  id: string;
  src: string;
  title: string;
  category: string;
  year: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    src: "/work1.jpg",
    title: "Man",
    category: "Editorial",
    year: "2026",
  },
  {
    id: "2",
    src: "/work2.jpg",
    title: "Presence",
    category: "Commercial",
    year: "2025",
  },
  { id: "3", src: "/work3.jpg", title: "Form", category: "Art", year: "2026" },
  {
    id: "4",
    src: "/work1.jpg",
    title: "Shadow",
    category: "Editorial",
    year: "2024",
  },
  {
    id: "5",
    src: "/work2.jpg",
    title: "Light",
    category: "Portrait",
    year: "2026",
  },
  {
    id: "6",
    src: "/work3.jpg",
    title: "Street",
    category: "Commercial",
    year: "2023",
  },

  {
    id: "7",
    src: "/work3.jpg",
    title: "Street",
    category: "Commercial",
    year: "2023",
  },
];
