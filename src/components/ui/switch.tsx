"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/constants/filters/shadcn"
import { GlobalContext } from "@/contexts/GlobalContext";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {

  const global = React.useContext(GlobalContext);

  function handleThemeChange() {
    global.setThemeMode(prev => {
      if (prev === "designMode") return "devMode";

      return "designMode";
    });
  }

  return (

    <SwitchPrimitives.Root
      onClick={handleThemeChange}
      className={cn(
        "peer inline-flex h-[44px] w-[86px] shrink-0 cursor-pointer items-center rounded-full border border-r-text transition-colors td-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block size-[36px] rounded-full bg-r-text shadow-lg ring-0 td-150 data-[state=checked]:translate-x-[45px] data-[state=unchecked]:translate-x-[3px]"
        )}
      />
    </SwitchPrimitives.Root>
  )}
  
);
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
