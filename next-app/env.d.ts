import type { D1Database, DurableObjectNamespace, Fetcher, KVNamespace, R2Bucket } from '@cloudflare/workers-types';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MY_KV: KVNamespace;
      MY_VAR: string;
      MY_WORKER: Fetcher;
      MY_DO: DurableObjectNamespace;
      MY_D1: D1Database;
      MY_R2: R2Bucket;
    }
  }
}