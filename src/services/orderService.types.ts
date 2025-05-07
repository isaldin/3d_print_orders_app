export type CreateOrderPayload = {
    modelId: string,
    contactPhone: string,
    comment: string,
    source?: 'instagram' | 'other',
    status: 'new' | 'paid' | 'in_progress' | 'completed' | 'canceled'
}