import style from "./css/style.module.css";

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";

export default function BackToHomepage(){

    return(
        <div>
            <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton aria-label="delete" size="large">
            <Link href="./">
                <ArrowBackIcon style={{
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                    color: '#555a64'
                }}/>
            </Link>
                    <h1 style={{ 
                        fontWeight: 'bold',
                         fontFamily: 'Arial',
                         paddingLeft: '1rem'
                        }}>Back</h1>
            </IconButton>
            </Stack>
        </div>
    );
}