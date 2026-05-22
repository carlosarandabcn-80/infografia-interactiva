(()=>{
  const STORAGE='sdvs-a11y';
  const options=[
    ['large','Texto grande','Aumenta el tamaño general del texto.','a11y-large'],
    ['xl','Texto muy grande','Activa una escala mayor para baja visión.','a11y-xl'],
    ['contrast','Alto contraste','Fondo claro, bordes negros y máximo contraste.','a11y-contrast'],
    ['spacing','Más espaciado','Aumenta interlineado y separación entre letras.','a11y-spacing'],
    ['links','Subrayar enlaces','Hace los enlaces más fáciles de reconocer.','a11y-links'],
    ['motion','Reducir movimiento','Desactiva animaciones y desplazamientos suaves.','a11y-reduce-motion']
  ];
  const saved=()=>{try{return JSON.parse(localStorage.getItem(STORAGE)||'{}')}catch(e){return {}}};
  const persist=(state)=>localStorage.setItem(STORAGE,JSON.stringify(state));
  const apply=(state)=>{options.forEach(([id,,,cls])=>document.body.classList.toggle(cls,!!state[id]));if(state.xl)document.body.classList.remove('a11y-large')};
  const state=saved();
  function build(){
    const button=document.createElement('button');
    button.className='a11y-trigger';
    button.type='button';
    button.id='a11y-trigger';
    button.setAttribute('aria-label','Abrir ajustes de accesibilidad');
    button.setAttribute('aria-expanded','false');
    button.setAttribute('aria-controls','a11y-panel');
    button.textContent='Aa';
    const panel=document.createElement('section');
    panel.className='a11y-panel';
    panel.id='a11y-panel';
    panel.setAttribute('aria-labelledby','a11y-title');
    panel.innerHTML=`<h2 id="a11y-title">Accesibilidad</h2><p>Ajustes rápidos para lectura, baja visión y uso táctil en Android.</p><div class="a11y-options">${options.map(([id,label,help])=>`<label class="a11y-option"><input type="checkbox" data-a11y="${id}"><span>${label}<small>${help}</small></span></label>`).join('')}</div><div class="a11y-actions"><button type="button" data-a11y-action="close">Aplicar</button><button type="button" data-a11y-action="reset">Restablecer</button></div>`;
    document.body.prepend(panel);
    document.body.prepend(button);
    const sync=()=>panel.querySelectorAll('[data-a11y]').forEach(input=>{input.checked=!!state[input.dataset.a11y]});
    const open=(value)=>{panel.classList.toggle('open',value);document.body.classList.toggle('a11y-panel-open',value);button.setAttribute('aria-expanded',String(value));if(value)panel.querySelector('input')?.focus()};
    button.addEventListener('click',()=>open(!panel.classList.contains('open')));
    panel.addEventListener('change',e=>{const input=e.target.closest('[data-a11y]');if(!input)return;if(input.dataset.a11y==='xl'&&input.checked)state.large=false;if(input.dataset.a11y==='large'&&input.checked)state.xl=false;state[input.dataset.a11y]=input.checked;apply(state);sync();persist(state)});
    panel.addEventListener('click',e=>{const action=e.target.closest('[data-a11y-action]')?.dataset.a11yAction;if(!action)return;if(action==='close')open(false);if(action==='reset'){Object.keys(state).forEach(k=>delete state[k]);apply(state);sync();persist(state)}});
    addEventListener('keydown',e=>{if(e.key==='Escape')open(false)});
    document.addEventListener('click',e=>{if(!panel.classList.contains('open'))return;if(panel.contains(e.target)||button.contains(e.target))return;open(false)});
    sync();
  }
  const boot=()=>{apply(state);build()};
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',boot):boot();
})();
