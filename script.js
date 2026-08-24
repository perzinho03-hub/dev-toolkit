const $ = id => document.getElementById(id);

$("themeBtn").onclick = () => {
  document.body.classList.toggle("light");

  $("themeBtn").textContent =
    document.body.classList.contains("light") ? "☀" : "☾";
};

$("search").oninput = event => {
  const query = event.target.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      card.dataset.name.includes(query) ? "" : "none";
  });
};

$("convertBtn").onclick = () => {
  const hex = $("hexInput").value.trim().replace("#", "");

  if (!/^[0-9a-fA-F]{6}$/.test(hex)) {
    $("rgbOutput").textContent = "Invalid HEX";
    return;
  }

  const number = parseInt(hex, 16);

  const r = (number >> 16) & 255;
  const g = (number >> 8) & 255;
  const b = number & 255;

  $("rgbOutput").textContent = `RGB: ${r}, ${g}, ${b}`;
};

$("scaleBtn").onclick = () => {
  const px = Number($("pxInput").value);

  if (!Number.isFinite(px)) {
    $("scaleOutput").textContent = "Enter a number";
    return;
  }

  $("scaleOutput").textContent =
    `Scale: ${(px / 1000).toFixed(3)}`;
};

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
  "Vector"
];

$("nameBtn").onclick = () => {
  const first =
    names[Math.floor(Math.random() * names.length)];

  const second =
    names[Math.floor(Math.random() * names.length)];

  $("nameOutput").textContent =
    first === second ? `${first} Labs` : `${first}${second}`;
};

$("openPicker").onclick = () => {
  $("pickerModal").classList.remove("hidden");
};

$("closePicker").onclick = () => {
  $("pickerModal").classList.add("hidden");
};

$("colorInput").oninput = event => {
  const color = event.target.value;

  $("colorPreview").style.background = color;
  $("colorHex").value = color.toUpperCase();
};

$("colorHex").oninput = event => {
  const color = event.target.value.trim();

  if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
    $("colorInput").value = color;
    $("colorPreview").style.background = color;
  }
};

$("copyColor").onclick = async () => {
  await navigator.clipboard.writeText(
    $("colorHex").value
  );

  $("copyColor").textContent = "Copied";

  setTimeout(() => {
    $("copyColor").textContent = "Copy";
  }, 1000);
};
