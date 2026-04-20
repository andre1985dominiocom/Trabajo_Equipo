const BASE_URL = `http://localhost:3000/`;

export const get = async (endpoint) => {
    try {
        const url = `${BASE_URL}${endpoint}`;
        // console.log(`URL que se esta llamando: ${url}`);

        const response = await fetch(`${url}`);

        if (!response.ok) {
            throw new Error(`Error en Get`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error en Get: ${error}`);
        throw error;
    }
}