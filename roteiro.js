/* Ilustrações e montagem das páginas. Não precisa editar este arquivo:
   os textos e links ficam em dados.js. */
(function(){
const V=window.VIAGEM;

/* ---------- ilustrações (SVG originais) ---------- */
const W=360,H=170;
const sky=(extra='')=>`<rect width="${W}" height="${H}" fill="var(--sky)"/>${extra}`;
const sun=(x=300,y=38,r=18)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="var(--bc)" opacity=".9"/>`;
const cloud=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})" fill="var(--surface)" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="10"/><ellipse cx="-12" cy="-3" rx="11" ry="7"/></g>`;
const sea=(y=120)=>`<rect y="${y}" width="${W}" height="${H-y}" fill="var(--sea)"/><path d="M0 ${y+12} q15 -6 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0" stroke="var(--surface)" stroke-width="2" fill="none" opacity=".5"/>`;
const sand=(y=138)=>`<path d="M0 ${y} Q180 ${y-14} 360 ${y+4} V170 H0Z" fill="var(--sand)"/>`;
const grass=(y=128)=>`<path d="M0 ${y} Q120 ${y-12} 220 ${y} T360 ${y-4} V170 H0Z" fill="var(--leaf)"/>`;
const hills=()=>`<path d="M0 110 Q60 70 130 100 T260 88 T360 96 V170 H0Z" fill="var(--leaf)" opacity=".55"/>`;
const tree=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><rect x="-3" y="0" width="6" height="18" fill="var(--wood)"/><circle cx="0" cy="-6" r="14" fill="var(--po)"/></g>`;
const palm=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})" stroke-linecap="round"><path d="M0 0 q4 -26 -2 -46" stroke="var(--wood)" stroke-width="5" fill="none"/><g fill="none" stroke="var(--po)" stroke-width="5"><path d="M-2 -46 q-16 -6 -28 6"/><path d="M-2 -46 q16 -8 28 4"/><path d="M-2 -46 q-6 -14 -20 -16"/><path d="M-2 -46 q10 -14 22 -14"/></g></g>`;
function skyline(base=120){let s='',x=6;const hs=[70,95,60,110,82,100,56,90,74,104,66,88];hs.forEach((h,i)=>{const w=20+(i%3)*4;s+=`<rect x="${x}" y="${base-h}" width="${w}" height="${h}" fill="var(--pe-ink)" opacity="${.55+(i%3)*.12}"/>`;for(let yy=base-h+6;yy<base-6;yy+=10)s+=`<rect x="${x+4}" y="${yy}" width="${w-8}" height="3" fill="var(--sky)" opacity=".5"/>`;x+=w+5});return s}
const enx=(x,y,s=1,c='var(--cream)')=>`<g transform="translate(${x} ${y}) scale(${s})"><rect x="0" y="0" width="80" height="54" fill="${c}"/><path d="M-6 2 L40 -36 L86 2Z" fill="var(--red)"/><g stroke="var(--wood)" stroke-width="3.5"><path d="M0 0H80M0 27H80M0 54H80M0 0V54M27 0V54M53 0V54M80 0V54M0 0L27 27M27 0L0 27M53 27L80 54M80 27L53 54"/></g><rect x="33" y="34" width="14" height="20" fill="var(--wood)"/><rect x="8" y="7" width="13" height="13" fill="var(--sky)" stroke="var(--wood)" stroke-width="2"/><rect x="59" y="7" width="13" height="13" fill="var(--sky)" stroke="var(--wood)" stroke-width="2"/></g>`;
const plane=(x,y,s=1,r=-10)=>`<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})" fill="var(--surface)" stroke="var(--pe-ink)" stroke-width="2"><path d="M-46 0 Q-50 -8 -40 -8 H34 Q50 -8 52 0 Q50 8 34 8 H-40 Q-50 8 -46 0Z"/><path d="M-4 -6 L-22 -32 H-12 L14 -6Z"/><path d="M-4 6 L-22 32 H-12 L14 6Z"/><path d="M-40 -6 L-50 -22 H-42 L-30 -6Z"/></g>`;
const dino=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})" fill="var(--po-ink)"><path d="M0 0 Q10 -40 40 -40 Q60 -40 64 -60 Q66 -74 80 -74 Q96 -74 96 -64 Q96 -56 84 -56 Q76 -56 74 -44 Q70 -16 50 -6 L52 22 H44 L40 0 L22 0 L20 22 H12 L10 0 Q-20 4 -48 -6 Q-20 -2 0 0Z"/><circle cx="86" cy="-66" r="2.5" fill="var(--cream)"/><g fill="var(--bc)"><path d="M24 -36 l6 -10 l6 10z"/><path d="M38 -40 l6 -10 l6 10z"/><path d="M52 -44 l5 -10 l5 10z"/></g></g>`;
const fish=(x,y,s=1,c='var(--bc)')=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 Q14 -12 30 0 Q14 12 0 0Z M30 0 L40 -8 L40 8Z" fill="${c}"/><circle cx="8" cy="-2" r="1.6" fill="var(--fg)"/></g>`;
const bubble=(x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="var(--surface)" stroke-width="1.5" opacity=".7"/>`;
const gondola=(x,y)=>`<g transform="translate(${x} ${y})"><path d="M0 0 V10" stroke="var(--fg)" stroke-width="2"/><rect x="-12" y="10" width="24" height="18" rx="4" fill="var(--bc)"/><rect x="-8" y="13" width="16" height="7" rx="2" fill="var(--sky)"/></g>`;
const mug=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><rect x="0" y="0" width="34" height="46" rx="4" fill="var(--bc)"/><path d="M34 10 h8 a8 8 0 0 1 8 8 v8 a8 8 0 0 1 -8 8 h-8" fill="none" stroke="var(--cream)" stroke-width="5"/><path d="M-2 2 Q4 -12 17 -6 Q30 -14 36 2Z" fill="var(--cream)"/><g stroke="var(--cream)" stroke-width="2" opacity=".6"><path d="M9 12V40M17 12V40M25 12V40"/></g></g>`;
const flower=(x,y,c)=>`<g transform="translate(${x} ${y})"><path d="M0 0 V14" stroke="var(--po-ink)" stroke-width="2"/><circle r="5" fill="${c}"/><circle r="2" fill="var(--bc)"/></g>`;
const giraffe=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})" fill="var(--bc)"><rect x="0" y="-30" width="50" height="22" rx="10"/><rect x="2" y="-12" width="6" height="30"/><rect x="40" y="-12" width="6" height="30"/><rect x="12" y="-12" width="6" height="30"/><rect x="30" y="-12" width="6" height="30"/><path d="M38 -26 L56 -86 L66 -84 L50 -24Z"/><ellipse cx="66" cy="-88" rx="12" ry="7"/><g fill="var(--wood)" opacity=".7"><circle cx="12" cy="-22" r="4"/><circle cx="28" cy="-24" r="4"/><circle cx="52" cy="-58" r="3"/><circle cx="56" cy="-74" r="3"/></g><path d="M60 -96 v-6 M66 -96 v-6" stroke="var(--wood)" stroke-width="2"/></g>`;
const spitz=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><circle cx="0" cy="0" r="26" fill="var(--bc)"/><circle cx="26" cy="-22" r="18" fill="var(--bc)"/><path d="M14 -36 l4 -16 l8 12z M30 -38 l8 -14 l2 16z" fill="var(--bc)"/><circle cx="32" cy="-24" r="2" fill="var(--fg)"/><circle cx="42" cy="-18" r="3" fill="var(--fg)"/><path d="M-22 -8 Q-44 -30 -26 -40 Q-18 -24 -14 -16Z" fill="var(--bc)"/><rect x="-14" y="18" width="8" height="12" rx="3" fill="var(--bc)"/><rect x="8" y="18" width="8" height="12" rx="3" fill="var(--bc)"/></g>`;
const choco=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><rect x="0" y="0" width="66" height="40" rx="3" fill="var(--wood)"/><g stroke="var(--sand)" stroke-width="1.5" opacity=".5"><path d="M22 0V40M44 0V40M0 20H66"/></g><path d="M40 -2 H70 V42 H48 L40 30Z" fill="var(--red)"/></g>`;
const cake=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><rect x="0" y="0" width="60" height="30" rx="4" fill="var(--cream)"/><path d="M0 8 q10 8 20 0 t20 0 t20 0" fill="none" stroke="var(--red)" stroke-width="4"/><rect x="-6" y="30" width="72" height="5" rx="2" fill="var(--muted)"/><g fill="var(--pe)"><rect x="14" y="-16" width="4" height="16"/><rect x="28" y="-16" width="4" height="16"/><rect x="42" y="-16" width="4" height="16"/></g><g fill="var(--bc)"><ellipse cx="16" cy="-21" rx="3" ry="5"/><ellipse cx="30" cy="-21" rx="3" ry="5"/><ellipse cx="44" cy="-21" rx="3" ry="5"/></g></g>`;
const cup=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 H40 Q38 30 20 30 Q2 30 0 0Z" fill="var(--cream)"/><path d="M40 6 q12 0 10 10 q-2 8 -12 6" fill="none" stroke="var(--cream)" stroke-width="4"/><ellipse cx="20" cy="34" rx="30" ry="4" fill="var(--muted)" opacity=".6"/><g stroke="var(--muted)" stroke-width="2" fill="none" opacity=".7"><path d="M12 -6 q-4 -8 2 -14"/><path d="M24 -6 q-4 -8 2 -14"/></g></g>`;
const shrimp=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 Q-4 -26 20 -30 Q40 -30 42 -12 Q34 -20 22 -18 Q8 -16 10 0Z" fill="var(--red)"/><path d="M0 0 l-10 8 l12 -2z" fill="var(--red)"/><path d="M40 -26 q14 -12 22 -6 M38 -28 q8 -16 18 -16" stroke="var(--red)" stroke-width="1.5" fill="none"/></g>`;
const coaster=()=>`<path d="M0 120 C40 120 50 40 90 40 S130 120 170 110 S210 30 250 30 S300 120 360 110" fill="none" stroke="var(--red)" stroke-width="5"/>${[20,60,90,120,150,190,230,250,280,320].map(x=>`<path d="M${x} 170 V${x<100?(x==90?44:90):x<180?100:x<270?(x==250?34:60):105}" stroke="var(--muted)" stroke-width="2"/>`).join('')}<g transform="translate(232 36) rotate(-24)"><rect x="-14" y="-12" width="28" height="12" rx="4" fill="var(--pe)"/><circle cx="-6" cy="-16" r="4" fill="var(--bc)"/><circle cx="6" cy="-16" r="4" fill="var(--bc)"/></g>`;
const castle=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><rect x="0" y="-40" width="60" height="40" fill="var(--cream)"/><rect x="-14" y="-62" width="16" height="62" fill="var(--cream)"/><rect x="58" y="-62" width="16" height="62" fill="var(--cream)"/><path d="M-18 -62 L-6 -84 L6 -62Z M54 -62 L66 -84 L78 -62Z" fill="var(--pe)"/><rect x="22" y="-60" width="16" height="20" fill="var(--cream)"/><path d="M18 -60 L30 -80 L42 -60Z" fill="var(--red)"/><path d="M22 0 V-18 Q30 -26 38 -18 V0Z" fill="var(--wood)"/></g>`;
const wheel=(x,y,r=46)=>{let s=`<g transform="translate(${x} ${y})"><circle r="${r}" fill="none" stroke="var(--muted)" stroke-width="3"/>`;for(let i=0;i<8;i++){const a=i*Math.PI/4,cx=Math.cos(a)*r,cy=Math.sin(a)*r;s+=`<path d="M0 0 L${cx.toFixed(1)} ${cy.toFixed(1)}" stroke="var(--muted)" stroke-width="1.5"/><rect x="${(cx-6).toFixed(1)}" y="${(cy-2).toFixed(1)}" width="12" height="10" rx="2" fill="${['var(--bc)','var(--pe)','var(--red)','var(--po)'][i%4]}"/>`}return s+`<path d="M-26 ${r+24} L0 0 L26 ${r+24}" stroke="var(--muted)" stroke-width="3" fill="none"/></g>`};
const svg=(inner,label)=>`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

