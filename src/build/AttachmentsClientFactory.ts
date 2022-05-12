import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { AttachmentsNullClientV1 } from '../version1/AttachmentsNullClientV1';
import { AttachmentsDirectClientV1 } from '../version1/AttachmentsDirectClientV1';
import { AttachmentsHttpClientV1 } from '../version1/AttachmentsHttpClientV1';
import { AttachmentsLambdaClientV1 } from '../version1';

export class AttachmentsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-attachments', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-attachments', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-attachments', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-attachments', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('service-attachments', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(AttachmentsClientFactory.NullClientV1Descriptor, AttachmentsNullClientV1);
		this.registerAsType(AttachmentsClientFactory.DirectClientV1Descriptor, AttachmentsDirectClientV1);
		this.registerAsType(AttachmentsClientFactory.HttpClientV1Descriptor, AttachmentsHttpClientV1);
		this.registerAsType(AttachmentsClientFactory.LambdaClientV1Descriptor, AttachmentsLambdaClientV1);
	}
	
}
