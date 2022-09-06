type Heroes = "Hulk" | "Capt" | "Thor";
type HeroAges = {[K in Heroes]: number};

const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
};
