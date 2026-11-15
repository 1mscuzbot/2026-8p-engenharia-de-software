# Estudo dirigido — Desenvolvimento Colaborativo de Software

**Disciplina:** Engenharia de Software  
**Tema:** Desenvolvimento colaborativo, 3 Cs, ferramentas (Git/GitHub), metodologias ágeis e DevOps/CI/CD  
**Aluno:** Lucas Muller Scuzziato  

---

## 1. Conceito de desenvolvimento colaborativo e os 3 Cs

Desenvolvimento colaborativo de software é o processo em que duas ou mais pessoas — ou times — trabalham de forma conjunta e interdependente para construir, evoluir e manter um produto de software. Diferentemente do trabalho meramente paralelo (em que cada um entrega uma parte isolada e “cola” no fim), a colaboração pressupõe **interação contínua**: troca de informação, alinhamento de decisões e produção conjunta sobre artefatos compartilhados (código, requisitos, testes, documentação).

Na literatura de **CSCW** (*Computer-Supported Cooperative Work*) e de engenharia de groupware, essa colaboração é frequentemente analisada pelo **modelo 3C**, formulado a partir de Ellis, Gibbs e Rein (1991) e sistematizado por Fuks, Raposo, Gerosa e colaboradores. Nesse modelo, a **colaboração** é o resultado do *interplay* (interação permanente) entre três dimensões:

### Communication (Comunicação)

É a troca de mensagens e informações entre pessoas — negociar significados, esclarecer dúvidas, argumentar decisões e construir entendimento comum. Em software, isso aparece em reuniões, *chats*, comentários em *pull requests*, discussões em *issues*, e-mails e documentação viva. Sem comunicação adequada, o código pode “compilar”, mas o time deixa de compartilhar a intenção do que está sendo construído.

### Coordination (Coordenação)

É a gestão de pessoas, atividades e recursos: quem faz o quê, em que ordem, com quais dependências e prazos. A coordenação organiza o esforço para que a comunicação não se perca e a cooperação aconteça no momento certo. Exemplos típicos: *backlog* priorizado, *sprints*, atribuição de tarefas, políticas de *branch*, papéis (Product Owner, Scrum Master) e regras de *merge*.

### Cooperation / Collaboration (Cooperação)

No modelo 3C de Fuks et al., **cooperação** designa a *produção conjunta em um espaço compartilhado* — operar juntos sobre o mesmo artefato (repositório, *wiki*, quadro Kanban, ambiente de *pair programming*). Já em Ellis et al. (1991), o termo usado para essa dimensão era **collaboration**. Por isso a literatura costuma apresentar “Cooperation / Collaboration”: o nome varia, mas a ideia é a mesma — trabalho conjunto sobre um *workspace* comum. No modelo brasileiro amplamente citado, **colaboração** é o fenômeno maior (a combinação dos 3 Cs), e **cooperação** é a dimensão da produção conjunta.

Em resumo: comunicamos para alinhar, coordenamos para organizar, e cooperamos para produzir juntos. Ferramentas e processos de Engenharia de Software sustentam essas três dimensões de forma integrada.

---

## 2. Por que o desenvolvimento de software é colaborativo

O software moderno raramente cabe na cabeça — ou no tempo — de uma única pessoa. Há pelo menos quatro razões estruturais para isso.

**Complexidade.** Sistemas reais envolvem requisitos ambíguos, muitas camadas técnicas, integração com serviços externos e evolução contínua. A complexidade obriga a especialização e a revisão cruzada: ninguém domina, sozinho, domínio de negócio, arquitetura, segurança, UX e operação.

**Divisão de trabalho.** Projetos são decompostos em módulos, *features* e tarefas. Essa divisão só funciona se houver coordenação (dependências, interfaces, definição de “pronto”) e cooperação sobre o código integrado — caso contrário, o resultado é um conjunto de peças que não se encaixam.

