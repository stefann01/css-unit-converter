export default class UnitConverter {
  public static pixelsToRem(dfs: number, value: number) {
    return value * dfs;
  }

  public static remToPixels(dfs: number, value: number) {
    //rem = px/dfs
    return value / dfs;
  }
}
