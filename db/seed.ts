import { Clients, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {

  await db.insert(Clients).values([
    { name: 'John', age: 30, isActive: true },
    { name: 'Jane', age: 25, isActive: false },
    { name: 'Bob', age: 40, isActive: true },
    { name: 'Alice', age: 35, isActive: true },
    { name: 'Charlie', age: 45, isActive: false },
    { name: 'Eve', age: 30, isActive: true },

  ]);




  console.log("Seed ejecutado");
}

// para plantar el seed en la base de datos remota
// npx astro db execute db/seed.ts --remote