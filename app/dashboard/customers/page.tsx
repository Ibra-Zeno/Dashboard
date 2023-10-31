import Search from "@/app/ui/search";
import Table from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import { fetchCustomersPage } from "@/app/lib/data";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Invoices",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const customers = await fetchCustomersPage();
  return (
    <div className="w-full">
      <Suspense>
        <Table query={query} />
      </Suspense>
    </div>
  );
}
