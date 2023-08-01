const { pokemon } = require('../models');

const pokemonData = [
  {
    'id': '0252',
    'pokemon_name': 'Treecko',
    'pokemon_type': '4',
    'strong_type': [2,8,12],
    'weak_type': [1,5,7,9,11],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png'
  },
  {
    'id': '0253',
    'pokemon_name': 'Grovyle',
    'pokemon_type': '4',
    'strong_type': [2,8,12],
    'weak_type': [1,5,7,9,11],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/253.png'
  },
  {
    'id': '0254',
    'pokemon_name': 'Sceptile',
    'pokemon_type': '4',
    'strong_type': [2,8,12],
    'weak_type': [1,5,7,9,11],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png'
  },
  {
    'id': '0255',
    'pokemon_name': 'Torchic',
    'pokemon_type': '1',
    'strong_type': [4,5,11,16],
    'weak_type': [2,8,12],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png'
  },
  {
    'id': '0256',
    'pokemon_name': 'Combusken',
    'pokemon_type': [1,6],
    'strong_type': [0,4,5,11,12,15,16],
    'weak_type': [2,8,9,10,12],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/256.png'
  },
  {
    'id': '0257',
    'pokemon_name': 'Blaziken',
    'pokemon_type': [1,6],
    'strong_type': [0,4,5,11,12,15,16],
    'weak_type': [2,8,9,10,12],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png'
  },
  {
    'id': '0258',
    'pokemon_name': 'Mudkip',
    'pokemon_type':  '2',
    'strong_type':  [1,8,12],
    'weak_type':  [3,4],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png'
  },
  {
    'id': '0259',
    'pokemon_name': 'Marshtomp',
    'pokemon_type':  [2,12],
    'strong_type':  [1,3,7,8,12,16],
    'weak_type':  [2,3,4,5],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/259.png'
  },
  {
    'id': '0260',
    'pokemon_name': 'Swampert',
    'pokemon_type':  [2,12],
    'strong_type':  [1,3,7,8,12,16],
    'weak_type':  [2,3,4,5],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png'
  },
  {
    'id': '0261',
    'pokemon_name': 'Poochyena',
    'pokemon_type':  '15',
    'strong_type':  [10,13],
    'weak_type':  [6,11],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/261.png'
  },
  {
    'id': '0262',
    'pokemon_name': 'Mightyena',
    'pokemon_type':  '15',
    'strong_type':  [10,13],
    'weak_type':  [6,11],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/262.png'
  },
  {
    'id': '0263',
    'pokemon_name': 'Zigzagoon',
    'pokemon_type':  '0',
    'weak_type':  '6',
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/263.png'
  },
  {
    'id': '0264',
    'pokemon_name': 'Linoone',
    'pokemon_type':  '0',
    'weak_type':  '6',
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/264.png'
  },
  {
    'id': '0265',
    'pokemon_name': 'Wurmple',
    'pokemon_type':  '11',
    'strong_type':  [4,6,15],
    'weak_type':  [1,9,12],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/265.png'
  },
  {
    'id': '0266',
    'pokemon_name': 'Silcoon',
    'pokemon_type':  '11',
    'strong_type':  [4,6,15],
    'weak_type':  [1,9,12],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/266.png'
  },
  {
    'id': '0267',
    'pokemon_name': 'Beautifly',
    'pokemon_type':  [9,11],
    'strong_type':  [4,6,11,15],
    'weak_type':  [1,3,5,9,12],
    'img_url':  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/267.png'
  },
  {
    'id': '0268',
    'pokemon_name': 'Cascoon',
    'pokemon_type':  '11',
    'strong_type':  [4,6,15],
    'weak_type':  [1,9,12],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/268.png'
  },
  {
    'id': '0269',
    'pokemon_name': 'Dustox',
    'pokemon_type':  [7.11],
    'strong_type':  [4,6,15],
    'weak_type':  [1,8,9,10,12],
    'img_url':  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/269.png'
  },
  {
    'id': '0270',
    'pokemon_name': 'Lotad',
    'pokemon_type':  [2,4],
    'strong_type':  [1,2,8,12],
    'weak_type':  [1,3,4,5,7,9,11],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/270.png'
  },
  {
    'id': '0271',
    'pokemon_name': 'Lombre',
    'pokemon_type':  [2,4],
    'strong_type':  [1,2,8,12],
    'weak_type':  [1,3,4,5,7,9,11],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/271.png'
  },
  {
    'id': '0272',
    'pokemon_name': 'Ludicolo',
    'pokemon_type':  [2,4],
    'strong_type':  [1,2,8,12],
    'weak_type':  [1,3,4,5,7,9,11],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/272.png'
  },
  {
    'id': '0273',
    'pokemon_name': 'Seedot',
    'pokemon_type': '4',
    'strong_type': [2,8,12],
    'weak_type': [1,5,7,9,11],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/273.png'
  },
  {
    'id': '0274',
    'pokemon_name': 'Nuzleaf',
    'pokemon_type': [4,15],
    'strong_type': [2,8,10,12,13],
    'weak_type': [1,5,6,7,9,11],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/274.png'
  },
  {
    'id': '0275',
    'pokemon_name': 'Shiftry',
    'pokemon_type': [4,15],
    'strong_type': [2,8,10,12,13],
    'weak_type': [1,5,6,7,9,11],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/275.png'
  },
  {
    'id': '0276',
    'pokemon_name': 'Taillow',
    'pokemon_type':  [0,9],
    'strong_type':  [4,6,11],
    'weak_type':  [3,5,6,12],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/276.png'
  },
  {
    'id': '0277',
    'pokemon_name': 'Swellow',
    'pokemon_type':  [0,9],
    'strong_type':  [4,6,11],
    'weak_type':  [3,5,6,12],
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/277.png'
  },
  {
    'id': '0278',
    'pokemon_name': 'Wingull',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/278.png'
  },
  {
    'id': '0279',
    'pokemon_name': 'Pelipper',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/279.png'
  },
  {
    'id': '0280',
    'pokemon_name': 'Ralts',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/280.png'
  },
  {
    'id': '0281',
    'pokemon_name': 'Kirlia',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/281.png'
  },
  {
    'id': '0282',
    'pokemon_name': 'Gardevoir',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png'
  },
  {
    'id': '0283',
    'pokemon_name': 'Surskit',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/283.png'
  },
  {
    'id': '0284',
    'pokemon_name': 'Masquerain',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/284.png'
  {
    'id': '0285',
    'pokemon_name': 'Shroomish',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/285.png'
  },
  {
    'id': '0286',
    'pokemon_name': 'Breloom',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/286.png'
  },
  {
    'id': '0287',
    'pokemon_name': 'Slakoth',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/287.png'
  },
  {
    'id': '0288',
    'pokemon_name': 'Vigoroth',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/288.png'
  },
  {
    'id': '0289',
    'pokemon_name': 'Slaking',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/289.png'
  },
  {
    'id': '0290',
    'pokemon_name': 'Nincada',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/290.png'
  },
  {
    'id': '0291',
    'pokemon_name': 'Ninjask',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/291.png'
  },
  {
    'id': '0292',
    'pokemon_name': 'Shedninja',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/292.png'
  },
  {
    'id': '0293',
    'pokemon_name': 'Whismur',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/293.png'
  },
  {
    'id': '0294',
    'pokemon_name': 'Loudred',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/294.png'
  },
  {
    'id': '0295',
    'pokemon_name': 'Exploud',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/295.png'
  },
  {
    'id': '0296',
    'pokemon_name': 'Makuhita',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/296.png'
  },
  {
    'id': '0297',
    'pokemon_name': 'Hariyama',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/297.png'
  },
  {
    'id': '0298',
    'pokemon_name': 'Azurill',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/298.png'
  },
  {
    'id': '0299',
    'pokemon_name': 'Nosepass',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/299.png'
  },
  {
    'id': '0300',
    'pokemon_name': 'Skitty',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/300.png'
  },
  {
    'id': '0301',
    'pokemon_name': 'Delcatty',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/301.png'
  },
  {
    'id': '0302',
    'pokemon_name': 'Sableye',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/302.png'
  },
  {
    'id': '0303',
    'pokemon_name': 'Mawile',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/303.png'
  },
  {
    'id': '0304',
    'pokemon_name': 'Aron',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/304.png'
  },
  {
    'id': '0305',
    'pokemon_name': 'Lairon',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/305.png'
  },
  {
    'id': '0306',
    'pokemon_name': 'Aggron',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/306.png'
  },
  {
    'id': '0307',
    'pokemon_name': 'Meditite',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/307.png'
  },
  {
    'id': '0308',
    'pokemon_name': 'Medicham',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/308.png'
  },
  {
    'id': '0309',
    'pokemon_name': 'Electrike',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/309.png'
  },
  {
    'id': '0310',
    'pokemon_name': 'Electrike',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/310.png'
  },
  {
    'id': '0311',
    'pokemon_name': 'Plusle',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/311.png'
  },
  {
    'id': '0312',
    'pokemon_name': 'Minun',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/312.png'
  },
  {
    'id': '0313',
    'pokemon_name': 'Volbeat',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/313.png'
  },
  {
    'id': '0314',
    'pokemon_name': 'Illumise',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/314.png'
  },
  {
    'id': '0315',
    'pokemon_name': 'Roselia',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/315.png'
  },
  {
    'id': '0316',
    'pokemon_name': 'Gulpin',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/316.png'
  },
  {
    'id': '0317',
    'pokemon_name': 'Swalot',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/317.png'
  },
  {
    'id': '0318',
    'pokemon_name': 'Carvanha',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/318.png'
  },
  {
    'id': '0319',
    'pokemon_name': 'Sharpedo',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/319.png'
  },
  {
    'id': '0320',
    'pokemon_name': 'Wailmer',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/320.png'
  },
  {
    'id': '0321',
    'pokemon_name': 'Wailord',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/321.png'
  },
  {
    'id': '0322',
    'pokemon_name': 'Numel',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/322.png'
  },
  {
    'id': '0323',
    'pokemon_name': 'Camerupt',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/323.png'
  },
  {
    'id': '0324',
    'pokemon_name': 'Torkoal',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/324.png'
  },
  {
    'id': '0325',
    'pokemon_name': 'Spoink',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/325.png'
  },
  {
    'id': '0326',
    'pokemon_name': 'Grumpig',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/326.png'
  },
  {
    'id': '0327',
    'pokemon_name': 'Spinda',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/327.png'
  },
  {
    'id': '0328',
    'pokemon_name': 'Trapinch',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/328.png'
  },
  {
    'id': '0329',
    'pokemon_name': 'Vibrava',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/329.png'
  },
  {
    'id': '0330',
    'pokemon_name': 'Flygon',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/330.png'
  },
  {
    'id': '0331',
    'pokemon_name': 'Cacnea',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/331.png'
  },
  {
    'id': '0332',
    'pokemon_name': 'Cacturne',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/332.png'
  },
  {
    'id': '0333',
    'pokemon_name': 'Swablu',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/333.png'
  },
  {
    'id': '0334',
    'pokemon_name': 'Altaria',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/334.png'
  },
  {
    'id': '0335',
    'pokemon_name': 'Zangoose',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/335.png'
  },
  {
    'id': '0336',
    'pokemon_name': 'Seviper',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/336.png'
  },
  {
    'id': '0337',
    'pokemon_name': 'Lunatone',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/337.png'
  },
  {
    'id': '0338',
    'pokemon_name': 'Solrock',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/338.png'
  },
  {
    'id': '0339',
    'pokemon_name': 'Barboach',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/339.png'
  },
  {
    'id': '0340',
    'pokemon_name': 'Whiscash',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/340.png'
  },
  {
    'id': '0341',
    'pokemon_name': 'Corphish',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/341.png'
  }
  {
    'id': '0342',
    'pokemon_name': 'Crawdaunt',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/342.png'
  },
  {
    'id': '0343',
    'pokemon_name': 'Baltoy',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/343.png'
  },
  {
    'id': '0344',
    'pokemon_name': 'Claydol',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/344.png'
  },
  {
    'id': '0345',
    'pokemon_name': 'Lileep',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/345.png'
  },
  {
    'id': '0346',
    'pokemon_name': 'Cradily',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/346.png'
  },
  {
    'id': '0347',
    'pokemon_name': 'Anorith',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/347.png'
  },
  {
    'id': '0348',
    'pokemon_name': 'Armaldo',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/348.png'
  },
  {
    'id': '0349',
    'pokemon_name': 'Feebas',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/349.png'
  },
  {
    'id': '0350',
    'pokemon_name': 'Milotic',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/350.png'
  },
  {
    'id': '0351',
    'pokemon_name': 'Castform',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/351.png'
  },
  {
    'id': '0352',
    'pokemon_name': 'Kecleon',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/352.png'
  },
  {
    'id': '0353',
    'pokemon_name': 'Shuppet',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/353.png'
  },
  {
    'id': '0354',
    'pokemon_name': 'Banette',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/354.png'
  },
  {
    'id': '0355',
    'pokemon_name': 'Duskull',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/355.png'
  },
  {
    'id': '0356',
    'pokemon_name': 'Dusclops',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/356.png'
  },
  {
    'id': '0357',
    'pokemon_name': 'Tropius',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/357.png'
  },
  {
    'id': '0358',
    'pokemon_name': 'Chimecho',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/358.png'
  },
  {
    'id': '0359',
    'pokemon_name': 'Absol',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/359.png'
  },
  {
    'id': '0360',
    'pokemon_name': 'Wynaut',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/360.png'
  },
  {
    'id': '0361',
    'pokemon_name': 'Snorunt',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/361.png'
  },
  {
    'id': '0362',
    'pokemon_name': 'Glalie',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/362.png'
  },
  {
    'id': '0363',
    'pokemon_name': 'Spheal',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/363.png'
  },
  {
    'id': '0364',
    'pokemon_name': 'Sealeo',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/364.png'
  },
  {
    'id': '0365',
    'pokemon_name': 'Walrein',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/365.png'
  },
  {
    'id': '0366',
    'pokemon_name': 'Clamperl',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/366.png'
  },
  {
    'id': '0367',
    'pokemon_name': 'Huntail',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/367.png'
  },
  {
    'id': '0368',
    'pokemon_name': 'Gorebyss',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/368.png'
  },
  {
    'id': '0369',
    'pokemon_name': 'Relicanth',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/369.png'
  },
  {
    'id': '0370',
    'pokemon_name': 'Luvdisc',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/370.png'
  },
  {
    'id': '0371',
    'pokemon_name': 'Bagon',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/371.png'
  },
  {
    'id': '0372',
    'pokemon_name': 'Shelgon',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/372.png'
  },
  {
    'id': '0373',
    'pokemon_name': 'Salamence',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png'
  },
  {
    'id': '0374',
    'pokemon_name': 'Beldum',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/374.png'
  },
  {
    'id': '0375',
    'pokemon_name': 'Metang',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/375.png'
  },
  {
    'id': '0376',
    'pokemon_name': 'Metagross',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png'
  },
  {
    'id': '0377',
    'pokemon_name': 'Regirock',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/377.png'
  },
  {
    'id': '0378',
    'pokemon_name': 'Regice',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/378.png'
  },
  {
    'id': '0379',
    'pokemon_name': 'Registeel',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/379.png'
  },
  {
    'id': '0380',
    'pokemon_name': 'Latias',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/380.png'
  },
  {
    'id': '0381',
    'pokemon_name': 'Latios',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/381.png'
  },
  {
    'id': '0382',
    'pokemon_name': 'Kyogre',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url':'https://assets.pokemon.com/assets/cms2/img/pokedex/full/382.png'
  },
  {
    'id': '0383',
    'pokemon_name': 'Groudon',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/383.png'
  },
  {
    'id': '0384',
    'pokemon_name': 'Rayquaza',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png'
  },
  {
    'id': '0385',
    'pokemon_name': 'Jirachi',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/385.png'
  },
  {
    'id': '0386',
    'pokemon_name': 'Deoxys',
    'pokemon_type':  ,
    'strong_type':  ,
    'weak_type':  ,
    'img_url': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/386.png'
  }
];

const seedPokemonData = () => pokemon.bulkCreate(pokemonData);
module.exports = seedPokemonData;