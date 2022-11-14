import { Box, TextField } from '@mui/material';


interface TextField {

    /*Required List*/
    id: string,
    label: string,
    name: string,
    value: string,

    /*Option List*/
    autoComplete?: string,
    color?: any,
    type?: string,
    variant?: variantFields,

    onChange(fieldName?: string): void,
}

type variantFields = 'standard' | 'filled' | 'outlined' | undefined;

const TextFieldComponent: React.FC<TextField> = ({
    id,label,variant,color,name,value,type,autoComplete,onChange
}) =>{
    return(
        <Box sx={{ mb: 3 }}>
            <TextField
                fullWidth
                id={id}
                label={label}
                variant={variant || 'standard'}
                color={color}
                name={name}
                value={value}
                onChange={(e)=>onChange(e.target.value)}
                type={type || 'text'}
                autoComplete={autoComplete || 'false'}
            />
        </Box>
    )
}

export default TextFieldComponent;