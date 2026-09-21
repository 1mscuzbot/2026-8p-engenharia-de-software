import {
  Button,
  Callout,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Pill,
  Row,
  Stack,
  Stat,
  Table,
  Text,
  useCanvasState,
} from "cursor/canvas";

type Tab = "conteudo" | "pdf" | "treino";

type McQuestion = {
  id: string;
  title: string;
  stem: string;
  statements: string[];
  options: { key: string; label: string }[];
  correct: string;
  why: string;
};

type VfItem = { text: string; answer: boolean; why: string };

const PDF_MC: McQuestion[] = [
  {
    id: "q04",
    title: "Questão 04 — modelos de processo (PDF)",
    stem: "Os modelos de desenvolvimento foram propostos para trazer ordem ao caos (Pressman, 2016, adaptado). Avalie:",
    statements: [
      "I — são atividades do modelo incremental: especificação, desenvolvimento e validação;",
      "II — o modelo cascata sugere uma abordagem sequencial e sistemática, iniciando na especificação de requisitos e finalizando com a entrega do software concluído;",
      "III — no modelo espiral, a fase de modelagem é responsável, entre outras atividades, pela estimativa, cronograma e análise de risco.",
    ],
    options: [
      { key: "a", label: "a) II, apenas" },
      { key: "b", label: "b) III, apenas" },
      { key: "c", label: "c) I e II, apenas" },
      { key: "d", label: "d) I e III, apenas" },
    ],
    correct: "c",
    why: "I e II estão certas. Incremental realmente cicla especificação → desenvolvimento → validação. Cascata é sequencial do requisito até a entrega. III erra o quadrante: em Pressman, estimativa, cronograma e risco ficam no planejamento; modelagem é análise/projeto.",
  },
  {
    id: "q03",
    title: "Questão 03 — metodologias ágeis (PDF)",
    stem: "Abordagem tradicional é inadequada quando há mudanças constantes e orçamentos limitados. Em relação às metodologias ágeis:",
    statements: [
      "I — Uma metodologia é considerada ágil quando desenvolve software de modo incremental, colaborativo, de forma simples e adaptativo às mudanças;",
      "II — O FDD (Feature Driven Development) e o DSDM (Dynamic System Development Method) são metodologias ágeis;",
      "III — A iniciativa para criação das metodologias ágeis iniciou-se em 2001, quando um grupo se uniu para definir as áreas de estudos da Engenharia de Software e definiram o SWEBOK.",
    ],
    options: [
      { key: "a", label: "a) I e II, apenas" },
      { key: "b", label: "b) II e III, apenas" },
      { key: "c", label: "c) I e III, apenas" },
      { key: "d", label: "d) II, apenas" },
      { key: "e", label: "e) I, II e III" },
    ],
    correct: "a",
    why: "I descreve o espírito ágil. II: FDD e DSDM são métodos ágeis clássicos. III mistura 2001 com o SWEBOK: em 2001 o grupo de Snowbird escreveu o Manifesto Ágil (4 valores). SWEBOK é iniciativa IEEE, outra coisa — coincidência de ano.",
  },
  {
    id: "q-rf",
    title: "Questão — RF × RNF (vendedor de pamonha, PDF)",
    stem: "Na elicitação coletam-se regras de negócio, RF e RNF. Cenário: aplicativo para gerenciar vendas de pamonha. O que está corretamente classificado?",
    statements: [
      "I — RF: reabastecer o estoque quando a quantidade atingir o mínimo; RNF: controlar o tempo de resposta do aplicativo.",
      "II — RF: consultar a quantidade de vendas diária; RNF: funcionar em Android e iOS.",
      "III — RF: cadastrar sabores (salgadas e doces); RNF: tempo de resposta das consultas inferior a 1 minuto.",
      "IV — RF: calcular a quantidade de pamonhas no estoque; RNF: gerar relatório do total de vendas.",
    ],
    options: [
      { key: "a", label: "a) I e II" },
      { key: "b", label: "b) II e III" },
      { key: "c", label: "c) II e IV" },
      { key: "d", label: "d) I, II e III" },
      { key: "e", label: "e) I, III e IV" },
    ],
    correct: "d",
    why: "I, II e III separam bem o quê (função/regra) do como (performance, plataforma). IV erra: gerar relatório é função do sistema, portanto RF, não RNF.",
  },
];

