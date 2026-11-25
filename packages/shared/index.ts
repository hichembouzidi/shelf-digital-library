export type Collection = "scientific" | "stories" | "comics";

export type LibraryItem = {
  id: string;
  title: string;
  titleAr: string;
  author: string;
  authorAr: string;
  collection: Collection;
  category: string;
  categoryAr: string;
  type: string;
  language: string;
  year: number;
  description: string;
  descriptionAr: string;
  cover: string;
  pages: number;
  featured?: boolean;
};

export const collectionLabels: Record<Collection, { en: string; ar: string }> = {
  scientific: { en: "Scientific & Educational", ar: "علمي وتعليمي" },
  stories: { en: "Stories & Literature", ar: "قصص وأدب" },
  comics: { en: "Comics", ar: "قصص مصورة" }
};

export const seedItems: LibraryItem[] = [
  {
    id: "clean-code",
    title: "Clean Code",
    titleAr: "الكود النظيف",
    author: "Robert C. Martin",
    authorAr: "روبرت سي مارتن",
    collection: "scientific",
    category: "Computer Science",
    categoryAr: "علوم الحاسوب",
    type: "Programming",
    language: "English",
    year: 2008,
    description: "A practical guide to writing readable, maintainable software and building better programming habits.",
    descriptionAr: "دليل عملي لكتابة برمجيات واضحة وقابلة للصيانة وتطوير عادات برمجية أفضل.",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=700&q=85",
    pages: 464,
    featured: true
  },
  {
    id: "thinking-fast",
    title: "Thinking, Fast and Slow",
    titleAr: "التفكير، السريع والبطيء",
    author: "Daniel Kahneman",
    authorAr: "دانيال كانيمان",
    collection: "scientific",
    category: "Psychology",
    categoryAr: "علم النفس",
    type: "Psychology",
    language: "English",
    year: 2011,
    description: "An exploration of the two systems that shape the way people think and make decisions.",
    descriptionAr: "استكشاف للنظامين اللذين يشكلان طريقة تفكير الإنسان واتخاذه للقرارات.",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=700&q=85",
    pages: 499
  },
  {
    id: "sports-science",
    title: "The Science of Sport",
    titleAr: "علم الرياضة",
    author: "Various Authors",
    authorAr: "مؤلفون متعددون",
    collection: "scientific",
    category: "Sports & Physical Education",
    categoryAr: "الرياضة والتربية البدنية",
    type: "Sports Science",
    language: "English",
    year: 2022,
    description: "An introduction to exercise, performance, training principles, and sports physiology.",
    descriptionAr: "مقدمة في التمارين والأداء ومبادئ التدريب وفسيولوجيا الرياضة.",
    cover: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=85",
    pages: 280
  },
  {
    id: "sherlock",
    title: "The Adventures of Sherlock Holmes",
    titleAr: "مغامرات شيرلوك هولمز",
    author: "Arthur Conan Doyle",
    authorAr: "آرثر كونان دويل",
    collection: "stories",
    category: "Short Stories",
    categoryAr: "قصص قصيرة",
    type: "Classic Literature",
    language: "English",
    year: 1892,
    description: "A collection of mystery stories featuring the famous detective Sherlock Holmes.",
    descriptionAr: "مجموعة من قصص الغموض التي يظهر فيها المحقق الشهير شيرلوك هولمز.",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=700&q=85",
    pages: 307,
    featured: true
  },
  {
    id: "little-prince",
    title: "The Little Prince",
    titleAr: "الأمير الصغير",
    author: "Antoine de Saint-Exupéry",
    authorAr: "أنطوان دو سانت إكزوبيري",
    collection: "stories",
    category: "Novels",
    categoryAr: "روايات",
    type: "Classic Literature",
    language: "English",
    year: 1943,
    description: "A poetic tale about friendship, curiosity, and seeing the world through different eyes.",
    descriptionAr: "حكاية شاعرية عن الصداقة والفضول ورؤية العالم بعيون مختلفة.",
    cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=700&q=85",
    pages: 96
  },
  {
    id: "manga-sample",
    title: "Manga Collection — Sample",
    titleAr: "مجموعة مانغا — نموذج",
    author: "Demo Collection",
    authorAr: "مجموعة تجريبية",
    collection: "comics",
    category: "Japanese Manga",
    categoryAr: "مانغا يابانية",
    type: "Manga",
    language: "English",
    year: 2024,
    description: "A placeholder entry showing how a manga volume appears in the library catalog.",
    descriptionAr: "عنصر تجريبي يوضح طريقة عرض مجلد مانغا في المكتبة.",
    cover: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=700&q=85",
    pages: 180,
    featured: true
  },
  {
    id: "webtoon-sample",
    title: "Webtoon — Sample Series",
    titleAr: "ويب تون — سلسلة تجريبية",
    author: "Demo Studio",
    authorAr: "استوديو تجريبي",
    collection: "comics",
    category: "Webtoons",
    categoryAr: "ويب تون",
    type: "Webtoon",
    language: "English",
    year: 2025,
    description: "A sample series entry for vertical-scroll comics and webtoon collections.",
    descriptionAr: "عنصر تجريبي لسلاسل القصص المصورة ذات التمرير العمودي.",
    cover: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=700&q=85",
    pages: 65
  }
];
