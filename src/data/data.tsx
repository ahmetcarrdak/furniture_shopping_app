export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Product 1",
        price: 29.99,
        description: "This is the description of Product 1.",
        image: require("../assets/product1.jpg"),
    },
    {
        id: 2,
        name: "Product 2",
        price: 49.99,
        description: "This is the description of Product 2.",
        image: require("../assets/product2.jpg"),
    },
    {
        id: 3,
        name: "Product 3",
        price: 19.99,
        description: "This is the description of Product 3.",
        image: require("../assets/product3.jpg"),
    },
];