const PDF_VF: VfItem[] = [
  {
    text: "No modelo iterativo de desenvolvimento de software, as atividades são dispostas em estágios sequenciais.",
    answer: false,
    why: "Sequencial rígido = cascata. Iterativo/incremental repete ciclos (especificar, desenvolver, validar) várias vezes.",
  },
  {
    text: "A engenharia de software refere-se ao estudo das teorias e fundamentos da computação, ficando o desenvolvimento de software a cargo da ciência da computação.",
    answer: false,
    why: "Ciência da Computação estuda fundamentos. ES trata da produção: especificar, desenvolver, validar e evoluir software.",
  },
  {
    text: "A engenharia de software está relacionada aos diversos aspectos de produção de software e inclui as atividades de especificação, desenvolvimento, validação e evolução de software.",
    answer: true,
    why: "As quatro atividades fundamentais do processo (Sommerville / disciplina).",
  },
  {
    text: "O conceito de software se restringe ao desenvolvimento do código em determinada linguagem e seu armazenamento em arquivos.",
    answer: false,
    why: "Software = instruções + estruturas de dados + documentos (manuais, config, requisitos…). Não é só código.",
  },
  {
    text: "Um processo de software é composto por quatro atividades fundamentais: iniciação, desenvolvimento, entrega e encerramento.",
    answer: false,
    why: "Isso é ciclo de projeto/PM. Em ES as quatro são especificação, desenvolvimento, validação e evolução.",
  },
];

const EXTRA_MC: McQuestion[] = [
  {
    id: "x-swebok",
    title: "Treino — SWEBOK (identificar a área)",
    stem: "A prova lista as áreas; você liga a descrição. Avalie:",
    statements: [
      "I — Controlar versões e mudanças de código e documentos é Gerência de configuração;",
      "II — Levantar e validar o que o sistema deve fazer é Requisitos de software;",
      "III — Lógica, conjuntos e grafos são Fundamentos de engenharia (não matemáticos).",
    ],
    options: [
      { key: "a", label: "a) I e II, apenas" },
      { key: "b", label: "b) I, II e III" },
      { key: "c", label: "c) II e III, apenas" },
      { key: "d", label: "d) I, apenas" },
    ],
    correct: "a",
    why: "III troca as bases: lógica/conjuntos/grafos = Fundamentos matemáticos. Fundamentos de engenharia são medição, experimentação e raciocínio de engenharia.",
  },
  {
    id: "x-furps",
    title: "Treino — FURPS+",
    stem: "Sobre a categorização FURPS+ (IBM):",
    statements: [
      "I — F cobre os requisitos funcionais; U, R, P e S cobrem qualidade (usabilidade, confiabilidade, desempenho, suportabilidade);",
      "II — Backup diário em nuvem é tipicamente Reliability; tempo de busca ≤ 3 s é Performance;",
      "III — “O sistema deve cadastrar cliente” é um RNF de Usability.",
    ],
    options: [
      { key: "a", label: "a) I e II, apenas" },
      { key: "b", label: "b) II e III, apenas" },
      { key: "c", label: "c) I, II e III" },
      { key: "d", label: "d) I, apenas" },
    ],
    correct: "a",
    why: "III é RF (o quê o sistema faz), não usabilidade. Help online, logo, “≤3 cliques” é que caem em U.",
  },
  {
    id: "x-manifesto",
    title: "Treino — Manifesto Ágil",
    stem: "O Manifesto Ágil (2001) prioriza valores da esquerda, mas reconhece valor também nos da direita.",
    statements: [
      "I — Indivíduos e interações acima de processos e ferramentas;",
      "II — Software em funcionamento acima de documentação abrangente;",
      "III — Seguir um plano acima de responder a mudanças.",
    ],
    options: [
      { key: "a", label: "a) I e II, apenas" },
      { key: "b", label: "b) I, II e III" },
      { key: "c", label: "c) II e III, apenas" },
      { key: "d", label: "d) I, apenas" },
    ],
    correct: "a",
    why: "O 4º valor é o contrário do III: responder a mudanças > seguir um plano. Os outros dois estão certos; falta ainda colaboração com o cliente > negociação de contratos.",
  },
  {
    id: "x-req",
    title: "Treino — qualidade do requisito",
    stem: "Na aula de elicitação, um bom requisito precisa ser não ambíguo, verificável, determinístico, rastreável e correto.",
    statements: [
      "I — “O sistema deve ser fácil de usar” falha em verificável;",
      "II — “Comunicar com a agenda do médico, quando possível” é indeterminação (ambíguo);",
      "III — “Tela com no máximo 4 colunas e 15 linhas” é verificável.",
    ],
    options: [
      { key: "a", label: "a) I, apenas" },
      { key: "b", label: "b) I e III, apenas" },
      { key: "c", label: "c) I, II e III" },
      { key: "d", label: "d) II e III, apenas" },
    ],
    correct: "c",
    why: "As três batem com a lista da aula 3.1. Palavras-armadilha: fácil, rápido, diversos, quando possível, siglas sem glossário.",
  },
  {
    id: "x-modelo",
    title: "Treino — modelo × método",
    stem: "Avalie as afirmações sobre ciclo de vida:",
    statements: [
      "I — Modelo descreve a estrutura/sequência das fases (cascata, V, espiral); método é prescritivo (papéis, práticas) — Scrum, XP, RUP;",
      "II — No modelo V, cada fase da esquerda gera um plano de teste executado na direita (verificação e validação);",
      "III — Prototipação elimina o risco de o cliente achar que o protótipo já é o produto final.",
    ],
    options: [
      { key: "a", label: "a) I e II, apenas" },
      { key: "b", label: "b) I, II e III" },
      { key: "c", label: "c) II, apenas" },
      { key: "d", label: "d) I e III, apenas" },
    ],
    correct: "a",
    why: "III inverte o risco clássico da prototipação: o cliente pode sim confundir protótipo com produto. I e II estão no slide 2.1.",
  },
];

