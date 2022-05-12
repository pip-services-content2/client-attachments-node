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
exports.AttachmentsNullClientV1 = void 0;
class AttachmentsNullClientV1 {
    constructor(config) { }
    getAttachmentById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    deleteAttachmentById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    addAttachments(correlationId, reference, ids) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    updateAttachments(correlationId, reference, oldIds, newIds) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    removeAttachments(correlationId, reference, ids) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
}
exports.AttachmentsNullClientV1 = AttachmentsNullClientV1;
//# sourceMappingURL=AttachmentsNullClientV1.js.map