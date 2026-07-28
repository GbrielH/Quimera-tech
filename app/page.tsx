"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";

const whatsappUrl =
  "https://wa.me/5511949347449?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Quimera%20Tech%20e%20quero%20conversar%20sobre%20um%20projeto.";

const services = [
  {
    number: "01",
    title: "Sites profissionais",
    text: "Sites institucionais modernos, rápidos e pensados para transformar visitas em oportunidades.",
    tags: ["Responsivo", "SEO", "Alta performance"],
  },
  {
    number: "02",
    title: "Landing pages",
    text: "Páginas focadas em campanhas, lançamentos e captação de clientes com uma comunicação objetiva.",
    tags: ["Conversão", "Campanhas", "Leads"],
  },
  {
    number: "03",
    title: "Lojas virtuais",
    text: "Experiências de compra organizadas, confiáveis e fáceis de usar em qualquer dispositivo.",
    tags: ["Catálogo", "Vendas", "Integrações"],
  },
  {
    number: "04",
    title: "Sistemas sob medida",
    text: "Ferramentas digitais para organizar processos, centralizar informações e ganhar produtividade.",
    tags: ["Dashboards", "Automação", "Gestão"],
  },
  {
    number: "05",
    title: "Aplicações web",
    text: "Produtos digitais completos, do planejamento ao lançamento, com estrutura pronta para crescer.",
    tags: ["Web apps", "MVP", "Escalabilidade"],
  },
  {
    number: "06",
    title: "Suporte e evolução",
    text: "Manutenção, melhorias e acompanhamento para seu projeto continuar seguro e atualizado.",
    tags: ["Suporte", "Melhorias", "Segurança"],
  },
];

const projects = [
  {
    className: "lica",
    category: "Construção civil",
    title: "Lica Construções",
    description:
      "Presença digital profissional com foco em confiança, serviços e contato rápido pelo WhatsApp.",
    chips: ["Site institucional", "Responsivo"],
  },
  {
    className: "agro",
    category: "Moda personalizada",
    title: "Agro & Pesca Brasil",
    href: "https://agroepescabrasil.com/",
    description:
      "Experiência de marca para apresentar produtos personalizados e aproximar o público da empresa.",
    chips: ["Catálogo", "Identidade digital"],
  },
  {
    className: "quimera",
    category: "Tecnologia",
    title: "Seu projeto pode ser o próximo",
    description:
      "Uma solução construída para o seu objetivo, com design próprio e comunicação alinhada à sua marca.",
    chips: ["Projeto exclusivo", "Sob medida"],
  },
];