const ART={
  hero:svg(sky(sun(310,40,20)+cloud(70,40)+cloud(200,26,.8))+`<g transform="scale(.6) translate(0 80)">${skyline(124)}</g>`+`<path d="M150 120 Q210 70 280 96 T360 92 V130 H150Z" fill="var(--leaf)" opacity=".7"/>`+enx(230,82,.5)+tree(330,108,.8)+sea(122)+sand(150)+palm(40,166,.8)+plane(120,40,.5,-8),'Prédios da orla, casa enxaimel e praia'),
  bc:svg(sky(sun()+cloud(80,40)+cloud(220,30,.7))+skyline(122)+sea(118)+sand(146)+palm(330,168,.8),'Orla de Balneário Camboriú'),
  po:svg(sky(cloud(70,36)+cloud(250,30,.8))+hills()+grass(128)+enx(140,74,1)+tree(60,112,1.1)+tree(290,112,1.2)+flower(100,140,'var(--red)')+flower(260,146,'var(--pe)'),'Casa enxaimel em Pomerode'),
  pe:svg(sky(sun(50,40,16)+cloud(170,30,.8))+sea(140)+coaster(),'Montanha-russa à beira-mar'),
  d25:svg(sky(sun(60,46,16)+cloud(250,40)+cloud(120,70,.7))+plane(200,90,1.2,-12)+skyline(170).replace(/opacity="\.5"/g,'opacity=".3"'),'Avião a caminho de Navegantes'),
  d26:svg(`<rect width="${W}" height="${H}" fill="var(--sky)"/>`+`<rect x="180" width="180" height="${H}" fill="var(--sea)"/>`+grass(140).replace('var(--leaf)','var(--po)')+tree(30,124,1)+dino(60,118,.9)+fish(220,50,1.1)+fish(270,96,.9,'var(--red)')+fish(300,40,.7,'var(--cream)')+fish(230,120,.8,'var(--po)')+bubble(250,30,4)+bubble(330,80,5)+bubble(214,90,3),'Dinossauro e peixes do aquário'),
  d27:svg(sky(sun(320,40)+cloud(60,32,.8))+`<path d="M0 50 Q60 40 120 60 L360 120" stroke="var(--fg)" stroke-width="1.5" fill="none"/>`+`<path d="M0 30 Q140 40 360 20" stroke="var(--fg)" stroke-width="1.5" fill="none" opacity=".4"/>`+`<path d="M200 170 Q240 80 300 90 Q340 96 360 110 V170Z" fill="var(--po)"/>`+sea(128)+sand(150)+gondola(90,52)+gondola(190,74)+palm(40,166,.7),'Bondinho sobre a praia de Laranjeiras'),
  d28:svg(sky(cloud(60,30)+cloud(300,44,.8))+hills()+grass(130)+castle(80,138,.9)+enx(200,84,.8)+tree(330,118,1)+flower(170,146,'var(--red)')+flower(30,150,'var(--pe)'),'Vila encantada e casas enxaimel'),
  d29:svg(sky(sun(310,36,14)+cloud(90,30))+grass(124)+tree(40,104,1.2)+tree(310,108,1)+[60,110,160,210,260].map((x,i)=>flower(x,138+(i%2)*8,['var(--red)','var(--pe)','var(--bc)','var(--cream)','var(--red)'][i])).join('')+enx(110,62,.65)+mug(230,74,1),'Jardins do Alles Park e caneca do biergarten'),
  d30:svg(sky(cloud(70,30)+cloud(220,46,.7))+grass(130)+tree(330,112,1.1)+giraffe(40,128,.9)+spitz(220,130,1),'Girafa do zoológico e um Spitz'),
  d31:svg(sky(sun(320,34,14)+cloud(150,28,.7))+hills()+grass(132)+enx(20,92,.7)+enx(100,98,.55,'var(--sand)')+choco(180,110,1)+cake(270,118,1),'Rota do Enxaimel, chocolate e bolo de aniversário'),
  d01:svg(sky(cloud(60,30)+cloud(280,40,.8))+`<rect y="128" width="${W}" height="42" fill="var(--sand)"/>`+enx(30,74,.9)+enx(120,84,.75,'var(--sand)')+`<g fill="var(--red)">${[0,1,2,3,4,5,6,7,8].map(i=>`<path d="M${20+i*36} 20 l8 12 l8 -12z" opacity=".8"/>`).join('')}</g><path d="M10 20 Q180 36 350 20" stroke="var(--fg)" stroke-width="1" fill="none"/>`+cup(250,110,1.1),'Vila Germânica e café colonial'),
  d02:svg(sky(sun(70,40,16)+cloud(260,34))+sea(110)+sand(140)+shrimp(140,150,1.2)+`<g transform="translate(220 150)"><ellipse cx="0" cy="0" rx="22" ry="12" fill="var(--cream)"/><path d="M-20 0 Q0 -20 20 0" fill="none" stroke="var(--bc)" stroke-width="2"/></g>`+palm(320,166,.8)+palm(30,166,.6),'Praia de Penha e frutos do mar'),
  d03:svg(sky(cloud(70,30)+cloud(300,60,.7))+coaster()+castle(30,170,.7),'Montanha-russa e castelo do parque'),
  d04:svg(sky(sun(320,36,14)+cloud(140,28,.8))+wheel(110,72,50)+`<path d="M190 170 V70 Q230 40 270 70 V170" fill="var(--red)" opacity=".85"/><path d="M200 170 V100 M230 170 V60 M260 170 V100" stroke="var(--cream)" stroke-width="3"/>`+`<rect y="150" width="${W}" height="20" fill="var(--sand)"/>`,'Roda-gigante e brinquedos do parque'),
  d05:svg(sky(sun(300,120,22).replace('opacity=".9"','opacity=".6"')+cloud(80,46)+cloud(210,30,.8))+sea(140)+plane(170,80,1.1,8),'Avião de volta a Recife'),
};

