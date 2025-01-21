type Condition = {
    text: string;
    icon: string;
}
type DayTemperature = {
    maxtemp_c: number;
    mintemp_c: number;
    totalprecip_mm: number;
    condition: Condition;
}

type ForecastDay = {
    date: string;
    day: DayTemperature;
}

export default ForecastDay;