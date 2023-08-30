import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { BackButton } from "src/components"
import { useAppDispatch, useAppSelector } from "src/redux/hooks"
import { setSelectedAreaWeatherState, setWeatherSelectedCity } from "src/redux/slices/weatherSlice"



const Weather = () => {

    // console.log(import.meta.env.VITE_OPEN_WEATHER_API_KEY)

    const dispatch = useAppDispatch()
    const { weatherSelectedCity, selectedAreaWeatherState } = useAppSelector(state => state.weather)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        if (weatherSelectedCity) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weatherSelectedCity}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`)
                .then(response => {
                    // console.log({ response: response?.data })
                    dispatch(setSelectedAreaWeatherState(response?.data))
                    setLoading(false)
                })
                .catch(err => {
                    console.log({ err })
                })
        } else {
            const successCallback = (position: unknown) => {
                // console.log(position);

                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position?.coords.latitude}&lon=${position?.coords.longitude}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`)
                    .then(response => {
                        // console.log({ response: response?.data })
                        dispatch(setSelectedAreaWeatherState(response?.data))
                        setLoading(false)
                    })
                    .catch(err => {
                        console.log({ err })
                    })

            };

            const errorCallback = (error: unknown) => {
                console.log(error);
            };

            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        }
    }, [dispatch, weatherSelectedCity])



    const handleSetWeatherSelectedCity = (value: string) => {
        dispatch(setWeatherSelectedCity(value))
    }



    console.log({ selectedAreaWeatherState })

    return (
        <Box
            sx={{
                position: 'relative',
                // backgroundColor: '#ffc93c',
                p: 3,
                pt: '90px',
                borderRadius: 1,
            }}
            boxShadow={10}
        >

            <BackButton style={{ top: 25, left: 25 }} />


            <FormControl variant="standard" sx={{ maxWidth: 600, display: 'flex', m: 'auto', my: 5 }} fullWidth>
                <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={weatherSelectedCity}
                    onChange={(e) => handleSetWeatherSelectedCity(e.target.value)}
                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="istanbul">İstanbul</MenuItem>
                    <MenuItem value="izmir">izmir</MenuItem>
                    <MenuItem value="ankara">Ankara</MenuItem>
                </Select>
            </FormControl>


            <Box
                sx={{
                    p: 3,
                    pt: 5,
                    boxShadow: 6,
                }}
            >

                {
                    loading ? (
                        <Stack p={5} alignItems="center" justifyContent="center">
                            <CircularProgress color="secondary" />
                        </Stack>
                    ) : (
                        <Stack>

                            <Stack>
                                <Typography>
                                    Hava durumu : {selectedAreaWeatherState?.weather?.[0]?.main}
                                </Typography>
                                <Typography>
                                    Açıklama : {selectedAreaWeatherState?.weather?.[0]?.description}
                                </Typography>
                                {/* <Typography>
                                    İkon : {parse(`&#${selectedAreaWeatherState?.weather?.[0]?.icon};`)} &#01d;
                                </Typography> */}

                            </Stack>



                            <Typography>
                                Hissedilen : {selectedAreaWeatherState?.main?.feels_like}
                            </Typography>
                            <Typography>
                                Nem : {selectedAreaWeatherState?.main?.humidity}
                            </Typography>
                            <Typography>
                                Basınç : {selectedAreaWeatherState?.main?.pressure}
                            </Typography>
                            <Typography>
                                Sıcaklık : {selectedAreaWeatherState?.main?.temp}
                            </Typography>
                            <Typography>
                                En yüksek sıcaklık : {selectedAreaWeatherState?.main?.temp_max}
                            </Typography>
                            <Typography>
                                En düşük sıcaklık : {selectedAreaWeatherState?.main?.temp_min}
                            </Typography>
                        </Stack>
                    )
                }
            </Box>

        </Box>
    )
}

export default Weather