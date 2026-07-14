import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type PageHeaderCrumb = {
  label: string;
  href?: string;
};

export function PageHeader({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: PageHeaderCrumb[];
}) {
  return (
    <section className="relative flex min-h-40 w-full items-center overflow-hidden py-8 md:min-h-48 lg:min-h-56">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-4 sm:py-15 md:py-0 px-6 lg:px-8">
        <Breadcrumb>
          <BreadcrumbList className="flex-nowrap gap-2 text-sm">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <BreadcrumbItem key={crumb.label} className="gap-2">
                  {isLast || !crumb.href ? (
                    <BreadcrumbPage className="font-semibold">
                      {crumb.label}
                    </BreadcrumbPage>
                  ) : (
                    <>
                      <BreadcrumbLink
                        render={<Link href={crumb.href} />}
                        className="opacity-70 hover:opacity-100 hover:no-underline"
                      >
                        {crumb.label}
                      </BreadcrumbLink>
                      <BreadcrumbSeparator className="opacity-50 [&>svg]:hidden">
                        /
                      </BreadcrumbSeparator>
                    </>
                  )}
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-left text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
