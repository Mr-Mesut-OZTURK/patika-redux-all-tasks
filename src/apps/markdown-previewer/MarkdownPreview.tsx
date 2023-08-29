import { Box, Grid, Stack, TextField } from "@mui/material"
import { useEffect, useRef } from "react"
import { BackButton } from "src/components"
import ReactMarkdown from 'react-markdown'
import { useAppDispatch, useAppSelector } from "src/redux/hooks"
import { setText } from "src/redux/slices/markdownPreviewerSlice"



const MarkdownPreview = () => {

    const dispatch = useAppDispatch()
    const { text } = useAppSelector(state => state.markdownPreviewer)
    const outputRef = useRef<HTMLHeadingElement>(null)

    const scrollToBottom = () => {
        // inputRef.current?.scrollIntoView({ behavior: "smooth" })
        outputRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, []);

    const handleSetText = (e: string) => {
        dispatch(setText(e))
    }

    return (
        <Box sx={{ position: 'relative', backgroundColor: '#ffc93c', p: 3, pt: '90px', borderRadius: 1, }} boxShadow={10}>

            <BackButton style={{ top: 25, left: 25 }} />

            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        // label="Multiline"
                        multiline
                        minRows={4}
                        maxRows={20}
                        // defaultValue="Default Value"
                        sx={{
                            boxShadow: 5,
                            borderRadius: 1,
                            // border: '1px solid #ccc',
                            bgcolor: '#ff9a3c',
                            '& *': {
                                outline: 'none',
                                border: 'none',
                            }
                        }}

                        value={text}
                        onChange={(e) => handleSetText(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Stack
                        sx={{
                            // border: '1px solid #ccc',
                            height: '100%',
                            borderRadius: 1,
                            bgcolor: '#ff9a3c',
                            boxShadow: 5,
                            p: 2
                        }}
                    >
                        <ReactMarkdown>{text}</ReactMarkdown>

                        <div ref={outputRef} />
                    </Stack>
                </Grid>

            </Grid>




        </Box>
    )
}

export default MarkdownPreview