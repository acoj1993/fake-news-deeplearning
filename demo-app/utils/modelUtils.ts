import {InferenceSession, Tensor} from 'onnxjs';

export function createSession(session: InferenceSession | undefined, hint: string): boolean {
  if (session) {
    return false;
  }
  session = new InferenceSession({backendHint: hint});
  return true;
}

export async function warmupModel(model: InferenceSession, dims: number[]) {
  // OK. we generate a random input and call Session.run() as a warmup query
  const size = dims.reduce((a, b) => a * b);
  const warmupTensor = new Tensor(new Float32Array(size), 'float32', dims);

  for (let i = 0; i < size; i++) {
    warmupTensor.data[i] = Math.random() * 2.0 - 1.0; // random value [-1.0, 1.0)
  }
  try {
    await model.run([warmupTensor]);
  } catch (e) {
  }

}

export async function runModel(model: InferenceSession, inputData: Tensor): Promise<[Tensor, number]> {
  const start = new Date();
  try {
    const outputData = await model.run([inputData]);
    const end = new Date();
    const inferenceTime = (end.getTime() - start.getTime());
    const output = outputData.values().next().value;

    return [output, inferenceTime];
  } catch (e) {
    throw new Error();
  }
}
