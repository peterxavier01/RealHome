"use client";

import { useEffect, useState } from "react";

import CreatePropertyModal from "@/app/admin/_components/CreatePropertyModal";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <>
      <CreatePropertyModal />
    </>
  );
}
