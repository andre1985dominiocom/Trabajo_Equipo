


export const deletePosts = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/posts/${id}`, {
            method: 'DELETE', // Siempre especificar el método en mayúsculas
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) throw new Error("No se pudo eliminar la publicación");

        return true; // Si todo salió bien, avisamos que se borró
    } catch (error) {
        console.error("Error al eliminar:", error);
        return false;
    }
};
