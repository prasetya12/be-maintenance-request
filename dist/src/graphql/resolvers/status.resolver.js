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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusResolvers = void 0;
// import { statusRepository } from "../../infrastructure/prisma/statusRepo";
const status_usecase_1 = __importDefault(require("../../application/usecase/status.usecase"));
exports.statusResolvers = {
    Query: {
        getstatus: () => __awaiter(void 0, void 0, void 0, function* () { return yield status_usecase_1.default.execute(); }),
    },
    // createStatus: async ({ name }: { name: string }) => 
    //   await CreateStatusUseCase.execute(name),
};
exports.default = exports.statusResolvers;