function McBlock({ q, prefix }: { q: McQuestion; prefix: string }) {
  const [choice, setChoice] = useCanvasState<string>(`${prefix}-choice`, "");
  const [revealed, setRevealed] = useCanvasState<boolean>(`${prefix}-revealed`, false);
  const ok = choice === q.correct;

  return (
    <Card>
      <CardHeader trailing={revealed ? (ok ? "Certo" : "Reveja") : "1,0"}>
        {q.title}
      </CardHeader>
      <CardBody>
        <Stack gap={10}>
          <Text>{q.stem}</Text>
          {q.statements.map((s) => (
            <Text key={s} tone="secondary" size="small">
              {s}
            </Text>
          ))}
          <Row gap={8} wrap>
            {q.options.map((o) => (
              <Button
                key={o.key}
                variant={choice === o.key ? "primary" : "secondary"}
                onClick={() => {
                  setChoice(o.key);
                  setRevealed(false);
                }}
              >
                {o.label}
              </Button>
            ))}
          </Row>
          <Row gap={8}>
            <Button
              variant="primary"
              disabled={!choice}
              onClick={() => setRevealed(true)}
            >
              Conferir
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setChoice("");
                setRevealed(false);
              }}
            >
              Limpar
            </Button>
          </Row>
          {revealed ? (
            <Callout tone={ok ? "success" : "danger"} title={ok ? `Gabarito: ${q.correct}` : `Gabarito: ${q.correct} — não é ${choice}`}>
              {q.why}
            </Callout>
          ) : null}
        </Stack>
      </CardBody>
    </Card>
  );
}

