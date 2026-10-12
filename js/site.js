// Тексты трёх языков и плеер ролика.
// Чтобы показать ролик, впишите id YouTube в data-video у нужного блока.
const copy = {
  ru: {
    langGroup: "Язык",
    description: "Личный и семейный учёт денег в USN Finance.",
    tagline: "Личный и семейный учёт денег",
    store: "Открыть в Google Play",
    watch: "Смотреть",
    privacy: "Политика конфиденциальности",
    f1title: "Лента операций — вся ваша финансовая история в одном месте",
    f1text: "Следите за доходами, расходами, переводами и обменом валют. Используйте гибкие фильтры по дате, счетам или категориям, чтобы мгновенно найти нужную транзакцию.",
    f2title: "Здесь собрана сводка ваших операций",
    f2text: "Все операции автоматически группируются по счетам и категориям, чтобы вы мгновенно видели общую картину.",
    f3title: "Расходы по фото, тексту или ссылке",
    f3text: "Умный ИИ-сканер. Читает фото, скриншоты, QR-коды, обычный текст и ссылки, находит итоговую сумму, отдельные позиции и категории.",
    f4title: "Своя структура учёта",
    f4text: "Своя структура, без шаблонов. Стройте глубокую многоуровневую иерархию счетов, категорий, подкатегорий и виртуальных кошельков с неограниченной вложенностью.",
    f5title: "Интерактивная аналитика операций",
    f5text: "Смотрите отчеты по доходам, тратам, счетам за любой период. Кликайте на блоки для перехода на уровни ниже, а по нажатию кнопки изучайте список вошедших в сумму операций. Любой отчет можно на ходу пересчитать в другую валюту.",
    f6title: "Сравнение периодов и тенденции",
    f6text: "Анализируйте доходы, расходы и счета в динамике с группировкой по дням, неделям, месяцам, кварталам или годам. Раскрывайте встроенную иерархию категорий прямо в таблице, а приложение пересчитает отчет в нужную валюту. Это позволяет объективно оценивать финансовые тенденции и инфляцию в долгосрочной перспективе ведения учета.",
    f7title: "Общий учёт в группах",
    f7text: "Внутри одного профиля можно вести несколько независимых групп. Владелец приглашает людей по email, и все ведут общие расходы в реальном времени (семья, команда, личный проект).",
    f8title: "Данные зашифрованы",
    f8text: "Заметки, названия счетов и категорий, а также названия, коды и символы пользовательских валют шифруются на вашем устройстве (AES-256-GCM) ключом, который защищён вашей секретной фразой. На сервере этот текст хранится только в зашифрованном виде.",
  },
  en: {
    langGroup: "Language",
    description: "Personal and family money tracking in USN Finance.",
    tagline: "Personal and family money tracking",
    store: "Open in Google Play",
    watch: "Watch",
    privacy: "Privacy policy",
    f1title: "An operations feed — your whole financial history in one place",
    f1text: "Follow income, expenses, transfers, and currency exchange. Use flexible filters by date, account, or category to find a transaction right away.",
    f2title: "Here is a summary of your operations",
    f2text: "All operations are grouped by account and category automatically, so you see the whole picture right away.",
    f3title: "Add expenses from a photo, text, or link",
    f3text: "A smart AI scanner. It reads photos, screenshots, QR codes, plain text, and links, and finds the total, individual items, and categories.",
    f4title: "Set up your accounting structure",
    f4text: "Your own structure, with no templates. Build a deep hierarchy of accounts, categories, subcategories, and virtual wallets, with unlimited nesting.",
    f5title: "Interactive analytics of your operations",
    f5text: "See reports on income, spending, and accounts for any period. Click a block to go to the level below, and use the button to open the operations that make up the amount. Any report can be converted to another currency on the spot.",
    f6title: "Compare periods and trends",
    f6text: "Analyze income, expenses, and accounts over time, grouped by day, week, month, quarter, or year. Expand the category hierarchy right in the table, and the app will convert the report to the currency you need. This lets you judge financial trends and inflation over the long run of your bookkeeping.",
    f7title: "Shared accounting in groups",
    f7text: "Inside one profile you can keep several independent groups. The owner invites people by email, and everyone tracks shared expenses in real time (family, team, or a personal project).",
    f8title: "Your data is encrypted",
    f8text: "Notes, account and category names, and the names, codes, and symbols of your custom currencies are encrypted on your device (AES-256-GCM) with a key protected by your secret phrase. On the server this text is stored only in encrypted form.",
  },
  uk: {
    langGroup: "Мова",
    description: "Особистий і сімейний облік грошей у USN Finance.",
    tagline: "Особистий і сімейний облік грошей",
    store: "Відкрити в Google Play",
    watch: "Дивитися",
    privacy: "Політика конфіденційності",
    f1title: "Стрічка операцій — уся ваша фінансова історія в одному місці",
    f1text: "Стежте за доходами, витратами, переказами й обміном валют. Користуйтеся гнучкими фільтрами за датою, рахунками або категоріями, щоб одразу знайти потрібну транзакцію.",
    f2title: "Тут зібрано зведення ваших операцій",
    f2text: "Усі операції автоматично групуються за рахунками й категоріями, щоб ви одразу бачили загальну картину.",
    f3title: "Витрати з фото, тексту або посилання",
    f3text: "Розумний ШІ-сканер. Читає фото, знімки екрана, QR-коди, звичайний текст і посилання, знаходить підсумкову суму, окремі позиції й категорії.",
    f4title: "Своя структура обліку",
    f4text: "Власна структура, без шаблонів. Будуйте глибоку багаторівневу ієрархію рахунків, категорій, підкатегорій і віртуальних гаманців із необмеженою вкладеністю.",
    f5title: "Інтерактивна аналітика операцій",
    f5text: "Дивіться звіти за доходами, витратами й рахунками за будь-який період. Натискайте на блоки, щоб перейти на рівень нижче, а кнопкою відкрийте список операцій, з яких склалася сума. Будь-який звіт можна на ходу перерахувати в іншу валюту.",
    f6title: "Порівняння періодів і тенденції",
    f6text: "Аналізуйте доходи, витрати й рахунки в динаміці з групуванням за днями, тижнями, місяцями, кварталами або роками. Розгортайте вбудовану ієрархію категорій прямо в таблиці, а застосунок перерахує звіт у потрібну валюту. Це дає змогу об’єктивно оцінювати фінансові тенденції й інфляцію в довгостроковій перспективі ведення обліку.",
    f7title: "Спільний облік у групах",
    f7text: "Усередині одного профілю можна вести кілька незалежних груп. Власник запрошує людей електронною поштою, і всі ведуть спільні витрати в реальному часі (родина, команда, особистий проєкт).",
    f8title: "Дані зашифровані",
    f8text: "Примітки, назви рахунків і категорій, а також назви, коди й символи ваших валют шифруються на вашому пристрої (AES-256-GCM) ключем, який захищено вашою секретною фразою. На сервері цей текст зберігається лише в зашифрованому вигляді.",
  },
};

