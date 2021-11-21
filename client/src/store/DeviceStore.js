import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor(){
        this._types = [
            {id:1, name:'TV'},
            {id:2, name:'Smartphone'}
        ]
        this._brands = [
            {id:1, name:'Apple'},
            {id:2, name:'Samsung'}
        ]
        this._devices = [
            {id:1, name:'Iphone 12 pro', price:1500, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTj14U7hPi4ul4_XKLWQ8lU6007wGZFQXuPg&usqp=CAU'},
            {id:2, name:'Iphone 12 pro', price:1500, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTj14U7hPi4ul4_XKLWQ8lU6007wGZFQXuPg&usqp=CAU'},
            {id:3, name:'Iphone 12 pro', price:1500, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTj14U7hPi4ul4_XKLWQ8lU6007wGZFQXuPg&usqp=CAU'},
            {id:4, name:'Iphone 12 pro', price:1500, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTj14U7hPi4ul4_XKLWQ8lU6007wGZFQXuPg&usqp=CAU'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}