**Conhecimento distribuído.** Conhecimento de negócio está com o cliente ou Product Owner; conhecimento técnico está espalhado entre desenvolvedores, QA e operações. O produto emerge da combinação desses saberes, não da soma linear de contribuições isoladas.

**Qualidade e risco.** Revisões de código, testes em equipe e *feedback* frequente reduzem defeitos e decisões ruins. Colaborar não é só “ser simpático”: é um mecanismo de engenharia para detectar inconsistências cedo, compartilhar responsabilidade e manter o sistema evolutivo.

Além disso, o contexto atual (times distribuídos, *open source*, produtos digitais com releases contínuos) torna a colaboração mediada por computador a regra, não a exceção — exatamente o objeto de estudo do CSCW aplicado à Engenharia de Software.

---

## 3. Git, GitHub e o desenvolvimento colaborativo

Sistemas de controle de versão distribuídos, como o **Git**, e plataformas como o **GitHub**, materializam os 3 Cs no fluxo diário do time.

**Histórico e espaço compartilhado (cooperação).** O repositório é o *workspace* comum: cada *commit* registra *quem* mudou *o quê* e *por quê*. O histórico permite auditar decisões, reverter regressões e entender a evolução do produto — base da cooperação assíncrona.

**Branches (coordenação + cooperação).** *Branches* permitem trabalhar em paralelo sem destruir a linha principal (`main`/`master`). Elas coordenam o isolamento de mudanças (feature, correção, experimento) e, ao mesmo tempo, preparam a cooperação no momento do *merge*.

**Pull Requests (PRs) e code review (comunicação + cooperação).** O PR é o ponto em que a mudança proposta é discutida: comentários, sugestões e aprovação transformam comunicação em melhoria do artefato compartilhado. O *review* institucionaliza a revisão por pares — prática colaborativa central de qualidade.

**Issues e projetos (comunicação + coordenação).** *Issues*, *milestones* e quadros (Projects/Kanban) registram problemas, ideias e tarefas, atribuem responsáveis e acompanham status. São instrumentos de coordenação visível e de memória do time.

Em termos dos 3 Cs: o GitHub não “substitui” a colaboração humana; ele **suporta** comunicação (discussões), coordenação (tarefas, *branches*, políticas de proteção) e cooperação (código e documentação no mesmo repositório). Quem usa só o Git como *backup* pessoal, sem *review*, *issues* ou integração, está subutilizando o potencial colaborativo da ferramenta.

---

## 4. Metodologias ágeis e desenvolvimento colaborativo

O Manifesto Ágil (2001) coloca a colaboração no centro: valoriza **indivíduos e interações** mais que processos e ferramentas, e **colaboração com o cliente** mais que negociação contratual rígida. As metodologias ágeis não são apenas “ciclos curtos”; são conjuntos de práticas que forçam os 3 Cs de forma recorrente.

### Scrum

O Scrum organiza o trabalho em *sprints* com papéis e eventos explícitos. O *Daily Scrum* favorece comunicação rápida sobre progresso e impedimentos; o *Sprint Planning* e o *Backlog* exercem coordenação; a *Sprint Review* e a *Retrospectiva* fecham o ciclo com inspeção conjunta do produto e do processo. O Product Owner conecta o time ao valor de negócio — colaboração contínua com o “cliente” do sistema.

### Extreme Programming (XP)

O XP enfatiza práticas de engenharia colaborativa: *pair programming* (dois desenvolvedores no mesmo código — cooperação intensa), propriedade coletiva do código, integração frequente e *test-driven development*. A ideia é reduzir silos individuais e tornar o conhecimento do sistema patrimônio do time, não de uma única pessoa.

### Outras práticas ágeis

Kanban torna o fluxo e os gargalos visíveis (coordenação); *user stories* e critérios de aceite alinham linguagem de negócio e técnica (comunicação); *definition of done* padroniza o que significa “terminado” (coordenação + qualidade). Em todos os casos, o ágil trata colaboração como **disciplina operacional**, não como atributo cultural vago.

