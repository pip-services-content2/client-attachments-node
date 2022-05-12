import { ReferenceV1 } from './ReferenceV1';
import { BlobAttachmentV1 } from './BlobAttachmentV1';
export interface IAttachmentsClientV1 {
    getAttachmentById(correlationId: string, id: string): Promise<BlobAttachmentV1>;
    addAttachments(correlationId: string, reference: ReferenceV1, ids: string[]): Promise<BlobAttachmentV1[]>;
    updateAttachments(correlationId: string, reference: ReferenceV1, oldIds: string[], newIds: string[]): Promise<BlobAttachmentV1[]>;
    removeAttachments(correlationId: string, reference: ReferenceV1, ids: string[]): Promise<BlobAttachmentV1[]>;
    deleteAttachmentById(correlationId: string, id: string): Promise<BlobAttachmentV1>;
}