/* ---------- utilidades ---------- */
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const cidade=k=>V.cidades.find(c=>c.k===k);
const lista=x=>x?(Array.isArray(x)?x:[x]):[];
const ext='target="_blank" rel="noopener"';
const PIN='<svg class="pin" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.6 7-12.2A7 7 0 0 0 5 9.8C5 15.4 12 22 12 22z" fill="currentColor"/><circle cx="12" cy="9.8" r="2.6" fill="var(--surface)"/></svg>';
const HOUSE='<svg class="pin" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11 12 3l9 8v10h-6v-6H9v6H3z" fill="currentColor"/></svg>';

/* ---------- blocos ---------- */
function heroHTML(opts={}){
  if(opts.compacto) return `<h1>Santa Catarina<span>Camboriú, Pomerode e Penha</span></h1>
  <div class="hero-art">${ART.hero}</div>`;
  return `<div class="eyebrow">${esc(V.periodo)}</div>
  <h1>Santa Catarina<span>Camboriú, Pomerode e Penha</span></h1>
  <div class="hero-art">${ART.hero}</div>
  <div class="facts">
    <div class="fact"><b>${V.dias.length}</b><small>dias</small></div>
    <div class="fact"><b>${V.cidades.length}</b><small>bases</small></div>
    <div class="fact"><b>${V.totalViajantes}</b><small>viajantes</small></div>
  </div>
  <div class="flights">${V.voos.map(f=>`<div class="flight"><span class="code">${esc(f.de)}</span><span class="mid">${esc(f.info)}</span><span class="code">${esc(f.para)}</span></div>`).join('')}</div>
  <div class="crew">${esc(V.viajantes)}</div>`;
}

