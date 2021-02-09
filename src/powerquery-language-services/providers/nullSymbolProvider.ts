// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as PQP from "@microsoft/powerquery-parser";

import { Library } from "..";
import { CompletionItem, Hover, SignatureHelp } from "../commonTypes";
import {
    CompletionItemProviderContext,
    HoverProviderContext,
    ISymbolProvider,
    SignatureProviderContext,
} from "./commonTypes";

export class NullSymbolProvider implements ISymbolProvider {
    public readonly externalTypeResolver: PQP.Language.ExternalType.TExternalTypeResolverFn =
        PQP.Language.ExternalType.noOpExternalTypeResolver;
    public readonly libraryDefinitions: Library.LibraryDefinitions = new Map();

    private static instance: NullSymbolProvider | undefined;

    public static singleton(): NullSymbolProvider {
        if (NullSymbolProvider.instance === undefined) {
            NullSymbolProvider.instance = new NullSymbolProvider();
        }

        return NullSymbolProvider.instance;
    }

    public async getCompletionItems(_context: CompletionItemProviderContext): Promise<ReadonlyArray<CompletionItem>> {
        return [];
    }

    public async getHover(_context: HoverProviderContext): Promise<Hover | null> {
        // tslint:disable-next-line: no-null-keyword
        return null;
    }

    public async getSignatureHelp(_context: SignatureProviderContext): Promise<SignatureHelp | null> {
        // tslint:disable-next-line: no-null-keyword
        return null;
    }

    public includeModules(_modules: ReadonlyArray<string>): void {
        // No impact
    }
}