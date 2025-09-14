import { cookies } from "next/headers";
import { UserType } from "../_types/user";

//Set session cookies
export const setSession = async (user:UserType) => {
     (await cookies()).set("session", JSON.stringify(user), {
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, 
        path:'/'
     });
};

//Get session cookies
export const getSession = async (): Promise<UserType | null> => {
     const session = (await cookies()).get("session")?.value;
     if(!session) return null;
     const user = JSON.parse(session) as UserType;
     return user;
};

//Delete session cookies
export const deleteSession = async () => {
     console.log("cookies deleting start")
     const cookiesStore = await cookies();
     cookiesStore.delete("session"); 
     console.log("cookies deleting end");
};
