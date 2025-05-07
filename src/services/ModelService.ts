import {inject, injectable} from 'tsyringe'
import {ServiceNames} from "@/core/di/serviceNames";
import {Model} from "@/enitities/model";
import {ModelRepository} from "@/repositories/modelRepository";

@injectable()
export class ModelService {
    constructor(
        @inject(ServiceNames.ModelRepository) private readonly modelRepository: ModelRepository
    ) {}

    async getModelById(id: string): Promise<Model | null> {
        // return {
        //     id: '1',
        //     name: 'Котик (статуэтка)',
        //     price: 4000,
        //     linkToModelPage: 'https://makerworld.com/en/models/1033449-cat-decor-2#profileId-1016760',
        //     photoUrls: [
        //         'https://makerworld.bblmw.com/makerworld/model/US7cfb36b7e049a7/design/2025-01-25_e8d4411d776a3.png',
        //         'https://makerworld.bblmw.com/makerworld/model/USc8c945e326867/design/2025-01-20_845b5adf0f5a9.png',
        //         'https://makerworld.bblmw.com/makerworld/model/USf9de3166bcde4f/design/2024-02-17_0d3a92f5a093a.jpg',
        //     ]
        // } satisfies Model

        return this.modelRepository.getById(id)
    }
}