# Revisão 1º bimestre — Engenharia de Software

**Prova:** 21/09/2026 · peso **7,0**  
**Prof.ª** Patricia Rucker de Bassi  
**Fonte das questões:** `notas/Ajuda-res.prova-1bim.pdf` (enunciados nas fotos + gabarito no texto)

O PDF `alguma prova.pdf` (Git, configuração, teste, manutenção) é **2º bimestre** — não estudar para hoje.

---

## Roteiro de 30 minutos

1. Quatro atividades do processo + o que *não* é software  
2. **SWEBOK:** saber o que cada área *faz* (os nomes vêm na prova)  
3. Cascata × V × incremental × espiral × prototipação (e modelo ≠ método)  
4. Manifesto Ágil (4 valores) + FDD/DSDM são ágeis; Manifesto ≠ SWEBOK  
5. RF = o quê · RNF = como · FURPS+  
6. Resolver as 4 questões do PDF (abaixo) sem olhar o gabarito

---

## 1. Engenharia de software (aulas 1–2)

**ES** = aspectos da **produção** de software: especificar, desenvolver, validar e evoluir (não é só teoria da computação).

**Software** = instruções + estruturas de dados + **documentos**. Não se desgasta como hardware; **deteriora-se** com mudanças mal geridas.

**Quatro atividades fundamentais do processo** (decorar nesta ordem):

| Atividade | Pergunta |
|-----------|----------|
| Especificação | O que construir? |
| Desenvolvimento | Projetar e programar |
| Validação | É o produto certo para o cliente? |
| Evolução | Manter e adaptar depois da entrega |

**Não confundir** com iniciação / desenvolvimento / entrega / encerramento (isso é gerenciamento de projeto).

**Crise do software (NATO 1968):** estimativa ruim, atraso, orçamento estourado, cliente insatisfeito, qualidade baixa, manutenção difícil.

**SWEBOK** (IEEE): corpo de conhecimento da ES — da codificação até a gestão. V1 2001 (não é o Manifesto) · V2 2004 (10 áreas) · V3 2013 (15) · **V4 2024 (18)**. Na V4, Agile/DevOps entram em quase todas as áreas; IA/ML/IoT nos fundamentos; nasceram Arquitetura, Operações e Segurança.

A professora: **não precisa decorar a lista** — os nomes vêm na prova. Precisa **identificar o que cada uma faz**.

| # | Área (slide 2.0) | O que faz, em uma frase |
|---|------------------|-------------------------|
| 1 | Requisitos de software | Levantar, analisar, documentar, validar e gerenciar o que o sistema deve fazer |
| 2 | Arquitetura de software | Decisões estruturais de alto nível (componentes, camadas, estilo) que sustentam o sistema |
| 3 | Projeto/Design de software | Detalhar a solução (módulos, interfaces, UML) a partir da arquitetura |
| 4 | Construção de software | Codificar, integrar e depurar — transformar o projeto em código executável |
| 5 | Teste de software | Encontrar defeitos e avaliar se o software atende aos requisitos (não “provar ausência de bugs”) |
| 6 | Operações da ES | Colocar e manter o software em produção (deploy, monitoramento, DevOps) |
| 7 | Manutenção de software | Depois da entrega: corrigir, adaptar, melhorar e evoluir o sistema |
| 8 | Gerência de configuração | Controlar versões e mudanças dos artefatos (código, docs) — Git entra aqui |
| 9 | Gerenciamento de ES | Planejar, estimar, cronograma, equipe, risco e acompanhamento do projeto |
| 10 | Processo de ES | Definir e melhorar *como* o time desenvolve (ciclo de vida, medições, melhoria) |
| 11 | Modelos e métodos de ES | Cascata, ágil, RUP, formalismos — *como* organizar o trabalho |
| 12 | Qualidade de software | Garantir que o produto e o processo atendem critérios de qualidade |
| 13 | Segurança de software | Proteger o sistema (ameaças, autenticação, privacidade) ao longo do ciclo |
| 14 | Práticas profissionais em ES | Ética, comunicação, trabalho em equipe, responsabilidade profissional |
| 15 | Economia na ES | Custo, valor, trade-off (custo × prazo × escopo) |
| 16 | Fundamentos computacionais | Algoritmos, SO, redes, BD — base de computação que o engenheiro usa |
| 17 | Fundamentos matemáticos | Lógica, conjuntos, grafos, probabilidade — base para especificar e analisar |
| 18 | Fundamentos de engenharia | Medição, experimentação, restrições, raciocínio de engenharia |

