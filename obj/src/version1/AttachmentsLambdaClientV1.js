"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentsLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class AttachmentsLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('attachments');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getAttachmentById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'attachments.get_attachment_by_id');
            try {
                return yield this.callCommand('get_attachment_by_id', correlationId, {
                    id: id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    addAttachments(correlationId, reference, ids) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'attachments.add_attachments');
            try {
                return yield this.callCommand('add_attachments', correlationId, {
                    reference: reference,
                    ids: ids
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateAttachments(correlationId, reference, oldIds, newIds) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'attachments.update_attachments');
            try {
                return yield this.callCommand('update_attachments', correlationId, {
                    reference: reference,
                    old_ids: oldIds,
                    new_ids: newIds
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    removeAttachments(correlationId, reference, ids) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'attachments.remove_attachments');
            try {
                return yield this.callCommand('remove_attachments', correlationId, {
                    reference: reference,
                    ids: ids
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteAttachmentById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'attachments.delete_attachment_by_id');
            try {
                return yield this.callCommand('delete_attachment_by_id', correlationId, {
                    id: id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.AttachmentsLambdaClientV1 = AttachmentsLambdaClientV1;
//# sourceMappingURL=AttachmentsLambdaClientV1.js.map