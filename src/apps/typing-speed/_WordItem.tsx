import { Typography } from "@mui/material";
import React, { useMemo } from "react";
// import { Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
// import { WordElementProps } from "../@types/wordElement";

import { useAppSelector } from "src/redux/hooks";
// import { useTypeChecker } from "../reducers/typeCheckerReducer";


interface WordElementInterface {
    currentGeneratedWord: {
        id: string | number,
        word: string | number,
    } | null;
    wordOrder: string
}


const WordElement: React.FC<WordElementInterface> = ({ currentGeneratedWord, wordOrder }) => {

    const { generatedWords, typedWord } = useAppSelector(state => state.typingSpeed);

    //   const bgColorModeWhenCurrentWordTyping = useColorModeValue("gray.200", "gray.900")
    //   const bgColorModeWhenIdle = useColorModeValue("white", "black")
    //   const textColorModeWhenIdle = useColorModeValue("black", "white");



    const foundGeneratedWord = generatedWords.find(
        (generatedWord) => generatedWord.id === currentGeneratedWord?.id
    );

    const totalWordCount: number | string = useMemo(() => {
        return generatedWords.filter(
            (generatedWord) => generatedWord.status !== "idle"
        ).length;
    }, [generatedWords]);

    const checkUserIsTypingCorrectly = useMemo(() => {
        return (
            generatedWords[totalWordCount].word.substring(0, typedWord.length) ===
            typedWord.trimEnd()
        );
    }, [generatedWords, totalWordCount, typedWord]);


    const textColor = useMemo(() => {
        if (foundGeneratedWord !== undefined) {
            switch (foundGeneratedWord.status) {
                case "correct":
                    return "green.400";
                case "wrong":
                    return "red.400";
                default:
                    return null;
            }
        }
    }, [foundGeneratedWord]);

    const bgColor = useMemo(() => {


        if (wordOrder === totalWordCount) {
            if (!checkUserIsTypingCorrectly) {
                return "red.500";
            } else {
                if (typedWord.length === 0)
                    return null;
                else return "green.400";
            }
        } else {
            return null;
        }
    }, [wordOrder, totalWordCount, checkUserIsTypingCorrectly, typedWord.length]);

    return (
        <Typography

            //   color={textColor}
            //   bg={bgColor}

            sx={{
                transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
                transitionProperty: "all",
                transitionDuration: ".15s",
                as: "span",
                fontSize: "2xl",
                pt: "5px",
                pb: "5px",
                pl: "10px",
                pr: "10px",
                bgcolor: bgColor,
                color: textColor
            }}
        >
            {currentGeneratedWord?.word}
        </Typography>
    );
};

export default WordElement;