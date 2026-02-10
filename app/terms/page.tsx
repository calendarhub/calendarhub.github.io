"use client";

import { useState, useEffect } from "react";
import { CheckCircle, AlertCircle, Info, Scale } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsOfService() {
  const [lastUpdated, setLastUpdated] = useState("2024-01-15");
  const { language } = useLanguage();

  useEffect(() => {
    setLastUpdated(new Date().toISOString().split("T")[0]);
  }, []);

  const translations = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last Updated",
      summary: "Please read these terms carefully before using our service.",
      sections: [
        {
          icon: <CheckCircle className="w-6 h-6" />,
          title: "Acceptance of Terms",
          content:
            "By accessing and using this website, you accept and agree to be bound by these Terms of Service.",
        },
        {
          icon: <AlertCircle className="w-6 h-6" />,
          title: "Service Description",
          content:
            "This service provides global holiday information and todo functionality. Data is sourced from public APIs and stored locally in your browser.",
        },
        {
          icon: <Info className="w-6 h-6" />,
          title: "User Responsibilities",
          content:
            "You are responsible for maintaining the confidentiality of your information and for all activities that occur under your usage.",
        },
        {
          icon: <Scale className="w-6 h-6" />,
          title: "Limitation of Liability",
          content:
            'We are not liable for any damages arising from the use or inability to use this service. Holiday data is provided "as is" without warranties.',
        },
      ],
      contact:
        "If you have any questions about these Terms, please contact us.",
    },
    zh: {
      title: "使用条款",
      lastUpdated: "最后更新",
      summary: "在使用我们的服务之前，请仔细阅读这些条款。",
      sections: [
        {
          icon: <CheckCircle className="w-6 h-6" />,
          title: "条款接受",
          content: "通过访问和使用本网站，您接受并同意受本使用条款的约束。",
        },
        {
          icon: <AlertCircle className="w-6 h-6" />,
          title: "服务描述",
          content:
            "本服务提供全球节假日信息和待办事项功能。数据来源于公共API，并存储在您的浏览器本地。",
        },
        {
          icon: <Info className="w-6 h-6" />,
          title: "用户责任",
          content:
            "您有责任维护您的信息的机密性，并对您使用下发生的所有活动负责。",
        },
        {
          icon: <Scale className="w-6 h-6" />,
          title: "责任限制",
          content:
            '我们对因使用或无法使用本服务而产生的任何损害不承担责任。节假日数据按"原样"提供，不作任何保证。',
        },
      ],
      contact: "如果您对这些条款有任何疑问，请与我们联系。",
    },
    ja: {
      title: "利用規約",
      lastUpdated: "最終更新",
      summary:
        "当サービスをご利用になる前に、これらの規約をよくお読みください。",
      sections: [
        {
          icon: <CheckCircle className="w-6 h-6" />,
          title: "規約の承諾",
          content:
            "本ウェブサイトにアクセスし利用することにより、あなたはこれらの利用規約に拘束されることに同意したものとみなされます。",
        },
        {
          icon: <AlertCircle className="w-6 h-6" />,
          title: "サービスの説明",
          content:
            "このサービスは、世界の祝日情報とTODO機能を提供します。データは公共APIから取得され、ブラウザにローカルに保存されます。",
        },
        {
          icon: <Info className="w-6 h-6" />,
          title: "ユーザーの責任",
          content:
            "あなたは自分の情報の機密性を維持し、自分の利用下で発生するすべての活動について責任を負います。",
        },
        {
          icon: <Scale className="w-6 h-6" />,
          title: "責任の制限",
          content:
            "当サービスを使用または使用不能により生じた損害について、私たちは責任を負いません。祝日データは「現状のまま」保証なしで提供されます。",
        },
      ],
      contact: "これらの規約についてご質問がある場合は、お問い合わせください。",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <main className="container mx-auto px-4 py-8">
        <div className="glass rounded-2xl p-8 mb-8 bg-yellow-50 border border-yellow-200">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Important Notice
              </h3>
              <p className="text-gray-700">
                {t.summary} This is a demo application. For production use, you
                should consult with legal professionals to create proper terms
                of service.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {t.sections.map((section, index) => (
            <div key={index} className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 text-green-600 rounded-xl">
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

        <div className="mt-8 glass rounded-2xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Additional Provisions
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time.
                Continued use after changes constitutes acceptance.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
              <p className="text-gray-700">
                The service is provided free of charge. No guarantees are made
                regarding availability or accuracy of data.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
              <p className="text-gray-700">
                You may not use this service for any illegal purposes or in any
                way that could damage the service.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 glass rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.contact}</h3>
          <p className="text-gray-700">Email: legal@holidaycalendar.com</p>
        </div>
      </main>
    </div>
  );
}
