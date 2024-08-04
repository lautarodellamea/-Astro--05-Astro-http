import type { APIRoute } from 'astro';
import { getCollection, getEntry } from 'astro:content';

// esta ruta en partivular se generara cuando se haga la solicitud y no en bvuild time
// ahora si podremos ver los params
// si en el astro.config ponemos que se cree todo del lado del servidor, no hace falta esta linea
// si en el astro.config pusieramos server, podriamos usar esta linea con true para que se genere en buildtime
// si no sabemos cual usar, dejamos hybrid y en donde nececitemos que se genere del lado del servidor ponemos esta linea en false
export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {

  // console.log(request)

  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');
  // console.log(slug)

  if (slug) {
    const post = await getEntry('blog', slug);

    if (post) {
      return new Response(JSON.stringify(post), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return new Response(JSON.stringify({ msg: `Post ${slug} not found` }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  const posts = await getCollection('blog');

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}





