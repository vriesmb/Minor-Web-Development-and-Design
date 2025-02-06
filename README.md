# 📌 Web Development Notes

Welkom bij mijn verzameling van handige web development inzichten en technieken.
Klik op een sectie om meer details te zien.

## 🚀 Eerste Notitie

<details>
  <summary>📌 Stop using JS for that - Kilian</summary>
  
  - **Electron**: Framework voor het maken van software.
  - **Polypane**: Browser speciaal voor developers.
  - **GitHub Education**: [educcation.github.com](https://education.github.com/)
  
  - **Rule of Least Power**: Kies de minst krachtige taal die geschikt is voor een bepaalde taak.
  - **Meerdere methodes**: Er zijn altijd meerdere manieren om functionaliteiten te implementeren.
  - **Web werkt altijd**: Alles op het web blijft compatibel.

</details>

## 🎨 Custom Switches

<details>
  <summary>🔧 Styling & Functionaliteit</summary>
  
  - Browsers registreren clicks op een **heel label** rondom een checkbox.
  - Gebruik `:checked` pseudo-selector + `::before` met `transform: translateX(1rem);` voor animatie.
  - `appearance: none;` = eigen styling via `::before` en `::after`.
  - `:focus` & `:focus-visible` voor toegankelijkheid.

</details>

## 📜 In-Page Transitions & Accessibility

<details>
  <summary>🔄 Smooth Scrolling & Enhancements</summary>
  
  - `scroll-behavior: smooth;` voor vloeiende scroll-ervaring.
  - `@media (prefers-reduced-motion: no-preference) {}` voor bewegingsvoorkeuren.
  - `#my-target:target { outline; transition: ease; }` voor highlight bij navigatie.
  
</details>

## 📦 Accordions & Modals

<details>
  <summary>📑 Interactieve Elementen</summary>
  
  - `<details open>` voor standaard open accordion.
  - `summary::marker { font-size; content: ''; }` voor custom markers.
  - `summary:hover { cursor: pointer; }` voor betere UX.
  - `<dialog>` met `form method="dialog"` voor modals.
  - `dialog:backdrop {}` voor styling van de achtergrond bij een popup.
  - `dialog { opacity: 1; transform: scale(1); transition: all 1s ease; }` met `@starting-style` voor animatie.

</details>

## 🎯 Parent Selectors & Form Elements

<details>
  <summary>📝 Geavanceerde Selectors</summary>
  
  - `:has()` voor het targeten van elementen binnen een bepaalde structuur.
  - `form:has(#other:checked) #other-text { … }` voor dynamische styling.
  - `input, textarea { field-sizing: content; }` voor velden die meegroeien met de inhoud.

</details>

## 🔄 Scroll-Driven Animations

[Demo & documentatie](https://scroll-driven-animations.style/demos/cover-flow/css)
