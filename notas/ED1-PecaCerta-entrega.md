# Estudo Dirigido 1º bimestre — Peça Certa (ENTREGA)

**Disciplina:** Engenharia de Software — Prof.ª Patricia Rucker de Bassi  
**Etapa 2 do ED:** tabela de requisitos do estudo de caso PeçaCerta Auto Peças  
**Prazo Teams:** **21/09/2026** · um integrante posta · incluir nomes do grupo  

**Colunas:** Código | Descrição (com regra de negócio) | Ator | Tipo (F / RNF + FURPS+)

> Versão de entrega (requisitos sem ambiguidade; RNF verificáveis). Ajuste só os **nomes do grupo** antes de postar.

**Integrantes:** _[preencher]_ · _[preencher]_ · _[preencher]_

---

## Requisitos funcionais

| Código | Descrição (incluindo regra de negócio) | Ator | Tipo |
|--------|----------------------------------------|------|------|
| RF001 | O sistema deve permitir cadastrar, consultar, alterar e excluir produto, com os campos: código, código de barras, nome, descrição, categoria, marca e quantidade atual em estoque. | Administrador / Estoquista | F — Functionality |
| RF002 | O sistema deve registrar movimentação de estoque do tipo Entrada, somando a quantidade informada à quantidade atual do produto. | Estoquista | F — Functionality |
| RF003 | O sistema deve registrar movimentação de estoque do tipo Saída, subtraindo a quantidade informada da quantidade atual **somente se** a quantidade atual for maior ou igual à quantidade da saída. | Estoquista / Atendente | F — Functionality |
| RF004 | O sistema deve registrar movimentação de estoque do tipo Perda, subtraindo a quantidade estragada da quantidade atual do produto. | Estoquista | F — Functionality |
| RF005 | O sistema deve registrar movimentação de estoque do tipo Troca sem alterar o saldo do produto, registrando a entrada e a saída correspondentes. | Estoquista | F — Functionality |
| RF006 | O sistema deve permitir que o atendente autenticado localize produto por código exato, nome (ou parte do nome), categoria ou marca. | Atendente | F — Functionality |
| RF007 | O sistema deve permitir cadastrar, consultar, alterar e excluir cliente com dados básicos de identificação e contatos. | Atendente | F — Functionality |
| RF008 | O sistema deve localizar cliente cadastrado pelo nome ou parte do nome. | Atendente | F — Functionality |
| RF009 | Ao confirmar a compra, o sistema deve efetivar a venda, reduzir do estoque a quantidade de cada produto vendido e emitir a nota fiscal. | Atendente | F — Functionality |
| RF010 | O sistema deve permitir incluir dois ou mais produtos na mesma nota fiscal de uma única venda. | Atendente | F — Functionality |
| RF011 | Na finalização da venda, o sistema deve registrar exatamente uma forma de pagamento entre: à vista (débito, dinheiro ou Pix); a prazo em 3 vezes no cartão; ou a prazo no boleto. | Atendente | F — Functionality |
| RF012 | O sistema deve permitir venda a prazo no boleto **somente se** o cliente for Pessoa Jurídica **e** o gerente da loja autorizar a operação no sistema. | Atendente / Gerente | F — Functionality |
| RF013 | O sistema deve permitir que o cliente consulte o histórico de compras já realizadas na loja. | Cliente | F — Functionality |
| RF014 | Quando o cliente solicitar apenas orçamento, o sistema deve emitir o orçamento **sem** reduzir estoque e **sem** emitir nota fiscal. | Atendente / Cliente | F — Functionality |
| RF015 | O sistema deve autenticar o atendente antes de registrar venda, orçamento ou movimentação de estoque (atendente identificado na operação). | Atendente | F — Functionality |

## Requisitos não-funcionais (FURPS+)

| Código | Descrição | Ator / stakeholder | Tipo FURPS+ |
|--------|-----------|--------------------|-------------|
| RNF001 | O sistema deve ser aplicação web executável no SO Windows com navegador Google Chrome nas máquinas atuais da loja. | TI | + Implementação |
| RNF002 | Todas as telas do sistema devem exibir a logo da PeçaCerta. | Marketing | U — Usability / + Interface |
| RNF003 | O sistema deve disponibilizar help online acessível a partir do menu principal para apoiar vendedores na transição e no treinamento. | Vendedores | U — Usability (Help) |
| RNF004 | Deve existir manual impresso do sistema para consulta pelos vendedores. | Treinamento | U — Usability (documentação) |
| RNF005 | O sistema deve executar backup automatizado da base de dados em nuvem **uma vez a cada 24 horas**. | TI | R — Reliability |
| RNF006 | A arquitetura deve ser web, permitindo evolução futura para e-commerce sem reescrita completa do núcleo de cadastros. | Negócio / TI | S — Supportability |
| RNF007 | Em condições normais de rede local, a busca de produto por código deve retornar o resultado em no máximo **3 segundos**. | Atendente / TI | P — Performance |
| RNF008 | O acesso às funções de venda e estoque deve exigir autenticação; usuários não autenticados não devem registrar movimentações. | TI / Gerente | R — Reliability (segurança) |

---

## Observações para o post no Teams

1. Copiar esta tabela para Word/Excel (ou usar o `.docx` gerado em `notas/ED1-PecaCerta-entrega.docx`).
2. Preencher os nomes dos integrantes no cabeçalho.
3. Um integrante posta em **Tarefas** até **21/09/2026**.
4. Etapa 1 (Padlet) já foi em 24/08 — manter registro se o professor pedir o ED completo.
