"use client";

import { useState, useEffect } from "react";
import { Cookie, Settings, Eye, Trash2, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  clearPreferenceStorage,
  getCookieConsent,
  setCookieConsent,
} from "@/utils/consent";

export default function CookiePolicy() {
  const [lastUpdated, setLastUpdated] = useState("2024-01-15");
  const [cookieConsent, setCookieConsent] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setLastUpdated(new Date().toISOString().split("T")[0]);
    const consent = getCookieConsent() === "granted";
    setCookieConsent(consent);
  }, []);

  const handleConsent = (consent: any) => {
    setCookieConsent(consent);
    if (!consent) clearPreferenceStorage();
    setCookieConsent(consent);
  };

  const translations: any = {
    en: {
      title: "Cookie Policy",
      lastUpdated: "Last Updated",
      summary: "We use cookies to enhance your experience on our website.",
      sections: [
        {
          icon: <Cookie className="w-6 h-6" />,
          title: "What are Cookies?",
          content:
            "Cookies are small text files that are stored on your device when you visit our website.",
        },
        {
          icon: <Settings className="w-6 h-6" />,
          title: "How We Use Cookies",
          content:
            "We use only essential cookies to remember your preferences like language and country settings.",
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: "Third-party Cookies",
          content:
            "We do not use any third-party tracking or advertising cookies on this website.",
        },
        {
          icon: <Trash2 className="w-6 h-6" />,
          title: "Managing Cookies",
          content:
            "You can manage or delete cookies through your browser settings. Clearing cookies will reset your preferences.",
        },
      ],
      consent: {
        title: "Cookie Consent",
        description:
          "We use essential cookies for basic functionality. Do you consent to the use of these cookies?",
        accept: "Accept All Cookies",
        reject: "Reject Non-essential",
        current: "Current Status",
      },
    },
    zh: {
      title: "Cookie政策",
      lastUpdated: "最后更新",
      summary: "我们使用Cookie来增强您在我们网站上的体验。",
      sections: [
        {
          icon: <Cookie className="w-6 h-6" />,
          title: "什么是Cookie？",
          content: "Cookie是当您访问我们的网站时存储在您设备上的小型文本文件。",
        },
        {
          icon: <Settings className="w-6 h-6" />,
          title: "我们如何使用Cookie",
          content: "我们仅使用必要的Cookie来记住您的偏好，如语言和国家设置。",
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: "第三方Cookie",
          content: "我们不在本网站上使用任何第三方跟踪或广告Cookie。",
        },
        {
          icon: <Trash2 className="w-6 h-6" />,
          title: "管理Cookie",
          content:
            "您可以通过浏览器设置管理或删除Cookie。清除Cookie将重置您的偏好设置。",
        },
      ],
      consent: {
        title: "Cookie同意",
        description:
          "我们使用必要的Cookie来实现基本功能。您是否同意使用这些Cookie？",
        accept: "接受所有Cookie",
        reject: "拒绝非必要Cookie",
        current: "当前状态",
      },
    },
    ja: {
      title: "クッキーポリシー",
      lastUpdated: "最終更新",
      summary:
        "当ウェブサイトでの体験を向上させるためにクッキーを使用しています。",
      sections: [
        {
          icon: <Cookie className="w-6 h-6" />,
          title: "クッキーとは？",
          content:
            "クッキーは、当ウェブサイトにアクセスした際にデバイスに保存される小さなテキストファイルです。",
        },
        {
          icon: <Settings className="w-6 h-6" />,
          title: "クッキーの使用方法",
          content:
            "言語や国設定などの設定を記憶するために、必要なクッキーのみを使用しています。",
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: "サードパーティクッキー",
          content:
            "このウェブサイトでは、サードパーティの追跡や広告クッキーは使用していません。",
        },
        {
          icon: <Trash2 className="w-6 h-6" />,
          title: "クッキーの管理",
          content:
            "ブラウザの設定でクッキーを管理または削除できます。クッキーを消去すると設定がリセットされます。",
        },
      ],
      consent: {
        title: "クッキー同意",
        description:
          "基本的な機能のために必要なクッキーを使用しています。これらのクッキーの使用に同意しますか？",
        accept: "すべてのクッキーを受け入れる",
        reject: "不要なクッキーを拒否",
        current: "現在の状態",
      },
    },
  };

  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <main className="container mx-auto px-4 py-8">
        <div className="glass rounded-2xl p-8 mb-8">
          <p className="text-lg text-gray-700">
            {t.summary} We are transparent about our cookie usage and respect
            your privacy choices.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.consent.title}
          </h2>
          <p className="text-gray-700 mb-6">{t.consent.description}</p>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Essential Cookies
                </h3>
                <p className="text-gray-600 text-sm">
                  Required for basic functionality
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Always active</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Preference Cookies
                </h3>
                <p className="text-gray-600 text-sm">Remember your settings</p>
              </div>
              <div className="flex items-center gap-2">
                {cookieConsent ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Active</span>
                  </>
                ) : (
                  <span className="text-gray-500">Inactive</span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleConsent(true)}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex-1"
            >
              {t.consent.accept}
            </button>
            <button
              onClick={() => handleConsent(false)}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition flex-1"
            >
              {t.consent.reject}
            </button>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              <strong>{t.consent.current}:</strong>{" "}
              {cookieConsent ? "Cookies accepted" : "Only essential cookies"}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {t.sections.map((section: any, index: any) => (
            <div key={index} className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
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
            Cookie Types Details
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Essential Cookies
              </h4>
              <p className="text-gray-700 text-sm">
                These cookies are necessary for the website to function and
                cannot be switched off. They are usually only set in response to
                actions made by you.
              </p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Preference Cookies
              </h4>
              <p className="text-gray-700 text-sm">
                These cookies allow the website to remember choices you make and
                provide enhanced, more personal features.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
