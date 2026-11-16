# Revisão — Avaliação 2º bimestre (23/11/2026)

**Disciplina:** Engenharia de Software · **Profa.** Patricia Rucker de Bassi  
**Fonte das objetivas:** [`material/questoes de revisão - 2o bimestre 20262.pdf`](../material/questoes%20de%20revisão%20-%202o%20bimestre%2020262.pdf) (50 questões; só enunciados — gabarito comentado abaixo)  
**Cola SQuaRE (8 áreas):** [estudo-aula04-3-qualidade-de-software.md](estudo-aula04-3-qualidade-de-software.md) · [atividade SQuaRE](../projetos/atividade-aula04-3-square-Lucas_Muller_Scuzziato.md) · [estudo colaborativo](estudo-desenvolvimento-colaborativo.md)

---

## Aviso da professora (obrigatório)

**Avaliação — 23/11:**
- questões **objetivas**
- questão **discursiva** — qualidade de software — **SQuaRE**

Estudar: construção, teste, manutenção, qualidade (ISO 25010/SQuaRE), gerência de configuração. Métricas entram no tema do dia da prova (plano: 35–36).

---

## Roteiro de 40 minutos

1. **4 tipos de manutenção** + análise de impacto + commit rastreável  
2. **Níveis/tipos de teste** (unidade → integração → sistema → aceitação/beta) + caixa branca/preta + regressão + cobertura  
3. **Construção:** padronização, modularidade, refatoração (não muda comportamento), code review, CI/build, antipadrões  
4. **GCS:** item de configuração, baseline, branch, merge, controle de mudanças, auditoria, versionamento  
5. **SQuaRE (8 características)** — treinar a discursiva (roteiro abaixo)  
6. Resolver 10–15 questões do PDF sem olhar o gabarito

---

## Discursiva SQuaRE — o que cobrar na resposta

**Norma:** ISO/IEC 25000 (SQuaRE) reformula ISO 9126 + 14598. O modelo de **qualidade de produto** usado na aula é o da **ISO/IEC 25010** (oito características).

**Estrutura sugerida (1–2 páginas / 10–15 min):**
1. Definir qualidade (explícitas + implícitas; NBR ISO 8402) e situar **produto** vs **processo** (SQuaRE = produto; CMMI/MPS.BR = processo).  
2. Listar as **8 características** com 1 frase cada + **1 exemplo** curto.  
3. Se pedir “avaliação”: dizer que SQuaRE também guia **requisitos** e **avaliação** de qualidade (não só “conceito”).  
4. Fechar: qualidade ≠ só “sem bugs”; cobre desempenho, segurança, usabilidade, manutenção etc.

| Característica | O que é | O que citar se pedir detalhe |
|----------------|---------|------------------------------|
| Adequação funcional | Faz o que deve (completo, correto, apropriado) | Completude / correção / apropriação |
| Eficiência de desempenho | Tempo e recursos sob carga | Tempo de resposta, capacidade, uso de CPU/memória |
| Compatibilidade | Coexiste e troca dados | Coexistência + interoperabilidade |
| Usabilidade | Pessoas usam com efetividade/satisfação | Aprendizado, operação, proteção a erro, acessibilidade |
| Confiabilidade | Mantém desempenho no tempo | Maturidade, disponibilidade, tolerância a falhas, recuperabilidade |
| Segurança | Acesso apropriado a dados/funções | Confidencialidade, integridade, autenticidade, não-repúdio, responsabilização |
| Manutenibilidade | Fácil alterar/evoluir/testar | Modularidade, reuso, analisabilidade, modificabilidade, **testabilidade** |
| Portabilidade | Mudar de ambiente com esforço controlado | Adaptabilidade, instalabilidade, substituibilidade |

**Não confundir:** testabilidade (subcaracterística de manutenibilidade) ≠ característica top-level; navegadores diferentes ≈ **compatibilidade**; SO diferentes ≈ **portabilidade**.

Cola das 8 áreas: [atividade-aula04-3-square-Lucas_Muller_Scuzziato.md](../projetos/atividade-aula04-3-square-Lucas_Muller_Scuzziato.md).

---

## Cola objetiva (temas do PDF)

