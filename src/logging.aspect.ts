import { Metadata, beforeMethod, afterMethod } from "aspect.js";

export class LoggingAspect {
    @beforeMethod({
        classNamePattern: /.+/,
        methodNamePattern: /.+/
    })
    logBefore(meta: Metadata) {
        this.dump('BEFORE', meta);
    }

    @afterMethod({
        classNamePattern: /.+/,
        methodNamePattern: /.+/
    })
    logAfter(meta: Metadata) {
        this.dump('AFTER', meta);
    }

    private dump(message: string, meta: Metadata) {
        // this.injector is always null!
        console.log(`${message} ${meta.className}::${meta.method.name}, args=${meta.method.args}, targetObj=`,
            meta.method.context,
            meta);
    }
}
