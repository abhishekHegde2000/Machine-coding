// Weather.tsx

import React, { useEffect, useState } from "react";

interface WeatherData {
    weather: {
        main: string;
    }[];
    main: {
        temp: number;
    };
    wind: {
        speed: number;
    };
}

interface WeatherWidgetProps {
    location: string;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ location }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY&units=metric`
                );
                const data: WeatherData = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchData();
    }, [location]);

    return (
        <div className="p-4 bg-gray-100 rounded-md shadow-md">
            {weatherData ? (
                <div>
                    <p className="text-xl font-semibold">
                        Current Weather: {weatherData.weather[0].main}
                    </p>
                    <p className="text-lg">
                        Temperature: {weatherData.main.temp}°C
                    </p>
                    <p className="text-lg">
                        Wind Speed: {weatherData.wind.speed} m/s
                    </p>
                </div>
            ) : (
                <p className="text-lg">Loading weather data...</p>
            )}
        </div>
    );
};

export default WeatherWidget;
