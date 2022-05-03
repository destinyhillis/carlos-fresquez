const paintings = [
  {
    id: '1',
    title: 'Pops en 1954',
    medium: 'spraypaint and acrylic on canvas',
    year: '1978',
    other: '',
    slug: './assets/img/painting/1970s/',
  },
  {
    id: '2',
    title: 'Corazones Placas Series #1',
    medium: 'spraypaint and collage on paper',
    year: '1979',
    other: '',
    slug: './assets/img/painting/1970s/',
  },
  {
    id: '3',
    title: 'Corazones Placas Series #16',
    medium: 'spraypaint and collage on paper',
    year: '1979',
    other: '',
    slug: './assets/img/painting/1970s/',
  },
  {
    id: '4',
    title: 'Zoot Suit en los Rockies',
    medium: 'spraypaint and airbrushed acrylic on panel',
    year: '1984',
    other: '',
    slug: './assets/img/painting/1980s/',
  },
  {
    id: '5',
    title: 'Cool Couple Series #10',
    medium: 'spraypaint, acrylic airbrush and collage on paper',
    year: '1985',
    other: '',
    slug: './assets/img/painting/1980s/',
  },
  {
    id: '6',
    title: 'San Francisco en Taos',
    medium: 'spraypaint stencil on paper',
    year: '1985',
    other: '',
    slug: './assets/img/painting/1980s/',
  },
  {
    id: '7',
    title: 'The His-Panic Series … He Threw His Mind Out in a Car',
    medium: 'acrylic and photocopy collage on paper',
    year: '1988',
    other: '',
    slug: './assets/img/painting/1980s/',
  },
  {
    id: '8',
    title: 'Cubie Doobie #5',
    medium: 'acrylic on paper',
    year: '1989',
    other: '',
    slug: './assets/img/painting/1980s/',
  },
  {
    id: '9',
    title: 'Cubie Doobie #7',
    medium: 'acrylic on paper',
    year: '1989',
    other: '',
    slug: './assets/img/painting/1980s/',
  },
  {
    id: '10',
    title: 'Hot Fun',
    medium: 'acrylic on canvas',
    year: '1989',
    other: '',
    slug: './assets/img/painting/1980s/',
  },
  {
    id: '11',
    title: 'Cool Couple Series # 15',
    medium: 'acrylic and collage on paper board',
    year: '1989',
    other: '',
    slug: './assets/img/painting/1980s/',
  },
  {
    id: '12',
    title: '¡Despiertate! Wake Up!',
    medium: 'acrylic on canvas',
    year: '1989-1990',
    other: '',
    slug: './assets/img/painting/1980s/',
  },
  {
    id: '13',
    title: 'Nuestra Señora de Aztlan',
    medium: 'acrylic and photocopy collage on panel',
    year: '1989',
    other: '',
    slug: './assets/img/painting/1980s/',
  },
  {
    id: '14',
    title: 'Nuestra Señora de Aztlan',
    medium: 'acrylic and collage on paper board',
    year: '1989',
    other: '',
    slug: './assets/img/painting/1980s/',
  },
  {
    id: '15',
    title: 'El Lowrider en Los Rockies',
    medium: 'acrylic on canvas',
    year: '1990',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '16',
    title: 'Parque La Alma',
    medium: 'acrylic on canvas',
    year: '1990',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '17',
    title: 'Missing You',
    medium: 'acrylic on canvas and panel',
    year: '1990',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '18',
    title: 'Mi Sangre Nueva',
    medium: 'acrylic on canvas',
    year: '1991',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '19',
    title: 'Funtime Amarillo',
    medium: 'acrylic on canvas',
    year: '1991',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '20',
    title: 'Jaguarman and the Coming of the New Heart',
    medium: 'acrylic on canvas',
    year: '1991',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '21',
    title: 'Una Rosa',
    medium: 'acrylic on canvas',
    year: '1991',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '22',
    title: 'Untitled',
    medium: 'acrylic on canvas',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '23',
    title: 'Guts and Grace',
    medium: 'acrylic on canvas',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '24',
    title: 'Rush Hour #4',
    medium: 'acrylic with found objects on panel',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '25',
    title: 'Night of the Barrio Moon',
    medium: 'acrylic on canvas',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '26',
    title: 'Teatro de Mi Corazon',
    medium: 'acrylic on canvas and panel',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '27',
    title: 'Teatro de Mi Corazon (detail)',
    medium: 'acrylic on canvas and panel',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '28',
    title: 'Teatro de Mi Corazon (detail)',
    medium: 'acrylic on canvas and panel',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '29',
    title: 'Bato-man',
    medium: 'acrylic on canvas',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '30',
    title: `Imagine, There's Nothing to Live or Die for, No Religions Too`,
    medium: 'acrylic on panel',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '31',
    title: `Imagine, There's Nothing to Live or Die for, No Religions Too`,
    medium: 'acrylic on panel',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '32',
    title: `Imagine, There's Nothing to Live or Die for, No Religions Too`,
    medium: 'acrylic on panel',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '33',
    title: 'El Charro en Colorado',
    medium: 'acrylic on panel and frame',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '34',
    title: 'Pachuco en Pink',
    medium: 'acrylic on canvas',
    year: '1993',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '35',
    title: 'Posole',
    medium: 'acrylic on canvas',
    year: '1993',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '36',
    title: 'Teatro Series',
    medium: 'acrylic on canvas',
    year: '1993',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '37',
    title: 'Talking to the Spirits',
    medium: 'acrylic on canvas',
    year: '1993',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '38',
    title: 'Denver Vaquero',
    medium: 'acrylic on wood Panel',
    year: '1993',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '39',
    title: 'Jewel Pool',
    medium: 'acrylic on canvas',
    year: '1994',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '40',
    title: 'Tsi-Mayoh',
    medium:
      'oil on panel - with a Holy Water font filled with la Tierra Sagrada de Chimayo',
    year: '1994',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '41',
    title: 'Carrito #3',
    medium: 'acrylic on wood',
    year: '1994',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '42',
    title: 'Las Manos que Curan',
    medium: 'oil on panel with metal milagros attached',
    year: '1994',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '43',
    title: 'Chiapas Warrior de la Tierra Madre',
    medium: 'acrylic on canvas',
    year: '1995',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '44',
    title: 'Right On!',
    medium: 'acrylic on canvas',
    year: '1996',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '45',
    title: 'La Rosa II',
    medium: 'acrylic on panel and frame',
    year: '1996',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '46',
    title: 'A Westside Wedding II',
    medium: 'acrylic on canvas',
    year: '1996',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '47',
    title: 'Iglesia en el pueblo de Taos',
    medium: 'acrylic on panel',
    year: '1996',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '48',
    title: 'La Iglesia San Francisco en Ranchos',
    medium: 'acrylic on canvas',
    year: '1996',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '49',
    title: 'La Vista de Ranchos',
    medium: 'acrylic on canvas',
    year: '1996',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '50',
    title: 'Apples and Orange',
    medium: 'acrylic on canvas board and frame',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '51',
    title: 'El Psychedelic Punk Mariachi',
    medium: 'acrylic on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '52',
    title: 'El Stereotype',
    medium: 'acrylic on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '53',
    title: 'El Roy',
    medium: 'acrylic on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '54',
    title: 'Have a Maize Day',
    medium: 'acrylic on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '55',
    title: '',
    medium: 'acrylic and collage on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '56',
    title: 'No Quiero',
    medium: 'acrylic and collage on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '57',
    title: 'I Am What I Am',
    medium: 'acrylic and collage on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '58',
    title: 'Forever Trapped',
    medium: 'acrylic and collage on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '59',
    title: 'The Pilgrims Played All the Games They Knew',
    medium: 'acrylic and collage on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '60',
    title: `Tiempotrippin'`,
    medium: 'Krylon on thriftstore sunstone',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '61',
    title: `Tiempotrippin'`,
    medium: 'Krylon on thriftstore sunstone',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '62',
    title: 'El Corrido Cosmica',
    medium: 'acrylic on canvas and panel',
    year: '1998',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '63',
    title: 'El Corrido Cosmica (detail)',
    medium: 'acrylic on canvas and panel',
    year: '1998',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '64',
    title: 'El Corrido Cosmica (detail)',
    medium: 'acrylic on canvas and panel',
    year: '1998',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '65',
    title: 'San Ysidro',
    medium: 'acrylic on panel',
    year: 'ca. 1998',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '66',
    title: 'Picoso Hot and Fast',
    medium: 'acrylic on MDF panel',
    year: '1998',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '67',
    title: 'Alien Surprise',
    medium: 'acrylic on MDF panel',
    year: '1998-1999',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '68',
    title: 'Tacuche Haze',
    medium: 'acrylic on MDF panel',
    year: '1998-1999',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '69',
    title: 'Viva Las Vegas',
    medium: 'acrylic on MDF panel',
    year: '1998-1999',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '70',
    title: 'Viva Mejico',
    medium: 'acrylic on MDF panel',
    year: '1998-1999',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '71',
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '72',
    title: 'War! What is it Good For?',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '73',
    title: 'Mighty Mighty',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '74',
    title: 'Huelga!',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '75',
    title: 'Chicano Power!',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '76',
    title: 'Madre Cosmica',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '77',
    title: 'Doble Jesus',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '78',
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '79',
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '80',
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '81',
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '82',
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '83',
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '84',
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '85',
    title: 'Untitled',
    medium: 'acrylic on canvas',
    year: '1999',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '86',
    title: 'Obsidian Ranfla series #1',
    medium: 'spraypaint, screenprint, and oil on panel',
    year: '1999',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '87',
    title: 'Obsidian Ranfla series #3',
    medium: 'spraypaint, screenprint, and oil on panel',
    year: '1999',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '88',
    title: 'Obsidian Ranfla series #6',
    medium: 'spraypaint, screenprint, and oil on panel',
    year: '1999',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '89',
    title: 'Obsidian Ranfla series #8',
    medium: 'spraypaint, screenprint, and oil on panel',
    year: '1999',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '90',
    title: 'Los El Peez - (A Handy Carrying Case)',
    medium: 'screenprint on album cover',
    year: '1999-present',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '91',
    title: 'Los El Peez; The Disk-O-Teca Series',
    medium: 'acrylic on vinyl album',
    year: '1999-present',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '92',
    title: 'Los El Peez; The Disk-O-Teca Series',
    medium: 'acrylic on vinyl album',
    year: '1999-present',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '93',
    title: 'Los El Peez; The Disk-O-Teca Series',
    medium: 'acrylic on vinyl album',
    year: '1999-present',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '94',
    title: 'Los El Peez; The Disk-O-Teca Series',
    medium: 'acrylic on vinyl album',
    year: '1999-present',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '95',
    title: 'Los El Peez; The Disk-O-Teca Series',
    medium: 'acrylic on vinyl album',
    year: '1999-present',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '96',
    title: 'Los El Peez; The Disk-O-Teca Series',
    medium: 'acrylic on vinyl album',
    year: '1999-present',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '97',
    title: 'Hecho en Aztlán',
    medium: 'vinyl sticker',
    year: 'ca. 1999',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '98',
    title: '',
    medium: '',
    year: '',
    other: '',
    slug: './assets/img/painting/1990s/',
  },
  {
    id: '99',
    title: 'Trapped',
    medium: 'acrylic on canvas',
    year: '2000',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '100',
    title: 'Por Vida',
    medium: 'oil, spraypaint, screenprint on panel',
    year: '2000',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '101',
    title: 'Mi Familia',
    medium: 'acrylic on panel and frame',
    year: '2001',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '102',
    title: 'Sueños Surrealismo',
    medium: 'acrylic on canvas',
    year: '2001',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '103',
    title: 'La Casa Roja',
    medium: 'acrylic and collage on panel',
    year: '2002',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '104',
    title: 'Side Altar: Pedro Antonio Fresquis',
    medium: 'oil on canvas',
    year: '2002',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '105',
    title: 'Borderlands',
    medium: 'acrylic and collage on panel',
    year: '2003',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '106',
    title: 'Homage to Jim Dine (diptych - left side)',
    medium: 'acrylic on canvas with attached paintbrush',
    year: '2005',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '107',
    title: 'Homage to Jim Dine (diptych - right side)',
    medium: 'oil on canvas',
    year: '2005',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '108',
    title: 'A Westside Wedding; El Aniversario',
    medium: 'oil on canvas',
    year: '2005',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '135',
    title: 'Angela Davis',
    medium: 'acrylic on unstretched canvas',
    year: '2006',
    other:
      'Los Animales (Art Collective - Carlos Fresquez, Veronica Herrera, Josiah Lopez, Merlin Madrid, Alfredo Ortiz, and Francisco Zamora)',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '136',
    title: 'See Ya Real Soon',
    medium: 'acrylic on canvas',
    year: 'ca. 2007',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '137',
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '138',
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '139',
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '140',
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '141',
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '142',
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '143',
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '144',
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '145',
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '146',
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '147',
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '148',
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '149',
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '150',
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '151',
    title: 'Mejico y Yo',
    medium: 'acrylic and screenprint on panel',
    year: '2009',
    other: '',
    slug: './assets/img/painting/2000s/',
  },
  {
    id: '152',
    title: 'El Meso- Moderno Series #3',
    medium: 'acrylic on canvas',
    year: '2010',
    other: '',
    slug: './assets/img/painting/2010s/',
  },
  {
    id: '153',
    title: 'A Fine Time for Dine (diptych - left side)',
    medium: 'acrylic on canvas',
    year: '',
    other: '',
    slug: './assets/img/painting/2010s/',
  },
  {
    id: '154',
    title: 'A Fine Time for Dine (diptych - right side)',
    medium: 'acrylic and spraypaint on canvas',
    year: '',
    other: '',
    slug: './assets/img/painting/2010s/',
  },
  {
    id: '156',
    title: 'Decolonize',
    medium: 'acrylic on grommeted canvas',
    year: '2014',
    other: '',
    slug: './assets/img/painting/2010s/',
  },
  {
    id: '158',
    title: 'End Barrio Warfare',
    medium: 'acrylic on canvas',
    year: '2016',
    other: '',
    slug: './assets/img/painting/2010s/',
  },
  {
    id: '159',
    title: 'El Aguila y El Serpiente',
    medium: 'acrylic on canvas',
    year: '2016',
    other: '',
    slug: './assets/img/painting/2010s/',
  },
]

