# Construtor de Sites — Gerador de Prompts IA

Uma ferramenta web que guia você em 5 passos simples e gera um prompt otimizado para colar em qualquer builder de IA (Lovable, Bolt, v0 e outros).

**Demo:** [inema.vip](https://inema.vip)

---

## O que é

Em vez de escrever prompts do zero, você preenche 5 campos e a ferramenta monta automaticamente um prompt estruturado e detalhado — pronto para gerar um site completo com qualquer AI builder.

---

## Como funciona

| Passo | O que você faz |
|---|---|
| **1 — Para que é o site?** | Descreve livremente o propósito do site |
| **2 — Tipo de negócio** | Escolhe entre 12 nichos ou digita o seu |
| **3 — Estilo visual** | Seleciona entre 6 estilos com preview animado |
| **4 — Seções da página** | Adiciona, remove e reordena seções com drag-and-drop |
| **5 — Texto do botão** | Define o CTA principal (ex: "Agendar Consulta") |

Após preencher, o prompt é gerado em tempo real. Clique em **Copiar Prompt** e cole em Lovable, Bolt, v0 ou qualquer outra ferramenta.

---

## Estilos disponíveis

| Estilo | Descrição |
|---|---|
| **Limpo & Moderno** | Fundo branco, tipografia nítida, acentos azuis |
| **Ousado & Escuro** | Fundo quase preto, acentos violeta, alto contraste |
| **Quente & Natural** | Tons creme e âmbar, sensação orgânica e confiável |
| **Divertido & Suave** | Pastéis amarelos e lavanda, formas arredondadas |
| **Luxuoso & Elegante** | Preto quente, dourado/champagne, estilo premium |
| **Vibrante & Gradiente** | Roxo profundo, gradientes multi-cor, criativo e energético |

---

## Seções disponíveis

Hero · Prova Social · Funcionalidades · Como Funciona · Depoimentos · Preços · FAQ · Formulário de Contato · Newsletter · Estatísticas · Banner CTA · Rodapé

---

## Stack

| Tecnologia | Uso |
|---|---|
| **React 18** | Framework principal |
| **Vite** | Build tool |
| **Tailwind CSS v3** | Estilização |
| **Framer Motion** | Animações (drag-and-drop, transições, orbs) |
| **Lucide React** | Ícones SVG |
| **Google Fonts** | Inter + JetBrains Mono |

100% client-side — sem backend, sem banco de dados, sem autenticação.

---

## Estrutura do projeto

```
src/
├── components/
│   ├── BackgroundOrbs.jsx        # Blobs animados do hero
│   ├── CommunityIllustration.jsx # Ilustração SVG animada da comunidade
│   ├── CopyButton.jsx            # Botão com rainbow border + feedback
│   ├── Divider.jsx               # Separador com glow hover
│   ├── MockupPreview.jsx         # Preview visual de cada estilo (JSX puro)
│   ├── NicheSelector.jsx         # Grid de nichos + input livre
│   ├── PromptDisplay.jsx         # Caixa expansível + contador de palavras
│   ├── SectionManager.jsx        # Drag-and-drop de seções
│   ├── StepHeader.jsx            # Badge numerado + título de step
│   └── StylePicker.jsx           # Grid de cards de estilo
├── data/
│   ├── niches.js                 # 12 nichos com emoji
│   ├── sections.js               # 12 tipos de seção com ícones lucide
│   └── styles.js                 # 6 estilos visuais com paletas de cores
├── utils/
│   └── generatePrompt.js         # Função pura de geração do prompt
└── index.css                     # Tokens CSS, animações shimmer/rainbow
```

---

## Rodando localmente

```bash
# Clonar o repositório
git clone https://github.com/inematds/websitebuilder.git
cd websitebuilder

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
# → http://localhost:5173

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## Design

### Tokens CSS

```css
--bg:           #0c0c10   /* Fundo da página */
--surface:      #16161c   /* Cards e superfícies */
--accent:       #8b6cff   /* Roxo principal */
--text:         #f2f2f5   /* Texto primário */
--text-muted:   #b8b8c4   /* Texto secundário */
--input-bg:     #111116   /* Fundo dos inputs */
```

### Animações CSS customizadas

- **Shimmer** — gradiente animado no título principal
- **Rainbow border** — borda cônica rotativa com `@property --angle` (CSS Houdini)
- **Rainbow strip** — linha 2px com gradiente em movimento
- **Pulse dot** — indicador verde pulsante de status

---

## Estrutura do prompt gerado

O prompt é sempre gerado em inglês para máxima compatibilidade com os AI builders:

```
Build me a beautiful, complete, single-page website.

**What it's for:** [descrição do usuário]
**Type of business:** [nicho selecionado]
**Main button text:** "[CTA]"

**Visual style:** [estilo] — [descrição detalhada da paleta]

Pick a color palette that feels right for this type of business...

**Page sections (build them in this order):**
1. Hero — Full-width hero with bold headline, CTA button...
2. ...

**Important:**
- Make it fully responsive
- Use real, realistic placeholder text — not lorem ipsum
- Add smooth, subtle animations
- Use React with Tailwind CSS
```

---

## Comunidade

Quer ir mais fundo em IA, automações e sites que funcionam de verdade?

**[inema.vip](https://inema.vip)**

---

## Licença

MIT
