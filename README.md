# Forja Kickboxing

Landing page de uma academia de kickboxing, pronta para trocar nome, horários, planos e fotos. O conteúdo editável fica em `src/config/site.ts`.

## 🚀 Demo

[Abrir a demo](https://thiagokuster.github.io/academia-template/)

![Página inicial da Forja Kickboxing](docs/preview.png)

## 🛠️ Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion

## ✨ Funcionalidades

- Página responsiva, do celular ao desktop
- Grade de horários por dia
- Planos com mensagem pronta no WhatsApp
- Galeria com ampliação das fotos
- Formulário de aula experimental que abre o WhatsApp, sem backend
- Perguntas frequentes

## 📦 Como rodar localmente

```bash
git clone https://github.com/thiagokuster/academia-template.git
cd academia-template
npm install
npm run dev
```

O gerenciador do projeto é o npm, com o lockfile `package-lock.json`.

## 🎨 Personalização

O que muda de uma academia para outra está em `src/config/site.ts`:

- `site`: nome, telefone, e-mail, endereço, Instagram e mapa
- `about`: texto da seção Sobre e o passo a passo da aula
- `scheduleSlots`: grade de segunda a sexta
- `instructors`: nomes e biografias
- `plans`: nomes, preços e o que cada plano inclui
- `faqs`, `testimonials` e `goals`

`site.phoneDisplay` e `site.phoneE164` começam vazios de propósito. Enquanto `phoneE164` estiver vazio, o telefone some da página e nenhum botão abre o WhatsApp. Preencha `phoneE164` só com dígitos e DDI, e `phoneDisplay` com o texto que deve aparecer no contato. O formulário e os planos então montam um link `https://wa.me/...`. Nenhum dado vai para um servidor.

Fotos da hero, da galeria e dos instrutores ficam em `src/assets`. O título da aba fica em `index.html`.

## 📄 Licença

[MIT](LICENSE)
