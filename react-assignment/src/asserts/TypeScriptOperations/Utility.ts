export interface StartShip {
    name: string;
    enableHyperJump: boolean;
}

type StartShipNameOnly = Pick<StartShip, "name">;
type StartShipWithoutName = Omit<StartShip, "name">;

const updateStartShip = (id: number, startship: Partial<StartShip>) => { };

updateStartShip(1, { name: 'Payal' });

const startship: Record<string, StartShip> = {
    Explore1: {
        name: "Explore1",
        enableHyperJump: true
    },
    Explore2: {
        name: "Explore2",
        enableHyperJump: false
    }
}

console.log(startship["Explore1"].name)

type AvailableDrnks = 'Coffee' | 'Tea' | 'Orange Juice' | 'Leamonade';

let JohnDrink: AvailableDrnks;
JohnDrink = 'Coffee';

type DrinkJaneDosentLike = 'Coffee' | 'Orange Juice';
type DrinkJaneLike = 'Tea' | 'Leamonade' | 'Mohito';
let JaneDrink: Exclude<AvailableDrnks, DrinkJaneDosentLike>;
let JaneDrink2: Extract<AvailableDrnks, DrinkJaneLike>;

type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

function Deleteable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
    return class extends Base {
        deleted: boolean = false;
        delete() { }
    }
}

class Car {
    constructor(public name: string) { }
}

class User {
    constructor(public name: string) { }
}

const DeletableCar = Deleteable(Car);
const DeletableUser = Deleteable(User);

type DeleteableUserInstance = InstanceType<typeof DeletableUser>
type DeleteableCarInstance = InstanceType<typeof DeletableCar>

class Profile {
    user: DeleteableUserInstance = new DeletableUser('hi');
    car: DeleteableCarInstance = new DeletableCar('hello');

}

interface MyObject {
    sayHello(): void;
}

interface MyObjectThis {
    helloWorld(): void
}

const myObject: MyObject & ThisType<MyObjectThis> = {
    sayHello() {
        return this.helloWorld();
    }
}

myObject.sayHello = myObject.sayHello.bind({
    helloWorld() {
        return 'Hello World';
    }
});

console.log(myObject.sayHello());