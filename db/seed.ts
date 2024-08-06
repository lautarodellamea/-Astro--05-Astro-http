import { getCollection } from 'astro:content';
import { Clients, db, Posts } from 'astro:db';

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


  // si quisieramos ejecutar el seed a produccion no seria posible porque esta instruccion de getCollection no funciona a la hora de ejecutar el seed 
  const posts = await getCollection('blog');

  await db.insert(Posts).values(
    posts.map((p) => ({
      id: p.id,
      title: p.data.title,
      likes: Math.round(Math.random() * 100),
    }))
  );




  console.log("Seed executed");
}

// para plantar el seed en la base de datos remota
// npx astro db execute db/seed.ts --remote