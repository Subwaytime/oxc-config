import { spinner } from "@clack/prompts";
import { green, red } from "yoctocolors";

export async function safeImport<T>(path: string): Promise<T> {
    return (await import(path) as unknown as T);
}

interface Action {
    start: string;
    fail: string;
    success: string;
    fn: () => Promise<boolean | undefined>;
    enabled?: boolean;
}

export async function action(data: Action): Promise<boolean | undefined> {
    const s = spinner();

    s.start(data.start);
    try {
        const result = await data.fn();
        if(result !== undefined && result) {
            s.stop(green(data.success));
        } else {
            s.error(red(data.fail));
        }
        return result;
    } catch(error) {
        s.error(error as string);
    }
}

export async function multiAction(actions: Action[]): Promise<void> {
    for(const a of actions) {
        if(a.enabled === false) {
            continue;
        }

        await action(a);
    }
}
