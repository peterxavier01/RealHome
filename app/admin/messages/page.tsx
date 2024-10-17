import React from "react";

import { DataTable } from "../_components/DataTable";
import PageHeader from "../_components/PageHeader";
import { columns } from "../_components/MessagesColumns";

import { getAllMessages } from "@/data/messages";

const Messages = async () => {
  const messages = await getAllMessages();

  return messages ? (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <PageHeader title="Messages" />

      <DataTable columns={columns} data={messages} />
    </main>
  ) : null;
};

export default Messages;
