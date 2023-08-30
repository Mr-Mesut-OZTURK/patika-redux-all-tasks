import { Box, Button, IconButton, Menu, MenuItem, Stack, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { BackButton } from "src/components"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useAppSelector } from "src/redux/hooks";
import SyncIcon from '@mui/icons-material/Sync';
import { GeneratedWordType } from "src/redux/slices/typingSpeedSlice";


const TypingSpeed = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { generatedWords } = useAppSelector(state => state.typingSpeed)
    const [typingText, setTypingText] = useState("")
    const [usedWords, setUsedWords] = useState<GeneratedWordType>([])
    const [time, setTime] = useState({
        isStart: false,
        count: 3
    })
    const [showedWords, setShowedWords] = useState({
        start: 0,
        end: 50
    })
    const [selectedWords, setSelectedWords] = useState(generatedWords?.slice(showedWords.start, showedWords.end))

    useEffect(() => {
        setSelectedWords(generatedWords?.slice(showedWords.start, showedWords.end))
    }, [generatedWords, showedWords.end, showedWords.start])


    console.log({ typingText })

    const handleSetTypingText = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (time.count === 0) return alert("Süre doldu!")

        if (!time.isStart && showedWords.start === 1) {
            setTime({ ...time, isStart: true })
        }

        if (e.target.value.split("")?.[e.target.value?.length - 1] === " ") {
            console.log(typingText.slice(0, typingText.length), selectedWords?.[0].word)
            if (typingText.slice(0, typingText.length) === selectedWords?.[0].word) {
                setUsedWords([...usedWords, { ...selectedWords?.[0], status: "success" }])
            } else {
                setUsedWords([...usedWords, { ...selectedWords?.[0], status: "error" }])
            }
            setShowedWords({ start: showedWords.start + 1, end: showedWords.end + 1 })
            setTypingText("")
        } else {
            setTypingText(e.target.value)
        }

        if (!time.isStart) {
            setTime({ ...time, isStart: true })
        }
    }


    useEffect(() => {
        let timer: number | undefined;
        if (time.isStart) {
            timer = setInterval(() => {
                setTime(prevState => ({ ...prevState, count: time.count - 1 }))
            }, 1000)
        }

        if (time.count === 0) {
            clearInterval(timer)
        }

        return () => {
            clearInterval(timer)
        }
    }, [time.count, time.isStart])


    const handleReset = () => {
        setTypingText("")
        setTime({ isStart: false, count: 60 })
    }

    console.log({ usedWords })
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

            <Stack
                spacing={1}
                sx={{
                    bgcolor: '#B8DAFB',
                    p: 1,
                }}
            >

                <Stack direction="row" spacing={1}>
                    <Button variant="contained">
                        Giriş
                    </Button>


                    <Button
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}

                        sx={{
                            width: '80px'
                        }}
                    >
                        TR
                    </Button>

                    <Menu
                        id="demo-customized-menu"
                        MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        sx={{
                            // width: '100%',
                            top: 5,

                            '& > *': {
                                width: '80px',

                            },
                            '& li': {
                                textAlign: 'center',
                                width: '100%',
                                // bgcolor: 'red',
                                mx: 1
                            }
                        }}
                    >

                        <MenuItem onClick={handleClose} disableRipple>
                            TR
                        </MenuItem>

                        <MenuItem onClick={handleClose} disableRipple>
                            EN
                        </MenuItem>

                    </Menu>

                </Stack>

                <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    sx={{
                        p: 1,
                        bgcolor: '#fff'
                    }}
                >
                    {[...usedWords, ...selectedWords]?.map((item, index) => {

                        return (
                            <Typography
                                key={`${item?.id}${index}`}
                                sx={{
                                    color: item.status === "success" ? "green" : item.status === "error" ? "red" : "gray"
                                }}
                            >
                                {item?.word}
                            </Typography>
                        )
                    })}
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                    <TextField
                        fullWidth
                        value={typingText}
                        onChange={handleSetTypingText}
                        sx={{
                            bgcolor: '#fff',
                        }}
                    />
                    <Typography
                        sx={{
                            bgcolor: '#3D4C5C',
                            height: '100%',
                            flex: 1,
                            color: '#fff',
                            p: '15px',
                            borderRadius: 1,
                            alignSelf: 'stretch',
                            display: 'block'

                        }}
                    >
                        {time.count === 60 ? "1:00" : `0:${time.count}`}
                    </Typography>
                    <IconButton
                        onClick={handleReset}
                        sx={{
                            bgcolor: '#428BCA',
                            borderRadius: 1,
                            height: '100%',
                            p: '15px',

                        }}
                    >
                        <SyncIcon />
                    </IconButton>
                </Stack>
            </Stack>

            {
                time.count === 0 && (
                    <Stack
                        sx={{
                            p: 3,
                            boxShadow: 6,
                            my: 5,
                            borderRadius: 1,
                            width: '250px',
                            color: '#000',

                            '& div': {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            },
                            '& span': {
                                color: '#ccc',
                            },
                        }}
                    >
                        <div>
                            <span>Hız :</span> {usedWords.length}
                        </div>

                        <div>
                            <span>Doğruluk :</span> {(((usedWords.filter(word => word.status === "success").length) / usedWords.length) * 100).toLocaleString().slice(0, 2)}%
                        </div>

                        <div>
                            <span>Doğru Kelime :</span> {usedWords.filter(word => word.status === "success").length}
                        </div>

                        <div>
                            <span>Yanlış Kelime :</span> {usedWords.filter(word => word.status === "error").length}
                        </div>

                    </Stack>
                )
            }


        </Box>
    )
}

export default TypingSpeed