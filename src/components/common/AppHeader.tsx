import React from 'react';
import Box from '@material-ui/core/Box';

interface ViewHeaderProps {
}

const AppHeader: React.FC<ViewHeaderProps> = (({ }: ViewHeaderProps) => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Box component="h2" fontWeight="500" fontSize="2rem" color="primary.main">Webhooks registrations</Box>
  </Box>
));

export default AppHeader;