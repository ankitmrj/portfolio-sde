'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { extraTranslations } from './translations-data'

export type Language = 'en' | 'hi' | 'ja'

type TranslationDict = {
  nav: {
    about: string
    experience: string
    projects: string
    blogs: string
    contact: string
  }

  hero: {
    title: string
    description: string
    ctaTouch: string
    powerOn: string
    powerOff: string
    location: string
    name: string
  }

  skills: {
    title: string
  }

  experience: {
    title: string
  }

  projects: {
    title: string
  }

  contact: {
    title: string
    heading: string
    subtitle: string
    name: string
    email: string
    subject: string
    message: string
    send: string
    sending: string
    success: string
    error: string
  }

  contributions: {
    title: string
    totalCount: string
    loading: string
  }

  commandPalette: {
    searchPlaceholder: string
    langEnTitle: string
    langEnSubtitle: string
    langHiTitle: string
    langHiSubtitle: string
    langJaTitle: string
    langJaSubtitle: string
  }

  extra: typeof extraTranslations.en
}

const translations: Record<Language, TranslationDict> = {
  en: {
    nav: {
      about: 'about',
      experience: 'experience',
      projects: 'projects',
      blogs: 'blogs',
      contact: 'contact',
    },

    hero: {
      title: 'Software Engineer | Competitive Programmer',
      description:
        'B.Tech CSE student at MMMUT with strong expertise in Data Structures, Algorithms and Full Stack Development. I enjoy building scalable applications and solving challenging engineering problems.',
      ctaTouch: 'Get in Touch',
      powerOn: 'Power: ON',
      powerOff: 'Power: OFF',
      location: 'India',
      name: 'Ankit Srivastav',
    },

    skills: {
      title: 'Skills & Tech Stack',
    },

    experience: {
      title: 'Work Experience',
    },

    projects: {
      title: 'Featured Projects',
    },

    contact: {
      title: 'Get In Touch',
      heading: "Let's Build Something Together",
      subtitle:
        "Have a question or want to work together? Drop a message and I'll get back to you.",
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Something went wrong. Please try again.',
    },

    contributions: {
      title: 'Contributions',
      totalCount: 'contributions in the last year',
      loading: 'Loading...',
    },

    commandPalette: {
      searchPlaceholder: 'Search for a section or action…',
      langEnTitle: 'Change language to English',
      langEnSubtitle: 'English language mode',
      langHiTitle: 'Change language to Hindi',
      langHiSubtitle: 'हिन्दी भाषा मोड (Hindi)',
      langJaTitle: 'Change language to Japanese',
      langJaSubtitle: '日本語の表示モード (Japanese)',
    },

    extra: extraTranslations.en,
  },

  hi: {
    nav: {
      about: 'परिचय',
      experience: 'अनुभव',
      projects: 'परियोजनाएं',
      blogs: 'ब्लॉग',
      contact: 'संपर्क',
    },

    hero: {
      title: 'सॉफ्टवेयर इंजीनियर | प्रतियोगी प्रोग्रामर',
      description:
        'MMMUT में B.Tech CSE छात्र, Data Structures, Algorithms और Full Stack Development में मजबूत विशेषज्ञता के साथ। मुझे स्केलेबल एप्लिकेशन बनाना और चुनौतीपूर्ण इंजीनियरिंग समस्याओं को हल करना पसंद है।',
      ctaTouch: 'संपर्क करें',
      powerOn: 'पावर: चालू',
      powerOff: 'पावर: बंद',
      location: 'भारत',
      name: 'अंकित श्रीवास्तव',
    },

    skills: {
      title: 'कौशल और तकनीकी स्टैक',
    },

    experience: {
      title: 'कार्य अनुभव',
    },

    projects: {
      title: 'प्रमुख परियोजनाएं',
    },

    contact: {
      title: 'संपर्क सूत्र',
      heading: 'आइए मिलकर कुछ नया बनाएं',
      subtitle:
        'कोई प्रश्न है या साथ काम करना चाहते हैं? संदेश भेजें और मैं आपसे संपर्क करूंगा।',
      name: 'नाम',
      email: 'ईमेल',
      subject: 'विषय',
      message: 'संदेश',
      send: 'संदेश भेजें',
      sending: 'भेज रहा है...',
      success: 'संदेश सफलतापूर्वक भेजा गया!',
      error: 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।',
    },

    contributions: {
      title: 'योगदान',
      totalCount: 'पिछले वर्ष में योगदान',
      loading: 'लोड हो रहा है...',
    },

    commandPalette: {
      searchPlaceholder: 'अनुभाग या क्रिया खोजें…',
      langEnTitle: 'Change language to English',
      langEnSubtitle: 'अंग्रेजी भाषा मोड',
      langHiTitle: 'भाषा बदलकर हिन्दी करें',
      langHiSubtitle: 'हिन्दी भाषा मोड (Hindi)',
      langJaTitle: 'Change language to Japanese',
      langJaSubtitle: 'जापानी भाषा मोड (Japanese)',
    },

    extra: extraTranslations.hi,
  },

  ja: {
    nav: {
      about: '自己紹介',
      experience: '職歴',
      projects: 'プロジェクト',
      blogs: 'ブログ',
      contact: 'お問い合わせ',
    },

    hero: {
      title: 'ソフトウェアエンジニア | 競技プログラマー',
      description:
        'MMMUTでコンピュータサイエンスを学ぶB.Tech学生。データ構造、アルゴリズム、フルスタック開発に強い専門知識を持ち、スケーラブルなアプリケーションの構築と難しいエンジニアリング問題の解決に取り組んでいます。',
      ctaTouch: 'お問い合わせ',
      powerOn: '電源: ON',
      powerOff: '電源: OFF',
      location: 'インド',
      name: 'アンキット・シュリバスタヴァ',
    },

    skills: {
      title: 'スキルと技術スタック',
    },

    experience: {
      title: '職務経歴',
    },

    projects: {
      title: '主なプロジェクト',
    },

    contact: {
      title: 'お問い合わせ',
      heading: '一緒に素晴らしいものを作りましょう',
      subtitle:
        'ご質問やコラボレーションのご提案など、お気軽にお問い合わせください。',
      name: 'お名前',
      email: 'メールアドレス',
      subject: '件名',
      message: 'メッセージ',
      send: '送信する',
      sending: '送信中...',
      success: 'メッセージが正常に送信されました！',
      error: 'エラーが発生しました。もう一度お試しください。',
    },

    contributions: {
      title: 'コントリビューション',
      totalCount: '過去1年間のコントリビューション',
      loading: '読み込み中...',
    },

    commandPalette: {
      searchPlaceholder: 'セクションまたはアクションを検索…',
      langEnTitle: 'Change language to English',
      langEnSubtitle: '英語の表示モード',
      langHiTitle: 'Change language to Hindi',
      langHiSubtitle: 'ヒンディー語の表示モード (Hindi)',
      langJaTitle: '言語を日本語に切り替える',
      langJaSubtitle: '日本語の表示モード (Japanese)',
    },

    extra: extraTranslations.ja,
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationDict
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined)

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('language_pref') as Language

    if (saved === 'en' || saved === 'hi' || saved === 'ja') {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language_pref', lang)
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (context === undefined) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider'
    )
  }

  return context
}
