const indexPainting = [
  {
    id: 16,
    title: "Zoot Suit en los Rockies",
    medium: "spraypaint and airbrushed acrylic on panel",
    year: "1984",
    other: "",
    slug: "./assets/img/painting/1980s/4",
  },
  {
    id: 17,
    title: "Nuestra Señora de Aztlan",
    medium: "acrylic and collage on paper board",
    year: "1989",
    other: "",
    slug: "./assets/img/painting/1980s/14",
  },
  {
    id: 18,
    title: "Missing You",
    medium: "acrylic on canvas and panel",
    year: "1990",
    other: "",
    slug: "./assets/img/painting/1990s/17",
  },
  {
    id: 19,
    title: "Untitled",
    medium: "acrylic on canvas",
    year: "1992",
    other: "",
    slug: "./assets/img/painting/1990s/22",
  },
  {
    id: 20,
    title: "Posole",
    medium: "acrylic on canvas",
    year: "1993",
    other: "",
    slug: "./assets/img/painting/1990s/35",
  },
  {
    id: 21,
    title: "Talking to the Spirits",
    medium: "acrylic on canvas",
    year: "1993",
    other: "",
    slug: "./assets/img/painting/1990s/37",
  },
  {
    id: 22,
    title: `Tiempotrippin'`,
    medium: "Krylon on thriftstore sunstone",
    year: "1997",
    other: "",
    slug: "./assets/img/painting/1990s/60",
  },
  {
    id: 23,
    title: "Doble Jesus",
    medium: "acrylic on grommeted canvas",
    year: "1999-2016",
    other:
      "Los Supersonicos (Art Collective of Carlos Fresquez and Francisco Zamora)",
    slug: "./assets/img/painting/1990s/77",
  },
  {
    id: 24,
    title: "Los El Peez; The Disk-O-Teca Series",
    medium: "acrylic on vinyl album",
    year: "1999-present",
    other: "",
    slug: "./assets/img/painting/1990s/91",
  },
  {
    id: 2524,
    title: "A Fine Time for Dine (diptych - left side)",
    medium: "acrylic on canvas",
    year: "",
    other: "",
    slug: "./assets/img/painting/2010s/153",
  },
  {
    id: 26,
    title: "A Fine Time for Dine (diptych - right side)",
    medium: "acrylic and spraypaint on canvas",
    year: "",
    other: "",
    slug: "./assets/img/painting/2010s/154",
  },
  {
    id: 27,
    title: "El Aguila y El Serpiente",
    medium: "acrylic on canvas",
    year: "2016",
    other: "",
    slug: "./assets/img/painting/2010s/159",
  },
];

const indexPrint = [
  {
    id: 10,
    title: "A Westside Wedding",
    medium: "screenprint on paper",
    year: "1993",
    other: "",
    slug: "./assets/img/print/1990s/6",
  },
  {
    id: 11,
    title: "A Rough Ride",
    medium: "screenprint on paper",
    year: "1994",
    other: "",
    slug: "./assets/img/print/1990s/8",
  },
  {
    id: 12,
    title: "Tortillas; Hecho en Aztlan",
    medium: "screenprint on paper",
    year: "1998",
    other: "",
    slug: "./assets/img/print/1990s/15",
  },
  {
    id: 13,
    title: "El Sol Que tu Eres",
    medium: "screenprint on paper",
    year: "2005",
    other: "",
    slug: "./assets/img/print/2000s/21",
  },
  {
    id: 14,
    title: "Calaca I",
    medium: "screenprint on paper",
    year: "2011",
    other: "",
    slug: "./assets/img/print/2010s/25",
  },
  {
    id: 15,
    title: "Raza Powered",
    medium: "screenprint on paper",
    year: "2015",
    other: "",
    slug: "./assets/img/print/2010s/27",
  },
];

