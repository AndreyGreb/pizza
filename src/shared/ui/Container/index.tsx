import { cn } from "../../lib/utils"

import { ContainerProps } from "./types"

export const Container = ({ className, children }:ContainerProps) => {
  return <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
}
