
// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes


export const runtime = 'edge'

export async function GET() {

  const key = 'my-key';
  const myKv = process.env.MY_KV;
  await myKv.put(key, 'my-value');
  const value = await myKv.get(key);

  // const workerResp = await process.env.MY_WORKER.fetch('http://localhost');
  const workerRespText = '';//await workerResp.text();

  const myDo = process.env.MY_DO;

  const doId = myDo.idFromName('my-do-name');
  const doObj = myDo.get(doId);
  // @ts-ignore
  const doResp = await doObj.fetch(new Request('http://0.0.0.0'));
  // const doResp = await doObj.fetch('http://0.0.0.0');
  const doRespText = await doResp.text();

  return new Response(
    `

      MY_KV[${key}] = ${JSON.stringify(value)}

      MY_VAR = ${process.env.MY_VAR}

      MY_WORKER response = ${JSON.stringify(workerRespText)}

      MY_DO response = ${JSON.stringify(doRespText)}

      MY_D1 typeof exec = ${typeof process.env.MY_D1.exec}

      MY_R2 typeof createMultipartUpload = ${typeof process.env.MY_R2.createMultipartUpload}


    `
  );
}
