const products = {
  1: {
    name: "Produto 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "../assets/img/bikes/bike-001.jpg",
      "../assets/img/bikes/bike-002.jpg",
      "../assets/img/bikes/bike-003.jpg",
    ],
    price: 2299.99,
    promo_price: 1999.99,
    percent: 15,
    categories: [1, 2, 3],
  },
  2: {
    name: "Produto 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "../assets/img/bikes/bike-004.jpg",
      "../assets/img/bikes/bike-005.jpg",
      "../assets/img/bikes/bike-006.jpg",
    ],
    price: 3599.99,
    promo_price: 3299.99,
    percent: 10,
    categories: [1, 2],
  },
  3: {
    name: "Produto 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "../assets/img/bikes/bike-007.jpg",
      "../assets/img/bikes/bike-008.jpg",
      "../assets/img/bikes/bike-009.jpg",
    ],
    price: 1999.99,
    promo_price: 1799.99,
    percent: 10,
    categories: [1, 3],
  },
  4: {
    name: "Produto 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "../assets/img/bikes/bike-002.jpg",
      "../assets/img/bikes/bike-003.jpg",
      "../assets/img/bikes/bike-004.jpg",
    ],
    price: 2999.99,
    promo_price: 2599.99,
    percent: 15,
    categories: [1, 3, 4],
  },
  5: {
    name: "Produto 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "../assets/img/bikes/bike-005.jpg",
      "../assets/img/bikes/bike-006.jpg",
      "../assets/img/bikes/bike-007.jpg",
    ],
    price: 5899.99,
    promo_price: 5399.99,
    percent: 15,
    categories: [1, 3, 4],
  },
  6: {
    name: "Produto 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "../assets/img/bikes/bike-008.jpg",
      "../assets/img/bikes/bike-009.jpg",
      "../assets/img/bikes/bike-001.jpg",
    ],
    price: 6799.99,
    promo_price: 6299.99,
    percent: 10,
    categories: [1, 3, 4],
  },
  7: {
    name: "Produto 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "../assets/img/bikes/bike-003.jpg",
      "../assets/img/bikes/bike-004.jpg",
      "../assets/img/bikes/bike-005.jpg",
    ],
    price: 999.99,
    promo_price: 899.99,
    percent: 12,
    categories: [1, 3, 4],
  },
  8: {
    name: "Produto 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "../assets/img/bikes/bike-006.jpg",
      "../assets/img/bikes/bike-007.jpg",
      "../assets/img/bikes/bike-008.jpg",
    ],
    price: 9999.99,
    promo_price: 9599.99,
    percent: 15,
    categories: [1, 3, 4],
  },
  9: {
    name: "Produto 9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "../assets/img/bikes/bike-009.jpg",
      "../assets/img/bikes/bike-001.jpg",
      "../assets/img/bikes/bike-002.jpg",
    ],
    price: 7599.99,
    promo_price: 7299.99,
    percent: 10,
    categories: [1, 3, 4],
  },
};

const categories = {
  1: { name: "MTB" },
  2: { name: "Road" },
  3: { name: "Gravel" },
  4: { name: "Downhill" },
};

module.exports = {
  products,
  categories,
};
