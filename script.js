const $ = id => document.getElementById(id);

const toolNames = {
  color: "Color Picker",
  converter: "HEX / RGB",
  ui: "UI Sizing",
  names: "Name Generator",
  json: "JSON Formatter",
  text: "Text Counter"
};

let activeCategory = "all";

function openModal(tool) {
  const content = $("modalContent");

  saveRecent(tool);

  if (tool === "color") {
    content.innerHTML = `
      <p class="eyebrow">COLORS</p>
      <h2 class="tool-title">Color Picker</h2>

      <div class="color-wheel" id="colorWheel"></div>

      <div class="color-preview" id="colorPreview"></div>

      <div class="color-output">
        <div class="output-row">
          <input id="colorHex" value="#705CFF">
          <button onclick="copyValue('colorHex')">Copy</button>
        </div>

        <div class="output-row">
          <input id="colorRgb" value="RGB(112, 92, 255)" readonly>
          <button onclick="copyValue('colorRgb')">Copy</button>
        </div>
      </div>
    `;

    setupColorWheel();
  }

  if (tool === "converter") {
    content.innerHTML = `
      <p class="eyebrow">COLORS</p>
      <h2 class="tool-title">HEX / RGB</h2>

      <div class="tool-form">
        <label class="tool-label">HEX</label>
        <input class="tool-input" id="convertHex" value="#5865F2">

        <button class="tool-button" id="convertColor">
          Convert
        </button>

        <div class="tool-result" id="convertResult">
          RGB: 88, 101, 242
        </div>
      </div>
    `;

    $("convertColor").onclick = () => {
      const hex = $("convertHex").value.trim().replace("#", "");

      if (!/^[0-9a-fA-F]{6}$/.test(hex)) {
        $("convertResult").textContent = "Invalid HEX color.";
        return;
      }

      const n = parseInt(hex, 16);

      $("convertResult").textContent =
        `RGB: ${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
    };
  }

  if (tool === "ui") {
    content.innerHTML = `
      <p class="eyebrow">ROBLOX</p>
      <h2 class="tool-title">UI Sizing</h2>

      <div class="tool-form">
        <label class="tool-label">Pixels</label>

        <input class="tool-input" id="uiPixels" type="number" value="320">

        <button class="tool-button" id="calculateUI">
          Calculate
        </button>

        <div class="tool-result" id="uiResult">
          Scale: 0.320
        </div>
      </div>
    `;

    $("calculateUI").onclick = () => {
      const value = Number($("uiPixels").value);

      $("uiResult").textContent =
        Number.isFinite(value)
          ? `Scale: ${(value / 1000).toFixed(3)}`
          : "Enter a number.";
    };
  }

  if (tool === "names") {
    content.innerHTML = `
      <p class="eyebrow">UTILITIES</p>
      <h2 class="tool-title">Name Generator</h2>

      <button class="tool-button" id="generateName">
        Generate
      </button>

      <div class="tool-result" id="nameResult">
        Click generate.
      </div>
    `;

    const names = [
      "Nova",
      "Forge",
      "Vertex",
      "Pulse",
      "Nexus",
      "Orbit",
      "Flux",
      "Pixel",
      "Core",
      "Vector",
      "Vanta",
      "Axiom"
    ];

    $("generateName").onclick = () => {
      const a = names[Math.floor(Math.random() * names.length)];
      const b = names[Math.floor(Math.random() * names.length)];

      $("nameResult").textContent =
        a === b ? `${a} Labs` : `${a}${b}`;
    };
  }

  if (tool === "json") {
    content.innerHTML = `
      <p class="eyebrow">CODE</p>
      <h2 class="tool-title">JSON Formatter</h2>

      <div class="tool-form">
        <textarea
          class="tool-textarea"
          id="jsonInput"
          placeholder='{"hello":"world"}'
        ></textarea>

        <button class="tool-button" id="formatJson">
          Format JSON
        </button>

        <div class="tool-result" id="jsonResult">
          Result will appear here.
        </div>
      </div>
    `;

    $("formatJson").onclick = () => {
      try {
        const data = JSON.parse($("jsonInput").value);

        $("jsonResult").textContent =
          JSON.stringify(data, null, 2);
      } catch {
        $("jsonResult").textContent =
          "Invalid JSON.";
      }
    };
  }

  if (tool === "text") {
    content.innerHTML = `
      <p class="eyebrow">UTILITIES</p>
      <h2 class="tool-title">Text Counter</h2>

      <textarea
        class="tool-textarea"
        id="textInput"
        placeholder="Type something..."
      ></textarea>

      <div class="tool-result" id="textResult">
        Characters: 0
        Words: 0
        Lines: 0
      </div>
    `;

    $("textInput").oninput = () => {
      const text = $("textInput").value;

      const words = text.trim()
        ? text.trim().split(/\s+/).length
        : 0;

      const lines = text
        ? text.split(/\n/).length
        : 0;

      $("textResult").textContent =
        `Characters: ${text.length}\nWords: ${words}\nLines: ${lines}`;
    };
  }

  $("toolModal").classList.remove("hidden");
}

function setupColorWheel() {
  const wheel = $("colorWheel");

  wheel.onclick = event => {
    const rect = wheel.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const angle = Math.atan2(y - cy, x - cx);
    let hue = angle * 180 / Math.PI + 90;

    if (hue < 0) hue += 360;

    const color = hslToHex(hue, 85, 58);

    $("colorPreview").style.background = color;
    $("colorHex").value = color;

    const rgb = hexToRgb(color);

    $("colorRgb").value =
      `RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  };
}

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);

  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  return "#" + [f(0), f(8), f(4)]
    .map(x => Math.round(255 * x).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
}

