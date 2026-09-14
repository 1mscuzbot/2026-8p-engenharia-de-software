# Aula 3.1 — Elicitação: características de um bom requisito

**Disciplina:** Engenharia de Software (Prof.ª Patricia Rucker de Bassi)  
**Slide:** `material/slides/Engenharia de Software - aula 3.1 - elicitação de requisitos (1).pdf`  
**Data (plano):** 14/09 (aulas 15–16)

---

## Ideia central

Elicitar não basta: o requisito precisa ser **escrito com qualidade**. Cinco critérios:

| Critério | Em uma frase | Mau exemplo → bom |
|----------|--------------|-------------------|
| **Não ambíguo** | Uma só leitura possível | “ele deve incluir o mais velho” → separar dependente vs plano; expandir siglas (glossário) |
| **Verificável** | Dá para testar de modo razoável | “deve ser amigável” → “cadastro de cliente em ≤3 min sem treino” ou “≤3 cliques” |
| **Determinístico** | Comporta-se de forma definida em todos os casos | “envia a cada 5 min” → o que fazer se **não** houver registros? |
| **Rastreável** | Vai até o requisitante **e** até a implementação | essencial quando requisito ou componente muda |
| **Correto** | É o requisito certo, com acurácia/precisão | validar com stakeholder |

### Fontes clássicas de ambiguidade

Pronomes · acrônimos · indeterminação (“quando possível”) · assumir conhecimento prévio

**Como reduzir:** linguagens/modelagens adequadas · reler só em busca de ambiguidade · inspecionar o documento

---

## Sintaxe (relembrada da 3.0)

`{[sujeito + ação + objeto] + qualificação}`

---

## Atividade 1 — “bom requisito?” (marcação de consulta / celular)

Avaliar cada item pelos 5 critérios (grupo; correção em aula):

| # | Descrição (slide) | Pista rápida |
|---|-------------------|--------------|
| 1 | Fácil de aprender a usar | falha **verificável** / ambíguo |
| 2 | Errar senha no máximo 3 vezes | ok em geral; falta o que acontece na 4ª? (**determinístico**) |
| 3 | O horário deverá ser validado | ambíguo — validado **como**? |
| 4 | Diversos usuários simultâneos no BD | “diversos” = quantos? (performance/verificável) |
| 5 | Compatível com diversos protocolos | quais? |
| 6 | Permitir até cinco consultas | cinco **o quê** / por quem / por dia? |
| 7 | NIU enviado ao sistema PME | siglas sem glossário |
| 8 | Tela: máx. 4 colunas e 15 linhas | verificável (UI) |
| 9 | Bom tempo de resposta | falha verificável — falta número |
| 10 | Comunicar com agenda do médico, quando possível | indeterminação |
| 11 | Não gravar tentativas não confirmadas | razoável; clarificar “não confirmadas” |
| 12 | Consumir pouca memória | falha verificável — falta limite |

## Atividade 2

Nos requisitos do **Zoológico** e da **Urna Eletrônica**: analisar e **reescrever** se a qualidade falhar; postar de novo nas Tarefas do Teams.

---

## Liga com o ED 1º bim (prazo 21/09)

Tabela Peça Certa deve ter: código · descrição + regra de negócio · ator · tipo F/RNF (FURPS+) · **sem ambiguidade** — este slide é o critério de correção.
