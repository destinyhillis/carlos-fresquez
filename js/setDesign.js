const setDesign = [
  {
    id: '168',
    title: `La Carpa Aztlan, I Don't Speak English Only`,
    medium: '',
    year: '1993',
    other: `Su Teatro Denver, CO <br>
    United Farmworkers Union Headquarters La Paz, CA <br>
    El Teatro Campesino San Juan Bautista, CA <br>
    New World Theater Amherst, MA <br>
    Weber State University Ogden, UT <br>
    Swathmore College Swathmore, PA <br>
    Topeka Performing Arts Center Topeka, KA <br>
    (Also, numerous other venues throughout the United States 1993-2020)`,
    slug: './assets/img/set-design/1990s/',
    video: '',
  },
  {
    id: '169',
    title: 'El Sol Que tu Eres,',
    medium: 'scenographer',
    year: '2005',
    other:
      'King Center Theater Denver, CO in 2005 <br> El Centro Su Teatro Denver, CO in 2016',
    slug: './assets/img/set-design/2000s/',
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/3VC9ayLe4hA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: '170',
    title: 'Refuge',
    medium: 'mural backdrop',
    year: '2022',
    other: 'The Curious Theater, Denver, CO <br> set design by Markus Henry',
    slug: './assets/img/set-design/2020s/',
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/BI5I-G0gBew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
]

setDesign.reverse()

if (setDesign.length) {
  setDesign.forEach(item => {
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
                        ${
                          item.video
                            ? item.video
                            : `<img
                              class="img-fluid d-block mx-auto"
                              src="${item.slug}${item.id}.jpg"
                              alt="..."
                            />`
                        }
  
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
  setDesign.forEach(item => {
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
