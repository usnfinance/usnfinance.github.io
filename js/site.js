// Тексты языков страницы и плеер ролика. Порядок кнопок как в приложении: UK EN DE FR ES RU.
// Чтобы показать ролик, впишите id YouTube в data-video у нужного блока.
const copy = {
  ru: {
    langGroup: "Язык",
    description: "USN Финансы — приложение для личного и совместного учёта финансов.",
    tagline: "это гибкое и мультивалютное приложение для личного и совместного учета финансов, созданное для тех, кто хочет видеть кристально чистую картину своих доходов, расходов, сбережений и балансов. Наш трекер разработан с упором на высокий уровень приватности и надежную защиту личных данных пользователя.",
    taglineMore: "Если вы ищете надежный менеджер расходов, удобную книгу учета для семьи или инструмент для контроля денег в малом бизнесе, здесь полный набор профессиональных функций без перегруженного интерфейса.",
    store: "Скачать из Google Play",
    storeBadge: "images/google-play-ru.png",
    watch: "Смотреть",
    privacy: "Политика конфиденциальности",
    f1title: "Лента операций — вся ваша финансовая история в одном месте",
    f1text: "Следите за доходами, расходами, переводами и обменом валют. Используйте гибкие фильтры по дате, счетам или категориям, чтобы найти нужные записи.",
    f2title: "Здесь собрана сводка ваших операций",
    f2text: "Все операции автоматически группируются по счетам и категориям, чтобы вы сразу видели общую картину.",
    f3title: "ИИ-сканер: от чека до готовой операции",
    f3text: "Просто загрузите фото, скриншот, QR-код, текст или ссылку. Умный сканер мгновенно распознает отдельные позиции, автоматически сгруппирует их по категориям и создаст готовую финансовую операцию без ручного ввода.",
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
    description: "USN Finance is an app for personal and shared money tracking.",
    tagline: "is a flexible, multi-currency app for personal and shared money tracking, made for people who want a clear picture of their income, expenses, savings, and balances. The tracker is built with a strong focus on privacy and reliable protection of personal data.",
    taglineMore: "If you are looking for a reliable expense manager, a convenient account book for a family, or a tool to control money in a small business, you get a full set of professional features without a cluttered interface.",
    store: "Get it on Google Play",
    storeBadge: "images/google-play-en.png",
    watch: "Watch",
    privacy: "Privacy policy",
    f1title: "An operations feed — your whole financial history in one place",
    f1text: "Follow income, expenses, transfers, and currency exchange. Use flexible filters by date, account, or category to find the records you need.",
    f2title: "Here is a summary of your operations",
    f2text: "All operations are grouped by account and category automatically, so you see the whole picture right away.",
    f3title: "AI scanner: from a receipt to a finished operation",
    f3text: "Just upload a photo, screenshot, QR code, text, or link. The smart scanner instantly recognizes individual items, groups them into categories, and creates a finished financial operation without manual entry.",
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
    description: "USN Finance — застосунок для особистого та спільного обліку фінансів.",
    tagline: "це гнучкий і мультивалютний застосунок для особистого та спільного обліку фінансів, створений для тих, хто хоче бачити ясну картину своїх доходів, витрат, заощаджень і балансів. Наш трекер розроблено з упором на високий рівень приватності та надійний захист особистих даних.",
    taglineMore: "Якщо ви шукаєте надійний менеджер витрат, зручну книгу обліку для родини або інструмент для контролю грошей у малому бізнесі, тут повний набір професійних функцій без перевантаженого інтерфейсу.",
    store: "Завантажити з Google Play",
    storeBadge: "images/google-play-uk.png",
    watch: "Дивитися",
    privacy: "Політика конфіденційності",
    f1title: "Стрічка операцій — уся ваша фінансова історія в одному місці",
    f1text: "Стежте за доходами, витратами, переказами й обміном валют. Користуйтеся гнучкими фільтрами за датою, рахунками або категоріями, щоб знайти потрібні записи.",
    f2title: "Тут зібрано зведення ваших операцій",
    f2text: "Усі операції автоматично групуються за рахунками й категоріями, щоб ви одразу бачили загальну картину.",
    f3title: "ШІ-сканер: від чека до готової операції",
    f3text: "Просто завантажте фото, знімок екрана, QR-код, текст або посилання. Розумний сканер миттєво розпізнає окремі позиції, автоматично згрупує їх за категоріями і створить готову фінансову операцію без ручного введення.",
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
  de: {
    langGroup: "Sprache",
    description: "USN Finance ist eine App für die persönliche und gemeinsame Finanzverwaltung.",
    tagline: "ist eine flexible Mehrwährungs-App für die persönliche und gemeinsame Finanzverwaltung, für alle, die ein klares Bild ihrer Einnahmen, Ausgaben, Ersparnisse und Kontostände sehen möchten. Der Tracker setzt auf hohe Privatsphäre und zuverlässigen Schutz persönlicher Daten.",
    taglineMore: "Wenn Sie einen zuverlässigen Ausgabenmanager, ein praktisches Haushaltsbuch für die Familie oder ein Werkzeug zur Geldkontrolle in einem kleinen Unternehmen suchen, finden Sie hier alle professionellen Funktionen ohne überladene Oberfläche.",
    store: "Jetzt bei Google Play",
    storeBadge: "images/google-play-de.png",
    watch: "Ansehen",
    privacy: "Datenschutzrichtlinie",
    f1title: "Operationsliste — Ihre gesamte Finanzhistorie an einem Ort",
    f1text: "Behalten Sie Einnahmen, Ausgaben, Überweisungen und den Währungstausch im Blick. Nutzen Sie flexible Filter nach Datum, Konto oder Kategorie, um die nötigen Einträge zu finden.",
    f2title: "Hier ist die Übersicht Ihrer Vorgänge",
    f2text: "Alle Vorgänge werden automatisch nach Konten und Kategorien gruppiert, damit Sie sofort das Gesamtbild sehen.",
    f3title: "KI-Scanner: vom Beleg zum fertigen Vorgang",
    f3text: "Laden Sie einfach ein Foto, einen Screenshot, einen QR-Code, Text oder einen Link hoch. Der intelligente Scanner erkennt einzelne Positionen sofort, ordnet sie Kategorien zu und erstellt einen fertigen Finanzvorgang ohne manuelle Eingabe.",
    f4title: "Eigene Kontenstruktur",
    f4text: "Ihre eigene Struktur, ohne Vorlagen. Bauen Sie eine tiefe Hierarchie aus Konten, Kategorien, Unterkategorien und virtuellen Geldbörsen mit unbegrenzter Verschachtelung.",
    f5title: "Interaktive Auswertung der Vorgänge",
    f5text: "Sehen Sie Berichte zu Einnahmen, Ausgaben und Konten für jeden Zeitraum. Klicken Sie auf einen Block, um eine Ebene tiefer zu gehen, und öffnen Sie per Schaltfläche die Vorgänge, aus denen sich der Betrag zusammensetzt. Jeder Bericht lässt sich sofort in eine andere Währung umrechnen.",
    f6title: "Zeiträume vergleichen und Trends erkennen",
    f6text: "Analysieren Sie Einnahmen, Ausgaben und Konten im Zeitverlauf, gruppiert nach Tagen, Wochen, Monaten, Quartalen oder Jahren. Klappen Sie die Kategoriehierarchie direkt in der Tabelle auf, und die App rechnet den Bericht in die gewünschte Währung um. So lassen sich finanzielle Trends und die Inflation über die lange Buchführung hinweg objektiv einschätzen.",
    f7title: "Gemeinsame Buchführung in Gruppen",
    f7text: "In einem Profil können Sie mehrere unabhängige Gruppen führen. Der Eigentümer lädt Personen per E-Mail ein, und alle erfassen gemeinsame Ausgaben in Echtzeit (Familie, Team oder ein persönliches Projekt).",
    f8title: "Die Daten sind verschlüsselt",
    f8text: "Notizen, Namen von Konten und Kategorien sowie Namen, Codes und Symbole Ihrer eigenen Währungen werden auf Ihrem Gerät (AES-256-GCM) mit einem Schlüssel verschlüsselt, der durch Ihre geheime Phrase geschützt ist. Auf dem Server wird dieser Text nur verschlüsselt gespeichert.",
  },
  fr: {
    langGroup: "Langue",
    description: "USN Finance est une application de suivi financier personnel et partagé.",
    tagline: "est une application souple et multidevise pour le suivi financier personnel et partagé, conçue pour ceux qui veulent une image claire de leurs revenus, dépenses, économies et soldes. Le suivi vise un haut niveau de confidentialité et une protection fiable des données personnelles.",
    taglineMore: "Si vous cherchez un gestionnaire de dépenses fiable, un livre de comptes pratique pour la famille ou un outil pour contrôler l'argent d'une petite entreprise, vous avez ici toutes les fonctions professionnelles sans interface surchargée.",
    store: "Disponible sur Google Play",
    storeBadge: "images/google-play-fr.png",
    watch: "Regarder",
    privacy: "Politique de confidentialité",
    f1title: "Fil des opérations — tout votre historique financier au même endroit",
    f1text: "Suivez les revenus, les dépenses, les virements et les changes. Utilisez des filtres souples par date, compte ou catégorie pour trouver les écritures voulues.",
    f2title: "Voici le résumé de vos opérations",
    f2text: "Toutes les opérations sont regroupées automatiquement par comptes et par catégories, pour que vous voyiez tout de suite l'ensemble.",
    f3title: "Scanner IA : du reçu à l'opération prête",
    f3text: "Importez simplement une photo, une capture, un code QR, un texte ou un lien. Le scanner intelligent reconnaît aussitôt les lignes, les range par catégories et crée une opération financière prête, sans saisie manuelle.",
    f4title: "Votre propre structure de comptes",
    f4text: "Votre structure, sans modèles. Construisez une hiérarchie profonde de comptes, de catégories, de sous-catégories et de portefeuilles virtuels, avec un nombre illimité de niveaux.",
    f5title: "Analyse interactive des opérations",
    f5text: "Consultez les rapports de revenus, de dépenses et de comptes sur n'importe quelle période. Cliquez sur un bloc pour descendre d'un niveau, et ouvrez avec le bouton la liste des opérations qui composent le montant. Chaque rapport peut être converti à la volée dans une autre devise.",
    f6title: "Comparaison des périodes et tendances",
    f6text: "Analysez les revenus, les dépenses et les comptes dans le temps, regroupés par jour, semaine, mois, trimestre ou année. Dépliez la hiérarchie des catégories directement dans le tableau, et l'application convertira le rapport dans la devise voulue. Cela permet d'évaluer objectivement les tendances financières et l'inflation sur la durée du suivi.",
    f7title: "Comptabilité partagée en groupes",
    f7text: "Dans un même profil, vous pouvez tenir plusieurs groupes indépendants. Le propriétaire invite des personnes par e-mail, et tout le monde suit les dépenses communes en temps réel (famille, équipe ou projet personnel).",
    f8title: "Les données sont chiffrées",
    f8text: "Les notes, les noms des comptes et des catégories, ainsi que les noms, codes et symboles de vos devises personnelles sont chiffrés sur votre appareil (AES-256-GCM) avec une clé protégée par votre phrase secrète. Sur le serveur, ce texte n'est conservé que sous forme chiffrée.",
  },
  es: {
    langGroup: "Idioma",
    description: "USN Finance es una aplicación para el control personal y compartido del dinero.",
    tagline: "es una aplicación flexible y multimoneda para el control personal y compartido de las finanzas, hecha para quienes quieren ver con claridad sus ingresos, gastos, ahorros y saldos. El gestor está pensado con un alto nivel de privacidad y una protección fiable de los datos personales.",
    taglineMore: "Si busca un gestor de gastos fiable, un libro de cuentas práctico para la familia o una herramienta para controlar el dinero en un pequeño negocio, aquí tiene todas las funciones profesionales sin una interfaz recargada.",
    store: "Disponible en Google Play",
    storeBadge: "images/google-play-es.png",
    watch: "Ver",
    privacy: "Política de privacidad",
    f1title: "Lista de operaciones: todo su historial financiero en un solo lugar",
    f1text: "Siga ingresos, gastos, transferencias y cambios de divisa. Use filtros flexibles por fecha, cuenta o categoría para encontrar los registros que necesita.",
    f2title: "Aquí está el resumen de sus operaciones",
    f2text: "Todas las operaciones se agrupan automáticamente por cuentas y categorías, para que vea el panorama general de inmediato.",
    f3title: "Escáner de IA: del recibo a la operación lista",
    f3text: "Solo suba una foto, una captura, un código QR, un texto o un enlace. El escáner inteligente reconoce al instante las partidas, las agrupa por categorías y crea una operación financiera lista sin escribirla a mano.",
    f4title: "Su propia estructura de cuentas",
    f4text: "Su propia estructura, sin plantillas. Construya una jerarquía profunda de cuentas, categorías, subcategorías y monederos virtuales, con anidación ilimitada.",
    f5title: "Analítica interactiva de las operaciones",
    f5text: "Vea informes de ingresos, gastos y cuentas de cualquier período. Pulse un bloque para bajar de nivel y, con el botón, abra la lista de operaciones que forman el importe. Cualquier informe se puede convertir al momento a otra moneda.",
    f6title: "Comparación de períodos y tendencias",
    f6text: "Analice ingresos, gastos y cuentas a lo largo del tiempo, agrupados por días, semanas, meses, trimestres o años. Despliegue la jerarquía de categorías en la propia tabla y la aplicación convertirá el informe a la moneda que necesite. Así puede valorar con objetividad las tendencias financieras y la inflación a largo plazo.",
    f7title: "Contabilidad compartida en grupos",
    f7text: "Dentro de un perfil puede llevar varios grupos independientes. El propietario invita a las personas por correo y todos registran los gastos comunes en tiempo real (familia, equipo o un proyecto personal).",
    f8title: "Los datos están cifrados",
    f8text: "Las notas, los nombres de cuentas y categorías, y los nombres, códigos y símbolos de sus monedas propias se cifran en su dispositivo (AES-256-GCM) con una clave protegida por su frase secreta. En el servidor este texto se guarda solo cifrado.",
  },
};

const privacyEn = "https://usnfinance.github.io/privacy-policy/en.html";

const privacyHref = {
  uk: "https://usnfinance.github.io/privacy-policy/ua.html",
  ru: "https://usnfinance.github.io/privacy-policy/ru.html",
  en: privacyEn,
  de: privacyEn,
  fr: privacyEn,
  es: privacyEn,
};

const languages = ["uk", "en", "de", "fr", "es", "ru"];
const storageKey = "usn-finance-lang";

function initialLanguage() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (languages.indexOf(saved) !== -1) return saved;
  } catch (error) {
    // Хранилище может быть закрыто. Тогда язык берём из браузера.
  }
  const nav = (navigator.language || "").toLowerCase();
  const match = languages.find((code) => nav.startsWith(code));
  return match || "ru";
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
  document.querySelectorAll("[data-i18n-src]").forEach((node) => {
    const key = node.getAttribute("data-i18n-src");
    if (pack[key] != null) node.src = pack[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const key = node.getAttribute("data-i18n-aria");
    if (pack[key] != null) node.setAttribute("aria-label", pack[key]);
  });
  const meta = document.querySelector('meta[name="description"]');
  if (meta && pack.description) meta.setAttribute("content", pack.description);
  const privacy = document.getElementById("privacy");
  if (privacy) privacy.href = privacyHref[lang] || privacyEn;
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
