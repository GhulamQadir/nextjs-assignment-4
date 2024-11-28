interface Product {
  name: string;
  image: string;
  ratings: number;
  price: number;
  oldPrice?: number;
  discount?: number;
}

const newArrivalsData: Product[] = [
  {
    name: "T-shirt with Tape Details",
    image: "/product_images/black_tshirt.png",
    ratings: 4.5,
    price: 120,
  },
  {
    name: "Skinny Fit Jeans",
    image: "/product_images/pant.png",
    ratings: 3.5,
    price: 240,
    oldPrice: 260,
    discount: 20,
  },
  {
    name: "Checkered Shirt",
    image: "/product_images/shirt.png",
    ratings: 4.5,
    price: 180,
  },
  {
    name: "Sleeve Striped T-shirt",
    image: "/product_images/orange_tshirt.png",
    ratings: 4.5,
    price: 130,
    oldPrice: 160,
    discount: 30,
  },
  {
    name: "Check Shirt",
    image: "/product_images/shirt.png",
    ratings: 4.5,
    price: 180,
  },
  {
    name: "Skinny Jeans",
    image: "/product_images/pant.png",
    ratings: 4.5,
    price: 240,
    oldPrice: 260,
    discount: 20,
  },
];

const topSellingData: Product[] = [
  {
    name: "Vertical Striped Shirt",
    image: "/product_images/shirt_green.png",
    ratings: 5.0,
    price: 212,
    oldPrice: 232,
    discount: 20,
  },
  {
    name: "Courage Graphic T-shirt",
    image: "/product_images/tshirt.png",
    ratings: 4.0,
    price: 145,
  },
  {
    name: "Loose Fit Bermuda Shorts",
    image: "/product_images/shorts.png",
    ratings: 3.0,
    price: 80,
  },
  {
    name: "Faded Skinny Jeans",
    image: "/product_images/black_jeans.png",
    ratings: 4.5,
    price: 210,
  },
  {
    name: "Faded Skinny Jeans",
    image: "/product_images/black_jeans.png",
    ratings: 4.5,
    price: 210,
  },
  {
    name: "Skinny Jeans",
    image: "/product_images/pant.png",
    ratings: 4.5,
    price: 240,
    oldPrice: 260,
    discount: 20,
  },
];

interface TBrowseDress {
  image: string;
  categName: string;
}

const browseDressData: TBrowseDress[] = [
  {
    image: "/categ_images/casual.png",
    categName: "Casual",
  },
  {
    image: "/categ_images/formal.png",
    categName: "Formal",
  },
  {
    image: "/categ_images/party.png",
    categName: "Party",
  },
  {
    image: "/categ_images/gym.png",
    categName: "Gym",
  },
];

interface TReview {
  name: string;
  rating: number;
  review: string;
}

const reviewsData: TReview[] = [
  {
    name: "Sarah M",
    rating: 5,
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K",
    rating: 5,
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L",
    rating: 5,
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

export { newArrivalsData, topSellingData, browseDressData, reviewsData };
