export const site = {
  name: "FORJA",
  fullName: "Forja Kickboxing",
  eyebrow: "Academia de kickboxing",
  heroTitle: ["Força.", "Técnica.", "Resultado."],
  heroSubtitle:
    "Turmas para todos os níveis, com instrutores faixa-preta. Condicionamento, defesa pessoal e disciplina no mesmo tatame.",
  phoneDisplay: "(11) 98765-4321",
  phoneE164: "5511987654321",
  email: "contato@suaacademia.com",
  instagram: "@suaacademia",
  instagramUrl: "https://instagram.com/suaacademia",
  facebookUrl: "https://facebook.com",
  youtubeUrl: "https://youtube.com",
  addressLines: ["Rua dos Lutadores, 123 — Centro", "São Paulo, SP — CEP 01234-567"],
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976290149454!2d-46.6614!3d-23.5614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQxLjAiUyA0NsKwMzknNDEuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+dos+Lutadores+123+Centro+Sao+Paulo",
} as const;

export const stats = [
  { value: "5x", label: "treinos na semana" },
  { value: "2", label: "turmas: adulto e teens" },
  { value: "Grátis", label: "aula experimental" },
] as const;

export const about = {
  eyebrow: "A academia",
  title: "Do primeiro soco ao round completo",
  lead: "Aula em pé, com soco e chute, conduzida por faixa-preta. O treino serve para quem nunca lutou e para quem já quer competir.",
  body: "Quem chega sem experiência começa pela base: guarda, deslocamento e golpe no alvo. Sparring só entra quando a defesa já se sustenta. Quem já treina usa a mesma turma para afiar combinação, ritmo e condicionamento.",
  note: "Na aula experimental a luva pode ser emprestada. Chegue de roupa leve e com água.",
  steps: [
    {
      step: "01",
      title: "Aquecimento",
      description: "Mobilidade e ativação para o corpo entrar no treino sem choque.",
    },
    {
      step: "02",
      title: "Técnica",
      description: "Soco, chute e defesa, primeiro no ar e depois no alvo, com correção.",
    },
    {
      step: "03",
      title: "Potência",
      description: "Combinações em sequência para ganhar fôlego, força e tempo de golpe.",
    },
    {
      step: "04",
      title: "Fechamento",
      description: "Alongamento curto e um retorno do que ajustar na próxima aula.",
    },
  ],
  audiences: [
    {
      title: "Primeira vez",
      description: "A aula experimental é base, não luta livre.",
    },
    {
      title: "Rotina",
      description: "De 2 a 5 treinos por semana, no horário da grade.",
    },
    {
      title: "Teens",
      description: "Turma própria, terça e quinta, às 19h.",
    },
  ],
} as const;

export type ClassName = "Adulto" | "Teens" | null;

export const scheduleDays = [
  { id: "seg", label: "SEG", full: "Segunda" },
  { id: "ter", label: "TER", full: "Terça" },
  { id: "qua", label: "QUA", full: "Quarta" },
  { id: "qui", label: "QUI", full: "Quinta" },
  { id: "sex", label: "SEX", full: "Sexta" },
] as const;

export type DayId = (typeof scheduleDays)[number]["id"];

export const scheduleSlots: { time: string; classes: Record<DayId, ClassName> }[] = [
  { time: "06:00", classes: { seg: "Adulto", ter: "Adulto", qua: "Adulto", qui: "Adulto", sex: "Adulto" } },
  { time: "07:30", classes: { seg: "Adulto", ter: "Adulto", qua: "Adulto", qui: "Adulto", sex: "Adulto" } },
  { time: "08:30", classes: { seg: "Adulto", ter: "Adulto", qua: "Adulto", qui: "Adulto", sex: "Adulto" } },
  { time: "09:30", classes: { seg: "Adulto", ter: "Adulto", qua: null, qui: "Adulto", sex: null } },
  { time: "16:00", classes: { seg: "Adulto", ter: "Adulto", qua: "Adulto", qui: "Adulto", sex: "Adulto" } },
  { time: "17:00", classes: { seg: "Adulto", ter: "Adulto", qua: "Adulto", qui: "Adulto", sex: "Adulto" } },
  { time: "18:00", classes: { seg: "Adulto", ter: "Adulto", qua: "Adulto", qui: "Adulto", sex: "Adulto" } },
  { time: "19:00", classes: { seg: "Adulto", ter: "Teens", qua: "Adulto", qui: "Teens", sex: "Adulto" } },
  { time: "20:00", classes: { seg: "Adulto", ter: "Adulto", qua: "Adulto", qui: "Adulto", sex: "Adulto" } },
];