function VfBlock() {
  const [marks, setMarks] = useCanvasState<Record<number, "V" | "F" | "">>(
    "pdf-vf-marks",
    { 0: "", 1: "", 2: "", 3: "", 4: "" },
  );
  const [revealed, setRevealed] = useCanvasState<boolean>("pdf-vf-revealed", false);

  const score = PDF_VF.reduce((n, item, i) => {
    const want = item.answer ? "V" : "F";
    return n + (marks[i] === want ? 1 : 0);
  }, 0);

  return (
    <Card>
      <CardHeader trailing="Questão 02 do PDF">Verdadeiro / Falso — engenharia de software</CardHeader>
      <CardBody>
        <Stack gap={14}>
          <Text>
            Indique V ou F. Gabarito do PDF: F, F, V, F, F.
          </Text>
          {PDF_VF.map((item, i) => (
            <Stack key={item.text} gap={6}>
              <Text size="small">{item.text}</Text>
              <Row gap={8} align="center">
                <Button
                  variant={marks[i] === "V" ? "primary" : "secondary"}
                  onClick={() => {
                    setMarks({ ...marks, [i]: "V" });
                    setRevealed(false);
                  }}
                >
                  V
                </Button>
                <Button
                  variant={marks[i] === "F" ? "primary" : "secondary"}
                  onClick={() => {
                    setMarks({ ...marks, [i]: "F" });
                    setRevealed(false);
                  }}
                >
                  F
                </Button>
                {revealed ? (
                  <Text size="small" tone={marks[i] === (item.answer ? "V" : "F") ? "secondary" : "primary"} weight="semibold">
                    {item.answer ? "V" : "F"} — {item.why}
                  </Text>
                ) : null}
              </Row>
            </Stack>
          ))}
          <Row gap={8}>
            <Button variant="primary" onClick={() => setRevealed(true)}>
              Conferir
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setMarks({ 0: "", 1: "", 2: "", 3: "", 4: "" });
                setRevealed(false);
              }}
            >
              Limpar
            </Button>
          </Row>
          {revealed ? (
            <Callout tone={score === 5 ? "success" : "warning"} title={`${score}/5 corretas`}>
              Armadilha clássica: trocar as 4 atividades de ES (especificação, desenvolvimento, validação, evolução) pelas fases de gerenciamento de projeto.
            </Callout>
          ) : null}
        </Stack>
      </CardBody>
    </Card>
  );
}

