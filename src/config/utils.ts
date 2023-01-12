export class Utils {
  public static isNullOrEmpty(value: string): boolean {
    if (
      !value ||
      value === null ||
      value === '' ||
      value.trim().length === 0
    ) {
      return true;
    }

    return false;
  }

  public static toJSON<T>(model: Object | null): T {
    return JSON.parse(JSON.stringify(model)) as T;
  }
}