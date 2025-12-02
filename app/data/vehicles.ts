import { Vehicle } from "../types/vehicle";

export const vehicles: Vehicle[] = [
  {
    id: "1",
    slug: "2016-toyota-vitz",
    make: "Toyota",
    model: "Vitz",
    year: 2016,
    price: 2750000,
    currency: "GYD",
    features: [
      "Push Start (2 Key Fobs)",
      "1320 cc Engine",
      "2 WD",
      "Automatic Transmission",
      "Reverse Camera",
      "Fog Lights",
      "Free Registration / Road License / Fitness / Number Plates",
    ],
    specifications: {
      engine: "1320 cc",
      transmission: "Automatic",
      drivetrain: "2 WD",
      fuelType: "Gasoline",
    },
    description:
      "2016 Toyota Vitz in excellent condition. Features push start ignition with 2 key fobs, reverse camera, fog lights, and automatic transmission. Perfect for city driving with great fuel economy. Includes free registration, road license, fitness, and number plates. Cash or bank financing available. Visit us at 2 Friendship, East Bank Demerara or send a message for more details!",
    images: [
      "/vehicles/2016-Toyota-Vitz/589108993_122184017048538386_2280404953809786939_n.jpg",
      "/vehicles/2016-Toyota-Vitz/589663403_122184017576538386_1592217730515097757_n.jpg",
      "/vehicles/2016-Toyota-Vitz/590695229_122184017534538386_8068850573476229200_n.jpg",
      "/vehicles/2016-Toyota-Vitz/591210015_122184017474538386_2468235358368142984_n.jpg",
      "/vehicles/2016-Toyota-Vitz/589783956_122184017426538386_3226394792944349669_n.jpg",
      "/vehicles/2016-Toyota-Vitz/589609721_122184017354538386_1331710079454970418_n.jpg",
    ],
    availability: "available",
    financing: {
      available: true,
      cashOnly: true,
      bankFinancing: true,
    },
  },
  {
    id: "2",
    slug: "2014-toyota-fielder-wagon-wxb",
    make: "Toyota",
    model: "Fielder Wagon",
    year: 2014,
    price: 3200000,
    currency: "GYD",
    features: [
      "WXB Package",
      "Premium Trim",
      "Interior Leather Seats",
      "1500 cc / 1NZE Engine",
      "2 WD",
    ],
    specifications: {
      engine: "1500 cc / 1NZE",
      transmission: "Automatic",
      drivetrain: "2WD",
      fuelType: "Gasoline",
      interior: "Leather Seats",
    },
    description:
      "🚗💨 SOLD! 💥 2014 Toyota Fielder Wagon WXB Package! 🎉 This vehicle has been sold. More units coming soon! Contact us at 2 Friendship, East Bank Demerara or send a message for more details about upcoming inventory.",
    images: ["/vehicles/toyota-fielder-2014.jpg"],
    availability: "sold",
    financing: {
      available: true,
      cashOnly: true,
      bankFinancing: true,
    },
  },
  {
    id: "3",
    slug: "2016-toyota-harrier",
    make: "Toyota",
    model: "Harrier",
    year: 2016,
    price: 8300000,
    currency: "GYD",
    features: [
      "2000 cc Engine",
      "2 WD",
      "Automatic Transmission",
      "Reverse Camera",
      "Sunroof",
      "Push Start",
      "Premium Body Kit",
      "Free Registration / Road License / Fitness / Number Plates",
    ],
    specifications: {
      engine: "2000 cc",
      transmission: "Automatic",
      drivetrain: "2 WD",
      fuelType: "Gasoline",
    },
    description:
      "Drive in Style - 2016 Toyota Harrier with Premium Body Kit. Pre-Order Today! This premium vehicle features a powerful 2000 cc engine, automatic transmission, reverse camera, sunroof, and push start ignition. Downpayment to reserve: $3,200,000. Full Price: $8,300,000. Cash or Bank Financing available. Visit us at 2 Friendship, East Bank Demerara or send a message for more details!",
    images: [
      "/vehicles/2016-Toyota-Harrier/587622775_122183515298538386_5206760822473026955_n.jpg",
      "/vehicles/2016-Toyota-Harrier/587701987_122183515928538386_453485014636417806_n.jpg",
      "/vehicles/2016-Toyota-Harrier/587716009_122183515466538386_5813070329521316763_n.jpg",
      "/vehicles/2016-Toyota-Harrier/587737002_122183516240538386_6523625931798297944_n.jpg",
      "/vehicles/2016-Toyota-Harrier/587779579_122183515520538386_2812447477602757222_n.jpg",
      "/vehicles/2016-Toyota-Harrier/587826681_122183515742538386_9101579422169702956_n.jpg",
      "/vehicles/2016-Toyota-Harrier/587895477_122183515814538386_169257044876120245_n.jpg",
      "/vehicles/2016-Toyota-Harrier/587924745_122183515868538386_1479188891318719173_n.jpg",
      "/vehicles/2016-Toyota-Harrier/587957362_122183515364538386_8794949486884968055_n.jpg",
      "/vehicles/2016-Toyota-Harrier/587958761_122183515328538386_4959056454300307078_n.jpg",
      "/vehicles/2016-Toyota-Harrier/587974949_122183515580538386_241047011079391229_n.jpg",
      "/vehicles/2016-Toyota-Harrier/588158858_122183515628538386_1295084848104904470_n.jpg",
      "/vehicles/2016-Toyota-Harrier/588215792_122183515994538386_1964386755096161209_n.jpg",
      "/vehicles/2016-Toyota-Harrier/588234441_122183516120538386_1395370789571324521_n.jpg",
      "/vehicles/2016-Toyota-Harrier/588320322_122183516054538386_6956692271494314975_n.jpg",
      "/vehicles/2016-Toyota-Harrier/588357970_122183515688538386_8619364496496488152_n.jpg",
      "/vehicles/2016-Toyota-Harrier/589172257_122183516168538386_987604803634049493_n.jpg",
    ],
    availability: "available",
    financing: {
      available: true,
      cashOnly: true,
      bankFinancing: true,
    },
  },
];

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id);
}

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function getAllVehicles(): Vehicle[] {
  return vehicles;
}

export function getFeaturedVehicles(): Vehicle[] {
  return vehicles.filter((v) => v.availability === "available").slice(0, 2);
}

