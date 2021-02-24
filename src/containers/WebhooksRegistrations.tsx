import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import toast from 'react-hot-toast';
import AppHeader from '../components/common/AppHeader';
import { Button, Input } from '@material-ui/core';
import { createWebhook, CreateWebhookApiResponse } from '../api/webhooks_registration/createWebhook';
import SnackbarContent from '@material-ui/core/SnackbarContent';

function WebhooksRegistrations() {
    const [email, setEmail] = useState("");
    const [showCollapsedElement, setCollapsedElement] = useState(false);
    const [webhookUrl, setWebhookUrl] = useState("");

    const handleInputChange = (event: any) => {
        const { value } = event.target;
        setEmail(value);
    }

    const handleSave = () => {

        if (email !== "") {
            createWebhook(email).then((response: CreateWebhookApiResponse) => {
                if (response.success) {
                    setCollapsedElement(true);
                    setWebhookUrl(response.data.webhook_url);
                    toast.success("Webhook created Successfully", { duration: 4000 });
                } else {
                    toast.error("Something went wrong", { duration: 4000 });
                }
            })
        } else {
            return;
        }
    }

    return (
        <Box
            boxShadow="0 15px 17px 0 rgb(0 0 0 / 16%), 0 15px 17px 0 rgb(0 0 0 / 12%)"
            border="1px black solid"
            borderRadius="8px"
            p={2}
            mt={2}
        >
            <AppHeader />
            <Box
                mt={2}
                pb={2}
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="space-evenly"
            >
                <Input
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleInputChange}
                />

                <Button
                    onClick={handleSave}
                    variant="contained"
                    color="primary"
                    size="small"
                >
                    Save
                </Button>
            </Box>
            {showCollapsedElement &&
                <Box display="flex" justifyContent="center">
                    <SnackbarContent message={`Webhook created for email ${webhookUrl}`} style={{ backgroundColor: "#93b59e", width: "fit-content" }} />
                </Box>
            }
        </Box>
    );
}

export default WebhooksRegistrations;