function citiesHTML(opts={}){
  return V.cidades.map(c=>{
    let extra='';
    if(opts.hospedagem){
      const acts=[];
      if(c.airbnb) acts.push(`<a class="btn primary" href="${esc(c.airbnb)}" ${ext}>Ver no Airbnb ↗</a>`);
      if(c.endereco) acts.push(`<a class="btn${c.airbnb?'':' primary'}" href="${mapUrl(c.mapa||c.endereco)}" ${ext}>Ver no mapa ↗</a>`);
      extra=`<div class="stay"><div><small>Entrada</small><b>${esc(c.entrada)}</b></div><div><small>Saída</small><b>${esc(c.saida)}</b></div><div><small>Noites</small><b>${esc(c.noites)}</b></div></div>
      ${c.endereco?`<p class="addr">${esc(c.endereco)}</p>`:''}
      ${acts.length?`<div class="actions">${acts.join('')}</div>`:''}${c.airbnb?'':`<div class="pending">Link do anúncio no Airbnb em breve.</div>`}`;
    }
    return `<article class="city c-${c.k}"><div class="art">${ART[c.arte]||''}</div><div class="body"><span class="when">${esc(c.quando)}</span><h3>${esc(c.nome)}</h3><p>${esc(c.texto)}</p>${extra}<ul>${c.destaques.map(h=>`<li>${esc(h)}</li>`).join('')}</ul></div></article>`;
  }).join('');
}

