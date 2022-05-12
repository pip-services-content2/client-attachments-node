import { DirectClient } from 'pip-services3-rpc-nodex';
import { IAttachmentsClientV1 } from './IAttachmentsClientV1';
import { ReferenceV1 } from './ReferenceV1';
import { BlobAttachmentV1 } from './BlobAttachmentV1';
export declare class AttachmentsDirectClientV1 extends DirectClient<any> implements IAttachmentsClientV1 {
    constructor(config?: any);
    getAttachmentById(correlationId: string, id: string): Promise<BlobAttachmentV1>;
    addAttachments(correlationId: string, reference: ReferenceV1, ids: string[]): Promise<BlobAttachmentV1[]>;
    updateAttachments(correlationId: string, reference: ReferenceV1, oldIds: string[], newIds: string[]): Promise<BlobAttachmentV1[]>;
    removeAttachments(correlationId: string, reference: ReferenceV1, ids: string[]): Promise<BlobAttachmentV1[]>;
    deleteAttachmentById(correlationId: string, id: string): Promise<BlobAttachmentV1>;
}
