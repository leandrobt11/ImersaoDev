const dados = [
    {
        nome: "The Witcher 3: Wild Hunt",
        descricao: "Um RPG de mundo aberto épico ambientado em um universo de fantasia medieval, onde você controla Geralt de Rívia, um bruxo caçador de monstros.",
        link: "https://pt.wikipedia.org/wiki/The_Witcher_3:_Wild_Hunt",
        jogar:"https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
        tags: "monstros GOTY"
    },

    {
        nome: "Red Dead Redemption 2",
        descricao: "Um jogo de mundo aberto ambientado no Velho Oeste americano, que narra a história de Arthur Morgan, um fora da lei que precisa lidar com as mudanças no mundo ao seu redor.",
        link: "https://pt.wikipedia.org/wiki/Red_Dead_Redemption_2",
        jogar:"https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
        tags:"rockstar Arthur"
    },

    {
        nome: "Cyberpunk 2077",
        descricao: "Um RPG de mundo aberto ambientado em um futuro distópico, onde você assume o papel de V, um mercenário que busca a imortalidade.",
        link: "https://pt.wikipedia.org/wiki/Cyberpunk_2077",
        jogar: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
        tags: "V Escolhas KeanuRevees"
    },
    
    {
        nome: "Black Myth: Wukong",
        descricao: "Um RPG de ação inspirado na mitologia chinesa. Você é o Predestinado e tem a responsabilidade de encarar os desafios e as maravilhas do mundo para desvendar a verdade obscura por trás de uma lenda gloriosa do passado.",
        link: "https://pt.wikipedia.org/wiki/Black_Myth:_Wukong",
        jogar: "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
        tags: "Macaco china SonGoku "
    },

    {
        nome: "God of War",
        descricao: "Uma jornada épica de Kratos e seu filho Atreus pelos reinos nórdicos, enfrentando deuses e criaturas mitológicas.",
        link: "https://pt.wikipedia.org/wiki/God_of_War_(2018)",
        jogar: "https://store.steampowered.com/app/1593500/God_of_War/",
        tags: "mitologia Kratos Atreus"
    },
    
    {
        nome: "Elden Ring",
        descricao: "Um RPG de ação de mundo aberto ambientado nas Terras Intermédias, onde o jogador assume o papel de um exilado buscando restaurar o Elden Ring.",
        link: "https://pt.wikipedia.org/wiki/Elden_Ring",
        jogar: "https://store.steampowered.com/app/1245620/Elden_Ring/",
        tags: "Souls RPG ação"
    },
    
    {
        nome: "Horizon Zero Dawn",
        descricao: "Um jogo de ação em um mundo pós-apocalíptico dominado por máquinas, onde a caçadora Aloy busca descobrir sua origem.",
        link: "https://pt.wikipedia.org/wiki/Horizon_Zero_Dawn",
        jogar: "https://store.steampowered.com/app/1151640/Horizon_Zero_Dawn_Complete_Edition/",
        tags: "futuro Aloy máquinas"
    },
    
    {
        nome: "The Legend of Zelda: Breath of the Wild",
        descricao: "Um jogo de aventura de mundo aberto em que Link precisa explorar Hyrule para salvar o reino da destruição pelas mãos de Calamity Ganon.",
        link: "https://pt.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild",
        jogar: "https://www.nintendo.com/store/products/the-legend-of-zelda-breath-of-the-wild-switch/",
        tags: "aventura Link Hyrule"
    },
    
    {
        nome: "Final Fantasy VII Remake",
        descricao: "Uma releitura moderna do clássico RPG, onde Cloud Strife e seu grupo tentam derrubar a corporação Shinra enquanto enfrentam um inimigo misterioso.",
        link: "https://pt.wikipedia.org/wiki/Final_Fantasy_VII_Remake",
        jogar: "https://store.steampowered.com/app/1462040/FINAL_FANTASY_VII_REMAKE_INTERGRADE/",
        tags: "Cloud Shinra"
    },
    
    {
        nome: "Assassin's Creed Valhalla",
        descricao: "A história de Eivor, um guerreiro viking que se aventura pela Inglaterra, fundando assentamentos e enfrentando os saxões.",
        link: "https://pt.wikipedia.org/wiki/Assassin's_Creed_Valhalla",
        jogar: "https://store.steampowered.com/app/1233500/Assassins_Creed_Valhalla/",
        tags: "viking história mundoaberto"
    },

    {
        nome: "Dark Souls III",
        descricao: "Um RPG de ação desafiador, ambientado em um mundo sombrio e cheio de inimigos poderosos. O jogador assume o papel de um guerreiro que deve sobreviver às adversidades.",
        link: "https://pt.wikipedia.org/wiki/Dark_Souls_III",
        jogar: "https://store.steampowered.com/app/374320/DARK_SOULS_III/",
        tags: "desafio Souls combate"
    },
    
    {
        nome: "The Elder Scrolls V: Skyrim",
        descricao: "Um RPG de mundo aberto que se passa na terra de Skyrim, onde o jogador é o Dovahkiin, destinado a derrotar o dragão Alduin e salvar o mundo.",
        link: "https://pt.wikipedia.org/wiki/The_Elder_Scrolls_V:_Skyrim",
        jogar: "https://store.steampowered.com/app/72850/The_Elder_Scrolls_V_Skyrim/",
        tags: "dragões mundoaberto"
    },
    
    {
        nome: "Ghost of Tsushima",
        descricao: "Um jogo de ação e aventura que segue Jin Sakai, um samurai em uma jornada para proteger o Japão da invasão mongol.",
        link: "https://pt.wikipedia.org/wiki/Ghost_of_Tsushima",
        jogar: "https://www.playstation.com/pt-br/games/ghost-of-tsushima/",
        tags: "samurai Japão mongóis"
    },
    
    {
        nome: "Hades",
        descricao: "Um rogue-like de ação em que você joga como Zagreus, filho de Hades, em uma tentativa de escapar do submundo grego.",
        link: "https://pt.wikipedia.org/wiki/Hades_(jogo_eletr%C3%B4nico)",
        jogar: "https://store.steampowered.com/app/1145360/Hades/",
        tags: "roguelike mitologia ação"
    },
    
    {
        nome: "Sekiro: Shadows Die Twice",
        descricao: "Um jogo de ação focado em combate, ambientado no Japão feudal. Você joga como Sekiro, um guerreiro que busca vingança e recuperação da honra.",
        link: "https://pt.wikipedia.org/wiki/Sekiro:_Shadows_Die_Twice",
        jogar: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/",
        tags: "samurai ninjas combate"
    },
    
    {
        nome: "Bloodborne",
        descricao: "Um RPG de ação sombrio, ambientado na cidade gótica de Yharnam, onde o jogador deve enfrentar criaturas monstruosas e desvendar segredos antigos.",
        link: "https://pt.wikipedia.org/wiki/Bloodborne",
        jogar: "https://store.playstation.com/en-us/product/UP9000-CUSA00900_00-BLOODBORNE000000/",
        tags: "gótico horror combate"
    },
    
    {
        nome: "The Last of Us Part II",
        descricao: "Uma história intensa de sobrevivência em um mundo pós-apocalíptico, onde Ellie busca vingança após um evento traumático.",
        link: "https://pt.wikipedia.org/wiki/The_Last_of_Us_Part_II",
        jogar: "https://www.playstation.com/pt-br/games/the-last-of-us-part-ii/",
        tags: "zumbis sobrevivência Ellie"
    },
    
    {
        nome: "Death Stranding",
        descricao: "Um jogo de ação e exploração em um futuro distópico, onde o jogador controla Sam Porter Bridges, que deve reconectar as cidades fragmentadas dos EUA.",
        link: "https://pt.wikipedia.org/wiki/Death_Stranding",
        jogar: "https://store.steampowered.com/app/1190460/DEATH_STRANDING/",
        tags: "futuro exploração Kojima"
    }
    
]