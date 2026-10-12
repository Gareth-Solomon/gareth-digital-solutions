"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { trackMetaPageViewEvent } from "@/lib/meta-pixel";

export function MetaPageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const didSkipInitialPageView = useRef(false);
  const search = searchParams.toString();

  useEffect(() => {
    if (!didSkipInitialPageView.current) {
      didSkipInitialPageView.current = true;
      return;
    }

    trackMetaPageViewEvent();
  }, [pathname, search]);

  return null;
}
