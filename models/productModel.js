class product {
    constructor(id, code, name, description, imageURLs, stock, height, width, depth, weight, color, material, price) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.imageURLs = imageURLs;
        this.stock = stock;
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.weight = weight;
        this.color = color;
        this.material = material;
        this.price = price;
    }
}

export default product;