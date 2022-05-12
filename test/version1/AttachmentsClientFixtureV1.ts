const assert = require('chai').assert;

import { IAttachmentsClientV1 } from '../../src/version1/IAttachmentsClientV1';

export class AttachmentsClientFixtureV1 {
    private _client: IAttachmentsClientV1;
    
    constructor(client: IAttachmentsClientV1) {
        this._client = client;
    }
        
    public async testCrudOperations() {
        // Add attachments
        await this._client.addAttachments(
            null,
            {
                type: 'goal',
                id: '000000000000000000000011',
                name: 'Goal 1'
            },
            ['1', '2']
        );

        // Add other attachments
        await this._client.addAttachments(
            null,
            {
                type: 'goal',
                id: '000000000000000000000012',
                name: 'Goal 2'
            },
            ['2', '3']
        );

        // Check attachments has references
        let item = await this._client.getAttachmentById(null, '2');

        assert.isObject(item);
        assert.lengthOf(item.references, 2);

        // Remove reference
        await this._client.updateAttachments(
            null,
            {
                type: 'goal',
                id: '000000000000000000000011',
                name: null
            },
            ['1', '2'],
            ['1']
        );

        // Remove another reference
        await this._client.removeAttachments(
            null,
            {
                type: 'goal',
                id: '000000000000000000000011',
                name: null
            },
            ['1']
        );

        // Remove attachments
        item = await this._client.deleteAttachmentById(null, '1');

        assert.isNull(item);

        // Try to get deleted attachments
        item = await this._client.getAttachmentById(null, '2');

        assert.isObject(item);
        assert.lengthOf(item.references, 1);

        let reference = item.references[0];
        assert.equal('000000000000000000000012', reference.id);
    }
}
