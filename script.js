:root {
  --bg: #07080c;
  --panel: rgba(16, 18, 25, .72);
  --panel-solid: #101219;
  --panel-hover: rgba(25, 28, 39, .9);
  --text: #f5f7fb;
  --muted: #9299a8;
  --line: rgba(255,255,255,.08);
  --accent: #705cff;
  --accent-2: #8b7cff;
  --green: #38d996;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.5;
  overflow-x: hidden;
}

body.light {
  --bg: #f5f6f9;
  --panel: rgba(255,255,255,.78);
  --panel-solid: #fff;
  --panel-hover: #fff;
  --text: #111318;
  --muted: #687080;
  --line: rgba(0,0,0,.1);
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
}

.background-grid {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: .32;
  background-image:
    linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
  background-size: 45px 45px;
  mask-image: linear-gradient(to bottom, black, transparent 80%);
}

.glow {
  position: fixed;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: .12;
  pointer-events: none;
}

.glow-one {
  background: #705cff;
  top: -180px;
  left: -100px;
}

.glow-two {
  background: #00b8ff;
  right: -150px;
  top: 400px;
}

.nav {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7%;
  border-bottom: 1px solid var(--line);
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(7,8,12,.72);
  backdrop-filter: blur(18px);
}

body.light .nav {
  background: rgba(245,246,249,.78);
}

.logo {
  text-decoration: none;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: .1em;
}

.logo span {
  color: var(--accent);
}

nav {
  display: flex;
  gap: 30px;
}

nav a {
  color: var(--muted);
  font-size: 14px;
  text-decoration: none;
  transition: .2s;
}

nav a:hover {
  color: var(--text);
}

.nav-actions {
  display: flex;
  gap: 8px;
}

.small-btn,
.icon-btn {
  border: 1px solid var(--line);
  background: var(--panel);
  color: var(--muted);
  border-radius: 9px;
}

.small-btn {
  padding: 8px 10px;
  font-size: 11px;
}

.icon-btn {
  width: 37px;
  height: 37px;
}

.hero {
  position: relative;
  max-width: 1100px;
  margin: auto;
  padding: 135px 28px 100px;
}

.badge {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border: 1px solid var(--line);
  border-radius: 100px;
  background: var(--panel);
  color: var(--muted);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .13em;
}

.dot,
.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 12px var(--green);
}

.hero h1 {
  margin: 22px 0;
  font-size: clamp(60px, 9vw, 112px);
  line-height: .88;
  letter-spacing: -.075em;
}

.hero h1 span {
  color: var(--accent);
}

.hero p {
  max-width: 610px;
  color: var(--muted);
  font-size: 18px;
}

.hero-actions {
  display: flex;
  gap: 10px;
  margin-top: 30px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 17px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 750;
  transition: .2s;
}

.btn:hover {
  transform: translateY(-2px);
}

.primary {
  background: var(--accent);
  color: white;
  box-shadow: 0 10px 35px rgba(112,92,255,.22);
}

.secondary {
  border: 1px solid var(--line);
  background: var(--panel);
}

.status {
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  margin-top: 30px;
  color: var(--muted);
  font-size: 12px;
}

.section {
  position: relative;
  max-width: 1100px;
  margin: auto;
  padding: 75px 28px;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 22px;
}

.eyebrow {
  margin: 0;
  color: var(--accent-2);
  font-size: 10px;
  font-weight: 850;
  letter-spacing: .17em;
}

h2 {
  margin: 5px 0 0;
  font-size: 34px;
  letter-spacing: -.05em;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 260px;
  padding: 0 10px;
  border: 1px solid var(--line);
  background: var(--panel);
  border-radius: 10px;
}

.search-box span {
  color: var(--muted);
  font-size: 19px;
}

.search-box input {
  flex: 1;
  width: 100%;
  padding: 11px 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--text);
}

kbd {
  padding: 3px 6px;
  border: 1px solid var(--line);
  border-radius: 5px;
  color: var(--muted);
  font-size: 9px;
  white-space: nowrap;
}

.categories {
  display: flex;
  gap: 7px;
  margin-bottom: 18px;
  overflow-x: auto;
}

.category {
  border: 1px solid var(--line);
  background: var(--panel);
  color: var(--muted);
  border-radius: 8px;
  padding: 7px 11px;
  font-size: 12px;
}

.category.active,
.category:hover {
  color: white;
  background: var(--accent);
  border-color: var(--accent);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.card {
  position: relative;
  min-height: 245px;
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--panel);
  backdrop-filter: blur(15px);
  transition: .22s;
}

