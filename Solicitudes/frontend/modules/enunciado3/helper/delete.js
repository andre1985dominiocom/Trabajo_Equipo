const BASE_URL = `http://localhost:3000/`;

export const remove = async (endpoint) => {
    try {   
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: `DELETE`,
        });
        if (!response.ok) {
            throw new Error(`Error en Delete`);
        }
        return true;
    } catch (error) {
        console.error(`Error en Delete: ${error}`);
        throw error;
    }
}