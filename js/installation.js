const installations = [];

// Loop through installation images
for (let i = 1; i <= 10; i++) {
  installations.push({
    id: i,
    title: "Codices of the Barrio; An Anti Gang Ofrenda",
    medium: "installation",
    year: "1991",
    other: "EDGE Gallery, Photography by Chuck Ault",
    slug: "./assets/img/installation/1990s/",
  });
}

installations.push(
  {
    id: 11,
    title: "Altar para mi Abuelo, Fernando Fresquez",
    medium: "installation",
    year: "1998",
    other: `Mixed Media with my Grandfather's 1930's Saddle`,
    slug: "./assets/img/installation/1990s/",
  },
  {
    id: 12,
    title: "Altar para mi Abuelo, Fernando Fresquez",
    medium: "installation",
    year: "1998",
    other: `Mixed Media with my Grandfather's 1930's Saddle`,
    slug: "./assets/img/installation/1990s/",
  }
);

for (let i = 13; i <= 19; i++) {
  installations.push({
    id: i,
    title: "El Espejo: Checking the Rearview of Chicano Time",
    medium: "installation",
    year: "1995",
    other: "",
    slug: "./assets/img/installation/1990s/",
  });
}

for (let i = 20; i <= 29; i++) {
  installations.push({
    id: i,
    title: "Mi Casa es Su Casa",
    medium: "installation",
    year: "1995",
    other: "Photography by Chuck Ault",
    slug: "./assets/img/installation/1990s/",
  });
}

for (let i = 30; i <= 37; i++) {
  installations.push({
    id: i,
    title: "Lagrima/Teardrop",
    medium: "installation",
    year: "1998",
    other: "Photography by Chuck Ault",
    slug: "./assets/img/installation/1990s/",
  });
}

for (let i = 38; i <= 42; i++) {
  installations.push({
    id: i,
    title: "Lagrima/Teardrop",
    medium: "installation",
    year: "1998",
    other: "",
    slug: "./assets/img/installation/1990s/",
  });
}

installations.push({
  id: 43,
  title: "",
  medium: "installation",
  year: "",
  other: "",
  slug: "./assets/img/installation/1990s/",
});

installations.push(
  {
    id: 44,
    title: "",
    medium: "installation",
    year: "",
    other: "",
    slug: "./assets/img/installation/2000s/",
  },
  {
    id: 45,
    title: "Los Supersonicos",
    medium: "installation",
    year: "",
    other: "",
    slug: "./assets/img/installation/2000s/",
  },
  {
    id: 46,
    title: "Los Supersonicos",
    medium: "installation",
    year: "",
    other: "",
    slug: "./assets/img/installation/2000s/",
  },
  {
    id: 47,
    title: "",
    medium: "installation",
    year: "2005",
    other: "",
    slug: "./assets/img/installation/2000s/",
  },
  {
    id: 48,
    title: "Homage to Jim Dine",
    medium: "installation",
    year: "",
    other: "",
    slug: "./assets/img/installation/2000s/",
  },
  {
    id: 49,
    title: "",
    medium: "installation",
    year: "",
    other: "",
    slug: "./assets/img/installation/2000s/",
  },
  {
    id: 50,
    title: "La Escalera",
    medium: "installation",
    year: "",
    other: "",
    slug: "./assets/img/installation/2000s/",
  },
  {
    id: 51,
    title: "Ofreda para mi Abuela-Lorencita Fresquez",
    medium: "installation",
    year: "2001",
    other: "",
    slug: "./assets/img/installation/2000s/",
  },
  {
    id: 52,
    title: "Ofreda para mi Abuela-Lorencita Fresquez (detail)",
    medium: "installation",
    year: "2001",
    other: "",
    slug: "./assets/img/installation/2000s/",
  }
);

let sectionTitle = `
<div class="d-flex justify-content-between pb-3">
  <h3 class="section-heading text-uppercase">Installation</h3>
</div>
`;

$("#sections").append(sectionTitle);

if (installations.length) {
  installations.forEach((item) => {
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

    $("#sections").append(section);
    $("#modals").append(modal);
  });
}
