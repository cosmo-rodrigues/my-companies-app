export function createSagaAction(type: string) {
  return {
    ACTION: `${type}.ACTION`,
    SUCCESS: `${type}.SUCCESS`,
    FAILED: `${type}.FAILED`
  }
}
