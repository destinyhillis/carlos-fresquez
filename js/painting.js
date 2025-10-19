const paintings = [
  {
    id: 1,
    title: 'Pops en 1954',
    medium: 'spraypaint and acrylic on canvas',
    year: '1978',
    other: '',
    slug: './assets/img/painting/1970s/1',
  },

  {
    id: 2,
    title: 'Zoot Suit en los Rockies',
    medium: 'spraypaint and airbrushed acrylic on panel',
    year: '1984',
    other: '',
    slug: './assets/img/painting/1980s/1',
  },
  {
    id: 3,
    title: 'Cubie Doobie #5',
    medium: 'acrylic on paper',
    year: '1989',
    other: '',
    slug: './assets/img/painting/1980s/2',
  },
  {
    id: 4,
    title: 'Cubie Doobie #7',
    medium: 'acrylic on paper',
    year: '1989',
    other: '',
    slug: './assets/img/painting/1980s/3',
  },
  {
    id: 5,
    title: 'Hot Fun',
    medium: 'acrylic on canvas',
    year: '1989',
    other: '',
    slug: './assets/img/painting/1980s/4',
  },
  {
    id: 6,
    title: '¡Despiertate! Wake Up!',
    medium: 'acrylic on canvas',
    year: '1989-1990',
    other: '',
    slug: './assets/img/painting/1980s/5',
  },
  {
    id: 7,
    title: 'El Lowrider en Los Rockies',
    medium: 'acrylic on canvas',
    year: '1990',
    other: '',
    slug: './assets/img/painting/1990s/1',
  },
  {
    id: 8,
    title: 'Parque La Alma',
    medium: 'acrylic on canvas',
    year: '1990',
    other: '',
    slug: './assets/img/painting/1990s/2',
  },
  {
    id: 9,
    title: 'Missing You',
    medium: 'acrylic on canvas and panel',
    year: '1990',
    other: '',
    slug: './assets/img/painting/1990s/3',
  },
  {
    id: 10,
    title: 'Mi Sangre Nueva',
    medium: 'acrylic on canvas',
    year: '1991',
    other: '',
    slug: './assets/img/painting/1990s/4',
  },
  {
    id: 11,
    title: 'Funtime Amarillo',
    medium: 'acrylic on canvas',
    year: '1991',
    other: '',
    slug: './assets/img/painting/1990s/5',
  },
  {
    id: 12,
    title: 'Jaguarman and the Coming of the New Heart',
    medium: 'acrylic on canvas',
    year: '1991',
    other: '',
    slug: './assets/img/painting/1990s/6',
  },
  {
    id: 13,
    title: 'Una Rosa',
    medium: 'acrylic on canvas',
    year: '1991',
    other: '',
    slug: './assets/img/painting/1990s/7',
  },
  {
    id: 14,
    title: 'Untitled',
    medium: 'acrylic on canvas',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/8',
  },
  {
    id: 15,
    title: 'Guts and Grace',
    medium: 'acrylic on canvas',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/9',
  },
  {
    id: 16,
    title: 'Rush Hour #4',
    medium: 'acrylic with found objects on panel',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/10',
  },
  {
    id: 17,
    title: 'Night of the Barrio Moon',
    medium: 'acrylic on canvas',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/11',
  },
  {
    id: 18,
    title: 'Teatro de Mi Corazon',
    medium: 'acrylic on canvas and panel',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/12',
  },
  {
    id: 19,
    title: 'Teatro de Mi Corazon (detail)',
    medium: 'acrylic on canvas and panel',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/13',
  },
  {
    id: 20,
    title: 'Teatro de Mi Corazon (detail)',
    medium: 'acrylic on canvas and panel',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/14',
  },
  {
    id: 21,
    title: 'Bato-man',
    medium: 'acrylic on canvas',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/15',
  },
  {
    id: 22,
    title: `Imagine, There's Nothing to Live or Die for, No Religions Too`,
    medium: 'acrylic on panel',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/16',
  },
  {
    id: 23,
    title: `Imagine, There's Nothing to Live or Die for, No Religions Too`,
    medium: 'acrylic on panel',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/17',
  },
  {
    id: 24,
    title: `Imagine, There's Nothing to Live or Die for, No Religions Too`,
    medium: 'acrylic on panel',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/18',
  },
  {
    id: 25,
    title: 'El Charro en Colorado',
    medium: 'acrylic on panel and frame',
    year: '1992',
    other: '',
    slug: './assets/img/painting/1990s/19',
  },
  {
    id: 26,
    title: 'Pachuco en Pink',
    medium: 'acrylic on canvas',
    year: '1993',
    other: '',
    slug: './assets/img/painting/1990s/20',
  },
  {
    id: 27,
    title: 'Posole',
    medium: 'acrylic on canvas',
    year: '1993',
    other: '',
    slug: './assets/img/painting/1990s/21',
  },
  {
    id: 28,
    title: 'Teatro Series',
    medium: 'acrylic on canvas',
    year: '1993',
    other: '',
    slug: './assets/img/painting/1990s/22',
  },
  {
    id: 29,
    title: 'Talking to the Spirits',
    medium: 'acrylic on canvas',
    year: '1993',
    other: '',
    slug: './assets/img/painting/1990s/23',
  },
  {
    id: 30,
    title: 'Jewel Pool',
    medium: 'acrylic on canvas',
    year: '1994',
    other: '',
    slug: './assets/img/painting/1990s/24',
  },
  {
    id: 31,
    title: 'Carrito #3',
    medium: 'acrylic on wood',
    year: '1994',
    other: '',
    slug: './assets/img/painting/1990s/25',
  },
  {
    id: 32,
    title: 'Chiapas Warrior de la Tierra Madre',
    medium: 'acrylic on canvas',
    year: '1995',
    other: '',
    slug: './assets/img/painting/1990s/26',
  },
  {
    id: 33,
    title: 'Right On!',
    medium: 'acrylic on canvas',
    year: '1996',
    other: '',
    slug: './assets/img/painting/1990s/27',
  },
  {
    id: 34,
    title: 'La Rosa II',
    medium: 'acrylic on panel and frame',
    year: '1996',
    other: '',
    slug: './assets/img/painting/1990s/28',
  },
  {
    id: 35,
    title: 'A Westside Wedding II',
    medium: 'acrylic on canvas',
    year: '1996',
    other: '',
    slug: './assets/img/painting/1990s/29',
  },
  {
    id: 36,
    title: 'Iglesia en el pueblo de Taos',
    medium: 'acrylic on panel',
    year: '1996',
    other: '',
    slug: './assets/img/painting/1990s/30',
  },
  {
    id: 37,
    title: 'La Iglesia San Francisco en Ranchos',
    medium: 'acrylic on canvas',
    year: '1996',
    other: '',
    slug: './assets/img/painting/1990s/31',
  },
  {
    id: 38,
    title: 'La Vista de Ranchos',
    medium: 'acrylic on canvas',
    year: '1996',
    other: '',
    slug: './assets/img/painting/1990s/32',
  },
  {
    id: 39,
    title: 'Apples and Orange',
    medium: 'acrylic on canvas board and frame',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/33',
  },
  {
    id: 40,
    title: 'El Psychedelic Punk Mariachi',
    medium: 'acrylic on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/34',
  },
  {
    id: 41,
    title: 'El Stereotype',
    medium: 'acrylic on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/35',
  },
  {
    id: 42,
    title: 'El Roy',
    medium: 'acrylic on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/36',
  },
  {
    id: 43,
    title: 'Have a Maize Day',
    medium: 'acrylic on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/37',
  },
  {
    id: 44,
    title: '',
    medium: 'acrylic and collage on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/38',
  },
  {
    id: 45,
    title: 'No Quiero',
    medium: 'acrylic and collage on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/39',
  },
  {
    id: 46,
    title: 'I Am What I Am',
    medium: 'acrylic and collage on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/40',
  },
  {
    id: 47,
    title: 'Forever Trapped',
    medium: 'acrylic and collage on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/41',
  },
  {
    id: 48,
    title: 'The Pilgrims Played All the Games They Knew',
    medium: 'acrylic and collage on panel',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/42',
  },
  {
    id: 49,
    title: `Tiempotrippin'`,
    medium: 'Krylon on thriftstore sunstone',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/43',
  },
  {
    id: 50,
    title: `Tiempotrippin'`,
    medium: 'Krylon on thriftstore sunstone',
    year: '1997',
    other: '',
    slug: './assets/img/painting/1990s/44',
  },
  {
    id: 51,
    title: 'El Corrido Cosmica',
    medium: 'acrylic on canvas and panel',
    year: '1998',
    other: '',
    slug: './assets/img/painting/1990s/45',
  },
  {
    id: 52,
    title: 'El Corrido Cosmica (detail)',
    medium: 'acrylic on canvas and panel',
    year: '1998',
    other: '',
    slug: './assets/img/painting/1990s/46',
  },
  {
    id: 53,
    title: 'El Corrido Cosmica (detail)',
    medium: 'acrylic on canvas and panel',
    year: '1998',
    other: '',
    slug: './assets/img/painting/1990s/47',
  },
  {
    id: 54,
    title: 'San Ysidro',
    medium: 'acrylic on panel',
    year: 'ca. 1998',
    other: '',
    slug: './assets/img/painting/1990s/48',
  },
  {
    id: 55,
    title: 'Picoso Hot and Fast',
    medium: 'acrylic on MDF panel',
    year: '1998',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/49',
  },
  {
    id: 56,
    title: 'Alien Surprise',
    medium: 'acrylic on MDF panel',
    year: '1998-1999',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/50',
  },
  {
    id: 57,
    title: 'Tacuche Haze',
    medium: 'acrylic on MDF panel',
    year: '1998-1999',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/51',
  },
  {
    id: 58,
    title: 'Viva Las Vegas',
    medium: 'acrylic on MDF panel',
    year: '1998-1999',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/52',
  },
  {
    id: 59,
    title: 'Viva Mejico',
    medium: 'acrylic on MDF panel',
    year: '1998-1999',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/53',
  },
  {
    id: 60,
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/54',
  },
  {
    id: 61,
    title: 'War! What is it Good For?',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/55',
  },
  {
    id: 62,
    title: 'Mighty Mighty',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/56',
  },
  {
    id: 63,
    title: 'Huelga!',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/57',
  },
  {
    id: 64,
    title: 'Chicano Power!',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/58',
  },
  {
    id: 65,
    title: 'Madre Cosmica',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/59',
  },
  {
    id: 66,
    title: 'Doble Jesus',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/60',
  },
  {
    id: 67,
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/61',
  },
  {
    id: 68,
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/62',
  },
  {
    id: 69,
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/63',
  },
  {
    id: 70,
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/64',
  },
  {
    id: 71,
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/65',
  },
  {
    id: 72,
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/66',
  },
  {
    id: 73,
    title: 'Untitled',
    medium: 'acrylic on grommeted canvas',
    year: '1999-2016',
    other:
      'Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)',
    slug: './assets/img/painting/1990s/67',
  },
  {
    id: 74,
    title: 'Untitled',
    medium: 'acrylic on canvas',
    year: '1999',
    other: '',
    slug: './assets/img/painting/1990s/68',
  },
  {
    id: 75,
    title: 'Obsidian Ranfla series #1',
    medium: 'spraypaint, screenprint, and oil on panel',
    year: '1999',
    other: '',
    slug: './assets/img/painting/1990s/69',
  },
  {
    id: 76,
    title: 'Obsidian Ranfla series #3',
    medium: 'spraypaint, screenprint, and oil on panel',
    year: '1999',
    other: '',
    slug: './assets/img/painting/1990s/70',
  },
  {
    id: 77,
    title: 'Obsidian Ranfla series #6',
    medium: 'spraypaint, screenprint, and oil on panel',
    year: '1999',
    other: '',
    slug: './assets/img/painting/1990s/71',
  },
  {
    id: 78,
    title: 'Obsidian Ranfla series #8',
    medium: 'spraypaint, screenprint, and oil on panel',
    year: '1999',
    other: '',
    slug: './assets/img/painting/1990s/72',
  },
  {
    id: 79,
    title: 'Los El Peez - (A Handy Carrying Case)',
    medium: 'screenprint on album cover',
    year: '1999-present',
    other: '',
    slug: './assets/img/painting/1990s/73',
  },
  {
    id: 80,
    title: 'Los El Peez; The Disk-O-Teca Series',
    medium: 'acrylic on vinyl album',
    year: '1999-present',
    other: '',
    slug: './assets/img/painting/1990s/74',
  },
  {
    id: 81,
    title: 'Los El Peez; The Disk-O-Teca Series',
    medium: 'acrylic on vinyl album',
    year: '1999-present',
    other: '',
    slug: './assets/img/painting/1990s/75',
  },
  {
    id: 82,
    title: 'Los El Peez; The Disk-O-Teca Series',
    medium: 'acrylic on vinyl album',
    year: '1999-present',
    other: '',
    slug: './assets/img/painting/1990s/76',
  },
  {
    id: 83,
    title: 'Los El Peez; The Disk-O-Teca Series',
    medium: 'acrylic on vinyl album',
    year: '1999-present',
    other: '',
    slug: './assets/img/painting/1990s/77',
  },
  {
    id: 84,
    title: 'Los El Peez; The Disk-O-Teca Series',
    medium: 'acrylic on vinyl album',
    year: '1999-present',
    other: '',
    slug: './assets/img/painting/1990s/78',
  },
  {
    id: 85,
    title: 'Los El Peez; The Disk-O-Teca Series',
    medium: 'acrylic on vinyl album',
    year: '1999-present',
    other: '',
    slug: './assets/img/painting/1990s/79',
  },
  {
    id: 86,
    title: '',
    medium: '',
    year: '',
    other: '',
    slug: './assets/img/painting/1990s/80',
  },
  {
    id: 87,
    title: 'Trapped',
    medium: 'acrylic on canvas',
    year: '2000',
    other: '',
    slug: './assets/img/painting/2000s/1',
  },
  {
    id: 88,
    title: 'Por Vida',
    medium: 'oil, spraypaint, screenprint on panel',
    year: '2000',
    other: '',
    slug: './assets/img/painting/2000s/2',
  },
  {
    id: 89,
    title: 'Mi Familia',
    medium: 'acrylic on panel and frame',
    year: '2001',
    other: '',
    slug: './assets/img/painting/2000s/3',
  },
  {
    id: 90,
    title: 'Sueños Surrealismo',
    medium: 'acrylic on canvas',
    year: '2001',
    other: '',
    slug: './assets/img/painting/2000s/4',
  },
  {
    id: 91,
    title: 'Side Altar: Pedro Antonio Fresquis',
    medium: 'oil on canvas',
    year: '2002',
    other: '',
    slug: './assets/img/painting/2000s/5',
  },

  {
    id: 92,
    title: 'Homage to Jim Dine (diptych - left side)',
    medium: 'acrylic on canvas with attached paintbrush',
    year: '2005',
    other: '',
    slug: './assets/img/painting/2000s/6',
  },
  {
    id: 93,
    title: 'Homage to Jim Dine (diptych - right side)',
    medium: 'oil on canvas',
    year: '2005',
    other: '',
    slug: './assets/img/painting/2000s/7',
  },
  {
    id: 94,
    title: 'A Westside Wedding; El Aniversario',
    medium: 'oil on canvas',
    year: '2005',
    other: '',
    slug: './assets/img/painting/2000s/8',
  },
  {
    id: 95,
    title: 'Angela Davis',
    medium: 'acrylic on unstretched canvas',
    year: '2006',
    other:
      'Los Animales (Art Collective - Carlos Fresquez, Veronica Herrera, Josiah Lopez, Merlin Madrid, Alfredo Ortiz, and Francisco Zamora)',
    slug: './assets/img/painting/2000s/9',
  },
  {
    id: 96,
    title: 'See Ya Real Soon',
    medium: 'acrylic on canvas',
    year: 'ca. 2007',
    other: '',
    slug: './assets/img/painting/2000s/10',
  },
  {
    id: 97,
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/11',
  },
  {
    id: 98,
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/12',
  },
  {
    id: 99,
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/13',
  },
  {
    id: 100,
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/14',
  },
  {
    id: 101,
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/15',
  },
  {
    id: 102,
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/16',
  },
  {
    id: 103,
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/17',
  },
  {
    id: 104,
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/18',
  },
  {
    id: 105,
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/19',
  },
  {
    id: 106,
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/20',
  },
  {
    id: 107,
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/21',
  },
  {
    id: 108,
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/22',
  },
  {
    id: 109,
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/23',
  },
  {
    id: 110,
    title: 'Box Painting Series',
    medium: 'acrylic on box',
    year: '2007',
    other: '',
    slug: './assets/img/painting/2000s/24',
  },
  {
    id: 111,
    title: 'Mejico y Yo',
    medium: 'acrylic and screenprint on panel',
    year: '2009',
    other: '',
    slug: './assets/img/painting/2000s/25',
  },
  {
    id: 112,
    title: 'El Meso- Moderno Series #3',
    medium: 'acrylic on canvas',
    year: '2010',
    other: '',
    slug: './assets/img/painting/2010s/1',
  },
  {
    id: 113,
    title: 'A Fine Time for Dine (diptych - left side)',
    medium: 'acrylic on canvas',
    year: '',
    other: '',
    slug: './assets/img/painting/2010s/2',
  },
  {
    id: 114,
    title: 'A Fine Time for Dine (diptych - right side)',
    medium: 'acrylic and spraypaint on canvas',
    year: '',
    other: '',
    slug: './assets/img/painting/2010s/3',
  },
  {
    id: 115,
    title: 'Decolonize',
    medium: 'acrylic on grommeted canvas',
    year: '2014',
    other: '',
    slug: './assets/img/painting/2010s/4',
  },
  {
    id: 116,
    title: 'End Barrio Warfare',
    medium: 'acrylic on canvas',
    year: '2016',
    other: '',
    slug: './assets/img/painting/2010s/5',
  },
  {
    id: 117,
    title: 'El Aguila y El Serpiente',
    medium: 'acrylic on canvas',
    year: '2016',
    other: '',
    slug: './assets/img/painting/2010s/6',
  },
  {
    id: 118,
    title: 'Time Transfixed (After Magritte)',
    medium: 'oil on canvas',
    year: '2021',
    other: '',
    slug: './assets/img/painting/2020s/1',
  },
  {
    id: 119,
    title: 'El Encuentro',
    medium: 'acrylic on canvas',
    year: '2022',
    other: '',
    slug: './assets/img/painting/2020s/2',
  },
  {
    id: 120,
    title: 'Nepantla',
    medium: 'acrylic on canvas',
    year: '2024',
    other: '',
    slug: './assets/img/painting/2020s/3',
  },
  {    id: 121,
    title: 'Raza Unida!',
    medium: 'acrylic on canvas',
    year: '2024',
    other: '',
    slug: './assets/img/painting/2020s/4',
  },
  {    id: 122,
    title: 'Mi Amor',
    medium: 'acrylic on canvas',
    year: '2024',
    other: '',
    slug: './assets/img/painting/2020s/5',
  }
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
                    <img class="img-fluid" src=${item.slug}.jpg alt="..."/>
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
                        src="${item.slug}.jpg"
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
                      <img class="img-fluid" src=${item.slug}.jpg alt="..."/>
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
                          src="${item.slug}.jpg"
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
