import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server, Member, Profile } from "@prisma/client";

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};
