import React from 'react';
import Box from '@material-ui/core/Box';
import WebHooksLogo from '../../images/webhook-world-logo.png';

interface ViewHeaderProps {
}

const AppHeader: React.FC<ViewHeaderProps> = (({ }: ViewHeaderProps) => (
  <Box display="flex" flexDirection="column" alignItems="center" pb={1}>
      <Box><img src={WebHooksLogo} alt="Webhooks_logo" height="180px" width="200px" /></Box>
      <Box  fontWeight="500" fontSize="1.5rem" color="#334747">Get your free webhook url here:</Box>
  </Box>
));

export default AppHeader;