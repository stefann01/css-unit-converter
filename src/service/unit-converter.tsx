export default class UnitConverter {
  public static pixelsToRem(dfs: number, value: number) {
    return value * dfs;
  }

  public static remToPixels(dfs: number, value: number) {
    //rem = px/dfs
    return value / dfs;
  }

  public static pixelToPoints(pixelValue: number) {
    //1px=0.75pts
    return pixelValue * 1.75;
  }

  public static pointsToPixels(pointValue: number) {
    return pointValue / 1.75;
  }
}