const diaId=d=>`dia-${d.d}${d.m}`;
function stripHTML(){
  return V.dias.map(d=>`<a class="chip ${d.k}" href="#${diaId(d)}" data-dia="${diaId(d)}"><span class="wd">${esc(d.wd.slice(0,3))}</span><span class="dt">${d.d}/${d.m}</span><span class="tl">${esc(d.titulo)}</span></a>`).join('');
}

function daysHTML(opts={}){
  return V.dias.map(d=>`<article class="day ${d.k}" id="${diaId(d)}">
  <div class="day-head"><div class="stamp"><div><b>${d.d}</b><br><small>${d.m==='10'?'OUT':'NOV'}</small></div></div>
  <div><div class="meta">${esc(d.wd)} · ${esc(cidade(d.k).nome)}</div><h3>${esc(d.titulo)}</h3></div></div>
  <div class="art">${ART[d.arte]||''}</div>
  <ul class="tl-list">${d.horarios.map(s=>{
    if(!s.titulo) return `<li class="slot free"><span class="when">${esc(s.quando)}</span><div class="what"><h4>Livre</h4></div></li>`;
    const ls=lista(s.lugar).map(id=>V.lugares[id]).filter(Boolean);
    const links=[];
    ls.forEach(l=>{ if(l.site) links.push(`<a class="link" href="${esc(l.site)}" ${ext}>${esc(ls.length>1?l.nome:(l.siteNome||'Site'))} ↗</a>`); });
    if(opts.mapas) ls.forEach(l=>links.push(`<a class="link" href="${mapUrl(l.mapa)}" ${ext}>Mapa${ls.length>1?': '+esc(l.nome):''} ↗</a>`));
    return `<li class="slot"><span class="when">${esc(s.quando)}</span><div class="what"><h4>${esc(s.titulo)}</h4>${s.texto?`<p>${esc(s.texto)}</p>`:''}${links.length?`<div class="links">${links.join('')}</div>`:''}</div></li>`;
  }).join('')}</ul>
  <div style="padding:0 16px 14px"><a class="top" href="#topo" data-topo>↑ voltar ao topo</a></div>
</article>`).join('');
}

