(()=>{
  const LANG_STORAGE='sdvs-lang';
  const SESSION_LANG='sdvs-lang-session-choice';
  const hasSessionChoice=()=>sessionStorage.getItem(SESSION_LANG)==='1';
  const setSpanishDefault=()=>{if(!hasSessionChoice())localStorage.setItem(LANG_STORAGE,'es')};
  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-lang-option]');
    if(button)sessionStorage.setItem(SESSION_LANG,'1');
  },true);
  setSpanishDefault();

  const scripts={
    es:{
      label:'Escuchar descripción auditiva',
      stop:'Detener descripción auditiva',
      unsupported:'Tu navegador no permite lectura de voz automática.',
      text:'Descripción auditiva del recurso. Esta infografía académica de la asignatura Salud, Dependencia y Vulnerabilidad Social presenta una lectura socioeducativa del caso Familia R. La página se organiza en cinco áreas: caso por capas, herramientas profesionales, ruta del código al apoyo, evaluación de calidad y referencias. El objetivo es diferenciar dato sanitario, necesidad social, factores de riesgo y protección, y apoyos evaluables sin emitir diagnósticos desde la intervención socioeducativa. Puedes usar el panel de accesibilidad situado arriba a la izquierda para aumentar el tamaño del texto, activar alto contraste, reducir movimiento o mejorar el espaciado.'
    },
    en:{
      label:'Listen to audio description',
      stop:'Stop audio description',
      unsupported:'Your browser does not support automatic speech playback.',
      text:'Audio description of the resource. This academic infographic for Health, Dependency and Social Vulnerability presents a socio-educational reading of the Family R case. The page is organised into five areas: case by layers, professional tools, pathway from code to support, quality assessment and references. The aim is to distinguish health data, social need, risk and protection factors, and assessable support without issuing diagnoses from socio-educational intervention. You can use the accessibility panel at the top left to enlarge text, activate high contrast, reduce motion or improve spacing.'
    },
    ar:{
      label:'استمع إلى الوصف الصوتي',
      stop:'إيقاف الوصف الصوتي',
      unsupported:'متصفحك لا يدعم القراءة الصوتية التلقائية.',
      text:'وصف صوتي للمورد. تعرض هذه الإنفوغرافيا الأكاديمية لمقرر الصحة والاعتماد والهشاشة الاجتماعية قراءة اجتماعية تربوية لحالة الأسرة ر. تنظم الصفحة في خمسة مجالات: الحالة حسب الطبقات، الأدوات المهنية، المسار من الرمز إلى الدعم، تقييم الجودة، والمراجع. الهدف هو التمييز بين البيانات الصحية والحاجة الاجتماعية وعوامل الخطر والحماية والدعم القابل للتقييم دون إصدار تشخيصات من التدخل الاجتماعي التربوي.'
    }
  };
  const currentLang=()=>localStorage.getItem(LANG_STORAGE)||'es';
  const speak=()=>{
    const lang=currentLang();
    const data=scripts[lang]||scripts.es;
    if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window)){
      const toast=document.getElementById('toast');
      if(toast)toast.textContent=data.unsupported;
      return;
    }
    if(window.speechSynthesis.speaking){window.speechSynthesis.cancel();return;}
    const utterance=new SpeechSynthesisUtterance(data.text);
    utterance.lang=lang==='ar'?'ar':lang==='en'?'en-US':'es-ES';
    utterance.rate=.92;
    utterance.pitch=1;
    window.speechSynthesis.speak(utterance);
  };
  const updateLabel=button=>{
    const data=scripts[currentLang()]||scripts.es;
    button.setAttribute('aria-label',window.speechSynthesis?.speaking?data.stop:data.label);
    button.title=window.speechSynthesis?.speaking?data.stop:data.label;
  };
  const build=()=>{
    if(document.getElementById('audio-description'))return;
    const button=document.createElement('button');
    button.type='button';
    button.id='audio-description';
    button.className='audio-description-trigger';
    button.textContent='Audio';
    updateLabel(button);
    button.addEventListener('click',()=>{speak();setTimeout(()=>updateLabel(button),80)});
    setInterval(()=>updateLabel(button),1000);
    document.body.prepend(button);
  };
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',build):build();
})();