function Conteudo() {
  return (
    <Stack gap={20}>
      <H2>O que cai hoje</H2>
      <Text tone="secondary">
        Aulas 0 a 3.1: o que é ES, crise, SWEBOK (saber o que cada área faz), ciclo de vida, ágeis, RF/RNF, FURPS+ e qualidade da escrita. Configuração, teste e manutenção como capítulo próprio são 2º bimestre — mas as áreas 5, 7 e 8 do SWEBOK podem aparecer só para identificar.
      </Text>

      <H2>Quatro atividades do processo</H2>
      <Table
        headers={["Atividade", "Pergunta", "Não confundir com"]}
        rows={[
          ["Especificação", "O que construir?", "Iniciação de projeto"],
          ["Desenvolvimento", "Projetar e programar", "Só “codar”"],
          ["Validação", "É o produto certo para o cliente?", "Verificação (foi feito certo?)"],
          ["Evolução", "Manter e adaptar depois da entrega", "Encerramento de projeto"],
        ]}
        striped
      />

      <H2>Software não é só código</H2>
      <Text>
        Componentes: instruções + estruturas de dados + documentos. Não se desgasta como hardware; deteriora-se com mudanças mal geridas.
      </Text>

      <H2>SWEBOK V4 — o que cada área faz</H2>
      <Callout tone="info" title="Como a professora cobrou">
        Os nomes das 18 áreas vêm na prova. Não precisa decorar a lista de cor: identifique a descrição. IEEE, não o Manifesto Ágil.
      </Callout>
      <Table
        headers={["#", "Área", "O que faz"]}
        rows={[
          ["1", "Requisitos", "Levantar, analisar, documentar e validar o que o sistema deve fazer"],
          ["2", "Arquitetura", "Estrutura de alto nível: componentes, camadas, estilo"],
          ["3", "Projeto / Design", "Detalhar módulos e interfaces a partir da arquitetura"],
          ["4", "Construção", "Codificar, integrar, depurar"],
          ["5", "Teste", "Encontrar defeitos; avaliar se atende requisitos"],
          ["6", "Operações", "Produção: deploy, monitorar, DevOps"],
          ["7", "Manutenção", "Depois da entrega: corrigir, adaptar, evoluir"],
          ["8", "Gerência de configuração", "Versões e mudanças dos artefatos (Git)"],
          ["9", "Gerenciamento de ES", "Plano, estimativa, cronograma, equipe, risco"],
          ["10", "Processo de ES", "Como o time desenvolve e melhora o processo"],
          ["11", "Modelos e métodos", "Cascata, ágil, RUP — forma de organizar o trabalho"],
          ["12", "Qualidade", "Critérios de qualidade do produto e do processo"],
          ["13", "Segurança", "Ameaças, autenticação, privacidade no ciclo"],
          ["14", "Práticas profissionais", "Ética, comunicação, responsabilidade"],
          ["15", "Economia na ES", "Custo, valor, trade-off custo × prazo × escopo"],
          ["16", "Fund. computacionais", "Algoritmos, SO, redes, BD"],
          ["17", "Fund. matemáticos", "Lógica, conjuntos, grafos, probabilidade"],
          ["18", "Fund. de engenharia", "Medição, experimentação, raciocínio de engenharia"],
        ]}
        striped
        stickyHeader
      />

      <H2>Modelos de ciclo de vida</H2>
      <Table
        headers={["Modelo", "Como lembrar", "Pegadinha"]}
        rows={[
          ["Cascata", "Fases em fila; fácil gerir", "Mudança tardia é cara; cliente vê o produto no fim"],
          ["V", "Cascata dobrada: cada fase gera teste", "Ainda entrega a 1ª versão no final, com menos risco"],
          ["Incremental / iterativo", "Vários ciclos; entrega cedo", "Não é sequencial rígido"],
          ["Evolutivo", "Muda o tempo todo com o usuário", "Escopo e prazo difíceis de fechar"],
          ["Espiral (Boehm)", "Voltas com risco", "Estimativa/cronograma/risco = planejamento, não modelagem"],
          ["Prototipação", "Protótipo → feedback → refino", "Cliente achar que o protótipo já é o sistema"],
        ]}
        striped
      />
      <Callout tone="info" title="Modelo × método">
        Modelo = esqueleto das fases. Método = papéis e práticas (Scrum, XP, Kanban, RUP, Cleanroom). Cascata não é “o oposto do Scrum”: um é modelo, o outro é método.
      </Callout>

      <H2>Ágil</H2>
      <Text>
        VUCA: volátil, incerto, complexo, ambíguo. Ágil = ciclos curtos, produto funcionando, time autônomo. Não é “zero documentação”.
      </Text>
      <Table
        headers={["Priorizamos", "Em relação a"]}
        rows={[
          ["Indivíduos e interações", "Processos e ferramentas"],
          ["Software em funcionamento", "Documentação abrangente"],
          ["Colaboração com o cliente", "Negociação de contratos"],
          ["Responder a mudanças", "Seguir um plano"],
        ]}
      />
      <Text size="small" tone="secondary">
        Scrum (sprints, PO, SM), XP (TDD, pair, CI), Kanban (fluxo + WIP), FDD (por feature), DSDM e Lean Startup também são ágeis. Manifesto ≠ SWEBOK.
      </Text>

      <H2>RF, RNF e FURPS+</H2>
      <Text>
        RF = o quê (função, CRUD, mudança de estado, regra de negócio). RNF = o como (qualidade/restrição). Relatório e cadastro são RF; tempo, Android, backup, 24/7 são RNF.
      </Text>
      <Grid columns={2} gap={16}>
        <Stack gap={8}>
          <H3>Funcional = o quê</H3>
          <Text size="small">Cadastrar médico; emitir relatório; CRUD; “compra só se não houver pendência”; reprovar se faltas &gt; 75%.</Text>
        </Stack>
        <Stack gap={8}>
          <H3>Não-funcional = como</H3>
          <Text size="small">BD só para autorizados; 24/7; Android; prazo de 6 meses; backup diário; open source.</Text>
        </Stack>
      </Grid>
      <Table
        headers={["Letra", "Significado", "Exemplo de prova"]}
        rows={[
          ["F", "Functionality", "Cadastrar sabor; consultar venda; gerar relatório"],
          ["U", "Usability", "Help, logo, consistência"],
          ["R", "Reliability", "Backup a cada 24 h; recuperar falha"],
          ["P", "Performance", "Busca em no máximo 3 s"],
          ["S", "Supportability", "Arquitetura pronta para e-commerce"],
          ["+", "Design / implementação / interface / físicos", "Web no Windows + Chrome"],
        ]}
        striped
      />
      <Text size="small" tone="secondary">
        RNF ainda pode ser de produto (desempenho, usabilidade), organizacional (ISO, prazo) ou externo (lei, privacidade).
      </Text>

      <H2>Bom requisito (aula 3.1)</H2>
      <Table
        headers={["Critério", "Falha típica"]}
        rows={[
          ["Não ambíguo", "Pronome, sigla, “diversos”, duas leituras"],
          ["Verificável", "Fácil, rápido, amigável, pouca memória"],
          ["Determinístico", "Falta o que acontece no caso extremo (4ª senha)"],
          ["Rastreável", "Não se sabe de quem veio nem aonde vai"],
          ["Correto", "Não é o que o stakeholder realmente precisa"],
        ]}
        striped
      />
      <Text size="small" tone="secondary">
        Sintaxe: sujeito + ação + objeto + qualificação. Ex.: “O sistema deve emitir o orçamento sem reduzir estoque.”
      </Text>
    </Stack>
  );
}

