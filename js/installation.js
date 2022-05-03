const installations = []

// Loop through installation images
for (let i = 1; i <= 10; i++) {
  installations.push({
    id: i,
    title: 'Codices of the Barrio; An Anti Gang Ofrenda',
    medium: 'installation',
    year: '1991',
    other: 'EDGE Gallery, Photography by Chuck Ault',
    slug: './assets/img/installation/1990s/',
  })
}

installations.push(
  {
    id: 11,
    title: 'Altar para mi Abuelo, Fernando Fresquez',
    medium: 'installation',
    year: '1998',
    other: `Mixed Media with my Grandfather's 1930's Saddle`,
    slug: './assets/img/installation/1990s/',
  },
  {
    id: 12,
    title: 'Altar para mi Abuelo, Fernando Fresquez',
    medium: 'installation',
    year: '1998',
    other: `Mixed Media with my Grandfather's 1930's Saddle`,
    slug: './assets/img/installation/1990s/',
  }
)

for (let i = 13; i <= 19; i++) {
  installations.push({
    id: i,
    title: 'El Espejo: Checking the Rearview of Chicano Time',
    medium: 'installation',
    year: '1995',
    other: '',
    slug: './assets/img/installation/1990s/',
  })
}

for (let i = 20; i <= 29; i++) {
  installations.push({
    id: i,
    title: 'Mi Casa es Su Casa',
    medium: 'installation',
    year: '1995',
    other: 'Photography by Chuck Ault',
    slug: './assets/img/installation/1990s/',
  })
}

for (let i = 30; i <= 37; i++) {
  installations.push({
    id: i,
    title: 'Lagrima/Teardrop',
    medium: 'installation',
    year: '1998',
    other: 'Photography by Chuck Ault',
    slug: './assets/img/installation/1990s/',
  })
}

for (let i = 38; i <= 42; i++) {
  installations.push({
    id: i,
    title: 'Lagrima/Teardrop',
    medium: 'installation',
    year: '1998',
    other: '',
    slug: './assets/img/installation/1990s/',
  })
}

installations.push({
  id: 43,
  title: '',
  medium: 'installation',
  year: '',
  other: '',
  slug: './assets/img/installation/1990s/',
})

installations.push(
  {
    id: 44,
    title: '',
    medium: 'installation',
    year: '',
    other: '',
    slug: './assets/img/installation/2000s/',
  },
  {
    id: 45,
    title: 'Los Supersonicos',
    medium: 'installation',
    year: '',
    other: '',
    slug: './assets/img/installation/2000s/',
  },
  {
    id: 46,
    title: 'Los Supersonicos',
    medium: 'installation',
    year: '',
    other: '',
    slug: './assets/img/installation/2000s/',
  },
  {
    id: 47,
    title: 'Homage to Jim Dine',
    medium: 'installation',
    year: '2005',
    other: '',
    slug: './assets/img/installation/2000s/',
  }
)

for (let i = 48; i <= 73; i++) {
  installations.push({
    id: i,
    title: 'Salon de los Ilegales',
    medium: 'altered thriftstore landscapes (ready-made added)',
    year: '2005-present',
    other: '',
    slug: './assets/img/installation/2000s/',
  })
}

installations.push(
  {
    id: 74,
    title: 'La Escalera',
    medium: 'installation',
    year: '',
    other: '',
    slug: './assets/img/installation/2000s/',
  },
  {
    id: 75,
    title: 'Ofreda para mi Abuela-Lorencita Fresquez',
    medium: 'installation',
    year: '2001',
    other: '',
    slug: './assets/img/installation/2000s/',
  },
  {
    id: 76,
    title: 'Ofreda para mi Abuela-Lorencita Fresquez (detail)',
    medium: 'installation',
    year: '2001',
    other: '',
    slug: './assets/img/installation/2000s/',
  },
  {
    id: 77,
    title: 'Manifest Destiny',
    medium: 'acrylic on wall',
    year: 'ca. 2013',
    other: '',
    slug: './assets/img/installation/2010s/',
  },
  {
    id: 78,
    title: 'Manifest Destiny',
    medium: 'acrylic on wall',
    year: 'ca. 2013',
    other: '',
    slug: './assets/img/installation/2010s/',
  },
  {
    id: 79,
    title: 'Chicanos Avanzan - Converse All Star',
    medium: 'acrylic on wall',
    year: '2016',
    other: '',
    slug: './assets/img/installation/2010s/',
  },
  {
    id: 80,
    title: 'Chicanos Avanzan - Converse All Star',
    medium: 'acrylic on wall',
    year: '2016',
    other: '',
    slug: './assets/img/installation/2010s/',
  },
  {
    id: 81,
    title: 'Perilous Journey',
    medium: 'latex paint on wall',
    year: '2018',
    other: 'Assistant: Lorena Aranda',
    slug: './assets/img/installation/2010s/',
  }
)

installations.reverse()

if (installations.length) {
  installations.forEach(item => {
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
  installations.forEach(item => {
    let slug = item.slug
    if (slug.includes(decade) || decade == 'all') {
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
