# Atividade — Aula 04.0 Construção de software

**Disciplina:** Engenharia de Software (Profa. Patricia Rucker de Bassi)  
**Slide:** `material/slides/Engenharia de Software - aula 04.0 - construcao de software.pdf`  
**Ferramenta usada:** Grok (IA generativa, xAI) — pesquisa na internet cruzada com o SWEBOK da aula e com a OWASP Top 10:2021  
**Data:** 05/10/2026

A aula trata a construção como codificação, teste feito pelo desenvolvedor, reuso e integração. As respostas abaixo ficam nessa etapa (não em requisitos nem em operação).

---

## 1. Quatro situações de vulnerabilidade na construção

### 1.1 Leitura ou escrita além do buffer (buffer overflow / over-read)

Na codificação em linguagens com memória manual (C/C++), o programa confia num tamanho informado pelo usuário e copia mais bytes do que o buffer realmente tem. A aula cita isso em “prevenção de falhas de segurança — buffer overflow”. O efeito é vazar memória do processo ou executar código que o atacante colocou.

### 1.2 Injeção por falta de validação da entrada

A entrada do usuário entra direto numa consulta SQL, num comando do sistema ou num interpretador, sem filtro nem consulta parametrizada. A aula pede validar a entrada e tratar dado incorreto. Se isso não entra no código, o atacante muda a instrução que o programa ia executar (OWASP A03:2021 — Injection: SQL, comando, LDAP, XSS).

### 1.3 Controle de acesso só na interface, não no código do servidor

O desenvolvedor esconde o botão de administrador na tela, mas a API aceita a mesma operação sem checar papel ou dono do recurso. Qualquer um que monte a requisição age fora da permissão. É a falha mais frequente no conjunto da OWASP Top 10:2021 (A01 — Broken Access Control).

### 1.4 Reuso de biblioteca sem estudar o que ela faz

A aula separa “construção com reutilização”: usar biblioteca pronta exige analisar o código e as interfaces. Copiar uma dependência só porque “todo mundo usa” leva vulnerabilidade conhecida para dentro do produto (OWASP A06:2021 — Vulnerable and Outdated Components).

### 1.a Exemplo real — Heartbleed (buffer over-read)

**O que foi:** CVE-2014-0160, divulgado em 7 de abril de 2014. No OpenSSL 1.0.1 até 1.0.1f, a extensão Heartbeat do TLS não conferia se o tamanho declarado no pacote batia com os bytes de fato recebidos.

**Como a falha nasceu na construção:** o código lia o campo de tamanho enviado pelo cliente e usava esse número no `memcpy`, sem limites. Um pacote curto com tamanho grande fazia o servidor devolver até 64 KB da memória do processo — chaves privadas, senhas e dados de sessão. A correção foi uma checagem de limites (versão 1.0.1g), descrita pelo próprio OpenSSL como “missing bounds check”.

**Por que serve de exemplo desta aula:** é falha de codificação (não de requisito vago). O pilar “construir para a verificação” e a prática “validar entrada / prevenir buffer overflow” teriam barrado o caso antes de ir a produção.

Fontes: [aviso OpenSSL de 07/04/2014](https://www.openssl.org/news/secadv/20140407.txt) · [commit do bounds check](https://github.com/openssl/openssl/commit/96db9023b881d7cd9f379b0c154650d6c108e9a3) · [estudo de caso MITRE / CWE-125](https://github.com/mitre/secure-coding-case-studies/blob/main/c/secure-coding-case-study-cwe-125-cve-2014-0160.md)

**Caso curto do item 1.4 (reuso):** Log4Shell, CVE-2021-44228. O Apache Log4j2 (2.0-beta9 até as versões anteriores à correção) interpretava texto de log como busca JNDI. Quem controlava uma mensagem de log podia fazer o servidor carregar código de um LDAP externo. Times embutiram a biblioteca sem revisar esse comportamento. Fonte: [registro CVE-2021-44228](https://www.cve.org/CVERecord?id=CVE-2021-44228).

---

## 2. Duas práticas da aula que menos entram no produto — e o efeito

Critério: práticas que a própria aula lista e que continuam gerando falha em massa (OWASP Top 10:2021), não opinião solta.

### 2.1 Validar entrada e programar de forma defensiva

A aula pede validar E/S, cuidar de condição complicada e tratar erro de dado. Na prática o código feliz (caminho que “funciona na demo”) sai primeiro; a checagem fica para depois.

**Consequência:** injeção e estouro de buffer chegam ao usuário. Corrigir em produção custa mais do que o teste de construção, porque a falha já atravessou integração e deploy. Heartbleed é o caso: faltou uma comparação de tamanho.

### 2.2 Estudar o que se reutiliza (construção com reutilização)

A aula diz para analisar o código reutilizável, documentar a interface e não duplicar às cegas. O hábito comum é adicionar a dependência e seguir.

**Consequência:** o produto herda o defeito da biblioteca com o mesmo privilégio da aplicação. A06 subiu no Top 10 (era #9 em 2017) e ficou em #2 na pesquisa da comunidade OWASP. Log4Shell mostrou sistemas parando para caçar um `.jar` que ninguém tinha lido.

---

## 3. Duas ferramentas na gestão da construção

| Ferramenta | Atividade da construção que ela apoia |
|------------|----------------------------------------|
| **GitHub** | Versionamento do código e revisão entre pares (pull request) durante a **codificação** e a **integração** dos módulos. A aula cita GitHub como ferramenta de versionamento. O histórico mostra quem mudou o quê antes do teste de integração. |
| **SonarQube** | **Qualidade da construção** e o pilar “construir para a verificação”: análise estática de duplicação, bugs e vulnerabilidades (injeção, recurso não fechado) no código que o desenvolvedor acabou de escrever — antes do teste manual. |

Alternativa direta ao teste da aula, se o grupo precisar de uma terceira: **JUnit** (ou equivalente) executa o **teste unitário** feito pelo próprio autor do código, encurtando o intervalo entre inserir a falha e achá-la.

---

## Fontes

- Aula 04.0 — construção (SWEBOK: complexidade, mudança, verificação, reuso, padrões)
- [OWASP Top 10:2021](https://owasp.org/Top10/2021/) — A01, A03, A06
- OpenSSL Security Advisory, 07 Apr 2014 — CVE-2014-0160
- CVE-2021-44228 — Apache Log4j2
