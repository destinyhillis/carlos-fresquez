const referenceMaterials = [
  {
    id: '1',
    title: 'Carlos Fresquez - Regis University DML Digital Initiatives',
    medium: '',
    year: '',
    other: '',
    slug: './assets/img/reference-materials/',
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/zbLgRnqsczs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: '2',
    title: 'Carlos Fresquez - Bonfils-Stanton Foundation; 2018 Artist Award',
    medium: '',
    year: '',
    other: '',
    slug: './assets/img/reference-materials/',
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/RFwBOFGRzg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: '3',
    title:
      'Making a positive impact through art making with Carlos Fresquez - Beyond the Gallery ep. 52',
    medium: '',
    year: '',
    other: '',
    slug: './assets/img/reference-materials/',
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/qag3HZ9u9y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: '4',
    title: 'Rhythm of the Neighborhood - Carlos Fresquez',
    medium: '',
    year: '',
    other: '',
    slug: './assets/img/reference-materials/',
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/eMrVu4UgmBk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: '5',
    title: 'Sangre Colorado; CVA exhibit explores the work of Carlos Fresquez',
    medium: '',
    year: '',
    other: '',
    slug: './assets/img/reference-materials/',
    video:
      'https://www.youtube.com/watch?v=0iepk7Pjy-Y&ab_channel=MetropolitanStateUniversityofDenver',
  },
  {
    id: '6',
    title: 'Fear No Art - Featuring Carlos Fresquez',
    medium: 'Carlos A. Fresquez - by Harrison Sadler',
    year: '',
    other: '',
    slug: './assets/img/reference-materials/',
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/7LbnNOTspJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: '7',
    title: 'Carlos A. Fresquez - by Harrison Sadler',
    medium: '',
    year: '',
    other: '',
    slug: './assets/img/reference-materials/',
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/T96fOfWW-9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: '8',
    title:
      'Cuatro; Carlos Fresquez Discusses His Installation - Denver Art Museum',
    medium: '',
    year: '',
    other: '',
    slug: './assets/img/reference-materials/',
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/Z9qL7LacFOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
]

if (referenceMaterials.length) {
  referenceMaterials.forEach(item => {
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
  referenceMaterials.forEach(item => {
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
                                      <i class="fas fa-play"></i> Play video
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
