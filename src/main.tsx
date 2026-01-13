import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import {createTheme, ThemeProvider} from "@mui/material";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const theme = createTheme({
    palette: {
        primary: {
            main: "#3AB795",
            contrastText: "#fff",
        },
        secondary: {
            main: "#6665DD",
            contrastText: "#fff",
        }
    }
});

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                        <App/>
                </ThemeProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>,
)