const GRUPOS=[
  {k:'bc',nome:'Balneário Camboriú',casa:'bc'},
  {k:'po',nome:'Pomerode',casa:'po'},
  {k:'bl',nome:'Blumenau (bate-volta)'},
  {k:'pe',nome:'Penha',casa:'pe'},
  {k:'voo',nome:'Aeroporto'},
];
function mapsHTML(){
  const quando={};
  V.dias.forEach(d=>d.horarios.forEach(s=>lista(s.lugar).forEach(id=>{(quando[id]=quando[id]||[]);const t=`${d.wd.slice(0,3)} ${d.d}/${d.m}`;if(!quando[id].includes(t))quando[id].push(t)})));
  return GRUPOS.map(g=>{
    const rows=[];
    if(g.casa){
      const c=cidade(g.casa);
      rows.push(c.endereco
        ?`<li><a class="place house" href="${mapUrl(c.mapa||c.endereco)}" ${ext}>${HOUSE}<span class="nm"><b>Nossa casa</b><small>${esc(c.endereco)}</small></span><span class="go">Abrir ↗</span></a></li>`
        :`<li><div class="place house off">${HOUSE}<span class="nm"><b>Nossa casa</b><small>endereço em breve</small></span><span></span></div></li>`);
    }
    Object.entries(V.lugares).filter(([,l])=>l.grupo===g.k).forEach(([id,l])=>{
      rows.push(`<li><a class="place" href="${mapUrl(l.mapa)}" ${ext}>${PIN}<span class="nm"><b>${esc(l.nome)}</b><small>${esc((quando[id]||[]).join(' · '))}</small></span><span class="go">Abrir ↗</span></a></li>`);
    });
    return `<div class="mapgroup g-${g.k}"><h3><i></i>${esc(g.nome)}</h3><ul class="places">${rows.join('')}</ul></div>`;
  }).join('');
}

