const BASE_URL = `http://localhost:3000/`;

export const posts = async (endpoint, data) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}` , {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Error en Posts`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error en Posts: ${error}`);
        throw error;
    }
}