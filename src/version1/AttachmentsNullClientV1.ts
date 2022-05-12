import { ReferenceV1 } from './ReferenceV1';
import { BlobAttachmentV1 } from './BlobAttachmentV1';
import { IAttachmentsClientV1 } from './IAttachmentsClientV1';

export class AttachmentsNullClientV1 implements IAttachmentsClientV1 {
    constructor(config?: any) {}

    public async getAttachmentById(correlationId: string, id: string): Promise<BlobAttachmentV1> {
        return null;
    }
    
    public async deleteAttachmentById(correlationId: string, id: string): Promise<BlobAttachmentV1> {
        return null;
    }
    
    public async addAttachments(correlationId: string, reference: ReferenceV1, ids: string[]): Promise<BlobAttachmentV1[]> {
        return [];
    }

    public async updateAttachments(correlationId: string, reference: ReferenceV1, oldIds: string[], newIds: string[]): Promise<BlobAttachmentV1[]> {
        return [];
    }

    public async removeAttachments(correlationId: string, reference: ReferenceV1, ids: string[]): Promise<BlobAttachmentV1[]> {
        return [];
    }
}
