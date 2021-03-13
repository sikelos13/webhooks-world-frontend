import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const WebhooksDetails  = () => (
  <Box maxWidth="650px" p="50px 10px 10px 0">
      <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ab quos. 
        </Typography>
        <Box display="flex">
        <Typography variant="body2" component="p" style={{ textAlign: "justify", padding: "10px"}}>
        Modi vitae delectus ducimus non minus 
        earum expedita molestiae perspiciatis quos, libero, eius voluptatum, deserunt cum ad provident sequi!
          <br />
        </Typography>
        <Typography variant="body2" component="p" style={{ textAlign: "justify", padding: "10px"}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Voluptas totam quia excepturi sunt nulla quod voluptate ex possimus. Blanditiis similique alias est cum culpa! Nulla, facilis blanditiis? Aspernatur, aliquid quam.
          <br />
        </Typography>
        </Box>
      </CardContent>
    </Card>
  </Box>
);

export default WebhooksDetails;