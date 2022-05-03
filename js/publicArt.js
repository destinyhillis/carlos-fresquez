const publicArt = [
  {
    id: '1',
    title: 'City Blues',
    medium: 'acrylic on panel',
    year: '1989',
    other: '96" x 144"',
    slug: './assets/img/public-art/1980s/',
  },
  {
    id: '2',
    title: 'El Vaquero',
    medium: 'painted mural',
    year: '1997',
    other: `20' x 20', 35th and Downing, Denver, CO`,
    slug: './assets/img/public-art/1990s/',
  },
  {
    id: '3',
    title: 'Un Corrido para la Gente',
    medium: '',
    year: '2005',
    other: `Morrison Road Gateway, Denver, CO`,
    slug: './assets/img/public-art/2000s/',
  },
  {
    id: '4',
    title: 'Spruced Up',
    medium: '',
    year: '2018',
    other:
      '16th Street Mall (in the alley between Champa and Stout), Denver, CO',
    slug: './assets/img/public-art/2010s/',
  },
  {
    id: '5',
    title: 'Spruced Up',
    medium: '',
    year: '2018',
    other:
      '16th Street Mall (in the alley between Champa and Stout), Denver, CO',
    slug: './assets/img/public-art/2010s/',
  },
  {
    id: '6',
    title: 'Que Viva Paco',
    medium: 'painted stainless steel',
    year: '2020',
    other: 'Francisco "Paco" Sanchez Park, Denver, CO',
    slug: './assets/img/public-art/2020s/',
  },
  {
    id: '7',
    title: 'Que Viva Paco',
    medium: 'painted stainless steel',
    year: '2020',
    other: 'Francisco "Paco" Sanchez Park, Denver, CO',
    slug: './assets/img/public-art/2020s/',
  },
  {
    id: '8',
    title: 'Que Viva Paco',
    medium: 'painted stainless steel',
    year: '2020',
    other: 'Francisco "Paco" Sanchez Park, Denver, CO',
    slug: './assets/img/public-art/2020s/',
  },
  {
    id: '9',
    title: 'Que Viva Paco',
    medium: 'painted stainless steel',
    year: '2020',
    other: 'Francisco "Paco" Sanchez Park, Denver, CO',
    slug: './assets/img/public-art/2020s/',
  },
]

publicArt.reverse()

if (publicArt.length) {
  publicArt.forEach(item => {
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
  publicArt.forEach(item => {
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
