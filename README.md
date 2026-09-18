# Engenharia de Software

**Universidade Tuiuti do Paraná — FACET (Tecnologia em Análise e Desenvolvimento de Sistemas)**
**Professor(a):** Patricia Rucker de Bassi (Doutora em Aprendizagem de Máquina e Descoberta do Conhecimento - PUCPR)
**Carga horária:** 40h | **Período:** 4º | **Regime:** Semestral
**Aulas:** 2ª feira 19hrs — Laboratório 01, Bloco A
**Material:** Equipe no Microsoft Teams

## Estrutura
- `material/slides/` — slides das aulas
- `material/provas/` — provas e gabaritos
- `material/exercicios/` — listas de exercícios
- `projetos/` — trabalhos práticos
- `notas/` — anotações e resumos

## Notas de estudo
- [Aula 2.1 — Ciclo de vida e modelos](notas/estudo-aula02-1-ciclo-de-vida.md)
- [Aula 2.2 — Metodologias ágeis](notas/estudo-aula02-2-metodologias-ageis.md)
- [Aula 3.0 — Requisitos de software (RF/RNF, FURPS+)](notas/estudo-aula03-0-requisitos.md)
- [Aula 3.1 — Elicitação: características de um bom requisito](notas/estudo-aula03-1-elicitacao.md)
- [**ED1 Peça Certa — entrega**](notas/ED1-PecaCerta-entrega.md) · [`.docx`](notas/ED1-PecaCerta-entrega.docx) · prazo **21/09**
- [Revisão prova 1 — gabarito](notas/estudo-prova1-ajuda-gabarito.md) · PDF: `notas/Ajuda-res.prova-1bim.pdf`
- [Padlet — comentários (etapa 1 do ED)](notas/padlet-comentarios.md)
- [Tarefas pendentes](notas/tarefas.txt)

## Conteúdo programático

| Aulas | Data | Tema |
|-------|------|------|
| 01-02 | 27/07 | Apresentação da disciplina, contextualização e Introdução à Engenharia de Software |
| 03-04 | 03/08 | Introdução à Engenharia de Software |
| 05-06 | 10/08 | Ciclo de vida de software |
| 07-08 | 17/08 | Ciclo de vida de produto de software; Modelos de ciclo de vida; Metodologias Ágeis |
| 09-10 | 24/08 | Requisitos de software (escopo, categorias, tipos, características) |
| 11-12 | 31/08 | Engenharia de requisitos; Crise de software |
| 13-14 | 07/09 | Feriado |
| 15-16 | 14/09 | Elicitação de requisitos; Representação e gerenciamento de requisitos |
| 17-18 | 21/09 | **Avaliação 1º Bimestre** + Vistas da prova |
| 19-20 | 28/09 | Construção de software; Etapas do SWEBOK |
| 21-22 | 05/10 | Pesquisa e análise sobre o SWEBOK |
| 23-24 | 12/10 | Feriado |
| 25-26 | 19/10 | Gerenciamento de configuração de software |
| 27-28 | 26/10 | Teste de software |
| 29-30 | 02/11 | Feriado — Pesquisa sobre teste de software e ferramentas |
| 31-32 | 09/11 | Manutenção de software |
| 33-34 | 16/11 | Qualidade de software |
| 35-36 | 23/11 | Métricas de software + **Avaliação 2º Bimestre** |
| 37-38 | 30/11 | **2ª chamada** + Estudo Dirigido (análise de estudo de caso) |
| 39-40 | 07/12 | **Exame Final** |

## Ementa
- Conceitos fundamentais da Engenharia de Software
- Processo de software e metodologias, técnicas e ferramentas
- Ciclos de vida de software
- Requisitos de software / Engenharia de requisitos
- Gerenciamento de configurações
- Construção de software
- Teste de software
- Manutenção de software
- Qualidade de software
- Métricas de software

## Avaliação
- **Estudo Dirigido:** peso 3,0 (temas atuais de eng. de software, trabalho escrito/apresentação)
- **Avaliação bimestral:** peso 7,0
- **2ª chamada:** 30/11 (peso 7,0)
- **Exame Final:** 07/12 (peso 10,0)

