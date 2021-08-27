const prints = [
  {
    id: '1',
    title: 'Charro Muerto',
    medium: 'screenprint on paper',
    year: '1991',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '2',
    title: 'El Lowrider en Los Rockies',
    medium: 'screenprint on paper',
    year: '1991',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '3',
    title: 'Jaguarman and the New Heart',
    medium: 'Reduction Woodcut Print',
    year: '1992',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '4',
    title: 'El Codex del Pachucada',
    medium: 'screenprint on paper',
    year: '1992',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '5',
    title: 'Ta-Kill-Ya',
    medium: 'lithograph on paper',
    year: '1993',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '6',
    title: 'A Westside Wedding',
    medium: 'screenprint on paper',
    year: '1993',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '7',
    title: 'San Francisco en Ranchos',
    medium: 'screenprint on paper',
    year: '1994',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '8',
    title: 'A Rough Ride',
    medium: 'screenprint on paper',
    year: '1994',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '9',
    title: 'El Gallo',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '10',
    title: '¡Despiertate! Wake Up!',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '11',
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '12',
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '13',
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '14',
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '15',
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '16',
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '17',
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '18',
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '19',
    title: 'Tortillas; Hecho en Aztlan',
    medium: 'screenprint on paper',
    year: '1998',
    other: '',
    slug: './assets/img/print/1990s/',
  },
  {
    id: '20',
    title: 'Sueños de Frida',
    medium: 'screenprint on paper',
    year: '2000',
    other: ' collaborative print - with Sylvia Montero',
    slug: './assets/img/print/2000s/',
  },
  {
    id: '21',
    title: 'El Sol Que tu Eres',
    medium: 'screenprint on paper',
    year: '2005',
    other: '',
    slug: './assets/img/print/2000s/',
  },
  {
    id: '22',
    title: 'Serafin',
    medium: 'screenprint on paper',
    year: '2006',
    other: '',
    slug: './assets/img/print/2000s/',
  },
  {
    id: '23',
    title: 'A Fairy Tale',
    medium: 'screenprint on paper',
    year: '2007',
    other: '',
    slug: './assets/img/print/2000s/',
  },
  {
    id: '24',
    title: 'A Westside Wedding (El Aniversario)',
    medium: 'screenprint on paper',
    year: '2007',
    other: '',
    slug: './assets/img/print/2000s/',
  },
  {
    id: '25',
    title: 'Calaca I',
    medium: 'screenprint on paper',
    year: '2011',
    other: '',
    slug: './assets/img/print/2010s/',
  },
  {
    id: '26',
    title: 'Calaca II',
    medium: 'screenprint on paper',
    year: '2012',
    other: '',
    slug: './assets/img/print/2010s/',
  },
  {
    id: '27',
    title: 'Raza Powered',
    medium: 'screenprint on paper',
    year: '2015',
    other: '',
    slug: './assets/img/print/2010s/',
  },
]

let sectionTitle = `
<div class="d-flex justify-content-between pb-3">
  <h3 class="section-heading text-uppercase">Print</h3>
</div>
`

$('#sections').append(sectionTitle)

prints.reverse()

if (prints.length) {
  prints.forEach((item) => {
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
