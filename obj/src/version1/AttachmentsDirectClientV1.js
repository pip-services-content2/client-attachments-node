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
exports.AttachmentsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class AttachmentsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_2.Descriptor("service-attachments", "controller", "*", "*", "*"));
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getAttachmentById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'attachments.get_attachment_by_id');
            try {
                return yield this._controller.getAttachmentById(correlationId, id);
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
                return yield this._controller.addAttachments(correlationId, reference, ids);
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
                return yield this._controller.updateAttachments(correlationId, reference, oldIds, newIds);
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
                return yield this._controller.removeAttachments(correlationId, reference, ids);
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
                return yield this._controller.deleteAttachmentById(correlationId, id);
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
exports.AttachmentsDirectClientV1 = AttachmentsDirectClientV1;
//# sourceMappingURL=AttachmentsDirectClientV1.js.map