
(() => {
  "use strict";

  const family = [
    {
      id: "varon",
      num: "1",
      name: "Varón",
      age: "45 años",
      sex: "male",
      color: "#0f7a86",
      soft: "#effcfc",
      healthLabel: "Heroína · cannabis",
    cieLinks: [
      { code: "6C43.2", label: "Dependencia de opioides", url: "https://icd.who.int/browse11/l-m/es#/http%3A%2F%2Fid.who.int%2Ficd%2Fentity%2F1120716949" },
      { code: "6C41.2", label: "Dependencia de cannabis", url: "https://icd.who.int/browse11/l-m/es#/http%3A%2F%2Fid.who.int%2Ficd%2Fentity%2F1129015467" },
      { code: "7A00", label: "Insomnio crónico", url: "https://icd.who.int/browse11/l-m/es#/http%3A%2F%2Fid.who.int%2Ficd%2Fentity%2F323148092" },
      { code: "6B00", label: "Ansiedad generalizada", url: "https://icd.who.int/browse11/l-m/es#/http%3A%2F%2Fid.who.int%2Ficd%2Fentity%2F1712535455" },
      { code: "6A70", label: "Episodio depresivo único", url: "https://icd.who.int/browse11/l-m/es#/http%3A%2F%2Fid.who.int%2Ficd%2Fentity%2F57863557402" },
      { code: "6A71", label: "Trastorno depresivo recurrente", url: "https://icd.who.int/browse11/l-m/es#/http%3A%2F%2Fid.who.int%2Ficd%2Fentity%2F1194756772" }
    ],
      problem: "Dependencia de heroína de más de diez años de evolución. Consumo de cannabis con agravamiento de insomnio, ansiedad, depresión y apatía. Recaídas previas, tratamiento con metadona en dos ocasiones, comunidad terapéutica abandonada a los pocos meses, desempleo de seis años y ausencia de subsidio.",
      cie: "Trastornos debidos al uso de opioides. Dependencia de opioides o heroína, 6C43.2. Cannabis dentro de trastornos debidos al uso de cannabis, valorando 6C41.2 solo si se confirma dependencia. Insomnio 7A00, ansiedad 6B00 y cuadro depresivo 6A70/6A71 tras valoración clínica.",
      social: "Vinculación al CAD, revisión terapéutica, adherencia, reducción de daños, acompañamiento socioeducativo, orientación sobre prestaciones, itinerario ocupacional gradual y coordinación con salud mental, atención primaria y servicios sociales.",
      follow: "Permanencia en tratamiento, asistencia a citas, reducción de consumos, mejora del sueño, participación comunitaria, acceso efectivo a recursos y recuperación progresiva de rutinas.",
      critical: "La recaída se lee como indicador de complejidad clínica, relacional y social.",
      role: "Sostener vínculo, coordinar recursos y convertir objetivos terapéuticos en rutinas posibles.",
      indicator: "Permanencia, citas, sueño, consumos, trámites y participación."
    },
    {
      id: "hermano",
      num: "2",
      name: "Hermano",
      age: "30 años",
      sex: "maleGroup",
      color: "#24587b",
      soft: "#e5f2ff",
      healthLabel: "Alcohol",
    cieLinks: [
      { code: "6C40.2", label: "Dependencia del alcohol", url: "https://icd.who.int/browse11/l-m/es#/http%3A%2F%2Fid.who.int%2Ficd%2Fentity%2F1580466198" }
    ],
      problem: "Dependencia del alcohol dentro del mismo hogar. Su situación puede actuar como factor de normalización del consumo y aumentar la fragilidad familiar.",
      cie: "Trastornos debidos al uso de alcohol. Dependencia del alcohol, 6C40.2, siempre desde valoración clínica y sin convertir el código en etiqueta identitaria.",
      social: "Motivación al cambio, orientación hacia recursos especializados, apoyo comunitario, educación familiar sobre límites y prevención de dinámicas de consumo compartido en el domicilio.",
      follow: "Contacto con recursos, reducción de consumo de riesgo, participación en grupo o tratamiento, mejora de convivencia y disminución de episodios asociados al consumo.",
      critical: "Su consumo puede influir en el clima familiar y en el riesgo de recaída del protagonista.",
      role: "Abrir una puerta de ayuda sin centrar toda la intervención en una sola persona.",
      indicator: "Contacto con recurso, reducción de consumo y mejora de convivencia."
    },
    {
      id: "madre",
      num: "3",
      name: "Madre",
      age: "57 años",
      sex: "female",
      color: "#a76b16",
      soft: "#fff2cc",
      healthLabel: "Ansiedad",
    cieLinks: [
      { code: "6B00", label: "Ansiedad generalizada", url: "https://icd.who.int/browse11/l-m/es#/http%3A%2F%2Fid.who.int%2Ficd%2Fentity%2F1712535455" }
    ],
      problem: "Ansiedad en un contexto de alta carga familiar. El caso no afirma que sea cuidadora principal, pero la convivencia permite explorar posible sobrecarga de cuidado y gestión cotidiana.",
      cie: "Sintomatología ansiosa compatible con trastorno de ansiedad generalizada, 6B00, si se confirma clínicamente. Interesa valorar sobrecarga cuidadora y apoyos disponibles.",
      social: "Psicoeducación, apoyo emocional, grupos de ayuda para familiares, respiro, entrenamiento en límites, reducción de culpa y coordinación con atención primaria o salud mental si procede.",
      follow: "Disminución de sobrecarga percibida, asistencia a espacios de apoyo, mejora del descanso, uso de red comunitaria y capacidad para pedir ayuda sin asumir todo el cuidado.",
      critical: "El cuidado familiar puede sostener la intervención y deteriorar a quien cuida.",
      role: "Explorar sobrecarga, repartir responsabilidades y evitar que el apoyo dependa de su desgaste.",
      indicator: "Sobrecarga, descanso, apoyo grupal y capacidad de pedir ayuda."
    },
    {
      id: "padre",
      num: "4",
      name: "Padre",
      age: "62 años",
      sex: "olderMale",
      color: "#334155",
      soft: "#f1f5f9",
      healthLabel: "Artrosis",
    cieLinks: [
      { code: "FA01", label: "Osteoartritis de rodilla", url: "https://icd.who.int/browse11/l-m/es#/http%3A%2F%2Fid.who.int%2Ficd%2Fentity%2F1685726407" }
    ],
      problem: "Artrosis. El caso no especifica grado de limitación, por lo que conviene valorar dolor, movilidad y posible pérdida de autonomía funcional.",
      cie: "Enfermedades musculoesqueléticas. Artrosis u osteoartritis según valoración clínica. Más allá del código, resulta clave valorar funcionamiento, dolor, movilidad y apoyos para actividades de la vida diaria.",
      social: "Valoración funcional, información sobre dependencia si procede, apoyos para actividades de la vida diaria, prevención del aislamiento, adaptación del entorno y coordinación sociosanitaria.",
      follow: "Autonomía en actividades básicas, control del dolor, participación doméstica posible, acceso a apoyos, reducción de aislamiento y descarga real de la familia cuidadora.",
      critical: "La artrosis puede redistribuir cuidados y aumentar la vulnerabilidad del hogar.",
      role: "Valorar autonomía, activar apoyos y prevenir aislamiento o dependencia evitable.",
      indicator: "AVD, dolor, movilidad, apoyos formales y participación."
    }
  ];

  const layers = [
    { id: "problem", label: "Problema de salud" },
    { id: "cie", label: "CIE-11 orientativa" },
    { id: "social", label: "Apoyo socioeducativo" },
    { id: "follow", label: "Seguimiento" }
  ];

  const tools = [
    { id: "genograma", code: "GEN", title: "Genograma", desc: "Composición, convivencia y relaciones descritas", color: "#176975", soft: "#eefafa" },
    { id: "ecomapa", code: "ECO", title: "Ecomapa", desc: "Recursos presentes, recursos a activar y coordinación", color: "#3d5f7c", soft: "#eef4fa" },
    { id: "trayectoria", code: "LIN", title: "Trayectoria", desc: "Evolución del caso y ventanas de oportunidad", color: "#62577f", soft: "#f1eef8" },
    { id: "necesidades", code: "MAT", title: "Matriz funcional", desc: "Necesidades, apoyos, prioridad e indicadores", color: "#a06a22", soft: "#fff4df" },
    { id: "plan", code: "PIA", title: "Plan de caso", desc: "Acciones priorizadas desde Educación Social", color: "#597864", soft: "#edf5ef" }
  ];

  let selectedMember = "varon";
  let selectedLayer = "social";
  let selectedTool = "genograma";
  let mode = "facts";

  const $ = (id) => document.getElementById(id);
  const safe = (id, cb) => {
    const el = $(id);
    if (el) cb(el);
  };

  function avatarSVG(type) {
    if (type === "female") {
      return `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M18 28c0-9 5.8-16 14-16s14 7 14 16" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="32" cy="31" r="10" stroke="currentColor" stroke-width="4"/><path d="M16 56c2.5-9 8.7-14 16-14s13.5 5 16 14" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M25 31h.1M39 31h.1" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`;
    }
    if (type === "olderMale") {
      return `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><circle cx="32" cy="27" r="11" stroke="currentColor" stroke-width="4"/><path d="M18 56c2.6-9 8.6-14 14-14s11.4 5 14 14" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M21 23c2.4-8 8-11 11-11s8.6 3 11 11" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M23 29h7M34 29h7M30 29h4" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`;
    }
    if (type === "maleGroup") {
      return `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><circle cx="24" cy="27" r="9" stroke="currentColor" stroke-width="4"/><circle cx="42" cy="29" r="8" stroke="currentColor" stroke-width="3.5" opacity=".78"/><path d="M10 56c2.4-8 7.8-13 14-13s11.6 5 14 13" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M32 55c2.2-6 5.8-9 10-9 4.7 0 8.6 3.7 10 9" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" opacity=".78"/></svg>`;
    }
    return `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><circle cx="32" cy="27" r="11" stroke="currentColor" stroke-width="4"/><path d="M17 56c2.8-9 8.6-14 15-14s12.2 5 15 14" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M21 23c2.2-7 6.8-10 11-10s8.8 3 11 10" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`;
  }

  function currentMember() {
    return family.find((m) => m.id === selectedMember) || family[0];
  }

  function renderMembers() {
    safe("memberList", (wrap) => {
      wrap.innerHTML = "";
      family.forEach((m) => {
        const btn = document.createElement("button");
        btn.className = "member-card" + (m.id === selectedMember ? " is-active" : "");
        btn.type = "button";
        btn.style.setProperty("--person", m.color);
        btn.style.setProperty("--person-soft", m.soft);
        btn.innerHTML = `<div class="member-row"><div class="member-num">${m.num}</div><div class="avatar">${avatarSVG(m.sex)}</div><div><h3>${m.name}</h3><small>${m.age}</small></div></div>`;
        btn.addEventListener("click", () => {
          selectedMember = m.id;
          selectedLayer = "social";
          renderAll();
          if (selectedTool === "genograma") renderCanvas();
        });
        wrap.appendChild(btn);
      });
    });
  }

  function renderLayerTabs() {
    safe("layerTabs", (wrap) => {
      wrap.innerHTML = "";
      layers.forEach((layer) => {
        const btn = document.createElement("button");
        btn.className = "layer-tab" + (layer.id === selectedLayer ? " is-active" : "");
        btn.type = "button";
        btn.textContent = layer.label;
        btn.addEventListener("click", () => {
          selectedLayer = layer.id;
          renderLayerTabs();
          renderLayerCard();
        });
        wrap.appendChild(btn);
      });
    });
  }

  

window.openOfficialBrowser = function(){
  window.open("https://icd.who.int/browse/2025-01/mms/es", "_blank", "noopener,noreferrer");
};

window.openOfficialCodingTool = function(){
  window.open("https://icd.who.int/ct", "_blank", "noopener,noreferrer");
};

window.openOfficialUserGuide = function(){
  window.open("https://icd.who.int/docs/browser/es/Browser/", "_blank", "noopener,noreferrer");
};

window.openOfficialReferenceGuide = function(){
  window.open("https://icdcdn.who.int/static/releasefiles/2025-01/ICD-11-Reference-Guide-2025-01-es.pdf", "_blank", "noopener,noreferrer");
};

window.copyIcdCode = async function(code){
  try{
    await navigator.clipboard.writeText(code);
    showToast(`Código ${code} copiado`);
  }catch(error){
    const temp = document.createElement("textarea");
    temp.value = code;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
    showToast(`Código ${code} copiado`);
  }
};

function renderCieOfficialLinks(member, layerId){
  if(layerId !== "cie") return "";
  const links = member.cieLinks || [];
  if(!links.length) return "";
  return `
    <div class="cie-official-box" aria-label="Acceso oficial CIE-11 OMS">
      <div class="cie-official-box__head">
        <span class="cie-official-box__mark">OMS</span>
        <div>
          <b>Acceso oficial CIE-11</b>
          <small>Consulta en herramientas oficiales y copia los códigos orientativos para verificarlos en el navegador o Coding Tool.</small>
        </div>
      </div>

      <div class="cie-official-actions" aria-label="Herramientas oficiales OMS">
        <button type="button" class="cie-official-action primary" onclick="openOfficialBrowser()">Navegador OMS</button>
        <button type="button" class="cie-official-action" onclick="openOfficialCodingTool()">Coding Tool</button>
        <button type="button" class="cie-official-action" onclick="openOfficialUserGuide()">Guía</button>
      </div>

      <details class="cie-code-disclosure">
        <summary>
          <span>Códigos orientativos para comprobar</span>
          <b>${links.length}</b>
        </summary>
        <div class="cie-code-list">
          ${links.map(link => `
            <div class="cie-code-card">
              <span class="cie-code">${link.code}</span>
              <strong>${link.label}</strong>
              <button type="button" onclick="copyIcdCode('${String(link.code).replace(/'/g, "\'")}')">Copiar</button>
            </div>
          `).join("")}
        </div>
      </details>

      <p class="cie-official-note">Accesos oficiales de la OMS. La búsqueda por código se realiza dentro de la herramienta oficial, evitando enlaces profundos inestables.</p>
    </div>`;
}

function renderLayerCard() {
    safe("layerCard", (card) => {
      const m = currentMember();
      const layer = layers.find((l) => l.id === selectedLayer) || layers[0];
      card.style.setProperty("--person", m.color);
      card.innerHTML = `
        <div class="layer-card__head layer-card__head--compact">
          <div class="layer-card__avatar layer-card__avatar--compact">${avatarSVG(m.sex)}</div>
          <div class="layer-card__titleblock">
            <p class="overline">${m.name}, ${m.age}</p>
            <h3>${layer.label}</h3>
          </div>
          <span class="layer-card__chip">${m.healthLabel}</span>
        </div>
        <div class="layer-card__body">
          <p class="layer-card__text">${m[selectedLayer]}</p>
          ${renderCieOfficialLinks(m, selectedLayer)}
          <div class="layer-meta layer-meta--compact">
            <div><b>Lectura crítica</b><span>${m.critical}</span></div>
            <div><b>Rol educativo</b><span>${m.role}</span></div>
            <div><b>Indicador</b><span>${m.indicator}</span></div>
          </div>
        </div>`;
    });
  }

  function renderToolMenu() {
    safe("toolMenu", (menu) => {
      menu.innerHTML = "";
      tools.forEach((tool) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "tool-card" + (tool.id === selectedTool ? " is-active" : "");
        btn.style.setProperty("--tool", tool.color);
        btn.style.setProperty("--tool-soft", tool.soft);
        btn.innerHTML = `<div class="tool-card__top"><div class="tool-card__icon">${tool.code}</div><strong>${tool.title}</strong></div><small>${tool.desc}</small>`;
        btn.addEventListener("click", () => {
          selectedTool = tool.id;
          renderToolMenu();
          renderCanvas();
        });
        menu.appendChild(btn);
      });
    });
  }

  function modeBanner() {
    const proposal = mode === "proposal";
    return `<div class="mode-banner ${proposal ? "proposal" : ""}">
      <div class="mode-badge">${proposal ? "PR" : "DC"}</div>
      <p>${proposal ? "Propuesta profesional: hipótesis de intervención socioeducativa. Señala qué se activaría o valoraría, sin presentarlo como intervención ya realizada." : "Datos del caso: lectura prudente basada solo en información aportada. Se evita inferir relaciones, cuidados o recursos no descritos."}</p>
    </div>`;
  }

  function personNode(id, x, y, shape, tag) {
    const m = family.find((item) => item.id === id);
    const selected = id === selectedMember ? `<span class="tag tag--selected">Seleccionado</span>` : `<span class="tag">${tag}</span>`;
    return `<button type="button" class="person-node" onclick="selectMemberFromTool('${id}')" style="left:${x}%;top:${y}%;--person:${m.color};--person-soft:${m.soft}">
      <div class="person-shape ${shape}">${avatarSVG(m.sex)}</div>
      <b>${m.name}, ${m.age.replace(" años", "")}</b>
      <small>${m.healthLabel}</small>
      ${selected}
    </button>`;
  }

  function genograma() {
    const proposal = mode === "proposal";
    return `${modeBanner()}
      <div class="legend">
        <span><i class="square"></i> Hombre</span>
        <span><i class="circle"></i> Mujer</span>
        <span><i class="solid"></i> Vínculo familiar descrito</span>
        <span><i class="dash"></i> Línea de exploración socioeducativa</span>
        <span><i style="border:2px dashed rgba(7,75,85,.45);border-radius:5px"></i> Unidad convivencial</span>
      </div>
      <div class="tool-split genogram-layout">
        <div class="social-board social-board--genogram">
          <div class="house-boundary"></div>
          <svg class="lines" viewBox="0 0 920 640" preserveAspectRatio="none" aria-hidden="true">
            <line x1="310" y1="155" x2="610" y2="155" stroke="#0b6470" stroke-width="4"/>
            <line x1="460" y1="155" x2="460" y2="315" stroke="#0b6470" stroke-width="4"/>
            <line x1="285" y1="315" x2="635" y2="315" stroke="#0b6470" stroke-width="4"/>
            <line x1="285" y1="315" x2="285" y2="456" stroke="#0b6470" stroke-width="4"/>
            <line x1="635" y1="315" x2="635" y2="456" stroke="#0b6470" stroke-width="4"/>
            ${proposal ? `
              <path d="M285 456 C390 386 520 386 635 456" stroke="#a76b16" stroke-width="4" fill="none" stroke-dasharray="10 8"/>
              <path d="M310 155 C210 260 230 395 285 456" stroke="#a76b16" stroke-width="4" fill="none" stroke-dasharray="10 8"/>
              <path d="M610 155 C700 260 690 395 635 456" stroke="#a76b16" stroke-width="4" fill="none" stroke-dasharray="10 8"/>
            ` : ""}
          </svg>
          <div class="geno-label geno-label--parents">Subsistema parental descrito</div>
          <div class="geno-label geno-label--siblings">Fratría adulta conviviente</div>
          ${personNode("madre", 34, 24, "circle", "Madre")}
          ${personNode("padre", 66, 24, "square", "Padre · vivienda")}
          ${personNode("varon", 34, 76, "square", "Demanda ayuda")}
          ${personNode("hermano", 66, 76, "square", "Convive")}
          <div class="board-label">Unidad convivencial en vivienda de los padres</div>
        </div>

        <aside class="side-panel side-panel--rich">
          <h3>${proposal ? "Preguntas de valoración" : "Lectura profesional del genograma"}</h3>
          <p>${proposal ? "El genograma orienta qué explorar en entrevista y coordinación. Las líneas discontinuas no afirman conflicto ni cuidado realizado, sino ámbitos que conviene valorar por su impacto en adherencia, convivencia y sobrecarga." : "El genograma ordena composición, parentesco y convivencia. La demanda aparece en el varón de 45 años, pero la lectura del hogar muestra afectaciones distribuidas en la unidad familiar."}</p>

          <div class="context-grid">
            <div><b>Composición</b><span>Padre, madre, varón de 45 años y hermano de 30 años.</span></div>
            <div><b>Convivencia</b><span>Los cuatro viven en la vivienda de los padres.</span></div>
            <div><b>Relaciones seguras</b><span>Padre y madre son progenitores. Los dos varones son hermanos.</span></div>
            <div><b>Cautela</b><span>No se infiere calidad del vínculo, jerarquía familiar ni cuidador principal.</span></div>
          </div>

          <div class="insights">
            ${proposal ? `
              <div class="insight"><b>Sobrecarga</b><span>Explorar si la ansiedad de la madre se relaciona con cuidados, mediación o tensión convivencial.</span></div>
              <div class="insight"><b>Normalización del consumo</b><span>Valorar cómo incide la dependencia alcohólica del hermano en clima familiar y recaídas.</span></div>
              <div class="insight"><b>Autonomía funcional</b><span>Valorar dolor, movilidad y AVD del padre sin presuponer dependencia.</span></div>
            ` : `
              <div class="insight"><b>Dato principal</b><span>El varón solicita ayuda tras una trayectoria larga de consumo y recaídas.</span></div>
              <div class="insight"><b>Contexto</b><span>La vulnerabilidad se acumula en salud, economía, convivencia y apoyos.</span></div>
              <div class="insight"><b>Valor para la rúbrica</b><span>Permite justificar necesidades sociales familiares sin desbordar la información disponible.</span></div>
            `}
          </div>
        </aside>
      </div>`;
  }

  function ecomapa() {
    return `${modeBanner()}
      <div class="legend">
        <span><i class="solid"></i> Recurso ya presente</span>
        <span><i class="dash"></i> Recurso a activar</span>
        <span><i class="dotline"></i> Coordinación crítica</span>
      </div>
      <div class="tool-split">
        <div class="social-board social-board--ecomap">
          <svg class="lines" viewBox="0 0 580 600" preserveAspectRatio="none" aria-hidden="true">
            <line x1="290" y1="300" x2="290" y2="82" stroke="#0b6470" stroke-width="4"/>
            <line x1="290" y1="300" x2="472" y2="145" stroke="#0b6470" stroke-width="4"/>
            <line x1="290" y1="300" x2="472" y2="455" stroke="#a76b16" stroke-width="4" stroke-dasharray="10 8"/>
            <line x1="290" y1="300" x2="290" y2="518" stroke="#a76b16" stroke-width="4" stroke-dasharray="10 8"/>
            <line x1="290" y1="300" x2="108" y2="455" stroke="#a76b16" stroke-width="4" stroke-dasharray="10 8"/>
            <line x1="290" y1="300" x2="108" y2="145" stroke="#94354f" stroke-width="4" stroke-dasharray="3 8"/>
          </svg>
          <div class="ecomap-core">Familia conviviente<br><small style="color:#57717a">hogar de los padres</small></div>
          <div class="resource-node r1"><strong>Atención primaria</strong><small>Actual. Solicita ayuda</small></div>
          <div class="resource-node r2"><strong>CAD</strong><small>Tratamientos previos</small></div>
          <div class="resource-node r3"><strong>Servicios sociales</strong><small>Propuesta</small></div>
          <div class="resource-node r4"><strong>Salud mental</strong><small>Valoración propuesta</small></div>
          <div class="resource-node r5"><strong>Apoyo familiar</strong><small>Grupos y respiro</small></div>
          <div class="resource-node r6"><strong>Empleo y prestaciones</strong><small>Coordinación crítica</small></div>
        </div>
        <aside class="side-panel">
          <h3>${mode === "proposal" ? "Itinerario de coordinación" : "Lectura del ecomapa"}</h3>
          <p>${mode === "proposal" ? "Prioridad uno: retomar CAD y atención primaria. Prioridad dos: activar servicios sociales para prestaciones y apoyo familiar. Prioridad tres: valorar salud mental y autonomía funcional, evitando una intervención fragmentada." : "Distingue recursos ya utilizados o mencionados de recursos que se activarían desde un plan profesional. Esta separación evita inventar intervenciones y mejora el rigor del foro."}</p>
          <div class="focus-strip">
            <div><b>Presente</b><span>Atención primaria y CAD.</span></div>
            <div><b>A activar</b><span>Servicios sociales y salud mental.</span></div>
            <div><b>A sostener</b><span>Red familiar y comunitaria.</span></div>
          </div>
        </aside>
      </div>`;
  }

  function trayectoria() {
    const facts = [
      ["Más de 10 años", "Evolución de la adicción a heroína", "Dato explícito. Permite entender cronicidad y necesidad de intervención sostenida."],
      ["A los 5 años", "Primera recaída indicada", "El caso señala recaída tras tratamiento con metadona."],
      ["A los 8 años", "Segunda recaída indicada", "Nuevo tratamiento previo en CAD y recaída posterior."],
      ["Pocos meses", "Abandono de comunidad terapéutica", "Dato clave para pensar adherencia, vínculo y expectativas."],
      ["Hace 6 años", "Desempleo prolongado", "Trabajó como camarero, pero lleva seis años sin trabajar y sin subsidio."],
      ["Última recaída", "Agravamiento sintomático", "Insomnio, ansiedad, depresión y apatía asociados en el caso al cannabis."],
      ["Actualidad", "Demanda de ayuda", "Acude de nuevo a atención primaria y solicita ayuda. Ventana de oportunidad."]
    ];
    const proposal = [
      ["Semana 1", "Vinculación y acogida", "Retomar atención primaria y CAD con objetivo de adherencia inicial."],
      ["Semanas 2-4", "Valoración integrada", "Explorar salud mental, consumo de alcohol en el hogar, prestaciones y red familiar."],
      ["Mes 1", "Plan familiar mínimo", "Acordar límites, señales de recaída, apoyos a madre y revisión de convivencia."],
      ["Mes 2", "Activación social", "Prestaciones, orientación ocupacional gradual y grupos de ayuda familiar."],
      ["Mes 3", "Seguimiento evaluable", "Revisar asistencia, sueño, consumos, trámites, autonomía del padre y participación."]
    ];
    const items = mode === "proposal" ? proposal : facts;
    return `${modeBanner()}
      <div class="timeline-pro">
        <div class="timeline-list">
          ${items.map((i) => `<div class="timeline-item"><div class="timeline-date">${i[0]}</div><span class="timeline-dot"></span><div class="timeline-box"><b>${i[1]}</b><span>${i[2]}</span></div></div>`).join("")}
        </div>
        <aside class="timeline-side">
          <h3>${mode === "proposal" ? "Secuencia de intervención" : "Lectura de trayectoria"}</h3>
          <p>${mode === "proposal" ? "La propuesta transforma los hitos del caso en pasos realistas. No exige cambio total inmediato, sino vinculación, estabilización, activación social y seguimiento." : "La línea temporal convierte la historia clínica y social en puntos críticos. Sirve para detectar ventanas de oportunidad, barreras de adherencia y momentos de coordinación."}</p>
          <div class="mini-stack">
            <div><b>Patrón</b><span>Tratamientos previos, recaídas, abandono y solicitud actual.</span></div>
            <div><b>Decisión</b><span>Priorizar vinculación y objetivos graduados.</span></div>
            <div><b>Evaluación</b><span>Medir permanencia, citas, consumos, sueño, trámites y participación.</span></div>
          </div>
        </aside>
      </div>`;
  }

  function necesidades() {
    const rows = mode === "proposal"
      ? [
        ["Salud y adherencia", "CAD, atención primaria y posible salud mental", "Plan de vinculación con citas realistas", "Alta"],
        ["Convivencia y cuidados", "Ansiedad materna y clima de consumo", "Psicoeducación, límites y apoyo familiar", "Alta"],
        ["Ingresos y ocupación", "Seis años sin empleo y sin subsidio", "Prestaciones e itinerario ocupacional gradual", "Media"],
        ["Autonomía funcional", "Artrosis del padre sin grado descrito", "Valoración AVD y apoyos si procede", "Media"],
        ["Red comunitaria", "Aislamiento y fragilidad relacional", "Grupos, recursos comunitarios y participación", "Media"]
      ]
      : [
        ["Salud", "Heroína, cannabis, alcohol, ansiedad y artrosis", "Problemas descritos en el caso", "Alta"],
        ["Familia", "Convivencia en vivienda de los padres", "Unidad convivencial afectada", "Alta"],
        ["Economía", "Desempleo y ausencia de subsidio", "Vulnerabilidad económica explícita", "Media"],
        ["Trayectoria", "Recaídas y abandono terapéutico", "Dificultad de adherencia", "Alta"],
        ["Autonomía", "Artrosis sin grado funcional descrito", "Necesidad de valorar, no asumir", "Media"]
      ];
    return `${modeBanner()}
      <div class="need-grid">
        <div class="need-card header"><div>Área</div><div>${mode === "proposal" ? "Necesidad priorizada" : "Dato del caso"}</div><div>${mode === "proposal" ? "Apoyo socioeducativo" : "Lectura prudente"}</div><div>Prioridad</div></div>
        ${rows.map((r) => `<div class="need-card"><div><b>${r[0]}</b></div><div><span>${r[1]}</span></div><div><span>${r[2]}</span></div><div><span class="priority ${r[3] === "Alta" ? "high" : "med"}">${r[3]}</span></div></div>`).join("")}
      </div>`;
  }

  function plan() {
    const cards = mode === "proposal"
      ? [
        ["1", "Vinculación inicial", "Recuperar contacto con CAD y atención primaria, explorar salud mental y fijar citas realistas."],
        ["2", "Estabilización familiar", "Psicoeducación, límites, comunicación y valoración de sobrecarga."],
        ["3", "Activación social", "Prestaciones, orientación ocupacional y recursos comunitarios de baja exigencia."],
        ["4", "Autonomía del padre", "Valorar dolor, movilidad, AVD y posibles apoyos de dependencia."],
        ["5", "Prevención de recaídas", "Señales de alerta, reducción de daños y plan de respuesta temprana."],
        ["6", "Revisión del plan", "Reunión mensual con objetivos pequeños, verificables y ajustables."]
      ]
      : [
        ["1", "Problema principal", "Demanda de ayuda del varón de 45 años por consumo y malestar asociado."],
        ["2", "Contexto familiar", "Convivencia con padres y hermano en vivienda de los padres."],
        ["3", "Antecedentes", "Metadona, recaídas y abandono de comunidad terapéutica."],
        ["4", "Vulnerabilidad económica", "Seis años sin empleo y sin subsidio."],
        ["5", "Otras afectaciones", "Alcohol en hermano, ansiedad en madre y artrosis en padre."],
        ["6", "Ventana actual", "Acude a atención primaria y solicita ayuda."]
      ];
    return `${modeBanner()}
      <div class="plan-grid">
        ${cards.map((c) => `<article class="plan-card"><span class="phase">${c[0]}</span><h3>${c[1]}</h3><p>${c[2]}</p></article>`).join("")}
      </div>`;
  }

  function renderCanvas() {
    const tool = tools.find((t) => t.id === selectedTool) || tools[0];
    safe("toolKicker", (el) => el.textContent = "Herramienta de caso social");
    safe("toolTitle", (el) => el.textContent = tool.title);
    safe("toolSubtitle", (el) => el.textContent = tool.desc);
    safe("toolCanvas", (canvas) => {
      const renderers = { genograma, ecomapa, trayectoria, necesidades, plan };
      canvas.innerHTML = (renderers[selectedTool] || genograma)();
    });
  }

  window.selectMemberFromTool = (id) => {
    selectedMember = id;
    selectedLayer = "social";
    renderAll();
    renderCanvas();
    const capas = $("capas");
    if (capas) capas.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  function showToast(message) {
    safe("toast", (toast) => {
      toast.textContent = message;
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1800);
    });
  }

  async function toggleFullScreen() {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        showToast("Vista normal restaurada");
        return;
      }
      const target = document.querySelector(".page-shell") || document.documentElement;
      if (target.requestFullscreen) {
        await target.requestFullscreen();
        showToast("Pantalla completa activada");
      } else {
        showToast("El navegador no permite pantalla completa aquí");
      }
    } catch (error) {
      showToast("Pantalla completa bloqueada por el navegador");
    }
  }

  function printPdf() {
    showToast("Elige Guardar como PDF en la ventana de impresión");
    setTimeout(() => window.print(), 180);
  }

  function bindModeButtons() {
    safe("factsMode", (btn) => {
      btn.addEventListener("click", () => {
        mode = "facts";
        btn.classList.add("is-active");
        safe("proposalMode", (p) => p.classList.remove("is-active"));
        renderCanvas();
      });
    });
    safe("proposalMode", (btn) => {
      btn.addEventListener("click", () => {
        mode = "proposal";
        btn.classList.add("is-active");
        safe("factsMode", (f) => f.classList.remove("is-active"));
        renderCanvas();
      });
    });
  }

  function renderAll() {
    renderMembers();
    renderLayerTabs();
    renderLayerCard();
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    renderToolMenu();
    renderCanvas();
    bindModeButtons();

    safe("fullScreenBtn", (btn) => btn.addEventListener("click", toggleFullScreen));
    safe("printBtn", (btn) => btn.addEventListener("click", printPdf));
  });
})();
