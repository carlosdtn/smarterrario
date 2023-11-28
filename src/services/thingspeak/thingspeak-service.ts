import { THINGSPEAK_BASE_URL } from "../../utils/constants";

class ThingSpeakService {
  async fetchFieldData(
    channedId: string,
    fieldId: string,
    apikey: string,
    results: number
  ) {
    const response = await fetch(
      `${THINGSPEAK_BASE_URL}/${channedId}/fields/${fieldId}.json?api_key=${apikey}&results=${results}`
    );
    const data = await response.json();
    return data;
  }

  async fetchAllFieldData(channedId: string, apikey: string, results: number) {
    try {
      const response = await fetch(
        `${THINGSPEAK_BASE_URL}/${channedId}/feeds.json?api_key=${apikey}&results=${results}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al recuperar datos", error);
      return undefined;
    }
  }
}

export default ThingSpeakService;
