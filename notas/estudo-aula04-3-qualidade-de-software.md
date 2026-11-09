# Aula 4.3 — Qualidade de software

**Disciplina:** Engenharia de Software (Prof.ª Patricia Rucker de Bassi)  
**Slide:** `material/slides/Engenharia de Software - aula 4.3 - qualidade de software.pdf`  
**Fonte:** PPTX convertido (mesmo nome `.pptx` no mesmo diretório)  
**Data (plano):** 16/11 (aulas 33–34) — material usado em torno de 09/11

---

## Ideia central

**Qualidade** = capacidade de satisfazer necessidades **explícitas** (contrato, especificação, manual) e **implícitas** (expectativa/desejo do cliente) — NBR ISO 8402.  
O usuário não quer o produto em si, e sim os **efeitos** do uso (necessidades).

99,9% “parece alto”, mas em escala real vira falha grave (prescrições erradas, cirurgias, falta de energia). No SI: qualidade = conformidade do software aos requisitos + arma competitiva (globalização / padrões internacionais).

---

## Controle × garantia × certificação

| | Controle da qualidade | Garantia da qualidade |
|--|----------------------|------------------------|
| Foco | Não entregar defeito | Produzir com baixa taxa de defeitos |
| Natureza | **Reativa** | **Proativa** |
| Como | Inspeção, testes, monitoração | Procedimentos, padrões, treinamento, melhoria de processo |

**Certificação:** qualidade precisa ser **reconhecida** (selo/padrão oficial — analogias: SIF, ABIC, hotéis).

### Custos

- **Falhas/correção** — refazer por erro no processo ou no produto (e o custo sobe quanto mais tarde se corrige)
- **Prevenção** — planejar e implementar sistema da qualidade
- **Avaliação/certificação** — verificar o processo de produção

---

## Qualidade de software: processo × produto

Objetivo da ES: ajudar a **produzir software de qualidade** (competitividade de quem desenvolve e de quem usa).

| Foco | Normas / modelos (slide) |
|------|--------------------------|
| **Produto** | ISO 9126 · ISO 14598 · **ISO 25000 (SQuaRE)** (reforma 9126+14598) |
| **Processo** | ISO 90003 · ISO 12207 · ISO 15504 (SPICE) → **ISO 330XX** · **CMMI** · **MPS.BR** |

---

## SQuaRE — características de qualidade de produto (ISO/IEC 25000 / 25010)

O slide lista oito áreas (modelo de qualidade de **produto**):

| Característica | Em uma frase |
|----------------|--------------|
| **Adequação funcional** | Faz o que foi especificado, corretamente e de forma adequada |
| **Eficiência de desempenho** | Tempo, recursos e capacidade sob carga |
| **Compatibilidade** | Convive e troca dados com outros sistemas |
| **Usabilidade** | Fácil de aprender, usar e evitar erro |
| **Confiabilidade** | Mantém o comportamento sob condições e no tempo |
| **Segurança** | Protege dados/acesso (confidencialidade, integridade, autenticidade…) |
| **Manutenibilidade** | Fácil de alterar, testar e evoluir |
| **Portabilidade** | Adapta-se a outros ambientes / plataformas |

---

## Atividade da aula

Individual — descrever o que **cada área do SQuaRE** realiza na qualidade de software; postar nas Tarefas do Teams até o fim da aula.

Resposta pronta: [projetos/atividade-aula04-3-square-Lucas_Muller_Scuzziato.md](../projetos/atividade-aula04-3-square-Lucas_Muller_Scuzziato.md)

---

- Anterior → [Aula 4.2 — Manutenção / code smells](../projetos/atividade-code-smells-26out-Lucas_Muller_Scuzziato.md)  
- Tarefas → [notas/tarefas.txt](tarefas.txt)
