import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { AttachmentsMemoryPersistence } from 'service-attachments-node';
import { AttachmentsController } from 'service-attachments-node';
import { AttachmentsDirectClientV1 } from '../../src/version1/AttachmentsDirectClientV1';
import { AttachmentsClientFixtureV1 } from './AttachmentsClientFixtureV1';

suite('AttachmentsDirectClientV1', ()=> {
    let client: AttachmentsDirectClientV1;
    let fixture: AttachmentsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new AttachmentsMemoryPersistence();
        let controller = new AttachmentsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-attachments', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-attachments', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new AttachmentsDirectClientV1();
        client.setReferences(references);

        fixture = new AttachmentsClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