function hexToRgb(hex) {
  const n = parseInt(hex.replace("#", ""), 16);

  return {
    r: (n >> 16) & 255,
    g: (n >> 8) & 255,
    b: n & 255
  };
}

async function copyValue(id) {
  await navigator.clipboard.writeText($(id).value);
}

$("closeModal").onclick = () => {
  $("toolModal").classList.add("hidden");
};

$("toolModal").onclick = event => {
  if (event.target === $("toolModal")) {
    $("toolModal").classList.add("hidden");
  }
};

document.querySelectorAll(".open-tool").forEach(button => {
  button.onclick = () => openModal(button.dataset.tool);
});

document.querySelectorAll(".favorite").forEach(button => {
  const tool = button.dataset.favorite;

  if (localStorage.getItem(`favorite-${tool}`)) {
    button.classList.add("active");
    button.textContent = "★";
  }

  button.onclick = event => {
    event.stopPropagation();

    const active = button.classList.toggle("active");

    button.textContent = active ? "★" : "☆";

    if (active) {
      localStorage.setItem(`favorite-${tool}`, "1");
    } else {
      localStorage.removeItem(`favorite-${tool}`);
    }
  };
});

function saveRecent(tool) {
  let recent = JSON.parse(
    localStorage.getItem("recentTools") || "[]"
  );

  recent = recent.filter(item => item !== tool);

  recent.unshift(tool);

  recent = recent.slice(0, 5);

  localStorage.setItem(
    "recentTools",
    JSON.stringify(recent)
  );

  renderRecent();
}

function renderRecent() {
  const container = $("recentTools");

  const recent = JSON.parse(
    localStorage.getItem("recentTools") || "[]"
  );

  if (!recent.length) {
    container.innerHTML =
      `<p class="muted">Your recently used tools will appear here.</p>`;
    return;
  }

  container.innerHTML = recent.map(tool => `
    <button class="recent-item" data-tool="${tool}">
      ${toolNames[tool]}
    </button>
  `).join("");

  container.querySelectorAll(".recent-item").forEach(button => {
    button.onclick = () => openModal(button.dataset.tool);
  });
}

document.querySelectorAll(".category").forEach(button => {
  button.onclick = () => {
    document.querySelectorAll(".category")
      .forEach(item => item.classList.remove("active"));

    button.classList.add("active");

    activeCategory = button.dataset.category;

    filterTools();
  };
});

$("search").oninput = filterTools;

function filterTools() {
  const query = $("search").value.toLowerCase();
  let visible = 0;

  document.querySelectorAll(".tool-card").forEach(card => {
    const matchesSearch =
      card.dataset.name.includes(query);

    const matchesCategory =
      activeCategory === "all" ||
      card.dataset.category === activeCategory;

    const show = matchesSearch && matchesCategory;

    card.style.display = show ? "" : "none";

    if (show) visible++;
  });

  $("noResults").classList.toggle(
    "hidden",
    visible !== 0
  );
}

$("resourceSearch").oninput = event => {
  const query = event.target.value.toLowerCase();

  document.querySelectorAll(".resource").forEach(resource => {
    resource.style.display =
      resource.dataset.resource.includes(query)
        ? ""
        : "none";
  });
};

function openCommandPalette() {
  $("commandPalette").classList.remove("hidden");
  $("commandSearch").value = "";
  renderCommands("");
  $("commandSearch").focus();
}

function closeCommandPalette() {
  $("commandPalette").classList.add("hidden");
}

function renderCommands(query) {
  const results = $("commandResults");

  const filtered = Object.entries(toolNames)
    .filter(([key, name]) =>
      name.toLowerCase().includes(query.toLowerCase())
    );

  results.innerHTML = filtered.map(([key, name]) => `
    <button class="command-item" data-command="${key}">
      <span>⚡</span>
      <strong>${name}</strong>
      <small>Open</small>
    </button>
  `).join("");

  results.querySelectorAll(".command-item").forEach(button => {
    button.onclick = () => {
      closeCommandPalette();
      openModal(button.dataset.command);
    };
  });
}

$("commandBtn").onclick = openCommandPalette;

$("commandSearch").oninput = event => {
  renderCommands(event.target.value);
};

$("commandPalette").onclick = event => {
  if (event.target === $("commandPalette")) {
    closeCommandPalette();
  }
};

document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openCommandPalette();
  }

  if (event.key === "Escape") {
    closeCommandPalette();
    $("toolModal").classList.add("hidden");
  }
});

$("themeBtn").onclick = () => {
  document.body.classList.toggle("light");

  $("themeBtn").textContent =
    document.body.classList.contains("light")
      ? "☀"
      : "☾";

  localStorage.setItem(
    "theme",
    document.body.classList.contains("light")
      ? "light"
      : "dark"
  );
};

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  $("themeBtn").textContent = "☀";
}

renderRecent();