---

## 5. DevOps, CI/CD e colaboração entre times

Historicamente, desenvolvimento e operações trabalhavam em silos: o time de *dev* “jogava o build por cima do muro” e o time de *ops* sofria para colocar em produção. **DevOps** responde a esse problema cultural e técnico: compartilhar responsabilidade pelo ciclo completo — do *commit* à operação em produção — com automação e *feedback* rápido.

**Integração Contínua (CI).** Cada mudança integrada ao repositório dispara *build* e testes automatizados. Isso força cooperação diária sobre a linha principal: conflitos e quebras aparecem cedo, quando ainda são baratos de corrigir. A CI é, em essência, colaboração contínua mediada por *pipeline*.

**Entrega Contínua / Deployment Contínuo (CD).** Estende a CI até deixar o software sempre em estado liberável (ou, no *deployment* contínuo, efetivamente em produção). O *deployment pipeline* (Humble e Farley) dá visibilidade compartilhada do estado de cada mudança — desenvolvedores, QA e operações passam a operar sobre a mesma evidência.

**Feedback rápido e integração entre times.** Pipelines, monitoração e alertas fecham o ciclo: defeitos em produção voltam como informação acionável para o time. Isso reforça comunicação entre papéis, coordenação de *releases* e cooperação sobre infraestrutura como código (*Infrastructure as Code*).

Assim, DevOps/CI/CD não são apenas “ferramentas de automação”: são a extensão da colaboração ágil para além do time de desenvolvimento, incluindo quem mantém o sistema vivo para o usuário final.

---

## Síntese para estudo

| Dimensão (3C) | Exemplos no dia a dia de SE |
|---------------|-----------------------------|
| Comunicação   | *Issues*, comentários em PR, dailies, revisão com cliente |
| Coordenação   | *Backlog*, *sprints*, *branches*, papéis, Definition of Done |
| Cooperação    | Código no repositório, *pair programming*, *wiki*, pipeline compartilhado |

Ferramentas (Git/GitHub), métodos (Scrum/XP) e práticas de entrega (DevOps/CI/CD) são camadas complementares do mesmo fenômeno: **fazer software com e através de outras pessoas**, de forma sustentável e com qualidade.

---

## Mini-bibliografia

1. ELLIS, C. A.; GIBBS, S. J.; REIN, G. L. Groupware: some issues and experiences. *Communications of the ACM*, v. 34, n. 1, p. 38–58, 1991. (Base clássica do modelo que originou os 3 Cs.)

2. FUKS, H.; RAPOSO, A.; GEROSA, M. A. et al. The 3C Collaboration Model. In: *Encyclopedia of E-Collaboration*. IGI Global, 2008. PDF disponível: <https://www.ime.usp.br/~gerosa/papers/ecollaboration.pdf>. Capítulo: <https://www.igi-global.com/chapter/collaboration-model/12492>.

3. GEROSA, M. A.; FUKS, H.; RAPOSO, A. B.; LUCENA, C. J. P. Component-Based Groupware Development Based on the 3C Collaboration Model. *Anais do SBES*. SBC. Disponível em: <https://sol.sbc.org.br/index.php/sbes/article/view/21209>.

4. BECK, K. et al. *Manifesto for Agile Software Development*. 2001. Disponível em: <https://agilemanifesto.org/>.

5. CHACON, S.; STRAUB, B. *Pro Git*. 2. ed. Apress. Livro oficial do Git: <https://git-scm.com/book/en/v2>.

6. HUMBLE, J.; FARLEY, D. *Continuous Delivery*. Addison-Wesley, 2010. Ver também: FOWLER, M. Continuous Delivery. <https://martinfowler.com/bliki/ContinuousDelivery.html> e <https://continuousdelivery.com/>.
