"use client";

import { useState, useEffect } from "react";
import { Lock, Eye, Database, Cookie, UserCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicy() {
  const [lastUpdated, setLastUpdated] = useState("2024-01-15");
  const { language } = useLanguage();

  useEffect(() => {
    setLastUpdated(new Date().toISOString().split("T")[0]);
  }, []);

  const translations = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated",
      summary:
        "We respect your privacy and are committed to protecting your personal data.",
      sections: [
        {
          icon: <Database className="w-6 h-6" />,
          title: "Data We Collect",
          content:
            "We collect only necessary data for calendar functionality: country preferences, language settings, and locally stored todos.",
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: "How We Use Data",
          content:
            "Your data is used solely to provide calendar services, display holidays, and store your todo items locally.",
        },
        {
          icon: <Lock className="w-6 h-6" />,
          title: "Data Security",
          content:
            "We implement appropriate security measures to protect your data. All data is stored locally in your browser.",
        },
        {
          icon: <Cookie className="w-6 h-6" />,
          title: "Cookies",
          content:
            "We use only essential cookies to remember your preferences. No tracking cookies are used.",
        },
        {
          icon: <UserCheck className="w-6 h-6" />,
          title: "Your Rights",
          content:
            "You have the right to access, correct, or delete your data stored locally in your browser.",
        },
      ],
      contact:
        "If you have any questions about this Privacy Policy, please contact us.",
    },
    zh: {
      title: "隐私政策",
      lastUpdated: "最后更新",
      summary: "我们尊重您的隐私，并致力于保护您的个人数据。",
      sections: [
        {
          icon: <Database className="w-6 h-6" />,
          title: "我们收集的数据",
          content:
            "我们仅收集日历功能所需的数据：国家偏好、语言设置和本地存储的待办事项。",
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: "数据使用方式",
          content: "您的数据仅用于提供日历服务、显示节假日和本地存储待办事项。",
        },
        {
          icon: <Lock className="w-6 h-6" />,
          title: "数据安全",
          content:
            "我们实施适当的安全措施来保护您的数据。所有数据都存储在您的浏览器本地。",
        },
        {
          icon: <Cookie className="w-6 h-6" />,
          title: "Cookie",
          content: "我们仅使用必要的Cookie来记住您的偏好。不使用跟踪Cookie。",
        },
        {
          icon: <UserCheck className="w-6 h-6" />,
          title: "您的权利",
          content: "您有权访问、更正或删除存储在浏览器本地的数据。",
        },
      ],
      contact: "如果您对本隐私政策有任何疑问，请与我们联系。",
    },
    ja: {
      title: "プライバシーポリシー",
      lastUpdated: "最終更新",
      summary:
        "私たちはあなたのプライバシーを尊重し、個人データの保護に努めています。",
      sections: [
        {
          icon: <Database className="w-6 h-6" />,
          title: "収集するデータ",
          content:
            "カレンダー機能に必要なデータのみを収集します：国設定、言語設定、ローカルに保存されたTODOリスト。",
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: "データの使用方法",
          content:
            "データはカレンダーサービスの提供、祝日の表示、TODOのローカル保存のみに使用されます。",
        },
        {
          icon: <Lock className="w-6 h-6" />,
          title: "データセキュリティ",
          content:
            "適切なセキュリティ対策を実施してデータを保護します。すべてのデータはブラウザにローカルに保存されます。",
        },
        {
          icon: <Cookie className="w-6 h-6" />,
          title: "クッキー",
          content:
            "あなたの設定を記憶するために必要なクッキーのみを使用します。トラッキングクッキーは使用しません。",
        },
        {
          icon: <UserCheck className="w-6 h-6" />,
          title: "あなたの権利",
          content:
            "ブラウザにローカル保存されたデータへのアクセス、修正、削除の権利があります。",
        },
      ],
      contact:
        "このプライバシーポリシーについてご質問がある場合は、お問い合わせください。",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <main className="container mx-auto px-4 py-8">
        <div className="glass rounded-2xl p-8 mb-8">
          <p className="text-lg text-gray-700">{t.summary}</p>
        </div>

        <div className="space-y-6">
          {t.sections.map((section, index) => (
            <div key={index} className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.contact}</h3>
          <div className="space-y-4">
            <p className="text-gray-700">Email: contact@holidaycalendar.com</p>
            <p className="text-gray-700">
              Please note that this is a demo application. For real
              applications, you should provide proper contact information and
              legal documentation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