const privacyHref = {
  ru: "https://usnfinance.github.io/privacy-policy/ru.html",
  en: "https://usnfinance.github.io/privacy-policy/en.html",
  uk: "https://usnfinance.github.io/privacy-policy/ua.html",
};

const storageKey = "usn-finance-lang";

function initialLanguage() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "ru" || saved === "en" || saved === "uk") return saved;
  } catch (error) {
    // Хранилище может быть закрыто. Тогда язык берём из браузера.
  }
  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("uk")) return "uk";
  if (nav.startsWith("en")) return "en";
  return "ru";
}

function applyLanguage(lang) {
  const pack = copy[lang] || copy.ru;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (pack[key] != null) node.textContent = pack[key];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const key = node.getAttribute("data-i18n-alt");
    if (pack[key] != null) node.alt = pack[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const key = node.getAttribute("data-i18n-aria");
    if (pack[key] != null) node.setAttribute("aria-label", pack[key]);
  });
  const meta = document.querySelector('meta[name="description"]');
  if (meta && pack.description) meta.setAttribute("content", pack.description);
  const privacy = document.getElementById("privacy");
  if (privacy) privacy.href = privacyHref[lang] || privacyHref.ru;
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const on = button.getAttribute("data-lang") === lang;
    button.setAttribute("aria-pressed", on ? "true" : "false");
  });
  try {
    localStorage.setItem(storageKey, lang);
  } catch (error) {
    // Без хранилища выбор действует только до обновления страницы.
  }
}

function mountVideos() {
  document.querySelectorAll(".feature").forEach((article) => {
    const raw = (article.getAttribute("data-video") || "").trim();
    const button = article.querySelector(".watch");
    if (!button) return;
    if (!/^[A-Za-z0-9_-]{6,}$/.test(raw)) {
      button.hidden = true;
      return;
    }
    button.hidden = false;
    button.addEventListener("click", () => {
      const shot = article.querySelector(".shot");
      const heading = article.querySelector("h2");
      const frame = document.createElement("iframe");
      frame.src = "https://www.youtube-nocookie.com/embed/" + raw + "?rel=0";
      frame.title = heading ? heading.textContent.trim() : "USN Finance";
      frame.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      frame.allowFullscreen = true;
      shot.replaceChildren(frame);
    });
  });
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.getAttribute("data-lang"));
  });
});

applyLanguage(initialLanguage());
mountVideos();
