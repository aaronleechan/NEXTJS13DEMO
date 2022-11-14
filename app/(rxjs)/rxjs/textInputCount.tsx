import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { bind } from "@react-rxjs/core"
import { createSignal } from "@react-rxjs/utils"
import TextFieldComponent from "../../components/common/TextFieldComponent";
import { map } from "rxjs";

const [textChange$,setText] =  createSignal<string>();
const [useText, text$] = bind(textChange$,"");

function TextInputCount() {

    const [useCharCount,charCount$] = bind(text$.pipe(map((v: string) => v.length)));
    const text = useText();
    const count =  useCharCount();

    const renderTextUi = (title: string, inputVariable : any) =>{
        return(
            <Box sx={{
                display: 'flex',
                mt: '2px'
            }}> 
            <Typography
                sx={{
                    color: 'red',
                    fontFamily: 'monospace',
                }}
            >
                {title} : 
            </Typography>
            <Typography>{ inputVariable }</Typography>
            </Box>
        )
    }

  return (
    <Box>
        <TextFieldComponent id={'text'} label={"Text"} name={'text'} value={text} onChange={(v: string)=>setText(v)}/>
        <br/>
            {renderTextUi("React-RXJS createSignal Input",text)}
            {renderTextUi("Character Count",count)}
    </Box>
  )
}

export default TextInputCount;