Na prova, se aparecer “controlar versões dos artefatos” → **8**. Se aparecer “o quê o sistema deve fazer” → **1**. Se aparecer “depois da entrega, corrigir e evoluir” → **7**.

**Pressman:** ES em 3 camadas — processos, métodos e ferramentas.

---

## 2. Ciclo de vida e modelos (aula 2.1)

**Ciclo de vida** = da concepção até a descontinuidade. Etapas básicas: Definição → Desenvolvimento → Operação.

| Modelo | Em uma frase | Pegadinha |
|--------|----------------|-----------|
| **Cascata** | Fases em fila; começa em requisitos e termina na entrega | Mudança tardia é cara |
| **V** | Cascata em V: cada fase da esquerda gera teste na direita | Cliente ainda recebe a 1ª versão no fim |
| **Incremental / iterativo** | Vários ciclos; especificação + desenvolvimento + validação se repetem | **Não** é sequencial rígido |
| **Evolutivo** | Muda continuamente com o usuário | Escopo/prazo difíceis de fechar |
| **Espiral (Boehm)** | Voltas com análise de risco | Estimativa, cronograma e risco = **planejamento**, não modelagem |
| **Prototipação** | Protótipo → feedback → refino | Cliente achar que o protótipo já é o produto |

**Modelo × método:** modelo = esqueleto das fases. Método = papéis e práticas (Scrum, XP, Kanban, RUP, Cleanroom).

---

## 3. Ágeis (aula 2.2)

Mundo **VUCA** (volátil, incerto, complexo, ambíguo). Ágil = incremental, colaborativo, simples, adaptativo. **Não** é “zero documentação”.

**Manifesto (2001, Snowbird)** — priorizamos a esquerda, mas há valor na direita:

1. Indivíduos e interações **>** processos e ferramentas  
2. Software em funcionamento **>** documentação abrangente  
3. Colaboração com o cliente **>** negociação de contratos  
4. Responder a mudanças **>** seguir um plano  

**São ágeis:** Scrum, XP, Kanban, FDD, DSDM, Lean Startup.  
**2001:** Manifesto Ágil. SWEBOK é IEEE — outra iniciativa (mesmo ano, outro objetivo).

---

## 4. Requisitos funcionais e não-funcionais (aulas 3.0 e 3.1)

Isso **está** no conteúdo — e cai no mesmo formato da pamonha do PDF.

**Requisito** (IEEE): condição/capacidade que o software precisa ter para o usuário **ou** para um contrato/padrão. Tem que estar **documentado**.

**RF = o QUÊ** o sistema faz (função, operação, mudança de estado, CRUD, regra de negócio).

Exemplos da professora: cadastrar médico · emitir relatório · mudar estado “em consulta” → “consultado” · CRUD de produto · “a compra só é aprovada se o cliente não tiver pendência” · aluno reprova se faltas > 75%.

**RNF = o COMO** / qualidade global (difícil de validar se ficar vago: “seguro”, “rápido”).

Exemplos da professora: só usuário autorizado acessa o BD · 24/7 · rodar no Android · prazo de 6 meses · backup diário · padrão de relatório do marketing · open source.

RNF ainda se classifica por origem:

| Origem | O que é | Exemplo |
|--------|---------|---------|
| **De produto** | Comportamento do software | desempenho, confiabilidade, portabilidade, usabilidade |
| **Organizacionais** | Política do cliente ou da fábrica | ISO, prazo de entrega, ferramenta obrigatória |
| **Externos** | Fora do time | lei, ética, interoperar com outro sistema, privacidade |

