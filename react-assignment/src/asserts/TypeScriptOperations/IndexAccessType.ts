export interface User extends Record<string, any>{
    id: number;
    name: string;
    address: {
        street: string;
        city: string;
        country: string;
    };
}

type City = User['address']['city'];

type idOrname = User['id' | 'name'];

function updateaddress(id: User['id'], newAddress: User['address']) {}

type A = keyof User; // 'id' | 'name' | 'address'

let p: A = 'address';

function getProperty<T, K extends keyof T> (obj: T, key: K) {
    return obj[key];
}

let user = { name: 'john', age: 25}

const ageofuser = getProperty(user, "age")
const nameofuser = getProperty(user, "name")

document.addEventListener('click', (e) => {});
document.addEventListener('keypress', (e) => {});

interface MyMouseEvent {
    x: number;
    y: number;
}

interface MyKeyboardEvent {
    key: string;
}

interface MyEventObjects {
    click: MyMouseEvent,
    keypress: MyKeyboardEvent
}

function handleEvent<K extends keyof MyEventObjects>(
    eventName: K,
    callback: (e: MyEventObjects[K]) => void
    ) {
        if (eventName === 'click') {
            callback({x: 1, y:1} as MyEventObjects[K])
        } else if (eventName === 'keypress') {
            callback({key: 'Enter'} as MyEventObjects[K]);
        }
    }

    handleEvent('click', (e) => {})
    handleEvent('keypress', (e) => {})

    type MyEvents = MyEventObjects[keyof MyEventObjects];
