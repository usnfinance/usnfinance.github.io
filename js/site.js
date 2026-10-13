// Плеер ролика. Текст каждого языка уже записан в своей HTML-странице.
// Чтобы показать ролик, впишите id YouTube в data-video у нужного блока.

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

mountVideos();
