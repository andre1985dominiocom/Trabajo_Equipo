const BASE_URL = `http://localhost:3000/`;

export const put = async (endpoint, data) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error en Put`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error en Put: ${error}`);
        throw error;
    }
}