### Estudo Dirigido — 1º bimestre (entregas)
1. **Padlet** (metodologias ágeis) — atividade realizada em 24/08 — [link](https://padlet.com/patriciadebassi/metodologias-geis-aupudoqbo8edh7vg)
2. **Tabela de requisitos Peça Certa** — código, descrição + regra de negócio, ator, tipo F/RNF (FURPS+), sem ambiguidade — postar no Teams até **21/09/2026** (grupo; um integrante posta)

## Referências
- CMMI® for Development Version 1.3 — SEI/CMU
- MPS.BR — Guia Geral MPS de Software (Softex)
- PMBok — Project Management Institute
- Revista DevMedia de Engenharia de Software

## Fluxo de desenvolvimento (conforme disciplina)
1. Requisitos do cliente/usuário/stakeholders
2. Viabilidade técnica → Proposta
3. Projeto lógico → Requisitos/regras de negócio → Diagramação (UML)
4. Arquitetura → Projeto físico → Programar → Testar
5. Implantar → Treinamento → Manuais → Procedimentos de segurança
6. Produção → Manutenção → Descontinuidade

## Conteúdo das aulas

### Aula 1 — Introdução à Engenharia de Software
- Componentes do software: instruções, estruturas de dados e documentos
- Características do software (não se desgasta, mas se deteriora)
- Curva de desgaste: hardware vs software
- Aplicações: básico, tempo real, científico/engenharia, comercial/empresarial, embutido, computador pessoal, web e IA
- Evolução do software (1950 → atual: IoT, web, mobile)
- Crise do software: problemas (estimativas imprecisas, insatisfação do cliente, qualidade inadequada, manutenção difícil)
- Mitos do software: administrativo, cliente e profissional
- Engenharia de Software como resposta à crise (IEEE)
- **Atividade:** identificar exemplos de mercado para cada tipo de aplicação

### Aula 2 — Conceitos e origem da Engenharia de Software
- Definições de ES: Fritz Bauer, Ian Sommerville, IEEE e Roger Pressman (tecnologia em 3 camadas: processos, métodos e ferramentas)
- Engenharia de Software como área: tecnologias e práticas, fundamentos científicos e mecanismos
- Bug do Milênio (DD/MM/AA → DD/MM/AAAA, COBOL)
- Origem: NATO Software Engineering Conference (1968) e a crise do software
- Problemas comuns em projetos: estouro de orçamento, atraso, cancelamento e insatisfação do usuário (Standish Group)
- Restrições de projeto: custo × tempo × tarefas (escopo)
- SWEBOK: iniciativa da IEEE — V1 (2001), V2 (2004, 10 áreas), V3 (2013, 15 áreas), V4 (2024, 18 áreas)
- Melhorias da V4: Agile e DevOps integrados, tecnologias emergentes (IA, ML, IoT) e reestruturação em 18 áreas de conhecimento
- **Atividade:** resumir as 18 áreas de conhecimento do SWEBOK (1 slide por área, grupos de 3, postar no Teams)

### Aula 2.1 — Ciclo de vida e modelos de ciclo de vida de software
- Ciclo de vida de desenvolvimento: todos os processos, tarefas e atividades da concepção à descontinuidade/substituição
- Funciona como esquema que mapeia fases, atividades, entregas e responsabilidades
- Benefícios: visualizar a necessidade real, planejar melhor, correções antecipadas, manutenção facilitada, erros localizados com mais facilidade (menor custo), qualidade garantida
- Etapas básicas: **Definição** (situação atual → problema → solução; modelagem de processos e análise do sistema; escolha do modelo), **Desenvolvimento** (projeto, prototipagem, codificação, testes e integração; obedece regras de negócio), **Operação** (treinamento, correção de erros, continuidade)
- Modelos = forma como as etapas são organizadas / sequência das atividades de desenvolvimento e manutenção
- **Cascata ou Clássico** (1966, formalizado ~1970): fases sequenciais, uma só inicia quando a anterior termina; fácil gestão, mas dificulta mudanças em andamento
- **Modelo V** (Ministério de Defesa da Alemanha, 1992): cascata em "V" com ênfase em verificação e validação — cada fase da esquerda gera plano de teste executado na direita (unidade valida projeto do programa, sistema valida projeto de sistema, aceitação valida requisitos); cliente recebe a 1ª versão no final, mas com menos risco
- **Incremental ou Iterativo**: melhoria do cascata; desenvolvimento dividido em incrementos até a versão final; ideal quando requisitos não estão claros (erro descarta só o último incremento); funcionalidade disponível mais cedo
- **Evolutivo**: facilidade de mudanças e novas funcionalidades em tempo real; indicado para sistemas curtos/médios; alta interação com usuário; difícil limitar escopo e tempo
- **Espiral (Barry Boehm)**: cada volta da espiral é uma fase; sem fases fixas (definidas conforme necessidade); avaliação de riscos; melhor para produtos internos da empresa
- **Prototipação** (década de 70): não exige requisitos profundos no início; protótipo → feedback do cliente → refinamento; cliente participa do início ao fim; risco: cliente achar que o protótipo é o produto final
- Modelo × Método: **modelo** descreve estrutura/sequência das fases (abstrato); **método** é prescritivo e operacional (técnicas, ferramentas, papéis — ex.: Scrum, XP, Cleanroom)
- Métodos tradicionais: **RUP** (Concepção, Elaboração, Construção, Transição — iterativo e incremental, mas prescritivo), **Cleanroom** (prevenção de defeitos via desenvolvimento estatístico formal e inspeções)
- Métodos ágeis: **Scrum** (PO, Scrum Master, time; Sprint Planning/Daily/Review/Retrospective; Product/Sprint Backlog, Increment; Sprints de 2–4 semanas), **XP** (TDD, pair programming, integração contínua, refactoring, propriedade coletiva), **Kanban** (quadro To Do/Doing/Done, limite de WIP, fluxo contínuo sem iterações fixas)
- Métodos modernos/híbridos: **DevOps** (cultura dev+ops com CI/CD e automação), **Lean Software Development** (Toyota: eliminar desperdício, amplificar aprendizado, decidir tarde, entregar rápido), **FDD** (modelagem inicial + desenvolvimento por feature)
- **Atividade:** pesquisar 1 exemplo de software real do modelo de ciclo de vida designado à equipe (o que faz, modelo aplicado, por quê) — grupo, arquivo colaborativo no Teams até o fim da aula

### Aula 2.2 — Metodologias Ágeis
- Mundo VUCA (volátil, incerto, complexo, ambíguo): agilidade + velocidade como resposta; métodos tradicionais não dão mais conta
- Surgiram na indústria de software e se espalharam pelos negócios; um dos pilares da transformação digital; permitem ajustes conforme projeto/produto evoluem
- Mudanças rápidas de clientes, tecnologia e concorrentes exigem adaptação flexível; criam aprendizado durante o processo
- Método ágil: etapas curtas com produto pronto (vs. etapas bem definidas), ciclos iterativos e incrementais, melhoria contínua; não são contra documentação — focam no que agrega valor; exigem equipes autônomas
- **Manifesto Ágil (2001, 17 pessoas)**: indivíduos e interações > processos e ferramentas | software em funcionamento > documentação abrangente | colaboração com o cliente > negociação de contratos | responder a mudanças > seguir um plano (há valor nos itens à direita também!)
- Tipos: Scrum (framework p/ projetos complexos de objetivo definido), Kanban (gestão por fluxo de valor), XP (anterior ao Manifesto; equipes pequenas, escopo em constante mudança), FDD (concepção + construção por funcionalidade), Lean Startup (validar ideias: construir, medir, aprender)
- **Atividade:** comentários no Padlet da professora — blocos azuis exigem mínimo 2 comentários por aluno (comentar + responder um colega), inscrição no Padlet obrigatória para identificação, prazo até o fim da aula; **vale como item do Estudo Dirigido do 1º bimestre**

### Aula 3.0 — Requisitos de software
- Definições (Houaiss, Sommerville, IEEE): requisito como condição/capacidade documentada
- Problema de vocabulário comum na indústria (Wiegers)
- **RF** = o quê (funções, CRUD, mudanças de estado, regras de negócio)
- **RNF** = como / qualidades: de produto, organizacionais e externos
- Categorização **FURPS+** (IBM): Functionality, Usability, Reliability, Performance, Supportability + design, implementação, interface, físicos
- Sintaxe: `{[sujeito + ação + objeto] + qualificação}`
- **Atividades:** identificar RF (tabela); urna eletrônica — RNF com ≥1 item de cada FURPS+

### Aula 3.1 — Elicitação de requisitos (qualidade da escrita)
- Cinco critérios de bom requisito: **não ambíguo**, **verificável**, **determinístico**, **rastreável**, **correto**
- Fontes de ambiguidade: pronomes, acrônimos, indeterminação (“quando possível”), conhecimento prévio assumido
- **Atividade 1:** julgar 12 requisitos de marcação de consulta pelo celular
- **Atividade 2:** reescrever requisitos do Zoológico e da Urna Eletrônica e postar no Teams
- Critério de correção do ED Peça Certa (entrega 21/09)

### [... - adicionar aulas posteriores aqui]

## Arquivos no repositório
| Arquivo | Descrição |
|---------|-----------|
| `material/2026724_11561_PA - Engenharia de Software - CSTA 4 P 2026-2.pdf` | Programa de aulas completo |
| `material/estudos dirigidos - 1o bim - engenharia software 2026-2.pdf` | Enunciado do ED 1º bim (Padlet + tabela Peça Certa até 21/09) |
| `material/slides/Engenharia de Software - aula 0 CSTA.pdf` | Slides da aula 0 (apresentação da disciplina) |
| `material/slides/Engenharia de Software - aula 1 postagem.pdf` | Slides da aula 1 (introdução, crise do software, mitos) |
| `material/slides/Engenharia de Software - aula 2.0.pdf` | Slides da aula 2 (conceitos de ES, origem, SWEBOK V4) |
| `material/slides/Engenharia de Software - aula 2.1 ciclo de vida de software.pdf` | Slides da aula 2.1 (ciclo de vida e modelos/métodos) |
| `material/slides/Engenharia de Software - aula 2.2 metodologia agil.pdf` | Slides da aula 2.2 (VUCA, Manifesto Ágil) |
| `material/slides/Engenharia de Software - aula 3.0 - requisitos 2026.pdf` | Slides da aula 3.0 (RF/RNF, FURPS+) |
| `material/slides/Engenharia de Software - aula 3.1 - elicitação de requisitos (1).pdf` | Slides da aula 3.1 (qualidade do requisito) |
| `notas/atividade pratica - requisitos Peca Certa.pdf` | Estudo de caso PeçaCerta Auto Peças (ED) |
| `notas/rascunho-ed1-peca-certa-requisitos.md` | Rascunho da tabela de requisitos do ED |
| `notas/tarefas.txt` | Tarefas e atividades pendentes consolidadas |
