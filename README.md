# Roteiro Santa Catarina 2026

Site da viagem de 25/10 a 05/11/2026 (Balneário Camboriú, Pomerode e Penha).

| Arquivo | O que é |
|---|---|
| `index.html` | Roteiro completo em uma página só |
| `menu.html` | Versão com menu: 12 dias · Onde ficar · Mapas |
| `dados.js` | **Todos os textos e links. É o único arquivo que precisa ser editado.** |
| `roteiro.js` | Ilustrações e montagem das páginas (não mexer) |
| `estilo.css` | Visual das páginas (não mexer) |

## Como publicar no GitHub Pages

1. Crie uma conta gratuita em **github.com** (se ainda não tiver).
2. Clique em **+** (canto superior direito) → **New repository**.
   - Repository name: `roteiro-sc`
   - Marque **Public** (no plano gratuito o site só funciona com repositório público)
   - Clique em **Create repository**.
3. Na página do repositório, clique em **uploading an existing file** (ou **Add file → Upload files**).
   Arraste os 5 arquivos: `index.html`, `menu.html`, `dados.js`, `roteiro.js`, `estilo.css` (e este `README.md`).
   Clique em **Commit changes**.
4. Vá em **Settings → Pages** (menu lateral).
   - Em *Build and deployment → Source*, escolha **Deploy from a branch**.
   - Em *Branch*, escolha **main** e a pasta **/ (root)** → **Save**.
5. Espere 1 a 2 minutos e recarregue a página de Settings → Pages. Vai aparecer o endereço do site:
   - Página completa: `https://SEU-USUARIO.github.io/roteiro-sc/`
   - Página com menu: `https://SEU-USUARIO.github.io/roteiro-sc/menu.html`

   Esses links abrem para qualquer pessoa, sem login. É só mandar no grupo.

## Como dar permissão de edição a outras pessoas

1. No repositório, vá em **Settings → Collaborators** (pode pedir sua senha).
2. Clique em **Add people** e digite o usuário do GitHub ou o e-mail da pessoa.
3. A pessoa recebe um convite por e-mail e precisa aceitar.

Só quem for colaborador consegue editar. Os demais só visualizam.

## Como editar (inclusive pelo celular)

1. Abra o repositório no navegador e toque em **dados.js**.
2. Toque no ícone de **lápis** (Edit this file).
3. Altere o texto e toque em **Commit changes** → **Commit changes** de novo.
4. Em cerca de 1 minuto as duas páginas já mostram a mudança (se não aparecer, recarregue a página).

### Exemplos

**Adicionar o link do Airbnb** — procure a cidade em `cidades:` e cole o link entre as aspas:

```js
airbnb: 'https://www.airbnb.com.br/rooms/123456',
endereco: 'Rua Exemplo, 100, Pomerode',
```

O `endereco` faz a casa aparecer na aba **Mapas** e cria o botão **Ver no mapa** em **Onde ficar**.

**Mudar o texto de uma atração** — procure o dia em `dias:` e altere o `texto: '...'`.

**Cuidados:** mantenha as aspas simples e as vírgulas no fim das linhas. Se o texto tiver apóstrofo, escreva `\'`.

## Se algo der errado

Toda alteração fica salva no histórico. Abra o arquivo → **History** → escolha a versão anterior → copie o conteúdo de volta e faça um novo commit.
