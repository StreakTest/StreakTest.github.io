const levelsContainer = document.getElementById("levels");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createParticles(container, count = 14) {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.setProperty("--x", `${Math.random() * 100}%`);
    particle.style.setProperty("--delay", `${(Math.random() * 3).toFixed(2)}s`);
    particle.style.setProperty("--duration", `${(2.2 + Math.random() * 2.4).toFixed(2)}s`);
    particle.style.setProperty("--size", `${(2 + Math.random() * 3).toFixed(1)}px`);
    particle.style.setProperty("--drift", `${(-25 + Math.random() * 50).toFixed(1)}px`);
    container.appendChild(particle);
  }
}

function renderLevels() {
  levelsContainer.innerHTML = "";

  levels.forEach((level) => {
    const article = document.createElement("article");
    article.className = "level-card";

    const verifiedClass = level.verified ? "is-verified" : "is-unverified";
    const checkLabel = level.verified ? "Verified" : "Not verified";

    article.innerHTML = `
      <div class="card-glow" aria-hidden="true"></div>
      <div class="particle-field" aria-hidden="true"></div>

      <div class="rank-column">
        <span class="rank">#${escapeHtml(level.rank)}</span>
      </div>

      <div class="level-main">
        <div class="level-topline">
          <h2>${escapeHtml(level.name)}</h2>
          <span class="check ${verifiedClass}" title="${checkLabel}" aria-label="${checkLabel}">
            ✓
          </span>
        </div>

        <div class="meta-row">
          <span class="difficulty">${escapeHtml(level.difficulty || "Extreme Demon")}</span>
          <span class="meta-divider">•</span>
          <span class="level-id">ID ${escapeHtml(level.id)}</span>
          <span class="meta-divider">•</span>
          <span class="creator">by ${escapeHtml(level.creator)}</span>
        </div>

        <p class="description">${escapeHtml(level.description)}</p>
      </div>
    `;

    createParticles(article.querySelector(".particle-field"));
    levelsContainer.appendChild(article);
  });
}

if (Array.isArray(levels)) {
  renderLevels();
} else {
  levelsContainer.innerHTML = `
    <div class="error-box">
      <strong>Could not load the level list.</strong>
      <span>Check that <code>levels.js</code> contains a valid <code>levels</code> array.</span>
    </div>
  `;
}
