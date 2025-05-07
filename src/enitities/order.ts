export type Order = {
    id: string
    modelId: string
    amount: number
    contactPhone: string
    comment: string
    source: 'instagram' | 'other'
    status: 'new' | 'paid' | 'in_progress' | 'completed' | 'canceled'
}

/*
created_at
updated_at
model_id
phone
comment
quantity
status
*/