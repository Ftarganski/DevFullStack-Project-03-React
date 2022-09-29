const productsCart = {
  1: {
    name: "Produto 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "../assets/img/bikes/bike-001.jpg",
      "../assets/img/bikes/bike-002.jpg",
      "../assets/img/bikes/bike-003.jpg",
    ],
    price: 299.99,
    categories: [1, 2, 3],
    quantity: 2,
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
    price: 299.99,
    promo_price: 199.99,
    percent: 15,
    categories: [1, 2],
    quantity: 1,
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
    price: 299.99,
    categories: [1, 3],
    quantity: 3,
  },
  4: {
    name: "Produto 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "../assets/img/bikes/bike-002.jpg",
      "../assets/img/bikes/bike-006.jpg",
      "../assets/img/bikes/bike-008.jpg",
    ],
    price: 299.99,
    promo_price: 199.99,
    percent: 15,
    categories: [1, 3, 4],
    quantity: 1,
  },
};

const categories = {
  1: { name: "Roupas" },
  2: { name: "Acessórios" },
  3: { name: "Calçados" },
  4: { name: "Jóias" },
};

module.exports = {
  productsCart,
  categories,
};
