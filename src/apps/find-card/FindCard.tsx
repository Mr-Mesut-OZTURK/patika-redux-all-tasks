import { Box, Grid, IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import { nanoid } from '@reduxjs/toolkit'

import styles from './Findcard.module.css'


function shuffleArray(preVList: Array<number>) {
    const array = [...preVList]
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Elemanların yerlerini değiştir
    }

    return array.map(item => ({ id: nanoid(), text: item }))
}

interface Myobject {
    text: number,
    id: string
}

const list = [1, 2, 3, 4, 5, 6, 7, 8]

const table: Array<Myobject> = [...shuffleArray(list), ...shuffleArray(list)]

const FindCard = () => {

    const navigate = useNavigate()


    const [flipped, setFlipped] = useState<Array<Myobject>>([])
    const [finded, setFinded] = useState<Array<Myobject>>([])


    useEffect(() => {
        if ((flipped.length === 2) && (flipped[0]?.text === flipped[1].text)) {
            setFinded([...finded, ...flipped])
        }

    }, [flipped])


    const handleFlipCard = (index: number) => {
        if (flipped.length === 2) {
            return setFlipped([])
        }

        setFlipped([...flipped, table[index]])
    }

    // console.log({ flipped, finded })
    return (
        <Box sx={{ position: 'relative' }}>


            <IconButton
                onClick={() => navigate("/tasks")}
                sx={{
                    fontSize: 16,
                    color: '#000',
                    position: 'absolute',
                    left: 0,
                    top: -50
                }}
            >
                <ArrowBackIcon sx={{ fontSize: 22 }} /> Back
            </IconButton>


            {
                table.length !== finded.length ? (
                    <Grid
                        container
                        spacing={3}
                        sx={{
                            maxWidth: '600px',
                            width: '100%',
                            m: 'auto'
                        }}
                    >
                        {
                            table?.map((item, index) => {

                                return (
                                    <Grid item xs={3} key={index}>

                                        <Box
                                            className={
                                                (flipped.find(flip => flip.id === item.id) || finded.find(flip => flip.id === item.id))
                                                    ? (styles.flippedCard)
                                                    : styles.card
                                            }
                                            onClick={() => handleFlipCard(index)}
                                            style={{
                                                width: "100px",
                                                height: "150px",
                                                perspective: "1000px",
                                            }}
                                        >
                                            <Box
                                                className={styles.cardInner}
                                                sx={{
                                                    '& > div': {

                                                    }
                                                }}
                                            >

                                                <Box className={styles.cardFront}>
                                                    <h2>Ön Yüz</h2>
                                                </Box>

                                                <Box
                                                    className={styles.cardBack}
                                                    style={{
                                                        backgroundColor: finded.find(find => find.id === item.id) ? "gray" : ""
                                                    }}
                                                >
                                                    <h2>{item.text}</h2>
                                                </Box>

                                            </Box>
                                        </Box>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                ) : (
                    <Box>
                        You win
                    </Box>
                )
            }
        </Box>
    )
}

export default FindCard