### Manutenção
- **Corretiva** — corrige falha em produção  
- **Adaptativa** — ambiente/legislação/contexto externo mudou  
- **Perfectiva** — melhoria/eficiência/funcionalidade nova (sem ser “bug”)  
- **Preventiva** — antecipa falha (ex.: atualizar libs velhas)  
- **Emergencial** — correção urgente (sistema caiu)  
- Antes de alterar: **análise de impacto** · commits claros → **rastreabilidade**

### Teste
- Unidade = função isolada · Integração = módulos juntos · Sistema = RF+RNF no sistema · Aceitação = com cliente · Beta = usuários externos · Regressão = reexecutar após mudança  
- Caixa **branca** = estrutura interna · Caixa **preta** = comportamento externo  
- Cobertura de **instrução** = “todas as instruções executadas?”  
- Mutação = testes detectam mudanças intencionais no código?

### Construção
- Padrões de código, modularidade, tratamento de exceção (**robustez**), CI, build = fonte → executável  
- **Refatoração** = melhora estrutura **sem** mudar comportamento externo · métodos gigantes = **antipadrão** · comentário óbvio fere **código limpo**

### Configuração (GCS)
- Documento de requisitos = **item de configuração**  
- **Baseline** = versão aprovada/congelada (marco estável)  
- **Branch** = trabalhar isolado · conflitos no **merge** · **controle de mudanças** aprova/rastreia/documenta · auditoria verifica consistência

### Qualidade / métricas (objetivas do PDF)
- Manutenibilidade ↔ **complexidade ciclomática** (mais adequada entre as opções da Q3)  
- Defeitos/LOC = métrica de **defeitos** · hospital rápido → **eficiência de desempenho** · emergência 24/7 → **confiabilidade** · só professor vê notas → **segurança**

---

## Gabarito comentado (Q1–Q50)

> Respostas fundamentadas no conteúdo das aulas; o PDF **não** traz gabarito oficial. Q48: tipo clássico é **perfectiva**, mas **não aparece** nas alternativas — possível erro tipográfico no material.

| # | Tema | Resp. | Por quê (1 linha) |
|---|------|-------|-------------------|
| 1 | Construção – padronização | **C** | Padrão de codificação = prática de construção |
| 2 | Teste V/F | **A** | V F V V F (unidade≠integração; beta≠só QA) |
| 3 | Qualidade – métrica | **B** | Ciclomática correlaciona com manutenibilidade |
| 4 | GCS – versão | **A** | Feature sem afetar main → branches |
| 5 | Manutenção – tipos | **B** | Regra de negócio mudou → adaptativa (contexto externo); perfectiva não está nas opções |
| 6 | Refatoração V/F | **B** | F V V V (não altera comportamento externo) |
| 7 | Cobertura | **C** | “Todas as instruções” = cobertura de instrução |
| 8 | ISO 25010 | **B** | Rápido + poucos recursos = eficiência de desempenho |
| 9 | Baseline | **B** | Código/versão congelada e controlada |
| 10 | Manutenção | **A** | Corrigir falha em produção = corretiva |
| 11 | Modularidade | **B** | Módulos menores/independentes = modularidade |
| 12 | Tipos de erro | **B** | Arredondamento errado = defeito lógico |
| 13 | Preventiva | **C** | Atualizar libs antes de falhar = preventiva |
| 14 | Testabilidade | **A** | Componentes desacoplados facilitam teste isolado |
| 15 | Merge | **C** | Conflitos ao integrar = merge |
| 16 | Exceções | **A** | Tratamento de exceção reforça robustez |
| 17 | Caixa branca | **C** | Analisa estrutura interna do código |
| 18 | Commit | **B** | Motivo claro no commit → rastreabilidade |
| 19 | Confiabilidade | **C** | Emergência médica contínua = confiabilidade |
| 20 | Itens GCS | **A** | Doc de requisitos = item de configuração |
| 21 | Comentários | **B** | Comentário óbvio fere código limpo |
| 22 | Níveis | **C** | Sistema completo RF+RNF = teste de sistema |
| 23 | Adaptativa | **C** | Mudança de legislação = adaptativa |
| 24 | Usabilidade | **C** | Interface confusa = usabilidade |
| 25 | Auditoria | **B** | Consistência/controle de artefatos = GCS |
| 26 | Construção V/F | **A** | V F V V F (refatoração não muda comportamento; scripts CI relevantes) |
| 27 | Relacionar testes | **A** | 5–3–2–4–1 (beta, integração, aceitação, regressão, unidade) |
| 28 | Ciclo de vida | **C** | Pós-produção = manutenção |
| 29 | Segurança | **B** | Acesso autorizado a notas = segurança |
| 30 | Complete GCS | **B** | Aprovar/rastrear/documentar = controle de mudanças |
| 31 | CI | **C** | Pipeline a cada commit = integração contínua |
| 32 | Caixa preta | **C** | Foco no comportamento externo |
| 33 | Refatoração | **C** | Melhora estrutura interna |
| 34 | Portabilidade | **B** | Windows/Linux/macOS = portabilidade |
| 35 | Branches | **B** | Desenvolver isoladamente |
| 36 | Antipadrões | **C** | Método gigante/muitas responsabilidades = antipadrão |
| 37 | Automação | **B** | Vale a pena quando testes são repetitivos |
| 38 | Impacto | **B** | Avaliar efeito em outras partes = análise de impacto |
| 39 | Métrica | **B** | Defeitos/LOC = métrica de defeitos |
| 40 | GCS V/F | **A** | V F V V V (Git não é o único VCS) |
| 41 | Build | **C** | Fonte → executável = build |
| 42 | Mutação | **B** | Verifica se testes pegam mutações intencionais |
| 43 | Emergencial | **C** | Sistema caiu → manutenção emergencial |
| 44 | Usabilidade | **B** | Interface simples/intuitiva = usabilidade |
| 45 | Repositório | **B** | Base de código compartilhada |
| 46 | Padronização | **C** | Mesmo estilo → leitura e manutenção |
| 47 | Performance | **C** | Responder < 2 s = teste de performance |
| 48 | Completar | **⚠** | Conceito = **perfectiva**; **não há** essa opção no PDF (A–E dadas não batem) |
| 49 | Compatibilidade | **A** | Vários navegadores = compatibilidade |
| 50 | Baseline | **C** | Marco de versão estável pós-validação = baseline |