export default function RevisaoEsProva1() {
  const [tab, setTab] = useCanvasState<Tab>("tab", "pdf");

  return (
    <Stack gap={20}>
      <Stack gap={8}>
        <H1>Revisão 1º bim — Engenharia de Software</H1>
        <Text tone="secondary">
          Prova 21/09 · Prof.ª Patricia Rucker de Bassi · questões do Ajuda-res.prova-1bim.pdf + treino extra no mesmo estilo
        </Text>
      </Stack>

      <Grid columns={4} gap={12}>
        <Stat value="4" label="Questões reconstruídas do PDF" />
        <Stat value="F F V F F" label="Gabarito do V/F" />
        <Stat value="7,0" label="Peso da avaliação" />
        <Stat value="3,0" label="ED (Peça Certa + Padlet)" tone="info" />
      </Grid>

      <Callout tone="warning" title="Não estude o outro PDF agora">
        O arquivo “alguma prova.pdf” (configuração, Git, teste, manutenção) é 2º bimestre. Hoje é intro + modelos + ágil + requisitos.
      </Callout>

      <Row gap={8} wrap>
        <Pill active={tab === "conteudo"} onClick={() => setTab("conteudo")}>
          Conteúdo
        </Pill>
        <Pill active={tab === "pdf"} onClick={() => setTab("pdf")}>
          Questões do PDF
        </Pill>
        <Pill active={tab === "treino"} onClick={() => setTab("treino")}>
          Treino extra
        </Pill>
      </Row>

      <Divider />

      {tab === "conteudo" ? <Conteudo /> : null}

      {tab === "pdf" ? (
        <Stack gap={16}>
          <H2>Gabarito comentado</H2>
          <Text tone="secondary">
            Marque, confira, leia o porquê. São as quatro questões fotografadas no PDF de ajuda.
          </Text>
          <VfBlock />
          {PDF_MC.map((q) => (
            <McBlock key={q.id} q={q} prefix={`pdf-${q.id}`} />
          ))}
        </Stack>
      ) : null}

      {tab === "treino" ? (
        <Stack gap={16}>
          <H2>Mais questões no formato da prova</H2>
          <Text tone="secondary">
            FURPS+, Manifesto, qualidade do requisito e modelo × método — o PDF de ajuda não traz o enunciado desses, mas as aulas 2.2–3.1 cobram.
          </Text>
          {EXTRA_MC.map((q) => (
            <McBlock key={q.id} q={q} prefix={`x-${q.id}`} />
          ))}
        </Stack>
      ) : null}
    </Stack>
  );
}
