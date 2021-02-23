
import axios from 'axios';
import { handleErrorMessage } from '../utils/handleErrorMessage';

export interface CreateWebhookApiResponse {
    success: boolean;
    errorMessage: string;
    status: number
    data: any;
}
/**
 *  Crate new webhook
 *
 * Endpoints:
 * - POST webhooks/new/
 *
 *
 * @returns Promise<CreateWebhookApiResponse>
 */

export const createWebhook = (email_address: string): Promise<CreateWebhookApiResponse> => (
    axios.post(`${process.env.REACT_APP_API_ENDPOINT}webhooks/new/`, JSON.stringify({email: email_address}))
        .then((response: any) => {
            return {
                ...response,
                success: true
            }
        }).catch((error: any) => {
            return {
                ...error,
                success: false,
                errorMessage: handleErrorMessage(error)
            }
        })
);

