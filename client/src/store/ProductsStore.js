import {makeAutoObservable} from "mobx";

export default class ProductsStore{
    constructor() {
        this._types = [
            {id: 1, name: 'Name 1'},
            {id: 2, name: 'Name 2'},
            {id: 3, name: 'Name 3'},
            {id: 4, name: 'Name 4'},
        ];
        this._brands = [
            {id: 1, name: 'BName 1'},
            {id: 2, name: 'BName 2'},
            {id: 3, name: 'BName 3'}
        ];
        this._products = [
            {id: 1, name: 'BName 1', description: 'fasfsa', price: 2223, img: 'https://img2.goodfon.ru/original/3694x2463/6/9a/evropeyskaya-koshka-dikiy-kot.jpg'},
            {id: 2, name: 'pName 2', description: 'fasfsa', price: 2223, img: 'https://wallpapersgood.ru/wallpapers/main/201128/koshka-kot-polosatyy-b0b9c75.jpg'},
            {id: 3, name: 'pName 2', description: 'fasfsa', price: 2223, img: 'https://wallpapersgood.ru/wallpapers/main/201128/koshka-kot-polosatyy-b0b9c75.jpg'},
            {id: 4, name: 'pName 2', description: 'fasfsa', price: 2223, img: 'https://wallpapersgood.ru/wallpapers/main/201128/koshka-kot-polosatyy-b0b9c75.jpg'},
            {id: 5, name: 'pName 2', description: 'fasfsa', price: 2223, img: 'https://wallpapersgood.ru/wallpapers/main/201128/koshka-kot-polosatyy-b0b9c75.jpg'},
            {id: 6, name: 'pName 2', description: 'fasfsa', price: 2223, img: 'https://wallpapersgood.ru/wallpapers/main/201128/koshka-kot-polosatyy-b0b9c75.jpg'},
            {id: 7, name: 'pName 2', description: 'fasfsa', price: 2223, img: 'https://wallpapersgood.ru/wallpapers/main/201128/koshka-kot-polosatyy-b0b9c75.jpg'},
            {id: 8, name: 'pName 2', description: 'fasfsa', price: 2223, img: 'https://wallpapersgood.ru/wallpapers/main/201128/koshka-kot-polosatyy-b0b9c75.jpg'},
            {id: 9, name: 'pName 2', description: 'fasfsa', price: 2223, img: 'https://wallpapersgood.ru/wallpapers/main/201128/koshka-kot-polosatyy-b0b9c75.jpg'},
            {id: 10, name: 'pName 2', description: 'fasfsa', price: 2223, img: 'https://wallpapersgood.ru/wallpapers/main/201128/koshka-kot-polosatyy-b0b9c75.jpg'},
            {id: 11, name: 'pName 2', description: 'fasfsa', price: 2223, img: 'https://wallpapersgood.ru/wallpapers/main/201128/koshka-kot-polosatyy-b0b9c75.jpg'},
            {id: 12, name: 'pName 2', description: 'fasfsa', price: 2223, img: 'https://wallpapersgood.ru/wallpapers/main/201128/koshka-kot-polosatyy-b0b9c75.jpg'},
        ];

        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setTypes(types){
        this._types = types;
    }

    setBrands(brands){
        this._brands = brands;
    }

    setProducts(products){
        this._products = products;
    }

    setSelectedType(type){
        this._selectedType = type;
    }

    setSelectedBrand(brand){
        this._selectedBrand = brand;
    }

    get types(){
        return this._types;
    }

    get brands(){
        return this._brands;
    }

    get products(){
        return this._products;
    }

    get selectedType(){
        return this._selectedType
    }

    get selectedBrand(){
        return this._selectedBrand
    }
}