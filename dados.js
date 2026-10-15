/* =====================================================================
   DADOS DA VIAGEM — este é o único arquivo que precisa ser editado.
   As duas páginas (index.html e menu.html) leem tudo daqui.

   Dicas para editar sem quebrar:
   - Todo texto fica entre aspas simples: 'assim'.
   - Se o texto tiver apóstrofo, use \' (ex.: 'D\'Ávila').
   - Não apague as vírgulas no fim das linhas.
   ===================================================================== */

window.VIAGEM = {

  ano: 2026,
  periodo: '25 out → 05 nov · 2026',
  viajantes: 'Letícia, Lívia, Leozinho, Pri, Leo, Lana, Tiago, Cynthia, Lurdinha e Pedrinho',
  totalViajantes: 10,

  voos: [
    { de: 'REC', para: 'NAV', info: 'dom 25/10 · 12h35 → 18h50' },
    { de: 'NAV', para: 'REC', info: 'qui 05/11 · 17h20 → 23h15' },
  ],

  /* ---------- ONDE VAMOS FICAR ----------
     airbnb:   cole o link do anúncio entre as aspas
     endereco: endereço da casa (aparece na página e vira o link do mapa)
     mapa:     opcional, coordenadas ou busca exata para o mapa (se vazio, usa o endereço)
     clima:    latitude,longitude usadas na previsão do tempo de cada dia */
  cidades: [
    {
      k: 'bc', nome: 'Balneário Camboriú', arte: 'bc',
      quando: '25/10 → 28/10 · 3 noites',
      entrada: 'Dom 25/10', saida: 'Qua 28/10', noites: 3,
      texto: 'Primeira base, chegando de Navegantes no domingo à noite. Praia urbana, bondinho e duas atrações novas para a criançada.',
      destaques: ['Aventura Jurássica + Oceanic Aquarium', 'Parque Unipraias e Praia de Laranjeiras', 'Passeio San Miguel e noite no Roddertown'],
      airbnb: '',
      endereco: 'Av. Atlântica, 2440, ap. 1001 – Edifício Aldebaran, Balneário Camboriú – SC, 88330-907',
      mapa: 'Edifício Aldebaran, Avenida Atlântica, 2440, Balneário Camboriú - SC',
      clima: '-26.9890,-48.6330',
    },
    {
      k: 'po', nome: 'Pomerode', arte: 'po',
      quando: '28/10 → 02/11 · 5 noites',
      entrada: 'Qua 28/10', saida: 'Seg 02/11', noites: 5,
      texto: 'A cidade mais alemã do Brasil. Casas enxaimel, cervejarias, zoológico e um bate-volta a Blumenau no domingo.',
      destaques: ['Vila Encantada, Alles Park e Zoo Pomerode', 'Rota do Enxaimel + Nugali Chocolates', 'Jantar de aniversário no sábado (31/10)', 'Blumenau: Vila Germânica e Caféhaus Glória'],
      airbnb: '',
      endereco: 'Testo Salto, Pomerode – SC (7R8H+32R)',
      mapa: '-26.7347623,-49.1724865',
      clima: '-26.7348,-49.1725',
    },
    {
      k: 'pe', nome: 'Penha', arte: 'pe',
      quando: '02/11 → 05/11 · 3 noites',
      entrada: 'Seg 02/11', saida: 'Qui 05/11', noites: 3,
      texto: 'Litoral de novo, agora para os dois dias inteiros de Beto Carrero World e frutos do mar. Volta pelo aeroporto de Navegantes.',
      destaques: ['Rota dos Frutos do Mar', 'Beto Carrero World (terça e quarta)', 'Voo NAV → REC na quinta, 17h20'],
      airbnb: '',
      endereco: 'Rua Valdomiro Bernardes, 392, Penha – SC, 88385-000',
      clima: '-26.7695,-48.6465',
    },
  ],

  /* ---------- LUGARES (aparecem na aba Mapas) ----------
     grupo: bc, po, bl (Blumenau), pe ou voo
     mapa:  o que será buscado no Google Maps
     site:  link oficial (opcional) */
  lugares: {
    nav: { nome: 'Aeroporto de Navegantes', grupo: 'voo', mapa: 'Aeroporto Internacional de Navegantes' },
    aj:  { nome: 'Aventura Jurássica', grupo: 'bc', mapa: 'Aventura Jurássica Balneário Camboriú', site: 'https://www.aventurajurassica.com.br/' },
    oa:  { nome: 'Oceanic Aquarium', grupo: 'bc', mapa: 'Oceanic Aquarium Balneário Camboriú', site: 'https://ingresso.oceanicaquarium.com.br/', siteNome: 'Ingressos' },
    ro:  { nome: 'Roddertown', grupo: 'bc', mapa: 'Roddertown Balneário Camboriú', site: 'https://www.instagram.com/roddertown/', siteNome: 'Instagram' },
    un:  { nome: 'Parque Unipraias', grupo: 'bc', mapa: 'Parque Unipraias Balneário Camboriú', site: 'https://www.unipraias.com.br/' },
    la:  { nome: 'Praia de Laranjeiras', grupo: 'bc', mapa: 'Praia de Laranjeiras Balneário Camboriú', site: 'https://guia.melhoresdestinos.com.br/praia-de-laranjeiras-balneario-camboriu.html', siteNome: 'Guia da praia' },
    sm:  { nome: 'Passeio San Miguel', grupo: 'bc', mapa: 'Passeio San Miguel Balneário Camboriú', site: 'https://www.passeiosanmiguel.com.br/' },
    ve:  { nome: 'Vila Encantada', grupo: 'po', mapa: 'Vila Encantada Pomerode', site: 'https://www.vilaencantada.com.br/' },
    sk:  { nome: 'Schornstein Kneipe', grupo: 'po', mapa: 'Schornstein Kneipe Pomerode', site: 'https://www.instagram.com/kneipe.schornstein/', siteNome: 'Instagram' },
    ap:  { nome: 'Alles Park', grupo: 'po', mapa: 'Alles Park Pomerode', site: 'https://allespark.com.br/' },
    bg:  { nome: 'Biergarten Pomerania', grupo: 'po', mapa: 'Biergarten Pomerania Pomerode', site: 'https://www.instagram.com/biergartenpomerania/', siteNome: 'Instagram' },
    zp:  { nome: 'Zoo Pomerode', grupo: 'po', mapa: 'Zoo Pomerode', site: 'https://www.zoopomerode.com.br/' },
    sp:  { nome: 'Spitz Pomer', grupo: 'po', mapa: 'Spitz Pomer Pomerode', site: 'https://spitzpomer.com.br/' },
    re:  { nome: 'Rota do Enxaimel', grupo: 'po', mapa: 'Rota do Enxaimel Testo Alto Pomerode' },
    nu:  { nome: 'Nugali Chocolates', grupo: 'po', mapa: 'Nugali Chocolates Pomerode' },
    cb:  { nome: 'Centro de Blumenau', grupo: 'bl', mapa: 'Rua XV de Novembro Blumenau' },
    vg:  { nome: 'Vila Germânica', grupo: 'bl', mapa: 'Parque Vila Germânica Blumenau' },
    cg:  { nome: 'Confeitaria Caféhaus Glória', grupo: 'bl', mapa: 'Caféhaus Glória Blumenau' },
    fm:  { nome: 'Rota dos Frutos do Mar', grupo: 'pe', mapa: 'restaurante frutos do mar Penha SC' },
    bw:  { nome: 'Beto Carrero World', grupo: 'pe', mapa: 'Beto Carrero World Penha' },
  },

  /* ---------- DIA A DIA ----------
     Um horário sem "titulo" aparece como "Livre".
     lugar: código do lugar acima (ou lista: ['re','nu']) — gera os botões Site e Mapa
     clima: opcional, latitude,longitude da previsão do dia (se vazio, usa a da cidade) */
  dias: [
    { d: '25', m: '10', wd: 'Domingo', k: 'bc', titulo: 'Chegada em SC', arte: 'd25', horarios: [
      { quando: 'Manhã' },
      { quando: 'Tarde', titulo: 'Voo Recife → Navegantes', texto: 'Saída de Recife às 12h35.' },
      { quando: 'Noite', titulo: 'Chegada e ida para Camboriú', texto: 'Pouso em Navegantes às 18h50, pegar os carros e seguir para a casa em Balneário Camboriú (cerca de 30 min).', lugar: 'nav' },
    ]},
    { d: '26', m: '10', wd: 'Segunda', k: 'bc', titulo: 'Dinossauros e aquário', arte: 'd26', horarios: [
      { quando: 'Manhã', titulo: 'Aventura Jurássica', texto: 'Trilha com dinossauros em tamanho real no meio da mata. Bom para ir cedo, antes do calor. Almoço no restaurante temático do parque.', lugar: 'aj' },
      { quando: 'Tarde', titulo: 'Oceanic Aquarium', texto: 'Aquário em Balneário Camboriú. Comprar os ingressos antes pelo site.', lugar: 'oa' },
      { quando: 'Noite', titulo: 'Roddertown', texto: 'Programa da noite em Camboriú.', lugar: 'ro' },
    ]},
    { d: '27', m: '10', wd: 'Terça', k: 'bc', titulo: 'Bondinho e Laranjeiras', arte: 'd27', horarios: [
      { quando: 'Manhã', titulo: 'Parque Unipraias', texto: 'Bondinho que liga a Barra Sul à Praia de Laranjeiras, com parada na estação de Mata Atlântica no alto do morro.', lugar: 'un' },
      { quando: 'Tarde', titulo: 'Praia de Laranjeiras', texto: 'Descer do bondinho direto na praia: mar calmo, bom para as crianças.', lugar: 'la' },
      { quando: 'Noite', titulo: 'Passeio San Miguel', texto: 'Ar livre, gastronomia variada, arte e música ao vivo.', lugar: 'sm' },
    ]},
    { d: '28', m: '10', wd: 'Quarta', k: 'po', titulo: 'Mudança para Pomerode', arte: 'd28', horarios: [
      { quando: 'Manhã', titulo: 'Ida para Pomerode', texto: 'Deixar a casa de Camboriú e subir para o Vale do Itajaí (cerca de 1h30 de carro).' },
      { quando: 'Tarde', titulo: 'Vila Encantada', texto: 'Primeira atração em Pomerode.', lugar: 've' },
      { quando: 'Noite', titulo: 'Schornstein Kneipe', texto: 'Bar da cervejaria Schornstein, nascida em Pomerode.', lugar: 'sk' },
    ]},
    { d: '29', m: '10', wd: 'Quinta', k: 'po', titulo: 'Alles Park e biergarten', arte: 'd29', horarios: [
      { quando: 'Manhã', titulo: 'Alles Park', texto: 'Parque temático de Pomerode, com arquitetura de vila alemã e jardins.', lugar: 'ap' },
      { quando: 'Tarde', titulo: 'Biergarten Pomerania', texto: 'Tarde de jardim de cerveja e comida alemã.', lugar: 'bg' },
      { quando: 'Noite' },
    ]},
    { d: '30', m: '10', wd: 'Sexta', k: 'po', titulo: 'Zoo e Spitz Pomer', arte: 'd30', horarios: [
      { quando: 'Manhã', titulo: 'Zoo Pomerode', texto: 'Zoológico tradicional da cidade. Reservar a manhã inteira.', lugar: 'zp' },
      { quando: 'Tarde', titulo: 'Spitz Pomer', texto: 'Atração de Pomerode inspirada no Spitz, o cão símbolo da região.', lugar: 'sp' },
      { quando: 'Noite' },
    ]},
    { d: '31', m: '10', wd: 'Sábado', k: 'po', titulo: 'Enxaimel e aniversário', arte: 'd31', horarios: [
      { quando: 'Dia todo', titulo: 'Rota do Enxaimel + Nugali Chocolates', texto: 'Estrada pelo Testo Alto com as casas enxaimel mais antigas da região. Parada na fábrica da Nugali, chocolate feito ali mesmo.', lugar: ['re', 'nu'] },
      { quando: 'Noite', titulo: 'Jantar de Aniversário', texto: 'Noite especial da viagem.' },
    ]},
    { d: '01', m: '11', wd: 'Domingo', k: 'po', titulo: 'Bate-volta a Blumenau', arte: 'd01', clima: '-26.9194,-49.0661', horarios: [
      { quando: 'Manhã', titulo: 'Blumenau', texto: 'Cerca de 30 min de Pomerode. Centro histórico e Vila Germânica.', lugar: 'cb' },
      { quando: 'Tarde', titulo: 'Empório Vila Germânica + Caféhaus Glória', texto: 'Compras no parque da Oktoberfest e café colonial na confeitaria tradicional do Hotel Glória.', lugar: ['vg', 'cg'] },
      { quando: 'Noite', titulo: 'Jantar em casa', texto: 'Última noite em Pomerode.' },
    ]},
    { d: '02', m: '11', wd: 'Segunda', k: 'pe', titulo: 'Volta ao litoral', arte: 'd02', horarios: [
      { quando: 'Manhã', titulo: 'Ida para Penha', texto: 'Descer de Pomerode para Penha (cerca de 1h30).' },
      { quando: 'Tarde', titulo: 'Rota dos Frutos do Mar', texto: 'Almoço de frutos do mar na orla de Penha.', lugar: 'fm' },
      { quando: 'Noite' },
    ]},
    { d: '03', m: '11', wd: 'Terça', k: 'pe', titulo: 'Beto Carrero · dia 1', arte: 'd03', horarios: [
      { quando: 'Dia todo', titulo: 'Beto Carrero World', texto: 'Primeiro dia de parque. Chegar na abertura e começar pelas atrações mais disputadas.', lugar: 'bw' },
    ]},
    { d: '04', m: '11', wd: 'Quarta', k: 'pe', titulo: 'Beto Carrero · dia 2', arte: 'd04', horarios: [
      { quando: 'Dia todo', titulo: 'Beto Carrero World', texto: 'Segundo dia para repetir os favoritos e ver os shows que ficaram de fora.', lugar: 'bw' },
    ]},
    { d: '05', m: '11', wd: 'Quinta', k: 'pe', titulo: 'Volta para casa', arte: 'd05', horarios: [
      { quando: 'Manhã', titulo: 'Ida para Navegantes', texto: 'Fechar a casa, devolver os carros (Penha → aeroporto, cerca de 25 min).', lugar: 'nav' },
      { quando: 'Tarde', titulo: 'Voo Navegantes → Recife', texto: 'Saída às 17h20.' },
      { quando: 'Noite', titulo: 'Chegada em Recife', texto: 'Pouso às 23h15.' },
    ]},
  ],
};
