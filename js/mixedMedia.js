const mixedMedia = [
  {
    id: '1',
    title: 'The Urban Charro',
    medium: 'mixed media',
    year: '1988',
    other: '',
    slug: './assets/img/mixed-media/1980s/',
  },
  {
    id: '2',
    title: 'Para Mi Esposa',
    medium: 'mixed media',
    year: '1991',
    other: '',
    slug: './assets/img/mixed-media/1990s/',
  },
  {
    id: '3',
    title: 'eRACEd  Cartooning',
    medium: 'graphite on paper',
    year: '1992',
    other: '',
    slug: './assets/img/mixed-media/1990s/',
  },
  {
    id: '4',
    title: 'The Cubist Cholo',
    medium: 'pastel and color pencil on paper',
    year: '1992',
    other: '',
    slug: './assets/img/mixed-media/1990s/',
  },
  {
    id: '5',
    title: 'El Pachuco Rasquache',
    medium: 'mixed media',
    year: '1994',
    other: '',
    slug: './assets/img/mixed-media/1990s/',
  },
  {
    id: '6',
    title: 'For Those Who Chant',
    medium: 'mixed media',
    year: 'ca. 1998',
    other: '',
    slug: './assets/img/mixed-media/1990s/',
  },
  {
    id: '7',
    title: 'One World, Not Three',
    medium: 'mixed media',
    year: '1999',
    other: '',
    slug: './assets/img/mixed-media/1990s/',
  },
  {
    id: '8',
    title: 'Guitar for the Psyhchedelicpunkmariachi',
    medium: '"Mexed" media on wood',
    year: '2000',
    other: '',
    slug: './assets/img/mixed-media/2000s/',
  },
  {
    id: '9',
    title: 'Guitar for the Psyhchedelicpunkmariachi',
    medium: '"Mexed" media on wood',
    year: '2000',
    other: '',
    slug: './assets/img/mixed-media/2000s/',
  },
  {
    id: '10',
    title: 'Guitar for the Psyhchedelicpunkmariachi',
    medium: '"Mexed" media on wood',
    year: '2000',
    other: '',
    slug: './assets/img/mixed-media/2000s/',
  },
  {
    id: '11',
    title: 'Guitar for the Psyhchedelicpunkmariachi',
    medium: '"Mexed" media on wood',
    year: '2000',
    other: '',
    slug: './assets/img/mixed-media/2000s/',
  },
  {
    id: '12',
    title: 'Vida, Amor y Muerte #2',
    medium: 'Pastel and Color Pencil on Paper',
    year: '2014',
    other: '',
    slug: './assets/img/mixed-media/2010s/',
  },
]

mixedMedia.reverse()

if (mixedMedia.length) {
  mixedMedia.forEach(item => {
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
  mixedMedia.forEach(item => {
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
