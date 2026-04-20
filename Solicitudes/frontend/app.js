// Enunciado 1: (Usuarios activos y sus publicaciones)
// Una aplicación web requiere mostrar un listado de usuarios activos
// junto con la cantidad de publicaciones que han realizado.
// Sin embargo, no todos los usuarios han creado publicaciones.
// El sistema debe identificar correctamente estos casos.
// Enunciado 2: (Publicaciones con y sin comentarios)
// El área de contenido necesita identificar qué publicaciones han generado interacción y cuáles no.
// Para ello, se requiere analizar las publicaciones y sus comentarios asociados.
// Enunciado 3: (Búsqueda específica de información)
// Un usuario del sistema desea consultar información puntual sobre una publicación específica
// y conocer si existe interacción asociada a ella.
// Enunciado 4: (Eliminación lógica y validación de datos)
// Antes de eliminar una publicación, el sistema debe validar si dicha publicación tiene comentarios asociados.
// Si tiene comentarios, no debe eliminarse; de lo contrario, puede proceder.

// Requerimientos:

import { getUsers } from "./modules/enunciado1/users/index.js";
// import { getPosts } from "./modules/enunciado2/posts/index.js";
// import { getComments } from "./modules/enunciado2/comments/index.js";


const main = async () => {

    try {
        // • Consultar la lista completa de usuarios.
        console.log("==== Usuarios ====");
        const usuarios = await getUsers();
        usuarios.forEach(users => {
            console.log(`Usuario: ${users.name} - Activo: ${users.active} - ID: ${users.id}`);
        });

        // • Consultar la lista de publicaciones.
        console.log("==== Publicaciones ====");
        const publicaciones = await getPosts();

        // • Consultar todos los comentarios.
        const comentarios = await getComments();

        
        // • Identificar cuáles usuarios tienen publicaciones asociadas.
        usuarios.forEach(users => {
            const publicacionesUsuario = publicaciones.filter(posts => Number(posts.userId) === Number(users.id));
            // • Calcular la cantidad de publicaciones por usuario.
            const cantidadPublicaciones = publicacionesUsuario.length;
            
            console.log(`Usuario: ${users.name}, publicaciones: ${cantidadPublicaciones}`);
        });
        console.log("==== Publicaciones y comentarios ====");

        // • Relacionar comentarios con sus publicaciones.
        publicaciones.forEach(posts => {
            const comentariosPublicacion = comentarios.filter(comments => Number(comments.postId) === Number(posts.id));
            const cantidadComentarios = comentariosPublicacion.length;

            console.log(`Publicación: ${posts.title}, comentarios: ${cantidadComentarios}`)
        });

        // • Identificar publicaciones sin comentarios.
        const publicacionesSinComentarios = publicaciones.filter(posts => {
            const comentariosPublicacion = comentarios.filter(comments => Number(comments.postId) === Number(posts.id));
            return comentariosPublicacion.length === 0;
        });
        console.log("==== Publicaciones sin comentarios ====");
        publicacionesSinComentarios.forEach(posts => {
            console.log(`Publicación: ${posts.title}`);
        });

        // • Clasificar publicaciones según tengan o no comentarios.
        const publicacionesConComentarios = publicaciones.filter(posts => {
            const comentariosPublicacion = comentarios.filter(comments => Number(comments.postId) === Number(posts.id));
            return comentariosPublicacion.length > 0;
        });
        console.log("==== Publicaciones con comentarios ====");
        publicacionesConComentarios.forEach(posts => {
            console.log(`Publicación: ${posts.title}`);
        });
        // • Consultar todas las publicaciones.
        const publicacionesTotales = await getPosts();
        const comentariosTotales = await getComments();

        console.log("==== Información específica de una publicación ====");
        // • Buscar una publicación específica por su identificador.
        const idpublicacionEspecifica = 1;

        // • Consultar los comentarios relacionados con esa publicación.
        const publicacionEspecifica = publicacionesTotales.find(posts => Number(posts.id) === Number(idpublicacionEspecifica));
        
        // • Validar si existen o no comentarios asociados.
        if (publicacionEspecifica) {
            console.log(`Publicación: ${publicacionEspecifica.title}`);
            const comentariosPublicacionEspecifica = comentariosTotales.filter(comments => Number(comments.postId) === Number(publicacionEspecifica.id));
            if (comentariosPublicacionEspecifica.length > 0) {
                console.log(`Comentarios asociados: ${comentariosPublicacionEspecifica.length}`);
            } else {
                console.log("No hay comentarios asociados a esta publicación.");
            }
        } else {
            console.log("No se encontró la publicación específica.");
        }
        // • Consultar las publicaciones.
        const publicacionesParaEliminacion = await getPosts();

        // • Consultar los comentarios.
        const comentariosParaEliminacion = await getComments();

        console.log("==== Validación para eliminación de publicación ====");
        // • Verificar si una publicación específica tiene comentarios.
        const idPublicacionAEliminar = 1;
        const publicacionAEliminar = publicacionesParaEliminacion.find(posts => Number(posts.id) === Number(idPublicacionAEliminar));
        
        if (publicacionAEliminar) {
            const comentariosAsociados = comentariosParaEliminacion.filter(comments => Number(comments.postId) === Number(publicacionAEliminar.id));
            if (comentariosAsociados.length > 0) {
                console.log("No se puede eliminar la publicación porque tiene comentarios asociados.");
            } else {
                await deletePosts(idPublicacionAEliminar);
                console.log("La publicación puede ser eliminada.");
                // • Si no tiene comentarios, ejecutar la eliminación.
            }
        } else {
            console.log("No se encontró la publicación que se desea eliminar.");
        }
        // • Validar el resultado mediante una nueva consulta.
        const publicacionesDespuesDeEliminacion = await getPosts();
        const publicacionEliminada = publicacionesDespuesDeEliminacion.find(posts => Number(posts.id) === Number(idPublicacionAEliminar));
        if (!publicacionEliminada) {
            console.log("La publicación fue eliminada exitosamente.");
        } else {
            console.log("La publicación no fue eliminada.");
        }
    } catch (error) {
        console.error(`Error al obtener usuarios y publicaciones: ${error}`);
    }
}

main();