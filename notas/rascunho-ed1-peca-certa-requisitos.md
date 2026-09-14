# Rascunho — ED 1º bim: requisitos Peça Certa

**Prazo:** postar no Teams até **21/09/2026** (um integrante do grupo; nomes no arquivo)  
**Fonte:** `notas/atividade pratica - requisitos Peca Certa.pdf` + enunciado em `material/estudos dirigidos - 1o bim - engenharia software 2026-2.pdf`  
**Critério de qualidade:** aula 3.1 (não ambíguo, verificável, determinístico, rastreável, correto)

Colunas pedidas: **Código** · **Descrição (+ regra de negócio)** · **Ator** · **Tipo (F / RNF + FURPS+)**

> Rascunho para o grupo revisar — não é a entrega final.

---

## Requisitos funcionais (RF)

| Código | Descrição (com regra de negócio) | Ator | Tipo |
|--------|----------------------------------|------|------|
| RF001 | O sistema deve manter cadastro de produtos com código, código de barras, nome, descrição, categoria, marca e quantidade atual em estoque (CRUD). | Estoquista / Administrador | F — Functionality |
| RF002 | O sistema deve registrar movimentação de estoque do tipo **Entrada**, acrescentando a quantidade informada à quantidade atual do produto. | Estoquista | F — Functionality |
| RF003 | O sistema deve registrar movimentação de estoque do tipo **Saída**, subtraindo a quantidade informada da quantidade atual do produto, desde que a quantidade atual seja suficiente. | Estoquista / Atendente | F — Functionality |
| RF004 | O sistema deve registrar movimentação de estoque do tipo **Perda**, subtraindo a quantidade estragada da quantidade atual do produto. | Estoquista | F — Functionality |
| RF005 | O sistema deve registrar movimentação de estoque do tipo **Troca**, sem alterar o saldo, registrando a entrada e a saída correspondentes. | Estoquista | F — Functionality |
| RF006 | O atendente identificado no sistema deve localizar produto por código, nome (ou parte do nome), categoria ou marca. | Atendente | F — Functionality |
| RF007 | O sistema deve manter cadastro de cliente com dados básicos de identificação e contatos (CRUD). | Atendente | F — Functionality |
| RF008 | O sistema deve localizar cliente cadastrado pelo nome ou parte do nome. | Atendente | F — Functionality |
| RF009 | Ao confirmar a compra, o sistema deve efetivar a venda, dar baixa dos produtos no estoque e emitir a nota fiscal. | Atendente | F — Functionality |
| RF010 | O sistema deve permitir incluir mais de um produto na mesma nota fiscal de uma venda. | Atendente / Cliente | F — Functionality |
| RF011 | Na finalização da venda, o sistema deve registrar a forma de pagamento como uma das opções: à vista (débito, dinheiro ou Pix); a prazo em 3 vezes no cartão; ou a prazo no boleto. | Atendente | F — Functionality |
| RF012 | O sistema deve permitir venda a prazo no boleto **somente** se o cliente for Pessoa Jurídica **e** o gerente da loja autorizar a operação. | Atendente / Gerente | F — Functionality (+ regra de negócio) |
| RF013 | O cliente deve poder consultar o histórico de compras realizadas na loja. | Cliente | F — Functionality |
| RF014 | O sistema deve emitir orçamento de produto sem efetivar baixa de estoque nem nota fiscal, quando o cliente solicitar apenas orçamento. | Atendente / Cliente | F — Functionality |

---

## Requisitos não-funcionais (RNF) — FURPS+

| Código | Descrição | Ator / stakeholder | Tipo FURPS+ |
|--------|-----------|--------------------|-------------|
| RNF001 | O sistema deve ser web e operar no parque atual da empresa: SO Windows e navegador Google Chrome. | TI / Usuários | + Implementação / Portabilidade |
| RNF002 | Todas as janelas do sistema devem exibir a logo da PeçaCerta. | Marketing / Usuários | U — Usability (+ Interface) |
| RNF003 | O sistema deve oferecer help online para auxiliar vendedores na transição e no treinamento de novos vendedores. | Vendedores / RH | U — Usability (Help) |
| RNF004 | A empresa deve dispor de manual impresso do sistema para consulta. | Vendedores / Treinamento | U — Usability (documentação) / + Design |
| RNF005 | O sistema deve executar rotina automatizada de backup diário da base de dados em nuvem. | TI | R — Reliability / S — Supportability |
| RNF006 | A solução deve permitir, em versões futuras, implantação de e-commerce (arquitetura preparada para evolução web). | Negócio / TI | S — Supportability (escalabilidade/adaptabilidade) |
| RNF007 | O atendimento automatizado deve priorizar rapidez, segurança e comodidade na compra (objetivos de qualidade do negócio). | Cliente / Direção | U / R — detalhar em métricas na versão final do grupo |

---

## Pendências para o grupo fechar

- [ ] Completar/ajustar códigos e nomes dos integrantes  
- [ ] Quebrar RNF007 em requisitos **verificáveis** (números de tempo, disponibilidade etc.)  
- [ ] Revisar ambiguidade (aula 3.1) — pronomes, “rápido”, “seguro”  
- [ ] Conferir se faltou RF de autenticação do atendente (“atendente identificado no sistema”)  
- [ ] Um integrante posta no Teams até 21/09
