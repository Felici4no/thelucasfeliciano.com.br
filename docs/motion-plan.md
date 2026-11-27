# Motion studies — direção criativa e plano de evolução

A página é um arquivo de uma prática criativa, não quatro portfolios isolados. Cada motion deve expressar uma maneira de perceber e fazer, conduzindo o visitante ao trabalho real que aparece logo depois. A imagem da infância, o vermelho, o papel e a tipografia editorial continuam sendo a identidade principal.

## Arquitetura dos motions

Cada estudo tem seu próprio componente SVG e CSS, em `src/components/practice/motions/`. O componente compartilhado `MotionPlate.tsx` gerencia a moldura, legendas, entrada na área visível, replay e a preferência por movimento reduzido.

| Ordem | Seção | Componente | Arquivo de movimento |
| --- | --- | --- | --- |
| 01 | Space | `space/SpaceArt.tsx` | `space/space.module.css` |
| 02 | Expression | `expression/ExpressionArt.tsx` | `expression/expression.module.css` |
| 03 | Sound | `sound/SoundArt.tsx` | `sound/sound.module.css` |
| 04 | Technology | `technology/TechnologyArt.tsx` | `technology/technology.module.css` |

A separação inicial preserva a composição e os tempos atuais. As propostas abaixo são próximas iterações, não alterações já implementadas.

## 01 / Space — do território ao encontro

**Conexão:** introduzir a investigação em Paraisópolis e encaminhar o olhar ao Complexo Berbela.

- 0–0,8 s: linhas finas, caminhos e pontos de referência sugerem a leitura do território.
- 0,8–2 s: as camadas se articulam, indicando relações entre vazios, percursos e volumes.
- 2–3,5 s: destacar um ponto de encontro; a composição se estabiliza e a legenda conduz ao estudo do centro cultural.
- Paleta: azul profundo, traços amarelos e vermelho no ponto de encontro.
- Material futuro: croquis, planta ou maquete real, quando disponível. Não apresentar a abstração atual como desenho do projeto.
- Critério: o motion explica a passagem da cidade ao espaço coletivo, sem parecer uma abertura genérica de arquitetura.

## 02 / Expression — corpo, gesto e presença

**Conexão:** aproximar a fotografia de pintura corporal da experiência de teatro e criação coletiva.

- 0–0,7 s: um gesto gráfico deixa vestígios sobre o fundo vermelho.
- 0,7–2,3 s: camadas de linhas orgânicas e marcas se encontram, como movimentos em cena.
- 2,3–3,5 s: repouso com uma forma que ecoa a pintura azul da fotografia seguinte.
- Paleta: vermelho, cobalto e amarelo como acento, com textura de impressão.
- Material futuro: explorar a fotografia enviada como referência direta; usar apenas acervo próprio ou autorizado, sem reproduzir as artes de referência.
- Critério: o movimento comunica expressividade e presença, não apenas ornamentação.

## 03 / Sound — do gesto musical ao arquivo

**Conexão:** as experiências com violino, piano e composições; orientar para o arquivo de gravações.

- 0–0,8 s: um traço aparece como gesto de arco.
- 0,8–2,5 s: pulsos, pausas e sobreposições criam uma breve partitura visual.
- 2,5–3,5 s: o ritmo repousa, abrindo espaço para os registros musicais.
- Paleta: vermelho, azul e papel, com detalhes amarelos.
- Material futuro: se Lucas escolher uma gravação, estudar a visualização de sua dinâmica real. O estudo inicial é visual, não uma análise de áudio.
- Critério: nenhuma reprodução automática, nenhuma interferência na leitura; o áudio exige gesto explícito.

## 04 / Technology — de conexões a projetos

**Conexão:** a bancada de eletrônica, o processo de prototipagem e o índice de software.

- 0–0,8 s: conexões surgem como componentes em uma bancada.
- 0,8–2,3 s: um sinal percorre circuitos, mostrando relação entre entrada, processamento e resposta.
- 2,3–3,5 s: o sistema se estabiliza, orientando o olhar para os projetos.
- Paleta: azul profundo, amarelo e um verde ácido localizado, mantendo o vermelho como assinatura do site.
- Material futuro: relacionar o diagrama a um experimento real do arquivo; evitar simular funcionalidades não implementadas.
- Critério: a animação explica o ato de construir e experimentar, em vez de um efeito decorativo de programação.

## Método de trabalho — um motion por vez

1. Definir o significado, o trabalho real de referência e a forma final estática.
2. Fazer um storyboard curto (três quadros), com transição para o conteúdo seguinte.
3. Implementar apenas o componente e CSS correspondentes, com mudanças na seção somente quando necessárias.
4. Revisar em preview desktop e mobile com Lucas, incluindo a leitura da página inteira.
5. Aprovar, publicar e começar o próximo motion.

**Regras comuns:** entrada por visibilidade, replay opcional, sem loops contínuos ou som automático, estado final legível, suporte a movimento reduzido, navegação por teclado e sem deslocamento inesperado de layout. Os 3–4 segundos são uma referência, não uma obrigação de tornar todos os estudos idênticos.

**Prioridade:** Space → Expression → Sound → Technology. Manter a ordem editorial da página; cada área tem seu próprio ritmo.
