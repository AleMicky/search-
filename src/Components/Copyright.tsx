import { Link, Typography } from "@mui/material"

 
export const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary">
    {'Copyright © '}
    <Link color="inherit"  >
     Demo
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  )
}
