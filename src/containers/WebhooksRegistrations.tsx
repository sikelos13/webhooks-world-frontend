import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import toast from 'react-hot-toast';
import AppHeader from '../components/common/AppHeader';
import { Button, Input } from '@material-ui/core';
import { createWebhook, CreateWebhookApiResponse } from '../api/webhooks_registration/createWebhook';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WebhooksDetails from '../components/webhooks_registration/WebhooksDetails';
import AppFooter from '../components/common/AppFooter';

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
        <>
            <Box style={{ backgroundColor: "#cfdce6" }}>
                <Box
                    boxShadow="0 15px 17px 0 rgb(0 0 0 / 16%), 0 15px 17px 0 rgb(0 0 0 / 12%)"
                    border="1px black solid"
                    borderRadius="8px"
                    style={{ backgroundColor: "white" }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    p={2}
                    mt={2}
                >
                    <AppHeader />
                    <Box
                        mt={2}
                        pb={2}
                        display="flex"
                        flexDirection="column"
                        flexWrap="wrap"
                        alignSelf="center"
                        maxWidth="342px"
                        justifyContent="center"
                    >
                        <Input
                            placeholder="Enter your email"
                            value={email}
                            style={{ width: "342px", marginBottom: "20px" }}
                            onChange={handleInputChange}
                        />

                        <Button
                            onClick={handleSave}
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{ maxWidth: "70px", alignSelf: "center"}}
                        >
                            Create
                </Button>
                    </Box>
                    {showCollapsedElement &&
                        <Box display="flex" justifyContent="center">
                            <SnackbarContent message={`Webhook url:  ${webhookUrl}`} style={{ backgroundColor: "#93b59e", width: "fit-content", padding: "16px 16px" }} />
                        </Box>
                    }
                </Box>
                <Box display="flex" justifyContent="center">
                    <WebhooksDetails />
                </Box>
            </Box>
            <AppFooter />
        </>
    );
}

export default WebhooksRegistrations;