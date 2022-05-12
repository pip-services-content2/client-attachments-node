import { ConfigParams } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { ReferenceV1 } from './ReferenceV1';
import { BlobAttachmentV1 } from './BlobAttachmentV1';
import { IAttachmentsClientV1 } from './IAttachmentsClientV1';

export class AttachmentsHttpClientV1 extends CommandableHttpClient implements IAttachmentsClientV1 {

    constructor(config?: any) {
        super('v1/attachments');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public async getAttachmentById(correlationId: string, id: string): Promise<BlobAttachmentV1> {
        let timing = this.instrument(correlationId, 'attachments.get_attachment_by_id');

        try {
            return await this.callCommand(
                'get_attachment_by_id',
                correlationId,
                {
                    id: id
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
    
    public async addAttachments(correlationId: string, reference: ReferenceV1, ids: string[]): Promise<BlobAttachmentV1[]> {
        let timing = this.instrument(correlationId, 'attachments.add_attachments');

        try {
            return await this.callCommand(
                'add_attachments',
                correlationId,
                {
                    reference: reference,
                    ids: ids
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateAttachments(correlationId: string, reference: ReferenceV1, oldIds: string[], newIds: string[]): Promise<BlobAttachmentV1[]> {
        let timing = this.instrument(correlationId, 'attachments.update_attachments');

        try {
            return await this.callCommand(
                'update_attachments',
                correlationId,
                {
                    reference: reference,
                    old_ids: oldIds,
                    new_ids: newIds
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async removeAttachments(correlationId: string, reference: ReferenceV1, ids: string[]): Promise<BlobAttachmentV1[]> {
        let timing = this.instrument(correlationId, 'attachments.remove_attachments');

        try {
            return await this.callCommand(
                'remove_attachments',
                correlationId,
                {
                    reference: reference,
                    ids: ids
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteAttachmentById(correlationId: string, id: string): Promise<BlobAttachmentV1> {
        let timing = this.instrument(correlationId, 'attachments.delete_attachment_by_id');

        try {
            return await this.callCommand(
                'delete_attachment_by_id',
                correlationId,
                {
                    id: id
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}
