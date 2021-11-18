declare module RealtimeWeather {
	export interface Wind {
		speed: number
		direction: number
	}

	export interface Local {
		status: string
		datasource: string
		intensity: number
	}

	export interface Precipitation {
		local: Local
	}

	export interface Aqi {
		chn: number
		usa: number
	}

	export interface Description {
		usa: string
		chn: string
	}

	export interface AirQuality {
		pm25: number
		pm10: number
		o3: number
		so2: number
		no2: number
		co: number
		aqi: Aqi
		description: Description
	}

	export interface Ultraviolet {
		index: number
		desc: string
	}

	export interface Comfort {
		index: number
		desc: string
	}

	export interface LifeIndex {
		ultraviolet: Ultraviolet
		comfort: Comfort
	}

	export interface Realtime {
		status: string
		temperature: number
		humidity: number
		cloudrate: number
		skycon: string
		visibility: number
		dswrf: number
		wind: Wind
		pressure: number
		apparent_temperature: number
		precipitation: Precipitation
		air_quality: AirQuality
		life_index: LifeIndex
	}

	export interface Result {
		realtime: Realtime
		primary: number
	}

	export interface RootObject {
		status: string
		api_version: string
		api_status: string
		lang: string
		unit: string
		tzshift: number
		timezone: string
		server_time: number
		location: number[]
		result: Result
	}
}
