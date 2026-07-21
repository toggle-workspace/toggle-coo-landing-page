import { revalidatePath } from "next/cache";

export function revalidateSitePaths(paths: string[]) {
  for (const path of paths) revalidatePath(path);
}
