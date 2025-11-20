"use client";

import { createContext, type ReactNode, useContext, useState } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    header: {
      name: "Riandi Kartiko",
      initials: "Diko",
      location: "Jakarta, Indonesia",
      about: "IT / Software Developer / Full Stack Engineer",
    },
    navigation: {
      summary: "Summary",
      workExperience: "Work Experience",
      education: "Education",
      skills: "Skills",
      workProjects: "Work Projects",
      sideProjects: "Side Projects",
    },
    summary: {
      title: "Summary",
    },
    workExperience: {
      title: "Work Experience",
      present: "Present",
    },
    education: {
      title: "Education",
    },
    skills: {
      title: "Skills",
    },
    projects: {
      workTitle: "Work Projects",
      sideTitle: "Side Projects",
    },
  },
  id: {
    header: {
      name: "Riandi Kartiko",
      initials: "Diko",
      location: "Jakarta, Indonesia",
      about: "IT / Pengembang Perangkat Lunak / Insinyur Full Stack",
    },
    navigation: {
      summary: "Ringkasan",
      workExperience: "Pengalaman Kerja",
      education: "Pendidikan",
      skills: "Keterampilan",
      workProjects: "Proyek Kerja",
      sideProjects: "Proyek Sampingan",
    },
    summary: {
      title: "Ringkasan",
    },
    workExperience: {
      title: "Pengalaman Kerja",
      present: "Sekarang",
    },
    education: {
      title: "Pendidikan",
    },
    skills: {
      title: "Keterampilan",
    },
    projects: {
      workTitle: "Proyek Kerja",
      sideTitle: "Proyek Sampingan",
    },
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const keys = key.split(".");
    // biome-ignore lint/suspicious/noExplicitAny: nested translation objects require dynamic access
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