paintings.reverse()

if (paintings.length) {
  paintings.forEach(item => {
    const section = `
        <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item">
                <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${item.id}">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <div class="portfolio-caption-heading text-center p-3">
                                <h4>${item.title}</h4>
                                <button type="button" class="btn btn-outline-light mt-4">
                                    <i class="fas fa-plus"></i> More info
                                </button>
                            </div>
                        </div>
                    </div>
                    <img class="img-fluid" src=${item.slug}${item.id}.jpg alt="..."/>
                </a>
            </div>
        </div>
      `

    const modal = `
        <div
          class="portfolio-modal modal fade"
          id="portfolioModal${item.id}"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content p-3">
              <div class="close-modal" data-bs-dismiss="modal">
                <i class="fas fa-times fa-2x" alt="Close modal"></i>
              </div>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-10">
                    <div class="modal-body">
                      <!-- Project details-->
                      <h2 class="text-uppercase">${item.title}</h2>
                      <div class="text-muted">
                        ${
                          item.medium &&
                          `<div>
                            ${item.medium}
                          </div>`
                        }
                        ${
                          item.year &&
                          `<div>
                            ${item.year}
                          </div>`
                        }
                        ${
                          item.other &&
                          `
                            <div class="mb-2">
                              ${item.other}
                            </div>
                          `
                        }
                      </div>

                      <img
                        class="img-fluid d-block mx-auto"
                        src="${item.slug}${item.id}.jpg"
                        alt="..."
                      />

                      <div data-bs-dismiss="modal">
                        <button type="button" class="btn btn-primary mt-4">
                          <i class="fas fa-times" alt="Close modal"></i> Close
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `

    $('#sections').append(section)
    $('#modals').append(modal)
  })
}

