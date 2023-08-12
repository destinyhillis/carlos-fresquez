const prints = [
  {
    id: 1,
    title: 'San Francisco en Taos',
    medium: 'spraypaint stencil on paper',
    year: '1985',
    other: '',
    slug: './assets/img/print/1980s/1',
  },
  {
    id: 2,
    title: 'Charro Muerto',
    medium: 'screenprint on paper',
    year: '1991',
    other: '',
    slug: './assets/img/print/1990s/1',
  },
  {
    id: 3,
    title: 'El Lowrider en Los Rockies',
    medium: 'screenprint on paper',
    year: '1991',
    other: '',
    slug: './assets/img/print/1990s/2',
  },
  {
    id: 4,
    title: 'Jaguarman and the New Heart',
    medium: 'Reduction Woodcut Print',
    year: '1992',
    other: '',
    slug: './assets/img/print/1990s/3',
  },
  {
    id: 5,
    title: 'El Codex del Pachucada',
    medium: 'screenprint on paper',
    year: '1992',
    other: '',
    slug: './assets/img/print/1990s/4',
  },
  {
    id: 6,
    title: 'Ta-Kill-Ya',
    medium: 'lithograph on paper',
    year: '1993',
    other: '',
    slug: './assets/img/print/1990s/5',
  },
  {
    id: 7,
    title: 'A Westside Wedding',
    medium: 'screenprint on paper',
    year: '1993',
    other: '',
    slug: './assets/img/print/1990s/6',
  },
  {
    id: 8,
    title: 'San Francisco en Ranchos',
    medium: 'screenprint on paper',
    year: '1994',
    other: '',
    slug: './assets/img/print/1990s/7',
  },
  {
    id: 9,
    title: 'A Rough Ride',
    medium: 'screenprint on paper',
    year: '1994',
    other: '',
    slug: './assets/img/print/1990s/8',
  },
  {
    id: 10,
    title: 'El Gallo',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/9',
  },
  {
    id: 11,
    title: '¡Despiertate! Wake Up!',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/10',
  },
  {
    id: 12,
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/11',
  },
  {
    id: 13,
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/12',
  },
  {
    id: 14,
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/13',
  },
  {
    id: 15,
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/14',
  },
  {
    id: 16,
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/15',
  },
  {
    id: 17,
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/16',
  },
  {
    id: 18,
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/17',
  },
  {
    id: 19,
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/18',
  },
  {
    id: 20,
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/19',
  },
  {
    id: 21,
    title: 'Sueños de Frida',
    medium: 'screenprint on paper',
    year: '2000',
    other: ' collaborative print - with Sylvia Montero',
    slug: './assets/img/print/2000s/1',
  },
  {
    id: 22,
    title: 'El Sol Que tu Eres',
    medium: 'screenprint on paper',
    year: '2005',
    other: '',
    slug: './assets/img/print/2000s/2',
  },
  {
    id: 23,
    title: 'Serafin',
    medium: 'screenprint on paper',
    year: '2006',
    other: '',
    slug: './assets/img/print/2000s/3',
  },
  {
    id: 24,
    title: 'A Fairy Tale',
    medium: 'screenprint on paper',
    year: '2007',
    other: '',
    slug: './assets/img/print/2000s/4',
  },
  {
    id: 25,
    title: 'A Westside Wedding (El Aniversario)',
    medium: 'screenprint on paper',
    year: '2007',
    other: '',
    slug: './assets/img/print/2000s/5',
  },
  {
    id: 26,
    title: 'Calaca I',
    medium: 'screenprint on paper',
    year: '2011',
    other: '',
    slug: './assets/img/print/2010s/1',
  },
  {
    id: 27,
    title: 'Calaca II',
    medium: 'screenprint on paper',
    year: '2012',
    other: '',
    slug: './assets/img/print/2010s/2',
  },
  {
    id: 28,
    title: 'Raza Powered',
    medium: 'screenprint on paper',
    year: '2015',
    other: '',
    slug: './assets/img/print/2010s/3',
  },
]

prints.reverse()

if (prints.length) {
  prints.forEach(item => {
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
  prints.forEach(item => {
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