export const instructors = [
  {
    name: "Ricardo Alves",
    title: "Faixa-preta · técnica e segurança",
    bio: "Conduz as turmas adultas com foco em base, guarda e evolução sem pressa.",
  },
  {
    name: "Camila Nogueira",
    title: "Faixa-preta · preparação física",
    bio: "Especialista em condicionamento, mobilidade e treino para quem está começando.",
  },
  {
    name: "Diego Martins",
    title: "Faixa-preta · performance",
    bio: "Acompanha quem quer afiar a técnica, do treino recreativo à competição.",
  },
] as const;

export const galleryAlts = [
  "Alunos em treino de kickboxing",
  "Troca de técnicas no tatame",
  "Condicionamento em grupo",
  "Treino de chute com parceiro",
  "Equipe reunida depois da aula",
  "Detalhe de treino com luvas",
] as const;

export const testimonials = [
  {
    quote: "Entrei sem saber nada. Em poucas semanas o fôlego mudou e eu parei de ter vergonha de treinar.",
    name: "Marina A.",
    detail: "Plano Prata · turma adulta",
  },
  {
    quote: "Os horários de teens encaixam na escola. Meu filho saiu mais disciplinado e animado para voltar.",
    name: "Paulo R.",
    detail: "Responsável · turma teens",
  },
  {
    quote: "Queria emagrecer sem aula chata de esteira. Aqui o treino passa rápido e o resultado aparece.",
    name: "Lívia S.",
    detail: "Plano Ouro · turma adulta",
  },
] as const;

export const plans = [
  {
    name: "Bronze",
    price: "R$ 130",
    accent: "#C4843C",
    featured: false,
    features: ["2 treinos por semana", "Professor e horário fixos", "Aula experimental incluída"],
  },
  {
    name: "Prata",
    price: "R$ 150",
    accent: "#D5D5D5",
    featured: true,
    features: ["3 treinos por semana", "Professor e horário fixos", "Melhor custo para manter ritmo"],
  },
  {
    name: "Ouro",
    price: "R$ 190",
    accent: "#E0B44A",
    featured: false,
    features: ["5 treinos por semana", "Até 2 professores", "Mais liberdade na grade"],
  },
  {
    name: "Champion",
    price: "R$ 210",
    accent: "#F4F4F4",
    featured: false,
    features: ["Treinos livres na grade", "Até 3 professores", "Máxima flexibilidade"],
  },
] as const;

export const goals = [
  { value: "condicionamento", label: "Condicionamento" },
  { value: "emagrecimento", label: "Emagrecimento" },
  { value: "defesa", label: "Defesa pessoal" },
  { value: "competicao", label: "Competição" },
] as const;

export const faqs = [
  {
    question: "Preciso já saber lutar?",
    answer:
      "Não. A primeira aula começa pela base: posição, deslocamento e golpes simples. Quem já treina entra no ritmo da turma.",
  },
  {
    question: "Como funciona a aula experimental?",
    answer:
      "Você escolhe um horário da grade, chega alguns minutos antes e treina com a turma. Sem compromisso de matrícula no mesmo dia.",
  },
  {
    question: "A partir de qual idade?",
    answer:
      "A turma teens acontece terça e quinta, às 19h. As demais aulas são para adultos. Se tiver dúvida sobre a idade, chame no WhatsApp antes de vir.",
  },
  {
    question: "O que levar no primeiro dia?",
    answer:
      "Roupa confortável para suar, garrafa de água e toalha. Luvas e caneleiras podem ser emprestadas na aula experimental.",
  },
  {
    question: "Posso trocar de plano ou de horário?",
    answer:
      "Sim. A troca de plano vale a partir do ciclo seguinte, e a mudança de horário depende de vaga na turma escolhida.",
  },
] as const;

export const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Horários", href: "#schedule" },
  { label: "Instrutores", href: "#instructors" },
  { label: "Galeria", href: "#gallery" },
  { label: "Planos", href: "#pricing" },
  { label: "Contato", href: "#contact" },
] as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;
}

export function planMessage(name: string, price: string) {
  return `Olá! Quero o plano ${name} (${price}/mês). Pode me explicar a inscrição, os horários e as formas de pagamento?`;
}