$('#decade').change(function () {
  // Clear page
  $('#sections').html('')
  $('#modals').html('')

  let decade = $('#decade').val()

  if (decade == 'all') {
    // reload is faster than for loop
    location.reload()
  }

  paintings.map(item => {
    let slug = item.slug
    if (slug.includes(decade)) {
      const section = `
          <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                  <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${item.id}">
                      <div class="portfolio-hover">
                          <div class="portfolio-hover-content">
                              <div class="portfolio-caption-heading text-center p-3">
                                  <h4>${item.title}</h4>
                                  <button type="button" class="btn btn-outline-light mt-4">
                                      <i class="fas fa-plus"></i> More info
                                  </button>
                              </div>
                          </div>
                      </div>
                      <img class="img-fluid" src=${item.slug}${item.id}.jpg alt="..."/>
                  </a>
              </div>
          </div>
        `

      const modal = `
          <div
            class="portfolio-modal modal fade"
            id="portfolioModal${item.id}"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content p-3">
                <div class="close-modal" data-bs-dismiss="modal">
                  <i class="fas fa-times fa-2x" alt="Close modal"></i>
                </div>
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-10">
                      <div class="modal-body">
                        <!-- Project details-->
                        <h2 class="text-uppercase">${item.title}</h2>
                        <div class="text-muted">
                          ${
                            item.medium &&
                            `<div>
                              ${item.medium}
                            </div>`
                          }
                          ${
                            item.year &&
                            `<div>
                              ${item.year}
                            </div>`
                          }
                          ${
                            item.other &&
                            `
                              <div class="mb-2">
                                ${item.other}
                              </div>
                            `
                          }
                        </div>

                        <img
                          class="img-fluid d-block mx-auto"
                          src="${item.slug}${item.id}.jpg"
                          alt="..."
                        />

                        <div data-bs-dismiss="modal">
                          <button type="button" class="btn btn-primary mt-4">
                            <i class="fas fa-times" alt="Close modal"></i> Close
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `

      $('#sections').append(section)
      $('#modals').append(modal)
    }
  })
})
