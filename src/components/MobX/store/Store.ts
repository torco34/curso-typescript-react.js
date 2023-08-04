import { observable, action, makeObservable, computed } from "mobx";
interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
}
class UserStore {
  array: Persona[] = [
    { nombre: "jose", apellido: "arias", edad: 18 },
    { nombre: "angel", apellido: "arias", edad: 20 },
  ];

  constructor() {
    makeObservable(this, {
      array: observable,
      setAgrearElement: action,
      filteredArray: computed,
      filterElements: action,
    });
  }
  get filteredArray() {
    return this.array.slice();
  }

  setAgrearElement(element: Persona) {
    this.array.push(element);
  }
  filterElements(searchTem: string) {
    return this.array.filter(
      (persona) =>
        persona.nombre.toLowerCase().includes(searchTem.toLowerCase()) ||
        persona.apellido.toLowerCase().includes(searchTem.toLowerCase())
    );
  }
}

export const useStore = new UserStore();