/* contagem regressiva e destaque do dia de hoje */
function marcarHoje(box){
  const ano=V.ano||2026;
  const agora=window.HOJE_TESTE?new Date(window.HOJE_TESTE+'T12:00:00'):new Date();
  const hoje=Date.UTC(agora.getFullYear(),agora.getMonth(),agora.getDate());
  const dataDe=d=>Date.UTC(ano,+d.m-1,+d.d);
  const ini=dataDe(V.dias[0]), DIA=864e5;
  const faltam=Math.round((ini-hoje)/DIA);
  if(faltam>0){
    const voo=V.voos[0];
    box.innerHTML=`<b>${faltam}</b><div><strong>${faltam===1?'dia para a viagem':'dias para a viagem'}</strong><small>${faltam===1?'É amanhã! ':''}Embarque ${esc(voo.info.split('·')[0].trim())} às ${esc((voo.info.split('·')[1]||'').split('→')[0].trim())}, ${esc(voo.de)} → ${esc(voo.para)}</small></div>`;
    box.hidden=false;
  } else box.hidden=true;
  const d=V.dias.find(d=>dataDe(d)===hoje);
  if(d){
    const id=diaId(d);
    document.querySelectorAll(`[data-dia="${id}"]`).forEach(c=>{c.classList.add('today');c.setAttribute('aria-current','date');c.querySelector('.wd').textContent='Hoje'});
    const card=document.getElementById(id); if(card) card.classList.add('today');
  }
}

window.Roteiro={ART,heroHTML,marcarHoje,citiesHTML,stripHTML,daysHTML,mapsHTML};
})();
