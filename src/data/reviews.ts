export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export const reviews: Review[] = [
  {
    name: "Marcus T.",
    location: "Round Rock, TX",
    rating: 5,
    text: "Austin Premier Concrete replaced our crumbling driveway and the result is incredible. The crew was on time, cleaned up perfectly, and the concrete looks flawless. Neighbors have already asked for their number.",
    service: "Concrete Driveway",
  },
  {
    name: "Jennifer L.",
    location: "Cedar Park, TX",
    rating: 5,
    text: "We got a stamped concrete patio done and couldn't be happier. They walked us through every step, the pattern came out exactly as shown, and it was sealed beautifully. Great communication throughout.",
    service: "Stamped Patio",
  },
  {
    name: "David R.",
    location: "Austin, TX",
    rating: 5,
    text: "Had three quotes — Austin Premier was mid-range on price but blew everyone else away on professionalism and detail. The foundation slab passed inspection first try. Highly recommend.",
    service: "Concrete Foundation",
  },
  {
    name: "Sarah M.",
    location: "Pflugerville, TX",
    rating: 5,
    text: "Our sidewalk was cracked and sunken. They mudjacked it back into place in one morning and it looks brand new. Way cheaper than replacing it and done in half a day.",
    service: "Concrete Repair",
  },
  {
    name: "Carlos V.",
    location: "Kyle, TX",
    rating: 5,
    text: "Built us a retaining wall on a tough slope. The drainage they installed behind it keeps everything dry. Solid work, great price, and the wall looks fantastic with the stone finish.",
    service: "Retaining Wall",
  },
  {
    name: "Amy W.",
    location: "Buda, TX",
    rating: 5,
    text: "Pool deck came out gorgeous — they used an exposed aggregate finish that matches our stone coping perfectly. No slipping hazards either. The whole crew was professional and respectful of our yard.",
    service: "Concrete Flatwork",
  },
];