**Regra de negócio** não é um “terceiro tipo”: é restrição para o negócio acontecer, e **entra na descrição do RF** (boleto só se PJ **e** gerente autorizar).

**FURPS+** (IBM) — use na prova para rotular o RNF:

| | Significado | Na prática |
|--|-------------|------------|
| **F** | Functionality | os RF |
| **U** | Usability | help, logo, consistência, prevenção de erro |
| **R** | Reliability | backup, MTBF, recuperação de falha |
| **P** | Performance | tempo de resposta, CPU, carga |
| **S** | Supportability | manutenção, instalar, escalar, e-commerce futuro |
| **+** | design, implementação, interface, físicos | linguagem, Windows+Chrome, restrição de UI, hardware |

Sintaxe: `{sujeito + ação + objeto + qualificação}` — *“O sistema deve usar protocolo TCP/IP.”*

**Bom requisito (elicitação):** não ambíguo · verificável · determinístico · rastreável · correto.  
Armadilhas: fácil, rápido, diversos, quando possível, sigla, pronome.

**Teste de 5 segundos:** se descreve uma **função** (cadastrar, consultar, emitir, calcular, gerar relatório) → RF. Se descreve **qualidade ou restrição** (tempo, SO, backup, 24/7, open source) → RNF. Relatório **não** é RNF.

---

## 5. Questões do PDF (gabarito comentado)

### Questão 02 — V/F [1,0]

| # | Afirmação | Gabarito |
|---|-----------|----------|
| 1 | No modelo **iterativo**, as atividades ficam em estágios **sequenciais** | **F** — sequencial é cascata |
| 2 | ES = teorias da computação; desenvolver fica com Ciência da Computação | **F** — ES é produção de software |
| 3 | ES inclui especificação, desenvolvimento, validação e evolução | **V** |
| 4 | Software = só código em arquivos | **F** — inclui dados e documentos |
| 5 | Processo = iniciação, desenvolvimento, entrega e encerramento | **F** — as quatro de ES são outras |

### Questão 04 — modelos de processo [1,0]

I. Atividades do **incremental**: especificação, desenvolvimento e validação. → **V**  
II. **Cascata**: sequencial, começa na especificação de requisitos e termina na entrega. → **V**  
III. No **espiral**, a fase de **modelagem** faz estimativa, cronograma e análise de risco. → **F** (isso é planejamento)

**Resposta: I e II, apenas** (letra c no recorte)

### Questão 03 — metodologias ágeis [1,0]

I. Ágil = incremental, colaborativo, simples, adaptativo a mudanças. → **V**  
II. FDD e DSDM são metodologias ágeis. → **V**  
III. Em 2001 o grupo criou as áreas da ES e o SWEBOK. → **F** (foi o **Manifesto Ágil**; SWEBOK é IEEE)

**Resposta: I e II, apenas** (letra a)

### Questão — vendedor de pamonha (RF × RNF) [1,0]

I. RF: reabastecer estoque no mínimo · RNF: controlar tempo de resposta → **certo**  
II. RF: consultar vendas do dia · RNF: Android e iOS → **certo**  
III. RF: cadastrar sabores · RNF: consulta &lt; 1 minuto → **certo**  
IV. RF: calcular estoque · RNF: gerar relatório do total de vendas → **errado** (relatório é RF)

**Resposta: I, II e III** (letra d)

---

## 6. Treino extra (mesmo formato)

**FURPS+:** “cadastrar cliente” **não** é Usability — é Functionality. Backup diário = Reliability; busca em 3 s = Performance.

**Manifesto:** “seguir um plano > responder a mudanças” está **invertido**.

**Prototipação:** o risco clássico **existe** (cliente confundir protótipo com produto). Não diga que a prototipação elimina esse risco.

**Modelo V:** verificação/validação emparelhadas — unidade testa o projeto do programa; aceitação testa os requisitos.