const faqs = [
  {
    question: "Quanto custa desenvolver um site?",
    answer:
      "O valor depende do tamanho, das funcionalidades e do prazo. Após uma conversa rápida, você recebe uma proposta clara e adequada ao seu projeto.",
  },
  {
    question: "Em quanto tempo o site fica pronto?",
    answer:
      "Projetos mais objetivos podem ser entregues em poucos dias. Sites e sistemas maiores recebem um cronograma por etapas antes do início.",
  },
  {
    question: "O site funciona bem no celular?",
    answer:
      "Sim. Todos os projetos são desenvolvidos para celular, tablet e computador, com atenção especial à velocidade e facilidade de navegação.",
  },
  {
    question: "Vocês também cuidam da hospedagem e do domínio?",
    answer:
      "Sim. A Quimera Tech pode orientar ou cuidar da configuração de domínio, hospedagem, publicação e atualizações do projeto.",
  },
  {
    question: "Posso solicitar alterações depois da entrega?",
    answer:
      "Sim. Você pode contratar melhorias pontuais ou um acompanhamento contínuo para manter o projeto atualizado.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="topbar">
        <span className="status-dot" aria-hidden="true" />
        Agenda aberta para novos projetos
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          Solicitar orçamento <span aria-hidden="true">↗</span>
        </a>
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Quimera Tech - início">
          <span className="brand-mark">
            <img src="./quimera-logo.png" alt="" />
          </span>
          <span>
            QUIMERA
            <small>TECH</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Principal">
          <a href="#servicos" onClick={closeMenu}>
            Serviços
          </a>
          <a href="#projetos" onClick={closeMenu}>
            Projetos
          </a>
          <a href="#processo" onClick={closeMenu}>
            Como funciona
          </a>
          <a href="#duvidas" onClick={closeMenu}>
            Dúvidas
          </a>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Falar sobre um projeto
          </a>
        </nav>

        <button
          className={menuOpen ? "menu-button is-open" : "menu-button"}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow">
            <span>Desenvolvimento digital sob medida</span>
          </div>
          <h1>
            Tecnologia que coloca sua empresa no{" "}
            <span className="text-accent">próximo nível.</span>
          </h1>
          <p className="hero-lead">
            Criamos sites, sistemas e experiências digitais modernas para
            transformar boas ideias em negócios mais fortes.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Começar meu projeto
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="#projetos">
              Ver projetos
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-proof" aria-label="Diferenciais">
            <div>
              <strong>100%</strong>
              <span>Responsivo</span>
            </div>
            <div>
              <strong>SEO</strong>
              <span>Estrutura otimizada</span>
            </div>
            <div>
              <strong>Direto</strong>
              <span>Com o desenvolvedor</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="red-glow" />
          <div className="code-lines" aria-hidden="true">
            <span>01</span>
            <span>DESIGN</span>
            <span>CODE</span>
            <span>RESULT</span>
          </div>
          <div className="browser-card">
            <div className="browser-top">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-address">quimeratech.dev</div>
              <span className="browser-lock">◆</span>
            </div>
            <div className="browser-body">
              <div className="mock-sidebar">
                <img src="./quimera-logo.png" alt="" />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="mock-content">
                <span className="mock-label">VISÃO GERAL</span>
                <h3>Soluções que geram movimento.</h3>
                <div className="metric-row">
                  <div>
                    <span>Performance</span>
                    <strong>98</strong>
                    <small>+12%</small>
                  </div>
                  <div>
                    <span>Conversão</span>
                    <strong>4.8x</strong>
                    <small>em foco</small>
                  </div>
                </div>
                <div className="chart-card">
                  <span>EVOLUÇÃO DIGITAL</span>
                  <div className="chart-bars">
                    {[34, 48, 42, 68, 58, 82, 94].map((height, index) => (
                      <i key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="phone-card" aria-hidden="true">
            <div className="phone-speaker" />
            <img src="./quimera-logo.png" alt="" />
            <span>QUIMERA TECH</span>
            <strong>Seu negócio, mais digital.</strong>
            <i />
            <i />
          </div>
          <div className="floating-tag">
            <span className="tag-icon">&lt;/&gt;</span>
            <div>
              <strong>Projeto exclusivo</strong>
              <small>Do código ao resultado</small>
            </div>
          </div>
        </div>
      </section>

      <div className="client-strip" aria-label="Tipos de negócio atendidos">
        <span>NEGÓCIOS LOCAIS</span>
        <i>×</i>
        <span>PRESTADORES DE SERVIÇO</span>
        <i>×</i>
        <span>INDÚSTRIAS</span>
        <i>×</i>
        <span>LOJAS</span>
        <i>×</i>
        <span>NOVAS IDEIAS</span>
      </div>

      <section className="section section-shell" id="servicos">
        <div className="section-heading" data-reveal>
          <div>
            <span className="section-kicker">O QUE FAZEMOS</span>
            <h2>Soluções digitais para objetivos reais.</h2>
          </div>
          <p>
            Estratégia, design e tecnologia trabalhando juntos para criar uma
            presença digital que transmite confiança e ajuda sua empresa a
            crescer.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number} data-reveal>
              <div className="service-number">{service.number}</div>
              <div className="service-symbol" aria-hidden="true">
                {service.number === "01"
                  ? "▰"
                  : service.number === "02"
                    ? "↗"
                    : service.number === "03"
                      ? "◇"
                      : service.number === "04"
                        ? "{ }"
                        : service.number === "05"
                          ? "◫"
                          : "∞"}
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="tag-list">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="results-section">
        <div className="section-shell results-grid">
          <div className="results-copy" data-reveal>
            <span className="section-kicker">POR QUE A QUIMERA</span>
            <h2>Bonito por fora. Estratégico por dentro.</h2>
            <p>
              Um bom projeto digital precisa impressionar, funcionar com
              fluidez e deixar claro por que o cliente deve escolher sua
              empresa.
            </p>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              Conversar sobre minha ideia <span>↗</span>
            </a>
          </div>

          <div className="benefits-list">
            {[
              [
                "01",
                "Design que valoriza sua marca",
                "Cada detalhe é pensado para transmitir profissionalismo e diferenciar sua empresa.",
              ],
              [
                "02",
                "Experiência rápida e responsiva",
                "Navegação fluida no celular, tablet e computador, sem informações saindo da tela.",
              ],
              [
                "03",
                "Estrutura pronta para crescer",
                "Código organizado, boas práticas e espaço para novas funções quando o negócio evoluir.",
              ],
              [
                "04",
                "Atendimento próximo",
                "Você acompanha as etapas e fala diretamente com quem está desenvolvendo seu projeto.",
              ],
            ].map(([number, title, text]) => (
              <article key={number} data-reveal>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-shell" id="projetos">
        <div className="section-heading projects-heading" data-reveal>
          <div>
            <span className="section-kicker">PROJETOS</span>
            <h2>Marcas que ganharam presença digital.</h2>
          </div>
          <p>
            Projetos desenvolvidos com identidade própria, clareza na
            comunicação e foco na experiência de cada público.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const content = (
              <>
              <div className={`project-preview ${project.className}`}>
                {project.className === "agro" ? (
                  <img
                    className="project-cover"
                    src="./agro-pesca-brasil.png"
                    alt="Página inicial do site Agro & Pesca Brasil"
                  />
                ) : (
                  <>
                    <div className="preview-nav">
                      <span />
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="preview-copy">
                      <small>{project.category}</small>
                      <strong>
                        {project.className === "lica"
                          ? "CONSTRUIR COM QUALIDADE."
                          : "SUA IDEIA. BEM CONSTRUÍDA."}
                      </strong>
                      <span />
                    </div>
                    <div className="preview-art">
                      <i />
                      <i />
                      <i />
                    </div>
                  </>
                )}
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-chips">
                  {project.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              </div>
              </>
            );

            return project.href ? (
              <a
                className="project-card project-card-link"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acessar o site ${project.title}`}
                key={project.title}
                data-reveal
              >
                {content}
              </a>
            ) : (
              <article className="project-card" key={project.title} data-reveal>
                {content}
              </article>
            );
          })}
        </div>
      </section>

      <section className="process-section section" id="processo">
        <div className="section-shell">
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-kicker">PROCESSO</span>
              <h2>Do primeiro contato ao site no ar.</h2>
            </div>
            <p>
              Um processo simples, transparente e organizado para você saber o
              que acontece em cada etapa.
            </p>
          </div>

          <div className="process-grid">
            {[
              [
                "01",
                "Conversa e diagnóstico",
                "Entendemos seu negócio, seu público e o resultado que você deseja alcançar.",
              ],
              [
                "02",
                "Estratégia e proposta",
                "Definimos a melhor estrutura, o prazo e o investimento de forma clara.",
              ],
              [
                "03",
                "Design e desenvolvimento",
                "Sua identidade ganha forma em um projeto moderno, funcional e responsivo.",
              ],
              [
                "04",
                "Revisão e lançamento",
                "Ajustamos os detalhes, publicamos o projeto e orientamos os próximos passos.",
              ],
            ].map(([number, title, text]) => (
              <article key={number} data-reveal>
                <span className="process-number">{number}</span>
                <div className="process-line" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section section-shell" id="duvidas">
        <div className="faq-intro" data-reveal>
          <span className="section-kicker">DÚVIDAS FREQUENTES</span>
          <h2>Antes de começar, vale saber.</h2>
          <p>
            Não encontrou sua dúvida? Chame no WhatsApp e receba uma resposta
            direta.
          </p>
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            Tirar uma dúvida <span>↗</span>
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} data-reveal>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {faq.question}
                <i aria-hidden="true">+</i>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-orb" />
        <div className="section-shell cta-content" data-reveal>
          <span className="section-kicker">VAMOS COMEÇAR?</span>
          <h2>
            Sua ideia merece sair do papel{" "}
            <span className="text-accent">do jeito certo.</span>
          </h2>
          <p>
            Conte o que você precisa e receba uma orientação inicial sem
            compromisso.
          </p>
          <div className="cta-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Falar no WhatsApp <span>↗</span>
            </a>
            <a className="button button-secondary" href="mailto:quimera.techy@gmail.com">
              Enviar um e-mail
            </a>
          </div>
          <div className="contact-row">
            <a href="tel:+5511949347449">11 94934-7449</a>
            <span>•</span>
            <a href="mailto:quimera.techy@gmail.com">quimera.techy@gmail.com</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="section-shell footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#inicio" aria-label="Quimera Tech - início">
              <span className="brand-mark">
                <img src="./quimera-logo.png" alt="" />
              </span>
              <span>
                QUIMERA
                <small>TECH</small>
              </span>
            </a>
            <p>Tecnologia que conecta. Soluções que transformam.</p>
          </div>
          <div>
            <strong>Navegação</strong>
            <a href="#servicos">Serviços</a>
            <a href="#projetos">Projetos</a>
            <a href="#processo">Como funciona</a>
            <a href="#duvidas">Dúvidas</a>
          </div>
          <div>
            <strong>Contato</strong>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="mailto:quimera.techy@gmail.com">E-mail</a>
          </div>
          <div>
            <strong>Serviços</strong>
            <a href="#servicos">Sites profissionais</a>
            <a href="#servicos">Lojas virtuais</a>
            <a href="#servicos">Sistemas sob medida</a>
          </div>
        </div>
        <div className="section-shell footer-bottom">
          <span>© {currentYear} Quimera Tech. Todos os direitos reservados.</span>
          <span>Feito com estratégia, design e código.</span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Quimera Tech no WhatsApp"
      >
        <span aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img">
            <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.2Z" />
            <path d="M8.1 7.4c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.5l.8 1.9c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.7 1.2 1.6 2.1 2.8 2.7.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l2 .9c.3.1.5.3.5.5 0 .2-.1 1.2-.6 1.8-.5.6-1.4.9-2.2.9-.6 0-1.4-.2-2.4-.6a10.7 10.7 0 0 1-5.5-5c-.5-1-.7-1.8-.7-2.4 0-.6.2-1.2.6-1.6.2-.2.4-.4.6-.4Z" />
          </svg>
        </span>
        <i>WhatsApp</i>
      </a>
    </main>
  );
}
