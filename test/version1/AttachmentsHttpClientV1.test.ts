import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { AttachmentsMemoryPersistence } from 'service-attachments-node';
import { AttachmentsController } from 'service-attachments-node';
import { AttachmentsHttpServiceV1 } from 'service-attachments-node';
import { AttachmentsHttpClientV1 } from '../../src/version1/AttachmentsHttpClientV1';
import { AttachmentsClientFixtureV1 } from './AttachmentsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('AttachmentsHttpClientV1', ()=> {
    let service: AttachmentsHttpServiceV1;
    let client: AttachmentsHttpClientV1;
    let fixture: AttachmentsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new AttachmentsMemoryPersistence();
        let controller = new AttachmentsController();

        service = new AttachmentsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-attachments', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-attachments', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-attachments', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new AttachmentsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new AttachmentsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
