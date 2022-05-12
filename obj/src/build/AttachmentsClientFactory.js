"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const AttachmentsNullClientV1_1 = require("../version1/AttachmentsNullClientV1");
const AttachmentsDirectClientV1_1 = require("../version1/AttachmentsDirectClientV1");
const AttachmentsHttpClientV1_1 = require("../version1/AttachmentsHttpClientV1");
const version1_1 = require("../version1");
class AttachmentsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(AttachmentsClientFactory.NullClientV1Descriptor, AttachmentsNullClientV1_1.AttachmentsNullClientV1);
        this.registerAsType(AttachmentsClientFactory.DirectClientV1Descriptor, AttachmentsDirectClientV1_1.AttachmentsDirectClientV1);
        this.registerAsType(AttachmentsClientFactory.HttpClientV1Descriptor, AttachmentsHttpClientV1_1.AttachmentsHttpClientV1);
        this.registerAsType(AttachmentsClientFactory.LambdaClientV1Descriptor, version1_1.AttachmentsLambdaClientV1);
    }
}
exports.AttachmentsClientFactory = AttachmentsClientFactory;
AttachmentsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-attachments', 'factory', 'default', 'default', '1.0');
AttachmentsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-attachments', 'client', 'null', 'default', '1.0');
AttachmentsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-attachments', 'client', 'direct', 'default', '1.0');
AttachmentsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-attachments', 'client', 'http', 'default', '1.0');
AttachmentsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-attachments', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=AttachmentsClientFactory.js.map