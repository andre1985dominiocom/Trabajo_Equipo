const BASE_URL = `http://localhost:3000/`;

export const patch = async (endpoint, data) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "PATCH",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error en Patch`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error en Patch: ${error}`);
        throw error;
    }
}