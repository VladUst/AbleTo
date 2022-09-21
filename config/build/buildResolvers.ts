import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js'], // расширения файлов, которые не надо указывать при импорте
    }
}