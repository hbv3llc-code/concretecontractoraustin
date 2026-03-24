export interface City {
  slug: string;
  name: string;
  county: string;
  lat: number;
  lng: number;
  distanceMiles: number;
  neighborhoods: string[];
  blurb: string;
}

export const cities: City[] = [
  {
    slug: "round-rock",
    name: "Round Rock",
    county: "Williamson",
    lat: 30.5083,
    lng: -97.6789,
    distanceMiles: 20,
    neighborhoods: ["Teravista", "Walsh Ranch", "Forest Creek", "Stone Canyon", "Mayfield Ranch"],
    blurb:
      "Round Rock is one of Austin's fastest-growing suburbs, with thousands of new homes and commercial projects requiring quality concrete work every year.",
  },
  {
    slug: "cedar-park",
    name: "Cedar Park",
    county: "Williamson",
    lat: 30.5052,
    lng: -97.8203,
    distanceMiles: 22,
    neighborhoods: ["Brushy Creek", "Twin Creeks", "Buttercup Creek", "Anderson Mill", "Carriage Hills"],
    blurb:
      "Cedar Park's rapid residential growth and upscale neighborhoods make it one of our most active service areas for driveways, patios, and decorative concrete.",
  },
  {
    slug: "georgetown",
    name: "Georgetown",
    county: "Williamson",
    lat: 30.6327,
    lng: -97.6771,
    distanceMiles: 30,
    neighborhoods: ["Sun City", "Teravista", "Wolf Ranch", "Serenada", "Georgetown Village"],
    blurb:
      "Georgetown's historic charm and active retirement communities like Sun City generate consistent demand for concrete driveways, patios, and flatwork.",
  },
  {
    slug: "pflugerville",
    name: "Pflugerville",
    county: "Travis",
    lat: 30.4388,
    lng: -97.6200,
    distanceMiles: 15,
    neighborhoods: ["Falcon Pointe", "Sorento", "Highland Park", "Blackhawk", "Springbrook"],
    blurb:
      "Pflugerville's affordable housing market and active new construction make it a top destination for residential concrete services east of Austin.",
  },
  {
    slug: "kyle",
    name: "Kyle",
    county: "Hays",
    lat: 29.9896,
    lng: -97.8772,
    distanceMiles: 25,
    neighborhoods: ["Plum Creek", "Six Creeks", "Anthem", "Crosswinds", "Waterleaf"],
    blurb:
      "Kyle is one of the fastest-growing cities in Texas, and its booming residential construction creates high demand for driveways, patios, and slab foundations.",
  },
  {
    slug: "buda",
    name: "Buda",
    county: "Hays",
    lat: 29.9899,
    lng: -97.8305,
    distanceMiles: 20,
    neighborhoods: ["Whispering Hollow", "Ruby Ranch", "Shadow Creek", "Garlic Creek", "Sunfield"],
    blurb:
      "Buda's small-town feel and rapid suburban growth mean homeowners here are investing heavily in outdoor living spaces, driveways, and new construction slabs.",
  },
  {
    slug: "west-lake-hills",
    name: "West Lake Hills",
    county: "Travis",
    lat: 30.2963,
    lng: -97.8028,
    distanceMiles: 8,
    neighborhoods: ["Rob Roy", "Rollingwood", "West Lake Hills Estates", "Bee Cave Road Corridor", "Lost Creek"],
    blurb:
      "West Lake Hills is an affluent enclave just west of Austin where high-end homeowners demand premium concrete work — stamped driveways, custom patios, and precision flatwork.",
  },
  {
    slug: "leander",
    name: "Leander",
    county: "Williamson",
    lat: 30.5788,
    lng: -97.8531,
    distanceMiles: 28,
    neighborhoods: ["Crystal Falls", "Travisso", "Mason Hills", "Carneros Ranch", "Grand Mesa"],
    blurb:
      "Leander's explosive population growth and high-income developments like Crystal Falls and Travisso generate strong demand for decorative and structural concrete work.",
  },
  {
    slug: "hutto",
    name: "Hutto",
    county: "Williamson",
    lat: 30.5427,
    lng: -97.5444,
    distanceMiles: 25,
    neighborhoods: ["Star Ranch", "Riverview", "Cottonwood Creek", "Cameron Park", "Legends of Hutto"],
    blurb:
      "Hutto is a fast-growing suburb northeast of Austin where new subdivisions and expanding commercial districts keep our crew busy year-round.",
  },
  {
    slug: "liberty-hill",
    name: "Liberty Hill",
    county: "Williamson",
    lat: 30.6627,
    lng: -97.9218,
    distanceMiles: 38,
    neighborhoods: ["Santa Rita Ranch", "Brixton", "Stonewall Ranch", "Orchard Ridge", "Rancho Alto"],
    blurb:
      "Liberty Hill is one of the newest hot spots for Austin-area growth, with large master-planned communities driving demand for driveways, foundations, and outdoor concrete.",
  },
  {
    slug: "lakeway",
    name: "Lakeway",
    county: "Travis",
    lat: 30.3577,
    lng: -97.9773,
    distanceMiles: 22,
    neighborhoods: ["Rough Hollow", "Flintrock Falls", "Lake Travis", "Serene Hills", "The Hills"],
    blurb:
      "Lakeway's lakefront properties and upscale communities demand high-quality decorative concrete — from resort-style pool decks to stamped driveways and custom patios.",
  },
  {
    slug: "bastrop",
    name: "Bastrop",
    county: "Bastrop",
    lat: 30.1107,
    lng: -97.3151,
    distanceMiles: 35,
    neighborhoods: ["Pecan Park", "Colony Creek", "Piney Creek Crossing", "Lost Pines", "Tahitian Village"],
    blurb:
      "Bastrop combines small-town living with steady growth east of Austin, making it an active market for residential driveways, slabs, retaining walls, and concrete repair.",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
