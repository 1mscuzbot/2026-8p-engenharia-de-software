# Atividade — Aula 4.3 Qualidade de software (SQuaRE)

**Disciplina:** Engenharia de Software (Profa. Patricia Rucker de Bassi)  
**Integrante:** Lucas Müller Scuzziato  
**Slide:** `material/slides/Engenharia de Software - aula 4.3 - qualidade de software.pdf`  
**Atividade:** individual — identificar o que cada área do SQuaRE realiza em relação à qualidade de software  
**Base:** ISO/IEC 25000 (SQuaRE) / modelo de qualidade de produto (ISO/IEC 25010), alinhado ao slide da aula

---

## Contexto rápido

SQuaRE (*Software Quality Requirements and Evaluation*) reformula e unifica as antigas ISO 9126 (qualidade de produto) e ISO 14598 (avaliação). No slide, as “áreas” pedidas são as **oito características de qualidade de produto** do modelo.

---

## 1. Adequação funcional

Garante que o software **fornece as funções** que atendem às necessidades declaradas e implícitas.

- **Completude funcional** — cobre o conjunto de funções necessário  
- **Correção funcional** — resultados certos, com a precisão exigida  
- **Apropriação funcional** — as funções facilitam as tarefas do usuário  

**Na prática:** se o RF diz “calcular frete por CEP” e o sistema calcula errado ou não calcula, falha esta área — mesmo com tela bonita.

---

## 2. Eficiência de desempenho

Avalia o **desempenho em relação aos recursos** usados sob condições estabelecidas.

- Tempo de resposta / processamento  
- Uso de CPU, memória, disco, rede  
- Capacidade (quantos usuários/transações simultâneas)  

**Na prática:** o sistema faz o certo, mas trava com 50 usuários ou gasta memória demais → qualidade de desempenho baixa.

---

## 3. Compatibilidade

Mede se o produto pode **coexistir e trocar informações** com outros produtos no mesmo ambiente.

- **Coexistência** — compartilha recursos sem prejuízo mútuo  
- **Interoperabilidade** — troca dados e usa informações de outros sistemas  

**Na prática:** integrar com ERP, API de pagamento ou dois módulos no mesmo servidor sem conflito.

---

## 4. Usabilidade

Grau em que o produto pode ser usado por usuários especificados para atingir objetivos com **efetividade, eficiência e satisfação**.

Inclui: reconhecibilidade da adequação, aprendibilidade, operabilidade, proteção contra erro do usuário, estética da interface, acessibilidade.

**Na prática:** cadastro em poucos passos claros, mensagens de erro úteis, suporte a leitores de tela quando exigido.

---

## 5. Confiabilidade

Capacidade de o sistema **manter o nível de desempenho** sob condições estabelecidas durante um período de tempo.

- Maturidade (poucas falhas em uso normal)  
- Disponibilidade  
- Tolerância a falhas  
- Recuperabilidade (após interrupção)  

**Na prática:** e-commerce que não “cai” no pico de vendas e volta rápido se um serviço falhar.

---

## 6. Segurança (*security*)

Proteção de informações e dados para que pessoas/sistemas tenham o **grau de acesso de dados apropriado** aos seus tipos e níveis de autorização.

- Confidencialidade · Integridade · Não-repúdio · Responsabilização (*accountability*) · Autenticidade  

**Na prática:** login forte, controle de acesso na API (não só na UI), criptografia e trilha de auditoria.

---

## 7. Manutenibilidade

Efetividade e eficiência com que o produto pode ser **modificado** (correções, melhorias, adaptação a mudanças).

- Modularidade · Reusabilidade · Analisabilidade · Modificabilidade · Testabilidade  

**Na prática:** código legível, baixo acoplamento, testes automatizados — liga direto à aula de manutenção/refatoração (code smells).

---

## 8. Portabilidade

Efetividade e eficiência com que o sistema pode ser **transferido** de um ambiente de hardware, software ou operacional para outro.

- Adaptabilidade · Instalabilidade · Substituibilidade  

**Na prática:** rodar em Linux e Windows, empacotar em container, trocar um componente por outro equivalente com pouco retrabalho.

---

## Síntese (uma linha cada)

| Área SQuaRE (slide) | O que realiza na qualidade |
|---------------------|----------------------------|
| Adequação funcional | O software faz o que deve, certo e adequado à tarefa |
| Eficiência de desempenho | Faz isso com tempo e recursos aceitáveis |
| Compatibilidade | Convive e integra com outros sistemas |
| Usabilidade | Pessoas conseguem usar com facilidade e satisfação |
| Confiabilidade | Continua funcionando no tempo e sob falha parcial |
| Segurança | Protege dados e restringe acesso indevido |
| Manutenibilidade | Dá para evoluir, corrigir e testar sem custo absurdo |
| Portabilidade | Dá para mudar de ambiente/plataforma com esforço controlado |

---

**Entrega:** postar este arquivo (ou o texto) nas Tarefas do Teams — atividade individual, até o final da aula.
