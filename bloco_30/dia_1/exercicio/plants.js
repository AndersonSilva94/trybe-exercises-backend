const defaultPlants = [
  {
    id: 1,
    breed: 'Bromelia',
    needsSun: false,
    origin: 'Argentina',
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: 'Orquidea',
    size: 99,
    needsSun: false,
    origin: 'Brazil',
  },
];

let createdPlants = defaultPlants.length;

const verifyOrigin = (origin) => (origin === 'Brazil' ? 8 : 7);

const frequencyWater = (needsSun, size, origin) => (
  needsSun
    ? size * 0.77 + verifyOrigin(origin)
    : (size / 2) * 1.33 + verifyOrigin(origin)
);

const initPlant = (id, { breed, needsSun, origin, specialCare, size }) => {
  const waterFrequency = frequencyWater(needsSun, size, origin);
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const getPlants = () => {
  const plants = defaultPlants;
  return plants;
};

const getPlantById = (id) => (defaultPlants.filter((plant) => plant.id === id));

const removePlantById = (id) => (defaultPlants.filter((plant) => plant.id !== id));

const needSun = (plant) => (!!plant.needsSun);

const getPlantsThatNeedsSunWithId = (id) => (
  defaultPlants.filter((plant) => (needSun(plant) && plant.id === id))
);

const editPlant = (plantId, newPlant) => (
  defaultPlants.map((plant) => {
    if (plant.id === plantId) {
      return newPlant;
    }
    return plant;
  })
);

const createNewPlant = (plant) => {
  createdPlants = defaultPlants.length > 0 ? defaultPlants[defaultPlants.length - 1].id + 1 : 1;
  const mappedPlant = initPlant(createdPlants, { ...plant });
  defaultPlants.push(mappedPlant);
  return mappedPlant;
};

module.exports = {
  getPlants,
  getPlantById,
  removePlantById,
  getPlantsThatNeedsSunWithId,
  editPlant,
  createNewPlant,
};
