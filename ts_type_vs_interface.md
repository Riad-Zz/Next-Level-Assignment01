# Title : Differences Between Type Aliases and Interface in TypeScript

# Introduction
Many times developers get confuse when writing typescript code. They dont know if they should use type alias or interface. Here we will explore core differences between them. We will also explore when we should choose one over other.

# Description
(1) Interface is generally connected to objects. But type alias is more connected to literals, unions, tuples, primitives. This is main rule to remember. For example, to define primitive type or union, we must use type alias.

```typescript
type ID = number;
type Role = "admin" | "member";
```

we can not do this with interface. If we write `interface id = number`, it is wrong and give error. But interface is very good for creating object shape.

```typescript
interface User {
  name: string;
  id: ID;
  role: Role;
}

const user: User = {
  id: 123,
  name: "abc",
  role: "admin",
};
```

(2) Another big difference is how we extend them. For interface, we use extends keyword to add more things.

```typescript
interface Animal {
  species: string;
}

interface Cat extends Animal {
  breed: string;
}

const cat: Cat = {
  species: "Felix Catus",
  breed: "Persian",
};
```

But for type alias, u use "&" symbol to perform intersection. You dont use extends keyword for types.

```typescript
type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  model: string;
};

const car: Car = {
  model: "Corolla",
  brand: "Toyota",
};
```

(3) Finally, interface has special thing called merging. If we write same interface two times, they combine together.

```typescript
interface IEmployee {
  name: string;
}

interface IEmployee {
  id: number;
}

const employee: IEmployee = {
  id: 123,
  name: "ABC",
}; 
```

This is not valid for type alias. If we write `type TEmployee` two times, it will give error. 

# Conclusion
In conclusion, we should choose type alias for literals, unions or primitives. And choose interface when working with objects that could need to be extended or merged.