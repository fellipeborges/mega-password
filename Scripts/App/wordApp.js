var app = new Vue({
    el: '#app',
    data: {
        wordsSource: ["PINO", "NOVA", "WOLVERINE", "WI-FI", "CHOCOLATE", "ARROZ", "OUTRA", "PRATO", "APARELHO", "PARIS", "ATACAR", "COBRANÇA", "CAMA", "MAIO", "CADARÇO", "ESCRITOR", "ADULTO", "NOME", "CHURRASCO", "FAVO", "LIMÃO", "MACA", "ENTERRADA", "BARACK", "LADO", "DEDO", "COELHINHO", "DIABO", "SEREIA", "ZUMBI", "CÍLIOS", "CHUÁ", "PRÓPOLIS", "GRUPO", "RÁ-TIM-BUM", "RONALDO", "JOSÉ", "VOCÊ", "ESMALTE", "ÓCULOS", "PLUTO", "SANTOS", "BAGUNÇA", "CANELA", "MÃO", "NAVE", "TIA", "PEQUENO", "FRANÇA", "CACIQUE", "RASTEJA", "E-MAIL", "BESOURO", "GIRASSOL", "CQC", "BARRICHELO", "TOKIO", "PSICÓLOGO", "DERROTA", "MURO", "FINA", "SENTAR", "AZARADO", "OBJETO", "COMIDA", "QUARENTA", "LEITE", "PALHA", "LINGUIÇA", "BIENAL", "NEGATIVO", "NARIZ", "TRAILER", "TURQUIA", "TRINTA", "ASSISTIR", "FEVEREIRO", "IDIOTA", "RECREIO", "BARBA", "POLÍTICA", "CATORZE", "CHAPEUZINHO", "SENHORA", "BALA", "VAGÃO", "MANHÃ", "CARNAVAL", "SEGUNDOS", "UNIVERSIDADE", "ENDEREÇO", "SOBRINO", "PAPAYA", "BANDA", "BRACELETE", "ENTRADA", "TELEFONE", "BONSAI", "MASSA", "CAIXA", "FERIADO", "PRÓPRIO", "NIGÉRIA", "LÂMPADA", "PAPEL", "POUCO", "LULA", "RASCUNHO", "CORINTHIANS", "WII", "DOUTOR", "HOLLYWOOD", "RICO", "METRÔ", "TECE", "POTE", "ZERO", "NÚMERO", "PORTA-MALAS", "JACA", "PRAÇA", "PASSADO", "CAPELA", "PERFUME", "DIA", "MINUTO", "CRUZEIRO", "TERCEIRO", "JULIETA", "LIVRO", "ANTIGO", "REGRA", "LIGAR", "PINGUIM", "DAMA", "JACARÉ", "ESPÁTULA", "TRANSATLÂNTICO", "GOLEIRO", "AQUÁRIO", "ELETRECIDADE", "TRIO", "PEIXE", "ESPADA", "JOGO", "CERVEJA", "DISFARCE", "MAR", "WINDOWS", "PIADA", "TRIPLO", "FILHO", "DOMÉSTICO", "ÁRVORE", "GANGORRA", "CURVA", "DESEMPREGADO", "VALOR", "ATLANTICO", "FRESCO", "AMARELO", "DIGITAR", "PEPSI", "PADARIA", "CHULÉ", "COLARINHO", "OVOS", "ENSINA", "CHROME", "FUTURO", "PISO", "FÁBRICA", "CINEMA", "LÍNGUA", "COSTELA", "TETO", "LONDRES", "CEGO", "NOTA", "PIANO", "TAMANHO", "GLOBO", "GOVERNADOR", "SEMANA", "APONTADOR", "BREU", "CAMINHÃO", "ZOOLÓGICO", "LEGENDÁRIOS", "COLHER", "ENTRAR", "CAMARGO", "ALGA", "LANGERIE", "VIAGEM", "REAL", "ESFINGE", "AVIÃO", "TRANSPARENTE", "ELÁSTICO", "SOMENTE", "ESPERTO", "NOVEMBRO", "SERVIDOR", "AJUDA", "EGITO", "AQUI", "GRAFITE", "PILOTO", "ANÉIS", "AGOSTO", "TABELA", "INTUIÇÃO", "PERTO", "CADEIA", "ACUMULAR", "QUADRO", "MÁSCARA", "ANO", "DOENÇA", "COBERTOR", "ÍNDIOS", "CALÇADA", "QUARTO", "CHIQUINHA", "PSIQUIATRA", "FOME", "BOTAFOGO", "ANALISTA", "QUEBRAR", "NOÉ", "NORA", "ESPÍRITA", "SUCO", "CRUZ", "OUTONO", "ESPÍRITO", "INTERFONE", "CRER", "SORTUDO", "PRIMAVERA", "SINO", "ANTES", "AR", "MINERAL", "COZINHA", "RECADO", "APRENDE", "CEARÁ", "PIRÂMIDES", "FRANCÊS", "DOMINGO", "CROCODILO", "EUROPA", "PESCOÇO", "UNHA", "ALICATE", "FACULDADE", "PRESENTE", "HERÓI", "JANTAR", "IGREJA", "MAGRO", "BOCA", "TELEVISÃO", "CERTO", "ESCURIDÃO", "FLAMENGO", "HOMEM", "LAR", "PAÍS", "CORREDOR", "TINTA", "FRENTE", "MICROONDAS", "FILHOS", "TULIPA", "POLICIAL", "TRÊS", "SEIOS", "SUCESSORA", "CREME", "PORCELANA", "DILMA", "ACENTO", "CRUCIFICADO", "LUTA", "UVA", "MADEIRA", "DEZENOVE", "PRAGA", "BRINCO", "VIOLETA", "BÍBLIA", "COBRA", "AZUL", "LÁPIS", "ESQUIMÓ", "CATARATA", "CESTO", "ENCANADOR", "PRESUNTO", "CORRENTE", "DOCE", "INDEPENDÊNCIA", "DEUS", "ÓRFÃO", "ATRAPALHADO", "FORMIGA", "EPIDEMIA", "JUIZ", "INSETO", "VEJA", "PARADA", "MOEDA", "DEVER", "SERROTE", "REVÓLVER", "VENCEDOR", "LIXA", "VENTO", "FELIZ", "MÊS", "SALDO", "PEIXES", "BICHO", "SÉRIO", "DEZ", "MACACO", "CAVALO", "ENFERMEIRA", "CONTA", "BATENTE", "MAIS", "CHEIRO", "BAMBOLÊ", "SARGITÁRIO", "EXPERIÊNCIA", "LIQUIDIFICADOR", "PERSTÍGIO", "VALETE", "REVISTA", "COPO", "SENHA", "BALANÇA", "LUCIANA", "IPAD", "VIOLÃO", "CARNEIRO", "ROCK", "VAZIO", "HIDRATANTE", "TÁXI", "COITO", "APPLE", "DOLLY", "PEÇONHA", "MELÃO", "XADREZ", "MALA", "PASTA", "MUDO", "HDMI", "BARBIE", "SOL", "NOVELA", "MACARRÃO", "RODAR", "TOBOÁGUA", "BANANA", "SILICONE", "CELULITE", "ARTILHEIRO", "JAMAICA", "SORTEVE", "COMPLETO", "CLÍNICA", "PÊNALTI", "APÊNDICE", "MILITAR", "MICKEY", "ÁSIA", "ÁS", "SAPATO", "BAILARINA", "ET", "TÁBUA", "MANIVELA", "MOTORISTA", "BADALO", "LOUSA", "BACON", "RIO", "COMPRAR", "BAHIA", "DOZE", "ROSTO", "CÃO", "ESCURO", "AVENIDA", "ARRANHAR", "PEDRA", "LEQUE", "FREIO", "GUARDA", "DANÇARINO", "PACIENTE", "ESCREVER", "ESTRADA", "AGORA", "BEIÇO", "ESPINHOS", "CACHORRO", "TITANIC", "SETEMBRO", "COMPLEMENTO", "ROXO", "ACRE", "FECHAR", "BOM", "TECLADO", "LINHAÇA", "BOMBRIL", "CHAVE", "OBEDECER", "REDE", "BLUETOOTH", "SONHO", "PINTAR", "SEMENTES", "BANCO", "PAI", "BEM", "LAMBER", "SALA", "RABO", "SUJO", "PAIXÃO", "EXTERIOR", "INFANTIL", "MERDA", "SETENTA", "SERINGA", "RODOVIA", "BARCO", "BÊBADO", "PORTÁTIL", "PÁSSARO", "ARENA", "LONGE", "NADADOR", "SONIC", "DEZESSETE", "ROSA", "POBRE", "MEDALHA", "BARALHO", "GASOLINA", "CHORAR", "SAMBA", "FOTO", "ANÃO", "ASSINATURA", "ASSASSINO", "AMAZONAS", "AUMENTAR", "BONÉ", "ESTRELA", "MORENO", "LOTERIA", "RUSH", "CESTA", "VERÃO", "BOTÃO", "COLO", "WILLY WONKA", "OSSO", "ACERTAR", "SARAMPO", "FLUORESCENTE", "FERRUGEM", "CARROS", "SUPER-HOMEM", "SINDICO", "NOITE", "VERDE", "ADVERSÁRIO", "TSUNAMI", "CUZCUZ", "FLAUTA", "OLIMPIADAS", "TECLA", "COMPETIR", "ESCOLA", "PREPARO", "CHAMADO", "TATUAGEM", "ÁGUA", "TOALHA", "ESTÚDIO", "PISTA", "SILÊNCIO", "POLÍTICO", "MOLE", "DIVINO", "RUGA", "SEGUNDA", "RISADA", "PACÍFICO", "DOCUMENTO", "PEGAR", "MORTADELA", "BOSTA", "GORDURA", "SOGRA", "FUNK", "MESTRE", "BURACO", "FACEBOOK", "CEGONHA", "PIMENTA", "COLORIDO", "DADO", "CRENTE", "ATENTADOS", "AXILA", "CERA", "BRANCO", "ATENTO", "SOZINHO", "ESPANHOL", "RESTAURANTE", "SHOW", "OURO", "CRISTA", "FORNECEDOR", "FOCINHO", "VERMELHO", "CHEIO", "MIOJO", "AREIA", "QUINTA", "HARRY POTTER", "CASQUINHA", "VACA", "MAMÃO", "TOQUE", "TEIA", "PRAZO", "BALANÇO", "DIGESTIVO", "TOMATE", "VULCÃO", "ZORRO", "OLFATO", "QUATRO", "PLANETA", "ASAS", "MEMÓRIA", "CARRO", "MARÇO", "SOLDADO", "CORCUNDA", "GIRAFA", "SANDUÍCHE", "CHILE", "COMPUTADOR", "OESTE", "CLARO", "FÁCIL", "NUCA", "BASQUETE", "ÁFRICA", "COLAR", "MENTIRA", "ESQUILO", "GALO", "PENDRIVE", "LOCAL", "SESSENTA", "FOGO", "NÃO", "ARGENTINA", "INSUPORTÁVEL", "HEREDITÁRIO", "APRESENTADORA", "DEFENSOR", "JOVEM", "GAUCHO", "CARIOCA", "PADEIRO", "LENTE", "NUNCA", "TIMÃO", "JIPE", "BRAGILHA", "CARTÃO", "PORTA", "CIRCUNFLEXO", "CORAJOSO", "VIÚVA", "MALAGUETA", "LINHA", "SAMU", "CAPA", "FÉRIAS", "POLÍCIA", "MONTANHA", "SATURNO", "AÇOUGUE", "EMAGRECER", "LÁBIOS", "COLCHÃO", "URSO", "BEBÊ", "CARROCINHA", "CONTAR", "CHÁ", "VOLUME", "JUSTIÇA", "SENADOR", "INGLÊS", "PROPOSTA", "LIXO", "PERSONALIDADE", "PORCO", "BATMAN", "LIMA", "NAVIO", "OCEANO", "MACHUCADO", "PROFESSOR", "PASTOR", "LOBO", "HUMILHAR", "BORBOLETA", "SUOR", "VÍDEO", "MOSQUITO", "ADEGA", "LIMOUSINE", "GRAMPO", "FAZENDA", "PÉTALAS", "JÓIA", "ZÍPER", "JUDAS", "LAGO", "FILME", "AMOR", "FUGIR", "PRETO", "NORDESTE", "PLANTA", "ESPORTE", "PERDIDO", "DANÇAR", "BURRO", "BONECA", "CRISTÃO", "VOLEI", "TATU", "DIETA", "PÔNEI", "AÇÚCAR", "CONGESTIONAMENTO", "GANHAR", "MOCHILA", "IGNORANTE", "SALGADO", "BLURAY", "DRAGÃO", "NÓ", "GREGORY", "MOCOTÓ", "ALHO", "NEVE", "IGUAL", "MISTURA", "AUXILIAR", "PERNAS", "ESCORREGADOR", "ESPANTALHO", "IDADE", "CORAL", "ABOBRINHA", "MERGULHO", "ATMOSFERA", "CAMELO", "TECO-TECO", "MARIMBONDO", "RÍGIDO", "SEGREDO", "MICROFONE", "SIGNO", "CULTO", "ROTINA", "TALCO", "QUENTE", "BALDE", "COR", "AMANHÃ", "ALFABETO", "CAPITAL", "VENDER", "COLMEIA", "PULMÃO", "BLOG", "PASSAGEIRO", "ERRADO", "ASA", "PONTE", "PENTE", "FALAR", "PRIMEIRO", "MORANGO", "EMPRESA", "PALMA", "INTERIOR", "JANELA", "CABRITO", "LENTO", "CRIAR", "CUTÍCULA", "GLEE", "VAMPETA", "VOAR", "VOZ", "GUIA", "GERENTE", "CINQUENTA", "CABELO", "SUL", "CORPO", "AMBIENTE", "POLAR", "FALSIDADE", "PEGA-PEGA", "CACO", "ÍCONE", "VERDADE", "RAMAL", "TANQUE", "MELHOR", "BARATA", "LUPA", "SERINGUEIRA", "HORA", "BODE", "AGULHA", "CHUPETA", "PERNA", "ÁTOMO", "ESTAÇÃO", "MÉXICO", "BANHEIRO", "ECO", "CHAVES", "DUNAS", "LUAU", "MONALISA", "INVERNO", "RAÇÃO", "FENÔMENO", "CIGARRO", "NOVENTA", "DECORAR", "ORIENTE", "SACOLA", "PORTÃO", "OPOSTO", "SASHIMI", "CORÇA", "VÁCUO", "COBRADOR", "BILHETERIA", "BELÉM", "CINDERELA", "CASTANHOLA", "SALVO", "ESTRADO", "GENTE", "GMAIL", "TEMPO", "ELFO", "AVENTURA", "CHINELO", "MUITO", "INFLAÇÃO", "BRIGA", "TRISTE", "COMPANHEIRA", "ROUSSEFF", "TERNO", "LARANJA", "CRENÇA", "MÃE", "VOLANTE", "PORTA-LUVAS", "FLOR", "VINHO", "UNIDADE", "LETRA", "PEDÁGIO", "BARATO", "CORTAR", "LOIRO", "IVETE", "TRIDENT", "FARMÁCIA", "JANTA", "SOFÁ", "POMBA", "AMPULHETA", "CARDEAL", "TIGRE", "BREGA", "RODOVIÁRIA", "TUDO", "PAQUERA", "CERTIDÃO", "MENOR", "FEIJÃO", "BARCELONA", "SONO", "DEZESSEIS", "SÁBADO", "FRUTA", "RUIM", "LUA", "RASGO", "MARIO", "MÚSICA", "TRÂNSITO", "CÉU", "MOTIVO", "QUERMESE", "SERJIPE", "ESCOVA", "COVARDE", "ACESSÓRIO", "MILHO", "AZEDA", "LUSTRE", "COLUNA", "CRIME", "PARTIR", "NOTEBOOK", "EIFEL", "BOLICHE", "CABO", "LOBISOMEN", "IMPLANTE", "SURDO", "BATERIA", "DISNEY", "LAÇO", "MÉDICO", "TOBOGÃ", "IPOD", "XBOX", "ÁRIES", "MARAVILHA", "FOLHAS", "PEDREIRO", "BANCA", "DEPOIS", "HOLOFOTE", "BRILHO", "LOÇÃO", "TORRE", "JULHO", "IOGURTE", "FECHADURA", "CENOURA", "EMPREGO", "RELÓGIO", "TENENTE", "CARDIOLOGISTA", "TALHER", "TIO", "BANDEIRA", "COURO", "LÁGRIMA", "CUPIDO", "TAFARREL", "SPRAY", "DEGRAUS", "CARNE", "ZEBRA", "ESFORÇO", "PÁ", "GELADEIRA", "ASSOPRAR", "CLIPS", "FOLDER", "ESQUERDA", "TEMPESTADE", "SEMPRE", "JARARACA", "BATATA", "BRANCA", "PINACOTECA", "DINHIERO", "CANADÁ", "PÊRA", "ROLETA", "SBT", "CHAMADA", "MÁQUINA", "PRIMO", "KINECT", "COLÉGIO", "AUSTRÁLIA", "ACORDO", "SUBIR", "PENA", "GRECIA", "SORTEIO", "BORRACHA", "DEPUTADO", "GRITAR", "MOTOR", "LESTE", "RATO", "PENSADOR", "CORNO", "LÓGICA", "INTERNET", "MACHO", "APEQUENAR", "CACHIMBO", "LOUÇA", "ANEL", "FERRAGEM", "BOLA", "MENINO", "DANETE", "BELISCÃO", "COMANDANTE", "BASE", "PRESIDENTE", "IPHONE", "BINGO", "CRUEL", "ANJO", "MAU", "SIMPSONS", "PROFESSORA", "CASAMENTO", "QUEIJO", "DETALHE", "BAR", "CANETA", "GRAMPEADOR", "DENTE", "TIME", "ECOSISTEMA", "ESPERA", "PLÁSTICO", "TREMER", "BAFO", "FUBÁ", "DENTES", "PENDURADO", "TEMEROSO", "FESTA", "BRAÇO", "HOTMAIL", "THOR", "VENENO", "TENDA", "ESQUINA", "SARGENTO", "PRÓXIMO", "INSPETOR", "RESPOSTA", "TOURO", "PEITO", "TEMPERO", "SENTIR", "DISCO", "LONTRA", "VAGABUNDO", "JAQUETA", "NOTÍCIA", "SAIR", "BARRACA", "COMPOSTA", "DIMINUIR", "LIBRA", "CHICLETE", "SANTO", "LADRÃO", "LENHA", "LÚCIFER", "BERLIM", "PONTO", "SAÍDA", "CAVIAR", "TREM", "COMPASSO", "PODEROSO", "TRIBO", "CLÁSSICO", "POLO", "DEUSA", "CONTABILIDADE", "JOELHO", "FUTEBOL", "DUENDE", "CELULAR", "LASER", "JATO", "ALPISTE", "RATINHO", "CHEFE", "QUARTA", "CÂMBIO", "TÊNIS", "CLUBE", "SOCIAL", "CONTROLE", "QUEM", "LIBERDADE", "DURO", "NU", "TERREMOTO", "ANIMAL", "TECIDO", "ALZHEIMER", "BEZERRO", "PÂNICO", "VIROSE", "GAROTA", "PRANCHA", "SALMOS", "VASO", "AMERICANO", "ÔNIBUS", "CHATA", "COXA", "CONSOANTE", "PASTO", "CÉLULA", "ADIVINHAR", "FAMÍLIA", "SUSHI", "CUTUCAR", "FUMAÇA", "YAGURTE", "TWITTER", "TREZE", "MARACUJÁ", "ARGILA", "BATOM", "IRMÃO", "GANHADOR", "PULSEIRA", "MEIA", "OTIMISTA", "MARCA", "ESCAROLA", "CARTA", "PAREDE", "DESASTRE", "GOOGLE", "CHAMPAGNE", "GIMENEZ", "NEYMAR", "GINÁSTICA", "LEMBRANÇA", "ARMÁRIO", "PODRE", "CIRCO", "RUA", "TERÇA", "GUGU", "DICIONÁRIO", "PIÃO", "MARIA", "PILHA", "FRALDA", "MATRIX", "JUNHO", "DEZEMBRO", "CRU", "MATOU", "CRISTAL", "GADO", "CAIM", "NARRADOR", "MANGA", "SOMBRA", "HORMONIO", "SEMELHANTE", "FRAJOLA", "TARÂNTULA", "EXCEL", "CANGURU", "GAROA", "VEM", "SEXTA", "FALSO", "RITMO", "PADRE", "PNEUMONIA", "SETA", "MEME", "COCA-COLA", "FERRAMENTA", "FENDA", "AZAR", "CORAÇÃO", "ÚLTIMO", "MAPA", "ROUPA", "LABAREDA", "PERUCA", "ALGEMA", "MATAR", "VISÃO", "PASSAR", "CADERNO", "CACHO", "SORTE", "MACUMBA", "TOMADA", "LUXURIA", "CABRA", "CPF", "SUVACO", "MENTA", "BEBADO", "ATUAL", "GEMA", "CHÃO", "LÍDER", "CIMENTO", "SAPATINHO", "MOISÉS", "VÊNUS", "ESQUELETO", "CNPJ", "CORTE", "LANCHE", "PELADO", "PREGO", "COQUEIRO", "RONCO", "CALÇA", "ORÉGANO", "PERIGO", "DETERGENTE", "REVOLTADO", "PESCA", "PROGRAMA", "MESA", "PHOTOSHOP", "PERNETA", "AVÓ", "GRANDE", "HARDWARE", "CASTOR", "ESTOMAGO", "PURÊ", "OUTUBRO", "PAJÉ", "ESCADA", "LCD", "GUERRA", "DECORAÇÃO", "DEMORA", "NUVEM", "PALHAÇO", "PELÉ", "DINOSSAURO", "PORRE", "MARROM", "RELATÓRIO", "CADEIRA", "ATARY", "VEGETAL", "LIÇÃO", "CARTEIRA", "GRAVIDEZ", "PATA", "FIM", "CHIQUEIRO", "PERSEGUE", "DESENHO", "FISCAL", "AÇÃO", "BOLACHA", "AGENDA", "MARCHA", "LAGARTIXA", "DINHEIRO", "SULFITE", "DUREX", "NATAL", "ROUPÃO", "OSCAR", "ATENÇÃO", "CINTO", "GARRAFA", "ROMEU", "RPG", "ÁRABE", "ABRIL", "VASCO", "AMIGO", "GORILA", "PALANQUE", "HOSPITAL", "VIVO", "ESPELHO", "BATEDEIRA", "ABEL", "ABACAXI", "AVE", "BEIJO", "ARACNÍDEO", "MOUSE", "DOR", "IMAGINÁRIO", "NERD", "LIVRE", "ALIMENTO", "PISAR", "LITORAL", "ÓDIO", "VIDRO", "ESPIGA", "MAGO", "BARRACO", "TESOURA", "ORELHA", "RAINHA", "PULA-PULA", "ULTRA", "ROMANCE", "BICO", "OUTRO", "MEL", "OVELHA", "VIOLA", "BIGODE", "UNIÃO", "SANGALO", "PALAVRA", "INÚTIL", "FERRO", "SERRA", "ATRÁS", "JESUS", "VAMPIRO", "PERU", "PIPOCA", "FERRÃO", "RETRATO", "MOLHO", "VELHO", "CHUVA", "CÍRCULO", "CRISE", "MIMAR", "ACIMA", "INDESTRUTÍVEL", "ESCONDE-ESCONDE", "POSTIÇO", "MARGARIDA", "GAVETEIRO", "TIRAR", "CD", "PROGRAMADOR", "CANCELAR", "BROCA", "PONTUAÇÃO", "BARRA", "NINJA", "DOIS", "SOBRINHO", "CAVALHEIRO", "NAPOLITANO", "PLAYSTATION", "ENERGIA", "FIO", "MADRUGADA", "SOLTEIRO", "GRADE", "NORTE", "RÚCULA", "CHEQUE", "PAZ", "GRAVATA", "DORMIR", "BOLSA", "LINDA", "CÂMERA", "MIL", "VAI", "VEZ", "PRESA", "PREFEITO", "QUADRA", "DIFÍCIL", "VESTIDO", "CAMUNDONGO", "FLUMINENSE", "PRÍNCIPE", "CASA", "PERDER", "LUCRO", "ALGODÃO", "MEGAFONE", "ARANHA", "DIÁRIO", "BROCHE", "BOIAR", "TARDE", "LOUCA", "UM", "MAL", "ROBIN", "LUZ", "MELANCIA", "PACOTE", "CIDADE", "AGRESSIVO", "PEDRO", "TARTARUGA", "MARTELO", "DUPLA", "AGUDO", "RÁDIO", "SOFTWARE", "MUNDO", "VOMITAR", "POSITIVO", "ALMOÇAR", "MSN", "TRAVESSEIRO", "DEFINIÇÃO", "FOGUETE", "CRESCER", "GRÃOS", "SELEÇÃO", "FEIO", "PESTE", "LIGA", "FONTE", "LAMPIÃO", "VARA", "CRIAÇÃO", "CLIQUE", "COELHO", "PROFISSÃO", "NETO", "CANO", "DVD", "PARTIDA", "DIREITA", "ALUNO", "MARIDO", "TESTAMENTO", "HEBE", "ONZE", "MIAR", "GATO", "ICQ", "SOBRENOME", "CANSADO", "INTERRUPTOR", "CHATO", "GODZILLA", "AVÔ", "HULK", "CASADO", "BARRIGA", "CONVESAR", "CUIDA", "ABRIR", "VIDA", "RETROVISOR", "PRISÃO", "UFC", "DASLU", "MANDAMENTO", "OBAMA", "MORTE", "CARVÃO", "REPETIR", "AMAPÁ", "REI", "TRAQUINAS", "PESSOAL", "CAFÉ", "REMÉDIO", "DONATELLA", "PANO", "BRASIL", "GUARANÁ", "PÉ", "VINTE", "LUGAR", "EQUILIBRISTA", "PIOR", "COMBATE", "PERDA", "LATIR", "LOMBO", "GALINHA", "CHOQUE", "CEBOLA", "LUVA", "CANTORA", "RECINTO", "ABELHA", "LENDA", "QUADRINHO", "POUCA", "QUADRADO", "VEREADOR", "SUJEIRA", "CEM", "OITENTA", "VACILO", "DÓ", "CRISTO", "LENÇO", "ESCORPIÃO", "MULHER", "RÉGUA", "CUICA", "ACENDER", "JANEIRO", "CAMISA", "PÁSCOA", "FOFINHO", "SENTIDO", "AUTOMÁTICO", "FRANGO", "DEZOITO", "BOMBEIRO", "VOGAL", "RUIVO", "CUMPLICE", "PRATA", "LEI", "JOGADOR", "MONITOR", "ESTOQUISTA", "COPAS", "JAPÃO", "INVASÃO", "SAUDADE", "ROLIÇO", "CLIENTE", "JORNAL", "TRIPA", "DOMADOR", "BRIGADEIRO", "JEGUE", "PESQUISA", "AMIZADE", "CRÉDITO", "GRIFE", "XAMPU", "GESSO", "LATA", "JUMENTO", "RÁPIDO", "BUNDA", "CALÇADO", "QUINZE", "MÍMICA", "ARQUITETO", "CATÓLICO", "KIKO", "TESOURO", "PALMEIRAS", "FRUTO", "MENTE", "BOI", "NOCAUTE", "FLECHA", "SUBTERRÂNEO", "CRIANÇA", "SOLTO", "ACIDENTE", "LISTRA", "XUXA", "PESSOA", "SALTO", "RETO", "CHINA", "GORDO", "LEÃO", "CÓDIGO"],
        words: [],
        chrono: {
            secondsLeft: null,
            state: "off", //on/off/paused
            interval: null
        },
        currentWord: {
            index: -1,
            word: ''
        },
        currentMatch: {
            state: "off",
            corrects: 0,
            skips: 0,
            score: 0
        },
        audio: {
            on: false,
            files: [
                "./sounds/start.mp3",
                "./sounds/restart.mp3",
                "./sounds/correct.mp3",
                "./sounds/incorrect.mp3",
                "./sounds/ending.mp3",
                "./sounds/pause.mp3",
                "./sounds/resume.mp3",
                "./sounds/end.mp3"
            ]
        },
        constants: {
            audio: {
                IDX_START: 0,
                IDX_RESTART: 1,
                IDX_CORRECT: 2,
                IDX_INCORRECT: 3,
                IDX_ENDING: 4,
                IDX_PAUSE: 5,
                IDX_RESUME: 6,
                IDX_END: 7
            },
            chrono: {
                DEFAULT_TIME_SECONDS: 60
            }
        },
        error: {
            code: 200,
            method: '',
            message: ''
        }
    },

    mounted() {
        this.initPreload();
    },
    destroyed: function () {
        clearInterval(this.chrono.interval)
    },

    computed: {
        timeStamp: function () {
            var secLeft = this.chrono.secondsLeft;
            if (secLeft != null) {
                var date = new Date(null);
                date.setSeconds(secLeft);
                return date.toISOString().substr(11, 8);
            }
        },
        audioButtonLabel: function () {
            if (this.audio.on)
                return "Desligar";
            else
                return "Ligar";
        }
    },

    methods: {
        //Match functions
        startMatch() {
            var vm = this;
            //vm.loadNextWords(true);
            vm.currentMatch.state = "on";
            vm.currentMatch.corrects = 0;
            vm.currentMatch.skips = 0;
            vm.currentMatch.score = 0;
            vm.showNextWord();
            vm.chronoStart();
            vm.playSound(vm.constants.audio.IDX_START);
        },
        resetMatch() {
            var vm = this;
            if (vm.currentMatch.state != 'on') { return; }
            vm.currentMatch.state = "off";
            vm.currentMatch.corrects = 0;
            vm.currentMatch.skips = 0;
            vm.currentMatch.score = 0;
        },
        endMatch() {
            var vm = this;
            clearInterval(this.chrono.interval);
            vm.currentMatch.state = "ended";
            vm.playSound(vm.constants.audio.IDX_END);
        },

        //Word functions
        loadNextWords() {
            var vm = this;
            vm.currentWord.word = '';
            vm.currentWord.index = -1;
            vm.words = vm.shuffleArray(vm.wordsSource);
        },
        shuffleArray(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        },
        setUserAnswer(correct) {
            var vm = this;
            if (vm.currentMatch.state == "on" && vm.chrono.state == "on") {
                if (correct) {
                    vm.currentMatch.corrects += 1;
                    vm.playSound(vm.constants.audio.IDX_CORRECT);
                }
                else {
                    vm.currentMatch.skips += 1;
                    vm.playSound(vm.constants.audio.IDX_INCORRECT);
                }
                vm.currentMatch.score = (vm.currentMatch.corrects - vm.currentMatch.skips);
                vm.showNextWord();
            }
        },
        showNextWord: function () {
            var vm = this;

            //if it's the first time or it is the latest position in the array
            if (vm.currentWord.index == -1 || vm.currentWord.index+1 == vm.words.length) {
                this.loadNextWords();
            }
            vm.currentWord.index = vm.currentWord.index + 1;
            vm.currentWord.word = vm.words[vm.currentWord.index];
        },

        //Chronometer functions
        chronoStart: function () {
            clearInterval(this.chrono.interval);
            this.chrono.state = "on";
            this.chrono.secondsLeft = this.constants.chrono.DEFAULT_TIME_SECONDS;
            this.chrono.interval = setInterval(this.chronoDecreaseTime, 1000);
        },
        chronoPause: function () {
            this.chrono.state = "paused";
            clearInterval(this.chrono.interval);
            this.playSound(this.constants.audio.IDX_PAUSE)
        },
        chronoResume: function () {
            this.chrono.state = "on";
            this.chrono.interval = setInterval(this.chronoDecreaseTime, 1000);
            this.playSound(this.constants.audio.IDX_RESUME)
        },
        chronoDecreaseTime: function () {
            this.chrono.secondsLeft -= 1;
            if (this.chrono.secondsLeft == 8) {
                this.playSound(this.constants.audio.IDX_ENDING);
            }
            if (this.chrono.secondsLeft <= 0) {
                this.endMatch();
            }
        },

        //sound
        initPreload: function () {
            for (var i in this.audio.files) {
                this.preloadAudio(this.audio.files[i]);
            }
        },
        preloadAudio: function (url) {
            var audio = new Audio();
            audio.addEventListener('canplaythrough', null, false); //null: callback
            audio.src = url;
        },
        playSound: function (index) {
            if (this.audio.on == true) {
                var audio = new Audio(this.audio.files[index]);
                audio.play();
            }
        },

        //Error handling functions
        setHttpError(response, method) {
            if (response != null) {
                var vm = this;
                vm.error.code = response.status;
                vm.error.method = method;
                vm.error.message = response.statusText;
                if (vm.error.code != 200) {
                    console.log("Error in method: " + vm.error.method + "\nCode: " + vm.error.code + "\nMessage: " + vm.error.message);
                }
            }
        }
    }
});