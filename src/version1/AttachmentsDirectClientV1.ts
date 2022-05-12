import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IAttachmentsClientV1 } from './IAttachmentsClientV1';
//import { IAttachmentsController } from 'service-attachments-node';
import { ReferenceV1 } from './ReferenceV1';
import { BlobAttachmentV1 } from './BlobAttachmentV1';

export class AttachmentsDirectClientV1 extends DirectClient<any> implements IAttachmentsClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-attachments", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getAttachmentById(correlationId: string, id: string): Promise<BlobAttachmentV1> {
        let timing = this.instrument(correlationId, 'attachments.get_attachment_by_id');

        try {
            return await this._controller.getAttachmentById(correlationId, id);
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
            return await this._controller.addAttachments(correlationId, reference, ids);
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
            return await this._controller.updateAttachments(correlationId, reference, oldIds, newIds);
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
            return await this._controller.removeAttachments(correlationId, reference, ids);
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
            return await this._controller.deleteAttachmentById(correlationId, id);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}