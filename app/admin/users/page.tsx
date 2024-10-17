import { DataTable } from "../_components/DataTable";
import { columns } from "../_components/UsersColumns";
import PageHeader from "../_components/PageHeader";

import { getAllUsers } from "@/data/user";

const Users = async () => {
  const users = await getAllUsers();

  return users ? (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <PageHeader title="Users" />

      <DataTable columns={columns} data={users} />
    </main>
  ) : null;
};

export default Users;
