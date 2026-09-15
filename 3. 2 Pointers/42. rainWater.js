function trappingRainWater(height) {
  if (!height) {
    return 0;
  }

  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let result = 0;

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      result = result + leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      result = result + rightMax - height[right];
    }
  }

  return result;
}
