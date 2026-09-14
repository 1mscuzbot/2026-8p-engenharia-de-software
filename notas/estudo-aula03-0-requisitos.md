# Aula 3.0 — Requisitos de software

**Disciplina:** Engenharia de Software (Prof.ª Patricia Rucker de Bassi)  
**Slide:** `material/slides/Engenharia de Software - aula 3.0 - requisitos 2026.pdf`  
**Data (plano):** 24/08 (aulas 09–10) · alinhado também a 31/08 no PA

---

## Ideia central

**Requisito** = o que o sistema deve fazer (serviços) e sob quais restrições. Em ES: condição/capacidade necessária ao usuário **ou** imposta por contrato/padrão (IEEE, 1990).

**Problema da indústria (Wiegers):** a mesma frase pode ser chamada de requisito de usuário, de software, de negócio ou de produto — falta vocabulário comum.

| Tipo | Pergunta | Exemplos |
|------|----------|----------|
| **Funcional (RF)** | **O quê** o sistema faz | cadastro, relatório, mudança de estado, CRUD, regras (“só aprova se…”) |
| **Não-funcional (RNF)** | **Como** / qualidades globais | segurança, 24/7, Android, prazo de 6 meses, backup diário, open source |

**Regra de negócio** = restrição/premissa para o negócio acontecer (ex.: compra só com cliente sem pendência financeira).

### RNF por origem

- **De produto:** eficiência, confiabilidade, portabilidade, usabilidade  
- **Organizacionais:** políticas/processos do cliente ou do desenvolvedor (entrega, ISO…)  
- **Externos:** interoperabilidade, éticos, legais (privacidade/segurança)

### Checklist de questionamentos (RNF)

Ambiente físico · Interfaces · Funcionalidade (tempo/resposta) · Perfis de usuário · Documentação · Fluxo de dados · Segurança · Recursos (espaço físico)

---

## FURPS+ (IBM) — categorizar requisitos

| Letra | Significado | O que mede / exemplos |
|-------|-------------|------------------------|
| **F** | Functionality | requisitos funcionais + cumprimento do especificado |
| **U** | Usability | prevenção de erros, estética, Help, consistência |
| **R** | Reliability | frequência/gravidade de falha, recuperação, MTBF |
| **P** | Performance | tempo de resposta, memória, CPU, carga, disponibilidade |
| **S** | Supportability | testabilidade, manutenção, compatibilidade, instalabilidade… |
| **+** | extras | design, implementação, interface, físicos |

**+** em detalhe: linguagem/processo/ferramentas (design); padrões/BD/ambiente (implementação); restrições de UI; hardware/rede (físicos).

---

## Sintaxe padronizada

`{[sujeito + ação + objeto] + qualificação}`  
Ex.: *“O sistema deve usar protocolo TCP/IP.”*

---

## Atividades da aula

1. Identificar RF (tabela em anexo) — individual, correção em aula  
2. Urna eletrônica: RNF classificados; **≥1 de cada item FURPS+**; cruzar com [DevMedia — RNF](https://www.devmedia.com.br/artigo-engenharia-de-software-3-requisitos-nao-funcionais/9525)

**Liga com o ED 1º bim:** a tabela do Peça Certa (RF/RNF + FURPS+) usa exatamente este framework — ver `notas/atividade pratica - requisitos Peca Certa.pdf`.