const indexInstallation = [
  {
    id: 1,
    title: "Codices of the Barrio; An Anti Gang Ofrenda",
    medium: "installation",
    year: "1991",
    other: "EDGE Gallery, Photography by Chuck Ault",
    slug: "./assets/img/installation/1990s/8",
  },
  {
    id: 2,
    title: "Altar para mi Abuelo, Fernando Fresquez",
    medium: "installation",
    year: "1998",
    other: `Mixed Media with my Grandfather's 1930's Saddle`,
    slug: "./assets/img/installation/1990s/11",
  },
  {
    id: 3,
    title: "El Espejo: Checking the Rearview of Chicano Time",
    medium: "installation",
    year: "1995",
    other: "",
    slug: "./assets/img/installation/1990s/18",
  },
  {
    id: 4,
    title: "Mi Casa es Su Casa",
    medium: "installation",
    year: "1995",
    other: "Photography by Chuck Ault",
    slug: "./assets/img/installation/1990s/20",
  },
  {
    id: 5,
    title: "Homage to Jim Dine",
    medium: "installation",
    year: "",
    other: "",
    slug: "./assets/img/installation/2000s/48",
  },
  {
    id: 6,
    title: "Ofreda para mi Abuela-Lorencita Fresquez",
    medium: "installation",
    year: "2001",
    other: "",
    slug: "./assets/img/installation/2000s/51",
  },
];

const indexMixedMedia = [
  {
    id: 7,
    title: "The Urban Charro",
    medium: "mixed media",
    year: "1988",
    other: "",
    slug: "./assets/img/mixed-media/1980s/1",
  },
  {
    id: 8,
    title: "Guitar for the Psyhchedelicpunkmariachi",
    medium: '"Mexed" media on wood',
    year: "2000",
    other: "",
    slug: "./assets/img/mixed-media/2000s/8",
  },
  {
    id: 9,
    title: "Vida, Amor y Muerte #2",
    medium: "Pastel and Color Pencil on Paper",
    year: "2014",
    other: "",
    slug: "./assets/img/mixed-media/2010s/12",
  },
];

if (indexPainting.length) {
  let indexSectionTitle = `
      <div class="d-flex justify-content-between pb-3">
        <h3 class="section-heading text-uppercase">Painting</h3>
      </div>
    `;
  $("#index-sections").append(indexSectionTitle);

  indexPainting.forEach((item) => {
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
  `;

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
            <img src="assets/close-icon.svg" alt="Close modal" />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;

    $("#index-sections").append(section);
    $("#index-modals").append(modal);
  });
  const viewMoreButton = `
  <div class="row justify-content-center">
      <div class="col">
          <a href="../painting.html">
              <button type="button" class="btn btn-outline-light mt-4">
                  <i class="fas fa-plus"></i> View More
              </button>
          </a>
      </div>
  </div>
`;

  $("#index-sections").append(viewMoreButton);
}

if (indexPrint.length) {
  let indexSectionTitle = `
      <div class="d-flex justify-content-between pb-3">
        <h3 class="section-heading text-uppercase">Print</h3>
      </div>
    `;
  $("#index-sections").append(indexSectionTitle);

  indexPrint.forEach((item) => {
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
  `;

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
            <img src="assets/close-icon.svg" alt="Close modal" />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;

    $("#index-sections").append(section);
    $("#index-modals").append(modal);
  });
}

if (indexInstallation.length) {
  let indexSectionTitle = `
      <div class="d-flex justify-content-between pb-3">
        <h3 class="section-heading text-uppercase">Installation</h3>
      </div>
    `;
  $("#index-sections").append(indexSectionTitle);

  indexInstallation.forEach((item) => {
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
  `;

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
            <img src="assets/close-icon.svg" alt="Close modal" />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;

    $("#index-sections").append(section);
    $("#index-modals").append(modal);
  });
}

if (indexMixedMedia.length) {
  let indexSectionTitle = `
      <div class="d-flex justify-content-between pb-3">
        <h3 class="section-heading text-uppercase">Mixed Media</h3>
      </div>
    `;
  $("#index-sections").append(indexSectionTitle);

  indexMixedMedia.forEach((item) => {
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
  `;

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
            <img src="assets/close-icon.svg" alt="Close modal" />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;

    $("#index-sections").append(section);
    $("#index-modals").append(modal);
  });
}
