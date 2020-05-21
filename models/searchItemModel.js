export const searchItemType = {
    PRODUCT: "PRODUCT",
    RANGE: "RANGE"
}

export class SearchItem {
    constructor(id, name, description, price, imageURL, itemData, itemType) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageURL = imageURL;
        this.itemData = itemData;
        this.itemType = itemType;
    }
}

