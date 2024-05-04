import { ExpressContext } from "@/server";
import { initTRPC } from "@trpc/server";

const t = initTRPC.context<ExpressContext>().create()
const middleware = t.middleware
const isAuth = middleware(async ()=>{

})
export const router  = t.router
export const publicProcedure = t.procedure

//9:20:50