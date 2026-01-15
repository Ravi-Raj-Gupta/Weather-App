const API_KEY = "0b44c7df3180407d978133617260201";
export const fetchweather = async (q) => {
   const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${q}&days=7&aqi=no&alerts=no`
   );
   if (!res.ok) throw new Error("API Error");
   return res.json();
};
