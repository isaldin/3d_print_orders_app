import { firestore } from 'firebase-functions/v2';
import {initializeApp} from 'firebase-admin/app';
import { fetch } from 'undici';

initializeApp();

const TELEGRAM_BOT_TOKEN = process.env.TG_BOT_NOTIFY;
const TELEGRAM_CHAT_ID = process.env.TG_BOT_NOTIFY_CHAT_ID;

export const notifyNewOrder = firestore
    .onDocumentCreated('orders/{orderId}', async (event) => {
        console.log('!!!event', event)

        const orderId = event.params.orderId;

        if (!orderId) {
            console.log('No orderId in params')
            return
        }

        const text = `🆕 Новый заказ!\nID: ${orderId}`;

        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text,
                }),
            });

            if (!res.ok) {
                const errorText = await res.text();
                console.error('Ошибка отправки в Telegram:', errorText);
            } else {
                console.log(`Отправлено: ${orderId}`);
            }
        } catch (error) {
            console.error('Ошибка Telegram запроса:', error);
        }

        return null;
    });