import {ComputedRef, Ref, ref, watch} from "vue";
import {Model} from "@/enitities/model";
import {getModelService} from "@/core/di/getContainer";

export const useLoadModel = (modelId: ComputedRef<string | null>) => {
    const status = ref<'loading' | 'ready' | 'not_found' >('loading')
    const model: Ref<Model | null> = ref(null)

    watch(modelId, async (value) => {
        if (!value) {
            status.value = 'not_found'
            return
        }

        status.value = 'loading'

        try {
            model.value = await getModelService().getModelById(value)
        } finally {
            if (model.value) {
                status.value = 'ready'
            } else {
                status.value = 'not_found'
            }
        }
    }, {immediate: true})

    return {
        status,
        model,
    }
}