### Lista das 50 questões (enunciado curto)

1. Padrão de codificação em agendamento escolar → ?  
2. V/F: regressão / unidade / integração / sistema / beta  
3. Métrica de manutenibilidade  
4. Git: feature sem afetar main  
5. Clínica: regra de cobrança mudou — tipo de manutenção  
6. V/F sobre refatoração  
7. Cobertura: todas as instruções executadas  
8. Hospital: rápido e pouco recurso (ISO 25010)  
9. O que é baseline  
10. Complete: manutenção que corrige falha em produção  
11. Quebrar código em módulos  
12. Erro de arredondamento financeiro  
13. Atualizar bibliotecas antes de falhar  
14. Componentes desacoplados → qual atributo  
15. Conflitos ao integrar no Git  
16. Tratamento de exceções no banco  
17. O que o teste caixa branca permite  
18. Commit com motivo claro  
19. Software de emergência médica 24/7  
20. Doc de requisitos na GCS  
21. Comentários óbvios  
22. Nome do teste do sistema completo  
23. Mudança de legislação fiscal  
24. Interface educacional confusa  
25. Auditoria de artefatos  
26. V/F práticas de construção  
27. Relacionar: unidade / aceitação / integração / regressão / beta  
28. Atividade após entrar em produção  
29. Só professores acessam notas  
30. Complete: atividade que aprova/rastreia alterações  
31. Pipelines a cada commit  
32. Foco do teste caixa preta  
33. Refatoração melhora o quê  
34. App em Windows/Linux/macOS  
35. Criar branch para feature  
36. Métodos gigantes  
37. Quando automatizar testes  
38. Avaliar efeito da mudança  
39. Defeitos por linha de código  
40. V/F versionamento/Git/commits/branches/tags  
41. Processo fonte → executável  
42. Teste de mutação  
43. Hospital caiu — tipo de manutenção  
44. Interfaces simples/intuitivas  
45. Repositório centralizado  
46. Mesmo estilo de código  
47. Resposta < 2 s  
48. Melhorias de eficiência sem mudar funções  
49. App em vários navegadores  
50. Marco de versão estável pós-testes  

---

## Mini-gabarito só letras

1C 2A 3B 4A 5B 6B 7C 8B 9B 10A  
11B 12B 13C 14A 15C 16A 17C 18B 19C 20A  
21B 22C 23C 24C 25B 26A 27A 28C 29B 30B  
31C 32C 33C 34B 35B 36C 37B 38B 39B 40A  
41C 42B 43C 44B 45B 46C 47C 48⚠(perfectiva) 49A 50C
