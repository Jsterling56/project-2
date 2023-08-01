const { pokemon } = require('../models')

const pokemonData = [
    {
        "id": "0252", 
        "primary_type": "4",
        "pokemon_name": "Treecko"
    },
    {
        "id": "0253",
        "primary_type": "4",
        "pokemon_name": "Grovyle"
    },
    {
        "id": "0254",
        "primary_type": "4",
        "pokemon_name": "Sceptile"
    },
    {
        "id": "0255",
        "primary_type": "1",
        "pokemon_name": "Torchic"
    },
    {
        "id": "0256",
        "primary_type": "1",
        "secondary_type": "6",
        "pokemon_name": "Combusken"
    },
    {
        "id": "0257",
        "pokemon_name": "Blaziken"
    },
    {
        "id": "0258",
        "pokemon_name": "Mudkip"
    },
    {
        "id": "0259",
        "pokemon_name": "Marshtomp"
    },
    {
        "id": "0260",
        "pokemon_name": "Swampert"
    },
    {
        "id": "0261",
        "pokemon_name": "Poochyena"
    },
    {
        "id": "0262",
        "pokemon_name": "Mightyena"
    },
    {
        "id": "0263",
        "pokemon_name": "Zigzagoon"
    },
    {
        "id": "0264",
        "pokemon_name": "Linoone"
    },
    {
        "id": "0265",
        "pokemon_name": "Wurmple"
    },
    {
        "id": "0266",
        "pokemon_name": "Silcoon"
    },
    {
        "id": "0267",
        "pokemon_name": "Beautifly"
    }, 
    {
        "id": "0268",
        "pokemon_name": "Cascoon"
    },
    {
        "id": "0269",
        "pokemon_name": "Dustox"
    },
    {
        "id": "0270",
        "pokemon_name": "Lotad"
    },
    {
        "id": "0271",
        "pokemon_name": "Lombre"
    },
    {
        "id": "0272",
        "pokemon_name": "Ludicolo"
    },
    {
        "id": "0273",
        "pokemon_name": "Seedot"
    },
    {
        "id": "0274",
        "pokemon_name": "Nuzleaf"
    },
    {
        "id": "0275",
        "pokemon_name": "Shiftry"
    },
    {
        "id": "0276",
        "pokemon_name": "Taillow"
    },
    {
        "id": "0277",
        "pokemon_name": "Swellow"
    },
    {
        "id": "0278",
        "pokemon_name": "Wingull"
    },
    {
        "id": "0279",
        "pokemon_name": "Pelipper"
    },
    {
        "id": "0280",
        "pokemon_name": "Ralts"
    },
    {
        "id": "0281",
        "pokemon_name": "Kirlia"
    },
    {
        "id": "0282",
        "pokemon_name": "Gardevoir"
    },
    {
        "id": "0283",
        "pokemon_name": "Surskit"
    },
    {
        "id": "0284",
        "pokemon_name": "Masquerain"
    },
    {
        "id": "0285",
        "pokemon_name": "Shroomish"
    },
    {
        "id": "0286",
        "pokemon_name": "Breloom"
    },
    {
        "id": "0287",
        "pokemon_name": "Slakoth"
    },
    {
        "id": "0288",
        "pokemon_name": "Vigoroth"
    },
    {
        "id": "0289",
        "pokemon_name": "Slaking"
    },
    {
        "id": "0290",
        "pokemon_name": "Nincada"
    },
    {
        "id": "0291",
        "pokemon_name": "Ninjask"
    },
    {
        "id": "0292",
        "pokemon_name": "Shedninja"
    },
    {
        "id": "0293",
        "pokemon_name": "Whismur"
    },
    {
        "id": "0294",
        "pokemon_name": "Loudred"
    },
    {
        "id": "0295",
        "pokemon_name": "Exploud"
    },
    {
        "id": "0296",
        "pokemon_name": "Makuhita"
    },
    {
        "id": "0297",
        "pokemon_name": "Hariyama"
    },
    {
        "id": "0298",
        "pokemon_name": "Azurill"
    },
    {
        "id": "0299",
        "pokemon_name": "Nosepass"
    },
    {
        "id": "0300",
        "pokemon_name": "Skitty"
    },
    {
        "id": "0301",
        "pokemon_name": "Delcatty"
    },
    {
        "id": "0302",
        "pokemon_name": "Sableye"
    },
    {
        "id": "0303",
        "pokemon_name": "Mawile"
    },
    {
        "id": "0304",
        "pokemon_name": "Aron"
    },
    {
        "id": "0305",
        "pokemon_name": "Lairon"
    },
    {
        "id": "0306",
        "pokemon_name": "Aggron"
    },
    {
        "id": "0307",
        "pokemon_name": "Meditite"
    },
    {
        "id": "0308",
        "pokemon_name": "Medicham"
    },
    {
        "id": "0309",
        "pokemon_name": "Electrike"
    },
    {
        "id": "0310",
        "pokemon_name": "Electrike"
    },
    {
        "id": "0311",
        "pokemon_name": "Plusle"
    },
    {
        "id": "0312",
        "pokemon_name": "Minun"
    },
    {
        "id": "0313",
        "pokemon_name": "Volbeat"
    },
    {
        "id": "0314",
        "pokemon_name": "Illumise"
    },
    {
        "id": "0315",
        "pokemon_name": "Roselia"
    },
    {
        "id": "0316",
        "pokemon_name": "Gulpin"
    },
    {
        "id": "0317",
        "pokemon_name": "Swalot"
    },
    {
        "id": "0318",
        "pokemon_name": "Carvanha"
    },
    {
        "id": "0319",
        "pokemon_name": "Sharpedo"
    },
    {
        "id": "0320",
        "pokemon_name": "Wailmer"
    },
    {
        "id": "0321",
        "pokemon_name": "Wailord"
    },
    {
        "id": "0322",
        "pokemon_name": "Numel"
    },
    {
        "id": "0323",
        "pokemon_name": "Camerupt"
    },
    {
        "id": "0324",
        "pokemon_name": "Torkoal"
    },
    {
        "id": "0325",
        "pokemon_name": "Spoink"
    },
    {
        "id": "0326",
        "pokemon_name": "Grumpig"
    },
    {
        "id": "0327",
        "pokemon_name": "Spinda"
    },
    {
        "id": "0328",
        "pokemon_name": "Trapinch"
    },
    {
        "id": "0329",
        "pokemon_name": "Vibrava"
    },
    {
        "id": "0330",
        "pokemon_name": "Flygon"
    },
    {
        "id": "0331",
        "pokemon_name": "Cacnea"
    },
    {
        "id": "0332",
        "pokemon_name": "Cacturne"
    },
    {
        "id": "0333",
        "pokemon_name": "Swablu"
    },
    {
        "id": "0334",
        "pokemon_name": "Altaria"
    },
    {
        "id": "0335",
        "pokemon_name": "Zangoose"
    },
    {
        "id": "0336",
        "pokemon_name": "Seviper"
    },
    {
        "id": "0337",
        "pokemon_name": "Lunatone"
    },
    {
        "id": "0338",
        "pokemon_name": "Solrock"
    },
    {
        "id": "0339",
        "pokemon_name": "Barboach"
    },
    {
        "id": "0340",
        "pokemon_name": "Whiscash"
    },
    {
        "id": "0341",
        "pokemon_name": "Corphish"
    },
    {
        "id": "0342",
        "pokemon_name": "Crawdaunt"
    },
    {
        "id": "0343",
        "pokemon_name": "Baltoy"
    },
    {
        "id": "0344",
        "pokemon_name": "Claydol"
    },
    {
        "id": "0345",
        "pokemon_name": "Lileep"
    },
    {
        "id": "0346",
        "pokemon_name": "Cradily"
    },
    {
        "id": "0347",
        "pokemon_name": "Anorith"
    },
    {
        "id": "0348",
        "pokemon_name": "Armaldo"
    },
    {
        "id": "0349",
        "pokemon_name": "Feebas"
    },
    {
        "id": "0350",
        "pokemon_name": "Milotic"
    },
    {
        "id": "0351",
        "pokemon_name": "Castform"
    },
    {
        "id": "0352",
        "pokemon_name": "Kecleon"
    },
    {
        "id": "0353",
        "pokemon_name": "Shuppet"
    },
    {
        "id": "0354",
        "pokemon_name": "Banette"
    },
    {
        "id": "0355",
        "pokemon_name": "Duskull"
    },
    {
        "id": "0356",
        "pokemon_name": "Dusclops"
    },
    {
        "id": "0357",
        "pokemon_name": "Tropius"
    },
    {
        "id": "0358",
        "pokemon_name": "Chimecho"
    },
    {
        "id": "0359",
        "pokemon_name": "Absol"
    },
    {
        "id": "0360",
        "pokemon_name": "Wynaut"
    },
    {
        "id": "0361",
        "pokemon_name": "Snorunt"
    },
    {
        "id": "0362",
        "pokemon_name": "Glalie"
    },
    {
        "id": "0363",
        "pokemon_name": "Spheal"
    },
    {
        "id": "0364",
        "pokemon_name": "Sealeo"
    },
    {
        "id": "0365",
        "pokemon_name": "Walrein"
    },
    {
        "id": "0366",
        "pokemon_name": "Clamperl"
    },
    {
        "id": "0367",
        "pokemon_name": "Huntail"
    },
    {
        "id": "0368",
        "pokemon_name": "Gorebyss"
    },
    {
        "id": "0369",
        "pokemon_name": "Relicanth"
    },
    {
        "id": "0370",
        "pokemon_name": "Luvdisc"
    },
    {
        "id": "0371",
        "pokemon_name": "Bagon"
    },
    {
        "id": "0372",
        "pokemon_name": "Shelgon"
    },
    {
        "id": "0373",
        "pokemon_name": "Salamence"
    },
    {
        "id": "0374",
        "pokemon_name": "Beldum"
    },
    {
        "id": "0375",
        "pokemon_name": "Metang"
    },
    {
        "id": "0377",
        "pokemon_name": "Regirock"
    },
    {
        "id": "0378",
        "pokemon_name": "Regice"
    },
    {
        "id": "0379",
        "pokemon_name": "Registeel"
    },
    {
        "id": "0380",
        "pokemon_name": "Latias"
    },
    {
        "id": "0381",
        "pokemon_name": "Latios"
    },
    {
        "id": "0382",
        "pokemon_name": "Kyogre"
    },
    {
        "id": "0383",
        "pokemon_name": "Groudon"
    },
    {
        "id": "0384",
        "pokemon_name": "Rayquaza"
    },
    {
        "id": "0385",
        "pokemon_name": "Jirachi"
    },
    {
        "id": "0386",
        "pokemon_name": "Deoxys"
    }
];

const seedPokemonData = () => pokemon.bulkCreate(pokemonData);
module.exports = seedPokemonData;