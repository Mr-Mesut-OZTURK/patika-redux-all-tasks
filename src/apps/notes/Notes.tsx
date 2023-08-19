import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { addNote } from 'src/redux/slices/noteSlice'




const Notes = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const [search, setSearch] = useState("")
    const [newNote, setNewNote] = useState("")
    const [color, setColor] = useState("pink")

    const [filteredList, setFilteredList] = useState([{ text: "", color: "" }])
    const { notes } = useAppSelector(state => state.note)

    useEffect(() => setFilteredList(
        notes?.filter(item => item?.text?.includes(search))
    ), [notes, search])



    const handleAddNote = () => {
        dispatch(addNote({
            text: newNote,
            color
        }))
        setNewNote("")
    }

    const handleAddNoteWithEnter = (e: { key: string }) => {
        console.log(e)
        if (e.key !== "Enter") return
        dispatch(addNote({
            text: newNote,
            color
        }))
        setNewNote("")
    }

    console.log({ notes, search, newNote })

    return (
        <Stack direction="column" alignItems="center" spacing={3} sx={{ position: 'relative' }}>

            <IconButton
                onClick={() => navigate("/tasks")}
                sx={{
                    fontSize: 16,
                    color: '#000',
                    position: 'absolute',
                    left: 0,
                    top: 0
                }}
            >
                <ArrowBackIcon sx={{ fontSize: 22 }} /> Back
            </IconButton>

            <Typography variant='h3'>
                Notes App
            </Typography>

            <Box
                sx={{
                    border: '1px solid #333',
                    borderRadius: '50px',
                    overflow: 'hidden',
                    p: 1,

                    '& > input': {
                        outline: 'none'
                    }
                }}
            >
                <input
                    placeholder='Search...'
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        padding: '10px 10px',
                        border: 'none',
                        width: '100%'
                    }}
                />
            </Box>


            <Stack
                sx={{
                    boxShadow: '1px 1px 10px 0px #ccc',
                    p: 4,
                    borderRadius: 1,
                }}
            >
                <Box
                    sx={{
                        // border: '1px solid #333',
                        // borderRadius: '50px',
                        // overflow: 'hidden',
                        p: 1,

                        '& > input': {
                            outline: 'none'
                        }
                    }}
                >
                    <input
                        type="text"
                        placeholder='Enter your note here...'
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        onKeyDown={handleAddNoteWithEnter}
                        style={{
                            padding: '10px 10px',
                            border: 'none',
                            width: '100%'
                        }}
                    />
                </Box>

                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={5}>

                    <Stack direction="row" spacing={1}>
                        {
                            ["pink", "purple", "yellow", "aqua", "green"]?.map((item) => {

                                return (
                                    <Box
                                        onClick={() => setColor(item)}
                                        key={item}
                                        sx={{
                                            borderRadius: '50%',
                                            backgroundColor: item,
                                            p: '3px',
                                            // width: '20px',
                                            // height: '20px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            // content: color === item ? '"v"' : '""'
                                        }}
                                    >

                                        <Box
                                            sx={{
                                                p: 1,
                                                // width: '10px',
                                                // height: '10px',
                                                bgcolor: color === item ? "#fff" : item,
                                                borderRadius: '50%',

                                            }}
                                        />

                                    </Box>
                                )
                            })
                        }
                    </Stack>

                    <Button
                        onClick={handleAddNote}
                        variant='contained'
                        sx={{
                            borderRadius: '50px'
                        }}
                    >
                        ADD
                    </Button>
                </Stack>
            </Stack>

            <Stack spacing={1} direction="row" flexWrap="wrap">

                {
                    filteredList?.map((item) => {

                        return (
                            <Box
                                key={item?.text}
                                sx={{
                                    bgcolor: item.color,
                                    borderRadius: 1,
                                    p: 1,
                                    flex: '200px 1fr'
                                }}
                            >
                                {item.text}
                            </Box>
                        )
                    })
                }
            </Stack>

        </Stack>
    )
}

export default Notes