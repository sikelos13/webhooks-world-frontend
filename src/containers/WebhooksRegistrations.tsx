import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import toast from 'react-hot-toast';
import AppHeader from '../components/common/AppHeader';
import { Input } from '@material-ui/core';

interface WebhooksRegistrationsState {
    email: string;
}

class WebhooksRegistrations extends Component<{}, WebhooksRegistrationsState> {
    constructor(props: any) {
        super(props)

        this.state = {
            email: ""
        }
    }

    handleInputChange = (event: any) => {
        const { value } = event.target;

        this.setState({
            email: value
        })
    }

    render() {
        const { email } = this.state;

        return (
            <Box
                boxShadow="0 15px 17px 0 rgb(0 0 0 / 16%), 0 15px 17px 0 rgb(0 0 0 / 12%)"
                border="1px black solid"
                borderRadius="8px"
                p={2}
                mt={2}
            >
                <AppHeader />

                <Input 
                    placeholder="Enter your email"
                    value={email}
                    onChange={this.handleInputChange}
                />

                <Box
                    mt={2}
                    pb={2}
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                    justifyContent="space-evenly"
                >
                  Test
                </Box>
            </Box>
        );
    }
}

export default WebhooksRegistrations;