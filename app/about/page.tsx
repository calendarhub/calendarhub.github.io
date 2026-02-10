"use client";

import { Target, Globe, Code, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  const translations: any = {
    en: {
      missionTitle: "Our Mission",
      missionSubtitle: "Making global holidays accessible to everyone",
      missionBody:
        "We believe that understanding and celebrating holidays from around the world helps build cultural awareness and brings people together. Our mission is to provide accurate, up-to-date holiday information in a simple, beautiful interface.",
      cards: [
        {
          title: "Global Coverage",
          body: "Holidays from over 20 countries across all continents",
        },
        {
          title: "Open Data",
          body: "Powered by open APIs and public holiday data",
        },
        {
          title: "User First",
          body: "Designed with privacy and user experience in mind",
        },
      ],
      techTitle: "Technology Stack",
    },
    zh: {
      missionTitle: "我们的使命",
      missionSubtitle: "让全球节假日触手可及",
      missionBody:
        "我们相信，了解并庆祝世界各地的节日能增进文化理解并拉近人与人之间的距离。我们的使命是以简单、优雅的方式提供准确、及时的节假日信息。",
      cards: [
        {
          title: "全球覆盖",
          body: "覆盖 20+ 个国家与地区，遍及各大洲",
        },
        {
          title: "开放数据",
          body: "基于开放 API 与公共节假日数据",
        },
        {
          title: "以用户为先",
          body: "注重隐私与体验",
        },
      ],
      techTitle: "技术栈",
    },
    ja: {
      missionTitle: "私たちのミッション",
      missionSubtitle: "世界の祝日を身近に",
      missionBody:
        "世界各地の祝日を理解し祝うことは、文化理解を深め人々をつなぐと考えています。私たちは、正確で最新の祝日情報を、シンプルで美しい体験として提供することを目指しています。",
      cards: [
        {
          title: "グローバル対応",
          body: "20 以上の国・地域、全大陸をカバー",
        },
        {
          title: "オープンデータ",
          body: "公開 API と祝日データを活用",
        },
        {
          title: "ユーザーファースト",
          body: "プライバシーと体験を重視",
        },
      ],
      techTitle: "技術スタック",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <main className="container mx-auto px-4 py-8">
        <div className="glass rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Target className="w-12 h-12 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {t.missionTitle}
              </h2>
              <p className="text-gray-600">{t.missionSubtitle}</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg">
            {t.missionBody}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-2xl p-6">
            <Globe className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t.cards[0].title}
            </h3>
            <p className="text-gray-700">{t.cards[0].body}</p>
          </div>

          <div className="glass rounded-2xl p-6">
            <Code className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t.cards[1].title}
            </h3>
            <p className="text-gray-700">{t.cards[1].body}</p>
          </div>

          <div className="glass rounded-2xl p-6">
            <Heart className="w-10 h-10 text-red-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t.cards[2].title}
            </h3>
            <p className="text-gray-700">{t.cards[2].body}</p>
          </div>
        </div>

        <div className="glass rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t.techTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "date-fns"].map(
              (tech) => (
                <div
                  key={tech}
                  className="p-4 bg-white border border-gray-200 rounded-lg text-center"
                >
                  <span className="text-gray-800 font-medium">{tech}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
