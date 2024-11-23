"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export const TLink = (props: any) => {
  const { children, href, isLangNav, ...linkProps } = props;
  const { lang } = useParams();

  return (
    <Link href={isLangNav ? `${href}` : `/${lang}${href}`} {...linkProps} prefetch={false}>
      {children}
    </Link>
  );
};