.card:hover {
  transform: translateY(-4px);
  background: var(--panel-hover);
  border-color: rgba(112,92,255,.4);
  box-shadow: 0 18px 50px rgba(0,0,0,.18);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.card-icon {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background: var(--panel-solid);
  border: 1px solid var(--line);
  font-size: 17px;
  font-weight: 850;
}

.purple { color: #9a8dff; }
.blue { color: #54a8ff; }
.orange { color: #ffad5a; }
.green { color: #42dfa1; }
.cyan { color: #4ddcff; }
.pink { color: #ff79b9; }

.favorite {
  border: 0;
  background: transparent;
  color: var(--muted);
  font-size: 22px;
}

.favorite.active {
  color: #ffd45a;
}

.card h3 {
  margin: 25px 0 7px;
  font-size: 17px;
}

.card p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

.card-link {
  margin-top: 25px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--accent-2);
  font-size: 13px;
  font-weight: 750;
}

.no-results {
  padding: 45px;
  text-align: center;
  color: var(--muted);
}

.hidden {
  display: none !important;
}

.recent-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.recent-item {
  padding: 9px 13px;
  border: 1px solid var(--line);
  background: var(--panel);
  border-radius: 9px;
  color: var(--muted);
  cursor: pointer;
}

.muted {
  color: var(--muted);
  font-size: 13px;
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.resource {
  display: grid;
  grid-template-columns: 45px 1fr auto;
  align-items: center;
  gap: 13px;
  padding: 17px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
  text-decoration: none;
  transition: .2s;
}

.resource:hover {
  transform: translateY(-2px);
  border-color: rgba(112,92,255,.4);
}

.resource-icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: var(--panel-solid);
  color: var(--accent-2);
  font-weight: 900;
}

.resource strong,
.resource span {
  display: block;
}

.resource span {
  color: var(--muted);
  font-size: 12px;
}

.resource b {
  color: var(--muted);
}

.about {
  max-width: 1100px;
  margin: 30px auto 90px;
  padding: 70px 28px;
  border-top: 1px solid var(--line);
}

.about > p:not(.eyebrow) {
  max-width: 550px;
  color: var(--muted);
}

.about-actions {
  display: flex;
  gap: 8px;
  margin-top: 25px;
}

footer {
  display: flex;
  justify-content: space-between;
  padding: 25px 7%;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 11px;
}

.modal,
.command-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(0,0,0,.72);
  backdrop-filter: blur(8px);
}

.modal-box {
  position: relative;
  width: min(520px,100%);
  max-height: 90vh;
  overflow-y: auto;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--panel-solid);
  box-shadow: 0 30px 100px rgba(0,0,0,.45);
}

.close {
  position: absolute;
  right: 15px;
  top: 15px;
  width: 34px;
  height: 34px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: var(--panel);
  color: var(--text);
  font-size: 20px;
}

.tool-title {
  margin: 5px 0 20px;
  font-size: 30px;
}

.color-wheel {
  width: 250px;
  height: 250px;
  margin: 25px auto;
  border-radius: 50%;
  position: relative;
  background: conic-gradient(
    red,
    yellow,
    lime,
    cyan,
    blue,
    magenta,
    red
  );
  cursor: crosshair;
}

.color-wheel::after {
  content: "";
  position: absolute;
  inset: 35px;
  border-radius: 50%;
  background: var(--panel-solid);
}

.color-output {
  display: grid;
  gap: 9px;
}

.output-row {
  display: flex;
  gap: 8px;
}

.output-row input,
.tool-input,
.tool-textarea {
  width: 100%;
  border: 1px solid var(--line);
  background: var(--panel);
  color: var(--text);
  border-radius: 9px;
  padding: 10px;
  outline: none;
}

.output-row button,
.tool-button {
  border: 0;
  border-radius: 9px;
  padding: 10px 14px;
  background: var(--accent);
  color: white;
  font-weight: 700;
}

.color-preview {
  width: 100%;
  height: 70px;
  margin: 15px 0;
  border-radius: 12px;
  background: #705cff;
}

.tool-form {
  display: grid;
  gap: 12px;
}

.tool-label {
  color: var(--muted);
  font-size: 12px;
}

.tool-textarea {
  min-height: 180px;
  resize: vertical;
}

.tool-result {
  margin-top: 10px;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--panel);
  color: var(--muted);
  white-space: pre-wrap;
  overflow: auto;
}

.command-box {
  width: min(600px,100%);
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 15px;
  background: var(--panel-solid);
  box-shadow: 0 30px 100px rgba(0,0,0,.5);
}

.command-search {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px;
  border-bottom: 1px solid var(--line);
}

.command-search span {
  color: var(--muted);
}

.command-search input {
  flex: 1;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--text);
}

.command-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 13px 15px;
  border: 0;
  background: transparent;
  color: var(--text);
  text-align: left;
}

.command-item:hover {
  background: var(--panel-hover);
}

.command-item small {
  margin-left: auto;
  color: var(--muted);
}

.command-footer {
  display: flex;
  gap: 18px;
  padding: 11px 15px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 10px;
}

@media (max-width: 850px) {
  .grid {
    grid-template-columns: repeat(2,1fr);
  }
}

@media (max-width: 600px) {
  nav {
    display: none;
  }

  .hero {
    padding-top: 90px;
  }

  .grid,
  .resource-grid {
    grid-template-columns: 1fr;
  }

  .section-head {
    align-items: stretch;
    flex-direction: column;
  }

  .search-box {
    min-width: 0;
  }

  footer {
    flex-direction: column;
    gap: 6px;
  }
}
