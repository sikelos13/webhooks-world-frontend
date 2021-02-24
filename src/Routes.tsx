import WebhooksRegistrations from './containers/WebhooksRegistrations';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route } from "react-router-dom";

export function Routes () {
    return (
        <Container className="Main_Container">                     
                <Route exact path={["/register", "/"]} component={WebhooksRegistrations} />
        </Container>
    );
}