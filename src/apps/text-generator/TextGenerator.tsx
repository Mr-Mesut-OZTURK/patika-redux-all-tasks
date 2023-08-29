import { Box, Divider, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect } from "react"
import parse from 'html-react-parser';

import { useAppDispatch, useAppSelector } from "src/redux/hooks"
import { setIsHtml, setParagraphs, setParagraphsCount } from "src/redux/slices/textGeneratorSlice"
import { BackButton } from "src/components";

const TextGenerator = () => {

    const dispatch = useAppDispatch()
    const { isHtml, paragrahhsCount, paragraphs } = useAppSelector(state => state.textGenerator)

    useEffect(() => {
        axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${paragrahhsCount}&format=${isHtml ? "html" : "text"}`)
            .then(res => {
                console.log({ res })
                dispatch(setParagraphs(res.data))
            })
            .catch(err => {
                console.log({ err })
            })
    }, [dispatch, isHtml, paragrahhsCount])

    const handleSetParagraphCount = (e: string) => {
        dispatch(setParagraphsCount(Number(e)))
    }

    const handleSetIsHtml = (e: string | number) => {
        dispatch(setIsHtml(Number(e)))
    }

    return (
        <Box sx={{ position: 'relative', pt: '50px' }}>

            <BackButton />

            <Typography variant="h3" >
                React sample text generator app
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Stack direction="row" gap={2}>
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    type="number"
                    value={paragrahhsCount}
                    onChange={(e) => handleSetParagraphCount(e.target.value)}
                />

                <FormControl sx={{ width: 150 }}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        value={isHtml}
                        onChange={(e) => handleSetIsHtml(e.target.value)}
                    >
                        <MenuItem value={1}>Html</MenuItem>
                        <MenuItem value={0}>Text</MenuItem>
                    </Select>
                </FormControl>
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Stack gap={2} sx={{ textIndent: 20, textAlign: "justify" }}>
                {parse(paragraphs)}
            </Stack>
        </Box>
    )
}

export default TextGenerator