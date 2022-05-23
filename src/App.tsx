import React, { useState } from "react";
import {
    Box, Button,
    Container,
    createTheme,
    CssBaseline, Dialog, DialogActions, DialogContent, DialogTitle,
    Grid, InputAdornment,
    TextField,
    ThemeProvider,
    Typography,
} from "@mui/material"
import { Copyright } from "./Components/Copyright";
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import NumberFormat from 'react-number-format';
import InboxIcon from '@mui/icons-material/Inbox';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

// @ts-ignore
const NumberFormatCustom = React.forwardRef<NumberFormat, CustomProps>(
    function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumberFormat

                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    });
                }}
                thousandSeparator
                isNumericString
                format="###-########"
                mask="_ "
                allowEmptyFormatting={true}
            />
        );
    },
);



interface respondeData {
    code: string;
    origin: string;
    destination: string;
    piceces: number;
    weight: number;
    flight: string;
    flightDate: Date;
}


function App() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = React.useState<string>('');
    const [respondeModal, setRespondeModal] = useState<respondeData[]>([]);
    const [responde, setResponde] = useState<respondeData[]>(
        [
            {
                code: '93000821111',
                origin: 'MIA',
                destination: 'VVI',
                piceces: 32,
                weight: 497.0,
                flight: 'OB767',
                flightDate: new Date('22/05/2022'),
            },
            {
                code: '93000878850',
                origin: 'MIA',
                destination: 'LPB',
                piceces: 61,
                weight: 789.0,
                flight: 'OB767',
                flightDate: new Date('22/05/2022'),
            },
            {
                code: '93000875534',
                origin: 'MIA',
                destination: 'CBB',
                piceces: 3,
                weight: 270.0,
                flight: 'OB767',
                flightDate: new Date('21/05/2022'),
            },
        ]
    );

    const handleClickOpen = () => {
        setOpen(true);
        const result = responde.filter((obj) => {
            return obj.code === value;
        })
        setRespondeModal(result);
    };

    const handleClose = () => {
        setOpen(false);
        // setValue('');
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    /*const hlanderFiltro = () => {
        const result = employees.filter((obj) => {
            return obj.department === 'accounting';
          });
    }*/

    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}>
                <CssBaseline />
                <CssBaseline />
                <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
                    <Typography variant="h2" component="h1" gutterBottom>
                        STRIKE GROUP
                    </Typography>
                    <Grid container spacing={4} sx={{ mt: 20 }}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{
                                display: 'flex',
                                flexWrap: 'nowrap',
                            }}>
                                <SearchIcon fontSize='large' color="warning" />
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography component="h4" variant="h5" color="text.primary">
                                        TRACK AND TRACE
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Please Enter your 11 Digit Nummber
                                    </Typography>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ flexGrow: 1 }}>
                                <TextField id="code"
                                    variant="filled"
                                    color={'warning'}
                                    size="small"
                                    InputProps={{
                                        style: { fontSize: 28, width: 250 },
                                        disableUnderline: true,
                                        inputComponent: NumberFormatCustom as any,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <InboxIcon fontSize='large' color="warning" />
                                            </InputAdornment>
                                        ),
                                    }}
                                    maxRows={11}
                                    value={value}
                                    onChange={handleChange}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Button variant="text" size="large" color={'warning'}
                                    startIcon={<PublicIcon fontSize='large' color="warning" />}
                                    onClick={handleClickOpen}>
                                    <Typography component="h4" variant="h5" color="text.primary">
                                        LOCATE
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>

                </Container>
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                    }}>
                    <Container maxWidth="lg">
                        <Typography variant="caption">
                            We use cookies to ensure that we give you the best experience on our website. If you
                            continue to use this site we will assume that you are happy with it
                        </Typography>
                        <Copyright />
                    </Container>
                </Box>
                <Dialog
                    open={open}
                    fullWidth
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" sx={{ alignSelf: 'center' }}>
                        {`TRACKING INFORMATION FOR ${value}`}
                    </DialogTitle>
                    <DialogContent>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: 500,
                            width: 500,
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography component="h4" variant="h5" color="text.primary">
                                {`origin: ${respondeModal[0]?.origin}`}
                            </Typography>
                            <Typography component="h4" variant="h5" color="text.primary">
                                {`destiation: ${respondeModal[0]?.destination}`}
                            </Typography>
                            <Typography component="h4" variant="h5" color="text.primary">
                                {`pieces: ${respondeModal[0]?.piceces}`}
                            </Typography>
                            <Typography component="h4" variant="h5" color="text.primary">
                                {`weight: ${respondeModal[0]?.weight}`}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                shipment rounting
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',

                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                                padding: 5
                            }}>
                                <table width="100%">
                                    <tr>
                                        <td>flight</td>
                                        <td>flightdate</td>
                                        <td>origin</td>
                                        <td>destiation</td>
                                        <td>pieces</td>
                                    </tr>
                                    <tr>
                                        {
                                            respondeModal?.map((data: respondeData, index) => {
                                                let i = index + 1;
                                                return (
                                                    <>
                                                        <td key={i}>{data.flight}</td>
                                                        <td key={i}>{data.flightDate.toDateString()}</td>
                                                        <td key={i}>{data.origin}</td>
                                                        <td key={i}>{data.destination}</td>
                                                        <td key={i}>{data.piceces}</td>
                                                    </>
                                                )
                                            })
                                        }
                                    </tr>
                                </table>
                            </Box>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="warning">Close</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </ThemeProvider>
    )
}

export default App
