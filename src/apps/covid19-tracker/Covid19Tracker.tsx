import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material"
import { BackButton } from "src/components"
import { useAppDispatch, useAppSelector } from "src/redux/hooks"
import { setCovid19Country } from "src/redux/slices/covid19TrackerSlice"


const information = [
    {
        id: 1,
        name: "infected",
        color: '#5B79FF',
        count: 4181038,
        time: "17-08-2021",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        name: "recovered",
        color: '#7EFB82',
        count: 257343,
        time: "11-09-2021",
        description: "Quam quas veritatis adipisci natus, sunt iusto ex accusamus impedit aut consequatur. "
    },
    {
        id: 3,
        name: "deaths",
        color: '#FB7076',
        count: 670447,
        time: "13-06-2022",
        description: "Quos assumenda nemo maiores quod ullam consectetur exercitationem natus iure."
    },
    {
        id: 4,
        name: "active",
        color: '#F3E778',
        count: 4181038,
        time: "01-01-2021",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
]

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Covid 19 tracker',
        },
    },


};

const labels = ['infected', 'recovered', 'deaths', 'active'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [4181038, 257343, 670447, 4181038],
            backgroundColor: ['rgba(255, 99, 132, 0.5)', "blue", "green", "yellow"],
        },
        // {
        //     label: 'Dataset 2',
        //     data: 500,
        //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // },
    ],
};


const Covid19Tracker = () => {

    const dispatch = useAppDispatch()
    const { covid19Country } = useAppSelector(state => state.covid19Tracker)

    const handleSetCovid19Country = (e: string | number) => {
        console.log(e)
        dispatch(setCovid19Country(e))
    }
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

            <Stack spacing={2} textAlign="center">
                <Typography variant="h3">
                    Covid 19 Tracker
                </Typography>

                <Typography variant="h6">
                    Global and Country Wise Cases of Corona Virus
                </Typography>

                <Typography variant="h6" fontStyle="italic">
                    ( For a Particular select a Country from below )
                </Typography>
            </Stack>

            <Grid container spacing={3} mt={3}>
                {
                    information?.map((item, index) => {

                        return (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Stack
                                    sx={{
                                        bgcolor: item.color + '44',
                                        borderRadius: 1,
                                        p: 2,
                                        pb: 4,
                                        position: 'relative',
                                        overflow: 'hidden',
                                        // flex: 1,
                                        height: '100%',
                                    }}
                                >
                                    <Typography variant="h6">
                                        {item.name}
                                    </Typography>

                                    <Typography variant="h6">
                                        {item.count}
                                    </Typography>

                                    <Typography variant="h6">
                                        Last Updated : {item.time}
                                    </Typography>

                                    <Typography>
                                        {item.description}
                                    </Typography>

                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            bgcolor: item.color,
                                            p: 1,
                                        }}
                                    />
                                </Stack>
                            </Grid>
                        )
                    })
                }
            </Grid>


            <FormControl variant="standard" sx={{ maxWidth: 600, display: 'flex', m: 'auto', my: 5 }} fullWidth>
                <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={covid19Country}
                    onChange={(e) => handleSetCovid19Country(e.target.value)}
                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Usa">Usa</MenuItem>
                    <MenuItem value="Tr">Tr</MenuItem>
                    <MenuItem value="uk">Uk</MenuItem>
                </Select>
            </FormControl>


            <Bar options={options} data={data} />

        </Box>
    )
}

export default Covid19Tracker