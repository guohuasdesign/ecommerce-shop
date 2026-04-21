import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-8">
      <p>{t("footerText")}</p>
    </footer>
  );
}
