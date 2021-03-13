import { Link } from '@material-ui/core';
import Box from '@material-ui/core/Box';

export const AppFooter  = () => (
  <Box 
    position="fixed" 
    bottom="0" 
    p={1} 
    fontSize="18px" 
    display="flex" 
    justifyContent="center" 
    width="1280px"
>
    <Link href="#" style={{ marginRight: "20px", textDecoration: "unset"}}>
        Api Docs
    </Link>
    <Link href="#" style={{ textDecoration: "unset"}}>
       Terms
    </Link>
  </Box>
);

export default AppFooter;