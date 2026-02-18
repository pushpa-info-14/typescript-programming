/**
 * Classes Implement Interfaces
 *
 * Classes can implement interfaces using the implements clause.
 * This enforces that the class adheres to the structure defined by the interface. Say we have two interfaces:
 */

interface Vehicle {
  make: string;
  model: string;
}

interface Drivable {
  drive(distance: number): void;
}

class ElectricCar implements Vehicle, Drivable {
  make: string;
  model: string;

  // not required by the interfaces, but it's
  // okay to add extra properties
  private isRunning: boolean = false;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
    this.isRunning = false;
  }

  drive(distance: number): void {
    this.isRunning = true;
    console.log(`Driving ${distance} miles`);
  }
}

const myCar = new ElectricCar("Tesla", "Model S");

function testDrive(vehicle: Vehicle) {
  console.log(`Testing ${vehicle.make} ${vehicle.model}`);
}

testDrive(myCar); // "Testing Tesla Model S"

function takeForARide(drivable: Drivable) {
  drivable.drive(10);
}

takeForARide(myCar); // "Driving 10 miles"
