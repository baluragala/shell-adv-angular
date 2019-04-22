interface Product {
  title: string;
  price: number;
  features?: Array<string>;
  category: Category;
}

interface Category {
  id: number;
  name: string;
}

let p: Product = {
  title: "iphonex",
  price: 10,
  features: [],
  category: { id: 1, name: "mobiles" }
};
