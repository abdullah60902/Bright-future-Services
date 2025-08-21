"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // App Router me router
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function ProgressBar() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    // workaround: route change start/complete
    const originalPush = router.push;
    router.push = async (...args) => {
      handleStart();
      const result = await originalPush(...args);
      handleStop();
      return result;
    };

    return () => { 
      router.push = originalPush;
    };
  }, [router]);

  return null;
}
